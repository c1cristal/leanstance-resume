// Source dates use the "MM-DD-YYYY" format, or just "YYYY" when only the year is known.
const YEAR_ONLY = /^\d{4}$/;

export function hasMonth(value: string) {
  return !YEAR_ONLY.test(value);
}

export function parseDate(value: string) {
  if (!hasMonth(value)) return new Date(Number(value), 0, 1);
  const [month, day, year] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

// Empty for a year-only date.
export function formatMonth(value: string, months: string[]) {
  return hasMonth(value) ? months[parseDate(value).getMonth()] : "";
}

export function formatYear(value: string) {
  return String(parseDate(value).getFullYear());
}

// Equivalent of the original `localizedDate:'MMM yyyy'` pipe (`currently` when there is no date).
export function formatMonthYear(value: string | null, months: string[], currently: string) {
  if (!value) return currently;
  return hasMonth(value) ? `${formatMonth(value, months)} ${formatYear(value)}` : formatYear(value);
}

export function daysBetween(a: Date, b: Date) {
  return Math.round(Math.abs(a.getTime() - b.getTime()) / 864e5);
}
