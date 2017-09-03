-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Dim 03 Septembre 2017 à 17:10
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
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `defense` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `speed` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_armors`
--

INSERT INTO `project001_armors` (`id`, `name`, `defense`, `dodge`, `speed`) VALUES
(1, 'Matelassée', 15, 28, 20),
(2, 'Cuir', 15, 27, 20),
(3, 'Cuir clouté', 20, 26, 20),
(4, 'Peau', 20, 26, 10),
(5, 'Chemise de mailles', 25, 22, 10),
(6, 'Écailles', 30, 10, 10),
(7, 'Cuirasse', 30, 22, 10),
(8, 'Demi-plate', 35, 12, 10),
(9, 'Broigne', 30, 12, 0),
(10, ' Cotte de mailles', 40, 5, 0),
(11, 'Clibanion', 45, 2, 0),
(12, 'Harnois', 50, 0, 0),
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
  `level` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_characters`
--

INSERT INTO `project001_characters` (`id`, `name`, `user_id`, `healthMax`, `health`, `dead`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `race`, `class`, `exp`, `level`) VALUES
(1, 'Perso Test', 1, 55, 55, 0, 30, 5, 5, 20, 30, 5, 1, 3, 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `project001_character_equipement`
--

CREATE TABLE `project001_character_equipement` (
  `id` int(11) NOT NULL,
  `character_id` int(11) NOT NULL,
  `weapon_id` int(11) NOT NULL,
  `armor_id` int(11) NOT NULL,
  `inventory_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

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
  `health` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Structure de la table `project001_class_armor`
--

CREATE TABLE `project001_class_armor` (
  `id` int(11) NOT NULL,
  `class` int(11) NOT NULL,
  `armor` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_class_armor`
--

INSERT INTO `project001_class_armor` (`id`, `class`, `armor`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 2, 1),
(10, 2, 2),
(11, 2, 3),
(12, 3, 1),
(13, 3, 2),
(14, 3, 3),
(15, 3, 4),
(16, 3, 5),
(17, 3, 6),
(18, 3, 7),
(19, 3, 8),
(20, 4, 1),
(21, 4, 2),
(22, 4, 3),
(23, 4, 4),
(24, 4, 5),
(25, 4, 6),
(26, 4, 7),
(27, 4, 8),
(28, 5, 13),
(29, 6, 1),
(30, 6, 2),
(31, 6, 3),
(32, 6, 4),
(33, 6, 5),
(34, 6, 6),
(35, 6, 7),
(36, 6, 8),
(37, 6, 9),
(38, 6, 10),
(39, 6, 11),
(40, 6, 12),
(41, 6, 13),
(42, 7, 13),
(43, 8, 13),
(44, 9, 1),
(45, 9, 2),
(46, 9, 3),
(47, 9, 4),
(48, 9, 5),
(49, 9, 6),
(50, 9, 7),
(51, 9, 8),
(52, 9, 9),
(53, 9, 10),
(54, 9, 11),
(55, 9, 12),
(56, 9, 13),
(57, 10, 1),
(58, 10, 2),
(59, 10, 3),
(60, 10, 4),
(61, 10, 5),
(62, 10, 6),
(63, 10, 7),
(64, 10, 8),
(65, 11, 1),
(66, 11, 2),
(67, 11, 3),
(68, 11, 13),
(69, 12, 1),
(70, 12, 2),
(71, 12, 3),
(72, 12, 13),
(73, 1, 13),
(74, 2, 13),
(75, 3, 13),
(76, 4, 13),
(77, 10, 13);

-- --------------------------------------------------------

--
-- Structure de la table `project001_class_skilltypes`
--

CREATE TABLE `project001_class_skilltypes` (
  `id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `skill_type` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_class_skilltypes`
--

INSERT INTO `project001_class_skilltypes` (`id`, `class_id`, `skill_type`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 2),
(5, 2, 3),
(6, 3, 1),
(7, 3, 2),
(8, 3, 3),
(9, 4, 3),
(10, 5, 3),
(11, 6, 1),
(12, 6, 2),
(13, 7, 3),
(14, 8, 1),
(15, 8, 2),
(16, 9, 1),
(17, 9, 2),
(18, 9, 3),
(19, 10, 1),
(20, 10, 2),
(21, 11, 1),
(22, 11, 2),
(23, 12, 3);

-- --------------------------------------------------------

--
-- Structure de la table `project001_class_weapons`
--

CREATE TABLE `project001_class_weapons` (
  `id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `weapon_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_class_weapons`
--

INSERT INTO `project001_class_weapons` (`id`, `class_id`, `weapon_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 15),
(12, 1, 16),
(13, 1, 17),
(14, 1, 18),
(15, 1, 19),
(16, 1, 20),
(17, 1, 21),
(18, 1, 22),
(19, 1, 23),
(20, 1, 24),
(21, 1, 25),
(22, 1, 26),
(23, 1, 27),
(24, 1, 28),
(25, 1, 29),
(26, 1, 30),
(27, 1, 31),
(28, 1, 32),
(29, 2, 1),
(30, 2, 2),
(31, 2, 3),
(32, 2, 4),
(33, 2, 5),
(34, 2, 6),
(35, 2, 7),
(36, 2, 8),
(37, 2, 9),
(38, 2, 10),
(39, 2, 18),
(40, 2, 19),
(41, 2, 31),
(42, 2, 37),
(43, 3, 1),
(44, 3, 2),
(45, 3, 3),
(46, 3, 4),
(47, 3, 5),
(48, 3, 6),
(49, 3, 7),
(50, 3, 8),
(51, 3, 9),
(52, 3, 10),
(53, 4, 1),
(54, 4, 2),
(55, 4, 3),
(56, 4, 5),
(57, 4, 6),
(58, 4, 8),
(59, 4, 10),
(60, 4, 13),
(61, 4, 14),
(62, 4, 15),
(63, 5, 1),
(64, 5, 2),
(65, 5, 11),
(66, 5, 13),
(67, 5, 14),
(68, 6, 1),
(69, 6, 2),
(70, 6, 3),
(71, 6, 4),
(72, 6, 5),
(73, 6, 6),
(74, 6, 7),
(75, 6, 8),
(76, 6, 9),
(77, 6, 10),
(78, 6, 15),
(79, 6, 16),
(80, 6, 17),
(81, 6, 18),
(82, 6, 19),
(83, 6, 20),
(84, 6, 21),
(85, 6, 22),
(86, 6, 23),
(87, 6, 24),
(88, 6, 25),
(89, 6, 26),
(90, 6, 27),
(91, 6, 28),
(92, 6, 29),
(93, 6, 30),
(94, 6, 31),
(95, 6, 32),
(96, 7, 1),
(97, 7, 2),
(98, 7, 11),
(99, 7, 13),
(100, 7, 14),
(101, 8, 1),
(102, 8, 2),
(103, 8, 3),
(104, 8, 4),
(105, 8, 5),
(106, 8, 6),
(107, 8, 7),
(108, 8, 8),
(109, 8, 9),
(110, 8, 10),
(111, 8, 18),
(112, 9, 1),
(113, 9, 2),
(114, 9, 3),
(115, 9, 4),
(116, 9, 5),
(117, 9, 6),
(118, 9, 7),
(119, 9, 8),
(120, 9, 9),
(121, 9, 10),
(122, 9, 15),
(123, 9, 16),
(124, 9, 17),
(125, 9, 18),
(126, 9, 19),
(127, 9, 20),
(128, 9, 21),
(129, 9, 22),
(130, 9, 23),
(131, 9, 24),
(132, 9, 25),
(133, 9, 26),
(134, 9, 27),
(135, 9, 28),
(136, 9, 29),
(137, 9, 30),
(138, 9, 31),
(139, 9, 32),
(140, 1, 11),
(141, 1, 12),
(142, 1, 13),
(143, 1, 14),
(144, 1, 37),
(145, 1, 38),
(146, 1, 39),
(147, 1, 40),
(148, 2, 11),
(149, 2, 12),
(150, 2, 13),
(151, 2, 14),
(152, 3, 11),
(153, 3, 12),
(154, 3, 13),
(155, 3, 14),
(156, 6, 11),
(157, 6, 12),
(158, 6, 13),
(159, 6, 14),
(160, 6, 37),
(161, 6, 38),
(162, 6, 39),
(163, 6, 40),
(164, 8, 11),
(165, 8, 12),
(166, 8, 13),
(167, 8, 14),
(168, 9, 11),
(169, 9, 12),
(170, 9, 13),
(171, 9, 14),
(172, 9, 37),
(173, 9, 38),
(174, 9, 39),
(175, 9, 40),
(176, 10, 1),
(177, 10, 2),
(178, 10, 3),
(179, 10, 4),
(180, 10, 5),
(181, 10, 6),
(182, 10, 7),
(183, 10, 8),
(184, 10, 9),
(185, 10, 10),
(186, 10, 11),
(187, 10, 12),
(188, 10, 13),
(189, 10, 14),
(190, 10, 15),
(191, 10, 16),
(192, 10, 17),
(193, 10, 18),
(194, 10, 19),
(195, 10, 20),
(196, 10, 21),
(197, 10, 22),
(198, 10, 23),
(199, 10, 24),
(200, 10, 25),
(201, 10, 26),
(202, 10, 27),
(203, 10, 28),
(204, 10, 29),
(205, 10, 30),
(206, 10, 31),
(207, 10, 32),
(208, 10, 37),
(209, 10, 38),
(210, 10, 39),
(211, 10, 40),
(212, 11, 1),
(213, 11, 2),
(214, 11, 3),
(215, 11, 4),
(216, 11, 5),
(217, 11, 6),
(218, 11, 7),
(219, 11, 8),
(220, 11, 9),
(221, 11, 10),
(222, 11, 11),
(223, 11, 12),
(224, 11, 13),
(225, 11, 14),
(226, 11, 18),
(227, 11, 19),
(228, 11, 31),
(229, 11, 37),
(230, 12, 1),
(231, 12, 2),
(232, 12, 3),
(233, 12, 4),
(234, 12, 5),
(235, 12, 6),
(236, 12, 7),
(237, 12, 8),
(238, 12, 9),
(239, 12, 10),
(240, 12, 11),
(241, 12, 12),
(242, 12, 13),
(243, 12, 14),
(244, 2, 41),
(245, 2, 42),
(246, 2, 43),
(247, 3, 41),
(248, 3, 42),
(249, 3, 43),
(250, 4, 41),
(251, 4, 42),
(252, 4, 43),
(253, 5, 41),
(254, 5, 42),
(255, 5, 43),
(256, 7, 41),
(257, 7, 42),
(258, 7, 43),
(259, 9, 41),
(260, 9, 42),
(261, 9, 43),
(262, 12, 41),
(263, 12, 42),
(264, 12, 43);

-- --------------------------------------------------------

--
-- Structure de la table `project001_damage_type`
--

CREATE TABLE `project001_damage_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_damage_type`
--

INSERT INTO `project001_damage_type` (`id`, `name`) VALUES
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
  `health` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `project001_inventories`
--

CREATE TABLE `project001_inventories` (
  `id` int(11) NOT NULL,
  `character_id` int(11) NOT NULL,
  `item_type` varchar(255) NOT NULL,
  `item_id` int(11) NOT NULL,
  `item_quantity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

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
  `health` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_races`
--

INSERT INTO `project001_races` (`id`, `name`, `defense`, `dodge`, `speed`, `accuracy`, `strength`, `critical`, `health`) VALUES
(1, 'Humain', 5, 5, 5, 5, 5, 5, 5),
(2, 'Elfe', 0, 10, 15, 10, 0, 0, 0),
(8, 'Demi-Elfe', 0, 10, 15, 0, 0, 0, 10),
(9, 'Demi-Orque', 10, 0, 5, 0, 10, 0, 10),
(10, 'Nain', 15, 0, 0, 0, 5, 0, 15),
(11, 'Gnome', 15, 5, 5, 15, 0, 10, 0),
(12, 'Drakéide', 15, 0, 5, 0, 10, 0, 5),
(13, 'Tieffelin', 0, 10, 5, 10, 0, 10, 0);

-- --------------------------------------------------------

--
-- Structure de la table `project001_skills`
--

CREATE TABLE `project001_skills` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `damage_id` int(11) NOT NULL,
  `accuracy_ratio` int(11) NOT NULL,
  `strength_ratio` int(11) NOT NULL,
  `critical_ratio` int(11) NOT NULL,
  `cooldown` int(11) NOT NULL,
  `skilltype_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

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
-- Structure de la table `project001_skilltypes`
--

CREATE TABLE `project001_skilltypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `project001_skilltypes`
--

INSERT INTO `project001_skilltypes` (`id`, `name`) VALUES
(1, 'melee'),
(2, 'range'),
(3, 'magic');

-- --------------------------------------------------------

--
-- Structure de la table `project001_users`
--

CREATE TABLE `project001_users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `pseudo` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project001_users`
--

INSERT INTO `project001_users` (`id`, `email`, `pseudo`, `password`) VALUES
(1, 'test.test@gmail.com', 'pseudoTest', 'passwordTest');

-- --------------------------------------------------------

--
-- Structure de la table `project001_weakness`
--

CREATE TABLE `project001_weakness` (
  `id` int(11) NOT NULL,
  `enemies_id` int(11) NOT NULL,
  `damage_id` int(11) NOT NULL,
  `ratio` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

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
  `damage_type` int(11) NOT NULL,
  `skilltypes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(8, 'Masse d\'armes', 5, 0, 0, 0, 15, 0, 3, 1),
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
(20, 'Fléau d\'armes', 0, 0, 0, 0, 25, 0, 3, 1),
(21, 'Fouet', 0, 10, 10, 5, 5, 10, 1, 1),
(22, 'Hache à deux mains', 5, 0, 0, 0, 45, 5, 1, 1),
(23, 'Hache d\'armes', 10, 0, 0, 5, 35, 0, 1, 1),
(24, 'Hallebarde', 10, 0, 0, 5, 35, 5, 1, 1),
(25, 'Lance d\'arçon', 0, 0, 0, 10, 45, 5, 2, 1),
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

--
-- Index pour les tables exportées
--

--
-- Index pour la table `project001_armors`
--
ALTER TABLE `project001_armors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `project001_characters`
--
ALTER TABLE `project001_characters`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_character_equipement`
--
ALTER TABLE `project001_character_equipement`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_class`
--
ALTER TABLE `project001_class`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `project001_class_armor`
--
ALTER TABLE `project001_class_armor`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_class_skilltypes`
--
ALTER TABLE `project001_class_skilltypes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_class_weapons`
--
ALTER TABLE `project001_class_weapons`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_damage_type`
--
ALTER TABLE `project001_damage_type`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_enemies`
--
ALTER TABLE `project001_enemies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `project001_inventories`
--
ALTER TABLE `project001_inventories`
  ADD PRIMARY KEY (`id`);

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
-- Index pour la table `project001_skilltypes`
--
ALTER TABLE `project001_skilltypes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project001_users`
--
ALTER TABLE `project001_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `project001_weakness`
--
ALTER TABLE `project001_weakness`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `project001_characters`
--
ALTER TABLE `project001_characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `project001_character_equipement`
--
ALTER TABLE `project001_character_equipement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `project001_class`
--
ALTER TABLE `project001_class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `project001_class_armor`
--
ALTER TABLE `project001_class_armor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
--
-- AUTO_INCREMENT pour la table `project001_class_skilltypes`
--
ALTER TABLE `project001_class_skilltypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT pour la table `project001_class_weapons`
--
ALTER TABLE `project001_class_weapons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=265;
--
-- AUTO_INCREMENT pour la table `project001_damage_type`
--
ALTER TABLE `project001_damage_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `project001_enemies`
--
ALTER TABLE `project001_enemies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `project001_inventories`
--
ALTER TABLE `project001_inventories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `project001_items`
--
ALTER TABLE `project001_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `project001_races`
--
ALTER TABLE `project001_races`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `project001_skills`
--
ALTER TABLE `project001_skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `project001_skilltypes`
--
ALTER TABLE `project001_skilltypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `project001_users`
--
ALTER TABLE `project001_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `project001_weakness`
--
ALTER TABLE `project001_weakness`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `project001_weapons`
--
ALTER TABLE `project001_weapons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
