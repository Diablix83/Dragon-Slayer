<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<title>Dragon Slayer</title>
	</head>
	<body>
		<header>
			<h1>Dragon Slayer</h1>
		</header>
		<main>
			<div class="game">
				<div class="welcome flex row">
					<div class='connexion'>
						<form action="php/askdb.php?controller=users&task=userConnexion" method="GET">
							<input type="email" name="email" id="connexion_email" placeholder="Votre email"/>
							<input type="password" name="password" id="connexion_password" placeholder="Mot de passe"/>
							<input type="submit" value="Connexion"/>
						</form>
					</div>
					<div class='inscription'>
						<form action="php/askdb.php?controller=users&task=askCreateUser" method="POST">
							<input type="email" name="email" id="inscription_email" placeholder="Votre email"/>
							<input type="text" name="pseudo" id="inscription_pseudo" placeholder="Pseudo"/>
							<input type="password" name="password" id="inscription_password" placeholder="Mot de passe"/>
							<input type="password" name="confirmPassword" id="inscription_confirm_password" placeholder="Confirmer votre mot de passe"/>
							<input type="submit" value="Inscription"/>
						</form>
					</div>
				</div>
			</div>
		</main>
			
	</body>
</html>