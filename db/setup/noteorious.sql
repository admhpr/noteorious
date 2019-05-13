-- Host: mariadb:3306
-- Generation Time: May 13, 2019 at 10:07 PM
-- Server version: 10.3.9-MariaDB-1:10.3.9+maria~bionic
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET
  AUTOCOMMIT = 0;
START TRANSACTION;
SET
  time_zone = "+00:00";
  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;
--
  -- Database: `noteorious`
  --
  -- --------------------------------------------------------
  --
  -- Table structure for table `board`
  --
  CREATE TABLE `board` (
    `id` bigint(20) NOT NULL,
    `title` varchar(255) DEFAULT NULL,
    `description` text DEFAULT NULL,
    `isActive` tinyint(1) NOT NULL DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
  ) ENGINE = InnoDB DEFAULT CHARSET = latin1;
-- --------------------------------------------------------
  --
  -- Table structure for table `note`
  --
  CREATE TABLE `note` (
    `id` bigint(20) NOT NULL,
    `board_id` bigint(20) NOT NULL,
    `title` varchar(255) DEFAULT NULL,
    `description` text DEFAULT NULL,
    `isActive` tinyint(1) NOT NULL DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
  ) ENGINE = InnoDB DEFAULT CHARSET = latin1 ROW_FORMAT = COMPACT;
--
  -- Indexes for dumped tables
  --
  --
  -- Indexes for table `board`
  --
ALTER TABLE
  `board`
ADD
  PRIMARY KEY (`id`);
--
  -- Indexes for table `note`
  --
ALTER TABLE
  `note`
ADD
  PRIMARY KEY (`id`);
--
  -- AUTO_INCREMENT for dumped tables
  --
  --
  -- AUTO_INCREMENT for table `board`
  --
ALTER TABLE
  `board`
MODIFY
  `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
  -- AUTO_INCREMENT for table `note`
  --
ALTER TABLE
  `note`
MODIFY
  `id` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;
  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;