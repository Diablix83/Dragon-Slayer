/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function displayChooseNewSkillPanel(){
	console.groupCollapsed('displayChooseNewSkillPanel');
	$('#newSkillTypes').html('');
	$('#newSkillList tbody').html('');
	$('#skillDetails').html('');

	$('#blackCurtain').removeClass('hideDisplay');
	$('#learnNewSkill').removeClass('hideDisplay');
	window.setTimeout(function(){
		$('#blackCurtain').removeClass('invisible');
		$('#learnNewSkill').removeClass('invisible');
	}, 10);
	
	const skill_types_allowed = Array.from(gameDataLibrary.class_skill_types.filter(classSkillType => classSkillType.class_id == currentCharacter.class.id));

	skill_types_allowed.forEach( skillTypeAllowed => {
		//skillTypeAllowed.skillsList = gameDataLibrary.skills.filter(oneSkill => oneSkill.skill_type_id == skillTypeAllowed.skill_type_id)

		const skillTypePanelLabel = $(`<div id="skill_type_allowed_${skillTypeAllowed.skill_type_id}">`);
		const titleLabel = $('<h3>');
		switch (skillTypeAllowed.skill_type_id) {
			case '1':
				titleLabel.html('Techniques pour armes de mélée');
				break;

			case '2':
				titleLabel.html('Techniques pour armes à distance');
				break;

			case '3':
				titleLabel.html('Sorts pour lanceur de sorts');
				break;
		}

		skillTypePanelLabel.append(titleLabel);
		
		skillTypePanelLabel.attr('data-skill_type_id', skillTypeAllowed.skill_type_id);
		
		skillTypePanelLabel.on('click', function(){
			$('#newSkillTypes>div').removeClass('choosen');
			$(this).addClass('choosen');
			chooseNewSkillPanel($(this).attr('data-skill_type_id'));
			$('#learnNewSkill learnThisSkill').attr('disabled', true);
		});

		$('#newSkillTypes').append(skillTypePanelLabel);
	});
	console.log(skill_types_allowed);
	console.groupEnd('displayChooseNewSkillPanel');
}

function chooseNewSkillPanel(choosenSkillTypeId){
	console.groupCollapsed('chooseNewSkillPanel');
	$('#newSkillList tbody').html('');
	$('#skillDetails').html('');
	console.log(choosenSkillTypeId);
	const choosenSkillsList = gameDataLibrary.skills.filter(oneSkill => (
			oneSkill.skill_type_id == choosenSkillTypeId
			&& parseInt(oneSkill.level_required, 10) <= parseInt(currentCharacter.level, 10)
		));
	console.log(choosenSkillsList);
	choosenSkillsList.forEach( oneSkill => {
		oneSkill.damage_type_name = gameDataLibrary.damage_types.find(anotherItem => anotherItem.id == oneSkill.damage_type).name;
			
		oneSkill.skill_type_name = gameDataLibrary.skill_types.find(anotherItem => anotherItem.id == oneSkill.skill_type_id).name;

		//console.log(oneSkill);

		const tr = $('<tr>');
		const levelRequired = $('<td>');
		const skillName = $('<td>');
		const skillType = $('<td>');

		levelRequired.html(`[${oneSkill.level_required}]`);
		skillName.html(oneSkill.name);
		skillType.html(`[${oneSkill.damage_type_name}]`);
		
		tr.append(levelRequired, skillName, skillType);

		tr.attr({
			'data-skill_name': oneSkill.name,
			'data-skill_id': oneSkill.id,
			'data-skill_type_id': oneSkill.skill_type_id,
			'data-skill_type_name': oneSkill.skill_type,
			'data-damage_type_id': oneSkill.damage_type.id,			
			'data-damage_type_name': oneSkill.damage_type_name,			
			'data-cooldown': oneSkill.cooldown,			
			'data-accuracy_ratio': oneSkill.accuracy_ratio,
			'data-strength_ratio': oneSkill.strength_ratio,
			'data-critical_ratio': oneSkill.critical_ratio
		})
		if((currentCharacter.skills.find(mySkill => mySkill.skill_id == oneSkill.id)) != null){
			tr.addClass('alreadyLearn');
		}

		tr.on('click', function(){
			$('#newSkillList tbody tr').removeClass('choosen');
			$(this).addClass('choosen');
			displaySkillDetails($(this));
			if($(this).hasClass('alreadyLearn')){
				$('#learnNewSkill #learnThisSkill').attr('disabled', true);
			}
			else{
				$('#learnNewSkill #learnThisSkill').attr('disabled', false);
			}
		});
		$('#newSkillList tbody').append(tr);

	});

	console.groupEnd('chooseNewSkillPanel');
}

function displaySkillDetails(trSkill){
	$('#skillDetails').html('');

	const skillName = $('<h4>');
	const skillType = $('<p>');
	const damageType = $('<p>');
	const cooldown = $('<p>');
	const accBonus = $('<p>');
	const strBonus = $('<p>');
	const crtBonus = $('<p>');

	skillName.html(trSkill.attr('data-skill_name'));
	switch(trSkill.attr('data-skill_type_id')){
		case '1':
			skillType.html('Pour arme de mélée');
			break
		case '2':
			skillType.html('Pour arme à distance');
			break
		case '3':
			skillType.html('Pour lanceur de sorts');
			break
	}
	damageType.html(`Type : ${trSkill.attr('data-damage_type_name')}`);
	cooldown.html(`Temps de recharge : ${trSkill.attr('data-cooldown')} tour(s)`);
	accBonus.html(`Bonus précision (multiplicateur) : ${trSkill.attr('data-accuracy_ratio')}`);
	strBonus.html(`Bonus force (multiplicateur) : ${trSkill.attr('data-strength_ratio')}`);
	crtBonus.html(`Bonus critique (multiplicateur) : ${trSkill.attr('data-critical_ratio')}`);
	$('#skillDetails').append(skillName, skillType, damageType, cooldown, accBonus, strBonus, crtBonus);
}

function updateCharacterSkills(skillId){

	const data = {
		character_id: currentCharacter.id,
		skill_id: skillId
	}
	console.log(data);
	$.post(`php/askdb.php?controller=players&task=updateCharacterSkills`, data, function(donnees){
			console.log(donnees);
			$.getJSON(`php/askdb.php?controller=players&task=recupCharacterDetail&charId=${currentCharacter.id}`, function(donnees){

				currentCharacter.skills = donnees.skills;

				$('#inventoriesName li').removeClass('choosen');
				$('#inventoriesName #allSkills').addClass('choosen');

				verifNbSkillToLearn();
				refreshCharacterInventory();
				refreshCharacterInventoryChoosenList('skills');
				
				if(fightDetails.fight){
					refreshPlayerDisplayAndFightDetails();
				}

			});
		});
}

function verifNbSkillToLearn(){
	const nbSkillAlreadyLearn = currentCharacter.skills.length;

	currentCharacter.nbSkillToLearn = parseInt(currentCharacter.level, 10) - nbSkillAlreadyLearn;

	if(currentCharacter.nbSkillToLearn > 0){
		$('#nbSkillToLearn').html(currentCharacter.nbSkillToLearn);
		$('#openLearnNewSkill').attr('disabled', false);
		$('#openLearnNewSkill').removeClass('invisible');
	}
	else{
		currentCharacter.nbSkillToLearn = 0;
		$('#nbSkillToLearn').html(currentCharacter.nbSkillToLearn);
		$('#openLearnNewSkill').attr('disabled', true);
		$('#openLearnNewSkill').addClass('invisible');
	}
}

