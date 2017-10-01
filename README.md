# Dragon-Slayer
3WA Project
RPG Game using:
  - HTML : Display
  - CSS : Really? You really need me to explain what's the use for my CSS file ???
  - PHP : Controller (database)
  - MySQL : Well... Maybe... Maybe yeah? Maybe this is for the database ? HMMMM ??????
  - Javascript : Controller++ (Why not? :P)


Character creation : 135 points to distribute.

################################################################################
################################################################################
################################################################################
#######################                                  #######################
#######################         Controllers List         #######################
#######################                                  #######################
################################################################################
################################################################################
################################################################################

Controller.php          Functions List :
- __construct                   => To assignate automaticaly the $modelName to $model.

UsersController.php     Functions List :
- askCreateUser                 => Create a new user and send a mail to him to activate his/her new account.
- validateCreateUser            => Activate the user account.
- userConnexion                 => If the user use the right login, the user will be connected on his/her account and access his/her data.
- createCharacter               => Add a new character in the DataBase.
- deleteCharacter               => Delete a character in the DataBase.

                        Models used :
                            - UsersModel
                            - CharactersModel


MastersController.php   Functions List :
- newEnemy                      => A random number will choose what monster will face you in the fight.
- loot                          => A first random number will choose what type of object the player will earn. Next a second random number will choose the id of the item. If it's not an equipment, a third random number will determine the quantity.
- giveXp                        => Return the experience earn by killing the enemy.

                        Models used :
                            - EnemiesModel
                            - ItemsModel
                            - RacesModel
                            - ClassModel
                            - DamageModel
                            - SkillsModel

PlayersController.php   Functions List :
- creationCharacterStep         => Return all the data necessary to the creation of a character : race, class, weapon usable by the which class, armor usable by the which class, etc...
- loadCharacter                 => Return all the data link to the character
- saveCharacter                 => Save all the current data link to the character (ex: at the end of a fight, you will save the character stat like experience and health points, but also the state of the inventory...)

                        Models used :
                            - CharactersModel
                            - RacesModel
                            - ClassModel




################################################################################
################################################################################
################################################################################
######################                                   #######################
######################            Models List            #######################
######################                                   #######################
################################################################################
################################################################################
################################################################################

Model.php               Tables used :
                            - NONE
                        Functions List :
- __construct                   => Initialize the '$db' variable for the connexion on your database.
- all                           => Return all the data present in the table '$table' ($table will be assignate in the future class which will herit of Model like : $table = 'users'). You can use some parameters like WHERE and ORDER.
- find                          => Return the data with the choosen ID in the table.
- save                          => Function 2 in 1 : if you got, in parameters, an ID, you will UPDATE the data; else you will INSERT the data in the table.
- delete                        => Delete the data with the choosen ID in the table.


UsersModel.php          Tables used :
                            - users
                            - characters
                            
                        Functions List :
- findByEmail                   => Return the data of the user with the choosen mail adress.
- findByUniqueId                => Return the uuid (universal unique identifier) of the user with the choosen uuid and with the field 'activated' to 0.
- activateUser                  => Active the user account by the choosen uuid, by setting the field 'activated' from 0 to 1.
- findOldNotActivatedAccount    => Return all users account not activated since 24H.
- deleteOldNotActivatedAccount  => Delete all users account where 'activated' = 0 and the creation account was done since more than 24H.


CharactersModel.php     Tables used :
                            - characters
                            - character_equipements
                            - character_inventories
                            - character_skills
                            - races
                            - class
                            
                        Functions List :
- findAllByUserId               => Return all characters of a user by user_id
- updateEquipements
- updateInventory
- updateSkills


ClassModel.php          Tables used :
                            - class
                            - class_armor_types
                            - class_skill_types
                            - class_weapons
                            
                            
EnemiesModel.php        Tables used :
                            - enemies
                            - enemy_skills
                            - weakness
                            


ItemsModel.php          Tables used :
                            - items
                            - armors
                            - armor_types
                            - weapons
                            - damage_types
                            
                            
SkillsModel.php          Tables used :
                            - skills
                            - skill_types
                            - damage_types
                            
                            