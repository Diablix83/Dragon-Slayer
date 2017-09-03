/*
██████╗  ██████╗ ███╗   ██╗███╗   ██╗███████╗███████╗███████╗
██╔══██╗██╔═══██╗████╗  ██║████╗  ██║██╔════╝██╔════╝██╔════╝
██║  ██║██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  █████╗  ███████╗
██║  ██║██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══╝  ╚════██║
██████╔╝╚██████╔╝██║ ╚████║██║ ╚████║███████╗███████╗███████║
╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝
*/
let nb_tour = 0;

let joueur = {
	pv: 100,
	pvMax: 100,
	defense: 0,
	esquive: 30,
	vitesse: 5,
	precision: 50,
	force: 5,
	critique: 0
}

let dragon = {
	pv: 100,
	pvMax: 100,
	defense: 10,
	esquive: 30,
	vitesse: 6,
	precision: 60,
	force: 35,
	critique: 5
}

let equipement = {
	armure: {

		legere: {
			defense: 5,
			esquive: 20,
			vitesse: 10
		},

		moyenne: {
			defense: 20,
			esquive: 10,
			vitesse: 5
		},

		lourde: {
			defense: 50,
			esquive: -20,
			vitesse: -2
		}
	},

	arme: {
		dague: {
			precision: 70,
			force: 5,
			critique: 60
		},

		epee: {
			precision: 50,
			force: 25,
			critique: 30
		},

		hallebarde: {
			precision: 30,
			force: 50,
			critique: 10
		}
	}
}

let affichage_stat_total = {
	defense: document.querySelector('#defense span'),
	esquive: document.querySelector('#esquive span'),
	vitesse: document.querySelector('#vitesse span'),
	precision: document.querySelector('#precision span'),
	force: document.querySelector('#force span'),
	critique: document.querySelector('#critique span')
}

let affichage_stat_joueur = {
	pv: document.querySelector('#joueur .pv'),
	pvMax: document.querySelector('#joueur .pvMax'),
	defense: document.querySelector('#defense .joueur'),
	esquive: document.querySelector('#esquive .joueur'),
	vitesse: document.querySelector('#vitesse .joueur'),
	precision: document.querySelector('#precision .joueur'),
	force: document.querySelector('#force .joueur'),
	critique: document.querySelector('#critique .joueur')
}

let affichage_stat_equipement = {
	defense: document.querySelector('#defense .armure'),
	esquive: document.querySelector('#esquive .armure'),
	vitesse: document.querySelector('#vitesse .armure'),
	precision: document.querySelector('#precision .arme'),
	force: document.querySelector('#force .arme'),
	critique: document.querySelector('#critique .arme')
}

let affichage_stat_dragon = {
	pv: document.querySelector('#dragon .pv'),
	pvMax: document.querySelector('#dragon .pvMax'),
}


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
}

function restart(){
	this.disabled = true;
	document.querySelector('#start_battle').disabled = false;
	document.querySelector('#attack').disabled = true;
	document.querySelector('#joueur #armure').disabled = false;
	document.querySelector('#joueur #arme').disabled = false;

}

function attaqueJoueur(){
	const force_joueur = affichage_stat_total.force.innerHTML;
	const degat = force_joueur - dragon.defense;
	if (degat >0) {
		dragon.pv -= degat;
	}
	affichage_dragon();
	affichageHistorique("Joueur","Dragon", degat, dragon.pv);
}

function attaqueDragon(){
	
}

function affichageHistorique(attaquant, defenseur, dommage, pDV){
	document.querySelector('#historique article').innerHTML += `<p><span class="bleu">[tour ${nb_tour}]</span> <strong>${attaquant}</strong> inflige <strong class="rouge">${dommage}</strong> dégats à <strong>${defenseur}</strong>, il lui reste <strong class="rouge">${pDV}</strong> points de vie</p>`;
}

/*
 ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║     ██║   ██║██║  ██║█████╗  
██║     ██║   ██║██║  ██║██╔══╝  
╚██████╗╚██████╔╝██████╔╝███████╗
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
*/
//init joueur
affichage_joueur();
document.querySelector('#attack').disabled = true;
document.querySelector('#reset').disabled = true;

//init dragon
affichage_dragon();

document.querySelector('#start_battle').addEventListener('click', startFight);
document.querySelector('#armure').addEventListener('change', affichage_joueur);
document.querySelector('#arme').addEventListener('change', affichage_joueur);
//document.querySelector('#test').addEventListener('click', affichage_joueur);
document.querySelector('#attack').addEventListener('click', attaqueJoueur);
document.querySelector('#reset').addEventListener('click', restart);
