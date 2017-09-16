<?php

	class UsersController extends Controller {
		public $modelName = 'UsersModel';

		public function __construct(){
			$this->model = new $this->modelName();
		}
	}
	
?>
