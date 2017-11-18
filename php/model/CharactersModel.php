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
			return $request->fetch();
		}

		public function findCharacterInventory($charId){
			$request = $this->db->prepare("SELECT * FROM project001_character_inventories WHERE project001_character_inventories.character_id = :charId");
			$request->execute([
					":charId" => $charId
				]);
			return $request->fetchAll();
		}

		public function findItemInventory($charId, $itemTableName, $itemId){
			$request = $this->db->prepare("SELECT * FROM project001_character_inventories
				WHERE project001_character_inventories.character_id = :charId
					AND project001_character_inventories.item_table_name = :itemTableName
					AND project001_character_inventories.item_id = :itemId"
			);
			$request->execute([
					":charId" => $charId,
					":itemTableName" => $itemTableName,
					":itemId" => $itemId
				]);
			return $request->fetch();
		}

		public function addItemInventory($newItem){
			$request = $this->db->prepare("INSERT INTO project001_character_inventories
				SET project001_character_inventories.character_id = :charId,
					project001_character_inventories.item_table_name = :itemTableName,
					project001_character_inventories.item_id = :itemId,
					project001_character_inventories.item_quantity = :itemQuantity"
			);
			$request->execute([
					":charId" => $newItem['character_id'],
					":itemTableName" => $newItem['item_table_name'],
					":itemId" => $newItem['item_id'],
					":itemQuantity" => $newItem['item_quantity']
				]);
		}

		public function updateItemInventory($myItem){
			$request = $this->db->prepare("UPDATE project001_character_inventories
				SET project001_character_inventories.item_quantity = :itemQuantity
				WHERE project001_character_inventories.character_id = :charId
					AND project001_character_inventories.item_table_name = :itemTableName
					AND project001_character_inventories.item_id = :itemId"
			);
			$request->execute([
					":charId" => $myItem['character_id'],
					":itemTableName" => $myItem['item_table_name'],
					":itemId" => $myItem['item_id'],
					":itemQuantity" => $myItem['item_quantity']
				]);
		}

		public function deleteItemInventory($myItem){
			$request = $this->db->prepare("DELETE FROM project001_character_inventories
				WHERE project001_character_inventories.character_id = :charId
					AND project001_character_inventories.item_table_name = :itemTableName
					AND project001_character_inventories.item_id = :itemId"
			);
			$request->execute([
					":charId" => $myItem['character_id'],
					":itemTableName" => $myItem['item_table_name'],
					":itemId" => $myItem['item_id']
				]);
		}

		public function findCharacterSkills($charId){
			$request = $this->db->prepare("SELECT * FROM project001_character_skills WHERE project001_character_skills.character_id = :charId");
			$request->execute([
					":charId" => $charId
				]);
			return $request->fetchAll();
		}

		public function saveCharacter($data){
			if(!empty($data['id'])){ $sql = "UPDATE $this->table SET "; }
			else{ $sql = "INSERT INTO $this->table SET "; }
			
			$sqlExe = [];

			foreach ($data as $key => $value) {
				if($key != 'id'){
					$sql .= "$key = :$key, ";
				}
				$sqlExe[":$key"] =  $value;
			}

			$sql = substr($sql, 0, strlen($sql)-2);
			if(!empty($data['id'])){ $sql .= " WHERE id = :id"; }

			$request = $this->db->prepare($sql);
			$request->execute($sqlExe);

			return $this->db->lastInsertId();
		}

		public function createCharacterEquipement($data){
			$sql = "INSERT INTO project001_character_equipements SET "; 
			
			$sqlExe = [];

			foreach ($data as $key => $value) {
				$sql .= "$key = :$key, ";
				$sqlExe[":$key"] =  $value;
			}

			$sql = substr($sql, 0, strlen($sql)-2);

			$request = $this->db->prepare($sql);
			$request->execute($sqlExe);
		}

		public function saveCharacterEquipement($data){
			$sql = "UPDATE project001_character_equipements SET ";
			
			$sqlExe = [];

			foreach ($data as $key => $value) {
				if($key != 'character_id'){
					$sql .= "$key = :$key, ";
				}
				$sqlExe[":$key"] =  $value;
			}

			$sql = substr($sql, 0, strlen($sql)-2);
			$sql .= " WHERE character_id = :character_id";

			$request = $this->db->prepare($sql);
			$request->execute($sqlExe);
		}

		public function saveFightingStance($data){
			$request = $this->db->prepare("UPDATE project001_characters
				SET project001_characters.fighting_stance = :fightingStance
				WHERE project001_characters.id = :charId"
			);
			$request->execute([
					":charId" => $data['character_id'],
					":fightingStance" => $data['fighting_stance']
				]);
		}

		public function addCharacterSkills($data){
			$request = $this->db->prepare("INSERT INTO project001_character_skills
				SET project001_character_skills.character_id = :charId,
					project001_character_skills.skill_id = :skillId"
			);
			$request->execute([
					":charId" => $data['character_id'],
					":skillId" => $data['skill_id']
				]);
		}

		public function findCharacterSkill($data){
			$request = $this->db->prepare("SELECT project001_character_skills.* 
				FROM project001_character_skills
				WHERE project001_character_skills.character_id = :charId
					AND project001_character_skills.skill_id = :skillId"
			);
			$request->execute([
					":charId" => $data['character_id'],
					":skillId" => $data['skill_id']
				]);
			return $request->fetch();
		}

	}
?>
