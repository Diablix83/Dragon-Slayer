<?php
	session_start();

	require_once('php/controller/Controller.php');
	require_once('php/controller/ErrorController.php');

	$controller_type = 'ErrorController';

	$task = 'error';

	if(!empty($_GET['task'])){
		if($_GET['task'] == 'redirection'){
			$task = $_GET['task'];
		}
	}

	$controller = new $controller_type();

?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/welcome.css">
		<link rel="stylesheet" type="text/css" href="css/character.css">
		<link rel="stylesheet" type="text/css" href="css/battle.css">
		<title>Dragon Slayer</title>
	</head>
	<body>
		<header>
			<h1>Dragon Slayer</h1>
		</header>
		<main>

			<?php $controller->$task(); ?>
			
			<p><a href="page_erreur.php?task=redirection">Retourner sur la page d'accueil du jeu</a></p>

		</main>
	</body>
</html>