"use client";

import { useTripStore } from "@/hooks/use-trip-store";
import { formatDateRange } from "@/lib/format-date-range";
import { format } from "date-fns";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Props = {
  disabled?: boolean;
};

export function TripDatePicker({ disabled }: Props) {
  const { date, setDate } = useTripStore();

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="text-muted-foreground gap-2"
            variant="ghost"
            disabled={disabled}
          >
            <Icons.calendar className="size-4 text-muted-foreground" />
            {date?.from ? (
              date.to ? (
                <>{formatDateRange(date)}</>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Quando?</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
