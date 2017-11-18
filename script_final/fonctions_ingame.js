/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function characterUnlog(){

		$('#myCharacter').addClass('hideLeft');
		$('#userSession').removeClass('hideLeft');
		$('#fightPanel').addClass('hideRight');
		if(fightDetails.fight){
			dungeonFlee();
		}

		currentCharacter.accuracy = null;
		currentCharacter.class = null;
		currentCharacter.critical = null;
		currentCharacter.dead = null;
		currentCharacter.defense = null;
		currentCharacter.dodge = null;
		currentCharacter.exp = null;
		currentCharacter.healthMax = null;
		currentCharacter.id = null;
		currentCharacter.level = null;
		currentCharacter.name = null;
		currentCharacter.race = null;
		currentCharacter.speed = null;
		currentCharacter.strength = null;
		currentCharacter.user_id = null;

		currentCharacter.equipements.hand_1 = null;
		currentCharacter.equipements.hand_2 = null;
		currentCharacter.equipements.armor_head = null;
		currentCharacter.equipements.armor_torso = null;
		currentCharacter.equipements.armor_hands = null;
		currentCharacter.equipements.armor_legs = null;
		currentCharacter.equipements.armor_feet = null;

		currentCharacter.inventory = null;
		
		currentCharacter.skills = null;
		refreshCharactersList(sessionStorage.getItem('userId'));
		
}

function refreshCharacterDisplay(){

	$('#myCharacter h3').html(currentCharacter.name);
	
	$('#myCharacter h4 span:first-of-type').html(currentCharacter.class.name);
	$('#myCharacter h4 span:nth-of-type(2)').html(currentCharacter.race.name);
	$('#myCharacter div:first-of-type p span').html(currentCharacter.nb_finished_dungeon);

	verifCharacterExpAndLvlAndBonusPoints();
	refreshCharacterExpAndLvlAndBonusPoints();

	refreshCharacterInventory();
}

function verifCompatibilityClass(typeEquip, idEquip){
	// if typeEquip = armors 	-> idEquip = armor_type.id
	// if typeEquip = weapons 	-> idEquip = id
	// if typeEquip = skills 	-> idEquip = skill_type.id
	let resultVerif = false;
	switch (typeEquip) {
		case 'armors':
			if(gameDataLibrary.class_armor_types.find(myArmorType => (myArmorType.class_id == currentCharacter.class.id) && (myArmorType.armor_type_id == idEquip))){
				resultVerif = true;
			}
			break;

		case 'weapons':
			if(gameDataLibrary.class_weapons.find(myWeaponType => (myWeaponType.class_id == currentCharacter.class.id) && (myWeaponType.weapon_id == idEquip))){
				resultVerif = true;
			}
			break;

		case 'skills':
			if(gameDataLibrary.class_skill_types.find(mySkillType => (mySkillType.class_id == currentCharacter.class.id) && (mySkillType.skill_type_id == idEquip))){
				resultVerif = true;
			}
			break;
	}
	return resultVerif;
}

