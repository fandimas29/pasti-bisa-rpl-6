-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2021 at 04:29 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbparkuy`
--

-- --------------------------------------------------------

--
-- Table structure for table `mobil`
--

CREATE TABLE `dbmobil` (
  `mobil_id` char(6) NOT NULL,
  `mobil_lokasi` varchar(50) NOT NULL,
  `mobil_td` int(11) DEFAULT NULL,
  `mobil_tpj` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mobil`
--

INSERT INTO `dbmobil` (`mobil_id`, `mobil_lokasi`, `mobil_td`, `mobil_tpj`) VALUES
('1', 'Cibubur Junction', 4000, 3000),
('2', 'Grand Indonesia', 5000, 3000),
('3', 'FX Sudirman', 5000, 3000),
('4', 'Botani Square', 4000, 3000),
('5', 'Trans Studio Cibubur', 5000, 3000),
('6', 'Summarecon Mall Bekasi', 5000, 3000),
('7', 'Transmart Yasmin', 3000, 3000),
('8', 'Cibinong City Mall', 3000, 3000),
('9', 'Graha Cijantung', 4000, 3000),
('10', 'Tamini Square', 4000, 3000);

-- --------------------------------------------------------

--
-- Table structure for table `motor`
--

CREATE TABLE `dbmotor` (
  `motor_id` char(6) NOT NULL,
  `motor_lokasi` varchar(50) NOT NULL,
  `motor_td` int(11) DEFAULT NULL,
  `motor_tpj` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `motor`
--

INSERT INTO `dbmotor` (`motor_id`, `motor_lokasi`, `motor_td`, `motor_tpj`) VALUES
('1', 'Cibubur Junction', 2000, 2000),
('2', 'Grand Indonesia', 3000, 2000),
('3', 'FX Sudirman', 2000, 2000),
('4', 'Botani Square', 2000, 2000),
('5', 'Trans Studio Cibubur', 3000, 2000),
('6', 'Summarecon Mall Bekasi', 3000, 2000),
('7', 'Transmart Yasmin', 2000, 2000),
('8', 'Cibinong City Mall', 2000, 2000),
('9', 'Graha Cijantung', 3000, 2000),
('10', 'Tamini Square', 2000, 2000);

CREATE TABLE 'catatanuser'(
  'cu_id' INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT,
  'cu_tanggal' DATE  NOT NULL,
  'cu_lokasi'  VARCHAR(20) NOT NULL,
  'cu_durasi'  VARCHAR(8) NOT NULL,
  'cu_tarif'   INTEGER  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO 'catatanuser'('cu_id','cu_tanggal','cu_lokasi','cu_durasi','cu_tarif') VALUES
(2,'16-6-2021','FX Sudirman','02:03:01',4000);
(3,'16-6-2021','Trans Studio Cibubur','03:54:21',7000);
(4,'17-6-2021','Grand Indonesia','00:20:35',5000);

CREATE TABLE 'user'(
  'user_id'INTEGER  NOT NULL PRIMARY KEY,
  'user_uname' VARCHAR(50) NOT NULL,
  'user_pass' VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO 'user'('user_id','user_uname','user_pass') VALUES
(1,'dimas29','bob');
(2,'Akmal','Akmal');

SELECT * FROM user WHERE user_uname='$user_uname$';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mobil`
--
ALTER TABLE `dbmobil`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `motor`
--
ALTER TABLE `dbmotor`
  ADD PRIMARY KEY (`id`);


--
-- Indexes for table 'catatanuser'
--
ALTER TABLE `catatanuser`
  ADD PRIMARY KEY (`id`);

ALTER TABLE 'user'
  ADD PRIMARY KEY ('id');
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
