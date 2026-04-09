import { uxPrinciples } from './ux.js';
import { gestaltPrinciples } from './gestalt.js';
import { uiPrinciples } from './ui.js';
import { accessibilityPrinciples } from './accessibility.js';
import { mobilePrinciples } from './mobile.js';
import { typographyPrinciples } from './typography.js';
/**
 * All design principles combined
 */
export const allPrinciples = [
    ...uxPrinciples,
    ...gestaltPrinciples,
    ...uiPrinciples,
    ...accessibilityPrinciples,
    ...mobilePrinciples,
    ...typographyPrinciples,
];
/**
 * Get principle by ID
 */
export function getPrincipleById(id) {
    return allPrinciples.find((p) => p.id === id);
}
/**
 * Get principles by category
 */
export function getPrinciplesByCategory(category) {
    return allPrinciples.filter((p) => p.category === category);
}
/**
 * Get principles by subcategory
 */
export function getPrinciplesBySubcategory(subcategory) {
    return allPrinciples.filter((p) => p.subcategory === subcategory);
}
/**
 * Get principles by tag
 */
export function getPrinciplesByTag(tag) {
    return allPrinciples.filter((p) => p.tags.includes(tag));
}
export { uxPrinciples, gestaltPrinciples, uiPrinciples, accessibilityPrinciples, mobilePrinciples, typographyPrinciples, };
//# sourceMappingURL=index.js.map