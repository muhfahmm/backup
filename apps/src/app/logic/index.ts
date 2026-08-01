/**
 * Logic Module
 * Central export point for all game logic including:
 * - Fisheries and maritime production
 * - Country geography validation
 * - Production calculations and accumulation
 */

// Re-export fisheries production logic
export * from './fisheries_production_logic';

// Re-export minerals / SDA availability logic
export * from './1_minerals_logic';

// Re-export production logic
export * from './production_logic';
