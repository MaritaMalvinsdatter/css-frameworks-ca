/**
 * Save data to storage
 * @param {string} key – save on storage based on a key
 * @param {string} value – object data to store
 */
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Load data from storage
 * @param {string} key – load from storage based on a key
 * @returns {any} stored object data
 */
export function load(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value)
    } catch (error) {
        console.error("loading failed" + error);
    }
}

/**
 * Delete data from storage
 * @param {string} key – delete key
 */
export function remove(key) {
    localStorage.removeItem(key);
}