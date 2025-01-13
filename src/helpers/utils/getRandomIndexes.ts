export const getRandomIndexes = (count: number, replaceCount: number): number[] => {
    const indexes = new Set<number>();

    while (indexes.size < replaceCount) {
        indexes.add(Math.floor(Math.random() * count));
    }

    return Array.from(indexes);
};
