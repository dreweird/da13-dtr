-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2024 at 04:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `Department` varchar(11) DEFAULT NULL,
  `Name` varchar(12) DEFAULT NULL,
  `No.` int(11) DEFAULT NULL,
  `Date_Time` varchar(22) DEFAULT NULL,
  `Status` varchar(8) DEFAULT NULL,
  `Location ID` int(11) DEFAULT NULL,
  `ID Number` varchar(10) DEFAULT NULL,
  `Workcode` int(11) DEFAULT NULL,
  `VerifyCode` varchar(4) DEFAULT NULL,
  `CardNo` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `Department`, `Name`, `No.`, `Date_Time`, `Status`, `Location ID`, `ID Number`, `Workcode`, `VerifyCode`, `CardNo`) VALUES
(1, 'OUR COMPANY', 'Andrew Aug', 1, '17/01/2024 6:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(2, 'OUR COMPANY', 'Andrew Aug', 1, '17/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(3, 'OUR COMPANY', 'Andrew Aug', 1, '17/01/2024 12:59:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(4, 'OUR COMPANY', 'Andrew Aug', 1, '17/01/2024 9:00:00 pm', 'Out', 102, '', 0, 'FACE', ''),
(5, 'OUR COMPANY', 'John Doe', 1, '01/01/2024 8:00:00 am', 'C/In', 102, '', 0, 'FACE', ''),
(6, 'OUR COMPANY', 'John Doe', 1, '01/01/2024 12:00:00 pm', 'Out Back', 102, '', 0, 'FACE', ''),
(7, 'OUR COMPANY', 'John Doe', 1, '01/01/2024 12:31:00 pm', 'C/In', 102, '', 0, 'FACE', ''),
(8, 'OUR COMPANY', 'John Doe', 1, '01/01/2024 5:00:00 pm', 'Out', 102, '', 0, 'FACE', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
