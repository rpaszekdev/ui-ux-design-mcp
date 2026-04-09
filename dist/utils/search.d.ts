import { SearchResult } from '../types/index.js';
/**
 * Search design knowledge using fuzzy matching
 */
export declare function searchKnowledge(query: string, options?: {
    type?: 'principle' | 'pattern' | 'token';
    category?: string;
    limit?: number;
}): SearchResult[];
/**
 * Search only principles
 */
export declare function searchPrinciples(query: string, limit?: number): SearchResult[];
/**
 * Search only patterns
 */
export declare function searchPatterns(query: string, limit?: number): SearchResult[];
/**
 * Search only tokens
 */
export declare function searchTokens(query: string, limit?: number): SearchResult[];
/**
 * Reset the Fuse instance (useful for testing)
 */
export declare function resetSearchIndex(): void;
//# sourceMappingURL=search.d.ts.map