<?php

	class PlayersController extends Controller {
		public $modelName = 'CharactersModel';

		public function __construct(){
			$this->model = new $this->modelName();
		}
	}
	
?>
