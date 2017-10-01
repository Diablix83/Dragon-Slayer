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
				recupAllExceptCharacters();
				refreshCharactersList(userId);

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

function recupCharacterDetail(charId){
	$.getJSON(`php/askdb.php?controller=players&task=recupCharacterDetail&charId=${charId}`, function(donnees){
		console.log(donnees);
		currentCharacter.accuracy = donnees.character.accuracy;
		currentCharacter.class = donnees.character.class;
		currentCharacter.critical = donnees.character.critical;
		currentCharacter.dead = donnees.character.dead;
		currentCharacter.defense = donnees.character.defense;
		currentCharacter.dodge = donnees.character.dodge;
		currentCharacter.exp = donnees.character.exp;
		currentCharacter.health = donnees.character.health;
		currentCharacter.healthMax = donnees.character.healthMax;
		currentCharacter.id = donnees.character.id;
		currentCharacter.level = donnees.character.level;
		currentCharacter.name = donnees.character.name;
		currentCharacter.race = donnees.character.race;
		currentCharacter.speed = donnees.character.speed;
		currentCharacter.strength = donnees.character.strength;
		currentCharacter.user_id = donnees.character.user_id;
		currentCharacter.equipements.hand_1 = donnees.equipements;
		currentCharacter.equipements.hand_2 = donnees.equipements;
		currentCharacter.equipements.armor_head = donnees.equipements.armor_head;
		currentCharacter.equipements.armor_torso = donnees.equipements.armor_torso;
		currentCharacter.equipements.armor_hands = donnees.equipements.armor_hands;
		currentCharacter.equipements.armor_legs = donnees.equipements.armor_legs;
		currentCharacter.equipements.armor_feet = donnees.equipements.armor_feet;
		currentCharacter.inventory = donnees.inventory;
		currentCharacter.skills = donnees.skills;
	});
}

function refreshCharactersList(userId){
	$.getJSON(`php/askdb.php?controller=users&task=charactersList&id=${userId}`, function(userCharacters){
		console.log(userCharacters);
		userCharactersList = {
			characterAlive: null,
			characterDead: null
		}
		userCharactersList = {
			characterAlive: userCharacters.filter(character => character.dead == 0),
			characterDead: userCharacters.filter(character => character.dead == 1)
		}
		
		characterAliveNumber.innerHTML = userCharactersList.characterAlive.length;
		userCharactersList.characterAlive.forEach(character => {
			const li = $(`<li data-id="${character.id}">`);
			const charName = $(`<h4>`);
			const charDetail = $(`<p>`);
			charName.html(character.name);
			charDetail.html(`${character.class} ${character.race} ${character.level}`);

			$(li).append(charName, charDetail);
			$('#charactersAlive').append(li);
		})

		characterDeadNumber.innerHTML = userCharactersList.characterDead.length;
		userCharactersList.characterDead.forEach(character => {
			const li = $(`<li data-id="${character.id}">`);
			const charName = $(`<h4>`);
			const charDetail = $(`<p>`);
			charName.html(character.name);
			charDetail.html(`${character.class} ${character.race} ${character.level}`);

			$(li).append(charName, charDetail);
			$('#charactersDead').append(li);
		})
	});
}

/*function addInList(listToAdd, toAdd){

}*/

