/**
 * Design knowledge categories aligned with industry standards
 * Based on common UI/UX library categorizations
 */
export declare enum DesignCategory {
    /** Foundational design concepts and theory */
    INTRODUCTORY = "introductory",
    /** User experience principles and research */
    USER_EXPERIENCE = "ux",
    /** Visual and interface design */
    USER_INTERFACE = "ui",
    /** Interaction patterns and behaviors */
    INTERACTION_DESIGN = "interaction",
    /** Mobile-specific design considerations */
    MOBILE_DESIGN = "mobile",
    /** Web-specific design patterns */
    WEB_DESIGN = "web",
    /** Wireframes, mockups, and prototyping */
    WIREFRAMES_PROTOTYPES = "prototyping",
    /** Design systems and style guides */
    STYLE_GUIDES = "style-guides",
    /** Typography principles and best practices */
    TYPOGRAPHY = "typography",
    /** Usability testing and research methods */
    USABILITY_TESTING = "usability",
    /** Conversion optimization and marketing */
    MARKETING_CONVERSION = "conversion",
    /** Team collaboration and design processes */
    COLLABORATION = "collaboration",
    /** Accessibility and inclusive design */
    ACCESSIBILITY = "accessibility"
}
export interface CategoryDefinition {
    id: DesignCategory;
    name: string;
    description: string;
    icon: string;
    subcategories: string[];
}
export declare const CATEGORY_DEFINITIONS: CategoryDefinition[];
//# sourceMappingURL=category.d.ts.map