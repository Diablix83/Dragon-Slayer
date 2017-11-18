/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/
/*function getRandomIntInclusive(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}*/

function gameTurn(){
	if(fightDetails.fight){
		if(fightDetails.player.speed >= fightDetails.enemy.speed){
			console.log('player > enemy');
			playerTurn();
			if(fightDetails.enemy.health <= 0){	youWin(); }
			else{
				enemyTurn();
				if(fightDetails.enemy.health <= 0){	youLose(); }
			}
		}
		else{
			console.log('enemy > player');
			enemyTurn();
			if(fightDetails.player.health <= 0){ youLose(); }
			else{
				playerTurn();
				if(fightDetails.enemy.health <= 0){	youWin(); }
			}
		}
		if(fightDetails.player.health <= 0){ youLose(); }

		fightDetails.player.action = null;
		fightDetails.player.target = null;
		fightDetails.player.skillChoosen = null;
		fightDetails.player.itemChoosen = null;

		fightDetails.turnMeter++;

		fightDetails.player.skills.forEach(mySkill => {
			if(mySkill.reloading != mySkill.cooldown){
				mySkill.reloading++;
			}
		});
		
		fightDetails.enemy.skills.forEach(enemySkill => {
			if(enemySkill.reloading != enemySkill.cooldown){
				enemySkill.reloading++;
			}
		});
		
	}
}





function playerTurn(){
	console.group('playerTurn');
	// some variable to save the result of the action choosen by the player
	const myAction = {
    	damage: 0,
    	critical: false,
    	miss: false,
    	targetWeakness: false,
    	weaknessRatio: 1
    }

    // who is the target ?
	switch(fightDetails.player.target){
		case 'player':
			// accuracy = 100%
			// what kind of action did the player want to do ?
			switch(fightDetails.player.action){
				case 'skills':
					// roll to crit !
					const critOnMySelf = getRandomIntInclusive(1, 100);
					// don't forget to use the criticalRatio of the skill
					let skillCriticalRatio = fightDetails.player.skills[fightDetails.player.skillChoosen].critical_ratio;
					// don't forget to use the strengthRatio of the skill
					let skillStrengthRatio = fightDetails.player.skills[fightDetails.player.skillChoosen].strength_ratio;

					if(critOnMySelf => (100 - (fightDetails.player.critical * skillCriticalRatio))){
						myAction.critical = true;
					}
					
					// to calculate the damage, we will use the weapon's strength for the random part...
					// so... let's get the  weapon's strength !
					let weaponStrength = parseInt($('#characterStrength .weapons').html(), 10);
					
					myAction.damage = (fightDetails.player.strength + getRandomIntInclusive(1, weaponStrength)) * skillStrengthRatio;

					// the skill will now enter in the reloading phase !
					fightDetails.player.skills[fightDetails.player.skillChoosen].reloading = 0;
					break;

				case 'items':
					// for item, we can't crit, and we have a flat value of damage / heal, so... let's get it !
					myAction.damage = fightDetails.player.items[fightDetails.player.itemChoosen].modifier;
					fightDetails.player.items[fightDetails.player.itemChoosen].quantity--;
					break;
			}
			if(myAction.critical){
				myAction.damage *= 1.5;
			}

			fightDetails.player.health -= myAction.damage;
			if(fightDetails.player.health < 0) fightDetails.player.health = 0;
			if(fightDetails.player.health > fightDetails.player.healthMax) fightDetails.player.health = fightDetails.player.healthMax;
			break;

		case 'enemy':
			switch(fightDetails.player.action){
				case 'attack':
					// roll to touch the target !
					touchAndCritRoll(fightDetails.player, fightDetails.enemy, myAction);
					switch (currentCharacter.fighting_stance) {
						case '1':
						case '2':
							if(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == currentCharacter.equipements.hand_1.damage_type)){
								myAction.targetWeakness = true;
								myAction.weaknessRatio = parseFloat(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == currentCharacter.equipements.hand_1.damage_type).ratio);
							}

							let weaponStrength = parseInt($('#characterStrength .weapons').html(), 10);
							myAction.damage = (fightDetails.player.strength - fightDetails.enemy.defense) + getRandomIntInclusive(1, weaponStrength);
							
							if(myAction.damage < 0){
								myAction.damage = 0;
							}

							if(myAction.targetWeakness){
								myAction.damage = Math.round(myAction.damage * myAction.weaknessRatio);
							}
							break;

						case '3':
							// 2 differents weapons to use !
							// the first one :
							// Is the enemy weak against our first weapon ?
							if(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == currentCharacter.equipements.hand_1.damage_type)){
								myAction.targetWeakness = true;
								myAction.weaknessRatio = parseFloat(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == currentCharacter.equipements.hand_1.damage_type).ratio);
							}

							// We get the strength of the first weapon, and we apply a little ratio to balance the damage. (well, we try at last...)
							let weapon1Strength = parseInt(currentCharacter.equipements.hand_1.strength, 10) * 0.75;
							let damageWeapon1 = (fightDetails.player.strength - fightDetails.enemy.defense) + getRandomIntInclusive(1, weapon1Strength);

							if(damageWeapon1 < 0){
								damageWeapon1 = 0;
							}

							// and we apply the weakness ratio if necessary :
							if(myAction.targetWeakness){
								damageWeapon1 = Math.round(damageWeapon1 * myAction.weaknessRatio);
							}


							// the second and last one :
							// we do the same thing as for the first weapon, so read above !
							if(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == currentCharacter.equipements.hand_2.damage_type)){
								myAction.targetWeakness2 = true;
								myAction.weaknessRatio2 = parseFloat(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == currentCharacter.equipements.hand_2.damage_type).ratio);
							}
							else myAction.targetWeakness2 = false;

							let weapon2Strength = parseInt(currentCharacter.equipements.hand_2.strength, 10) * 0.5;
							let damageWeapon2 = (fightDetails.player.strength - fightDetails.enemy.defense) + getRandomIntInclusive(1, weapon2Strength);
							
							if(damageWeapon2 < 0){
								damageWeapon2 = 0;
							}

							if(myAction.targetWeakness2){
								damageWeapon2 = Math.round(damageWeapon2 * myAction.weaknessRatio2);
							}

							// finally, we sum the damage of both weapons :
							myAction.damage = damageWeapon1 + damageWeapon2;
							
							break;
					}
					break;

				case 'skills':
					if(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == fightDetails.player.skills[fightDetails.player.skillChoosen].damage_type_id)){
						myAction.targetWeakness = true;
						myAction.weaknessRatio = parseFloat(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == fightDetails.player.skills[fightDetails.player.skillChoosen].damage_type_id).ratio);
					}

					let skillAccuracyRatio = fightDetails.player.skills[fightDetails.player.skillChoosen].accuracy_ratio;
					let skillCriticalRatio = fightDetails.player.skills[fightDetails.player.skillChoosen].critical_ratio;
					touchAndCritRoll(fightDetails.player, fightDetails.enemy, myAction, skillAccuracyRatio, skillCriticalRatio);

					let skillStrengthRatio = fightDetails.player.skills[fightDetails.player.skillChoosen].strength_ratio;
					let weaponStrength = parseInt($('#characterStrength .weapons').html(), 10);
					myAction.damage = ((fightDetails.player.strength - fightDetails.enemy.defense) + getRandomIntInclusive(1, weaponStrength)) * skillStrengthRatio;

					if(myAction.damage < 0){
						myAction.damage = 0;
					}
					
					if(myAction.targetWeakness){
						myAction.damage = Math.round(myAction.damage * myAction.weaknessRatio);
					}

					fightDetails.player.skills[fightDetails.player.skillChoosen].reloading = 0;
					break;

				case 'items':
					if(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == fightDetails.player.items[fightDetails.player.itemChoosen].damage_type_id)){
						myAction.targetWeakness = true;
						myAction.weaknessRatio = parseFloat(fightDetails.enemy.weakness.find(oneWeakness => oneWeakness.damage_type == fightDetails.player.items[fightDetails.player.itemChoosen].damage_type_id).ratio);
					}
					
					// touchAndCritRoll() without the 2 ratio (accuracy ratio and critical ratio) and the Crit section
				    att = fightDetails.player.accuracy * 100 / fightDetails.enemy.dodge;
				    def = 100;
				    rate = def - att;
				    
				    touche = getRandomIntInclusive(1, 100);
				    
				    //modification of this part : if(touche > rate){...}else{...}  -> if(touche < rate){...}
				    if(touche < rate){
				    	myAction.miss = true;
				    }
				    
				    myAction.damage = fightDetails.player.items[fightDetails.player.itemChoosen].modifier;

					if(myAction.targetWeakness){
						myAction.damage = Math.round(myAction.damage * myAction.weaknessRatio);
					}
					fightDetails.player.items[fightDetails.player.itemChoosen].quantity--;
					updateItemOfInventory('items', fightDetails.player.items[fightDetails.player.itemChoosen].id, -1);
					break;
			}
			if(!myAction.miss){
				if(myAction.critical){
					myAction.damage *= 1.5;
				}

				fightDetails.enemy.health -= myAction.damage;				
				if(fightDetails.enemy.health < 0) fightDetails.enemy.health = 0;
				if(fightDetails.enemy.health > fightDetails.enemy.healthMax) fightDetails.enemy.health = fightDetails.enemy.healthMax;
			}

			
			break;
	}
	console.log(myAction);
	console.groupEnd('playerTurn');

	refreshFightDisplay();
	addHistoric(fightDetails.player,fightDetails.enemy, myAction);


}





function enemyTurn(){
	console.group('enemyTurn');
	// some variable to save the result of the action choosen by the enemy
	const enemyAction = {
		damage: 0,
		critical: false,
		miss: false,
		weaknessRatio: -1
	}

	// if enemy's health is strictly superior to 50% :
	if(fightDetails.enemy.healthPrct > 50){
		// ATTAAACK !!!
		fightDetails.enemy.target = 'player';
		// we prepare a list of offensive skill, not in reloading phase, to blast the opponent :
		let tempOffensiveSkillsList = fightDetails.enemy.skills.filter(enemySkill => enemySkill.damage_type_id != 10 && enemySkill.reloading == enemySkill.cooldown);

		let choosenSkill = getRandomIntInclusive(0, tempOffensiveSkillsList.length - 1);

		let skillAccuracyRatio = tempOffensiveSkillsList[choosenSkill].accuracy_ratio;
		let skillCriticalRatio = tempOffensiveSkillsList[choosenSkill].critical_ratio;
		touchAndCritRoll(fightDetails.enemy, fightDetails.player, enemyAction, skillAccuracyRatio, skillCriticalRatio);

		let skillStrengthRatio = tempOffensiveSkillsList[choosenSkill].strength_ratio;
		enemyAction.damage = ((fightDetails.enemy.strength - fightDetails.player.defense) + getRandomIntInclusive(1, fightDetails.enemy.strength)) * skillStrengthRatio;

		if(enemyAction.damage < 0){
			enemyAction.damage = 0;
		}

		if(!enemyAction.miss){
			if(enemyAction.critical){
				enemyAction.damage *= 1.5;
			}

			fightDetails.player.health -= enemyAction.damage;				
			if(fightDetails.player.health < 0) fightDetails.player.health = 0;
			if(fightDetails.player.health > fightDetails.player.healthMax) fightDetails.player.health = fightDetails.player.healthMax;
		}
		// to find the right skill, we'll use "tempOffensiveSkillsList", we're looking for the ID in the "skillChoosen"
		// now that we've found the right skill, we're gonna set the reloading to 0 !
		fightDetails.enemy.skills.find(oneSkill => oneSkill.id == tempOffensiveSkillsList[choosenSkill].id).reloading = 0;
		fightDetails.enemy.skillChoosen = fightDetails.enemy.skills.find(oneSkill => oneSkill.id == tempOffensiveSkillsList[choosenSkill].id).id;
		
	}
	else{
		// looking for healing skill, not in reloading phase :
		let tempHealingSkillsList = fightDetails.enemy.skills.filter(enemySkill => enemySkill.damage_type_id == 10 && enemySkill.reloading == enemySkill.cooldown);
		if(tempHealingSkillsList.length > 0){
			console.log("L'ennemie a au moins un skill de soin");
			fightDetails.enemy.target = 'enemy';
			// we're sorting the "tempHealingSkillsList" to find the skill with the longest cooldown (the longer the cooldown, the stronger the power...)
			let sortedHealingSkillsList = tempHealingSkillsList.sort((a, b) => a.cooldown < b.cooldown ? 1 : -1);

			// roll to crit !
			let critOnItSelf = getRandomIntInclusive(1, 100);
			// don't forget to use the criticalRatio of the skill ()
			let skillCriticalRatio = sortedHealingSkillsList[0].critical_ratio;
			// don't forget to use the strengthRatio of the skill
			let skillStrengthRatio = sortedHealingSkillsList[0].strength_ratio;

			if(critOnItSelf => (100 - (fightDetails.enemy.critical * skillCriticalRatio))){
				enemyAction.critical = true;
			}
			
			enemyAction.damage = (fightDetails.enemy.strength + getRandomIntInclusive(1, fightDetails.enemy.strength)) * skillStrengthRatio;
			
			if(enemyAction.critical){
				enemyAction.damage *= 1.5;
			}

			fightDetails.enemy.health -= enemyAction.damage;				
			if(fightDetails.enemy.health < 0) fightDetails.enemy.health = 0;
			if(fightDetails.enemy.health > fightDetails.enemy.healthMax) fightDetails.enemy.health = fightDetails.enemy.healthMax;

			// the skill will now enter in the reloading phase !
			fightDetails.enemy.skills.find(oneSkill => oneSkill.id == sortedHealingSkillsList[0].id).reloading = 0;
			fightDetails.enemy.skillChoosen = fightDetails.enemy.skills.find(oneSkill => oneSkill.id == sortedHealingSkillsList[0].id).id;
		}
		else{
			console.log("L'ennemie n'a pas de skill de soin");
			// Do we have an "absorbtion weakness" ? (weakness.ratio < 0)
			let absorbedWeaknessList = fightDetails.enemy.weakness.filter(oneWeakness => parseFloat(oneWeakness.ratio) < 0).sort((a, b) => parseFloat(a.ratio) > parseFloat(b.ratio) ? 1 : -1)
    		if(absorbedWeaknessList.length > 0){
    			// if we have one :
	    		let tempOffensiveSkillsToHealList = fightDetails.enemy.skills.filter(enemySkill => enemySkill.damage_type_id != 10 && enemySkill.reloading == enemySkill.cooldown);
	 
	    		if(tempOffensiveSkillsToHealList.length > 0){
	    			let filterOffensiveSkillsToHealList = [];
	    			// We look in each skill
	    			tempOffensiveSkillsToHealList.forEach(oneSkill => {
	    				// and compare with each "absorbed weakness"
	    				absorbedWeaknessList.forEach(oneAbsorbedWeakness => {
	    					// if the skill is of the same element of one of the absorbed weakness, we push it in "filterOffensiveSkillsToHealList"
	    					if(oneSkill.damage_type_id == oneAbsorbedWeakness.damage_type){
	    						filterOffensiveSkillsToHealList.push(oneSkill);
	    					}
	    				});
	    			});

    				// if we have a skill to heal ourselves :
	    			if(filterOffensiveSkillsToHealList.length > 0){
		    			console.log('Mais il peut se soigner tout seul !')
						fightDetails.enemy.target = 'enemy';
						let sortedOffensiveSkillsToHealList = filterOffensiveSkillsToHealList.sort((a, b) => a.cooldown < b.cooldown ? 1 : -1);
						// roll to crit !
						let critOnItSelf = getRandomIntInclusive(1, 100);
						// don't forget to use the criticalRatio of the skill ()
						let skillCriticalRatio = sortedOffensiveSkillsToHealList[0].critical_ratio;
						// don't forget to use the strengthRatio of the skill
						let skillStrengthRatio = sortedOffensiveSkillsToHealList[0].strength_ratio;

						if(critOnItSelf => (100 - (fightDetails.enemy.critical * skillCriticalRatio))){
							enemyAction.critical = true;
						}
						
						// to calculate the damage, we will use the weapon's strength for the random part...
						// so... let's get the  weapon's strength !
						
						enemyAction.damage = (fightDetails.enemy.strength + getRandomIntInclusive(1, fightDetails.enemy.strength)) * skillStrengthRatio;
						
						// we apply the absorbed weakness ratio
						enemyAction.weaknessRatio = absorbedWeaknessList.find(oneWeakness => oneWeakness.damage_type == sortedOffensiveSkillsToHealList[0].damage_type_id).ratio;
						
						enemyAction.damage = Math.round(enemyAction.damage * parseFloat(enemyAction.weaknessRatio));

						if(enemyAction.critical){
							enemyAction.damage *= 1.5;
						}

						fightDetails.enemy.health -= enemyAction.damage;
						if(fightDetails.enemy.health < 0) fightDetails.enemy.health = 0;
						if(fightDetails.enemy.health > fightDetails.enemy.healthMax) fightDetails.enemy.health = fightDetails.enemy.healthMax;

						// the skill will now enter in the reloading phase !
						fightDetails.enemy.skills.find(oneSkill => oneSkill.id == sortedOffensiveSkillsToHealList[0].id).reloading = 0;
						fightDetails.enemy.skillChoosen = fightDetails.enemy.skills.find(oneSkill => oneSkill.id == sortedOffensiveSkillsToHealList[0].id).id;
					}
	    		}
    			
    		}
    		else{
    			// if we don't have any skill that could heal, it's time to :
				// ATTAAACK !!!
				fightDetails.enemy.target = 'player';
				console.log('Donc il attaque...')
				// we prepare a list of offensive skill, not in reloading phase, to blast the opponent :
				let tempOffensiveSkillsList = fightDetails.enemy.skills.filter(enemySkill => enemySkill.damage_type_id != 10 && enemySkill.reloading == enemySkill.cooldown);
				let sortedOffensiveSkillsList = tempOffensiveSkillsList.sort((a, b) => a.cooldown < b.cooldown ? 1 : -1);

				let skillAccuracyRatio = sortedOffensiveSkillsList[0].accuracy_ratio;
				let skillCriticalRatio = sortedOffensiveSkillsList[0].critical_ratio;
				touchAndCritRoll(fightDetails.enemy, fightDetails.player, enemyAction, skillAccuracyRatio, skillCriticalRatio);

				let skillStrengthRatio = sortedOffensiveSkillsList[0].strength_ratio;
				enemyAction.damage = ((fightDetails.enemy.strength - fightDetails.player.defense) + getRandomIntInclusive(1, fightDetails.enemy.strength)) * skillStrengthRatio;

				if(enemyAction.damage < 0){
					enemyAction.damage = 0;
				}

				if(!enemyAction.miss){
					if(enemyAction.critical){
						enemyAction.damage *= 1.5;
					}

					fightDetails.player.health -= enemyAction.damage;				
					if(fightDetails.player.health < 0) fightDetails.player.health = 0;
					if(fightDetails.player.health > fightDetails.player.healthMax) fightDetails.player.health = fightDetails.player.healthMax;
				}

				// to find the right skill, we'll use "sortedOffensiveSkillsList", we're looking for the ID in the "skillChoosen"
				// now that we've found the right skill, we're gonna set the reloading to 0 !
				fightDetails.enemy.skills.find(oneSkill => oneSkill.id == sortedOffensiveSkillsList[0].id).reloading = 0;
				fightDetails.enemy.skillChoosen = fightDetails.enemy.skills.find(oneSkill => oneSkill.id == sortedOffensiveSkillsList[0].id).id;
    		}
		}
    }
	console.log(enemyAction);
	console.groupEnd('enemyTurn');
    
	refreshFightDisplay();
	addHistoric(fightDetails.enemy,fightDetails.player, enemyAction);

}

function touchAndCritRoll(attacker, defenser, tryingAction, accuracyRatio = 1, criticalRatio = 1){
    // Tranposons tous en % en considérant que defenser.dodge est le 100%:
    // Produit en croix :   defenser = 60 -> 100%
    //                      attacker = 50 -> ???%
    att = (attacker.accuracy * accuracyRatio) * 100 / defenser.dodge;
    def = 100;
    rate = def - att;
    
    touche = getRandomIntInclusive(1, 100);
    
    if(touche > rate){
        if(touche >= (100 - (attacker.critical * criticalRatio))){ tryingAction.critical = true; }
    }
    else{ tryingAction.miss = true; }
}

