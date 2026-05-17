-- SQL Script untuk Database Presiden Simulator
-- Gunakan file ini untuk inisialisasi database di XAMPP MySQL / phpMyAdmin

CREATE DATABASE IF NOT EXISTS db_presiden_simulator;
USE db_presiden_simulator;

CREATE TABLE IF NOT EXISTS game_saves (
    id INT AUTO_INCREMENT PRIMARY KEY,
    save_name VARCHAR(255) NOT NULL,
    country_name VARCHAR(100) NOT NULL,
    country_iso VARCHAR(10) NOT NULL,
    game_date VARCHAR(50) NOT NULL,
    capital VARCHAR(100) DEFAULT NULL,
    jumlah_penduduk BIGINT DEFAULT 0,
    anggaran BIGINT DEFAULT 0,
    ideology VARCHAR(100) DEFAULT NULL,
    religion VARCHAR(100) DEFAULT NULL,
    un_vote INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
