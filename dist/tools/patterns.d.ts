import { z } from 'zod';
import { DesignCategory } from '../types/category.js';
/**
 * Schema for the get_design_patterns tool
 */
export declare const patternsToolSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodNativeEnum<typeof DesignCategory>>;
    type: z.ZodOptional<z.ZodEnum<["ui", "ux", "interaction", "layout", "navigation", "feedback", "form"]>>;
    platform: z.ZodOptional<z.ZodEnum<["web", "ios", "android", "desktop", "all"]>>;
    tag: z.ZodOptional<z.ZodString>;
    listAll: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    platform?: "web" | "ios" | "android" | "desktop" | "all" | undefined;
    category?: DesignCategory | undefined;
    type?: "ux" | "ui" | "interaction" | "layout" | "feedback" | "navigation" | "form" | undefined;
    id?: string | undefined;
    tag?: string | undefined;
    listAll?: boolean | undefined;
}, {
    platform?: "web" | "ios" | "android" | "desktop" | "all" | undefined;
    category?: DesignCategory | undefined;
    type?: "ux" | "ui" | "interaction" | "layout" | "feedback" | "navigation" | "form" | undefined;
    id?: string | undefined;
    tag?: string | undefined;
    listAll?: boolean | undefined;
}>;
export type PatternsToolInput = z.infer<typeof patternsToolSchema>;
/**
 * Execute the get_design_patterns tool
 */
export declare function executePatterns(input: PatternsToolInput): string;
//# sourceMappingURL=patterns.d.ts.map