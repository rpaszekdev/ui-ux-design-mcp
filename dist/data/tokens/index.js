import { colorTokens } from './colors.js';
import { spacingTokens } from './spacing.js';
import { typographyTokens, borderRadiusTokens, shadowTokens, breakpointTokens, zIndexTokens, animationTokens, } from './typography.js';
/**
 * All design tokens combined
 */
export const allTokens = [
    ...colorTokens,
    ...spacingTokens,
    ...typographyTokens,
    ...borderRadiusTokens,
    ...shadowTokens,
    ...breakpointTokens,
    ...zIndexTokens,
    ...animationTokens,
];
/**
 * Get token by name
 */
export function getTokenByName(name) {
    return allTokens.find((t) => t.name === name);
}
/**
 * Get tokens by category
 */
export function getTokensByCategory(category) {
    return allTokens.filter((t) => t.category === category);
}
export { colorTokens, spacingTokens, typographyTokens, borderRadiusTokens, shadowTokens, breakpointTokens, zIndexTokens, animationTokens, };
//# sourceMappingURL=index.js.map