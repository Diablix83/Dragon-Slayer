<?php

	class MastersController extends Controller {
		public $modelName = 'ItemsModel';

		public function __construct(){
			$this->model = new $this->modelName();
		}


		public function allItems(){
			$donnees = $this->model->all();

			$json = json_encode($donnees);
			echo $json;
		}
	}
	
?>
