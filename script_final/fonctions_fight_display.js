/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function showFightingInterface(){
	$('#startDungeon').addClass('hideDisplay');
	$('#mobsCounter').removeClass('hideDisplay');
	$('#enemyDisplay').removeClass('hideDisplay');
	$('#myDisplay').removeClass('hideDisplay');
	$('#historic').removeClass('hideDisplay');
	window.setTimeout(function(){
		$('#startDungeon').addClass('invisible');
		$('#mobsCounter').removeClass('invisible');
		$('#enemyDisplay').removeClass('invisible');
		$('#myDisplay').removeClass('invisible');
		$('#historic').removeClass('invisible');
	}, 10);
}

function hideFightingInterface(){
	$('#startDungeon').removeClass('invisible');
	$('#mobsCounter').addClass('invisible');
	$('#enemyDisplay').addClass('invisible');
	$('#target').addClass('invisible');
	$('#myDisplay').addClass('invisible');
	$('#historic').addClass('invisible');
	window.setTimeout(function(){
		$('#startDungeon').removeClass('hideDisplay');
		$('#mobsCounter').addClass('hideDisplay');
		$('#enemyDisplay').addClass('hideDisplay');
		$('#target').addClass('hideDisplay');
		$('#myDisplay').addClass('hideDisplay');
		$('#historic').addClass('hideDisplay');
	}, 500);
}

function showFightEndGood(){
	$('#blackCurtain').removeClass('hideDisplay');
	$('#fightEndGood').removeClass('hideDisplay');
	window.setTimeout(function(){
		$('#blackCurtain').removeClass('invisible');
		$('#fightEndGood').removeClass('invisible');
	}, 10);
}

function hideFightEndGood(){
	$('#blackCurtain').addClass('invisible');
	$('#fightEndGood').addClass('invisible');
	window.setTimeout(function(){
		$('#blackCurtain').addClass('hideDisplay');
		$('#fightEndGood').addClass('hideDisplay');
	}, 500);
}

function showFightEndBad(){
	$('#blackCurtain').removeClass('hideDisplay');
	$('#fightEndBad').removeClass('hideDisplay');
	window.setTimeout(function(){
		$('#blackCurtain').removeClass('invisible');
		$('#fightEndBad').removeClass('invisible');
	}, 10);
}

function hideFightEndBad(){
	$('#blackCurtain').addClass('invisible');
	$('#fightEndBad').addClass('invisible');
	window.setTimeout(function(){
		$('#blackCurtain').addClass('hideDisplay');
		$('#fightEndBad').addClass('hideDisplay');
	}, 500);
}


function dungeonStart(){
	console.log('Vous entrez dans le donjon');
	showFightingInterface();
	cleanEnemy();
	fightDetails.mobsList = gameDataLibrary.enemies.filter(oneEnemy => oneEnemy.min_dungeon_number == currentCharacter.nb_finished_dungeon && oneEnemy.difficulty != 5);
	fightDetails.boss = gameDataLibrary.enemies.find(oneEnemy => oneEnemy.min_dungeon_number == currentCharacter.nb_finished_dungeon && oneEnemy.difficulty == 5);
	chooseEnemy();
	refreshPlayerDisplayAndFightDetails();
	fightDetails.fight = true;
	$('#counter span').html(fightDetails.turnMeter);
	console.log(fightDetails);
}

function dungeonFlee(){
	console.log('Vous fuyez le donjon');
	hideFightingInterface();
	hideFightEndGood();
	hideFightEndBad();
	reinitialisationFightDetails();
}

function dungeonFinish(){
	console.log('Vous avez fini le donjon');
	hideFightEndGood();
	hideFightingInterface();

	$('#leaveDungeon').removeClass('hideDisplay');
	$('#nextFight').removeClass('hideDisplay');
	$('#fightBoss').removeClass('hideDisplay');
	$('#finishDungeon').addClass('hideDisplay');
	$('#finishDungeon').attr('disabled', true);

	reinitialisationFightDetails();
}

function nextFight(){
	console.log('Vous commencez le combat contre le prochain ennemie');
	hideFightEndGood();
	chooseEnemy();
}

function fightBoss(){
	console.log('Vous commencez le combat contre le Boss');
	hideFightEndGood();
	chooseBoss();
}

function reinitialisationFightDetails(){
	fightDetails.fight = false;
	fightDetails.nbMobsKilled = 0;
	fightDetails.turnMeter = 0;
	fightDetails.lastLoots = [];

	fightDetails.player.health = 0;
	fightDetails.player.healthMax = 0;
	fightDetails.player.defense = 0;
	fightDetails.player.dodge = 0;
	fightDetails.player.speed = 0;
	fightDetails.player.accuracy = 0;
	fightDetails.player.strength = 0;
	fightDetails.player.critical = 0;
	fightDetails.player.skills = [];
	fightDetails.player.items = [];

	fightDetails.enemy.name = null;
	fightDetails.enemy.health = 0;
	fightDetails.enemy.healthMax = 0;
	fightDetails.enemy.defense = 0;
	fightDetails.enemy.dodge = 0;
	fightDetails.enemy.speed = 0;
	fightDetails.enemy.accuracy = 0;
	fightDetails.enemy.strength = 0;
	fightDetails.enemy.critical = 0;
	fightDetails.enemy.skills = [];
	fightDetails.enemy.level = 0;
	fightDetails.enemy.exp_gain = 0;

	$('#listToUse').addClass('invisible');
	$('#listToUse').addClass('hideDisplay');
	cleanHistoric();
}

function chooseEnemy(){
	const enemySelector = getRandomIntInclusive(0, fightDetails.mobsList.length - 1);

	const choosenEnemy = fightDetails.mobsList[enemySelector];
	console.log(choosenEnemy);

	fightDetails.enemy.name = choosenEnemy.name;
	fightDetails.enemy.isBoss = false;
	fightDetails.enemy.health = parseInt(choosenEnemy.healthMax, 10);
	fightDetails.enemy.healthMax = parseInt(choosenEnemy.healthMax, 10);
	fightDetails.enemy.defense = parseInt(choosenEnemy.defense, 10);
	fightDetails.enemy.dodge = parseInt(choosenEnemy.dodge, 10);
	fightDetails.enemy.speed = parseInt(choosenEnemy.speed, 10);
	fightDetails.enemy.accuracy = parseInt(choosenEnemy.accuracy, 10);
	fightDetails.enemy.strength = parseInt(choosenEnemy.strength, 10);
	fightDetails.enemy.critical = parseInt(choosenEnemy.critical, 10);
	fightDetails.enemy.level = parseInt(choosenEnemy.level, 10);
	fightDetails.enemy.exp_gain = parseInt(choosenEnemy.exp_gain, 10);

	fightDetails.enemy.healthPrct = parseFloat(((fightDetails.enemy.health * 100) / fightDetails.enemy.healthMax).toFixed(2));

	$('#enemyDisplay .healthMax p>span:first-of-type').html(fightDetails.enemy.health);
	$('#enemyDisplay .healthMax p>span:last-of-type').html(fightDetails.enemy.healthMax);

	$('#enemyDisplay .currentHealth').css('width', `${fightDetails.enemy.healthPrct}%`);

	$('#bossIcone').html('');
	$('#enemyName').html(fightDetails.enemy.name);
	$('#enemyLevel').html(fightDetails.enemy.level);

	gameDataLibrary.enemy_skills.filter(oneEnemySkill => oneEnemySkill.enemy_id == choosenEnemy.id).forEach(thisEnemySkill => {
		let tempEnemySkill = gameDataLibrary.skills.find(oneSkill => oneSkill.id == thisEnemySkill.skill_id);
		fightDetails.enemy.skills.push({
			id: tempEnemySkill.id,
			name: tempEnemySkill.name,
			accuracy_ratio: parseFloat(tempEnemySkill.accuracy_ratio, 10),
			strength_ratio: parseFloat(tempEnemySkill.strength_ratio, 10),
			critical_ratio: parseFloat(tempEnemySkill.critical_ratio, 10),
			cooldown: parseInt(tempEnemySkill.cooldown, 10),
			reloading: parseInt(tempEnemySkill.cooldown, 10),
			damage_type_id: tempEnemySkill.damage_type,
			damage_type_name: gameDataLibrary.damage_types.find(oneDamageType => oneDamageType.id == tempEnemySkill.damage_type).name,
			skill_type_id: tempEnemySkill.skill_type_id,
			skill_type_name: gameDataLibrary.skill_types.find(oneSkillType => oneSkillType.id == tempEnemySkill.skill_type_id).name
		});
	});

	gameDataLibrary.weakness.filter(oneWeakness => oneWeakness.enemies_id == choosenEnemy.id).forEach(thisWeakness => {
		fightDetails.enemy.weakness.push({
			damage_type: thisWeakness.damage_type,
			ratio: thisWeakness.ratio
		});
	});

}

function chooseBoss(){
	fightDetails.enemy.name = fightDetails.boss.name;
	fightDetails.enemy.isBoss = true;
	fightDetails.enemy.health = parseInt(fightDetails.boss.healthMax, 10);
	fightDetails.enemy.healthMax = parseInt(fightDetails.boss.healthMax, 10);
	fightDetails.enemy.defense = parseInt(fightDetails.boss.defense, 10);
	fightDetails.enemy.dodge = parseInt(fightDetails.boss.dodge, 10);
	fightDetails.enemy.speed = parseInt(fightDetails.boss.speed, 10);
	fightDetails.enemy.accuracy = parseInt(fightDetails.boss.accuracy, 10);
	fightDetails.enemy.strength = parseInt(fightDetails.boss.strength, 10);
	fightDetails.enemy.critical = parseInt(fightDetails.boss.critical, 10);
	fightDetails.enemy.level = parseInt(fightDetails.boss.level, 10);
	fightDetails.enemy.exp_gain = parseInt(fightDetails.boss.exp_gain, 10);

	fightDetails.enemy.healthPrct = parseFloat(((fightDetails.enemy.health * 100) / fightDetails.enemy.healthMax).toFixed(2));

	$('#enemyDisplay .healthMax p>span:first-of-type').html(fightDetails.enemy.health);
	$('#enemyDisplay .healthMax p>span:last-of-type').html(fightDetails.enemy.healthMax);

	$('#enemyDisplay .currentHealth').css('width', `${fightDetails.enemy.healthPrct}%`);

	$('#bossIcone').html('[BOSS]');
	$('#enemyName').html(fightDetails.enemy.name);
	$('#enemyLevel').html(fightDetails.enemy.level);

	gameDataLibrary.enemy_skills.filter(oneEnemySkill => oneEnemySkill.enemy_id == fightDetails.boss.id).forEach(thisEnemySkill => {
		let tempEnemySkill = gameDataLibrary.skills.find(oneSkill => oneSkill.id == thisEnemySkill.skill_id);
		fightDetails.enemy.skills.push({
			id: tempEnemySkill.id,
			name: tempEnemySkill.name,
			accuracy_ratio: parseFloat(tempEnemySkill.accuracy_ratio, 10),
			strength_ratio: parseFloat(tempEnemySkill.strength_ratio, 10),
			critical_ratio: parseFloat(tempEnemySkill.critical_ratio, 10),
			cooldown: parseInt(tempEnemySkill.cooldown, 10),
			reloading: parseInt(tempEnemySkill.cooldown, 10),
			damage_type_id: tempEnemySkill.damage_type,
			damage_type_name: gameDataLibrary.damage_types.find(oneDamageType => oneDamageType.id == tempEnemySkill.damage_type).name,
			skill_type_id: tempEnemySkill.skill_type_id,
			skill_type_name: gameDataLibrary.skill_types.find(oneSkillType => oneSkillType.id == tempEnemySkill.skill_type_id).name
		});
	});

	gameDataLibrary.weakness.filter(oneWeakness => oneWeakness.enemies_id == fightDetails.boss.id).forEach(thisWeakness => {
		fightDetails.enemy.weakness.push({
			damage_type: thisWeakness.damage_type,
			ratio: thisWeakness.ratio
		});
	});

}

function cleanEnemy(){
	fightDetails.enemy.name = null;
	fightDetails.enemy.health = 0;
	fightDetails.enemy.healthMax = 0;
	fightDetails.enemy.defense = 0;
	fightDetails.enemy.dodge = 0;
	fightDetails.enemy.speed = 0;
	fightDetails.enemy.accuracy = 0;
	fightDetails.enemy.strength = 0;
	fightDetails.enemy.critical = 0;
	fightDetails.enemy.level = 0;
	fightDetails.enemy.exp_gain = 0;

	fightDetails.enemy.healthPrct = 0;
	fightDetails.enemy.skills = [];
	fightDetails.enemy.weakness = [];
}


function refreshPlayerDisplayAndFightDetails(){
	refreshPlayerStatFightDetails();
	fightDetails.player.name = currentCharacter.name;
	if(fightDetails.nbMobsKilled == 0){
		fightDetails.player.health = parseInt($('#characterPv td:nth-of-type(2)').html(), 10);
		fightDetails.player.skills = [];
	}

	fightDetails.player.healthPrct = parseFloat(((fightDetails.player.health * 100) / fightDetails.player.healthMax).toFixed(2));

	$('#myDisplay .healthMax p>span:first-of-type').html(fightDetails.player.health);
	$('#myDisplay .healthMax p>span:last-of-type').html(fightDetails.player.healthMax);

	$('#myDisplay .currentHealth').css('width', `${fightDetails.player.healthPrct}%`);

	/*fightDetails.player.skills = [];*/
	fightDetails.player.items = [];

	currentCharacter.skills.forEach(oneOfMySkill => {
		let tempSkill = gameDataLibrary.skills.find(oneSkill => oneSkill.id == oneOfMySkill.skill_id);
		if(!fightDetails.player.skills.find(oneSkill => oneSkill.id == tempSkill.id)){
			fightDetails.player.skills.push({
				id: tempSkill.id,
				name: tempSkill.name,
				accuracy_ratio: parseFloat(tempSkill.accuracy_ratio, 10),
				strength_ratio: parseFloat(tempSkill.strength_ratio, 10),
				critical_ratio: parseFloat(tempSkill.critical_ratio, 10),
				cooldown: parseInt(tempSkill.cooldown, 10),
				reloading: parseInt(tempSkill.cooldown, 10),
				damage_type_id: tempSkill.damage_type,
				damage_type_name: gameDataLibrary.damage_types.find(oneDamageType => oneDamageType.id == tempSkill.damage_type).name,
				skill_type_id: tempSkill.skill_type_id,
				skill_type_name: gameDataLibrary.skill_types.find(oneSkillType => oneSkillType.id == tempSkill.skill_type_id).name
			});
    	}
	});

	currentCharacter.inventory.filter(oneItem => oneItem.item_table_name == "items").forEach(oneConsommable => {
		console.log(oneConsommable);
		let tempItem = gameDataLibrary.items.find(oneItem => oneItem.id == oneConsommable.item_id);
		fightDetails.player.items.push({
			id: tempItem.id,
			name: tempItem.name,
			modifier: parseInt(tempItem.modifier, 10),
			damage_type_id: tempItem.damage_type,
			damage_type_name: gameDataLibrary.damage_types.find(oneDamageType => oneDamageType.id == tempItem.damage_type).name,
			quantity: parseInt(oneConsommable.item_quantity, 10),
			item_table_name: oneConsommable.item_table_name
		});
	});
}

function refreshPlayerStatFightDetails(){
	fightDetails.player.healthMax = parseInt($('#characterPv td:nth-of-type(2)').html(), 10);
	fightDetails.player.defense = parseInt($('#characterDefense td:nth-of-type(2)').html(), 10);
	fightDetails.player.dodge = parseInt($('#characterDodge td:nth-of-type(2)').html(), 10);
	fightDetails.player.speed = parseInt($('#characterSpeed td:nth-of-type(2)').html(), 10);
	fightDetails.player.accuracy = parseInt($('#characterAccuracy td:nth-of-type(2)').html(), 10);
	fightDetails.player.strength = parseInt($('#characterStrength td:nth-of-type(2)').html(), 10);
	fightDetails.player.critical = parseInt($('#characterCritical td:nth-of-type(2)').html(), 10);
}

function refreshFightDisplay(){
	// Enemy display
	fightDetails.enemy.healthPrct = parseFloat(((fightDetails.enemy.health * 100) / fightDetails.enemy.healthMax).toFixed(2));

	$('#enemyDisplay .healthMax p>span:first-of-type').html(fightDetails.enemy.health);
	$('#enemyDisplay .healthMax p>span:last-of-type').html(fightDetails.enemy.healthMax);

	$('#enemyDisplay .currentHealth').css('width', `${fightDetails.enemy.healthPrct}%`);


	// Character display
	fightDetails.player.healthPrct = parseFloat(((fightDetails.player.health * 100) / fightDetails.player.healthMax).toFixed(2));

	$('#myDisplay .healthMax p>span:first-of-type').html(fightDetails.player.health);
	$('#myDisplay .healthMax p>span:last-of-type').html(fightDetails.player.healthMax);

	$('#myDisplay .currentHealth').css('width', `${fightDetails.player.healthPrct}%`);
}

function showSkillsListFight(){
	$('#listToUse').removeClass('invisible');
	$('#listToUse').removeClass('hideDisplay');

	$('#listToUse thead td:nth-of-type(1)').html('Type');
	$('#listToUse thead td:nth-of-type(2)').html('Nom');
	$('#listToUse thead td:nth-of-type(3)').html('Recharge');

	$('#listToUse tbody').html('');

	fightDetails.player.skills.forEach((oneSkill, key) => {
		const tr = $('<tr>');
		const skillType = $('<td>');
		const skillName = $('<td>');
		const skillReloading = $('<td>');
		const spanReloading = $('<span class="reloading">');
		const spanCooldown = $('<span class="cooldown">');

		skillType.html(oneSkill.damage_type_name);
		skillName.html(oneSkill.name);
		spanReloading.html(oneSkill.reloading);
		spanCooldown.html(oneSkill.cooldown);

		skillReloading.append(spanReloading, ' / ', spanCooldown);


		tr.append(skillType, skillName, skillReloading);
		tr.attr({
			'data-skill_key': key
		});
		if(oneSkill.reloading != oneSkill.cooldown){
			tr.addClass('reloading');
		}
		tr.on('click', function(){
			if(!$(this).hasClass('reloading')){
				$('#listToUse tbody tr').removeClass('choosen');
				$(this).addClass('choosen');
				fightDetails.player.skillChoosen = parseInt($(this).attr('data-skill_key'), 10);
				fightDetails.player.action = 'skills';
				$('#target').removeClass('hideDisplay');
				window.setTimeout(function(){
					$('#target').removeClass('invisible');
				},10);
			}
		})

		$('#listToUse tbody').append(tr);
	});
	$('#listToUse').removeClass('hideDisplay');
}

function showItemsListFight(){
	$('#listToUse').removeClass('invisible');
	$('#listToUse').removeClass('hideDisplay');

	$('#listToUse thead td:nth-of-type(1)').html('Type');
	$('#listToUse thead td:nth-of-type(2)').html('Nom');
	$('#listToUse thead td:nth-of-type(3)').html('Quantité');

	$('#listToUse tbody').html('');

	fightDetails.player.items.forEach((oneItem, key) => {
		const tr = $('<tr>');
		const itemType = $('<td>');
		const itemName = $('<td>');
		const itemQuantity = $('<td>');

		itemType.html(oneItem.damage_type_name);
		itemName.html(oneItem.name);
		itemQuantity.html(oneItem.quantity);

		tr.append(itemType, itemName, itemQuantity);
		tr.attr({'data-item_key': key});
		tr.on('click', function(){
			$('#listToUse tbody tr').removeClass('choosen');
			$(this).addClass('choosen');
			fightDetails.player.itemChoosen = parseInt($(this).attr('data-item_key'), 10);
			fightDetails.player.action = 'items';
			$('#target').removeClass('hideDisplay');
			window.setTimeout(function(){
				$('#target').removeClass('invisible');
			},100);
		})

		$('#listToUse tbody').append(tr);
	});
	$('#listToUse').removeClass('hideDisplay');
}

function cleanHistoric(){
	$('#historic').html('');
}

function addHistoric(attacker, defenser, action){
	
	const newMessage = $('<p>');
	let txt = `[ TOUR ${fightDetails.turnMeter} ] `;

	if(attacker.name == currentCharacter.name){

		txt += `${attacker.name} `;

		switch(attacker.target){

			case 'player':

				switch (attacker.action) {

					case 'skills':
						txt += ` lance ${fightDetails.player.skills[fightDetails.player.skillChoosen].name} sur lui même. `;
						if(action.damage > 0){
							if (action.critical){
								txt += `Il est devenu fou ! Il ne s'est vraiment pas loupé et s'inflige ${action.damage} dégats !`;
							}
							else{
								txt += `Il est devenu fou ! Il s'inflige ${action.damage} dégats !`;
							}
						}
						else{
							if (action.critical){
								txt += `Il se soigne avec une précision chirurgical et récupère ${action.damage * -1} points de vie !`;
							}
							else{
								txt += `Il se soigne et récupère ${action.damage * -1} points de vie !`;
							}
						}
						break;

					case 'items':

						txt += ` utilise ${fightDetails.player.items[fightDetails.player.itemChoosen].name} sur lui même. `;
						
						if(action.damage > 0){
							txt += `Il est devenu fou ! Il s'inflige ${action.damage} dégats !`;
						}
						else{
							txt += `Il se soigne et récupère ${action.damage * -1} points de vie !`;
						}
						break;
				}
				break;

			case 'enemy':

				switch (attacker.action) {

					case 'attack':
						
						txt += ` attaque ${fightDetails.enemy.name}. `;
						if(action.miss){
							txt += `Il rate sa cible ! `;
						}
						else{
							if(action.damage > 0){
								if (action.critical){
									txt += `Il touche ce qui ressemble à un point faible et `;
								}
								txt += `${fightDetails.enemy.name} subit ${action.damage} dégats !`;

							}
							if(action.damage == 0){
								if (action.critical){
									txt += `Il touche ce qui ressemble à un point faible, mais `;
								}
								txt += `${fightDetails.enemy.name} ne sent absolument rien...`;

							}
							if(action.damage < 0){
								if (action.critical){
									txt += `Il touche ce qui ressemble à un point faible, mais `;
								}
								txt += `${fightDetails.enemy.name} absorbe les dégats qui devaient lui être infligé et récupère ${action.damage * -1} points de vie !`;
							}
						}
						break;

					case 'skills':

						txt += ` lance ${fightDetails.player.skills[fightDetails.player.skillChoosen].name} sur ${fightDetails.enemy.name}. `;

						if(action.miss){
							txt += `Il rate sa cible ! `;
						}
						else{
							if(action.damage > 0){
								if (action.critical){
									txt += `Il touche ce qui ressemble à un point faible et `;
								}
								txt += `${fightDetails.enemy.name} subit ${action.damage} dégats !`;

							}
							if(action.damage == 0){
								if (action.critical){
									txt += `Il touche ce qui ressemble à un point faible, mais `;
								}
								txt += `${fightDetails.enemy.name} ne sent absolument rien...`;

							}
							if(action.damage < 0){
								if (action.critical){
									txt += `Il touche ce qui ressemble à un point faible, mais `;
								}
								txt += `${fightDetails.enemy.name} absorbe les dégats qui devaient lui être infligé et récupère ${action.damage * -1} points de vie !`;
							}
						}
						break;

					case 'items':

						txt += ` lance ${fightDetails.player.items[fightDetails.player.itemChoosen].name} sur ${fightDetails.enemy.name}. `;

						if(action.miss){
							txt += `Il rate sa cible ! `;
						}
						else{
							if(action.damage > 0){
								txt += `${fightDetails.enemy.name} subit ${action.damage} dégats !`;
							}
							if(action.damage == 0){
								txt += `${fightDetails.enemy.name} ne sent absolument rien...`;
							}
							if(action.damage < 0){
								txt += `${fightDetails.enemy.name} absorbe les dégats qui devaient lui être infligé et récupère ${action.damage * -1} points de vie !`;
							}
						}
						break;
				}
				break;
		}
	}
	else{
		txt += `${attacker.name} `;

		switch(attacker.target){

			case 'enemy':

				txt += ` lance ${fightDetails.enemy.skills.find(oneSkill => oneSkill.id == fightDetails.enemy.skillChoosen).name} sur lui même. `;
				if(action.damage > 0){
					if (action.critical){
						txt += `Il est devenu fou ! Il ne s'est vraiment pas loupé et s'inflige ${action.damage} dégats !`;
					}
					else{
						txt += `Il est devenu fou ! Il s'inflige ${action.damage} dégats !`;
					}
				}
				else{
					if (action.critical){
						txt += `Il se soigne avec une précision chirurgical et récupère ${action.damage * -1} points de vie !`;
					}
					else{
						txt += `Il se soigne et récupère ${action.damage * -1} points de vie !`;
					}
				}
				break;

			case 'player':

				txt += ` lance ${fightDetails.enemy.skills.find(oneSkill => oneSkill.id == fightDetails.enemy.skillChoosen).name} sur ${fightDetails.player.name}. `;

				if(action.miss){
					txt += `Il rate sa cible ! `;
				}
				else{
					if(action.damage > 0){
						if (action.critical){
							txt += `Il touche ce qui ressemble à un point faible et `;
						}
						txt += `${fightDetails.player.name} subit ${action.damage} dégats !`;

					}
					if(action.damage == 0){
						if (action.critical){
							txt += `Il touche ce qui ressemble à un point faible, mais `;
						}
						txt += `${fightDetails.player.name} ne sent absolument rien...`;

					}
					if(action.damage < 0){
						if (action.critical){
							txt += `Il touche ce qui ressemble à un point faible, mais `;
						}
						txt += `${fightDetails.player.name} absorbe les dégats qui devaient lui être infligé et récupère ${action.damage * -1} points de vie !`;
					}
				}
				break;
		}
	}


	newMessage.html(txt);
	$('#historic').append(newMessage);
}

function youWin(){
	fightDetails.nbMobsKilled++;
	/*fightDetails.playerPvCheck = fightDetails.player.health;*/
	currentCharacter.exp += fightDetails.enemy.exp_gain;
	verifCharacterExpAndLvlAndBonusPoints();
	$('#counter span').html(fightDetails.nbMobsKilled);
	fightDetails.lastLoots = [];
	randomLoot();

	let txt = `BRAVO ! Vous avez terrasser ${fightDetails.enemy.name} et gagner ${fightDetails.enemy.exp_gain} points d'expériences !`;
	
	if(fightDetails.enemy.isBoss){
		txt += ` Vous venez de terminer le donjon actuel, vous pouvez enfin en sortir et vous reposer un peu...`;
		// we hide the 3 buttons (flee, next fixt, boss fight)
		$('#leaveDungeon').addClass('hideDisplay');
		$('#nextFight').addClass('hideDisplay');
		$('#fightBoss').addClass('hideDisplay');
		$('#fightBoss').attr('disabled', true);
		// we show and enable the "finish button"
		$('#finishDungeon').removeClass('hideDisplay');
		$('#finishDungeon').attr('disabled', false);
		
		currentCharacter.nb_finished_dungeon++;

		updateCharacter({exp: currentCharacter.exp, level: currentCharacter.level, nb_finished_dungeon: currentCharacter.nb_finished_dungeon});
	}
	else{
		if(fightDetails.nbMobsKilled < 10){
			txt += ` Il vous reste encore ${10 - fightDetails.nbMobsKilled} adversaire à vaincre avant de pouvoir affronter le Boss !`;
			$('#fightBoss').attr('disabled', true);
		}
		else{
			txt += ` Vous pouvez tenter votre chance contre le Boss !`;	
			$('#fightBoss').attr('disabled', false);
		}

		updateCharacter({exp: currentCharacter.exp, level: currentCharacter.level});
	}

	$('#lootList').html('');
	fightDetails.lastLoots.forEach(oneLoot => {
		const li = $('<li>')
		let txtLoot = '';
		switch(oneLoot.category){
			case 'items':
				txtLoot += '[OBJET] ';
				break;

			case 'weapons':
				txtLoot += '[ARME] ';
				break;

			case 'armors':
				txtLoot += '[ARMURE] ';
				break;
		}
		txtLoot += `${gameDataLibrary[oneLoot.category][oneLoot.index].name} [x ${oneLoot.quantity}]`;
		li.html(txtLoot);
		$('#lootList').append(li);
	});

	
	$('#fightEndGood p').html(txt);
	fightDetails.turnMeter = 1;
	showFightEndGood();

}

function youLose(){
	let txt = `Non mais tu parles d'un héros... Même pas fichu de tuer un(e) ${fightDetails.enemy.name}... On n'a plus qu'à te rafistoler...`;
	currentCharacter.dead++;
	$('#fightEndBad p').html(txt);
	showFightEndBad();
	updateCharacter({dead: currentCharacter.dead});
}
