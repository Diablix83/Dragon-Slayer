/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function connexionUserTask(e){
 	e.preventDefault();

 	let userEmail = connexionEmailInput.value;
 	let userPassword = connexionPasswordInput.value;

	$.getJSON(`php/askdb.php?controller=users&task=userConnexion&email=${userEmail}&password=${userPassword}`, function(donnees){
		console.log(donnees);

		if(donnees.exist){
			userLog(donnees);
			isUserLog();
		}
		else{
	 		connexionEmailInput.classList.add('warning');
	 		connexionPasswordInput.classList.add('warning');
		}
	});
}

function inscriptionUserTask(e){
 	e.preventDefault();

 	let erreur = false;

 	let data = {
 		email: inscriptionEmailInput.value,
 		pseudo: inscriptionPseudoInput.value,
 		password: inscriptionPasswordInput.value,
 		confirmPassword: inscriptionConfirmPasswordInput.value
 	}

 	console.group('Inscription');

 	if(validateEmail(data.email)){
 		console.log('Email OK');
 		inscriptionEmailInput.classList.add('correct');
 	}
 	else{
 		console.log('Email incorrect');
 		inscriptionEmailInput.classList.add('warning');
 		erreur = true;
 	}


 	if(validatePseudo(data.pseudo)){
 		console.log('Pseudo OK');
 		inscriptionPseudoInput.classList.add('correct');
 	}
 	else{
 		console.log('Pseudo incorrect');
 		inscriptionPseudoInput.classList.add('warning');
 		erreur = true;
 	}


 	if(data.password == data.confirmPassword){
 		console.log('Password OK');
 		inscriptionPasswordInput.classList.add('correct');
 		inscriptionConfirmPasswordInput.classList.add('correct');
 	}
 	else{
 		console.log('Password non confirmé');
 		inscriptionPasswordInput.value  = '';
 		inscriptionPasswordInput.classList.add('warning');
 		inscriptionConfirmPasswordInput.value  = '';
 		inscriptionConfirmPasswordInput.classList.add('warning');

 		erreur = true;
 	}

 	if(erreur){
 		console.log('Putaing de boulet !');
 	}
 	else{
 		console.log('Tout est bon ! :D');
		$.post(`php/askdb.php?controller=users&task=askCreateUser`, data, function(donnees){
				console.log(donnees);
			});
 	}

 	console.groupEnd('Inscription');

}

function validateEmail(userEmail) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(userEmail);
}

function validatePseudo(userPseudo) {
    var re = /^\w{3,255}$/;
    return re.test(userPseudo);
}

function removeWarningOnChange(){
	if(this.classList.contains('warning')){
		this.classList.remove('warning');
	}
	if(this.classList.contains('correct')){
		this.classList.remove('correct');
	}
}

function removeWarningOnChangePassword(){
	if(inscriptionPasswordInput.classList.contains('warning')){
		inscriptionPasswordInput.classList.remove('warning');
	}
	if(inscriptionConfirmPasswordInput.classList.contains('warning')){
		inscriptionConfirmPasswordInput.classList.remove('warning');
	}

	if(inscriptionPasswordInput.classList.contains('correct')){
		inscriptionPasswordInput.classList.remove('correct');
	}
	if(inscriptionConfirmPasswordInput.classList.contains('correct')){
		inscriptionConfirmPasswordInput.classList.remove('correct');
	}

}

function recupAllItems(){
	$.getJSON(`php/askdb.php?controller=masters&task=all`, function(donnees){
		console.log(donnees);
	});
}