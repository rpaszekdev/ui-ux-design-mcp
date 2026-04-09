import { DesignPattern } from '../../types/index.js';
import { navigationPatterns } from './navigation.js';
import { formPatterns } from './forms.js';
import { feedbackPatterns } from './feedback.js';
import { layoutPatterns } from './layout.js';
/**
 * All design patterns combined
 */
export declare const allPatterns: DesignPattern[];
/**
 * Get pattern by ID
 */
export declare function getPatternById(id: string): DesignPattern | undefined;
/**
 * Get patterns by category
 */
export declare function getPatternsByCategory(category: string): DesignPattern[];
/**
 * Get patterns by type
 */
export declare function getPatternsByType(type: string): DesignPattern[];
/**
 * Get patterns by platform
 */
export declare function getPatternsByPlatform(platform: string): DesignPattern[];
/**
 * Get patterns by tag
 */
export declare function getPatternsByTag(tag: string): DesignPattern[];
export { navigationPatterns, formPatterns, feedbackPatterns, layoutPatterns, };
//# sourceMappingURL=index.d.ts.map