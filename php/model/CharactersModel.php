<?php

	class CharactersModel extends Model{

		protected $table = 'project001_characters';


		public function findByUserid($user_id){
			$request = $this->db->prepare("SELECT id, name, user_id, dead, race, class, exp, level FROM $this->table WHERE $this->table.user_id = :user_id");
			$request->execute([
					":user_id" => $user_id
				]);
			return $request->fetchAll();
		}

		public function findCharacterEquipements($charId){
			$request = $this->db->prepare("SELECT * FROM project001_character_equipements WHERE project001_character_equipements.character_id = :charId");
			$request->execute([
					":charId" => $charId
				]);
			return $request->fetchAll();
		}

		public function findCharacterInventory($charId){
			$request = $this->db->prepare("SELECT * FROM project001_character_inventories WHERE project001_character_inventories.character_id = :charId");
			$request->execute([
					":charId" => $charId
				]);
			return $request->fetchAll();
		}

		public function findCharacterSkills($charId){
			$request = $this->db->prepare("SELECT * FROM project001_character_skills WHERE project001_character_skills.character_id = :charId");
			$request->execute([
					":charId" => $charId
				]);
			return $request->fetchAll();
		}

	}
?>
