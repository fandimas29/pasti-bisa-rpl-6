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

CREATE TABLE `mobil` (
  `id` char(6) NOT NULL,
  `lokasi` varchar(50) NOT NULL,
  `tarifdasar` int(11) DEFAULT NULL,
  `perjam` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mobil`
--

INSERT INTO `mobil` (`id`, `lokasi`, `tarifdasar`, `perjam`) VALUES
('MOB001', 'Cibubur Junction', 4000, 3000),
('MOB002', 'Grand Indonesia', 5000, 3000),
('MOB003', 'FX Sudirman', 5000, 3000),
('MOB004', 'Botani Square', 4000, 3000),
('MOB005', 'Trans Studio Cibubur', 5000, 3000),
('MOB006', 'Summarecon Mall Bekasi', 5000, 3000),
('MOB007', 'Transmart Yasmin', 3000, 3000),
('MOB008', 'Cibinong City Mall', 3000, 3000),
('MOB009', 'Graha Cijantung', 4000, 3000),
('MOB010', 'Tamini Square', 4000, 3000);

-- --------------------------------------------------------

--
-- Table structure for table `motor`
--

CREATE TABLE `motor` (
  `id` char(6) NOT NULL,
  `lokasi` varchar(50) NOT NULL,
  `tarifdasar` int(11) DEFAULT NULL,
  `perjam` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `motor`
--

INSERT INTO `motor` (`id`, `lokasi`, `tarifdasar`, `perjam`) VALUES
('MOT001', 'Cibubur Junction', 2000, 2000),
('MOT002', 'Grand Indonesia', 3000, 2000),
('MOT003', 'FX Sudirman', 2000, 2000),
('MOT004', 'Botani Square', 2000, 2000),
('MOT005', 'Trans Studio Cibubur', 3000, 2000),
('MOT006', 'Summarecon Mall Bekasi', 3000, 2000),
('MOT007', 'Transmart Yasmin', 2000, 2000),
('MOT008', 'Cibinong City Mall', 2000, 2000),
('MOT009', 'Graha Cijantung', 3000, 2000),
('MOT010', 'Tamini Square', 2000, 2000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mobil`
--
ALTER TABLE `mobil`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `motor`
--
ALTER TABLE `motor`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
