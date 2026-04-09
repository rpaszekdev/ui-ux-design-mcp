import { DesignPrinciple } from '../../types/index.js';
import { uxPrinciples } from './ux.js';
import { gestaltPrinciples } from './gestalt.js';
import { uiPrinciples } from './ui.js';
import { accessibilityPrinciples } from './accessibility.js';
import { mobilePrinciples } from './mobile.js';
import { typographyPrinciples } from './typography.js';
/**
 * All design principles combined
 */
export declare const allPrinciples: DesignPrinciple[];
/**
 * Get principle by ID
 */
export declare function getPrincipleById(id: string): DesignPrinciple | undefined;
/**
 * Get principles by category
 */
export declare function getPrinciplesByCategory(category: string): DesignPrinciple[];
/**
 * Get principles by subcategory
 */
export declare function getPrinciplesBySubcategory(subcategory: string): DesignPrinciple[];
/**
 * Get principles by tag
 */
export declare function getPrinciplesByTag(tag: string): DesignPrinciple[];
export { uxPrinciples, gestaltPrinciples, uiPrinciples, accessibilityPrinciples, mobilePrinciples, typographyPrinciples, };
//# sourceMappingURL=index.d.ts.map