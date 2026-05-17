export class SimulationTimeManager {
    private currentDate: Date;
    private isPaused: boolean = true;
    private speed: number = 1;
    private lastTickTime: number = 0;
    private animationFrameId: number | null = null;
    private onDateChangeCallback: (formattedDate: string) => void;

    // Mapping speed multipliers to millisecond intervals per day tick
    private speedIntervals: Record<number, number> = {
        1: 2000, // 1x speed: 1 day every 2 seconds
        2: 1000, // 2x speed: 1 day every 1 second
        5: 400,  // 5x speed: 1 day every 0.4 seconds
    };

    constructor(onDateChange: (formattedDate: string) => void) {
        this.currentDate = new Date(); // Start with real life date
        this.onDateChangeCallback = onDateChange;
        
        // Trigger initial callback to show today's date instantly
        this.triggerCallback();
    }

    // Format Date helper (DD-MM-YYYY)
    public getFormattedDate(): string {
        const day = String(this.currentDate.getDate()).padStart(2, '0');
        const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
        const year = this.currentDate.getFullYear();
        return `${day}-${month}-${year}`;
    }

    private triggerCallback(): void {
        this.onDateChangeCallback(this.getFormattedDate());
    }

    // Reset date to real-life date
    public resetDate(): void {
        this.currentDate = new Date();
        this.triggerCallback();
    }

    // Set play/pause state
    public setPaused(paused: boolean): void {
        this.isPaused = paused;
        if (!this.isPaused) {
            this.lastTickTime = performance.now();
            this.startLoop();
        } else {
            this.stopLoop();
        }
    }

    // Set speed multiplier
    public setSpeed(speed: number): void {
        if (speed in this.speedIntervals) {
            this.speed = speed;
        }
    }

    // The high-performance tick loop powered by requestAnimationFrame
    private startLoop(): void {
        if (this.animationFrameId !== null) return;

        const loop = (now: number) => {
            if (this.isPaused) {
                this.animationFrameId = null;
                return;
            }

            const interval = this.speedIntervals[this.speed] || 2000;
            const delta = now - this.lastTickTime;

            if (delta >= interval) {
                // Determine how many days to advance (handles cases where tab was backgrounded)
                const daysToAdvance = Math.floor(delta / interval);
                this.currentDate.setDate(this.currentDate.getDate() + daysToAdvance);
                
                this.lastTickTime = now - (delta % interval);
                this.triggerCallback();
            }

            this.animationFrameId = requestAnimationFrame(loop);
        };

        this.animationFrameId = requestAnimationFrame(loop);
    }

    private stopLoop(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    // Clean up animation frame references on destroy
    public destroy(): void {
        this.stopLoop();
    }
}
