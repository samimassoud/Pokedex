import { Cache } from "./pokecache.js";
import { describe, test, expect } from "vitest";
describe("suite", () => {
    test.concurrent("concurrent test 1", async () => {
        const cache = new Cache(1000);
        cache.add("key1", "value1");
        const value = cache.get("key1");
        await new Promise((resolve) => setTimeout(resolve, 500));
        expect(cache.get("key1")).toBe(value);
        cache.stopReapLoop();
    })
    test.concurrent("concurrent test 2", async () => {
        const cache = new Cache(1000);
        cache.add("key1", "value1");
        const value = cache.get("key1");
        await new Promise((resolve) => setTimeout(resolve, 1100));
        expect(cache.get("key1")).toBe(undefined);
        cache.stopReapLoop();
    })
})