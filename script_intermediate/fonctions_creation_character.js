/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function reinitCharacterDisplay(){
	$('#newCharName').val('');
	$('#newCharRace').html('');
	$('#newCharClass').html('');
	$('#newCharHealthMax').val(0);
	$('#newCharDefense').val(0);
	$('#newCharDodge').val(0);
	$('#newCharSpeed').val(0);
	$('#newCharAccuracy').val(0);
	$('#newCharStrength').val(0);
	$('#newCharCritical').val(0);
}

function createCharacterDisplay(){
	creationStatPoints = 135;
	reinitCharacterDisplay();
	characterCreationDiv.classList.remove('hideRight');

	gameDataLibrary.races.forEach(myRace => {
		const optionRace = $(`<option>`);
		optionRace.text(myRace.name);
		optionRace.attr({
			'data-health': myRace.health,
			'data-defense': myRace.defense,
			'data-dodge': myRace.dodge,
			'data-speed': myRace.speed,
			'data-accuracy': myRace.accuracy,
			'data-strength': myRace.strength,
			'data-critical': myRace.critical,
			'value': myRace.id
		})

		$('#newCharRace').append(optionRace);
	});

	gameDataLibrary.class.forEach(myClass => {
		const optionClass = $(`<option>`);
		optionClass.text(myClass.name);
		optionClass.attr({
			'data-health': myClass.health,
			'data-defense': myClass.defense,
			'data-dodge': myClass.dodge,
			'data-speed': myClass.speed,
			'data-accuracy': myClass.accuracy,
			'data-strength': myClass.strength,
			'data-critical': myClass.critical,
			'data-dualwielding': myClass.dualwielding,
			'value': myClass.id
		})

		$('#newCharClass').append(optionClass);
	});


	refreshPreview();
}

function cancelCreationCharacter(e){
	e.preventDefault();
	reinitCharacterDisplay();
	characterCreationDiv.classList.add('hideRight');
}

function refreshPreview(){

	// DESCRIPTION RACE
	const myRaceId = parseInt($('#newCharRace option:selected').val(), 10);
	const myRace = gameDataLibrary.races.find(oneRace => oneRace.id == myRaceId);
	$('#descriptionRace').html(myRace.description);

	// DESCRIPTION CLASS
	myClassId = parseInt($('#newCharClass option:selected').val(), 10);
	const myClass = gameDataLibrary.class.find(oneClass => oneClass.id == myClassId);
	$('#descriptionClass').html(myClass.description);

	// EQUIPEMENT CLASS LIST
	$('#armorsClassList').html('');
	const myClassArmorTypes = gameDataLibrary.class_armor_types.filter(myClassArmorType => myClassArmorType.class_id == myClassId);
	myClassArmorTypes.forEach(myClassArmorType => {
		const li = $(`<li>`);
		const myArmorType = gameDataLibrary.armor_types.find(oneArmorType => oneArmorType.id == myClassArmorType.armor_type_id);
		li.text(myArmorType.name);
		$('#armorsClassList').append(li);
	});

	$('#weaponsClassList').html('');
	const myClassWeapons = gameDataLibrary.class_weapons.filter(myClassWeapon => myClassWeapon.class_id == myClassId);
	myClassWeapons.forEach(myClassWeapon => {
		const li = $(`<li>`);
		const myWeapon = gameDataLibrary.weapons.find(oneWeapon => oneWeapon.id == myClassWeapon.weapon_id);
		li.text(myWeapon.name);
		$('#weaponsClassList').append(li);
	});

	$('#skillsClassList').html('');
	const myClassSkillTypes = gameDataLibrary.class_skill_types.filter(myClassSkillType => myClassSkillType.class_id == myClassId);
	myClassSkillTypes.forEach(myClassSkillType => {
		const li = $(`<li>`);
		const mySkillType = gameDataLibrary.skill_types.find(oneSkillType => oneSkillType.id == myClassSkillType.skill_type_id);
		li.text(mySkillType.name);
		$('#skillsClassList').append(li);
	});


	// BONUS RACE
	$('#bonusHealthRace').html($('#newCharRace option:selected').attr('data-health'));
	$('#bonusDefenseRace').html($('#newCharRace option:selected').attr('data-defense'));
	$('#bonusDodgeRace').html($('#newCharRace option:selected').attr('data-dodge'));
	$('#bonusSpeedRace').html($('#newCharRace option:selected').attr('data-speed'));
	$('#bonusAccuracyRace').html($('#newCharRace option:selected').attr('data-accuracy'));
	$('#bonusStrengthRace').html($('#newCharRace option:selected').attr('data-strength'));
	$('#bonusCriticalRace').html($('#newCharRace option:selected').attr('data-critical'));

	// BONUS CLASS
	$('#bonusHealthClass').html($('#newCharClass option:selected').attr('data-health'));
	$('#bonusDefenseClass').html($('#newCharClass option:selected').attr('data-defense'));
	$('#bonusDodgeClass').html($('#newCharClass option:selected').attr('data-dodge'));
	$('#bonusSpeedClass').html($('#newCharClass option:selected').attr('data-speed'));
	$('#bonusAccuracyClass').html($('#newCharClass option:selected').attr('data-accuracy'));
	$('#bonusStrengthClass').html($('#newCharClass option:selected').attr('data-strength'));
	$('#bonusCriticalClass').html($('#newCharClass option:selected').attr('data-critical'));

	// BONUS PERSO
	$('#bonusHealthPerso').html($('#newCharHealthMax').val());
	$('#bonusDefensePerso').html($('#newCharDefense').val());
	$('#bonusDodgePerso').html($('#newCharDodge').val());
	$('#bonusSpeedPerso').html($('#newCharSpeed').val());
	$('#bonusAccuracyPerso').html($('#newCharAccuracy').val());
	$('#bonusStrengthPerso').html($('#newCharStrength').val());
	$('#bonusCriticalPerso').html($('#newCharCritical').val());

	// STATS TOTAL
	$('#totalHealth').html(parseInt($('#bonusHealthRace').html(), 10) + parseInt($('#bonusHealthClass').html(), 10) + parseInt($('#bonusHealthPerso').html(), 10));
	$('#totalDefense').html(parseInt($('#bonusDefenseRace').html(), 10) + parseInt($('#bonusDefenseClass').html(), 10) + parseInt($('#bonusDefensePerso').html(), 10));
	$('#totalDodge').html(parseInt($('#bonusDodgeRace').html(), 10) + parseInt($('#bonusDodgeClass').html(), 10) + parseInt($('#bonusDodgePerso').html(), 10));
	$('#totalSpeed').html(parseInt($('#bonusSpeedRace').html(), 10) + parseInt($('#bonusSpeedClass').html(), 10) + parseInt($('#bonusSpeedPerso').html(), 10));
	$('#totalAccuracy').html(parseInt($('#bonusAccuracyRace').html(), 10) + parseInt($('#bonusAccuracyClass').html(), 10) + parseInt($('#bonusAccuracyPerso').html(), 10));
	$('#totalStrength').html(parseInt($('#bonusStrengthRace').html(), 10) + parseInt($('#bonusStrengthClass').html(), 10) + parseInt($('#bonusStrengthPerso').html(), 10));
	$('#totalCritical').html(parseInt($('#bonusCriticalRace').html(), 10) + parseInt($('#bonusCriticalClass').html(), 10) + parseInt($('#bonusCriticalPerso').html(), 10));

	// CREATION STAT POINT REMAINING
	creationStatPoints = 135 - (parseInt($('#bonusHealthPerso').html(), 10)
							+ parseInt($('#bonusDefensePerso').html(), 10)
							+ parseInt($('#bonusDodgePerso').html(), 10)
							+ parseInt($('#bonusSpeedPerso').html(), 10)
							+ parseInt($('#bonusAccuracyPerso').html(), 10)
							+ parseInt($('#bonusStrengthPerso').html(), 10)
							+ parseInt($('#bonusCriticalPerso').html(), 10)
							);
	
	$('#creationStatPoints').html(creationStatPoints);

	verifStatPoints();

}

function verifStatPoints(){
	if(creationStatPoints == 0){
		$('#newCharHealthMax').attr('max', $('#newCharHealthMax').val());
		$('#newCharDefense').attr('max', $('#newCharDefense').val());
		$('#newCharDodge').attr('max', $('#newCharDodge').val());
		$('#newCharSpeed').attr('max', $('#newCharSpeed').val());
		$('#newCharAccuracy').attr('max', $('#newCharAccuracy').val());
		$('#newCharStrength').attr('max', $('#newCharStrength').val());
		$('#newCharCritical').attr('max', $('#newCharCritical').val());
		document.querySelector('#creation form input[type="submit"]').removeAttribute("disabled");
	}
	else if(creationStatPoints > 0 && creationStatPoints <= 35){
		$('#newCharHealthMax').attr('max', 35);
		$('#newCharDefense').attr('max', 35);
		$('#newCharDodge').attr('max', 35);
		$('#newCharSpeed').attr('max', 35);
		$('#newCharAccuracy').attr('max', 35);
		$('#newCharStrength').attr('max', 35);
		$('#newCharCritical').attr('max', 35);
		document.querySelector('#creation form input[type="submit"]').setAttribute("disabled", "true");
	}
}

function verifStepCreation(){
	const statValue = this.value;
	let newStatValue = (Math.round(statValue/5))*5;
	if(newStatValue > this.max) newStatValue = this.max;
	this.value = newStatValue;
	refreshPreview();
}

function saveCharacter(e){
	e.preventDefault();

	const newCharHealthMax = parseInt($('#newCharHealthMax').val(), 10);
	const newCharDefense = parseInt($('#newCharDefense').val(), 10);
	const newCharDodge = parseInt($('#newCharDodge').val(), 10);
	const newCharSpeed = parseInt($('#newCharSpeed').val(), 10);
	const newCharAccuracy = parseInt($('#newCharAccuracy').val(), 10);
	const newCharStrength = parseInt($('#newCharStrength').val(), 10);
	const newCharCritical = parseInt($('#newCharCritical').val(), 10);
	console.log('avant verif');
	if((newCharHealthMax >= 0 && newCharHealthMax <= 35) && (newCharDefense >= 0 && newCharDefense <= 35) && (newCharDodge >= 0 && newCharDodge <= 35) && (newCharSpeed >= 0 && newCharSpeed <= 35)	&& (newCharAccuracy >= 0 && newCharAccuracy <= 35) && (newCharStrength >= 0 && newCharStrength <= 35) && (newCharCritical >= 0 && newCharCritical <= 35) && (newCharHealthMax + newCharDefense + newCharDodge + newCharSpeed + newCharAccuracy + newCharStrength + newCharCritical == 135)){
		console.log('après verif');
		const data = {
			character:{
				name : $('#newCharName').val(),
				user_id: sessionStorage.getItem('userId'),
				healthMax: newCharHealthMax,
				health: newCharHealthMax,
				defense: newCharDefense,
				dodge: newCharDodge,
				speed: newCharSpeed,
				accuracy: newCharAccuracy,
				strength: newCharStrength,
				critical: newCharCritical,
				race: $('#newCharRace option:selected').val(),
				class: $('#newCharClass option:selected').val()
			}
		};

		console.log(data);


		$.post(`php/askdb.php?controller=players&task=createCharacter`, data, function(donnees){
				console.log(donnees);
				refreshCharactersList(sessionStorage.getItem('userId'));
				characterCreationDiv.classList.add('hideRight');
				reinitCharacterDisplay();
			});
	}

}


