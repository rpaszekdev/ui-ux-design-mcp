import { z } from 'zod';
/**
 * Schema for the get_accessibility_checklist tool
 */
export declare const accessibilityToolSchema: z.ZodObject<{
    component: z.ZodEnum<["button", "form", "modal", "navigation", "images", "color", "keyboard", "general"]>;
    wcagLevel: z.ZodDefault<z.ZodEnum<["A", "AA", "AAA"]>>;
}, "strip", z.ZodTypeAny, {
    component: "color" | "keyboard" | "navigation" | "form" | "general" | "modal" | "button" | "images";
    wcagLevel: "A" | "AA" | "AAA";
}, {
    component: "color" | "keyboard" | "navigation" | "form" | "general" | "modal" | "button" | "images";
    wcagLevel?: "A" | "AA" | "AAA" | undefined;
}>;
export type AccessibilityToolInput = z.infer<typeof accessibilityToolSchema>;
/**
 * Execute the get_accessibility_checklist tool
 */
export declare function executeAccessibility(input: AccessibilityToolInput): string;
//# sourceMappingURL=accessibility.d.ts.map