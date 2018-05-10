const ranges = [
  { divider: 1e18, suffix: 'E' },
  { divider: 1e15, suffix: 'P' },
  { divider: 1e12, suffix: 'T' },
  { divider: 1e9, suffix: 'G' },
  { divider: 1e6, suffix: 'M' },
  { divider: 1e3, suffix: 'k' }
];

export function formatNumberMetricPrefix (originalNumber: number): string {
  for (const range of ranges) {
    if (originalNumber >= range.divider) {
      return (originalNumber / range.divider).toFixed(2)
        .toString() + range.suffix;
    }
  }
  
  return originalNumber.toString();
}