import { formatDateRange as formatRange } from "little-date";
import type { DateRange } from "react-day-picker";

export function formatDateRange(date: DateRange) {
  if (!date.from || !date.to) {
    return;
  }

  return formatRange(date.from, date.to, {
    locale: "de-AT",
    includeTime: false,
  });
}
