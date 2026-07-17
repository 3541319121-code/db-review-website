-- NCRE 三级数据库复习平台 — 数据库初始化脚本
-- MySQL 8.0+

CREATE DATABASE IF NOT EXISTS ncre
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE ncre;

-- 用户表
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 题库表
CREATE TABLE IF NOT EXISTS questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  chapter VARCHAR(100) DEFAULT NULL COMMENT '章节/分类',
  question TEXT NOT NULL,
  A VARCHAR(500) NOT NULL,
  B VARCHAR(500) NOT NULL,
  C VARCHAR(500) NOT NULL,
  D VARCHAR(500) NOT NULL,
  answer CHAR(1) NOT NULL COMMENT 'A/B/C/D',
  analysis TEXT DEFAULT NULL COMMENT '答案解析',
  difficulty TINYINT DEFAULT 1 COMMENT '1易 2中 3难',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 学习记录表
CREATE TABLE IF NOT EXISTS study_record (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  question_id INT NOT NULL,
  is_correct TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user (user_id),
  INDEX idx_question (question_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 错题表
CREATE TABLE IF NOT EXISTS wrong_questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  question_id INT NOT NULL,
  wrong_count INT DEFAULT 1,
  status VARCHAR(20) DEFAULT '未掌握' COMMENT '未掌握/已掌握',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uk_user_question (user_id, question_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 示例题目（可选）
INSERT INTO questions (chapter, question, A, B, C, D, answer, analysis) VALUES
('数据库基础', '数据库系统的核心是？', 'DBMS', '操作系统', '编译器', '浏览器', 'A', 'DBMS（数据库管理系统）是数据库系统的核心软件。'),
('SQL语言', 'SQL 中用于查询的关键字是？', 'SELECT', 'GET', 'FIND', 'OPEN', 'A', 'SELECT 用于从表中查询数据。'),
('规范化理论', '第三范式（3NF）主要消除？', '传递函数依赖', '多值依赖', '连接依赖', '部分函数依赖', 'A', '3NF 要求消除非主属性对码的传递函数依赖。');
