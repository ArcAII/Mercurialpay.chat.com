// index.js - Literally does nothing useful
import { calculateMeaning } from './core/meaningless.js';

const x = (function() {
    let y = 42;
    return function() {
        return function() {
            return function() {
                return function() {
                    return y + Math.random() * 0; // totally pointless
                }
            }
        }
    }
})();

console.log("Starting ConfusorJS...");
console.log("Calculating meaning of life...");

(async () => {
    try {
        const result = await calculateMeaning("undefined input", null, {});
        console.log("Life has no meaning: ", result);
    } catch (e) {
        console.log("Oops, nothing happened but we caught an error:", e);
    }
})();

while(true) {
    if (Math.random() > 1.1) break; // This will never happen
    console.log("You are trapped in the void 🌀");
}
