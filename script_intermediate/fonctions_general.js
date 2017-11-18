/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function isUserLog(){
	if(sessionStorage.getItem('userEmail') != undefined && sessionStorage.getItem('userPseudo') != undefined){
		let userId = sessionStorage.getItem('userId');
		let userEmail = sessionStorage.getItem('userEmail');
		let userPseudo = sessionStorage.getItem('userPseudo');

		console.log(userId, userEmail, userPseudo);

		$.getJSON(`php/askdb.php?controller=users&task=verifUserEmailAndPseudo&id=${userId}&email=${userEmail}&pseudo=${userPseudo}`, function(donnees){
			if(donnees == true){
				recupGameLibrary();
				refreshCharactersList(userId);

				userNameh3.innerHTML = userPseudo;
				welcomeDiv.classList.add('hideUp');
				userSessionDiv.classList.remove('hideLeft');
			}
		});
	}
}

function userLog(userData){
	sessionStorage.setItem('userId', userData.id);
	sessionStorage.setItem('userEmail', userData.email);
	sessionStorage.setItem('userPseudo', userData.pseudo);
}

function userUnlog(){
	sessionStorage.removeItem('userId');
	sessionStorage.removeItem('userEmail');
	sessionStorage.removeItem('userPseudo');

	welcomeDiv.classList.remove('hideUp');
	userSessionDiv.classList.add('hideLeft');
}

function recupGameLibrary(){
	$.getJSON(`php/askdb.php?controller=masters&task=recupLibrary`, function(donnees){
		console.log(donnees);
		gameDataLibrary.armors = donnees.armors;
		gameDataLibrary.armor_types = donnees.armor_types;
		gameDataLibrary.class = donnees.class;
		gameDataLibrary.class_armor_types = donnees.class_armor_types;
		gameDataLibrary.class_skill_types = donnees.class_skill_types;
		gameDataLibrary.class_weapons = donnees.class_weapons;
		gameDataLibrary.damage_types = donnees.damage_types;
		gameDataLibrary.enemies = donnees.enemies;
		gameDataLibrary.enemy_skills = donnees.enemy_skills;
		gameDataLibrary.items = donnees.items;
		gameDataLibrary.races = donnees.races;
		gameDataLibrary.skills = donnees.skills;
		gameDataLibrary.skill_types = donnees.skill_types;
		gameDataLibrary.weakness = donnees.weakness;
		gameDataLibrary.weapons = donnees.weapons;
	});
}

function characterLog(charId){
	$.getJSON(`php/askdb.php?controller=players&task=recupCharacterDetail&charId=${charId}`, function(donnees){
		console.log(donnees);
		currentCharacter.accuracy = donnees.character.accuracy;
		currentCharacter.class = Object.assign({}, gameDataLibrary.class.find(oneClass => oneClass.id == donnees.character.class));
		currentCharacter.critical = donnees.character.critical;
		currentCharacter.dead = donnees.character.dead;
		currentCharacter.defense = donnees.character.defense;
		currentCharacter.dodge = donnees.character.dodge;
		currentCharacter.exp = donnees.character.exp;
		currentCharacter.fighting_stance = donnees.character.fighting_stance;
		currentCharacter.health = donnees.character.health;
		currentCharacter.healthMax = donnees.character.healthMax;
		currentCharacter.id = donnees.character.id;
		currentCharacter.level = donnees.character.level;
		currentCharacter.name = donnees.character.name;
		currentCharacter.race = Object.assign({}, gameDataLibrary.races.find(oneRace => oneRace.id == donnees.character.race));
		currentCharacter.speed = donnees.character.speed;
		currentCharacter.strength = donnees.character.strength;
		currentCharacter.user_id = donnees.character.user_id;

		currentCharacter.equipements.hand_1 = Object.assign({}, gameDataLibrary.weapons.find(weapon => weapon.id == donnees.equipements.hand_1_id));
		currentCharacter.equipements.hand_2 = Object.assign({}, gameDataLibrary.weapons.find(weapon => weapon.id == donnees.equipements.hand_2_id));
		currentCharacter.equipements.armor_head = Object.assign({}, gameDataLibrary.armors.find(weapon => weapon.id == donnees.equipements.armor_head_id));
		currentCharacter.equipements.armor_torso = Object.assign({}, gameDataLibrary.armors.find(weapon => weapon.id == donnees.equipements.armor_torso_id));
		currentCharacter.equipements.armor_hands = Object.assign({}, gameDataLibrary.armors.find(weapon => weapon.id == donnees.equipements.armor_hands_id));
		currentCharacter.equipements.armor_legs = Object.assign({}, gameDataLibrary.armors.find(weapon => weapon.id == donnees.equipements.armor_legs_id));
		currentCharacter.equipements.armor_feet = Object.assign({}, gameDataLibrary.armors.find(weapon => weapon.id == donnees.equipements.armor_feet_id));
		/*donnees.equipements.forEach(callbackfn: Function, thisArg?: any)*/
		
		currentCharacter.inventory = donnees.inventory;
		
		currentCharacter.skills = donnees.skills;

		refreshCharacterDisplay();
		$('#userSession').addClass('hideLeft');
		$('#myCharacter').removeClass('hideLeft');

		$('#fightStance label:last-of-type').addClass('notMyClass');
		$('#fightingStance3').prop('disabled', true);

		refreshCharacterInventoryChoosenList('items');
		refreshCharacterEquipements();
		isAmbidexterityAvaibleForClass();
		onLogEquipementAndStance();
		refreshCharacterStats();
	});
}

function deleteCharacter(charId){
	$.get(`php/askdb.php?controller=players&task=deleteCharacter&charId=${charId}`, function(donnees){
		console.log(donnees);
		let user_id = parseInt(sessionStorage.getItem('userId'), 10);
		refreshCharactersList(user_id);
	});
}

function refreshCharactersList(userId){
	$.getJSON(`php/askdb.php?controller=users&task=charactersList&id=${userId}`, function(userCharacters){
		console.groupCollapsed('refreshCharactersList');
		console.log(userCharacters);

		userCharactersList.characterAlive = userCharacters.filter(character => character.dead == 0);
		userCharactersList.characterDead = userCharacters.filter(character => character.dead == 1)
		
		
		characterAliveNumber.innerHTML = userCharactersList.characterAlive.length;
		$('#charactersAlive').html('');
		userCharactersList.characterAlive.forEach(character => {
			const li = $(`<li data-id="${character.id}">`);
			const charName = $(`<h4>`);
			const charDetail = $(`<p>`);
			charName.html(character.name);

			const btnsDiv = $('<div class="flex flexRow spaceBetween">');
			const btnPlay = $('<input type="submit" value="Jouer">')
			const btnDelete = $('<input type="submit" value="Supprimer">')
			$(btnsDiv).append(btnPlay, btnDelete);

			$(btnPlay).on('click', function(){
				// au click :
				//				-> on charge le personnage et on commence a jouer !
				characterLog(character.id);
			});

			$(btnDelete).on('click', function(){
				// au click :
				//				-> on supprime le personnage ! Il ne va pas dans la partie "personnages perdu" !
				deleteCharacter(character.id);
			});


			const myClassName = gameDataLibrary.class.find(oneClass => oneClass.id == character.class).name;
			const myRaceName = gameDataLibrary.races.find(oneRace => oneRace.id == character.race).name;

			const exp_required = Math.round((parseInt(character.level, 10)*10)*Math.exp(parseInt(character.level, 10)+1));
			console.log(exp_required);
			const exp_pourcent = ((parseInt(character.exp, 10)*100)/exp_required).toFixed(2);
			console.log(exp_pourcent);
			charDetail.html(`${myClassName} ${myRaceName} [${character.level} : ${exp_pourcent}%]`);

			$(li).append(charName, charDetail, btnsDiv);

			$(li).on('click', function(){
				// au click :
				//				-> enlever la classe : selectedCharacter de tous les éléments de la liste en cours
				$('#charactersAlive li').removeClass('selectedCharacter');
				//				-> ajouter la classe : selectedCharacter sur l'élément choisi
				$(this).addClass('selectedCharacter');
			});

			$(li).on('dblclick', function(){
				// au double-click :
				//				-> on charge le personnage et on commence a jouer !
				characterLog(character.id);
			});

			$('#charactersAlive').append(li);
		})

		characterDeadNumber.innerHTML = userCharactersList.characterDead.length;
		$('#charactersDead').html('');
		userCharactersList.characterDead.forEach(character => {
			const li = $(`<li data-id="${character.id}">`);
			const charName = $(`<h4>`);
			const charDetail = $(`<p>`);
			charName.html(character.name);
			charDetail.html(`${character.class} ${character.race} ${character.level}`);

			$(li).append(charName, charDetail);
			$('#charactersDead').append(li);
		})
		console.groupEnd('refreshCharactersList');
	});

}


