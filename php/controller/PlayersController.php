<?php

	class PlayersController extends Controller {
		public $modelName = 'CharactersModel';


		public function recupCharacterDetail(){
			if(isset($_GET['charId'])){
				$charId = $_GET['charId'];

				$myCharacterDetail = [
					'character' => $this->model->find($charId),
					'equipements' => $this->model->findCharacterEquipements($charId),
					'inventory' => $this->model->findCharacterInventory($charId),
					'skills' => $this->model->findCharacterSkills($charId)
				];

				$json = json_encode($myCharacterDetail);

				echo $json;
			}
		}

		public function createCharacter(){
			/*echo $_POST;*/
			if(isset($_POST['character'])
				&& isset($_POST['character']['name'])
				&& isset($_POST['character']['user_id'])
				&& $_POST['character']['user_id']
			){
				$healthMax = $_POST['character']['healthMax'];
				$defense = $_POST['character']['defense'];
				$dodge = $_POST['character']['dodge'];
				$speed = $_POST['character']['speed'];
				$accuracy = $_POST['character']['accuracy'];
				$strength = $_POST['character']['strength'];
				$critical = $_POST['character']['critical'];


				if(
					($healthMax >= 0 && $healthMax <= 35)
					&& ($defense >= 0 && $defense <= 35)
					&& ($dodge >= 0 && $dodge <= 35)
					&& ($speed >= 0 && $speed <= 35)
					&& ($accuracy >= 0 && $accuracy <= 35)
					&& ($strength >= 0 && $strength <= 35)
					&& ($critical >= 0 && $critical <= 35)
					&& ($healthMax + $defense + $dodge + $speed + $accuracy + $strength + $critical == 135)
				){
					$dataCharacter = [
						'name' => $_POST['character']['name'],
						'user_id' => $_POST['character']['user_id'],
						'healthMax' => $_POST['character']['healthMax'],
						'dead' => 0,
						'defense' => $_POST['character']['defense'],
						'dodge' => $_POST['character']['dodge'],
						'speed' => $_POST['character']['speed'],
						'accuracy' => $_POST['character']['accuracy'],
						'strength' => $_POST['character']['strength'],
						'critical' => $_POST['character']['critical'],
						'race' => $_POST['character']['race'],
						'class' => $_POST['character']['class'],
						'exp' => 0,
						'level' => 1,
						'fighting_stance' => 1,
						'nb_finished_dungeon' => 0
					];
					$character_id = $this->model->saveCharacter($dataCharacter);

					$dataCharacterEquipement = [
						'character_id' => $character_id,
						'hand_1_id' => 44,
						'hand_2_id' => 44,
						'armor_head_id' => 1,
						'armor_torso_id' => 2,
						'armor_hands_id' => 3,
						'armor_legs_id' => 4,
						'armor_feet_id' => 5
					];
					$this->model->createCharacterEquipement($dataCharacterEquipement);
					
					echo 'Personnage créé et initialisé.';
				}
			}
		}

		public function deleteCharacter(){
			if(isset($_GET['charId'])){
				$charId = $_GET['charId'];

				$this->model->delete($charId);

				echo 'Suppression du personnage réussie.';
			}
			else{
				echo 'Vous n\'avez pas indiqué le personnage à supprimer.';
			}
		}

		public function saveCharacterEquipements(){
			if (
				(isset($_POST['character_id']))
				&& (isset($_POST['fighting_stance']))
				&& (
					(isset($_POST['hand_1_id']))
					|| (isset($_POST['hand_2_id']))
					|| (isset($_POST['armor_head_id']))
					|| (isset($_POST['armor_torso_id']))
					|| (isset($_POST['armor_hands_id']))
					|| (isset($_POST['armor_legs_id']))
					|| (isset($_POST['armor_feet_id']))
				)
			){
				foreach ($_POST as $key => $value) {
					if($key != 'fighting_stance'){
						$dataCharacterEquipement[$key] = $value;
					}
				}
				var_dump($dataCharacterEquipement);
				$this->model->saveCharacterEquipement($dataCharacterEquipement);
				$verifEquip = $this->model->findCharacterEquipements($dataCharacterEquipement['character_id']);
				var_dump($verifEquip);

				$this->model->saveFightingStance(['character_id' => $_POST['character_id'], 'fighting_stance' => $_POST['fighting_stance']]);
			}
		}

		public function updateItemOfInventory(){
			if (
				isset($_POST['character_id'])
				&& isset($_POST['item_table_name'])
				&& isset($_POST['item_id'])
				&& isset($_POST['item_quantity_modifier'])
			){

				if($_POST['item_quantity_modifier'] != 0){
					echo 'ITEM QUANTITY EST DIFFENRENT DE 0 !!! G FUCKING G : ' . intval($_POST['item_quantity_modifier']);

					$myItem = $this->model->findItemInventory($_POST['character_id'], $_POST['item_table_name'], $_POST['item_id']);
					if(!empty($myItem)){
						$myItem['item_quantity'] = intval($myItem['item_quantity']);
						var_dump($myItem);
						if($_POST['item_quantity_modifier'] < 0){
							if((intval($_POST['item_quantity_modifier']) * -1) >= $myItem['item_quantity']){
								$this->model->deleteItemInventory($myItem);
								echo 'il ne reste plus rien';
							}
							else{
								$myItem['item_quantity'] += intval($_POST['item_quantity_modifier']);
								$this->model->updateItemInventory($myItem);
								echo 'il en reste un peu : ' . $myItem['item_quantity'];
							}
						}
						else{
							$myItem['item_quantity'] += intval($_POST['item_quantity_modifier']);
							$this->model->updateItemInventory($myItem);
							echo 'Maintenant t\'en à plus : ' . $myItem['item_quantity'];
						}
					}
					else{
						if($_POST['item_quantity_modifier'] < 0){
							echo 'C\'est débile... on n\' même pas l\'objet...';
						}
						else{
							$newItem = [
								"character_id" => $_POST['character_id'],
								"item_table_name" => $_POST['item_table_name'],
								"item_id" => $_POST['item_id'],
								"item_quantity" => $_POST['item_quantity_modifier']
							];
							$this->model->addItemInventory($newItem);
							echo 'Voilà, c\'est ajouté !';
						}
					}
				}
				else{
					echo 'ITEM QUANTITY EST EGALE A 0 !!! BOULET';
				}
			}
		}

		public function updateCharacters(){
			if (
				isset($_POST['id'])
				&& (
					isset($_POST['dead'])
					|| isset($_POST['exp'])
					|| isset($_POST['level'])
					|| isset($_POST['healthMax'])
					|| isset($_POST['defense'])
					|| isset($_POST['dodge'])
					|| isset($_POST['speed'])
					|| isset($_POST['accuracy'])
					|| isset($_POST['strength'])
					|| isset($_POST['critical'])
					|| isset($_POST['nb_finished_dungeon'])
				)
			){
				foreach ($_POST as $key => $value) {
					$dataToUpdate[$key] = $value;
				}
				var_dump($dataToUpdate);
				$this->model->saveCharacter($dataToUpdate);
			}
			else{
				echo 'Paramètre(s) manquant(s)';
			}
		}

		public function updateCharacterSkills(){
			if (
				isset($_POST['character_id'])
				&& isset($_POST['skill_id'])
			){
				$data = [
					'character_id' => $_POST['character_id'],
					'skill_id' => $_POST['skill_id']
				];
				$isSkillAlreadyLearn = $this->model->findCharacterSkill($data);
				if(empty($isSkillAlreadyLearn)){
					$this->model->addCharacterSkills($data);
					echo 'Bravo, tu as appris une nouvelle technique / sort';
				}
				else{
					echo 'TU CONNAIS DEJA CE SORT OU CETTE TECHNIQUE !!! TOCARD !!!!';
				}
			}
		}
	}
	
?>
