import mysql from 'mysql2/promise';

let pool: mysql.Pool | null = null;

/**
 * Initializes and returns a MySQL connection pool.
 * If the database db_presiden_simulator or the game_saves table
 * doesn't exist, it will automatically create them.
 */
export async function getDbPool(): Promise<mysql.Pool> {
    if (pool) {
        return pool;
    }

    try {
        // Step 1: Establish temporary connection to server (without db parameter)
        // to check or create the database
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            port: 3306,
        });

        await connection.query('CREATE DATABASE IF NOT EXISTS db_presiden_simulator');
        await connection.end();

        // Step 2: Establish the actual pooled connection to the database
        pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'db_presiden_simulator',
            port: 3306,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });

        // Step 3: Ensure the game_saves table structure is ready
        await pool.query(`
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
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);

        console.log("Database initialized successfully!");
        return pool;
    } catch (error) {
        console.error("Database connection or initialization failed:", error);
        throw error;
    }
}
