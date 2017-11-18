/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function refreshCharacterStats(){
	$('#characterPv td:nth-of-type(4)').html(currentCharacter.class.health);
	$('#characterPv td:nth-of-type(5)').html(currentCharacter.race.health);
	$('#characterPv td:nth-of-type(6)').html(currentCharacter.healthMax);
	$('#characterPv td:nth-of-type(2)').html(parseInt($('#characterPv td:nth-of-type(4)').html(), 10) + parseInt($('#characterPv td:nth-of-type(5)').html(), 10) + parseInt($('#characterPv td:nth-of-type(6)').html(), 10));

	const armorsDef = parseInt($('#characterHead option:selected').attr('data-defense'), 10) + parseInt($('#characterTorso option:selected').attr('data-defense'), 10) + parseInt($('#characterHands option:selected').attr('data-defense'), 10) + parseInt($('#characterLegs option:selected').attr('data-defense'), 10) + parseInt($('#characterFeet option:selected').attr('data-defense'), 10) + parseInt($('#characterHead option:selected').attr('data-defense'), 10);
	let weaponsDef;
	switch ($('#fightStance input[type="radio"]:checked').val()){
		case '1':
			weaponsDef = parseInt($('#characterHand_1 option:selected').attr('data-defense'), 10);
			break;

		case '2':
			if($('#characterHand_1 option:selected').attr('data-handsnumber') == 3){
				weaponsDef = parseInt($('#characterHand_1 option:selected').attr('data-defense'), 10) * 1.5;
			}
			else{
				weaponsDef = parseInt($('#characterHand_1 option:selected').attr('data-defense'), 10);
			}
			break;

		case '3':
			weaponsDef = Math.round(parseInt($('#characterHand_1 option:selected').attr('data-defense'), 10) * 0.75 + parseInt($('#characterHand_2 option:selected').attr('data-defense'), 10) * 0.5);
			break;
	}
	//const weaponsDef = parseInt($('#characterHand_1 option:selected').attr('data-defense'), 10) + parseInt($('#characterHand_2 option:selected').attr('data-defense'), 10);
	$('#characterDefense .armors').text(armorsDef);
	$('#characterDefense .weapons').text(weaponsDef);
	$('#characterDefense td:nth-of-type(4)').html(currentCharacter.class.defense);
	$('#characterDefense td:nth-of-type(5)').html(currentCharacter.race.defense);
	$('#characterDefense td:nth-of-type(6)').html(currentCharacter.defense);
	$('#characterDefense td:nth-of-type(2)').html(armorsDef + weaponsDef + parseInt($('#characterDefense td:nth-of-type(4)').html(), 10) + parseInt($('#characterDefense td:nth-of-type(5)').html(), 10) + parseInt($('#characterDefense td:nth-of-type(6)').html(), 10));

	const armorsDdg = parseInt($('#characterHead option:selected').attr('data-dodge'), 10) + parseInt($('#characterTorso option:selected').attr('data-dodge'), 10) + parseInt($('#characterHands option:selected').attr('data-dodge'), 10) + parseInt($('#characterLegs option:selected').attr('data-dodge'), 10) + parseInt($('#characterFeet option:selected').attr('data-dodge'), 10) + parseInt($('#characterHead option:selected').attr('data-dodge'), 10);
	let weaponsDdg;
	switch ($('#fightStance input[type="radio"]:checked').val()){
		case '1':
			weaponsDdg = parseInt($('#characterHand_1 option:selected').attr('data-dodge'), 10);
			break;

		case '2':
			if($('#characterHand_1 option:selected').attr('data-handsnumber') == 3){
				weaponsDdg = parseInt($('#characterHand_1 option:selected').attr('data-dodge'), 10) * 1.5;
			}
			else{
				weaponsDdg = parseInt($('#characterHand_1 option:selected').attr('data-dodge'), 10);
			}
			break;

		case '3':
			weaponsDdg = Math.round(parseInt($('#characterHand_1 option:selected').attr('data-dodge'), 10) * 0.75 + parseInt($('#characterHand_2 option:selected').attr('data-dodge'), 10) * 0.5);
			break;
	}
	//const weaponsDdg = parseInt($('#characterHand_1 option:selected').attr('data-dodge'), 10) + parseInt($('#characterHand_2 option:selected').attr('data-dodge'), 10);
	$('#characterDodge .armors').html(armorsDdg);
	$('#characterDodge .weapons').html(weaponsDdg);
	$('#characterDodge td:nth-of-type(4)').html(currentCharacter.class.dodge);
	$('#characterDodge td:nth-of-type(5)').html(currentCharacter.race.dodge);
	$('#characterDodge td:nth-of-type(6)').html(currentCharacter.dodge);
	$('#characterDodge td:nth-of-type(2)').html(armorsDdg + weaponsDdg + parseInt($('#characterDodge td:nth-of-type(4)').html(), 10) + parseInt($('#characterDodge td:nth-of-type(5)').html(), 10) + parseInt($('#characterDodge td:nth-of-type(6)').html(), 10));

	const armorsSpd = parseInt($('#characterHead option:selected').attr('data-speed'), 10) + parseInt($('#characterTorso option:selected').attr('data-speed'), 10) + parseInt($('#characterHands option:selected').attr('data-speed'), 10) + parseInt($('#characterLegs option:selected').attr('data-speed'), 10) + parseInt($('#characterFeet option:selected').attr('data-speed'), 10) + parseInt($('#characterHead option:selected').attr('data-speed'), 10);
	let weaponsSpd;
	switch ($('#fightStance input[type="radio"]:checked').val()){
		case '1':
			weaponsSpd = parseInt($('#characterHand_1 option:selected').attr('data-speed'), 10);
			break;

		case '2':
			if($('#characterHand_1 option:selected').attr('data-handsnumber') == 3){
				weaponsSpd = parseInt($('#characterHand_1 option:selected').attr('data-speed'), 10) * 1.5;
			}
			else{
				weaponsSpd = parseInt($('#characterHand_1 option:selected').attr('data-speed'), 10);
			}
			break;

		case '3':
			weaponsSpd = Math.round(parseInt($('#characterHand_1 option:selected').attr('data-speed'), 10) * 0.75 + parseInt($('#characterHand_2 option:selected').attr('data-speed'), 10) * 0.5);
			break;
	}
	//const weaponsSpd = parseInt($('#characterHand_1 option:selected').attr('data-speed'), 10) + parseInt($('#characterHand_2 option:selected').attr('data-speed'), 10);
	$('#characterSpeed .armors').html(armorsSpd);
	$('#characterSpeed .weapons').html(weaponsSpd);
	$('#characterSpeed td:nth-of-type(4)').html(currentCharacter.class.speed);
	$('#characterSpeed td:nth-of-type(5)').html(currentCharacter.race.speed);
	$('#characterSpeed td:nth-of-type(6)').html(currentCharacter.speed);
	$('#characterSpeed td:nth-of-type(2)').html(armorsSpd + weaponsSpd + parseInt($('#characterSpeed td:nth-of-type(4)').html(), 10) + parseInt($('#characterSpeed td:nth-of-type(5)').html(), 10) + parseInt($('#characterSpeed td:nth-of-type(6)').html(), 10));

	let weaponsAcc;
	switch ($('#fightStance input[type="radio"]:checked').val()){
		case '1':
			weaponsAcc = parseInt($('#characterHand_1 option:selected').attr('data-accuracy'), 10);
			break;

		case '2':
			if($('#characterHand_1 option:selected').attr('data-handsnumber') == 3){
				weaponsAcc = parseInt($('#characterHand_1 option:selected').attr('data-accuracy'), 10) * 1.5;
			}
			else{
				weaponsAcc = parseInt($('#characterHand_1 option:selected').attr('data-accuracy'), 10);
			}
			break;

		case '3':
			weaponsAcc = Math.round(parseInt($('#characterHand_1 option:selected').attr('data-accuracy'), 10) * 0.75 + parseInt($('#characterHand_2 option:selected').attr('data-accuracy'), 10) * 0.5);
			break;
	}
	//const weaponsAcc = parseInt($('#characterHand_1 option:selected').attr('data-accuracy'), 10) + parseInt($('#characterHand_2 option:selected').attr('data-accuracy'), 10);
	$('#characterAccuracy .weapons').html(weaponsAcc);
	$('#characterAccuracy td:nth-of-type(4)').html(currentCharacter.class.accuracy);
	$('#characterAccuracy td:nth-of-type(5)').html(currentCharacter.race.accuracy);
	$('#characterAccuracy td:nth-of-type(6)').html(currentCharacter.accuracy);
	$('#characterAccuracy td:nth-of-type(2)').html(weaponsAcc + parseInt($('#characterAccuracy td:nth-of-type(4)').html(), 10) + parseInt($('#characterAccuracy td:nth-of-type(5)').html(), 10) + parseInt($('#characterAccuracy td:nth-of-type(6)').html(), 10));

	let weaponsStr;
	switch ($('#fightStance input[type="radio"]:checked').val()){
		case '1':
			weaponsStr = parseInt($('#characterHand_1 option:selected').attr('data-strength'), 10);
			break;

		case '2':
			if($('#characterHand_1 option:selected').attr('data-handsnumber') == 3){
				weaponsStr = parseInt($('#characterHand_1 option:selected').attr('data-strength'), 10) * 1.5;
			}
			else{
				weaponsStr = parseInt($('#characterHand_1 option:selected').attr('data-strength'), 10);
			}
			break;

		case '3':
			weaponsStr = Math.round(parseInt($('#characterHand_1 option:selected').attr('data-strength'), 10) * 0.75 + parseInt($('#characterHand_2 option:selected').attr('data-strength'), 10) * 0.5);
			break;
	}
	//const weaponsStr = parseInt($('#characterHand_1 option:selected').attr('data-strength'), 10) + parseInt($('#characterHand_2 option:selected').attr('data-strength'), 10);
	$('#characterStrength .weapons').html(weaponsStr);
	$('#characterStrength td:nth-of-type(4)').html(currentCharacter.class.strength);
	$('#characterStrength td:nth-of-type(5)').html(currentCharacter.race.strength);
	$('#characterStrength td:nth-of-type(6)').html(currentCharacter.strength);
	$('#characterStrength td:nth-of-type(2)').html(weaponsStr + parseInt($('#characterStrength td:nth-of-type(4)').html(), 10) + parseInt($('#characterStrength td:nth-of-type(5)').html(), 10) + parseInt($('#characterStrength td:nth-of-type(6)').html(), 10));

	let weaponsCrt;
	switch ($('#fightStance input[type="radio"]:checked').val()){
		case '1':
			weaponsCrt = parseInt($('#characterHand_1 option:selected').attr('data-critical'), 10);
			break;

		case '2':
			if($('#characterHand_1 option:selected').attr('data-handsnumber') == 3){
				weaponsCrt = parseInt($('#characterHand_1 option:selected').attr('data-critical'), 10) * 1.5;
			}
			else{
				weaponsCrt = parseInt($('#characterHand_1 option:selected').attr('data-critical'), 10);
			}
			break;

		case '3':
			weaponsCrt = Math.round(parseInt($('#characterHand_1 option:selected').attr('data-critical'), 10) * 0.75 + parseInt($('#characterHand_2 option:selected').attr('data-critical'), 10) * 0.5);
			break;
	}
	//const weaponsCrt = parseInt($('#characterHand_1 option:selected').attr('data-critical'), 10) + parseInt($('#characterHand_2 option:selected').attr('data-critical'), 10);
	$('#characterCritical .weapons').html(weaponsCrt);
	$('#characterCritical td:nth-of-type(4)').html(currentCharacter.class.critical);
	$('#characterCritical td:nth-of-type(5)').html(currentCharacter.race.critical);
	$('#characterCritical td:nth-of-type(6)').html(currentCharacter.critical);
	$('#characterCritical td:nth-of-type(2)').html(weaponsCrt + parseInt($('#characterCritical td:nth-of-type(4)').html(), 10) + parseInt($('#characterCritical td:nth-of-type(5)').html(), 10) + parseInt($('#characterCritical td:nth-of-type(6)').html(), 10));
}

// only for display
function refreshCharacterExpAndLvlAndBonusPoints(){
	$('#myCharacter h4 span:nth-of-type(3)').html(currentCharacter.level);

	const exp_required = Math.round((parseInt(currentCharacter.level, 10)*10)*Math.exp(parseInt(currentCharacter.level, 10)+1));
	const exp_pourcent = ((parseInt(currentCharacter.exp, 10)*100)/exp_required).toFixed(2);
	$('#myCharacter h4 span:last-of-type').html(exp_pourcent);
	$('#expBar p span:first-of-type').html(currentCharacter.exp);
	$('#expBar p span:last-of-type').html(exp_required);

	$('#progressionBar').css('width', `${exp_pourcent}%`);
	$('#pointsToDistribute').html(currentCharacter.pointsToDistribute);
	if(currentCharacter.pointsToDistribute > 0){
		$('#attributePointsBtn').attr('disabled', false);
	}
	else{
		$('#attributePointsBtn').attr('disabled', true);
	}
}

// responsible for lvl up
function verifCharacterExpAndLvlAndBonusPoints(){
	// How many Experience required to level up ?
	let exp_required = Math.round((parseInt(currentCharacter.level, 10)*10)*Math.exp(parseInt(currentCharacter.level, 10)+1));

	// How many Experience do the character got ? Is it sufficent to level up ?
	while (currentCharacter.exp >= exp_required){
		currentCharacter.level++;
		currentCharacter.exp -= exp_required;
		
		exp_required = Math.round((parseInt(currentCharacter.level, 10)*10)*Math.exp(parseInt(currentCharacter.level, 10)+1));
		
	}

	const bonusPointAtThisLvl = 120 + (currentCharacter.level * 15);
	const currentPointAttributed = parseInt(currentCharacter.healthMax, 10) + parseInt(currentCharacter.defense, 10) + parseInt(currentCharacter.dodge, 10) + parseInt(currentCharacter.speed, 10) + parseInt(currentCharacter.accuracy, 10) + parseInt(currentCharacter.strength, 10) + parseInt(currentCharacter.critical, 10);
	
	currentCharacter.pointsToDistribute = bonusPointAtThisLvl - currentPointAttributed;

	refreshCharacterExpAndLvlAndBonusPoints();
	verifNbSkillToLearn();
}

function displayAttributeBonusPointsPanel(){
	$('#attributeBonusPointsPanel').removeClass('hideRight');
	$('#attributePointsBtn').attr('disabled', true);

	$('#attributeBonusPointsPanel>p>span').html(currentCharacter.pointsToDistribute);

	$('#attributeBonusPv input[type="number"]').attr({
		'min': currentCharacter.healthMax,
		'max': parseInt(currentCharacter.healthMax, 10) + 15,
		'value': currentCharacter.healthMax
	});
	$('#attributeBonusDefense input[type="number"]').attr({
		'min': currentCharacter.defense,
		'max': parseInt(currentCharacter.defense, 10) + 15,
		'value': currentCharacter.defense
	});
	$('#attributeBonusDodge input[type="number"]').attr({
		'min': currentCharacter.dodge,
		'max': parseInt(currentCharacter.dodge, 10) + 15,
		'value': currentCharacter.dodge
	});
	$('#attributeBonusSpeed input[type="number"]').attr({
		'min': currentCharacter.speed,
		'max': parseInt(currentCharacter.speed, 10) + 15,
		'value': currentCharacter.speed
	});
	$('#attributeBonusAccuracy input[type="number"]').attr({
		'min': currentCharacter.accuracy,
		'max': parseInt(currentCharacter.accuracy, 10) + 15,
		'value': currentCharacter.accuracy
	});
	$('#attributeBonusStrength input[type="number"]').attr({
		'min': currentCharacter.strength,
		'max': parseInt(currentCharacter.strength, 10) + 15,
		'value': currentCharacter.strength
	});
	$('#attributeBonusCritical input[type="number"]').attr({
		'min': currentCharacter.critical,
		'max': parseInt(currentCharacter.critical, 10) + 15,
		'value': currentCharacter.critical
	});
}

function updateDisplayAttributeBonusPointsPanel(){
	const bonusPointAtThisLvl = 120 + (currentCharacter.level * 15);
	const currentPointAttributed = parseInt($('#attributeBonusPv input[type="number"]').val(), 10) + parseInt($('#attributeBonusDefense input[type="number"]').val(), 10) + parseInt($('#attributeBonusDodge input[type="number"]').val(), 10) + parseInt($('#attributeBonusSpeed input[type="number"]').val(), 10) + parseInt($('#attributeBonusAccuracy input[type="number"]').val(), 10) + parseInt($('#attributeBonusStrength input[type="number"]').val(), 10) + parseInt($('#attributeBonusCritical input[type="number"]').val(), 10);

	const pointsLeftToDistribute = bonusPointAtThisLvl - currentPointAttributed;
	$('#attributeBonusPointsPanel>p>span').html(pointsLeftToDistribute);

	if(pointsLeftToDistribute == 0){
		$('#attributeBonusPv input[type="number"]').attr({
			'max': $('#attributeBonusPv input[type="number"]').val()
		});
		$('#attributeBonusDefense input[type="number"]').attr({
			'max': $('#attributeBonusDefense input[type="number"]').val()
		});
		$('#attributeBonusDodge input[type="number"]').attr({
			'max': $('#attributeBonusDodge input[type="number"]').val()
		});
		$('#attributeBonusSpeed input[type="number"]').attr({
			'max': $('#attributeBonusSpeed input[type="number"]').val()
		});
		$('#attributeBonusAccuracy input[type="number"]').attr({
			'max': $('#attributeBonusAccuracy input[type="number"]').val()
		});
		$('#attributeBonusStrength input[type="number"]').attr({
			'max': $('#attributeBonusStrength input[type="number"]').val()
		});
		$('#attributeBonusCritical input[type="number"]').attr({
			'max': $('#attributeBonusCritical input[type="number"]').val()
		});
	}
	else{
		$('#attributeBonusPv input[type="number"]').attr({
			'max': parseInt(currentCharacter.healthMax, 10) + 15
		});
		$('#attributeBonusDefense input[type="number"]').attr({
			'max': parseInt(currentCharacter.defense, 10) + 15
		});
		$('#attributeBonusDodge input[type="number"]').attr({
			'max': parseInt(currentCharacter.dodge, 10) + 15
		});
		$('#attributeBonusSpeed input[type="number"]').attr({
			'max': parseInt(currentCharacter.speed, 10) + 15
		});
		$('#attributeBonusAccuracy input[type="number"]').attr({
			'max': parseInt(currentCharacter.accuracy, 10) + 15
		});
		$('#attributeBonusStrength input[type="number"]').attr({
			'max': parseInt(currentCharacter.strength, 10) + 15
		});
		$('#attributeBonusCritical input[type="number"]').attr({
			'max': parseInt(currentCharacter.critical, 10) + 15
		});
	}

	if(pointsLeftToDistribute < 0){
		$('#validateAttributePointsBtn').attr('disabled', true);
	}
	else{
		$('#validateAttributePointsBtn').attr('disabled', false);
	}
}

function verifAttributePointBonus(){
	const bonusPointAtThisLvl = 120 + (currentCharacter.level * 15);
	const currentPointAttributed = parseInt($('#attributeBonusPv input[type="number"]').val(), 10) + parseInt($('#attributeBonusDefense input[type="number"]').val(), 10) + parseInt($('#attributeBonusDodge input[type="number"]').val(), 10) + parseInt($('#attributeBonusSpeed input[type="number"]').val(), 10) + parseInt($('#attributeBonusAccuracy input[type="number"]').val(), 10) + parseInt($('#attributeBonusStrength input[type="number"]').val(), 10) + parseInt($('#attributeBonusCritical input[type="number"]').val(), 10);

	const pointsLeftToDistribute = bonusPointAtThisLvl - currentPointAttributed;

	if(pointsLeftToDistribute >= 0){
		$('#attributeBonusPointsPanel').addClass('hideRight');
		$('#attributePointsBtn').attr('disabled', false);
		
		let dataToUpdate = {};

		//Why in Javascript and not un JQuery ? Easier to do, what else ?!
		document.querySelectorAll('#attributeBonusPointsPanel input[type="number"]').forEach(inputNumber => {
			if(inputNumber.value != inputNumber.min){
				dataToUpdate[inputNumber.dataset.field] = inputNumber.value;
				currentCharacter[inputNumber.dataset.field] = inputNumber.value;
			}
		});

		console.log(dataToUpdate);
		updateCharacter(dataToUpdate);
		refreshCharacterStats();
		verifCharacterExpAndLvlAndBonusPoints();
		console.log('Attribution des points validées');
	}
	else{
		console.log('AAAAH TOU FICHE MA GWEULE ?!');
	}


}

function updateCharacter(toUpdate){
	console.groupCollapsed('updateCharacter');
	// toUpdate MUST BE an object
	let data = {
		id: currentCharacter.id
	}

	for(keyProp in toUpdate) {
		data[keyProp] = toUpdate[keyProp];
	}
	console.log(data);
	$.post(`php/askdb.php?controller=players&task=updateCharacters`,data, function(donnees){
		console.log(donnees);
	});
	console.groupEnd('updateCharacter');
}

