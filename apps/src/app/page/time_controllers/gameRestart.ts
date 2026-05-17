import { SimulationTimeManager } from './timeManager';

export interface RestartOptions {
    timeManager: SimulationTimeManager | null;
    setIsPaused: (paused: boolean) => void;
    setSpeed: (speed: number) => void;
    reloadStats: () => Promise<void>;
    skipConfirm?: boolean;
}

/**
 * Handles resetting the game calendar and country statistics back to their initial values.
 */
export function handleGameRestart(options: RestartOptions): void {
    if (!options.skipConfirm) {
        const confirmRestart = window.confirm(
            "Apakah Anda yakin ingin mengatur ulang progres simulasi? Semua kemajuan waktu dan perubahan data akan dikembalikan ke awal."
        );
        if (!confirmRestart) return;
    }

    // 1. Reset Simulation Time Manager (Date, Pause, and Speed)
    if (options.timeManager) {
        options.timeManager.setPaused(true);
        options.timeManager.setSpeed(1);
        options.timeManager.resetDate();
    }
    options.setIsPaused(true);
    options.setSpeed(1);

    // 2. Re-fetch baseline default statistics from the profile backend API
    options.reloadStats()
        .then(() => {
            console.log("Game progress restarted successfully.");
        })
        .catch((err) => {
            console.error("Failed to reload country default stats on restart:", err);
        });
}
