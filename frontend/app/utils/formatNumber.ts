export function formatNumber(num: number): string {
    if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + "M"; // Convert thousands to millions
    }
    else {
        return (num.toFixed(2)) + "K";
    }
}