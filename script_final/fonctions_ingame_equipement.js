/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function initCharacterEquipements(){
	console.groupCollapsed('initCharacterEquipements');
	$('#characterHand_1').html('');
	$('#characterHand_2').html('');
	$('#characterHead').html('');
	$('#characterTorso').html('');
	$('#characterHands').html('');
	$('#characterLegs').html('');
	$('#characterFeet').html('');

	const optionHand_1 = $('<option>');
	const optionHand_2 = $('<option>');
	const optionHead = $('<option>');
	const optionTorso = $('<option>');
	const optionHands = $('<option>');
	const optionLegs = $('<option>');
	const optionFeet = $('<option>');

	// recupDefaultEquipementsDetails
	const rDED = {
		hand_1: Object.assign({}, gameDataLibrary.weapons.find(anotherItem => anotherItem.id == defaultEquipements.hand_1_id)),
		hand_2: Object.assign({}, gameDataLibrary.weapons.find(anotherItem => anotherItem.id == defaultEquipements.hand_2_id)),
		armor_head: Object.assign({}, gameDataLibrary.armors.find(anotherItem => anotherItem.id == defaultEquipements.armor_head_id)),
		armor_torso: Object.assign({}, gameDataLibrary.armors.find(anotherItem => anotherItem.id == defaultEquipements.armor_torso_id)),
		armor_hands: Object.assign({}, gameDataLibrary.armors.find(anotherItem => anotherItem.id == defaultEquipements.armor_hands_id)),
		armor_legs: Object.assign({}, gameDataLibrary.armors.find(anotherItem => anotherItem.id == defaultEquipements.armor_legs_id)),
		armor_feet: Object.assign({}, gameDataLibrary.armors.find(anotherItem => anotherItem.id == defaultEquipements.armor_feet_id))
	}

	rDED.hand_1.damage_type = Object.assign({}, gameDataLibrary.damage_types.find(anotherItem => anotherItem.id == rDED.hand_1.damage_type));
	rDED.hand_1.skill_type = Object.assign({}, gameDataLibrary.skill_types.find(anotherItem => anotherItem.id == rDED.hand_1.skill_type));

	rDED.hand_2.damage_type = Object.assign({}, gameDataLibrary.damage_types.find(anotherItem => anotherItem.id == rDED.hand_2.damage_type));
	rDED.hand_2.skill_type = Object.assign({}, gameDataLibrary.skill_types.find(anotherItem => anotherItem.id == rDED.hand_2.skill_type));
	
	rDED.armor_head.armor_type = Object.assign({}, gameDataLibrary.armor_types.find(anotherItem => anotherItem.id == rDED.armor_head.armor_type));
	
	rDED.armor_torso.armor_type = Object.assign({}, gameDataLibrary.armor_types.find(anotherItem => anotherItem.id == rDED.armor_torso.armor_type));
	
	rDED.armor_hands.armor_type = Object.assign({}, gameDataLibrary.armor_types.find(anotherItem => anotherItem.id == rDED.armor_hands.armor_type));
	
	rDED.armor_legs.armor_type = Object.assign({}, gameDataLibrary.armor_types.find(anotherItem => anotherItem.id == rDED.armor_legs.armor_type));
	
	rDED.armor_feet.armor_type = Object.assign({}, gameDataLibrary.armor_types.find(anotherItem => anotherItem.id == rDED.armor_feet.armor_type));
	
	console.log(rDED);

	optionHand_1.text(rDED.hand_1.name);
	optionHand_1.attr({
		'data-selector_id': 1,
		'data-equipement_id': rDED.hand_1.id,
		'data-skill_type': rDED.hand_1.skill_type.name,
		'data-damage_type': rDED.hand_1.damage_type.name,
		'data-handsNumber' : rDED.hand_1.handsNumber,
		'data-defense' : rDED.hand_1.defense,
		'data-dodge' : rDED.hand_1.dodge,
		'data-speed' : rDED.hand_1.speed,
		'data-accuracy' : rDED.hand_1.accuracy,
		'data-strength' : rDED.hand_1.strength,
		'data-critical' : rDED.hand_1.critical
	});

	optionHand_2.text(rDED.hand_2.name);
	optionHand_2.attr({
		'data-selector_id': 1,
		'data-equipement_id': rDED.hand_2.id,
		'data-skill_type': rDED.hand_2.skill_type.name,
		'data-damage_type': rDED.hand_2.damage_type.name,
		'data-handsNumber' : rDED.hand_2.handsNumber,
		'data-defense' : rDED.hand_2.defense,
		'data-dodge' : rDED.hand_2.dodge,
		'data-speed' : rDED.hand_2.speed,
		'data-accuracy' : rDED.hand_2.accuracy,
		'data-strength' : rDED.hand_2.strength,
		'data-critical' : rDED.hand_2.critical
	});

	optionHead.text(rDED.armor_head.name);
	optionHead.attr({
		'data-type': 'armor',
		'data-emplacement': rDED.armor_head.emplacement,
		'data-armor_type_id': rDED.armor_head.armor_type.id,
		'data-armor_type_name': rDED.armor_head.armor_type.name,
		'data-equipement_id': rDED.armor_head.id,
		'data-defense' : parseInt(rDED.armor_head.armor_type.defense, 10) * parseFloat(rDED.armor_head.ratio),
		'data-dodge' : parseInt(rDED.armor_head.armor_type.dodge, 10) * parseFloat(rDED.armor_head.ratio),
		'data-speed' : parseInt(rDED.armor_head.armor_type.speed, 10) * parseFloat(rDED.armor_head.ratio)
	});

	optionTorso.text(rDED.armor_torso.name);
	optionTorso.attr({
		'data-type': 'armor',
		'data-emplacement': rDED.armor_torso.emplacement,
		'data-armor_type_id': rDED.armor_torso.armor_type.id,
		'data-armor_type_name': rDED.armor_torso.armor_type.name,
		'data-equipement_id': rDED.armor_torso.id,
		'data-defense' : parseInt(rDED.armor_torso.armor_type.defense, 10) * parseFloat(rDED.armor_torso.ratio),
		'data-dodge' : parseInt(rDED.armor_torso.armor_type.dodge, 10) * parseFloat(rDED.armor_torso.ratio),
		'data-speed' : parseInt(rDED.armor_torso.armor_type.speed, 10) * parseFloat(rDED.armor_torso.ratio)
	});

	optionHands.text(rDED.armor_hands.name);
	optionHands.attr({
		'data-type': 'armor',
		'data-emplacement': rDED.armor_hands.emplacement,
		'data-armor_type_id': rDED.armor_hands.armor_type.id,
		'data-armor_type_name': rDED.armor_hands.armor_type.name,
		'data-equipement_id': rDED.armor_hands.id,
		'data-defense' : parseInt(rDED.armor_hands.armor_type.defense, 10) * parseFloat(rDED.armor_hands.ratio),
		'data-dodge' : parseInt(rDED.armor_hands.armor_type.dodge, 10) * parseFloat(rDED.armor_hands.ratio),
		'data-speed' : parseInt(rDED.armor_hands.armor_type.speed, 10) * parseFloat(rDED.armor_hands.ratio)
	});

	optionLegs.text(rDED.armor_legs.name);
	optionLegs.attr({
		'data-type': 'armor',
		'data-emplacement': rDED.armor_legs.emplacement,
		'data-armor_type_id': rDED.armor_legs.armor_type.id,
		'data-armor_type_name': rDED.armor_legs.armor_type.name,
		'data-equipement_id': rDED.armor_legs.id,
		'data-defense' : parseInt(rDED.armor_legs.armor_type.defense, 10) * parseFloat(rDED.armor_legs.ratio),
		'data-dodge' : parseInt(rDED.armor_legs.armor_type.dodge, 10) * parseFloat(rDED.armor_legs.ratio),
		'data-speed' : parseInt(rDED.armor_legs.armor_type.speed, 10) * parseFloat(rDED.armor_legs.ratio)
	});

	optionFeet.text(rDED.armor_feet.name);
	optionFeet.attr({
		'data-type': 'armor',
		'data-emplacement': rDED.armor_feet.emplacement,
		'data-armor_type_id': rDED.armor_feet.armor_type.id,
		'data-armor_type_name': rDED.armor_feet.armor_type.name,
		'data-equipement_id': rDED.armor_feet.id,
		'data-defense' : parseInt(rDED.armor_feet.armor_type.defense, 10) * parseFloat(rDED.armor_feet.ratio),
		'data-dodge' : parseInt(rDED.armor_feet.armor_type.dodge, 10) * parseFloat(rDED.armor_feet.ratio),
		'data-speed' : parseInt(rDED.armor_feet.armor_type.speed, 10) * parseFloat(rDED.armor_feet.ratio)
	});

	$('#characterHand_1').append(optionHand_1);
	$('#characterHand_2').append(optionHand_2);
	$('#characterHead').append(optionHead);
	$('#characterTorso').append(optionTorso);
	$('#characterHands').append(optionHands);
	$('#characterLegs').append(optionLegs);
	$('#characterFeet').append(optionFeet);
	console.groupEnd('initCharacterEquipements');
}

function refreshCharacterEquipements(){
	initCharacterEquipements();
	
	console.groupCollapsed('FONCTION refreshCharacterEquipements');
	
	let armorsCount = 1;
	let weaponsCount = 1;
	currentCharacter.inventory.forEach(oneItem => {
		// vérifier l'emplacement de l'objet (tete, torse, gants, jambes, pieds, armes)
		if(oneItem.item_table_name == 'armors' || oneItem.item_table_name == 'weapons'){
			let thisEquipement;

			for(i = 0 ; i < oneItem.item_quantity ; i++){

				switch (oneItem.item_table_name) {
					case 'armors':
						armorsCount++;
						thisEquipement = Object.assign({}, gameDataLibrary.armors.find(oneArmor => oneArmor.id == oneItem.item_id));
						thisEquipement.armor_type = Object.assign({}, gameDataLibrary.armor_types.find(oneArmor_type => oneArmor_type.id == thisEquipement.armor_type));
						console.log(thisEquipement);

						if(verifCompatibilityClass(oneItem.item_table_name, thisEquipement.armor_type.id)){
							const optionArmor = $('<option>');
							optionArmor.text(thisEquipement.name);
							optionArmor.attr({
								'data-selector_id': armorsCount, 
								'data-type': 'armor',
								'data-emplacement': thisEquipement.emplacement,
								'data-armor_type_id': thisEquipement.armor_type.id,
								'data-armor_type_name': thisEquipement.armor_type.name,
								'data-equipement_id': thisEquipement.id,
								'data-defense': parseInt(thisEquipement.armor_type.defense,10) * parseInt(thisEquipement.ratio, 10),
								'data-dodge': parseInt(thisEquipement.armor_type.dodge,10) * parseInt(thisEquipement.ratio, 10),
								'data-speed': parseInt(thisEquipement.armor_type.speed,10) * parseInt(thisEquipement.ratio, 10)
							});
							
							switch (thisEquipement.emplacement) {
								case 'head':
									if(thisEquipement.id == currentCharacter.equipements.armor_head.id){
										optionArmor.prop('selected', true);
									}
									$('#characterHead').append(optionArmor);
									break;

								case 'torso':
									if(thisEquipement.id == currentCharacter.equipements.armor_torso.id){
										optionArmor.prop('selected', true);
									}
									$('#characterTorso').append(optionArmor);
									break;
								
								case 'hands':
									if(thisEquipement.id == currentCharacter.equipements.armor_hands.id){
										optionArmor.prop('selected', true);
									}
									$('#characterHands').append(optionArmor);
									break;
								
								case 'legs':
									if(thisEquipement.id == currentCharacter.equipements.armor_legs.id){
										optionArmor.prop('selected', true);
									}
									$('#characterLegs').append(optionArmor);
									break;
								
								case 'feet':
									if(thisEquipement.id == currentCharacter.equipements.armor_feet.id){
										optionArmor.prop('selected', true);
									}
									$('#characterFeet').append(optionArmor);
									break;
							}
						}
						break;

					case 'weapons':
						weaponsCount++;
						thisEquipement = Object.assign({}, gameDataLibrary.weapons.find(oneWeapon => oneWeapon.id == oneItem.item_id));
						thisEquipement.damage_type = Object.assign({}, gameDataLibrary.damage_types.find(oneDamage_type => oneDamage_type.id == thisEquipement.damage_type));
						thisEquipement.skill_type = Object.assign({}, gameDataLibrary.skill_types.find(oneSkill_type => oneSkill_type.id == thisEquipement.skill_type));
						console.log(thisEquipement);

						if(verifCompatibilityClass(oneItem.item_table_name, thisEquipement.id)){
							const optionWeapon = $('<option>');
							optionWeapon.text(thisEquipement.name);
							optionWeapon.attr({
								'data-selector_id': weaponsCount,
								'data-equipement_id': thisEquipement.id,
								'data-skill_type': thisEquipement.skill_type.name,
								'data-damage_type': thisEquipement.damage_type.name,
								'data-handsNumber' : thisEquipement.handsNumber,
								'data-defense' : thisEquipement.defense,
								'data-dodge' : thisEquipement.dodge,
								'data-speed' : thisEquipement.speed,
								'data-accuracy' : thisEquipement.accuracy,
								'data-strength' : thisEquipement.strength,
								'data-critical' : thisEquipement.critical
							});
							$('#characterHand_1, #characterHand_2').append(optionWeapon);
						}
						break;
				}
			}
		}
	});
	document.querySelectorAll('#characterHand_1 option').forEach(myOption =>{
		if(myOption.dataset.equipement_id == currentCharacter.equipements.hand_1.id){
			myOption.selected = true;
		}
	});
	document.querySelectorAll('#characterHand_2 option').forEach(myOption =>{
		if(myOption.dataset.equipement_id == currentCharacter.equipements.hand_2.id){
			myOption.selected = true;
		}
		if(myOption.dataset.handsnumber == 2){
			myOption.disabled = true;
		}

	});
	
	console.groupEnd('FONCTION refreshCharacterEquipements');
}

function isAmbidexterityAvaibleForClass(){
	if(currentCharacter.class.dualwielding == 1){
		$('#fightStance label:last-of-type').removeClass('notMyClass');
		$('#fightingStance3').prop('disabled', false);
	}
}

// refreshFightingStance -> click on [#fightStance label]
function refreshFightingStance(){
	console.groupCollapsed('refreshFightingStance');
	switch ($('#fightStance input[type="radio"]:checked').val()){
		case '1':
			console.log('case1');
			$('#characterHand_2 option').attr('selected', false);
			$('#characterHand_2 option[data-selector_id="1"]').attr('selected', true);
			if(currentCharacter.class.dualwielding == 1){
				$('#characterHand_2').attr('disabled', false);
			}
			else{
				$('#characterHand_2').attr('disabled', true);
			}
			break;

		case '2':
			console.log('case2');
			const hand_1_selector = $('#characterHand_1 option:selected').attr('data-selector_id');
			$(`#characterHand_2 option`).attr('selected', false);
			$(`#characterHand_2 option[data-selector_id="${hand_1_selector}"]`).attr('selected', true);
			$('#characterHand_2').attr('disabled', true);
			break;

		case '3':
			console.log('case3');
			if(currentCharacter.class.dualwielding == 1){
				$('#characterHand_2').attr('disabled', false);
				$('#characterHand_2 option[data-selector_id="1"]').attr('selected', true);

				$(`#characterHand_2 option[data-handsnumber="1"]`).attr('disabled', false);
				$(`#characterHand_2 option[data-handsnumber="3"]`).attr('disabled', false);
				const hand_1_selector = $('#characterHand_1 option:selected').attr('data-selector_id');
				$(`#characterHand_2 option[data-selector_id="${hand_1_selector}"]`).attr('disabled', true);
			}
			else{
				$('#characterHand_2').attr('disabled', true);
			}
			break;
	}
	console.groupEnd('refreshFightingStance');
	refreshCharacterStats();

	currentCharacter.fighting_stance = $('#fightStance input[type="radio"]:checked').val();

	// equivalent to saveCharacterEquipements() but only for weapons
	const data = {
		character_id: currentCharacter.id,
		fighting_stance: currentCharacter.fighting_stance,
		hand_1_id: $('#characterHand_1 option:selected').attr('data-equipement_id'),
		hand_2_id: $('#characterHand_2 option:selected').attr('data-equipement_id')
	};
	const temp_hand_1 = gameDataLibrary.weapons.find(oneWeapon => oneWeapon.id == data.hand_1_id);
	const temp_hand_2 = gameDataLibrary.weapons.find(oneWeapon => oneWeapon.id == data.hand_2_id);

	currentCharacter.equipements.hand_1.id = temp_hand_1.id;
	currentCharacter.equipements.hand_1.name = temp_hand_1.name;
	currentCharacter.equipements.hand_1.handsNumber = temp_hand_1.handsNumber;
	currentCharacter.equipements.hand_1.damage_type = temp_hand_1.damage_type;
	currentCharacter.equipements.hand_1.skill_type = temp_hand_1.skill_type;
	currentCharacter.equipements.hand_1.defense = temp_hand_1.defense;
	currentCharacter.equipements.hand_1.dodge = temp_hand_1.dodge;
	currentCharacter.equipements.hand_1.speed = temp_hand_1.speed;
	currentCharacter.equipements.hand_1.accuracy = temp_hand_1.accuracy;
	currentCharacter.equipements.hand_1.strength = temp_hand_1.strength;
	currentCharacter.equipements.hand_1.critical = temp_hand_1.critical;

	currentCharacter.equipements.hand_2.id = temp_hand_2.id;
	currentCharacter.equipements.hand_2.name = temp_hand_2.name;
	currentCharacter.equipements.hand_2.handsNumber = temp_hand_2.handsNumber;
	currentCharacter.equipements.hand_2.damage_type = temp_hand_2.damage_type;
	currentCharacter.equipements.hand_2.skill_type = temp_hand_2.skill_type;
	currentCharacter.equipements.hand_2.defense = temp_hand_2.defense;
	currentCharacter.equipements.hand_2.dodge = temp_hand_2.dodge;
	currentCharacter.equipements.hand_2.speed = temp_hand_2.speed;
	currentCharacter.equipements.hand_2.accuracy = temp_hand_2.accuracy;
	currentCharacter.equipements.hand_2.strength = temp_hand_2.strength;
	currentCharacter.equipements.hand_2.critical = temp_hand_2.critical;

	if(fightDetails.fight){
		refreshPlayerStatFightDetails();
	}

	$.post(`php/askdb.php?controller=players&task=saveCharacterEquipements`, data, function(donnees){
			console.groupCollapsed('saveCharacterEquipements');
			console.log(donnees);
			console.groupEnd('saveCharacterEquipements');
		}
	);
}

// adaptEquipementAndStance -> change on [.equiped option:selected]
function adaptEquipementAndStance(){
	switch ($('#characterHand_1 option:selected').attr('data-handsnumber')){
		case '1':
			$('#fightStance label:first-of-type').removeClass('disabled');
			$('#fightStance label:nth-of-type(2)').addClass('disabled');
			$('#fightingStance1').attr('disabled', false);
			$('#fightingStance2').attr('disabled', true);

			if(currentCharacter.class.dualwielding == 1){
				$('#characterHand_2').attr('disabled', false);

				$('#fightStance label:last-of-type').removeClass('disabled');
				$('#fightingStance3').attr('disabled', false);

				switch($('#characterHand_2 option:selected').attr('data-handsnumber')){
					case '1':
					case '3':
						if($('#characterHand_2 option:selected').attr('data-equipement_id') == 44){
							$('#fightStance label').removeClass('choosen');
							$('#fightStance label:first-of-type').addClass('choosen');
							$('#fightingStance1').prop('checked', true);
							currentCharacter.fighting_stance = '1';
						}
						else{
							$('#fightStance label').removeClass('choosen');
							$('#fightStance label:last-of-type').addClass('choosen');
							$('#fightingStance3').prop('checked', true);
							currentCharacter.fighting_stance = '3';
						}
						$('#characterHand_2 option[data-handsnumber="1"]').attr('disabled', false);
						$('#characterHand_2 option[data-handsnumber="3"]').attr('disabled', false);
						const hand_1_selector = $('#characterHand_1 option:selected').attr('data-selector_id');
						if(hand_1_selector != 44){
							$(`#characterHand_2 option[data-selector_id="${hand_1_selector}"]`).attr('disabled', true);
						}
						if(currentCharacter.class.dualwielding == 1){
							if($('#fightingStance3').prop('checked')){
								$('#characterHand_1 option[data-handsnumber="1"]').attr('disabled', false);
								$('#characterHand_1 option[data-handsnumber="3"]').attr('disabled', false);
								const hand_2_selector = $('#characterHand_2 option:selected').attr('data-selector_id');
								if(hand_2_selector != 44){
									$(`#characterHand_1 option[data-selector_id="${hand_2_selector}"]`).attr('disabled', true);
								}
							}
						}
						break;

					case '2':
						$('#characterHand_2 option:selected').attr('selected', false);
						$('#characterHand_2 option[data-selector_id="1"]').attr('selected', true);
						$('#fightStance label').removeClass('choosen');
						$('#fightStance label:first-of-type').addClass('choosen');
						$('#fightingStance1').prop('checked', true);
						$('#characterHand_1 option').attr('disabled', false);
						currentCharacter.fighting_stance = '1';
						break;
				}
			}
			else{
				$('#characterHand_2').attr('disabled', true);
				$('#characterHand_2 option:selected').attr('selected', false);
				$('#fightingStance1').prop('checked', true);
			}
			break;

		case '2':
			$('#fightStance label:first-of-type').addClass('disabled');
			$('#fightStance label:nth-of-type(2)').removeClass('disabled');
			$('#fightStance label:last-of-type').addClass('disabled');
			$('#fightingStance1').attr('disabled', true);
			$('#fightingStance2').attr('disabled', false);
			$('#fightingStance3').attr('disabled', true);

			$('#characterHand_2').attr('disabled', true);
			$(`#characterHand_2 option:selected`).attr('selected', false);

			$('#fightStance label').removeClass('choosen');
			$('#fightStance label:nth-of-type(2)').addClass('choosen');
			$('#fightingStance2').prop('checked', true);
			currentCharacter.fighting_stance = '2';

			$('#characterHand_2 option[data-handsnumber="1"]').attr('disabled', false);
			$('#characterHand_2 option[data-handsnumber="3"]').attr('disabled', false);

			const hand_1_selector = $('#characterHand_1 option:selected').attr('data-selector_id');
			$(`#characterHand_2 option[data-selector_id="${hand_1_selector}"]`).attr('selected', true);
			$('#characterHand_1 option').attr('disabled', false);
			break;

		case '3':
			$('#fightStance label:first-of-type').removeClass('disabled');
			$('#fightStance label:nth-of-type(2)').removeClass('disabled');
			$('#fightingStance1').attr('disabled', false);
			$('#fightingStance2').attr('disabled', false);

			if(currentCharacter.class.dualwielding == 1){
				$('#characterHand_2').attr('disabled', false);

				$('#fightStance label:last-of-type').removeClass('disabled');
				$('#fightingStance3').attr('disabled', false);

				switch($('#characterHand_2 option:selected').attr('data-handsnumber')){
					case '1':
					case '3':
						if($('#characterHand_2 option:selected').attr('data-equipement_id') == 44){
							$('#fightStance label').removeClass('choosen');
							$('#fightStance label:first-of-type').addClass('choosen');
							$('#fightingStance1').prop('checked', true);
							currentCharacter.fighting_stance = '1';
						}
						else{
							$('#fightStance label').removeClass('choosen');
							$('#fightStance label:last-of-type').addClass('choosen');
							$('#fightingStance3').prop('checked', true);
							currentCharacter.fighting_stance = '3';
						}
						$('#characterHand_2 option[data-handsnumber="1"]').attr('disabled', false);
						$('#characterHand_2 option[data-handsnumber="3"]').attr('disabled', false);
						const hand_1_selector = $('#characterHand_1 option:selected').attr('data-selector_id');
						if(hand_1_selector != 44){
							$(`#characterHand_2 option[data-selector_id="${hand_1_selector}"]`).attr('disabled', true);
						}
						if(currentCharacter.class.dualwielding == 1){
							if($('#fightingStance3').prop('checked')){
								$('#characterHand_1 option[data-handsnumber="1"]').attr('disabled', false);
								$('#characterHand_1 option[data-handsnumber="3"]').attr('disabled', false);
								const hand_2_selector = $('#characterHand_2 option:selected').attr('data-selector_id');
								if(hand_2_selector != 44){
									$(`#characterHand_1 option[data-selector_id="${hand_2_selector}"]`).attr('disabled', true);
								}
							}
						}
						break;

					case '2':
						$('#characterHand_2 option:selected').attr('selected', false);
						$('#characterHand_2 option[data-selector_id="1"]').attr('selected', true);
						$('#fightStance label').removeClass('choosen');
						$('#fightStance label:first-of-type').addClass('choosen');
						$('#fightingStance1').prop('checked', true);
						$('#characterHand_1 option').attr('disabled', false);
						currentCharacter.fighting_stance = '1';
						break;
				}
			}
			else{
				$('#characterHand_2').attr('disabled', true);
				$('#characterHand_2 option:selected').attr('selected', false);
				$('#fightStance label').removeClass('choosen');
				$('#fightStance label:nth-of-type(2)').addClass('choosen');
				$('#fightingStance2').prop('checked', true);
				currentCharacter.fighting_stance = '2';
			}
			break;
	}
}

function onLogEquipementAndStance(){
	const hand_1_selector = $('#characterHand_1 option:selected').attr('data-selector_id');
	const hand_2_selector = $('#characterHand_2 option:selected').attr('data-selector_id');

	switch(currentCharacter.fighting_stance){
		case '1':
			$('#fightStance label').removeClass('choosen');
			$('#fightStance label:first-of-type').addClass('choosen');
			$('#fightingStance1').prop('checked', true);

			$(`#characterHand_2 option[data-selector_id="${hand_1_selector}"]`).attr('disabled', true);

			if(currentCharacter.class.dualwielding == 1){
				$('#characterHand_2').attr('disabled', false);
			}
			else{
				$('#characterHand_2').attr('disabled', true);
				$('#characterHand_2 option:selected').attr('selected', false);
				$('#characterHand_2 option[data-selector_id="1"]').attr('selected', true);
			}

			switch($('#characterHand_1 option:selected').attr('data-handsnumber')){
				case '1':
					$('#fightStance label:nth-of-type(2)').addClass('disabled');
					$('#fightingStance2').attr('disabled', true);
					break;

				case '3':
					$('#fightStance label:nth-of-type(2)').removeClass('disabled');
					$('#fightingStance2').attr('disabled', false);
					break;
			}
			break;

		case '2':
			$('#fightStance label').removeClass('choosen');
			$('#fightStance label:nth-of-type(2)').addClass('choosen');
			$('#fightingStance2').prop('checked', true);

			switch($('#characterHand_1 option:selected').attr('data-handsnumber')){
				case '2':
					$('#fightStance label:first-of-type').addClass('disabled');
					$('#fightingStance2').attr('disabled', true);
					if(currentCharacter.class.dualwielding == 1){
						$('#fightStance label:last-of-type').addClass('disabled');
						$('#fightingStance3').attr('disabled', true);
					}
					break;

				case '3':
					$('#fightStance label:nth-of-type(2)').removeClass('disabled');
					$('#fightingStance2').attr('disabled', false);
					break;
			}
			break;

		case '3':
			$('#fightStance label').removeClass('choosen');
			$('#fightStance label:last-of-type').addClass('choosen');
			$('#fightingStance3').prop('checked', true);
			$('#characterHand_2').attr('disabled', false);

			$(`#characterHand_1 option[data-selector_id="${hand_2_selector}"]`).attr('disabled', true);
			$(`#characterHand_2 option[data-selector_id="${hand_1_selector}"]`).attr('disabled', true);

			switch($('#characterHand_1 option:selected').attr('data-handsnumber')){
				case '1':
					$('#fightStance label:nth-of-type(2)').addClass('disabled');
					$('#fightingStance2').attr('disabled', true);
					break;

				case '3':
					$('#fightStance label:nth-of-type(2)').removeClass('disabled');
					$('#fightingStance2').attr('disabled', false);
					break;
			}
			break;
	}
}

function saveCharacterEquipements(){
	const data = {
		character_id: currentCharacter.id,
		fighting_stance: currentCharacter.fighting_stance
	};

	switch($(this).attr('name')){
		case'characterHead':
			data.armor_head_id = $('#characterHead option:selected').attr('data-equipement_id')
			
			const temp_armor_head = gameDataLibrary.armors.find(oneArmor => oneArmor.id == data.armor_head_id);

			currentCharacter.equipements.armor_head.id = temp_armor_head.id;
			currentCharacter.equipements.armor_head.name = temp_armor_head.name;
			currentCharacter.equipements.armor_head.emplacement = temp_armor_head.emplacement;
			currentCharacter.equipements.armor_head.armor_type = temp_armor_head.armor_type;
			currentCharacter.equipements.armor_head.ratio = temp_armor_head.ratio;

			break;

		case'characterTorso':
			data.armor_torso_id = $('#characterTorso option:selected').attr('data-equipement_id')
			
			const temp_armor_torso = gameDataLibrary.armors.find(oneArmor => oneArmor.id == data.armor_torso_id);

			currentCharacter.equipements.armor_torso.id = temp_armor_torso.id;
			currentCharacter.equipements.armor_torso.name = temp_armor_torso.name;
			currentCharacter.equipements.armor_torso.emplacement = temp_armor_torso.emplacement;
			currentCharacter.equipements.armor_torso.armor_type = temp_armor_torso.armor_type;
			currentCharacter.equipements.armor_torso.ratio = temp_armor_torso.ratio;

			break;

		case'characterHands':
			data.armor_hands_id = $('#characterHands option:selected').attr('data-equipement_id')
			
			const temp_armor_hands = gameDataLibrary.armors.find(oneArmor => oneArmor.id == data.armor_hands_id);

			currentCharacter.equipements.armor_hands.id = temp_armor_hands.id;
			currentCharacter.equipements.armor_hands.name = temp_armor_hands.name;
			currentCharacter.equipements.armor_hands.emplacement = temp_armor_hands.emplacement;
			currentCharacter.equipements.armor_hands.armor_type = temp_armor_hands.armor_type;
			currentCharacter.equipements.armor_hands.ratio = temp_armor_hands.ratio;

			break;

		case'characterLegs':
			data.armor_legs_id = $('#characterLegs option:selected').attr('data-equipement_id')
			
			const temp_armor_legs = gameDataLibrary.armors.find(oneArmor => oneArmor.id == data.armor_legs_id);

			currentCharacter.equipements.armor_legs.id = temp_armor_legs.id;
			currentCharacter.equipements.armor_legs.name = temp_armor_legs.name;
			currentCharacter.equipements.armor_legs.emplacement = temp_armor_legs.emplacement;
			currentCharacter.equipements.armor_legs.armor_type = temp_armor_legs.armor_type;
			currentCharacter.equipements.armor_legs.ratio = temp_armor_legs.ratio;

			break;

		case'characterFeet':
			data.armor_feet_id = $('#characterFeet option:selected').attr('data-equipement_id')
			
			const temp_armor_feet = gameDataLibrary.armors.find(oneArmor => oneArmor.id == data.armor_feet_id);

			currentCharacter.equipements.armor_feet.id = temp_armor_feet.id;
			currentCharacter.equipements.armor_feet.name = temp_armor_feet.name;
			currentCharacter.equipements.armor_feet.emplacement = temp_armor_feet.emplacement;
			currentCharacter.equipements.armor_feet.armor_type = temp_armor_feet.armor_type;
			currentCharacter.equipements.armor_feet.ratio = temp_armor_feet.ratio;

			break;

		case'characterHand_1':
		case'characterHand_2':
			data.hand_1_id = $('#characterHand_1 option:selected').attr('data-equipement_id')
			data.hand_2_id = $('#characterHand_2 option:selected').attr('data-equipement_id')
			
			const temp_hand_1 = gameDataLibrary.weapons.find(oneWeapon => oneWeapon.id == data.hand_1_id);
			const temp_hand_2 = gameDataLibrary.weapons.find(oneWeapon => oneWeapon.id == data.hand_2_id);

			currentCharacter.equipements.hand_1.id = temp_hand_1.id;
			currentCharacter.equipements.hand_1.name = temp_hand_1.name;
			currentCharacter.equipements.hand_1.handsNumber = temp_hand_1.handsNumber;
			currentCharacter.equipements.hand_1.damage_type = temp_hand_1.damage_type;
			currentCharacter.equipements.hand_1.skill_type = temp_hand_1.skill_type;
			currentCharacter.equipements.hand_1.defense = temp_hand_1.defense;
			currentCharacter.equipements.hand_1.dodge = temp_hand_1.dodge;
			currentCharacter.equipements.hand_1.speed = temp_hand_1.speed;
			currentCharacter.equipements.hand_1.accuracy = temp_hand_1.accuracy;
			currentCharacter.equipements.hand_1.strength = temp_hand_1.strength;
			currentCharacter.equipements.hand_1.critical = temp_hand_1.critical;

			currentCharacter.equipements.hand_2.id = temp_hand_2.id;
			currentCharacter.equipements.hand_2.name = temp_hand_2.name;
			currentCharacter.equipements.hand_2.handsNumber = temp_hand_2.handsNumber;
			currentCharacter.equipements.hand_2.damage_type = temp_hand_2.damage_type;
			currentCharacter.equipements.hand_2.skill_type = temp_hand_2.skill_type;
			currentCharacter.equipements.hand_2.defense = temp_hand_2.defense;
			currentCharacter.equipements.hand_2.dodge = temp_hand_2.dodge;
			currentCharacter.equipements.hand_2.speed = temp_hand_2.speed;
			currentCharacter.equipements.hand_2.accuracy = temp_hand_2.accuracy;
			currentCharacter.equipements.hand_2.strength = temp_hand_2.strength;
			currentCharacter.equipements.hand_2.critical = temp_hand_2.critical;

			break;

	}

	if(fightDetails.fight){
		refreshPlayerDisplayAndFightDetails();
	}

	$.post(`php/askdb.php?controller=players&task=saveCharacterEquipements`, data, function(donnees){
			console.groupCollapsed('saveCharacterEquipements');
			console.log(donnees);
			console.groupEnd('saveCharacterEquipements');
		}
	);
}

