<?php

	class UsersController extends Controller {
		public $modelName = 'UsersModel';


		public function verifUserExistByEmail(){
			if(isset($_POST['email'])){
				$email = $_POST['email'];
				$userData = $this->model->findByEmail($email);

				if(!empty($userData)) return true;
				else return false;
			}
		}

		public function verifUserExistByPseudo(){
			if(isset($_POST['pseudo'])){
				$pseudo = $_POST['pseudo'];
				$userData = $this->model->findByPseudo($pseudo);

				if(!empty($userData)) return true;
				else return false;
			}
		}

		public function verifUserExistByEmailJS(){
			if(isset($_POST['email'])){
				$email = $_POST['email'];
				$userData = $this->model->findByEmail($email);

				if(!empty($userData)) echo 'true';
				else echo 'false';
			}
		}

		public function verifUserExistByPseudoJS(){
			if(isset($_POST['pseudo'])){
				$pseudo = $_POST['pseudo'];
				$userData = $this->model->findByPseudo($pseudo);

				if(!empty($userData)) echo 'true';
				else echo 'false';
			}
		}

		public function verifUserEmailAndPseudo(){
			if(isset($_GET['id']) && isset($_GET['email']) && isset($_GET['pseudo'])){
				$id = $_GET['id'];
				$email = $_GET['email'];
				$pseudo = $_GET['pseudo'];
				$userData = $this->model->findByPseudo($pseudo);

				if(!empty($userData) && ($userData['email'] == $email) && ($userData['id'] == $id)){
					echo 'true';
				}
				else echo 'false';
			}
		}


		// pour tester:
		// askdb.php?controller=users&task=validateCreateUser&unique_id=219c188ca9ad6f74fe77458c7a432c7879a6a563
		public function askCreateUser(){

			// Est-ce que tous les champs sont remplis ?
			if(isset($_POST['email']) && isset($_POST['pseudo']) && isset($_POST['password']) && isset($_POST['confirmPassword'])){
				// Est-ce que l'email est déjà utilisé?
				$emailExist = $this->verifUserExistByEmail();
				if(!$emailExist){

					$email = $_POST['email'];
					$pseudo = $_POST['pseudo'];
					$password = $_POST['password'];
					$confirmPassword = $_POST['confirmPassword'];
					
					if($password == $confirmPassword){
						
						$date_creation = date('Y-m-d H:i:s');
						
						$uuid = uniqid().$email.$pseudo;
						$uuidHash = hash('ripemd160', $uuid);
						
						$hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 13]);
					
						$userData = ['email' => $email, 'pseudo' => $pseudo, 'password' => $hash, 'activated' => 0, 'date_creation' => $date_creation, 'uuid' => $uuidHash];
						$request = $this->model->save($userData);
					    
					    
					    
					    // Preparation pour mail
					    $encoding = "utf-8";
		
					    // En-tête du mail
					    $header = "MIME-Version: 1.0 \r\n";
					    $header .= "Content-type: text/html; charset=".$encoding." \r\n";
					    $header .= "From: Alexandre DERAI < no-reply@alex-derai.fr >\r\n";

					    // Sujet du mail
						$subject ='Mail de confirmation pour le jeu Dragon-Slayer';
		
						// Message du mail
						$message = '
							<html>
								<head>
									<title>Calendrier des anniversaires pour Août</title>
								</head>
								<body>
									<p>Ceci est un mail automatique, merci de ne pas y répondre.</p>
									<p>Félicitation, vous venez de vous inscrire au Jeu Dragon-Slayer !</p>
									<p>Pour rappel vous vous êtes inscrit avec le pseudo : '.$pseudo.'.</p>
									<p>Pour valider votre inscription, cliquez sur le lien ci-dessous, ou alors copier le dans la barre d\'adresse de votre navigateur :</p>
									<p><a href="http://alex-derai.fr/dragon_slayer/php/askdb.php?controller=users&task=validateCreateUser&unique_id='.$uuidHash.'">http://alex-derai.fr/dragon_slayer/php/askdb.php?controller=users&task=validateCreateUser&unique_id='.$uuidHash.'</a></p>
									<p>A bientôt sur le Jeu !</p>
								</body>
							</html>
									';
		
					    // Envoyer le mail
					    var_dump($email);
					    echo '<br><br>';
					    var_dump($message);
						mail($email, $subject, $message, $header);
					}
				}
				else{
					$_SESSION['error_message'] = 'Cette adresse mail est déjà utilisé.';
					header('location:../page_erreur.php?task=error&error=true');
				}
			}
			else{
				$_SESSION['error_message'] = 'Veuillez remplir tous les champs.';
				header('location:../page_erreur.php?task=error&error=true');
			}
		}
		
		public function validateCreateUser(){
			if(!empty($_GET['unique_id'])){
				$unique_id = $_GET['unique_id'];
				$requestVerif = $this->model->findByUniqueId($unique_id);
				if($requestVerif != null){
					if($requestVerif['activated'] == 0){
						$requestActivate = $this->model->activateUser($unique_id);
						echo'Compte validé.';
					}
					else if($requestVerif['activated'] == 1){
						echo'Compte déjà validé.';
					}
				}
				else{
					echo'Vous devez créer un compte avant de pouvoir le valider.';
				}
			}
			else{
				echo'Nous n\'avons pas reçu l\'identifiant nécessaire pour activer votre compte.';
			}
		}
		
		public function userConnexionTest(){
			$email = 'cequetuveux@connard.fr';
			$password = '555555';
			$userData = $this->model->findByEmail($email);
			
			//var_dump($verifPassword);
			if(password_verify($password, $userData['password'])){ echo 'OK'; /* return true */ }
			else{ echo 'ERREUR'; /* return false */ }
		}
		
		public function userConnexion(){
			$email = $_GET['email'];
			$password = $_GET['password'];
			$userData = $this->model->findByEmail($email);
			
			//var_dump($verifPassword);
			
			if(password_verify($password, $userData['password'])){
				unset($userData['password'], $userData['activated'], $userData['date_creation'], $userData['uuid']);
				$userData['exist'] = true;
			}
			else{
				$userData['exist'] = false;
			}

			$json = json_encode($userData);
			echo $json;
		}

		public function charactersList(){
			if(isset($_GET['id'])){
				$userId = $_GET['id'];

				$charactersModel = new CharactersModel();

				$userCharacters = $charactersModel->findByUserid($userId);

				$json = json_encode($userCharacters);

				echo $json;
			}
		}
		
	}
?>
