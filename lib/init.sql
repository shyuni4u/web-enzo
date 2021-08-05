-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: enzo-mysql.cijb55tnauao.ap-northeast-2.rds.amazonaws.com    Database: LOSTARK_BIG5
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Current Database: `LOSTARK_BIG5`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `LOSTARK_BIG5` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `LOSTARK_BIG5`;

--
-- Table structure for table `TB_ML_SAMPLE`
--

DROP TABLE IF EXISTS `TB_ML_SAMPLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TB_ML_SAMPLE` (
  `sClass` varchar(64) NOT NULL COMMENT 'Selected class.',
  `sTalent` varchar(64) NOT NULL COMMENT 'Selected talent.',
  `sInput` varchar(16) NOT NULL,
  `sResult` varchar(8) NOT NULL,
  `dtInputTime` datetime NOT NULL COMMENT 'Time when data inputed.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `TB_RESULT`
--

DROP TABLE IF EXISTS `TB_RESULT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TB_RESULT` (
  `sClass` varchar(64) NOT NULL COMMENT 'Selected class.',
  `sTalent` varchar(64) NOT NULL COMMENT 'Selected talent.',
  `sInput` varchar(16) DEFAULT '',
  `nAgreeableness` tinyint NOT NULL COMMENT 'Agreeableness score.',
  `nConscientiousness` tinyint NOT NULL COMMENT 'Conscientiousness score.',
  `nExtraversion` tinyint NOT NULL COMMENT 'Extraversion score.',
  `nOpennessToExperience` tinyint NOT NULL COMMENT 'OpennessToExperience score.',
  `nNeuroticism` tinyint NOT NULL COMMENT 'Neuroticism score.',
  `dtInputTime` datetime NOT NULL COMMENT 'Time when data inputed.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`admin`@`%`*/ /*!50003 TRIGGER `tg_after_insert` AFTER INSERT ON `TB_RESULT` FOR EACH ROW BEGIN
		DECLARE _sResult VARCHAR(8);
		SET _sResult := CONCAT(new.nAgreeableness, new.nConscientiousness, new.nExtraversion, new.nOpennessToExperience, new.nNeuroticism);
		CALL prc_remake_sample(new.sClass, new.sTalent, new.sInput, _sResult );
	END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `VW_GROUP_RESULT`
--

DROP TABLE IF EXISTS `VW_GROUP_RESULT`;
/*!50001 DROP VIEW IF EXISTS `VW_GROUP_RESULT`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_GROUP_RESULT` AS SELECT 
 1 AS `sClass`,
 1 AS `sTalent`,
 1 AS `nAgreeableness`,
 1 AS `nConscientiousness`,
 1 AS `nExtraversion`,
 1 AS `nOpennessToExperience`,
 1 AS `nNeuroticism`,
 1 AS `nCount`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_RESULT`
--

DROP TABLE IF EXISTS `VW_RESULT`;
/*!50001 DROP VIEW IF EXISTS `VW_RESULT`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_RESULT` AS SELECT 
 1 AS `sClass`,
 1 AS `sTalent`,
 1 AS `nAgreeableness`,
 1 AS `nConscientiousness`,
 1 AS `nExtraversion`,
 1 AS `nOpennessToExperience`,
 1 AS `nNeuroticism`,
 1 AS `dtInputTime`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'LOSTARK_BIG5'
--

--
-- Dumping routines for database 'LOSTARK_BIG5'
--
/*!50003 DROP PROCEDURE IF EXISTS `prc_remake_sample` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `prc_remake_sample`(
	newsClass VARCHAR(64),
    newsTalent VARCHAR(64),
    newsInput VARCHAR(16),
    newsResult VARCHAR(8)
)
BEGIN
	DECLARE _SAMPLE_SIZE INT;
	DECLARE _EXCEPT_SIZE INT;

    DECLARE _sClass VARCHAR(64);
    DECLARE _sTalent VARCHAR(64);
    DECLARE _sInput VARCHAR(16);
    DECLARE _dtInputTime DATETIME;
    
    DECLARE _ROW_COUNT INT;
    
    SET _SAMPLE_SIZE := 199;
    
    select COUNT(*) into _ROW_COUNT from TB_ML_SAMPLE where sClass = newsClass and sTalent = newsTalent;
    
    if _ROW_COUNT > _SAMPLE_SIZE then
		SET _EXCEPT_SIZE := _ROW_COUNT - _SAMPLE_SIZE;
		select dtInputTime into _dtInputTime from TB_ML_SAMPLE where sClass = newsClass and sTalent = newsTalent order by dtInputTime limit _EXCEPT_SIZE, 1;
        
        delete from TB_ML_SAMPLE where sClass = newsClass and sTalent = newsTalent and dtInputTime < _dtInputTime;
    end if;
    
	insert into TB_ML_SAMPLE(sClass, sTalent, sInput, sResult, dtInputTime) values (newsClass, newsTalent, newsInput, newsResult, NOW());
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Current Database: `WOW_BIG5`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `WOW_BIG5` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `WOW_BIG5`;

--
-- Table structure for table `TB_ML_SAMPLE`
--

DROP TABLE IF EXISTS `TB_ML_SAMPLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TB_ML_SAMPLE` (
  `sClass` varchar(64) NOT NULL COMMENT 'Selected class.',
  `sTalent` varchar(64) NOT NULL COMMENT 'Selected talent.',
  `sInput` varchar(16) NOT NULL,
  `sResult` varchar(8) NOT NULL,
  `dtInputTime` datetime NOT NULL COMMENT 'Time when data inputed.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `TB_RESULT`
--

DROP TABLE IF EXISTS `TB_RESULT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TB_RESULT` (
  `sClass` varchar(64) NOT NULL COMMENT 'Selected class.',
  `sTalent` varchar(64) NOT NULL COMMENT 'Selected talent.',
  `sInput` varchar(16) DEFAULT '',
  `nAgreeableness` tinyint NOT NULL COMMENT 'Agreeableness score.',
  `nConscientiousness` tinyint NOT NULL COMMENT 'Conscientiousness score.',
  `nExtraversion` tinyint NOT NULL COMMENT 'Extraversion score.',
  `nOpennessToExperience` tinyint NOT NULL COMMENT 'OpennessToExperience score.',
  `nNeuroticism` tinyint NOT NULL COMMENT 'Neuroticism score.',
  `dtInputTime` datetime NOT NULL COMMENT 'Time when data inputed.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`admin`@`%`*/ /*!50003 TRIGGER `tg_after_insert` AFTER INSERT ON `TB_RESULT` FOR EACH ROW BEGIN
		DECLARE _sResult VARCHAR(8);
		SET _sResult := CONCAT(new.nAgreeableness, new.nConscientiousness, new.nExtraversion, new.nOpennessToExperience, new.nNeuroticism);
		CALL prc_remake_sample(new.sClass, new.sTalent, new.sInput, _sResult );
	END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `VW_GROUP_RESULT`
--

DROP TABLE IF EXISTS `VW_GROUP_RESULT`;
/*!50001 DROP VIEW IF EXISTS `VW_GROUP_RESULT`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_GROUP_RESULT` AS SELECT 
 1 AS `sClass`,
 1 AS `sTalent`,
 1 AS `nAgreeableness`,
 1 AS `nConscientiousness`,
 1 AS `nExtraversion`,
 1 AS `nOpennessToExperience`,
 1 AS `nNeuroticism`,
 1 AS `nCount`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_RESULT`
--

DROP TABLE IF EXISTS `VW_RESULT`;
/*!50001 DROP VIEW IF EXISTS `VW_RESULT`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_RESULT` AS SELECT 
 1 AS `sClass`,
 1 AS `sTalent`,
 1 AS `nAgreeableness`,
 1 AS `nConscientiousness`,
 1 AS `nExtraversion`,
 1 AS `nOpennessToExperience`,
 1 AS `nNeuroticism`,
 1 AS `dtInputTime`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'WOW_BIG5'
--

--
-- Dumping routines for database 'WOW_BIG5'
--
/*!50003 DROP PROCEDURE IF EXISTS `prc_remake_sample` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`admin`@`%` PROCEDURE `prc_remake_sample`(
	newsClass VARCHAR(64),
    newsTalent VARCHAR(64),
    newsInput VARCHAR(16),
    newsResult VARCHAR(8)
)
BEGIN
	DECLARE _SAMPLE_SIZE INT;
	DECLARE _EXCEPT_SIZE INT;

    DECLARE _sClass VARCHAR(64);
    DECLARE _sTalent VARCHAR(64);
    DECLARE _sInput VARCHAR(16);
    DECLARE _dtInputTime DATETIME;
    
    DECLARE _ROW_COUNT INT;
    
    SET _SAMPLE_SIZE := 149;
    
    select COUNT(*) into _ROW_COUNT from TB_ML_SAMPLE where sClass = newsClass and sTalent = newsTalent;
    
    if _ROW_COUNT > _SAMPLE_SIZE then
		SET _EXCEPT_SIZE := _ROW_COUNT - _SAMPLE_SIZE;
		select dtInputTime into _dtInputTime from TB_ML_SAMPLE where sClass = newsClass and sTalent = newsTalent order by dtInputTime limit _EXCEPT_SIZE, 1;
        
        delete from TB_ML_SAMPLE where sClass = newsClass and sTalent = newsTalent and dtInputTime < _dtInputTime;
    end if;
    
	insert into TB_ML_SAMPLE(sClass, sTalent, sInput, sResult, dtInputTime) values (newsClass, newsTalent, newsInput, newsResult, NOW());
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Current Database: `LOSTARK_BIG5`
--

USE `LOSTARK_BIG5`;

--
-- Final view structure for view `VW_GROUP_RESULT`
--

/*!50001 DROP VIEW IF EXISTS `VW_GROUP_RESULT`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_GROUP_RESULT` AS select `TB_RESULT`.`sClass` AS `sClass`,`TB_RESULT`.`sTalent` AS `sTalent`,`TB_RESULT`.`nAgreeableness` AS `nAgreeableness`,`TB_RESULT`.`nConscientiousness` AS `nConscientiousness`,`TB_RESULT`.`nExtraversion` AS `nExtraversion`,`TB_RESULT`.`nOpennessToExperience` AS `nOpennessToExperience`,`TB_RESULT`.`nNeuroticism` AS `nNeuroticism`,count(0) AS `nCount` from `TB_RESULT` group by `TB_RESULT`.`sClass`,`TB_RESULT`.`sTalent`,`TB_RESULT`.`nAgreeableness`,`TB_RESULT`.`nConscientiousness`,`TB_RESULT`.`nExtraversion`,`TB_RESULT`.`nOpennessToExperience`,`TB_RESULT`.`nNeuroticism` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_RESULT`
--

/*!50001 DROP VIEW IF EXISTS `VW_RESULT`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_RESULT` AS select `TB_RESULT`.`sClass` AS `sClass`,`TB_RESULT`.`sTalent` AS `sTalent`,`TB_RESULT`.`nAgreeableness` AS `nAgreeableness`,`TB_RESULT`.`nConscientiousness` AS `nConscientiousness`,`TB_RESULT`.`nExtraversion` AS `nExtraversion`,`TB_RESULT`.`nOpennessToExperience` AS `nOpennessToExperience`,`TB_RESULT`.`nNeuroticism` AS `nNeuroticism`,`TB_RESULT`.`dtInputTime` AS `dtInputTime` from `TB_RESULT` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Current Database: `WOW_BIG5`
--

USE `WOW_BIG5`;

--
-- Final view structure for view `VW_GROUP_RESULT`
--

/*!50001 DROP VIEW IF EXISTS `VW_GROUP_RESULT`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_GROUP_RESULT` AS select `TB_RESULT`.`sClass` AS `sClass`,`TB_RESULT`.`sTalent` AS `sTalent`,`TB_RESULT`.`nAgreeableness` AS `nAgreeableness`,`TB_RESULT`.`nConscientiousness` AS `nConscientiousness`,`TB_RESULT`.`nExtraversion` AS `nExtraversion`,`TB_RESULT`.`nOpennessToExperience` AS `nOpennessToExperience`,`TB_RESULT`.`nNeuroticism` AS `nNeuroticism`,count(0) AS `nCount` from `TB_RESULT` group by `TB_RESULT`.`sClass`,`TB_RESULT`.`sTalent`,`TB_RESULT`.`nAgreeableness`,`TB_RESULT`.`nConscientiousness`,`TB_RESULT`.`nExtraversion`,`TB_RESULT`.`nOpennessToExperience`,`TB_RESULT`.`nNeuroticism` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_RESULT`
--

/*!50001 DROP VIEW IF EXISTS `VW_RESULT`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`admin`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_RESULT` AS select `TB_RESULT`.`sClass` AS `sClass`,`TB_RESULT`.`sTalent` AS `sTalent`,`TB_RESULT`.`nAgreeableness` AS `nAgreeableness`,`TB_RESULT`.`nConscientiousness` AS `nConscientiousness`,`TB_RESULT`.`nExtraversion` AS `nExtraversion`,`TB_RESULT`.`nOpennessToExperience` AS `nOpennessToExperience`,`TB_RESULT`.`nNeuroticism` AS `nNeuroticism`,`TB_RESULT`.`dtInputTime` AS `dtInputTime` from `TB_RESULT` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-05 15:12:32
