/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/

function cleanHighlightItemChoosen(){
	$('#itemChoosen').html('');
}

function cleanHighlightItemHover(){
	$('#itemHover').html('');
}

function highlightItemContent(myItemElement){
	let highlightContent = '';
	switch (myItemElement.attr('data-type')) {
		case 'item':
			console.log('item');
			highlightContent += `<h3>Objet</h3>`;
			highlightContent += `<h4>${myItemElement.attr('data-item_name')} `;
			highlightContent += ` [${myItemElement.attr('data-damage_type_name')}]</h4>`;
			if(parseInt(myItemElement.attr('data-item_modifier'), 10) > 0){
				highlightContent += `<p>Dégats : ${myItemElement.attr('data-item_modifier')}</p>`;
			}
			else if(parseInt(myItemElement.attr('data-item_modifier'), 10) < 0){
				highlightContent += `<p>Soigne : ${myItemElement.attr('data-item_modifier') * -1}</p>`;
			}
			break;

		case 'armor':
			console.log('armor');
			highlightContent += `<h3>Armure</h3>`;
			highlightContent += `<h4>${myItemElement.attr('data-item_name')}</h4>`;
			highlightContent += `<p>Emplacement : `;
			switch (myItemElement.attr('data-emplacement')) {
				case 'head':
					highlightContent += `Tête</p>`;
					break;
				case 'torso':
					highlightContent += `Torse</p>`;
					break;
				case 'hands':
					highlightContent += `Gants</p>`;
					break;
				case 'legs':
					highlightContent += `Jambes</p>`;
					break;
				case 'feet':
					highlightContent += `Pieds</p>`;
					break;
			}
			highlightContent += `<p>Type d'armrure : ${myItemElement.attr('data-armor_type_name')}</p>`;
			highlightContent += `<p>Bonus défense : ${myItemElement.attr('data-defense')}</p>`;
			highlightContent += `<p>Bonus esquive : ${myItemElement.attr('data-dodge')}</p>`;
			highlightContent += `<p>Bonus vitesse : ${myItemElement.attr('data-speed')}</p>`;
			break;

		case 'weapon':
			console.log('weapon');
			highlightContent += `<h3>Arme</h3>`;
			highlightContent += `<h4>${myItemElement.attr('data-item_name')}</h4>`;
			switch(myItemElement.attr('data-item_hands_number')){
				case '1':
					highlightContent += `<p>Arme à 1 main</p>`;
					break;

				case '2':
					highlightContent += `<p>Arme à 2 mains</p>`;
					break;

				case '3':
					highlightContent += `<p>Arme polyvalente</p>`;
					break;
			}
			highlightContent += `<p>Type de dégats : ${myItemElement.attr('data-damage_type_name')}</p>`;
			switch(myItemElement.attr('data-skill_type_name')){
				case 'melee':
					highlightContent += `<p>Arme de mélée</p>`;
					break;

				case 'range':
					highlightContent += `<p>Arme à distance</p>`;
					break;

				case 'magic':
					highlightContent += `<p>Arme magique</p>`;
					break;
			}
			highlightContent += `<p>Bonus défense : ${myItemElement.attr('data-defense')}</p>`;
			highlightContent += `<p>Bonus esquive : ${myItemElement.attr('data-dodge')}</p>`;
			highlightContent += `<p>Bonus vitesse : ${myItemElement.attr('data-speed')}</p>`;
			highlightContent += `<p>Bonus précision : ${myItemElement.attr('data-accuracy')}</p>`;
			highlightContent += `<p>Bonus force : ${myItemElement.attr('data-strength')}</p>`;
			highlightContent += `<p>Bonus critique : ${myItemElement.attr('data-critical')}</p>`;
			break;

		case 'skill':
			console.log('skill');
			highlightContent += `<h3>Technique ou sort</h3>`;
			highlightContent += `<h4>${myItemElement.attr('data-skill_name')} `;
			highlightContent += ` [${myItemElement.attr('data-damage_type_name')}]</h4>`;
			switch (myItemElement.attr('data-skill_type_name')) {
				case 'melee':
					highlightContent += `<p>Pour les armes de mélée</p>`;
					break;

				case 'range':
					highlightContent += `<p>Pour les armes à distance</p>`;
					break;

				case 'magic':
					highlightContent += `<p>Pour les armes de lancer de sorts</p>`;
					break;
			}
			highlightContent += `<p>Temps de recharge : ${myItemElement.attr('data-cooldown')} tour(s)</p>`;
			highlightContent += `<p>Bonus précision (multiplicateur): ${myItemElement.attr('data-accuracy_ratio')}</p>`;
			highlightContent += `<p>Bonus force (multiplicateur) : ${myItemElement.attr('data-strength_ratio')}</p>`;
			highlightContent += `<p>Bonus critique (multiplicateur) : ${myItemElement.attr('data-critical_ratio')}</p>`;
			break;
	}
	return highlightContent;
}

function highlightItemChoosen(myItemElement){
	cleanHighlightItemChoosen();
	console.groupCollapsed('highlightItemChoosen');

	const myHighlightContent = highlightItemContent(myItemElement);
	
	$('#itemChoosen').html(myHighlightContent);
	$('#itemChoosen').removeClass('hideDisplay');

	console.groupEnd('highlightItemChoosen');
}

function highlightItemHover(myItemElement){
	cleanHighlightItemHover();
	console.groupCollapsed('highlightItemHover');

	const myHighlightContent = highlightItemContent(myItemElement);

	$('#itemHover').html(myHighlightContent);
	$('#itemHover').removeClass('hideDisplay');

	console.groupEnd('highlightItemHover');
}

