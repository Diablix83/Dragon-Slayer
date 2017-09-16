<?php
	require_once('configuration.php');

	$controller_type = 'UsersController';

	if(!empty($_GET['controller'])){
		$controller_type = ucfirst($_GET['controller']) . 'Controller';
	}

	$task = 'login';

	if(!empty($_GET['task'])){ $task = $_GET['task']; }

	$controller = new $controller_type();

	$donnees = $controller->$task();

?>
