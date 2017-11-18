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
	isUserLog();
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

$('#myCharacter>input[type="submit"]:first-child').on('click', characterUnlog);

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
	$('#blackCurtain').addClass('hideDisplay');
	$('#learnNewSkill').addClass('invisible');
	$('#learnNewSkill').addClass('hideDisplay');
	updateCharacterSkills($('#newSkillList tr.choosen').attr('data-skill_id'));
})

$('#learnNewSkill #learnLater').on('click', function(){
	$('#blackCurtain').addClass('invisible');
	$('#blackCurtain').addClass('hideDisplay');
	$('#learnNewSkill').addClass('invisible');
	$('#learnNewSkill').addClass('hideDisplay');
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
	table_name = $('delete_item').attr('data-delete_table_name');
	item_id = $('delete_item').attr('data-delete_id');
	item_quantity_modifier = $('#delete_item_value').val();
	
	updateItemOfInventory(table_name, item_id, item_quantity_modifier);
});

$('#delete_item_value').on('change', function(){
	if($(this).val() > $(this).attr('max')){
		$(this).val($(this).attr('max'));
	}
});


