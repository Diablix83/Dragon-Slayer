/*
███████╗ ██████╗ ███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
█████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
*/
//"commencer le combat" => modifier le span "#texteTest"

function affichage_joueur(){

	affichage_stat_total.defense.innerHTML = joueur.defense + equipement.armure[document.querySelector('#joueur #armure').value].defense;

	affichage_stat_total.esquive.innerHTML = joueur.esquive + equipement.armure[document.querySelector('#joueur #armure').value].esquive;

	affichage_stat_total.vitesse.innerHTML = joueur.vitesse + equipement.armure[document.querySelector('#joueur #armure').value].vitesse;

	affichage_stat_total.precision.innerHTML = joueur.precision + equipement.arme[document.querySelector('#joueur #arme').value].precision;

	affichage_stat_total.force.innerHTML = joueur.force + equipement.arme[document.querySelector('#joueur #arme').value].force;

	affichage_stat_total.critique.innerHTML = joueur.critique + equipement.arme[document.querySelector('#joueur #arme').value].critique;



	affichage_stat_joueur.pv.innerHTML = joueur.pv;
	affichage_stat_joueur.pvMax.innerHTML = joueur.pvMax;
	affichage_stat_joueur.defense.innerHTML = joueur.defense;
	affichage_stat_joueur.esquive.innerHTML = joueur.esquive;
	affichage_stat_joueur.vitesse.innerHTML = joueur.vitesse;
	affichage_stat_joueur.precision.innerHTML = joueur.precision;
	affichage_stat_joueur.force.innerHTML = joueur.force;
	affichage_stat_joueur.critique.innerHTML = joueur.critique;



	affichage_stat_equipement.defense.innerHTML = equipement.armure[document.querySelector('#joueur #armure').value].defense;

	affichage_stat_equipement.esquive.innerHTML = equipement.armure[document.querySelector('#joueur #armure').value].esquive;

	affichage_stat_equipement.vitesse.innerHTML = equipement.armure[document.querySelector('#joueur #armure').value].vitesse;

	affichage_stat_equipement.precision.innerHTML = equipement.arme[document.querySelector('#joueur #arme').value].precision;

	affichage_stat_equipement.force.innerHTML = equipement.arme[document.querySelector('#joueur #arme').value].force;

	affichage_stat_equipement.critique.innerHTML = equipement.arme[document.querySelector('#joueur #arme').value].critique;
}

function affichage_dragon(){
	affichage_stat_dragon.pv.innerHTML = dragon.pv;
	affichage_stat_dragon.pvMax.innerHTML = dragon.pvMax;
}

function startFight(){

	this.disabled = true;
	document.querySelector('#attack').disabled = false;
	document.querySelector('#reset').disabled = false;
	document.querySelector('#joueur #armure').disabled = true;
	document.querySelector('#joueur #arme').disabled = true;
	nb_tour++;
}

function restart(){
	this.disabled = true;
	document.querySelector('#start_battle').disabled = false;
	document.querySelector('#attack').disabled = true;
	document.querySelector('#joueur #armure').disabled = false;
	document.querySelector('#joueur #arme').disabled = false;

	joueur.pv = joueur.pvMax;
	dragon.pv = dragon.pvMax;
	nb_tour = 0;
	affichage_dragon();
	affichage_joueur();
}

function tourDeJeu(){
	const stat_total_joueur = {
		defense: affichage_stat_total.defense.innerHTML,
		esquive: affichage_stat_total.esquive.innerHTML,
		vitesse: affichage_stat_total.vitesse.innerHTML,
		precision: affichage_stat_total.precision.innerHTML,
		force: affichage_stat_total.force.innerHTML,
		critique: affichage_stat_total.critique.innerHTML
	};

	if(stat_total_joueur.vitesse >= dragon.vitesse){
		attaqueJoueur(stat_total_joueur);
		if(dragon.pv <= 0){	youWin(); }
		else{
			attaqueDragon(stat_total_joueur);
			if(joueur.pv <= 0){	youLose(); }
		}
	}
	else{
		attaqueDragon(stat_total_joueur);
		if(joueur.pv <= 0){	youLose(); }
		else{
			attaqueJoueur(stat_total_joueur);
			if(dragon.pv <= 0){	youWin(); }
		}
	}

	nb_tour++;
}

function attaqueJoueur(stats_joueur){

	const attJoueur = jetAttaque(stats_joueur, dragon);
	if(!attJoueur.miss){
		if(!attJoueur.critique){
			attJoueur.degats = jetDegats(joueur.force, dragon.defense, affichage_stat_equipement.force.innerHTML);
		}
		else{
			attJoueur.degats = jetDegats(joueur.force, dragon.defense, affichage_stat_equipement.force.innerHTML) * 3;
		}

		if (attJoueur.degats >0) {
			dragon.pv -= attJoueur.degats;
		}
	}
	affichage_dragon();
	affichageHistorique("Joueur","Dragon", attJoueur, dragon.pv);
}

function attaqueDragon(stats_joueur){

	const attDragon = jetAttaque(stats_joueur, dragon);
	if(!attDragon.miss){
		if(!attDragon.critique){
			attDragon.degats = jetDegats(dragon.force, joueur.defense, dragon.force);
		}
		else{
			attDragon.degats = jetDegats(dragon.force, joueur.defense, dragon.force) * 3;
		}

		if (attDragon.degats >0) {
			joueur.pv -= attDragon.degats;
		}
	}
	affichage_joueur();
	affichageHistorique("Dragon","Joueur", attDragon, joueur.pv);
}

function getRandom(min, max){
	// Valeur random comprise entre 1 et 100 (extrémités incluses)
	min = Math.ceil(min);
  	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jetAttaque(attaquant, defenseur){
    // Tranposons tous en % en considérant que defenseur.esquive est le 100%:
    // Produit en croix :   defenseur = 60 -> 100%
    //                      attaquant = 50 -> ???%
    att = attaquant.precision * 100 / defenseur.esquive;
    def = 100;
    rate = def - att;
    
    touche = getRandom(1, 100);
    
    let attaque = {
    	degats: 0,
    	critique: false,
    	miss: false
    }

    if(touche > rate){
        if(touche >= (100 - attaquant.critique)){ attaque.critique = true; }
        else{}
    }
    else{ attaque.miss = true; }

    return attaque;
}

function jetDegats(attaquant, defenseur, arme){
    return (attaquant - defenseur) + getRandom(1, arme);
}

function affichageHistorique(attaquant, defenseur, attaque, pDV){
	let texteHistorique = `<p><span class="bleu">[tour ${nb_tour}]</span> <strong>${attaquant}</strong>`;
	if(!attaque.miss){
		if(!attaque.critique){
			texteHistorique += ` inflige <strong class="rouge">${attaque.degats}</strong> dégats à <strong>${defenseur}</strong>, il lui reste `;
		}
		else{
			texteHistorique += ` inflige <strong class="rouge">${attaque.degats}</strong> dégats <strong class="rouge">CRITIQUE</strong> à <strong>${defenseur}</strong>, il lui reste `;
		}
	}
	else{
		texteHistorique += ` rate son attaque contre <strong>${defenseur}</strong>, il lui reste toujours `;
	}
	texteHistorique += `<strong class="rouge">${pDV}</strong> points de vie</p>`;
	document.querySelector('#historique article').innerHTML += texteHistorique;
}

function youWin(){
	document.querySelector('#attack').disabled = true;
	document.querySelector('#historique article').innerHTML += '<strong>Vous avez remporter le combat !</strong>';
}

function youLose(){
	document.querySelector('#attack').disabled = true;
	document.querySelector('#historique article').innerHTML += '<strong>Vous êtes mort...</strong>';
}

function recupAllItems(){
	$.getJSON(`http://alex-derai.fr/cours/developpement/dragon_slayer/php/askdb.php?controller=masters&task=all`, function(donnees){
		console.log(donnees);
	});
}