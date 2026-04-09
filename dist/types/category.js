/**
 * Design knowledge categories aligned with industry standards
 * Based on common UI/UX library categorizations
 */
export var DesignCategory;
(function (DesignCategory) {
    /** Foundational design concepts and theory */
    DesignCategory["INTRODUCTORY"] = "introductory";
    /** User experience principles and research */
    DesignCategory["USER_EXPERIENCE"] = "ux";
    /** Visual and interface design */
    DesignCategory["USER_INTERFACE"] = "ui";
    /** Interaction patterns and behaviors */
    DesignCategory["INTERACTION_DESIGN"] = "interaction";
    /** Mobile-specific design considerations */
    DesignCategory["MOBILE_DESIGN"] = "mobile";
    /** Web-specific design patterns */
    DesignCategory["WEB_DESIGN"] = "web";
    /** Wireframes, mockups, and prototyping */
    DesignCategory["WIREFRAMES_PROTOTYPES"] = "prototyping";
    /** Design systems and style guides */
    DesignCategory["STYLE_GUIDES"] = "style-guides";
    /** Typography principles and best practices */
    DesignCategory["TYPOGRAPHY"] = "typography";
    /** Usability testing and research methods */
    DesignCategory["USABILITY_TESTING"] = "usability";
    /** Conversion optimization and marketing */
    DesignCategory["MARKETING_CONVERSION"] = "conversion";
    /** Team collaboration and design processes */
    DesignCategory["COLLABORATION"] = "collaboration";
    /** Accessibility and inclusive design */
    DesignCategory["ACCESSIBILITY"] = "accessibility";
})(DesignCategory || (DesignCategory = {}));
export const CATEGORY_DEFINITIONS = [
    {
        id: DesignCategory.INTRODUCTORY,
        name: 'Introductory',
        description: 'Foundational design concepts, theory, and terminology',
        icon: '📚',
        subcategories: ['fundamentals', 'theory', 'terminology'],
    },
    {
        id: DesignCategory.USER_EXPERIENCE,
        name: 'User Experience',
        description: 'UX principles, research methods, and user-centered design',
        icon: '🎯',
        subcategories: ['heuristics', 'research', 'psychology', 'laws'],
    },
    {
        id: DesignCategory.USER_INTERFACE,
        name: 'User Interface',
        description: 'Visual design, layout, color, and component design',
        icon: '🎨',
        subcategories: ['visual', 'layout', 'color', 'components'],
    },
    {
        id: DesignCategory.INTERACTION_DESIGN,
        name: 'Interaction Design',
        description: 'Micro-interactions, animations, and behavior patterns',
        icon: '✨',
        subcategories: ['animations', 'micro-interactions', 'feedback', 'gestures'],
    },
    {
        id: DesignCategory.MOBILE_DESIGN,
        name: 'Mobile Design',
        description: 'Mobile-specific patterns, touch interactions, and responsive design',
        icon: '📱',
        subcategories: ['ios', 'android', 'responsive', 'touch'],
    },
    {
        id: DesignCategory.WEB_DESIGN,
        name: 'Web Design',
        description: 'Web-specific patterns, responsive layouts, and browser considerations',
        icon: '🌐',
        subcategories: ['responsive', 'performance', 'seo', 'browsers'],
    },
    {
        id: DesignCategory.WIREFRAMES_PROTOTYPES,
        name: 'Wireframes & Prototypes',
        description: 'Low and high fidelity design artifacts and prototyping methods',
        icon: '📐',
        subcategories: ['wireframes', 'mockups', 'prototypes', 'tools'],
    },
    {
        id: DesignCategory.STYLE_GUIDES,
        name: 'Style Guides',
        description: 'Design systems, component libraries, and documentation',
        icon: '📖',
        subcategories: ['design-systems', 'documentation', 'tokens', 'governance'],
    },
    {
        id: DesignCategory.TYPOGRAPHY,
        name: 'Typography',
        description: 'Type hierarchy, font selection, and readability',
        icon: '🔤',
        subcategories: ['hierarchy', 'pairing', 'scale', 'readability'],
    },
    {
        id: DesignCategory.USABILITY_TESTING,
        name: 'Usability Testing',
        description: 'Testing methods, metrics, and user research',
        icon: '🔬',
        subcategories: ['methods', 'metrics', 'analysis', 'recruitment'],
    },
    {
        id: DesignCategory.MARKETING_CONVERSION,
        name: 'Marketing & Conversion',
        description: 'Conversion optimization, landing pages, and growth design',
        icon: '📈',
        subcategories: ['conversion', 'landing-pages', 'ab-testing', 'growth'],
    },
    {
        id: DesignCategory.COLLABORATION,
        name: 'Collaboration',
        description: 'Design team workflows, handoff, and stakeholder communication',
        icon: '🤝',
        subcategories: ['handoff', 'feedback', 'presentations', 'workflows'],
    },
    {
        id: DesignCategory.ACCESSIBILITY,
        name: 'Accessibility',
        description: 'Inclusive design, WCAG compliance, and assistive technology',
        icon: '♿',
        subcategories: ['wcag', 'aria', 'keyboard', 'screen-readers'],
    },
];
//# sourceMappingURL=category.js.map