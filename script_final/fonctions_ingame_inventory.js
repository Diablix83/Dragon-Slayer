/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function refreshCharacterInventory(){
	let numberOfItems = 0;
	let numberOfWeapons = 0;
	let numberOfArmors = 0;

	const inventoryItems = currentCharacter.inventory.filter(oneItem => oneItem.item_table_name == 'items');
	inventoryItems.forEach(oneItem => {
		numberOfItems += parseInt(oneItem.item_quantity, 10);
	});

	const inventoryWeapons = currentCharacter.inventory.filter(oneItem => oneItem.item_table_name == 'weapons');
	inventoryWeapons.forEach(oneItem => {
		numberOfWeapons += parseInt(oneItem.item_quantity, 10);
	});

	const inventoryArmors = currentCharacter.inventory.filter(oneItem => oneItem.item_table_name == 'armors');
	inventoryArmors.forEach(oneItem => {
		numberOfArmors += parseInt(oneItem.item_quantity, 10);
	});

	let numberOfSkills = currentCharacter.skills.length;

	$('#allItems span').html(numberOfItems);
	$('#allWeapons span').html(numberOfWeapons);
	$('#allArmors span').html(numberOfArmors);
	$('#allSkills span').html(numberOfSkills);
}

function refreshCharacterInventoryChoosenList(myChoosenList){
	console.groupCollapsed('refreshCharacterInventoryChoosenList');
	console.log(myChoosenList);
	
	$('#choosenList').html('');

	let thisInventory;

	switch(myChoosenList){
		case 'items':
			$('#inventory h5').html('Objets')
			break;

		case 'weapons':
			$('#inventory h5').html('Armes')
			break;

		case 'armors':
			$('#inventory h5').html('Armures')
			break;

		case 'skills':
			$('#inventory h5').html('Techniques et sorts')
			break;
	}

	switch(myChoosenList){
		case 'items':
		case 'weapons':
		case 'armors':
			thisInventory = [...currentCharacter.inventory.filter(oneItem => oneItem.item_table_name == myChoosenList)];
			break;

		case 'skills':
			thisInventory = [...currentCharacter.skills];
			break;
	}
	console.log(thisInventory);


	let thisItem;

	thisInventory.forEach(oneItem => {
		const li = $(`<li>`);
		switch (myChoosenList) {
			case 'items':
				thisItem = Object.assign({}, gameDataLibrary[myChoosenList].find(anotherItem => anotherItem.id == oneItem.item_id));
				thisItem.damage_type = Object.assign({}, gameDataLibrary.damage_types.find(myDamage_type => myDamage_type.id == thisItem.damage_type));
				console.log(thisItem);
				$(li).attr({
					'data-type': 'item',
					'data-damage_type_id': thisItem.damage_type.id,
					'data-damage_type_name': thisItem.damage_type.name,
					'data-item_id': thisItem.id,
					'data-item_name': thisItem.name,
					'data-item_modifier': thisItem.modifier,
					'data-quantity': oneItem.item_quantity
				});
				break;
		
			case 'weapons':
				thisItem = Object.assign({}, gameDataLibrary[myChoosenList].find(anotherItem => anotherItem.id == oneItem.item_id));
				thisItem.damage_type = Object.assign({}, gameDataLibrary.damage_types.find(myDamage_type => myDamage_type.id == thisItem.damage_type));
				thisItem.skill_type = Object.assign({}, gameDataLibrary.skill_types.find(mySkill_type => mySkill_type.id == thisItem.skill_type));
				console.log(thisItem);

				if(!verifCompatibilityClass(myChoosenList, thisItem.id)){
					$(li).addClass('notMyClass');
				}

				$(li).attr({
					'data-type': 'weapon',
					'data-damage_type_id': thisItem.damage_type.id,
					'data-damage_type_name': thisItem.damage_type.name,
					'data-skill_type_id': thisItem.skill_type.id,
					'data-skill_type_name': thisItem.skill_type.name,
					'data-item_id': thisItem.id,
					'data-item_name': thisItem.name,
					'data-item_hands_number': thisItem.handsNumber,
					'data-defense': thisItem.defense,
					'data-dodge': thisItem.dodge,
					'data-speed': thisItem.speed,
					'data-accuracy': thisItem.accuracy,
					'data-strength': thisItem.strength,
					'data-critical': thisItem.critical,
					'data-quantity': oneItem.item_quantity
				});
				break;
		
			case 'armors':
				thisItem = Object.assign({}, gameDataLibrary[myChoosenList].find(anotherItem => anotherItem.id == oneItem.item_id));
				thisItem.armor_type = Object.assign({}, gameDataLibrary.armor_types.find(myArmorType => myArmorType.id == thisItem.armor_type));
				console.log(thisItem);
				
				if(!verifCompatibilityClass(myChoosenList, thisItem.armor_type.id)){
					$(li).addClass('notMyClass');
				}

				$(li).attr({
					'data-type': 'armor',
					'data-armor_type_id': thisItem.armor_type.id,
					'data-armor_type_name': thisItem.armor_type.name,
					'data-item_id': thisItem.id,
					'data-item_name': thisItem.name,
					'data-emplacement': thisItem.emplacement,
					'data-defense': parseInt(thisItem.armor_type.defense,10) * parseInt(thisItem.ratio, 10),
					'data-dodge': parseInt(thisItem.armor_type.dodge,10) * parseInt(thisItem.ratio, 10),
					'data-speed': parseInt(thisItem.armor_type.speed,10) * parseInt(thisItem.ratio, 10),
					'data-quantity': oneItem.item_quantity
				});
				break;
		
			case 'skills':
				thisItem = Object.assign({}, gameDataLibrary[myChoosenList].find(anotherItem => anotherItem.id == oneItem.skill_id));
				thisItem.damage_type = Object.assign({}, gameDataLibrary.damage_types.find(myDamage_type => myDamage_type.id == thisItem.damage_type));
				thisItem.skill_type = Object.assign({}, gameDataLibrary.skill_types.find(mySkill_type => mySkill_type.id == thisItem.skill_type_id));
				console.log(thisItem);

				if(!verifCompatibilityClass(myChoosenList, thisItem.skill_type.id)){
					$(li).addClass('notMyClass');
				}

				$(li).attr({
					'data-type': 'skill',
					'data-damage_type_id': thisItem.damage_type.id,
					'data-damage_type_name': thisItem.damage_type.name,
					'data-skill_type_id': thisItem.skill_type.id,
					'data-skill_type_name': thisItem.skill_type.name,
					'data-skill_id': thisItem.id,
					'data-skill_name': thisItem.name,
					'data-cooldown': thisItem.cooldown,
					'data-accuracy_ratio': thisItem.accuracy_ratio,
					'data-strength_ratio': thisItem.strength_ratio,
					'data-critical_ratio': thisItem.critical_ratio
				});
				break;
		
		}
		//console.log(thisItem);
		switch (myChoosenList) {
			case 'items':
			case 'weapons':
			case 'armors':
				$(li).html($(li).attr('data-item_name') + ` (${$(li).attr('data-quantity')})`);
				break;

			case 'skills':
				$(li).html($(li).attr('data-skill_name'));
				break;

		}

		$(li).on('click', function(){
			if(!$(this).hasClass('choosen')){
				$('#choosenList li').removeClass('choosen');
				$(this).addClass('choosen');
				if($(this).attr('data-type') != 'skill'){
					$('#delete_item').attr('disabled', false);
					$('#delete_item').attr('data-delete_id', $(this).attr('data-item_id'));
					switch($(this).attr('data-type')){
						case 'item':
							$('#delete_item').attr('data-delete_table_name', 'items');
							break;
							
						case 'weapon':
							$('#delete_item').attr('data-delete_table_name', 'weapons');
							break;
							
						case 'armor':
							$('#delete_item').attr('data-delete_table_name', 'armors');
							break;
					}
					$('#delete_item_value').removeClass('hideDisplay');
					$('#delete_item_value').attr('max', $(this).attr('data-quantity'));
				}
				highlightItemChoosen($(this));
			}
			else{
				$(this).removeClass('choosen');
				$('#delete_item').attr('disabled', true);
				$('#delete_item_value').addClass('hideDisplay');
				$('#delete_item_value').val('0');
				$('#itemChoosen').addClass('hideDisplay');
			}

		});

		$(li).on('mouseenter', function(){
			highlightItemHover($(this));
		});

		$(li).on('mouseleave', function(){
			$('#itemHover').addClass('hideDisplay');
		});

		$('#choosenList').append(li);
	});
	console.groupEnd('refreshCharacterInventoryChoosenList');
}

function updateItemOfInventory(tableName, itemId, itemQuantity){

	const data = {
		character_id: currentCharacter.id,
		item_table_name: tableName,
		item_id: itemId,
		item_quantity_modifier: itemQuantity
	}
	$.post(`php/askdb.php?controller=players&task=updateItemOfInventory`, data, function(donnees){
			console.groupCollapsed('updateItemOfInventory');
			console.log(donnees);
			$.getJSON(`php/askdb.php?controller=players&task=recupCharacterDetail&charId=${currentCharacter.id}`, function(donnees){

				currentCharacter.inventory = donnees.inventory;

				refreshCharacterInventory();
				refreshCharacterInventoryChoosenList(tableName);
				refreshCharacterEquipements();
				if(fightDetails.fight){
					refreshPlayerDisplayAndFightDetails();
				}

			});
			console.groupEnd('updateItemOfInventory');
		});
}

function randomLoot(){
	console.groupCollapsed('randomLoot');

	// If not a boss battle => 1 to 3 loots / if boss battle => 3 to 6 loots
	let numberOfLoot = 0;
	if(!fightDetails.enemy.isBoss){
		numberOfLoot = getRandomIntInclusive(1, 3);
	}
	else{
		numberOfLoot = getRandomIntInclusive(3, 6);
	}
	console.log(numberOfLoot);

	for(i = 0 ; i < numberOfLoot ; i++){
		// Choose one of the 3 categories : items / armors / weapons
		let choosenCategory = getRandomIntInclusive(1, 3);
		let indexChoosenItem = 0;
		let itemQuantity = 1;
		// Switch on the choosen category
		// Choose one item of the category choosen
		switch(choosenCategory){
			case 1:
				// but if items => random from 0 to items.length-1
				// items
				choosenCategory = 'items';
				const nbItems = gameDataLibrary.items.length;
				indexChoosenItem = getRandomIntInclusive(0, nbItems-1);
				itemQuantity = getRandomIntInclusive(1, 3);
				break

			case 2:
				// but if armors => random from 6 to armors.length-1
				// armors
				choosenCategory = 'armors';
				const nbArmors = gameDataLibrary.armors.length;				
				indexChoosenItem = getRandomIntInclusive(6, nbArmors-1);
				break

			case 3:
				// but if weapons => random from 0 to weapons.length-2 (it MUST NOT be "nude hands"...)
				// weapons
				choosenCategory = 'weapons';
				const nbWeapons = gameDataLibrary.weapons.length;
				indexChoosenItem = getRandomIntInclusive(0, nbWeapons-2);
				break
		}
		console.log(gameDataLibrary[choosenCategory][indexChoosenItem]);
		const choosenItemId = gameDataLibrary[choosenCategory][indexChoosenItem].id;
		fightDetails.lastLoots.push({
			category: choosenCategory,
			index: indexChoosenItem,
			quantity: itemQuantity
		});
		
		updateItemOfInventory(choosenCategory, choosenItemId, itemQuantity);
	}
	console.groupEnd('randomLoot');
}



