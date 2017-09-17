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
document.querySelector('#attack').addEventListener('click', tourDeJeu);
document.querySelector('#reset').addEventListener('click', restart);
