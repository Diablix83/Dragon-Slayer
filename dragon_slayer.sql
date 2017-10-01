-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: 127.0.0.1
-- Généré le: Mer 27 Septembre 2017 à 13:05
-- Version du serveur: 5.5.57-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `dragon_slayer`
--

-- --------------------------------------------------------

--
-- Structure de la table `project001_armors`
--

CREATE TABLE IF NOT EXISTS `project001_armors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `emplacement` varchar(255) NOT NULL,
  `armor_type` int(11) NOT NULL,
  `ratio` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=66 ;

--
-- Contenu de la table `project001_armors`
--

INSERT INTO `project001_armors` (`id`, `name`, `emplacement`, `armor_type`, `ratio`) VALUES
(1, 'Tête nue', 'head', 13, 1),
(2, 'Torse nue', 'torso', 13, 5),
(3, 'Mains nues', 'hands', 13, 1),
(4, 'Jambes nues', 'legs', 13, 2),
(5, 'Pieds nues', 'feet', 13, 1),
(6, 'Casque matelassé', 'head', 1, 1),
(7, 'Chemise matelassée', 'torso', 1, 5),
(8, 'Gants matelassées', 'hands', 1, 1),
(9, 'Jambières matelassées', 'legs', 1, 2),
(10, 'Bottes matelassées', 'feet', 1, 1),
(11, 'Casque de cuir', 'head', 2, 1),
(12, 'Plastron de cuir', 'torso', 2, 5),
(13, 'Gants de cuir', 'hands', 2, 1),
(14, 'Jambières de cuir', 'legs', 2, 2),
(15, 'Bottes de cuir', 'feet', 2, 1),
(16, 'Casque en cuir clouté', 'head', 3, 1),
(17, 'Plastron en cuir clouté', 'torso', 3, 5),
(18, 'Gants en cuir clouté', 'hands', 3, 1),
(19, 'Jambières en cuir clouté', 'legs', 3, 2),
(20, 'Bottes en cuir clouté', 'feet', 3, 1),
(21, 'Casque en peau', 'head', 4, 1),
(22, 'Tunique en peau', 'torso', 4, 5),
(23, 'Gants en peau', 'hands', 4, 1),
(24, 'Jambières en peau', 'legs', 4, 2),
(25, 'Bottes en peau', 'feet', 4, 1),
(26, 'Casque en mailles intermédiaire', 'head', 5, 1),
(27, 'Chemise en mailles intermédiaire', 'torso', 5, 5),
(28, 'Gants en mailles intermédiaire', 'hands', 5, 1),
(29, 'Jambières en mailles intermédiaire', '', 5, 2),
(30, 'Bottes en mailles intermédiaire', '', 5, 1),
(31, 'Casque en écailles', 'head', 6, 1),
(32, 'Plastron en écailles', 'torso', 6, 5),
(33, 'Gants en écailles', 'hands', 6, 1),
(34, 'Jambières en écailles', 'legs', 6, 2),
(35, 'Bottes en écailles', 'feet', 6, 1),
(36, 'Heaume en fer', 'head', 7, 1),
(37, 'Cuirasse en fer', 'torso', 7, 5),
(38, 'Gantelet en fer', 'hands', 7, 1),
(39, 'Jambières en fer', 'legs', 7, 2),
(40, 'Bottes en fer', 'feet', 7, 1),
(41, 'Heaume de Mithril', 'head', 8, 1),
(42, 'Chemise de Mithril', 'torso', 8, 5),
(43, 'Gants de Mithril', 'hands', 8, 1),
(44, 'Jambières de Mithril', 'legs', 8, 2),
(45, 'Bottes de Mithril', 'feet', 8, 1),
(46, 'Heaume en cotte de mailles lourde', 'head', 9, 1),
(47, 'Plastron en cotte de mailles lourde', 'torso', 9, 5),
(48, 'Gants en cotte de mailles lourde', 'hands', 9, 1),
(49, 'Jambières en cotte de mailles lourde', 'legs', 9, 2),
(50, 'Bottes en cotte de mailles lourde', 'feet', 9, 1),
(51, 'Casque en acier', 'head', 10, 1),
(52, 'Plastron en acier', 'torso', 10, 5),
(53, 'Gantelets en acier', 'hands', 10, 1),
(54, 'Jambières en acier', 'legs', 10, 2),
(55, 'Bottes en acier', 'feet', 10, 1),
(56, 'Casque d''ébonite', 'head', 11, 1),
(57, 'Plastron d''ébonite', 'torso', 11, 5),
(58, 'Gantelets d''ébonite', 'hands', 11, 1),
(59, 'Jambières d''ébonite', 'legs', 11, 2),
(60, 'Bottes d''ébonite', 'feet', 11, 1),
(61, 'Casque en écailles de dragon', 'head', 12, 1),
(62, 'Plastron en écailles de dragon', 'torso', 12, 5),
(63, 'Gantelets en écailles de dragon', 'hands', 12, 1),
(64, 'Jambières en écailles de dragon', 'legs', 12, 2),
(65, 'Bottes en écailles de dragon', 'feet', 12, 1);

-- --------------------------------------------------------

--
-- Structure de la table `project001_armor_types`
--

CREATE TABLE IF NOT EXISTS `project001_armor_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

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

CREATE TABLE IF NOT EXISTS `project001_characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `healthMax` int(11) NOT NULL,
  `health` int(11) NOT NULL,
  `dead` tinyint(1) NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `race` int(11) NOT NULL,
  `class` int(11) NOT NULL,
  `exp` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `project001_characters`
--

INSERT INTO `project001_characters` (`id`, `name`, `user_id`, `healthMax`, `health`, `dead`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `race`, `class`, `exp`, `level`) VALUES
(1, 'Perso Test', 1, 55, 55, 0, 30, 5, 5, 20, 30, 5, 1, 3, 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `project001_character_equipements`
--

CREATE TABLE IF NOT EXISTS `project001_character_equipements` (
  `character_id` int(11) NOT NULL,
  `hand_1_id` int(11) NOT NULL,
  `hand_2_id` int(11) NOT NULL,
  `armor_head_id` int(11) NOT NULL,
  `armor_torso_id` int(11) NOT NULL,
  `armor_hands_id` int(11) NOT NULL,
  `armor_legs_id` int(11) NOT NULL,
  `armor_feet_id` int(11) NOT NULL,
  PRIMARY KEY (`character_id`),
  UNIQUE KEY `character_id` (`character_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `project001_character_inventories`
--

CREATE TABLE IF NOT EXISTS `project001_character_inventories` (
  `character_id` int(11) NOT NULL,
  `item_table_name` varchar(255) NOT NULL,
  `item_id` int(11) NOT NULL,
  `item_quantity` int(11) NOT NULL,
  PRIMARY KEY (`character_id`,`item_id`),
  KEY `item_id` (`item_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `project001_character_skills`
--

CREATE TABLE IF NOT EXISTS `project001_character_skills` (
  `character_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  PRIMARY KEY (`character_id`,`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `project001_class`
--

CREATE TABLE IF NOT EXISTS `project001_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `health` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Contenu de la table `project001_class`
--

INSERT INTO `project001_class` (`id`, `name`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `health`) VALUES
(1, 'Barbare', 10, 0, 0, 0, 15, 10, 30),
(2, 'Barde', 0, 10, 5, 15, 0, 5, 10),
(3, 'Clerc', 20, 0, 0, 10, 5, 0, 10),
(4, 'Druide', 0, 5, 5, 15, 0, 10, 10),
(5, 'Ensorceleur', 0, 0, 10, 10, 0, 15, 0),
(6, 'Guerrier', 10, 10, 0, 0, 10, 5, 20),
(7, 'Magicien', 0, 0, 10, 15, 5, 5, 0),
(8, 'Moine', 0, 10, 10, 10, 5, 0, 10),
(9, 'Paladin', 20, 0, 0, 5, 10, 0, 20),
(10, 'Rôdeur', 0, 5, 5, 10, 5, 10, 20),
(11, 'Roublard', 0, 10, 10, 10, 0, 5, 10),
(12, 'Sorcier', 0, 5, 0, 15, 5, 10, 10);

-- --------------------------------------------------------

--
-- Structure de la table `project001_class_armor_types`
--

CREATE TABLE IF NOT EXISTS `project001_class_armor_types` (
  `class_id` int(11) NOT NULL,
  `armor_type_id` int(11) NOT NULL,
  PRIMARY KEY (`class_id`,`armor_type_id`)
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

CREATE TABLE IF NOT EXISTS `project001_class_skill_types` (
  `class_id` int(11) NOT NULL,
  `skill_type` int(11) NOT NULL,
  PRIMARY KEY (`class_id`,`skill_type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_class_skill_types`
--

INSERT INTO `project001_class_skill_types` (`class_id`, `skill_type`) VALUES
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

CREATE TABLE IF NOT EXISTS `project001_class_weapons` (
  `class_id` int(11) NOT NULL,
  `weapon_id` int(11) NOT NULL,
  PRIMARY KEY (`class_id`,`weapon_id`)
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
(5, 1),
(5, 2),
(5, 11),
(5, 13),
(5, 14),
(5, 41),
(5, 42),
(5, 43),
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
(7, 1),
(7, 2),
(7, 11),
(7, 13),
(7, 14),
(7, 41),
(7, 42),
(7, 43),
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
(12, 43);

-- --------------------------------------------------------

--
-- Structure de la table `project001_damage_types`
--

CREATE TABLE IF NOT EXISTS `project001_damage_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

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

CREATE TABLE IF NOT EXISTS `project001_enemies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `health` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `project001_enemy_skills`
--

CREATE TABLE IF NOT EXISTS `project001_enemy_skills` (
  `enemy_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  PRIMARY KEY (`enemy_id`,`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `project001_items`
--

CREATE TABLE IF NOT EXISTS `project001_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `damage_type` int(11) NOT NULL,
  `modifier` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

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

CREATE TABLE IF NOT EXISTS `project001_races` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `health` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Contenu de la table `project001_races`
--

INSERT INTO `project001_races` (`id`, `name`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `health`) VALUES
(1, 'Humain', 5, 5, 5, 5, 5, 5, 5),
(2, 'Elfe', 0, 10, 15, 10, 0, 0, 0),
(3, 'Demi-Elfe', 0, 10, 15, 0, 0, 0, 10),
(4, 'Demi-Orque', 10, 0, 5, 0, 10, 0, 10),
(5, 'Nain', 15, 0, 0, 0, 5, 0, 15),
(6, 'Gnome', 15, 5, 5, 15, 0, 10, 0),
(7, 'Drakéide', 15, 0, 5, 0, 10, 0, 5),
(8, 'Tieffelin', 0, 10, 5, 10, 0, 10, 0);

-- --------------------------------------------------------

--
-- Structure de la table `project001_skills`
--

CREATE TABLE IF NOT EXISTS `project001_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `damage_id` int(11) NOT NULL,
  `accuracy_ratio` int(11) NOT NULL,
  `strength_ratio` int(11) NOT NULL,
  `critical_ratio` int(11) NOT NULL,
  `cooldown` int(11) NOT NULL,
  `skilltype_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Contenu de la table `project001_skills`
--

INSERT INTO `project001_skills` (`id`, `name`, `damage_id`, `accuracy_ratio`, `strength_ratio`, `critical_ratio`, `cooldown`, `skilltype_id`) VALUES
(1, 'Trait de feu', 4, 2, 7, 1, 0, 3),
(2, 'Rayon de givre', 5, 4, 25, 1, 0, 3),
(3, 'Poigne électrique', 6, 6, 5, 1, 0, 3),
(4, 'Gelure', 5, 4, 3, 1, 0, 3),
(5, 'Flamme sacrée', 7, 4, 5, 1, 0, 3),
(6, 'Décharge occulte', 8, 2, 7, 1, 0, 3),
(7, 'Coup de tonnerre', 9, 6, 3, 1, 0, 3),
(8, 'Triple taillade', 1, 3, 3, 1, 2, 1),
(9, 'Estocade Sonique', 2, 3, 3, 1, 2, 1),
(10, 'Triple frappe', 3, 3, 3, 1, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `project001_skill_types`
--

CREATE TABLE IF NOT EXISTS `project001_skill_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

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

CREATE TABLE IF NOT EXISTS `project001_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `pseudo` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `date_creation` datetime NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `project001_users`
--

INSERT INTO `project001_users` (`id`, `email`, `pseudo`, `password`, `activated`, `date_creation`, `uuid`) VALUES
(1, 'toto@connard.com', 'totoleconnard', 'ungroscon', 0, '2017-09-22 10:21:15', '00000000000000001'),
(2, 'tata@connasse.com', 'tatalaconnasse', 'unegrosseconne', 0, '2017-09-20 05:35:26', '00000000000000002');

-- --------------------------------------------------------

--
-- Structure de la table `project001_weakness`
--

CREATE TABLE IF NOT EXISTS `project001_weakness` (
  `enemies_id` int(11) NOT NULL,
  `damage_id` int(11) NOT NULL,
  `ratio` int(11) NOT NULL,
  PRIMARY KEY (`enemies_id`,`damage_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `project001_weapons`
--

CREATE TABLE IF NOT EXISTS `project001_weapons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `critical` int(11) NOT NULL,
  `damage_type` int(11) NOT NULL,
  `skilltypes` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=44 ;

--
-- Contenu de la table `project001_weapons`
--

INSERT INTO `project001_weapons` (`id`, `name`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `damage_type`, `skilltypes`) VALUES
(1, 'Bâton', 10, 5, 0, 0, 25, 0, 3, 1),
(2, 'Dague', 0, 5, 5, 5, 5, 10, 2, 1),
(3, 'Gourdin', 0, 5, 5, 5, 5, 0, 3, 1),
(4, 'Hachette', 0, 5, 5, 5, 15, 0, 1, 1),
(5, 'Javeline', 0, 0, 5, 5, 15, 0, 2, 1),
(6, 'Lance', 10, 0, 0, 0, 25, 0, 2, 1),
(7, 'Marteau léger', 0, 5, 5, 5, 5, 0, 3, 1),
(8, 'Masse d''armes', 5, 0, 0, 0, 15, 0, 3, 1),
(9, 'Massue', 10, 0, 0, 0, 25, 5, 3, 1),
(10, 'Serpe', 0, 5, 5, 5, 5, 0, 1, 1),
(11, 'Arbalète légère', 0, 0, 0, 0, 25, 0, 2, 2),
(12, 'Arc court', 0, 0, 5, 10, 15, 5, 2, 2),
(13, 'Fléchette', 0, 5, 5, 5, 5, 10, 2, 2),
(14, 'Fronde', 0, 0, 5, 0, 5, 0, 3, 2),
(15, 'Cimeterre', 0, 5, 5, 5, 15, 10, 1, 1),
(16, 'Coutille', 5, 0, 0, 0, 35, 5, 1, 1),
(17, 'Epée à deux mains', 5, 0, 0, 0, 45, 5, 1, 1),
(18, 'Epée courte', 0, 5, 5, 5, 15, 10, 2, 1),
(19, 'Epée longue', 5, 0, 0, 5, 25, 0, 1, 1),
(20, 'Fléau d''armes', 0, 0, 0, 0, 25, 0, 3, 1),
(21, 'Fouet', 0, 10, 10, 5, 5, 10, 1, 1),
(22, 'Hache à deux mains', 5, 0, 0, 0, 45, 5, 1, 1),
(23, 'Hache d''armes', 10, 0, 0, 5, 35, 0, 1, 1),
(24, 'Hallebarde', 10, 0, 0, 5, 35, 5, 1, 1),
(25, 'Lance d''arçon', 0, 0, 0, 10, 45, 5, 2, 1),
(26, 'Maillet', 5, 0, 0, 0, 45, 5, 3, 1),
(27, 'Marteau de guerre', 10, 5, 0, 0, 35, 0, 3, 1),
(28, 'Morgenstern', 0, 5, 5, 5, 25, 5, 2, 1),
(29, 'Pic de guerre', 0, 5, 5, 5, 25, 0, 2, 1),
(30, 'Pique', 5, 0, 0, 5, 35, 5, 2, 1),
(31, 'Rapière', 0, 5, 5, 10, 25, 10, 2, 1),
(32, 'Trident', 10, 5, 5, 5, 25, 0, 2, 1),
(37, 'Arbalète de pojng', 0, 5, 5, 5, 15, 0, 2, 2),
(38, 'Arbalète lourde', 0, 0, 0, 0, 35, 5, 2, 2),
(39, 'Arc long', 0, 0, 0, 15, 25, 15, 2, 2),
(40, 'Sarbacane', 0, 5, 10, 10, 10, 0, 2, 2),
(41, 'Lancer magie', 0, 5, 5, 5, 5, 5, 3, 3),
(42, 'Lancer magie +', 0, 10, 10, 10, 10, 10, 3, 3),
(43, 'Lancer magie X', 0, 15, 15, 15, 15, 15, 3, 3);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
