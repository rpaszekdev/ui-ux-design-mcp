import { z } from 'zod';
import { DesignCategory } from '../types/category.js';
/**
 * Schema for the get_design_principles tool
 */
export declare const principlesToolSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodNativeEnum<typeof DesignCategory>>;
    subcategory: z.ZodOptional<z.ZodString>;
    tag: z.ZodOptional<z.ZodString>;
    listAll: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    category?: DesignCategory | undefined;
    id?: string | undefined;
    subcategory?: string | undefined;
    tag?: string | undefined;
    listAll?: boolean | undefined;
}, {
    category?: DesignCategory | undefined;
    id?: string | undefined;
    subcategory?: string | undefined;
    tag?: string | undefined;
    listAll?: boolean | undefined;
}>;
export type PrinciplesToolInput = z.infer<typeof principlesToolSchema>;
/**
 * Execute the get_design_principles tool
 */
export declare function executePrinciples(input: PrinciplesToolInput): string;
//# sourceMappingURL=principles.d.ts.map