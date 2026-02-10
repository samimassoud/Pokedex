export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache: Map<string, CacheEntry<any>> = new Map();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;
    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add<T>(key: string, val: T) {
        this.#cache.set(key, val as CacheEntry<T>);
    }
    get<T>(key: string): T | undefined {
        return this.#cache.get(key)?.val;
    }

    #reap(): void {
        for (const [key, entry] of this.#cache.entries()) {
            if ((Date.now() - this.#interval) > entry.createdAt) {
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop(): void {
        setInterval(() => this.#reap(), this.#interval);
    }

    stopReapLoop(): void {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }

}