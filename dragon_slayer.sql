-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Ven 17 Novembre 2017 à 23:53
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dragon_slayer`
--

-- --------------------------------------------------------

--
-- Structure de la table `project001_armors`
--

CREATE TABLE `project001_armors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `emplacement` varchar(255) NOT NULL,
  `armor_type` int(11) NOT NULL,
  `ratio` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_armors`
--

INSERT INTO `project001_armors` (`id`, `name`, `emplacement`, `armor_type`, `ratio`) VALUES
(1, 'Tête nue', 'head', 13, 0.1),
(2, 'Torse nue', 'torso', 13, 0.5),
(3, 'Mains nues', 'hands', 13, 0.1),
(4, 'Jambes nues', 'legs', 13, 0.2),
(5, 'Pieds nues', 'feet', 13, 0.1),
(6, 'Casque matelassé', 'head', 1, 0.1),
(7, 'Chemise matelassée', 'torso', 1, 0.5),
(8, 'Gants matelassées', 'hands', 1, 0.1),
(9, 'Jambières matelassées', 'legs', 1, 0.2),
(10, 'Bottes matelassées', 'feet', 1, 0.1),
(11, 'Casque de cuir', 'head', 2, 0.1),
(12, 'Plastron de cuir', 'torso', 2, 0.5),
(13, 'Gants de cuir', 'hands', 2, 0.1),
(14, 'Jambières de cuir', 'legs', 2, 0.2),
(15, 'Bottes de cuir', 'feet', 2, 0.1),
(16, 'Casque en cuir clouté', 'head', 3, 0.1),
(17, 'Plastron en cuir clouté', 'torso', 3, 0.5),
(18, 'Gants en cuir clouté', 'hands', 3, 0.1),
(19, 'Jambières en cuir clouté', 'legs', 3, 0.2),
(20, 'Bottes en cuir clouté', 'feet', 3, 0.1),
(21, 'Casque en peau', 'head', 4, 0.1),
(22, 'Tunique en peau', 'torso', 4, 0.5),
(23, 'Gants en peau', 'hands', 4, 0.1),
(24, 'Jambières en peau', 'legs', 4, 0.2),
(25, 'Bottes en peau', 'feet', 4, 0.1),
(26, 'Casque en mailles intermédiaire', 'head', 5, 0.1),
(27, 'Chemise en mailles intermédiaire', 'torso', 5, 0.5),
(28, 'Gants en mailles intermédiaire', 'hands', 5, 0.1),
(29, 'Jambières en mailles intermédiaire', '', 5, 0.2),
(30, 'Bottes en mailles intermédiaire', '', 5, 0.1),
(31, 'Casque en écailles', 'head', 6, 0.1),
(32, 'Plastron en écailles', 'torso', 6, 0.5),
(33, 'Gants en écailles', 'hands', 6, 0.1),
(34, 'Jambières en écailles', 'legs', 6, 0.2),
(35, 'Bottes en écailles', 'feet', 6, 0.1),
(36, 'Heaume en fer', 'head', 7, 0.1),
(37, 'Cuirasse en fer', 'torso', 7, 0.5),
(38, 'Gantelet en fer', 'hands', 7, 0.1),
(39, 'Jambières en fer', 'legs', 7, 0.2),
(40, 'Bottes en fer', 'feet', 7, 0.1),
(41, 'Heaume de Mithril', 'head', 8, 0.1),
(42, 'Chemise de Mithril', 'torso', 8, 0.5),
(43, 'Gants de Mithril', 'hands', 8, 0.1),
(44, 'Jambières de Mithril', 'legs', 8, 0.2),
(45, 'Bottes de Mithril', 'feet', 8, 0.1),
(46, 'Heaume en cotte de mailles lourde', 'head', 9, 0.1),
(47, 'Plastron en cotte de mailles lourde', 'torso', 9, 0.5),
(48, 'Gants en cotte de mailles lourde', 'hands', 9, 0.1),
(49, 'Jambières en cotte de mailles lourde', 'legs', 9, 0.2),
(50, 'Bottes en cotte de mailles lourde', 'feet', 9, 0.1),
(51, 'Casque en acier', 'head', 10, 0.1),
(52, 'Plastron en acier', 'torso', 10, 0.5),
(53, 'Gantelets en acier', 'hands', 10, 0.1),
(54, 'Jambières en acier', 'legs', 10, 0.2),
(55, 'Bottes en acier', 'feet', 10, 0.1),
(56, 'Casque d\'ébonite', 'head', 11, 0.1),
(57, 'Plastron d\'ébonite', 'torso', 11, 0.5),
(58, 'Gantelets d\'ébonite', 'hands', 11, 0.1),
(59, 'Jambières d\'ébonite', 'legs', 11, 0.2),
(60, 'Bottes d\'ébonite', 'feet', 11, 0.1),
(61, 'Casque en écailles de dragon', 'head', 12, 0.1),
(62, 'Plastron en écailles de dragon', 'torso', 12, 0.5),
(63, 'Gantelets en écailles de dragon', 'hands', 12, 0.1),
(64, 'Jambières en écailles de dragon', 'legs', 12, 0.2),
(65, 'Bottes en écailles de dragon', 'feet', 12, 0.1);

-- --------------------------------------------------------

--
-- Structure de la table `project001_armor_types`
--

CREATE TABLE `project001_armor_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_armor_types`
--

INSERT INTO `project001_armor_types` (`id`, `name`, `defense`, `dodge`, `speed`) VALUES
(1, 'Matelassée', 15, 28, 20),
(2, 'Cuir', 15, 27, 20),
(3, 'Cuir clouté', 20, 26, 20),
(4, 'Peau', 20, 26, 10),
(5, 'Chemise de mailles', 25, 22, 10),
(6, 'Écailles', 30, 10, 10),
(7, 'Fer', 30, 22, 10),
(8, 'Mithril', 35, 12, 10),
(9, 'Cotte de mailles', 30, 12, 0),
(10, 'Acier', 40, 5, 0),
(11, 'Ebonite', 45, 2, 0),
(12, 'Ecailles de dragon', 50, 0, 0),
(13, 'Sans armure', 0, 32, 25);

-- --------------------------------------------------------

--
-- Structure de la table `project001_characters`
--

CREATE TABLE `project001_characters` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `healthMax` int(11) NOT NULL,
  `dead` tinyint(1) NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `race` int(11) NOT NULL,
  `class` int(11) NOT NULL,
  `exp` bigint(20) NOT NULL,
  `level` int(11) NOT NULL,
  `fighting_stance` int(11) NOT NULL,
  `nb_finished_dungeon` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_characters`
--

INSERT INTO `project001_characters` (`id`, `name`, `user_id`, `healthMax`, `dead`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `race`, `class`, `exp`, `level`, `fighting_stance`, `nb_finished_dungeon`) VALUES
(8, 'Gros Teubé', 3, 35, 0, 35, 0, 5, 5, 35, 20, 1, 1, 1355, 3, 1, 1),
(7, 'Tartufator', 3, 20, 1, 5, 10, 25, 35, 20, 20, 4, 5, 0, 1, 1, 0),
(9, 'Trichelieu', 3, 50, 0, 15, 15, 10, 35, 20, 5, 1, 3, 394, 2, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `project001_character_equipements`
--

CREATE TABLE `project001_character_equipements` (
  `character_id` int(11) NOT NULL,
  `hand_1_id` int(11) NOT NULL,
  `hand_2_id` int(11) NOT NULL,
  `armor_head_id` int(11) NOT NULL,
  `armor_torso_id` int(11) NOT NULL,
  `armor_hands_id` int(11) NOT NULL,
  `armor_legs_id` int(11) NOT NULL,
  `armor_feet_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_character_equipements`
--

INSERT INTO `project001_character_equipements` (`character_id`, `hand_1_id`, `hand_2_id`, `armor_head_id`, `armor_torso_id`, `armor_hands_id`, `armor_legs_id`, `armor_feet_id`) VALUES
(1, 44, 44, 1, 2, 3, 4, 5),
(9, 7, 44, 26, 27, 3, 39, 40),
(7, 1, 1, 1, 2, 3, 4, 5),
(8, 10, 44, 1, 2, 3, 4, 5);

-- --------------------------------------------------------

--
-- Structure de la table `project001_character_inventories`
--

CREATE TABLE `project001_character_inventories` (
  `character_id` int(11) NOT NULL,
  `item_table_name` varchar(255) NOT NULL,
  `item_id` int(11) NOT NULL,
  `item_quantity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_character_inventories`
--

INSERT INTO `project001_character_inventories` (`character_id`, `item_table_name`, `item_id`, `item_quantity`) VALUES
(8, 'items', 1, 3),
(8, 'armors', 6, 1),
(8, 'armors', 7, 1),
(8, 'armors', 8, 1),
(8, 'armors', 9, 1),
(9, 'items', 1, 6),
(8, 'weapons', 17, 3),
(8, 'weapons', 23, 5),
(8, 'weapons', 28, 4),
(8, 'weapons', 41, 4),
(8, 'weapons', 39, 3),
(8, 'armors', 61, 2),
(8, 'armors', 62, 1),
(8, 'armors', 63, 3),
(8, 'armors', 64, 3),
(8, 'armors', 65, 1),
(7, 'items', 1, 3),
(7, 'armors', 6, 1),
(7, 'armors', 7, 1),
(7, 'armors', 8, 1),
(7, 'armors', 9, 1),
(7, 'armors', 10, 1),
(7, 'weapons', 17, 1),
(7, 'weapons', 23, 1),
(7, 'weapons', 28, 2),
(7, 'weapons', 41, 1),
(7, 'weapons', 39, 1),
(7, 'armors', 61, 1),
(7, 'armors', 62, 1),
(7, 'armors', 63, 1),
(7, 'armors', 64, 1),
(7, 'armors', 65, 1),
(7, 'weapons', 1, 1),
(9, 'items', 4, 1),
(9, 'weapons', 14, 1),
(9, 'items', 3, 2),
(9, 'items', 5, 1),
(9, 'weapons', 11, 1),
(9, 'armors', 39, 1),
(9, 'weapons', 19, 1),
(9, 'weapons', 40, 1),
(9, 'weapons', 7, 1);

-- --------------------------------------------------------

--
-- Structure de la table `project001_character_skills`
--

CREATE TABLE `project001_character_skills` (
  `character_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_character_skills`
--

INSERT INTO `project001_character_skills` (`character_id`, `skill_id`) VALUES
(7, 6),
(8, 10),
(8, 13),
(8, 24),
(9, 11),
(9, 23);

-- --------------------------------------------------------

--
-- Structure de la table `project001_class`
--

CREATE TABLE `project001_class` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `health` int(11) NOT NULL,
  `dualwielding` tinyint(1) NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_class`
--

INSERT INTO `project001_class` (`id`, `name`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `health`, `dualwielding`, `description`) VALUES
(1, 'Barbare', 10, 0, 0, 0, 15, 10, 30, 1, 'Drapé de fourrure et portant une hache, un humain tribal de haute taille marche à grandes enjambées à travers le blizzard. Riant aux éclats, il charge le géant du froid qui a osé s’en prendre au troupeau de son clan. Une demi-orque grogne férocement contre le dernier adversaire qui a voulu remettre en cause son autorité sur la tribu, prête à lui briser le cou comme elle l’a fait avec les six précédents. L’écume aux lèvres, un nain balance son casque dans le visage d’un premier ennemi drow puis, se retournant, envoie sa cubitière dans le ventre d’un second.  Ces barbares, bien que différents, ont en commun leur rage : un déchaînement de fureur, inextinguible et irraisonné. Bien plus qu’une émotion passagère, leur colère est celle d’un féroce prédateur acculé, l’assaut implacable de la tempête, le tumulte d’une mer démontée. Pour certains, leur rage est le fruit d’une communion avec de fiers esprits animaux. D’autres la puisent d’une réserve trouble de colère contre ce monde de souffrance. Mais pour tous, la rage est une force qui n’alimente pas que leur frénésie guerrière. Elle leur donne aussi des réflexes, une résistance et des prouesses physiques incroyables.'),
(2, 'Barde', 0, 10, 5, 15, 0, 5, 10, 0, 'Fredonnant alors qu’elle passe ses doigts sur un ancien monument au cœur de ruines depuis longtemps oubliées, une demi-elfe vêtue de cuir robuste sent le savoir, invoqué par la magie de son chant, bondir dans son esprit. Le savoir de ceux qui ont érigé ce monument. Le savoir relatant la saga mythique qui y est illustrée. Un solide guerrier humain frappe son épée avec rythme sur son armure d’écailles, instaurant un tempo pour accompagner son chant de guerre et exhortant ses compagnons à la bravoure et à l’héroïsme. La magie de son chant les fortifie et les enhardit. Accordant son cistre tout en rigolant, une gnome tisse sa subtile magie sur l’assemblée des nobles, s\'assurant ainsi que les paroles de ses compagnons seront bien reçues.  Qu\'il soit érudit, scalde ou scélérat, un barde façonne la magie à travers ses mots et sa musique pour inspirer ses alliés, démoraliser ses ennemis, manipuler les esprits, créer des illusions, et même pour soigner les blessures.'),
(3, 'Clerc', 20, 0, 0, 10, 5, 0, 10, 0, 'Les bras et les yeux levés en direction du soleil, une prière sur les lèvres, un elfe commence à briller d\'une lumière intérieure qui s\'en va guérir ses compagnons usés par le combat. Chantant une chanson de gloire, un nain fait osciller sa hache en de larges mouvements circulaires afin de couper les rangs orques face à lui, criant des louanges aux dieux à chaque ennemi qui tombe. Jetant une malédiction sur les morts-vivants qui s\'avancent, un humain brandit son symbole sacré alors qu\'une lumière se libère de celui-ci pour repousser les zombis qui se pressaient sur ses compagnons.  Les clercs sont des intermédiaires entre le monde des mortels et les plans éloignés des dieux. Aussi variés que les dieux qu\'ils servent, les clercs s\'efforcent d\'incarner l\'œuvre de leurs divinités. Un clerc est imprégné de magie divine, ce n\'est pas un religieux ordinaire.'),
(4, 'Druide', 0, 5, 5, 15, 0, 10, 10, 0, 'Tenant bien haut un bâton noueux couronné de houx, une elfe convoque la fureur des tempêtes et en appelle à la puissance foudroyante des éclairs pour punir les porteurs de torches orques qui menacent sa forêt. Sous forme de léopard, s\'accroupissant sur la branche d\'un grand arbre à l\'abri des regards, un humain scrute à travers la jungle l\'étrange construction d\'un temple de l\'Air du Mal élémentaire, gardant un œil fixé sur les activités des cultistes. Brandissant une épée faîte de feu pur, un demi-elfe charge dans la masse des soldats squelettes, brisant la magie antinaturelle qui a donné à ces immondes créatures un dérisoire semblant de vie.  Que ce soit en faisant appel aux forces élémentaires naturelles ou en imitant les créatures du monde animal, les druides sont des incarnations de la force, de la ruse, et de la colère de la nature. Ils ne se proclament pas maîtres de la nature. Ils se voient plutôt comme des extensions de la volonté indomptable de la nature.'),
(5, 'Ensorceleur', 0, 0, 10, 10, 0, 15, 0, 0, 'Avec son regard éclatant d’une lumière dorée, une humaine tend sa main et libère le feu du dragon qui lui brûle les veines. Alors que l’enfer engouffre ses ennemis, une paire d’ailes émerge de son dos, puis elle prend son envol. Sa longue chevelure battue par un vent invoqué, un demi-elfe écarte les bras et lève les yeux au ciel. Le soulevant momentanément du sol, une vague de magie se décharge en lui, à travers lui et par lui, en une puissante explosion foudroyante. Accroupie derrière une stalagmite, une halfeline pointe du doigt un troglodyte qui charge. Une déflagration de feu surgit de son doigt pour atteindre la créature. Elle se replie derrière le rocher avec le sourire, inconsciente du fait que sa magie sauvage a coloré sa peau d’un bleu éclatant.  Les ensorceleurs sont les porteurs d’une magie innée qui prend sa source dans un lignage exotique, une quelconque influence d\'Outremonde ou une exposition à une force cosmique inouïe. On ne peut pas étudier la sorcellerie comme on apprend un langage, pas plus qu’on ne peut apprendre à vivre une vie de légende. Personne ne choisit la sorcellerie ; le pouvoir choisit l’ensorceleur.'),
(6, 'Guerrier', 10, 10, 0, 0, 10, 5, 20, 1, 'Un humain équipé d\'un harnois clinquant brandit son bouclier devant lui tout en fonçant vers des gobelins massés. Un elfe, derrière lui, vêtu d\'une armure de cuir clouté, arrose ces mêmes gobelins avec les flèches qu\'il décoche de son précieux arc. Le demi-orque à proximité lance des ordres, aidant les deux combattants à coordonner leur assaut au mieux. Un nain en cotte de mailles interpose son bouclier entre la massue d\'un ogre et son compagnon, puis assène un coup mortel de côté. Son compagnon, un demi-elfe en armure d\'écailles, fait virevolter deux cimeterres dans un tourbillon aveuglant tout en contournant l\'ogre, à la recherche d\'un point faible dans sa défense. Un combat de gladiateurs pour le spectacle dans une arène, un maître du trident avec son filet, entraîné à renverser ses ennemis et à se déplacer autour d\'eux pour le plaisir et de la foule, et pour son propre avantage tactique.  Tous ces héros sont des guerriers, peut-être la classe de personnage la plus diversifiée de Dungeons & Dragons. Chevaliers menant une quête, seigneurs conquérants, champions royaux, fantassins d\'élite, mercenaires endurcis et rois-bandits, tous partagent une maîtrise inégalée des armes et des armures ainsi qu\'une connaissance approfondie des compétences de combat. Tous connaissent bien la mort, l\'infligeant autant qu\'ils lui font face.'),
(7, 'Magicien', 0, 0, 10, 15, 5, 5, 0, 0, 'Vêtue d\'une robe d\'argent qui dénote son rang, une elfe ferme les yeux pour s\'éloigner des distractions du champ de bataille et commence son chant. Les doigts croisés face à elle, elle achève son sort et lance une petite perle de feu vers les rangs ennemis, laquelle éclate lorsqu\'elle arrive à son but et engloutit les soldats lors de son explosion. Vérifiant et revérifiant son travail, un humain dessine à la craie sur le sol de pierre un cercle magique intriguant, puis saupoudre le long de chaque ligne et chaque courbe de la limaille de fer. Une fois le travail accompli, il se lance dans une longue incantation. Un trou s\'ouvre alors dans l\'espace à l\'intérieur du cercle, libérant une bouffée de soufre provenant du plan d\'un autre monde.  Accroupi au sol à l\'intersection de deux couloirs d\'un donjon, un gnome jette une poignée de petits os gravés de symboles mystiques, tout en murmurant quelques mots de pouvoir. Il ferme alors ses yeux pour voir les visions plus clairement, hoche la tête lentement, puis ouvre les yeux et pointe le passage à sa gauche.  Les magiciens sont de puissants utilisateurs de la magie, définis et unis en tant que classe par les sorts qu\'ils jettent. S\'appuyant sur la vague de magie qui se répand dans le cosmos, les magiciens jettent des sorts de feu qui explose, d\'arc de foudre, d\'illusion trompeuse et de contrôle des esprits. Leur magie évoque des monstres d\'autres plans d\'existence, entrevoit l\'avenir ou transforme des ennemis en zombis. Leurs plus puissants sorts peuvent changer une substance en une autre, faire tomber des météores du ciel ou bien encore ouvrir des portails sur d\'autres mondes.'),
(8, 'Moine', 0, 10, 10, 10, 5, 0, 10, 1, 'Ses paumes floues alors qu\'elles dévient une pluie de flèches, une demi-elfe saute par-dessus la barricade et se jette au beau milieu des rangs d\'hobgobelins massés de l\'autre côté. Elle tournoie parmi eux, les frappant dans les côtes et les envoyant tituber, jusqu\'à ce qu\'elle se retrouve la dernière debout. Prenant une profonde inspiration, un humain recouvert de tatouages se met en position de combat. Alors que les premiers orques qui chargent l\'atteignent, il souffle, et un déferlement de flammes jaillit de sa bouche, submergeant ses ennemis. Se déplaçant aussi silencieusement que la nuit, une halfeline toute vêtue de noir s\'enfonce dans l\'ombre d\'une arcade et émerge d\'une autre nappe d\'ombre sur un balcon, à un jet de pierre de distance. Elle glisse sa lame hors de son fourreau enveloppé de tissus et passe par la fenêtre de la chambre du prince tyrannique, tellement vulnérable dans les bras de Morphée.  Quelle que soit leur discipline, les moines sont unis dans leur aptitude à exploiter magiquement l\'énergie qui parcourt leur corps. Canalisée en une remarquable démonstration de prouesse martiale ou en une subtile augmentation de capacité défensive et de vitesse, cette énergie imprègne tout ce que fait le moine.'),
(9, 'Paladin', 20, 0, 0, 5, 10, 0, 20, 0, 'Vêtue d’une armure étincelante sous le soleil, malgré la poussière et la crasse accumulées durant ce long voyage, une humaine pose à terre son épée et son bouclier, puis, sur le corps d’un homme mortellement blessé, elle appose ses mains. Un rayonnement divin s’en échappe, refermant les blessures de l’homme qui ouvre alors les yeux, stupéfait. Accroupis derrière un affleurement rocheux, son manteau noir le rendant quasi invisible dans la nuit, un nain observe une troupe d’orques fêtant leur dernière victoire. En silence, il s\'infiltre dans leur camp et chuchote un serment : deux orques tombent raide morts avant même d’avoir pu entrevoir sa présence. Sa chevelure couleur argent brillant dans le puits de lumière qui ne semble illuminer que lui, un elfe rit, exultant. Sa lance, comme ses yeux, envoie des éclairs alors qu’il virevolte encore et encore autour d’un géant difforme, jusqu\'à ce que sa lumière triomphe de cette hideuse obscurité.  Quelles que soient leurs origines et leurs missions, les paladins sont unis par leur serment de s’opposer aux forces du mal. Qu’il fût prononcé au pied de l’autel d’un dieu en présence d’un prêtre, dans une clairière sacrée devant des esprits de la nature et des êtres-fées, ou bien lors d’un moment de désespoir et de colère avec la mort comme seul témoin, le serment d’un paladin est un lien très puissant. Il est la source d’un pouvoir qui transforme un guerrier dévoué en un champion béni.'),
(10, 'Rôdeur', 0, 5, 5, 10, 5, 10, 20, 1, 'D\'aspect sauvage et rude, un humain traque seul à travers les ombres des arbres, chassant les orques qu\'il sait préparer l\'attaque d\'une ferme alentour. Armé d\'une épée courte dans chaque main il devient une tornade de métal, tranchant les ennemis les uns après les autres. Après avoir fait une roulade loin d\'un souffle d\'air gelé, une elfe se redresse d\'un bond et dégaine son arc, décochant au passage une flèche vers le dragon blanc. S\'affranchissant de la vague de terreur qui émane de lui comme la morsure glacée de son souffle, elle fait pleuvoir ses traits les uns après les autres afin de trouver un point faible entre les épaisses écailles du dragon. Levant sa main en l\'air, un demi elfe siffle vers le faucon qui vole en cercle au-dessus de lui, l\'appelant à ses côtés. Chuchotant des instructions en elfique, il pointe du doigt l\'ours-hibou qu\'il traquait et envoie le rapace distraire la créature pendant qu\'il bande son arc.  Loin du confort des cités et villages, en avant des haies qui protègent les fermes les plus éloignées des terreurs issues du monde sauvage, au milieu des arbres touffus dans des forêts sans chemin et à travers de vastes plaines désertiques, les rôdeurs continuent leur veille sans fin.'),
(11, 'Roublard', 0, 10, 10, 10, 0, 5, 10, 1, 'Signifiant à ses compagnons d\'attendre, un halfelin avance lentement dans la salle du donjon. Il colle son oreille à la porte, puis sort un jeu d\'outils et crochète la serrure en un clin d\'œil. Il disparaît ensuite dans l\'ombre, lorsque son ami guerrier avance pour frapper la porte ouverte. Un humain se cache dans l\'ombre d\'une ruelle tandis que son complice se prépare pour l\'embuscade. Quand leur cible, un esclavagiste notoire, passe en face de la ruelle, le complice crie, l\'esclavagiste vient voir ce qui se passe, et la lame de l\'assassin lui coupe la gorge avant qu\'il ne puisse faire le moindre bruit. Une gnome agite ses doigts et soulève par magie le trousseau de clés à la ceinture du garde. En un instant, les clés sont dans sa main, la porte de la cellule est ouverte, et elle et ses compagnons sont libres de prendre la fuite.  Les roublards s\'appuient sur ​​la compétence, la discrétion et les faiblesses de leurs ennemis pour prendre la main dans n\'importe quelle situation. Ils ont le don de trouver la solution à n\'importe quel problème, démontrant une ingéniosité et une polyvalence qui est la pierre angulaire de toute aventure réussie.'),
(12, 'Sorcier', 0, 5, 0, 15, 5, 10, 10, 0, 'Un pseudodragon lové sur ses épaules, un jeune elfe vêtu d’une robe dorée sourit chaleureusement, tissant la trame d’un sortilège avec ses paroles mielleuses tout en incitant les sentinelles du palais à se plier à sa volonté. Alors que les flammes surgissent de sa main, une humaine flétrie susurre le nom secret de son patron démoniaque, insufflant à son sort une magie diabolique. Balayant son regard entre un tome vétuste et l’étrange alignement des astres, un tieffelin éperdu psalmodie un rituel mystique qui ouvrira un portail vers un monde distant.  Les sorciers sont des chercheurs de la connaissance dissimulée dans la trame du multivers. Par l’entremise de pactes conclus avec de mystérieux êtres dotés de pouvoirs surnaturels, les sorciers libèrent des effets magiques à la fois subtiles et spectaculaires. Tirant parti du savoir ancien d’êtres tels que les nobles fées, les démons, les diables, les sorcières et les entités extraplanaires du Royaume lointain, les sorciers assemblent les secrets arcaniques pour renforcer leur propre puissance.');

-- --------------------------------------------------------

--
-- Structure de la table `project001_class_armor_types`
--

CREATE TABLE `project001_class_armor_types` (
  `class_id` int(11) NOT NULL,
  `armor_type_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_class_armor_types`
--

INSERT INTO `project001_class_armor_types` (`class_id`, `armor_type_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 13),
(2, 1),
(2, 2),
(2, 3),
(2, 13),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 13),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 13),
(5, 13),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(6, 13),
(7, 13),
(8, 13),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(9, 9),
(9, 10),
(9, 11),
(9, 12),
(9, 13),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(10, 5),
(10, 6),
(10, 7),
(10, 8),
(10, 13),
(11, 1),
(11, 2),
(11, 3),
(11, 13),
(12, 1),
(12, 2),
(12, 3),
(12, 13);

-- --------------------------------------------------------

--
-- Structure de la table `project001_class_skill_types`
--

CREATE TABLE `project001_class_skill_types` (
  `class_id` int(11) NOT NULL,
  `skill_type_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_class_skill_types`
--

INSERT INTO `project001_class_skill_types` (`class_id`, `skill_type_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(4, 3),
(5, 3),
(6, 1),
(6, 2),
(7, 3),
(8, 1),
(8, 2),
(9, 1),
(9, 2),
(9, 3),
(10, 1),
(10, 2),
(11, 1),
(11, 2),
(12, 3);

-- --------------------------------------------------------

--
-- Structure de la table `project001_class_weapons`
--

CREATE TABLE `project001_class_weapons` (
  `class_id` int(11) NOT NULL,
  `weapon_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_class_weapons`
--

INSERT INTO `project001_class_weapons` (`class_id`, `weapon_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22),
(1, 23),
(1, 24),
(1, 25),
(1, 26),
(1, 27),
(1, 28),
(1, 29),
(1, 30),
(1, 31),
(1, 32),
(1, 37),
(1, 38),
(1, 39),
(1, 40),
(1, 44),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 18),
(2, 19),
(2, 31),
(2, 37),
(2, 41),
(2, 42),
(2, 43),
(2, 44),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 41),
(3, 42),
(3, 43),
(3, 44),
(4, 1),
(4, 2),
(4, 3),
(4, 5),
(4, 6),
(4, 8),
(4, 10),
(4, 13),
(4, 14),
(4, 15),
(4, 41),
(4, 42),
(4, 43),
(4, 44),
(5, 1),
(5, 2),
(5, 11),
(5, 13),
(5, 14),
(5, 41),
(5, 42),
(5, 43),
(5, 44),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(6, 13),
(6, 14),
(6, 15),
(6, 16),
(6, 17),
(6, 18),
(6, 19),
(6, 20),
(6, 21),
(6, 22),
(6, 23),
(6, 24),
(6, 25),
(6, 26),
(6, 27),
(6, 28),
(6, 29),
(6, 30),
(6, 31),
(6, 32),
(6, 37),
(6, 38),
(6, 39),
(6, 40),
(6, 44),
(7, 1),
(7, 2),
(7, 11),
(7, 13),
(7, 14),
(7, 41),
(7, 42),
(7, 43),
(7, 44),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 7),
(8, 8),
(8, 9),
(8, 10),
(8, 11),
(8, 12),
(8, 13),
(8, 14),
(8, 18),
(8, 44),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(9, 9),
(9, 10),
(9, 11),
(9, 12),
(9, 13),
(9, 14),
(9, 15),
(9, 16),
(9, 17),
(9, 18),
(9, 19),
(9, 20),
(9, 21),
(9, 22),
(9, 23),
(9, 24),
(9, 25),
(9, 26),
(9, 27),
(9, 28),
(9, 29),
(9, 30),
(9, 31),
(9, 32),
(9, 37),
(9, 38),
(9, 39),
(9, 40),
(9, 41),
(9, 42),
(9, 43),
(9, 44),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(10, 5),
(10, 6),
(10, 7),
(10, 8),
(10, 9),
(10, 10),
(10, 11),
(10, 12),
(10, 13),
(10, 14),
(10, 15),
(10, 16),
(10, 17),
(10, 18),
(10, 19),
(10, 20),
(10, 21),
(10, 22),
(10, 23),
(10, 24),
(10, 25),
(10, 26),
(10, 27),
(10, 28),
(10, 29),
(10, 30),
(10, 31),
(10, 32),
(10, 37),
(10, 38),
(10, 39),
(10, 40),
(10, 44),
(11, 1),
(11, 2),
(11, 3),
(11, 4),
(11, 5),
(11, 6),
(11, 7),
(11, 8),
(11, 9),
(11, 10),
(11, 11),
(11, 12),
(11, 13),
(11, 14),
(11, 18),
(11, 19),
(11, 31),
(11, 37),
(11, 44),
(12, 1),
(12, 2),
(12, 3),
(12, 4),
(12, 5),
(12, 6),
(12, 7),
(12, 8),
(12, 9),
(12, 10),
(12, 11),
(12, 12),
(12, 13),
(12, 14),
(12, 41),
(12, 42),
(12, 43),
(12, 44);

-- --------------------------------------------------------

--
-- Structure de la table `project001_damage_types`
--

CREATE TABLE `project001_damage_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_damage_types`
--

INSERT INTO `project001_damage_types` (`id`, `name`) VALUES
(1, 'tranchant'),
(2, 'perforant'),
(3, 'contondant'),
(4, 'feu'),
(5, 'glace'),
(6, 'foudre'),
(7, 'lumière'),
(8, 'ténèbtre'),
(9, 'son'),
(10, 'soin');

-- --------------------------------------------------------

--
-- Structure de la table `project001_enemies`
--

CREATE TABLE `project001_enemies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `healthMax` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `exp_gain` int(11) NOT NULL,
  `min_dungeon_number` int(11) NOT NULL,
  `difficulty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_enemies`
--

INSERT INTO `project001_enemies` (`id`, `name`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `healthMax`, `level`, `exp_gain`, `min_dungeon_number`, `difficulty`) VALUES
(1, 'Lapin', 5, 35, 25, 20, 15, 0, 35, 1, 2, 0, 1),
(2, 'Renard', 10, 20, 20, 30, 20, 5, 45, 2, 5, 0, 2),
(3, 'Loup', 10, 20, 20, 30, 20, 5, 60, 3, 10, 0, 3),
(4, 'Bélier', 20, 15, 30, 10, 25, 5, 75, 4, 15, 0, 4),
(5, 'Ours', 20, 15, 20, 10, 25, 5, 100, 5, 20, 0, 5),
(6, 'Gobelin', 15, 35, 35, 35, 20, 10, 60, 6, 10, 1, 1),
(7, 'Chamane gobelin', 15, 35, 35, 40, 20, 15, 65, 7, 25, 1, 2),
(8, 'Chef d\'escouade gobelin', 20, 35, 35, 40, 20, 10, 80, 8, 50, 1, 3),
(9, 'Brute gobelin', 25, 35, 35, 10, 30, 10, 110, 9, 75, 1, 4),
(10, 'Hobgobelin', 20, 35, 35, 30, 25, 15, 110, 10, 100, 1, 5),
(11, 'Petit élémentaire de feu', 20, 40, 60, 50, 30, 5, 80, 11, 50, 2, 1),
(12, 'Élémentaire de feu', 30, 40, 30, 40, 40, 5, 115, 12, 125, 2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `project001_enemy_skills`
--

CREATE TABLE `project001_enemy_skills` (
  `enemy_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_enemy_skills`
--

INSERT INTO `project001_enemy_skills` (`enemy_id`, `skill_id`) VALUES
(1, 49),
(2, 48),
(3, 47),
(3, 48),
(4, 49),
(5, 47),
(5, 48),
(5, 50),
(6, 51),
(7, 1),
(7, 51),
(8, 51),
(9, 10),
(9, 51),
(10, 8),
(10, 14),
(10, 49),
(10, 51),
(11, 1),
(11, 23),
(12, 1),
(12, 23);

-- --------------------------------------------------------

--
-- Structure de la table `project001_items`
--

CREATE TABLE `project001_items` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `damage_type` int(11) NOT NULL,
  `modifier` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_items`
--

INSERT INTO `project001_items` (`id`, `name`, `damage_type`, `modifier`) VALUES
(1, 'Petite potion', 10, -25),
(2, 'Moyenne potion', 10, -50),
(3, 'Grande potion ', 10, -100),
(4, 'Potion MAX', 10, -1000000),
(5, 'Petite grenade', 4, 25),
(6, 'Moyenne grenade', 4, 50),
(7, 'Grande grenade', 4, 100);

-- --------------------------------------------------------

--
-- Structure de la table `project001_races`
--

CREATE TABLE `project001_races` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `health` int(11) NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_races`
--

INSERT INTO `project001_races` (`id`, `name`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `health`, `description`) VALUES
(1, 'Humain', 5, 5, 5, 5, 5, 5, 5, 'Dans la plupart des mondes, les humains sont la plus jeune des races communes, la dernière à être apparue et celle dotée de la plus faible longévité par rapport aux nains, aux elfes et aux dragons. Peut-être du fait de leurs vies plus courtes, ils s\'efforcent d\'atteindre autant d\'objectifs qu\'ils peuvent pendant les années qui leur sont données. Ou peut-être sentent-ils qu\'ils ont quelque chose à prouver aux races plus anciennes, et c\'est pourquoi ils construisent de puissants empires basés sur la conquête et le commerce. Mais quelle que soit la raison qui les pousse de l\'avant, les humains sont les innovateurs, les bâtisseurs et les pionniers de leurs mondes.'),
(2, 'Elfe', 0, 10, 15, 10, 0, 0, 0, 'Les elfes sont des créatures magiques d’une extraordinaire grâce, habitant le monde sans en faire totalement partie. Ils vivent dans des lieux d’une beauté éthérée, au coeur d’anciennes forêts ou dans des tours scintillantes d’une lumière féerique, là où une douce musique flotte dans l’air et où de subtiles effluves embaument la brise. Les elfes aiment la nature et la magie, l’art et l’artisanat, la musique et la poésie, et les bonnes choses de ce monde.'),
(3, 'Demi-Elfe', 0, 10, 15, 0, 0, 0, 10, 'Fréquentant deux mondes, mais n\'appartenant vraiment à aucun des deux, les demi-elfes combinent ce que certains disent être les meilleures qualités de leurs parents elfes et humains : la curiosité et la créativité humaine, et une ambition tempérée par des sens raffinés, l\'amour de la nature et les goûts artistiques des elfes. Certains demi-elfes vivent parmi les humains, un peu en marge de par leurs différences physiques et émotionnelles, en regardant vieillir leurs amis et leurs proches alors que le temps les touche à peine. D\'autres vivent chez les elfes, devenant adultes alors que leurs pairs continuent de vivre comme des enfants, s\'agitant de plus en plus dans ces royaumes elfiques intemporels. Beaucoup d\'autres demi-elfes, incapables de s\'intégrer dans quelle société que ce soit, choisissent une vie d\'errance solitaire, ou rejoignent d\'autres marginaux et exclus pour partager une vie d\'aventures.'),
(4, 'Demi-Orque', 10, 0, 5, 0, 10, 0, 10, 'Que ce soit unis sous la direction d\'un puissant sorcier ou lors de trêves après des années de conflit, les tribus orques et humaines forment parfois des alliances, unissant leurs forces en une horde encore plus grande qui engendre la terreur dans les terres civilisées proches. Et lorsque ces alliances sont scellées par des mariages, des demi-orques naissent. Certains deviennent de fiers chefs de tribus orques, leur sang humain leur donnant un avantage sur leurs rivaux orques. Certains s\'aventurent dans le monde afin de prouver leur valeur parmi les humains ou d\'autres races plus civilisées. Beaucoup d\'entre eux deviennent alors des aventuriers, acquérant la grandeur à travers leurs hauts faits et la notoriété à travers leurs coutumes barbares et leur fureur sauvage.'),
(5, 'Nain', 15, 0, 0, 0, 5, 0, 15, 'De riches royaumes d’une ancienne magnificence, des halls creusés aux racines mêmes des montagnes, l’écho des pioches et des marteaux dans les mines profondes et les forges ardentes, un engagement au clan et à la tradition ainsi qu’une intense haine des gobelins et des orques, ce sont les traits communs qui unissent tous les nains.'),
(6, 'Gnome', 15, 5, 5, 15, 0, 10, 0, 'Un bourdonnement constant d\'activités imprègne les terriers et les quartiers des communautés gnomes. Et certains sons plus forts ponctuent ce bourdonnement : un craquement d\'engrenages ici, une petite explosion là, un cri de surprise ou de triomphe, mais surtout des éclats de rire. Les gnomes prennent plaisir à la vie, et profitent de chaque instant, d\'une invention, d\'une exploration, d\'une recherche, d\'une création ou d\'une lecture.'),
(7, 'Drakéide', 15, 0, 5, 0, 10, 0, 5, 'Nés de dragons, comme leur nom le laisse entendre, les drakéides marchent fièrement dans un monde qui les accueille avec une incompréhension craintive. Façonnés par les dieux draconiques ou les dragons eux-mêmes, à l\'origine les drakéides ont éclos d\'œufs de dragons pour ensuite former une race à part entière qui combine les meilleurs attributs des dragons et des humanoïdes. Certains drakéides sont de fidèles serviteurs des vrais dragons, d\'autres forment les rangs des soldats dans de grandes guerres, et d\'autres encore se trouvent à la dérive, sans vocation claire dans la vie.'),
(8, 'Tieffelin', 0, 10, 5, 10, 0, 10, 0, 'Être accueilli par des regards suspicieux et des murmures, souffrir insultes et violences à chaque coin de rue, croiser le doute et la peur dans chaque regard, tel est le lot quotidien du tieffelin. Et pour remuer le couteau dans la plaie, les tieffelins ont conscience que tout cela vient d\'un pacte passé il y a plusieurs générations qui imprégna leur lignée de l\'essence d\'Asmodée, le seigneur des neuf enfers. Leur apparence et leur nature ne sont pas le fruit de leur volonté, mais la conséquence d\'un péché ancien duquel eux-mêmes, leurs enfants et toute leur descendance, seront toujours redevables.');

-- --------------------------------------------------------

--
-- Structure de la table `project001_skills`
--

CREATE TABLE `project001_skills` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `damage_type` int(11) NOT NULL,
  `accuracy_ratio` float NOT NULL,
  `strength_ratio` float NOT NULL,
  `critical_ratio` float NOT NULL,
  `cooldown` int(11) NOT NULL,
  `skill_type_id` int(11) NOT NULL,
  `level_required` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_skills`
--

INSERT INTO `project001_skills` (`id`, `name`, `damage_type`, `accuracy_ratio`, `strength_ratio`, `critical_ratio`, `cooldown`, `skill_type_id`, `level_required`) VALUES
(1, 'Trait de feu', 4, 2, 7, 1, 1, 3, 1),
(2, 'Rayon de givre', 5, 4, 5, 1, 1, 3, 1),
(3, 'Poigne électrique', 6, 6, 5, 1, 1, 3, 1),
(4, 'Gelure', 5, 4, 3, 1, 1, 3, 1),
(5, 'Flamme sacrée', 7, 4, 5, 1, 1, 3, 1),
(6, 'Décharge occulte', 8, 2, 7, 1, 1, 3, 1),
(7, 'Coup de tonnerre', 9, 6, 3, 1, 1, 3, 1),
(8, 'Triple taillade', 1, 3, 3, 1, 2, 1, 1),
(9, 'Estocade Sonique', 2, 3, 3, 1, 2, 1, 1),
(10, 'Triple frappe', 3, 3, 3, 1, 2, 1, 1),
(11, 'Soin inférieur', 10, 4, -3, 1, 2, 3, 1),
(12, 'Soin', 10, 4, -5, 1, 2, 3, 5),
(13, 'Premiers soins', 10, 4, -2, 1, 2, 1, 1),
(14, 'Rafistollage', 10, 4, -4, 1, 2, 1, 5),
(15, 'Technique de survie rapide', 10, 4, -2, 1, 2, 2, 1),
(16, 'Technique de survie', 10, 4, -4, 1, 2, 2, 5),
(17, 'Flèche dentelée', 1, 3, 3, 1, 2, 2, 1),
(18, 'Tir pénétrant', 2, 3, 3, 1, 2, 2, 1),
(19, 'Flèche fracassante', 3, 3, 3, 1, 2, 2, 1),
(20, 'Flèche enflammée', 4, 4, 2, 1, 2, 2, 1),
(21, 'Flèche de glace', 5, 4, 2, 1, 2, 2, 1),
(22, 'Flèche de foudre', 6, 4, 2, 1, 2, 2, 1),
(23, 'Coup enflammé', 4, 4, 2, 1, 2, 1, 1),
(24, 'Coup gelée', 5, 4, 2, 1, 2, 1, 1),
(25, 'Coup de foudre', 6, 4, 2, 1, 2, 1, 1),
(26, 'Boule de feu', 4, 2, 14, 3, 2, 3, 5),
(27, 'Lance de glace', 5, 4, 10, 3, 2, 3, 5),
(28, 'Lance de foudre', 6, 4, 10, 3, 2, 3, 5),
(29, 'Lance sacré', 7, 4, 10, 3, 2, 3, 5),
(30, 'Boule d\'énergie négative', 8, 2, 14, 3, 2, 3, 5),
(31, 'Explosion supersonique', 9, 6, 10, 4, 2, 3, 5),
(32, 'Lacération sauvage', 1, 2, 5, 2, 2, 1, 5),
(33, 'Assaut d\'aiguilles', 2, 2, 5, 2, 2, 1, 5),
(34, 'Fracasse face', 3, 2, 5, 2, 2, 1, 5),
(35, 'Pluie de feu', 4, 4, 20, 5, 5, 3, 10),
(36, 'Blizzard', 5, 4, 20, 5, 5, 3, 10),
(37, 'Tempête d\'éclair', 6, 4, 20, 5, 5, 3, 10),
(38, 'Explosion sacré', 7, 4, 20, 5, 5, 3, 10),
(39, 'Ombres dévorantes', 8, 4, 20, 5, 5, 3, 10),
(40, 'Perce tympan', 9, 4, 20, 5, 5, 3, 10),
(41, 'Barbecue d\'enfer', 4, 5, 30, 5, 10, 3, 15),
(42, 'Chute d\'iceberg', 5, 5, 30, 5, 10, 3, 15),
(43, 'I.E.M.', 6, 5, 30, 5, 10, 3, 15),
(44, 'Pluie de licorne', 7, 5, 30, 5, 10, 3, 15),
(45, 'Trou noir', 8, 5, 30, 5, 10, 3, 15),
(46, 'Eternuement de Zeus', 9, 5, 30, 5, 10, 3, 15),
(47, 'Coup de griffe', 1, 1, 1, 1, 1, 4, 1),
(48, 'Morsure', 2, 1, 1, 1, 1, 4, 1),
(49, 'Coup de boule', 3, 1, 1, 1, 1, 4, 1),
(50, 'Rugissement bestiale', 9, 1, 2, 1, 4, 4, 1),
(51, 'Coup gourdin', 3, 1, 1, 1, 1, 4, 5);

-- --------------------------------------------------------

--
-- Structure de la table `project001_skill_types`
--

CREATE TABLE `project001_skill_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_skill_types`
--

INSERT INTO `project001_skill_types` (`id`, `name`) VALUES
(1, 'melee'),
(2, 'range'),
(3, 'magic'),
(4, 'monster');

-- --------------------------------------------------------

--
-- Structure de la table `project001_users`
--

CREATE TABLE `project001_users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `pseudo` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `date_creation` datetime NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_users`
--

INSERT INTO `project001_users` (`id`, `email`, `pseudo`, `password`, `activated`, `date_creation`, `uuid`) VALUES
(1, 'toto@connard.com', 'totoleconnard', 'ungroscon', 0, '2017-09-22 10:21:15', '00000000000000001'),
(2, 'tata@connasse.com', 'tatalaconnasse', 'unegrosseconne', 0, '2017-09-20 05:35:26', '00000000000000002'),
(3, 'alex83.derai@gmail.com', 'Diablix', '$2y$13$Q5SsQE4L3/E4gU6tdp27JOFZXg/5/cYkop1FQvH5ZobycNo1w8tU.', 1, '2017-09-30 15:11:01', '9afc72d6a47a27217a733a6c9e1e03e360ea3317');

-- --------------------------------------------------------

--
-- Structure de la table `project001_weakness`
--

CREATE TABLE `project001_weakness` (
  `enemies_id` int(11) NOT NULL,
  `damage_type` int(11) NOT NULL,
  `ratio` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_weakness`
--

INSERT INTO `project001_weakness` (`enemies_id`, `damage_type`, `ratio`) VALUES
(1, 2, 1.5),
(1, 4, 2),
(2, 2, 1.5),
(2, 4, 2),
(3, 2, 1.5),
(3, 4, 2),
(4, 2, 1.5),
(4, 4, 2),
(5, 4, 2),
(5, 1, 0.9),
(5, 2, 0.9),
(5, 3, 0.9),
(6, 1, 1.5),
(6, 2, 1.5),
(7, 3, 1.5),
(7, 1, 1.5),
(7, 2, 1.5),
(6, 3, 1.5),
(8, 1, 1.5),
(8, 2, 1.5),
(8, 3, 1.5),
(9, 1, 0.9),
(9, 2, 0.9),
(9, 3, 0.9),
(9, 4, 1.5),
(9, 5, 1.5),
(9, 6, 1.5),
(9, 7, 1.5),
(9, 8, 1.8),
(9, 9, 1.5),
(10, 1, 1.2),
(10, 2, 1.2),
(10, 3, 1.2),
(11, 1, 0.5),
(11, 2, 0.5),
(11, 3, 0.5),
(11, 4, -1),
(11, 5, 2),
(12, 1, 0.5),
(12, 2, 0.5),
(12, 3, 0.5),
(12, 4, -1),
(12, 5, 2);

-- --------------------------------------------------------

--
-- Structure de la table `project001_weapons`
--

CREATE TABLE `project001_weapons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `handsNumber` int(11) NOT NULL,
  `damage_type` int(11) NOT NULL,
  `skill_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_weapons`
--

INSERT INTO `project001_weapons` (`id`, `name`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `handsNumber`, `damage_type`, `skill_type`) VALUES
(1, 'Bâton', 10, 5, 0, 0, 25, 0, 3, 3, 1),
(2, 'Dague', 0, 5, 5, 5, 5, 10, 1, 2, 1),
(3, 'Gourdin', 0, 5, 5, 5, 5, 0, 1, 3, 1),
(4, 'Hachette', 0, 5, 5, 5, 15, 0, 1, 1, 1),
(5, 'Javeline', 0, 0, 5, 5, 15, 0, 1, 2, 1),
(6, 'Lance', 10, 0, 0, 0, 25, 0, 3, 2, 1),
(7, 'Marteau léger', 0, 5, 5, 5, 5, 0, 1, 3, 1),
(8, 'Masse d\'armes', 5, 0, 0, 0, 15, 0, 1, 3, 1),
(9, 'Massue', 10, 0, 0, 0, 25, 5, 2, 3, 1),
(10, 'Serpe', 0, 5, 5, 5, 5, 0, 1, 1, 1),
(11, 'Arbalète légère', 0, 0, 0, 0, 25, 0, 2, 2, 2),
(12, 'Arc court', 0, 0, 5, 10, 15, 5, 2, 2, 2),
(13, 'Fléchette', 0, 5, 5, 5, 5, 10, 1, 2, 2),
(14, 'Fronde', 0, 0, 5, 0, 5, 0, 1, 3, 2),
(15, 'Cimeterre', 0, 5, 5, 5, 15, 10, 1, 1, 1),
(16, 'Coutille', 5, 0, 0, 0, 35, 5, 2, 1, 1),
(17, 'Epée à deux mains', 5, 0, 0, 0, 45, 5, 2, 1, 1),
(18, 'Epée courte', 0, 5, 5, 5, 15, 10, 1, 2, 1),
(19, 'Epée longue', 5, 0, 0, 5, 25, 0, 3, 1, 1),
(20, 'Fléau d\'armes', 0, 0, 0, 0, 25, 0, 1, 3, 1),
(21, 'Fouet', 0, 10, 10, 5, 5, 10, 1, 1, 1),
(22, 'Hache à deux mains', 5, 0, 0, 0, 45, 5, 2, 1, 1),
(23, 'Hache d\'armes', 10, 0, 0, 5, 35, 0, 3, 1, 1),
(24, 'Hallebarde', 10, 0, 0, 5, 35, 5, 2, 1, 1),
(25, 'Lance d\'arçon', 0, 0, 0, 10, 45, 5, 1, 2, 1),
(26, 'Maillet', 5, 0, 0, 0, 45, 5, 2, 3, 1),
(27, 'Marteau de guerre', 10, 5, 0, 0, 35, 0, 3, 3, 1),
(28, 'Morgenstern', 0, 5, 5, 5, 25, 5, 1, 2, 1),
(29, 'Pic de guerre', 0, 5, 5, 5, 25, 0, 1, 2, 1),
(30, 'Pique', 5, 0, 0, 5, 35, 5, 2, 2, 1),
(31, 'Rapière', 0, 5, 5, 10, 25, 10, 1, 2, 1),
(32, 'Trident', 10, 5, 5, 5, 25, 0, 3, 2, 1),
(37, 'Arbalète de poing', 0, 5, 5, 5, 15, 0, 1, 2, 2),
(38, 'Arbalète lourde', 0, 0, 0, 0, 35, 5, 2, 2, 2),
(39, 'Arc long', 0, 0, 0, 15, 25, 15, 2, 2, 2),
(40, 'Sarbacane', 0, 5, 10, 10, 10, 0, 1, 2, 2),
(41, 'Lancer magie', 0, 5, 5, 5, 5, 5, 2, 3, 3),
(42, 'Lancer magie +', 0, 10, 10, 10, 10, 10, 2, 3, 3),
(43, 'Lancer magie X', 0, 15, 15, 15, 15, 15, 2, 3, 3),
(44, 'Main nue', 0, 0, 0, 0, 0, 0, 3, 3, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `project001_armors`
--
ALTER TABLE `project001_armors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_armor_types`
--
ALTER TABLE `project001_armor_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `project001_characters`
--
ALTER TABLE `project001_characters`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_character_equipements`
--
ALTER TABLE `project001_character_equipements`
  ADD PRIMARY KEY (`character_id`),
  ADD UNIQUE KEY `character_id` (`character_id`);

--
-- Index pour la table `project001_character_inventories`
--
ALTER TABLE `project001_character_inventories`
  ADD PRIMARY KEY (`character_id`,`item_table_name`,`item_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Index pour la table `project001_character_skills`
--
ALTER TABLE `project001_character_skills`
  ADD PRIMARY KEY (`character_id`,`skill_id`);

--
-- Index pour la table `project001_class`
--
ALTER TABLE `project001_class`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `project001_class_armor_types`
--
ALTER TABLE `project001_class_armor_types`
  ADD PRIMARY KEY (`class_id`,`armor_type_id`);

--
-- Index pour la table `project001_class_skill_types`
--
ALTER TABLE `project001_class_skill_types`
  ADD PRIMARY KEY (`class_id`,`skill_type_id`);

--
-- Index pour la table `project001_class_weapons`
--
ALTER TABLE `project001_class_weapons`
  ADD PRIMARY KEY (`class_id`,`weapon_id`);

--
-- Index pour la table `project001_damage_types`
--
ALTER TABLE `project001_damage_types`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_enemies`
--
ALTER TABLE `project001_enemies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `project001_enemy_skills`
--
ALTER TABLE `project001_enemy_skills`
  ADD PRIMARY KEY (`enemy_id`,`skill_id`);

--
-- Index pour la table `project001_items`
--
ALTER TABLE `project001_items`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_races`
--
ALTER TABLE `project001_races`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `project001_skills`
--
ALTER TABLE `project001_skills`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_skill_types`
--
ALTER TABLE `project001_skill_types`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_users`
--
ALTER TABLE `project001_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `pseudo` (`pseudo`);

--
-- Index pour la table `project001_weakness`
--
ALTER TABLE `project001_weakness`
  ADD PRIMARY KEY (`enemies_id`,`damage_type`);

--
-- Index pour la table `project001_weapons`
--
ALTER TABLE `project001_weapons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `project001_armors`
--
ALTER TABLE `project001_armors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT pour la table `project001_armor_types`
--
ALTER TABLE `project001_armor_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `project001_characters`
--
ALTER TABLE `project001_characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `project001_class`
--
ALTER TABLE `project001_class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `project001_damage_types`
--
ALTER TABLE `project001_damage_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `project001_enemies`
--
ALTER TABLE `project001_enemies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `project001_items`
--
ALTER TABLE `project001_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `project001_races`
--
ALTER TABLE `project001_races`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `project001_skills`
--
ALTER TABLE `project001_skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
--
-- AUTO_INCREMENT pour la table `project001_skill_types`
--
ALTER TABLE `project001_skill_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `project001_users`
--
ALTER TABLE `project001_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `project001_weapons`
--
ALTER TABLE `project001_weapons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
