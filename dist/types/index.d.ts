export { DesignCategory, CATEGORY_DEFINITIONS } from './category.js';
export type { CategoryDefinition } from './category.js';
export type { DesignPrinciple, PrincipleSummary } from './principle.js';
export { toPrincipleSummary } from './principle.js';
export type { DesignPattern, PatternSummary, PatternType, Platform } from './pattern.js';
export { toPatternSummary } from './pattern.js';
export type { DesignGuideline, GuidelineDomain, ChecklistItem, DesignChecklist } from './guideline.js';
export type { TokenCategory, DesignToken, ColorToken, SpacingToken, TypographyToken, BorderRadiusToken, ShadowToken, BreakpointToken, ZIndexToken, AnimationToken, AnyDesignToken, } from './token.js';
/**
 * Unified search result type
 */
export interface SearchResult {
    type: 'principle' | 'pattern' | 'guideline' | 'token' | 'checklist';
    id: string;
    name: string;
    category: string;
    summary: string;
    score: number;
    tags: string[];
}
/**
 * Validation issue found in a design
 */
export interface ValidationIssue {
    principleId: string;
    principleName: string;
    severity: 'critical' | 'warning' | 'suggestion';
    issue: string;
    recommendation: string;
    context?: string;
}
/**
 * Design improvement suggestion
 */
export interface ImprovementSuggestion {
    area: string;
    currentState: string;
    suggestion: string;
    rationale: string;
    relatedPrinciples: string[];
    priority: 'high' | 'medium' | 'low';
}
//# sourceMappingURL=index.d.ts.map