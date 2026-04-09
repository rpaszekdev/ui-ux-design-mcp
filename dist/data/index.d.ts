/**
 * Main data export file
 * Aggregates all design knowledge for the MCP server
 */
export * from './principles/index.js';
export * from './patterns/index.js';
export * from './tokens/index.js';
import { allPrinciples, getPrincipleById, getPrinciplesByCategory, getPrinciplesByTag } from './principles/index.js';
import { allPatterns, getPatternById, getPatternsByCategory, getPatternsByType, getPatternsByPlatform, getPatternsByTag } from './patterns/index.js';
import { allTokens, getTokenByName, getTokensByCategory } from './tokens/index.js';
import { CATEGORY_DEFINITIONS } from '../types/category.js';
/**
 * Summary statistics for the knowledge base
 */
export declare const knowledgeStats: {
    readonly principleCount: number;
    readonly patternCount: number;
    readonly tokenCount: number;
    readonly categoryCount: number;
    readonly totalItems: number;
};
/**
 * Get all searchable items as a unified list
 */
export declare function getAllSearchableItems(): ({
    type: "principle";
    id: string;
    name: string;
    category: import("../types/category.js").DesignCategory;
    summary: string;
    tags: string[];
    data: import("../types/principle.js").DesignPrinciple;
} | {
    type: "pattern";
    id: string;
    name: string;
    category: import("../types/category.js").DesignCategory;
    summary: string;
    tags: string[];
    data: import("../types/pattern.js").DesignPattern;
} | {
    type: "token";
    id: string;
    name: string;
    category: "typography" | "color" | "spacing" | "border-radius" | "shadow" | "breakpoint" | "z-index" | "animation";
    summary: string;
    tags: ("typography" | "color" | "spacing" | "border-radius" | "shadow" | "breakpoint" | "z-index" | "animation")[];
    data: import("../types/token.js").AnyDesignToken;
})[];
export { allPrinciples, allPatterns, allTokens, getPrincipleById, getPrinciplesByCategory, getPrinciplesByTag, getPatternById, getPatternsByCategory, getPatternsByType, getPatternsByPlatform, getPatternsByTag, getTokenByName, getTokensByCategory, CATEGORY_DEFINITIONS, };
//# sourceMappingURL=index.d.ts.map