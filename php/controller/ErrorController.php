<?php

	class ErrorController {
		
		// Ce controller n'agit pas sur la BDD.

		public function error(){
			
			if(!empty($_GET['error']) && $_GET['error'] == 'true' && !empty($_SESSION['error_message'])){
				$message = '<h2>ERREUR :</h2><p>'.$_SESSION['error_message'].'</p>';
			}
			else{
				$message = '<h2>Pas d\'erreur</h2>';
			}

			echo $message;
		}

		public function redirection(){
			$_SESSION = null;
			header('location:index_final.html');
		}
	}
?>
