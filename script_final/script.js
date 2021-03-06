/*
 ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║     ██║   ██║██║  ██║█████╗  
██║     ██║   ██║██║  ██║██╔══╝  
╚██████╗╚██████╔╝██████╔╝███████╗
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
*/
window.addEventListener("load", function(event) {
    console.log("DOM fully loaded and parsed");
    window.setTimeout(isUserLog, 50);
});

/* Welcome */
connexionForm.addEventListener('submit', e => connexionUserTask(e));
inscriptionForm.addEventListener('submit', e => inscriptionUserTask(e));

connexionEmailInput.addEventListener('input', removeWarningOnChange);
connexionPasswordInput.addEventListener('input', removeWarningOnChange);

inscriptionEmailInput.addEventListener('input', removeWarningOnChange);
inscriptionPseudoInput.addEventListener('input', removeWarningOnChange);
inscriptionPasswordInput.addEventListener('input', removeWarningOnChangePassword);
inscriptionConfirmPasswordInput.addEventListener('input', removeWarningOnChangePassword);

/* Character List */

btnCreateCharacter.addEventListener('click', createCharacterDisplay);
btnDeconnexion.addEventListener('click', userUnlog);

/* Character Creation */

$('#newCharRace').on('change', refreshPreview);
$('#newCharClass').on('change', refreshPreview);
$('#newCharHealthMax').on('change', refreshPreview);
$('#newCharDefense').on('change', refreshPreview);
$('#newCharDodge').on('change', refreshPreview);
$('#newCharSpeed').on('change', refreshPreview);
$('#newCharAccuracy').on('change', refreshPreview);
$('#newCharStrength').on('change', refreshPreview);
$('#newCharCritical').on('change', refreshPreview);

$('#newCharHealthMax').on('blur', verifStepCreation);
$('#newCharDefense').on('blur', verifStepCreation);
$('#newCharDodge').on('blur', verifStepCreation);
$('#newCharSpeed').on('blur', verifStepCreation);
$('#newCharAccuracy').on('blur', verifStepCreation);
$('#newCharStrength').on('blur', verifStepCreation);
$('#newCharCritical').on('blur', verifStepCreation);

$('#creation form').on('submit', e => saveCharacter(e));
characterCreationDiv.querySelector('input.cancel').addEventListener('click', cancelCreationCharacter);

/* Ingame - myCharacter */

$('#changeCharacter').on('click', characterUnlog);

$('.equiped select').on('change', function(){
	adaptEquipementAndStance();
	refreshFightingStance();
	refreshCharacterStats();
});
$('.equiped select').on('change', saveCharacterEquipements);

$('#fightStance label').on('click', function(){
	if (!($(this).hasClass('notMyClass')) && !($(this).hasClass('disabled'))){
		$('#fightStance label').removeClass('choosen');
		$(this).addClass('choosen');
	}
});

$('#fightStance input[type="radio"]').on('change', function(){
	console.log($(this));
	refreshFightingStance();
});

$('#attributePointsBtn').on('click', displayAttributeBonusPointsPanel);

$('#attributeBonusPointsPanel input[type="number"]').on('change', updateDisplayAttributeBonusPointsPanel);
$('#attributeBonusPointsPanel input[type="number"]').on('blur', updateDisplayAttributeBonusPointsPanel);

$('#validateAttributePointsBtn').on('click', verifAttributePointBonus);

$('#cancelAttributePointsBtn').on('click', function(){
	$('#attributeBonusPointsPanel').addClass('hideRight');
	$('#attributePointsBtn').attr('disabled', false);
	console.log('Attribution des points annulées');
});

$('#learnNewSkill #learnThisSkill').on('click', function(){
	$('#blackCurtain').addClass('invisible');
	$('#learnNewSkill').addClass('invisible');
	window.setTimeout(function(){
		$('#blackCurtain').addClass('hideDisplay');
		$('#learnNewSkill').addClass('hideDisplay');
	}, 1000);
	updateCharacterSkills($('#newSkillList tr.choosen').attr('data-skill_id'));
})

$('#learnNewSkill #learnLater').on('click', function(){
	$('#blackCurtain').addClass('invisible');
	$('#learnNewSkill').addClass('invisible');
	window.setTimeout(function(){
		$('#blackCurtain').addClass('hideDisplay');
		$('#learnNewSkill').addClass('hideDisplay');
	}, 1000);
})

$('#openLearnNewSkill').on('click', displayChooseNewSkillPanel);

$('#inventoriesName li').on('click', function(){
	$('#inventoriesName li').removeClass('choosen');
	$(this).addClass('choosen');

	$('#delete_item').attr('disabled', true);
	$('#delete_item_value').addClass('hideDisplay');
	$('#delete_item_value').val('0');

	refreshCharacterInventoryChoosenList($(this).attr('data-table'));
});

$('#delete_item').on('click', function(){
	table_name = $('#delete_item').attr('data-delete_table_name');
	item_id = $('#delete_item').attr('data-delete_id');
	item_quantity_modifier = $('#delete_item_value').val() * -1;
	
	updateItemOfInventory(table_name, item_id, item_quantity_modifier);
	$(this).attr({
		'data-delete_id': 0,
		'data-delete_table_name': 'none',
		'disabled': true
	})
	$('#delete_item_value').attr({
		'value':0,
		'min':0,
		'max':1
	});
	$('#delete_item_value').addClass('hideDisplay');
});

$('#delete_item_value').on('change', function(){
	if(parseInt($(this).val(), 10) > parseInt($(this).attr('max'), 10)){
		$(this).val($(this).attr('max'));
	}
});

$('#startDungeon').on('click', dungeonStart);
$('#fightPanel #attack').on('click', function(){
	$('#listToUse').addClass('invisible');
	$('#target').addClass('invisible');
	window.setTimeout(function(){
		$('#listToUse').addClass('hideDisplay');
		$('#target').addClass('hideDisplay');
	},10);
	fightDetails.player.action = 'attack';
	fightDetails.player.target = 'enemy';
	gameTurn();
});
$('#fightPanel #useSkill').on('click', showSkillsListFight);
$('#fightPanel #useItem').on('click', showItemsListFight);
$('#fightPanel #flee').on('click', dungeonFlee);

$('#fightPanel #targetMyself').on('click', function(){
	fightDetails.player.target = 'player';
	gameTurn();

});
$('#fightPanel #targetEnemy').on('click', function(){
	fightDetails.player.target = 'enemy';
	gameTurn();
});
$('#fightPanel #target input[type="submit"]').on('click', function(){
	$('#listToUse').addClass('invisible');
	$('#target').addClass('invisible');
	window.setTimeout(function(){
		$('#listToUse').addClass('hideDisplay');
		$('#target').addClass('hideDisplay');
	},10);
});

$('#leaveDungeon').on('click', dungeonFlee);
$('#nextFight').on('click', nextFight);
$('#fightBoss').on('click', fightBoss);
$('#finishDungeon').on('click', dungeonFinish);

$('#resurrection').on('click', dungeonFlee);

