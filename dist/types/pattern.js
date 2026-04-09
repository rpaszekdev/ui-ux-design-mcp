/**
 * Convert full pattern to summary
 */
export function toPatternSummary(pattern) {
    return {
        id: pattern.id,
        name: pattern.name,
        category: pattern.category,
        type: pattern.type,
        platforms: pattern.platforms,
        problem: pattern.problem,
        tags: pattern.tags,
    };
}
//# sourceMappingURL=pattern.js.map