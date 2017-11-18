/*
██████╗  ██████╗ ███╗   ██╗███╗   ██╗███████╗███████╗███████╗
██╔══██╗██╔═══██╗████╗  ██║████╗  ██║██╔════╝██╔════╝██╔════╝
██║  ██║██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  █████╗  ███████╗
██║  ██║██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══╝  ╚════██║
██████╔╝╚██████╔╝██║ ╚████║██║ ╚████║███████╗███████╗███████║
╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝
*/


/* Welcome */
const welcomeDiv = document.querySelector('#welcome');

const connexionDiv		= welcomeDiv.querySelector('#connexion');
const connexionForm 		= connexionDiv.querySelector('form');
const connexionEmailInput 				= connexionForm.querySelector('#connexion_email');
const connexionPasswordInput 			= connexionForm.querySelector('#connexion_password');

const inscriptionDiv 	= welcomeDiv.querySelector('#inscription')
const inscriptionForm 		= inscriptionDiv.querySelector('form');
const inscriptionEmailInput 			= inscriptionForm.querySelector('#inscription_email');
const inscriptionPseudoInput 			= inscriptionForm.querySelector('#inscription_pseudo');
const inscriptionPasswordInput 			= inscriptionForm.querySelector('#inscription_password');
const inscriptionConfirmPasswordInput 	= inscriptionForm.querySelector('#inscription_confirm_password');


/* Character List */
const userSessionDiv = document.querySelector('#userSession');

const userNameh3			= userSessionDiv.querySelector('h3');

const characterAliveNumber	= userSessionDiv.querySelector('#howManyCharacterAlive');
const characterAliveList	= userSessionDiv.querySelector('#charactersAlive');

const characterDeadNumber	= userSessionDiv.querySelector('#howManyCharacterDead');
const characterDeadList		= userSessionDiv.querySelector('#charactersDead');

const btnCreateCharacter	= userSessionDiv.querySelector('#characterCreate');
const btnDeconnexion		= userSessionDiv.querySelector('#deconnexion');


/* Character Creation */
const characterCreationDiv = document.querySelector('#characterCreation');


const gameDataLibrary = {
			armors: [],
			armor_types: [],
			class: [],
			class_armor_types: [],
			class_skill_types: [],
			class_weapons: [],
			damage_types: [],
			enemies: [],
			enemy_skills: [],
			items: [],
			races: [],
			skills: [],
			skill_types: [],
			weakness: [],
			weapons: []
		}

const userCharactersList = {
			characterAlive: null,
			characterDead: null
		}

const currentCharacter = {
			accuracy: null,
			class: null,
			critical: null,
			dead: null,
			defense: null,
			dodge: null,
			exp: null,
			health: null,
			healthMax: null,
			id: null,
			level: null,
			name: null,
			race: null,
			speed: null,
			strength: null,
			user_id: null,

			pointsToDistribute: 0,
			nbSkillToLearn: 0,

			equipements:{
				hand_1: null,
				hand_2: null,
				armor_head: null,
				armor_torso: null,
				armor_hands: null,
				armor_legs: null,
				armor_feet: null
			},
			inventory:[
				/*	structure :
						{
							type: armor/weapon/item,
							id: number...,
							detail:{depending on the object},
							quantity: number...
						}
				*/
			],
			skills:[]
		}


const defaultEquipements = {
	hand_1_id: 44,
	hand_2_id: 44,
	armor_head_id: 1,
	armor_torso_id: 2,
	armor_hands_id: 3,
	armor_legs_id: 4,
	armor_feet_id: 5

}
let creationStatPoints = 0;
