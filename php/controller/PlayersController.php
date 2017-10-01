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
	}
	
?>
