/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 80033
 Source Host           : localhost:3306
 Source Schema         : views

 Target Server Type    : MySQL
 Target Server Version : 80033
 File Encoding         : 65001

 Date: 21/05/2023 00:30:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for survery_basic_info
-- ----------------------------
DROP TABLE IF EXISTS `survery_basic_info`;
CREATE TABLE `survery_basic_info`  (
  `countyCount` int NULL DEFAULT NULL,
  `townCount` int NULL DEFAULT NULL,
  `villageCount` int NULL DEFAULT NULL,
  `userCount` int NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survery_basic_info
-- ----------------------------
INSERT INTO `survery_basic_info` VALUES (5, 49, 394, 5861);

-- ----------------------------
-- Table structure for survey_chart2
-- ----------------------------
DROP TABLE IF EXISTS `survey_chart2`;
CREATE TABLE `survey_chart2`  (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `propertion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survey_chart2
-- ----------------------------
INSERT INTO `survey_chart2` VALUES ('华为', '18');
INSERT INTO `survey_chart2` VALUES ('苹果', '17');
INSERT INTO `survey_chart2` VALUES ('小米', '17');
INSERT INTO `survey_chart2` VALUES ('oppo', '15');
INSERT INTO `survey_chart2` VALUES ('vivo', '12');
INSERT INTO `survey_chart2` VALUES ('三星', '3');
INSERT INTO `survey_chart2` VALUES ('荣耀', '13');
INSERT INTO `survey_chart2` VALUES ('中兴', '5');

-- ----------------------------
-- Table structure for survey_chart3
-- ----------------------------
DROP TABLE IF EXISTS `survey_chart3`;
CREATE TABLE `survey_chart3`  (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `proportion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survey_chart3
-- ----------------------------
INSERT INTO `survey_chart3` VALUES ('手机', '40');
INSERT INTO `survey_chart3` VALUES ('电脑', '18');
INSERT INTO `survey_chart3` VALUES ('平板', '16');
INSERT INTO `survey_chart3` VALUES ('耳机', '6');
INSERT INTO `survey_chart3` VALUES ('路由器', '10');
INSERT INTO `survey_chart3` VALUES ('游戏机', '8');
INSERT INTO `survey_chart3` VALUES ('智能手表', '12');

-- ----------------------------
-- Table structure for survey_chart4
-- ----------------------------
DROP TABLE IF EXISTS `survey_chart4`;
CREATE TABLE `survey_chart4`  (
  `Acceptanc_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `queue_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Order_volume` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Passenger_flow` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survey_chart4
-- ----------------------------
INSERT INTO `survey_chart4` VALUES ('7.35', '2.00', '254', '190', '12月\\01号');
INSERT INTO `survey_chart4` VALUES ('7.31', '1.50', '198', '100', '12月\\02号');
INSERT INTO `survey_chart4` VALUES ('7.45', '2.01', '178', '50', '12月\\04号');
INSERT INTO `survey_chart4` VALUES ('7.01', '1.39', '163', '20', '12月\\05号');
INSERT INTO `survey_chart4` VALUES ('6.46', '2.09', '284', '120', '12月\\06号');
INSERT INTO `survey_chart4` VALUES ('8.01', '5.99', '273', '180', '12月\\07号');
INSERT INTO `survey_chart4` VALUES ('6.18', '3.02', '263', '240', '12月\\08号');
INSERT INTO `survey_chart4` VALUES ('5.23', '2.51', '251', '269', '12月\\09号');
INSERT INTO `survey_chart4` VALUES ('7.08', '4.61', '231', '241', '12月\\10号');
INSERT INTO `survey_chart4` VALUES ('3.33', '2.44', '201', '221', '12月\\11号');
INSERT INTO `survey_chart4` VALUES ('4.00', '1.51', '190', '102', '12月\\12号');
INSERT INTO `survey_chart4` VALUES ('6.00', '3.88', '180', '205', '12月\\13号');
INSERT INTO `survey_chart4` VALUES ('8.00', '7.67', '170', '90', '12月\\14号');
INSERT INTO `survey_chart4` VALUES ('6.00', '5.25', '150', '77', '12月\\15号');
INSERT INTO `survey_chart4` VALUES ('7.00', '2.25', '201', '55', '12月\\16号');
INSERT INTO `survey_chart4` VALUES ('7.00', '1.25', '209', '34', '12月\\17号');
INSERT INTO `survey_chart4` VALUES ('6.00', '2.25', '238', '234', '12月\\18号');
INSERT INTO `survey_chart4` VALUES ('02.00', '6.25', '222', '123', '12月\\19号');
INSERT INTO `survey_chart4` VALUES ('0.00', '3.25', '219', '12', '12月\\20号');
INSERT INTO `survey_chart4` VALUES ('1.00', '5.25', '189', '234', '12月\\21号');
INSERT INTO `survey_chart4` VALUES ('5.00', '0.25', '178', '87', '12月\\22号');
INSERT INTO `survey_chart4` VALUES ('3.00', '3.25', '162', '34', '12月\\23号');
INSERT INTO `survey_chart4` VALUES ('4.00', '2.25', '193', '131', '12月\\24号');
INSERT INTO `survey_chart4` VALUES ('5.00', '4.25', '231', '163', '12月\\25号');
INSERT INTO `survey_chart4` VALUES ('6.00', '1.25', '221', '167', '12月\\26号');
INSERT INTO `survey_chart4` VALUES ('6.00', '1.25', '219', '245', '12月\\27号');
INSERT INTO `survey_chart4` VALUES ('8.00', '2.25', '245', '225', '12月\\28号');
INSERT INTO `survey_chart4` VALUES ('7.00', '3.25', '248', '164', '12月\\29号');
INSERT INTO `survey_chart4` VALUES ('1.00', '0.25', '265', '80', '12月\\30号');
INSERT INTO `survey_chart4` VALUES ('7.75', '2.98', '256', '20', '12月\\03号');

-- ----------------------------
-- Table structure for survey_chart5
-- ----------------------------
DROP TABLE IF EXISTS `survey_chart5`;
CREATE TABLE `survey_chart5`  (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survey_chart5
-- ----------------------------
INSERT INTO `survey_chart5` VALUES ('顺丰', '614');
INSERT INTO `survey_chart5` VALUES ('京东', '763');
INSERT INTO `survey_chart5` VALUES (' 圆通', '310');
INSERT INTO `survey_chart5` VALUES (' 中通', '270');
INSERT INTO `survey_chart5` VALUES (' 邮政', '998');
INSERT INTO `survey_chart5` VALUES (' 极兔', '297');
INSERT INTO `survey_chart5` VALUES ('韵达', '195');

-- ----------------------------
-- Table structure for survey_diqu
-- ----------------------------
DROP TABLE IF EXISTS `survey_diqu`;
CREATE TABLE `survey_diqu`  (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survey_diqu
-- ----------------------------
INSERT INTO `survey_diqu` VALUES ('济南市', '685');
INSERT INTO `survey_diqu` VALUES ('菏泽市', ' 360');
INSERT INTO `survey_diqu` VALUES ('德州市', ' 342');
INSERT INTO `survey_diqu` VALUES ('聊城市', ' 280');
INSERT INTO `survey_diqu` VALUES (' 泰安市', '231');
INSERT INTO `survey_diqu` VALUES ('临淄市', '477');
INSERT INTO `survey_diqu` VALUES ('淄博市', '421');
INSERT INTO `survey_diqu` VALUES ('枣庄市', '214');
INSERT INTO `survey_diqu` VALUES ('滨州市', '270');
INSERT INTO `survey_diqu` VALUES ('潍坊市', '330');
INSERT INTO `survey_diqu` VALUES ('东营市', '398');
INSERT INTO `survey_diqu` VALUES ('青岛市', '719');
INSERT INTO `survey_diqu` VALUES ('烟台市', '676');
INSERT INTO `survey_diqu` VALUES ('威海市', '633');
INSERT INTO `survey_diqu` VALUES ('日照市', '178');
INSERT INTO `survey_diqu` VALUES ('济宁市', '509');
INSERT INTO `survey_diqu` VALUES ('莱芜市', '547');

-- ----------------------------
-- Table structure for survey_shop_basic
-- ----------------------------
DROP TABLE IF EXISTS `survey_shop_basic`;
CREATE TABLE `survey_shop_basic`  (
  `num1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `num2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `num3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `num4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survey_shop_basic
-- ----------------------------
INSERT INTO `survey_shop_basic` VALUES ('4800', '2731', '6885', '27310');

-- ----------------------------
-- Table structure for survey_shop_info
-- ----------------------------
DROP TABLE IF EXISTS `survey_shop_info`;
CREATE TABLE `survey_shop_info`  (
  `shop_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sales_amount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `area` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survey_shop_info
-- ----------------------------
INSERT INTO `survey_shop_info` VALUES ('华为旗舰店', '7420', '电子产品', '全国', '2022-4-11');
INSERT INTO `survey_shop_info` VALUES ('苹果旗舰店', '6197', '电子产品', '全国', '2022-4-11');
INSERT INTO `survey_shop_info` VALUES ('小米旗舰店', '4880', '电子产品', '全国', '2022-4-11');
INSERT INTO `survey_shop_info` VALUES ('vivo旗舰店', '3500', '电子产品', '全国', '2022-4-11');
INSERT INTO `survey_shop_info` VALUES ('OPPO旗舰店', '3000', '电子产品', '全国', '2022-4-11');
INSERT INTO `survey_shop_info` VALUES ('荣耀旗舰店', '2980', '电子产品', '全国', '2022-4-11');

-- ----------------------------
-- Table structure for survey_shuiipin
-- ----------------------------
DROP TABLE IF EXISTS `survey_shuiipin`;
CREATE TABLE `survey_shuiipin`  (
  `old` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of survey_shuiipin
-- ----------------------------
INSERT INTO `survey_shuiipin` VALUES ('18-27', '30');
INSERT INTO `survey_shuiipin` VALUES ('27-35', '45');
INSERT INTO `survey_shuiipin` VALUES ('35-45', '25');
INSERT INTO `survey_shuiipin` VALUES ('45-60', '15');

SET FOREIGN_KEY_CHECKS = 1;
