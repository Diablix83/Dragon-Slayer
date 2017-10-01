<?php

	class MastersController extends Controller {
		public $modelName = 'ItemsModel';



		public function recupLibrary(){

			$classModel = new ClassModel();
			$damageModel = new DamageModel();
			$enemiesModel = new EnemiesModel();
			$racesModel = new RacesModel();
			$skillsModel = new SkillsModel();

			$myLibrary = [
				'items' 				=> $this->model->all(),
				'armors' 				=> $this->model->allArmors(),
				'armor_types' 			=> $this->model->allArmorTypes(),
				'weapons' 				=> $this->model->allWeapons(),

				'class' 				=> $classModel->all(),
				'class_armor_types' 	=> $classModel->allClassArmorTypes(),
				'class_skill_types' 	=> $classModel->allClassSkillTypes(),
				'class_weapons' 		=> $classModel->allClassWeapons(),

				'damage_types' 			=> $damageModel->all(),
				'weakness' 				=> $damageModel->allWeakness(),

				'enemies' 				=> $enemiesModel->all(),
				'enemy_skills' 			=> $enemiesModel->allEnemySkills(),

				'races' 				=> $racesModel->all(),

				'skills' 				=> $skillsModel->all(),
				'skill_types' 			=> $skillsModel->allSkillTypes()

			];
			
			$json = json_encode($myLibrary);

			echo $json;
		}


		public function allItems(){
			$donnees = $this->model->all();

			$json = json_encode($donnees);
			echo $json;
		}
		
		
		
		public function getOptimalCost(){
			$timeTarget = 0.3;
		    $cost = 9;
		    do {
		        $cost++;
		        $start = microtime(true);
		        password_hash("test", PASSWORD_BCRYPT, ["cost" => $cost]);
		        $end = microtime(true);
		    } while (($end - $start) < $timeTarget);
		    
		    echo $cost;
		    //return $cost;
		}
		
		public function readPassword(){
			$email = 'jeje@caca.com';
			
			$usersModel = new UsersModel();
			$verifPassword = $usersModel->verifPasswordByEmail($email);
			
			var_dump($verifPassword);
		}
	}
	
?>
