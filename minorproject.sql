-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: minorproject
-- ------------------------------------------------------
-- Server version	8.0.30

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

--
-- Table structure for table `adminlogin`
--

DROP TABLE IF EXISTS `adminlogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adminlogin` (
  `serial` int NOT NULL AUTO_INCREMENT,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `adminname` varchar(128) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `picture` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`serial`,`email`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `mobile_UNIQUE` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminlogin`
--

LOCK TABLES `adminlogin` WRITE;
/*!40000 ALTER TABLE `adminlogin` DISABLE KEYS */;
INSERT INTO `adminlogin` VALUES (6,'bharat8717sharma@gmail.com','123','Bharat Sharma','7000192752',NULL),(7,'1@gmail.com','1','Vivek Sharma','1',NULL);
/*!40000 ALTER TABLE `adminlogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `brandid` int NOT NULL,
  `categoryid` varchar(45) NOT NULL,
  `brandname` varchar(45) DEFAULT NULL,
  `logo` text,
  PRIMARY KEY (`brandid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'1','Levis','Levis.png'),(2,'3','Syska','Syska.png'),(3,'2','Walmart','Walmart.png'),(4,'4','General','General.png'),(5,'1','Myntra',NULL),(6,'1','Uspa',NULL),(7,'1','Mufti',NULL),(8,'1','Raymond',NULL),(9,'1','Others',NULL),(10,'2','Cipla',NULL),(11,'2','Sun Pharma',NULL),(12,'2','Reliance',NULL),(13,'2','Netmeds',NULL),(14,'2','Tata - 1 Mg',NULL),(15,'3','Flipkart',NULL),(16,'3','Samsung',NULL),(17,'3','Apple',NULL),(18,'3','Havells',NULL),(19,'3','Lg',NULL),(20,'3','Mitsibushi',NULL),(21,'3','Others',NULL),(22,'4','Flipkart',NULL),(23,'4','Amazon',NULL),(24,'4','Jio Mart',NULL),(25,'4','Rapido',NULL),(26,'4','Hangoof',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryid` int NOT NULL,
  `categoryname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Fashion'),(2,'Medicine'),(3,'Electronics'),(4,'General'),(5,'Home Appliances'),(6,'Groceries'),(7,'Clothes'),(8,'Spices'),(9,'Daily Needs'),(10,'Others');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `subcategoryid` int DEFAULT NULL,
  `brandid` int DEFAULT NULL,
  `productname` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `offerprice` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `picture` text,
  `stock` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (118,3,29,20,'Air Conditioner',89999,74999,5,'AC',NULL,200,'Continue'),(119,3,26,18,'Lights',999,699,5,'Lighting',NULL,1000,'Continue'),(120,4,25,17,'Pencil',99,49,4,'Studies',NULL,10000,'Continue'),(126,3,28,15,'Dell 8760',99999,74999,5,'Laptop','5f191905-c6f1-4770-8c2c-e641fb89b48e.jpg',64,'Continue'),(127,3,28,17,'Macbook',199999,174999,5,'Laptop','8f7fa7a4-324d-4e49-b119-d41381ff37da.jpg',64,'Continue');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `subcategoryid` int NOT NULL,
  `categoryid` int DEFAULT NULL,
  `subcategoryname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`subcategoryid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,1,'Men'),(2,1,'Women'),(3,1,'Kids'),(4,1,'Footwear'),(5,2,'Tablets'),(6,2,'Capsules'),(7,3,'Speakers'),(8,3,'Television'),(9,3,'Speakers'),(10,3,'Smartphone'),(11,4,'Groceries'),(12,4,'Stationery'),(13,1,'Mens Premium'),(14,1,'Womens Premium'),(15,1,'Kids Premium'),(16,1,'Footwear Premium'),(17,2,'Injections'),(18,2,'Syringe'),(19,2,'Ns'),(20,2,'Rna'),(21,2,'Ayurvedic'),(22,2,'Homeopathy'),(23,3,'Led\'s'),(24,3,'Premium Lighting'),(25,3,'Projectors'),(26,3,'Home Decor Lighting'),(27,3,'Cctv System'),(28,3,'Laptop\'s'),(29,3,'Electronic Gadgets'),(30,3,'Electronic Toys'),(31,4,'Whole Spices'),(32,4,'Daily Needs'),(33,4,'Kitchen Supplement'),(34,4,'Fresh Vegetables'),(35,4,'Breakfast Items'),(36,4,'Raw Material');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-02  8:21:10
