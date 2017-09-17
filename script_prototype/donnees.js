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
