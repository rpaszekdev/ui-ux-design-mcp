import Fuse from 'fuse.js';
import { getAllSearchableItems } from '../data/index.js';
// Create Fuse instance lazily
let fuseInstance = null;
function getFuseInstance() {
    if (!fuseInstance) {
        const items = getAllSearchableItems();
        fuseInstance = new Fuse(items, {
            keys: [
                { name: 'name', weight: 0.4 },
                { name: 'summary', weight: 0.25 },
                { name: 'tags', weight: 0.2 },
                { name: 'category', weight: 0.15 },
            ],
            threshold: 0.4, // Lower = stricter matching
            includeScore: true,
            minMatchCharLength: 2,
            ignoreLocation: true,
        });
    }
    return fuseInstance;
}
/**
 * Search design knowledge using fuzzy matching
 */
export function searchKnowledge(query, options) {
    const fuse = getFuseInstance();
    let results = fuse.search(query);
    // Filter by type if specified
    if (options?.type) {
        results = results.filter((r) => r.item.type === options.type);
    }
    // Filter by category if specified
    if (options?.category) {
        results = results.filter((r) => r.item.category.toLowerCase() === options.category?.toLowerCase());
    }
    // Limit results
    const limit = options?.limit ?? 10;
    results = results.slice(0, limit);
    // Transform to SearchResult format
    return results.map((r) => ({
        type: r.item.type,
        id: r.item.id,
        name: r.item.name,
        category: r.item.category,
        summary: r.item.summary,
        score: r.score ?? 0,
        tags: r.item.tags,
    }));
}
/**
 * Search only principles
 */
export function searchPrinciples(query, limit = 10) {
    return searchKnowledge(query, { type: 'principle', limit });
}
/**
 * Search only patterns
 */
export function searchPatterns(query, limit = 10) {
    return searchKnowledge(query, { type: 'pattern', limit });
}
/**
 * Search only tokens
 */
export function searchTokens(query, limit = 10) {
    return searchKnowledge(query, { type: 'token', limit });
}
/**
 * Reset the Fuse instance (useful for testing)
 */
export function resetSearchIndex() {
    fuseInstance = null;
}
//# sourceMappingURL=search.js.map