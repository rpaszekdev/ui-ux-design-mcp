import { z } from 'zod';
/**
 * Schema for the get_design_tokens tool
 */
export declare const tokensToolSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodEnum<["color", "spacing", "typography", "border-radius", "shadow", "breakpoint", "z-index", "animation"]>>;
    listAll: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    category?: "typography" | "color" | "spacing" | "border-radius" | "shadow" | "breakpoint" | "z-index" | "animation" | undefined;
    listAll?: boolean | undefined;
}, {
    name?: string | undefined;
    category?: "typography" | "color" | "spacing" | "border-radius" | "shadow" | "breakpoint" | "z-index" | "animation" | undefined;
    listAll?: boolean | undefined;
}>;
export type TokensToolInput = z.infer<typeof tokensToolSchema>;
/**
 * Execute the get_design_tokens tool
 */
export declare function executeTokens(input: TokensToolInput): string;
//# sourceMappingURL=tokens.d.ts.map