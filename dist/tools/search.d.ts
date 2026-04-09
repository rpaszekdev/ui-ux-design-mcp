import { z } from 'zod';
/**
 * Schema for the search_design_knowledge tool
 */
export declare const searchToolSchema: z.ZodObject<{
    query: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["principle", "pattern", "token"]>>;
    category: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    query: string;
    limit: number;
    category?: string | undefined;
    type?: "principle" | "pattern" | "token" | undefined;
}, {
    query: string;
    category?: string | undefined;
    type?: "principle" | "pattern" | "token" | undefined;
    limit?: number | undefined;
}>;
export type SearchToolInput = z.infer<typeof searchToolSchema>;
/**
 * Execute the search_design_knowledge tool
 */
export declare function executeSearch(input: SearchToolInput): string;
//# sourceMappingURL=search.d.ts.map