<?php

	class UsersModel extends Model{

		protected $table = 'project001_users';
		
		
		public function findByEmail($email){
			$request = $this->db->prepare("SELECT * FROM $this->table WHERE $this->table.email = :email");
			$request->execute([
					":email" => $email
				]);
			return $request->fetch();
		}

		public function findByPseudo($pseudo){
			$request = $this->db->prepare("SELECT id, email, pseudo FROM $this->table WHERE $this->table.pseudo = :pseudo");
			$request->execute([
					":pseudo" => $pseudo
				]);
			return $request->fetch();
		}
		
		public function findByUniqueId($uuid){
			$request = $this->db->prepare("SELECT activated, uuid FROM $this->table WHERE $this->table.uuid = :uuid");
			$request->execute([
					":uuid" => $uuid
				]);
			return $request->fetch();
		}
		
		public function activateUser($uuid){
			$request = $this->db->prepare("UPDATE $this->table SET activated = 1 WHERE $this->table.uuid = :uuid");
			$request->execute([
					":uuid" => $uuid
				]);
		}
		
		public function findOldNotActivatedAccount(){
			$request = $this->db->prepare("SELECT *, DATEDIFF(NOW(), date_creation) AS dateDiff
				FROM `project001_users`
				WHERE activated = 0
				AND DATEDIFF(NOW(), date_creation) > 0");
				
			$request->execute();
			return $request->fetch();

		}
		
		public function deleteOldNotActivatedAccount(){
			$request = $this->db->query("DELETE FROM `project001_users`
				WHERE activated = 0
				AND DATEDIFF(NOW(), date_creation) > 0");

		}
		
	}

?>
