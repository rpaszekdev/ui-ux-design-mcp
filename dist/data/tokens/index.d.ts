import { AnyDesignToken, TokenCategory } from '../../types/index.js';
import { colorTokens } from './colors.js';
import { spacingTokens } from './spacing.js';
import { typographyTokens, borderRadiusTokens, shadowTokens, breakpointTokens, zIndexTokens, animationTokens } from './typography.js';
/**
 * All design tokens combined
 */
export declare const allTokens: AnyDesignToken[];
/**
 * Get token by name
 */
export declare function getTokenByName(name: string): AnyDesignToken | undefined;
/**
 * Get tokens by category
 */
export declare function getTokensByCategory(category: TokenCategory): AnyDesignToken[];
export { colorTokens, spacingTokens, typographyTokens, borderRadiusTokens, shadowTokens, breakpointTokens, zIndexTokens, animationTokens, };
//# sourceMappingURL=index.d.ts.map