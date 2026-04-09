/**
 * Convert full principle to summary
 */
export function toPrincipleSummary(principle) {
    return {
        id: principle.id,
        name: principle.name,
        category: principle.category,
        subcategory: principle.subcategory,
        summary: principle.summary,
        tags: principle.tags,
    };
}
//# sourceMappingURL=principle.js.map