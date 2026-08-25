const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatMonthYear(date) {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

export function getPeriodLabel(start, end) {
  const startLabel = formatMonthYear(start);
  const endLabel = end ? formatMonthYear(end) : "Present";
  return `${startLabel} - ${endLabel}`;
}

// Returns something like "3 Years 3 Months" between two dates (end defaults to today)
export function getDurationLabel(start, end = new Date()) {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} Year${years !== 1 ? "s" : ""}`);
  if (remMonths > 0 || years === 0)
    parts.push(`${remMonths} Month${remMonths !== 1 ? "s" : ""}`);

  return parts.join(" ");
}
