"use client";

import { useTripStore } from "@/hooks/use-trip-store";
import { cn } from "@/lib/cn";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Props = {
  disabled?: boolean;
};

export function DateRangePicker({ disabled }: Props) {
  const { dateRange, setDateRange } = useTripStore();

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="ghost"
            size="sm"
            disabled={disabled}
            className={cn(!dateRange && "text-muted-foreground")}
          >
            <Icons.calendar className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y", { locale: ptBR })} -{" "}
                  {format(dateRange.to, "LLL dd, y", { locale: ptBR })}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y", { locale: ptBR })
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
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
