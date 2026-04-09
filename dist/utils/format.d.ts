import { DesignPrinciple, DesignPattern } from '../types/index.js';
/**
 * Format a principle for output
 */
export declare function formatPrinciple(principle: DesignPrinciple): string;
/**
 * Format a pattern for output
 */
export declare function formatPattern(pattern: DesignPattern): string;
/**
 * Format a list of items as a summary table
 */
export declare function formatSummaryList(items: {
    id: string;
    name: string;
    category: string;
    summary: string;
}[]): string;
/**
 * Truncate text to a maximum length
 */
export declare function truncate(text: string, maxLength: number): string;
//# sourceMappingURL=format.d.ts.map