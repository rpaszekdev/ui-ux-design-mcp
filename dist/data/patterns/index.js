import { navigationPatterns } from './navigation.js';
import { formPatterns } from './forms.js';
import { feedbackPatterns } from './feedback.js';
import { layoutPatterns } from './layout.js';
/**
 * All design patterns combined
 */
export const allPatterns = [
    ...navigationPatterns,
    ...formPatterns,
    ...feedbackPatterns,
    ...layoutPatterns,
];
/**
 * Get pattern by ID
 */
export function getPatternById(id) {
    return allPatterns.find((p) => p.id === id);
}
/**
 * Get patterns by category
 */
export function getPatternsByCategory(category) {
    return allPatterns.filter((p) => p.category === category);
}
/**
 * Get patterns by type
 */
export function getPatternsByType(type) {
    return allPatterns.filter((p) => p.type === type);
}
/**
 * Get patterns by platform
 */
export function getPatternsByPlatform(platform) {
    return allPatterns.filter((p) => p.platforms.includes(platform) || p.platforms.includes('all'));
}
/**
 * Get patterns by tag
 */
export function getPatternsByTag(tag) {
    return allPatterns.filter((p) => p.tags.includes(tag));
}
export { navigationPatterns, formPatterns, feedbackPatterns, layoutPatterns, };
//# sourceMappingURL=index.js.map