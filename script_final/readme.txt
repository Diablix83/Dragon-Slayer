fonction touche{
    // Tranposons tous en % en considérant que defenseur.esquive est le 100%:
    // Produit en croix :   defenseur = 60 -> 100%
    //                      attaquant = 50 -> ???%
    att = attaquant.precision * 100 / 60 = 83.33;
    def = 100;
    rate = def - att;
    
    touche = rand(min=1, max=100)
    
    if(touche > rate){
        if(touche >= (100 - attaquant.critiqueTotal){
            CRITIQUE ! damage()*3
        }
        else{
            damage()
        }
    }
    else{
        MISS
    }
}


fonction damage{
    // La règle est la suivante : (attaquant.force - defenseur.defense) + rand(min=1, max=arme.force)
}
