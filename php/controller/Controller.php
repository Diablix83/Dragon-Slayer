<?php

	abstract class Controller {
		public $model;
		public $modelName;

		public function __construct(){
			$this->model = new $this->modelName();
		}
	}
	
?>
