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

function touche(attaquant, defenseur){
    // Tranposons tous en % en considérant que defenseur.esquive est le 100%:
    // Produit en croix :   defenseur = 60 -> 100%
    //                      attaquant = 50 -> ???%
    att = attaquant.precision * 100 / defenseur.esquive //= 83.33;
    def = 100;
    rate = def - att;
    
    touche = rand(min=1, max=100)
    
    if(touche > rate){
        if(touche >= (100 - attaquant.critiqueTotal){
            //CRITIQUE ! damage()*3
        }
        else{
            //damage()
        }
    }
    else{
        MISS
    }
}


function damage(attaquant, defenseur, arme){
    // La règle est la suivante : (attaquant.force - defenseur.defense) + rand(min=1, max=arme.force)
}



function affichageHistorique(attaquant, defenseur, dommage, pDV){
	document.querySelector('#historique article').innerHTML += `<p><span class="bleu">[tour ${nb_tour}]</span> <strong>${attaquant}</strong> inflige <strong class="rouge">${dommage}</strong> dégats à <strong>${defenseur}</strong>, il lui reste <strong class="rouge">${pDV}</strong> points de vie</p>`;
}
