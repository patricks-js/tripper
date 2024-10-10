"use client";

import { useTripStore } from "@/hooks/use-trip-store";
import { Separator } from "@radix-ui/react-separator";
import type { Dispatch, SetStateAction } from "react";
import { DateRangePicker } from "./date-range-picker";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  changeDestinationAndDate: boolean;
  setChangeDestinationAndDate: Dispatch<SetStateAction<boolean>>;
};

export function SetDestinationAndDate({
  changeDestinationAndDate,
  setChangeDestinationAndDate,
}: Props) {
  const { setDestination } = useTripStore();

  return (
    <div className="shadow-shape bg-card px-4 py-1.5 rounded-md flex items-center">
      <div className="h-10 flex items-center">
        <Icons.location className="size-4 text-muted-foreground" />
        <Input
          placeholder="Para onde você vai?"
          onChange={(e) => setDestination(e.target.value)}
          disabled={!changeDestinationAndDate}
          className="focus-visible:ring-0 border-none"
        />
      </div>
      <DateRangePicker disabled={!changeDestinationAndDate} />
      <Separator orientation="vertical" className="h-7 mx-2" />
      {changeDestinationAndDate ? (
        <Button
          size="sm"
          onClick={() => setChangeDestinationAndDate((prev) => !prev)}
          className="gap-1"
        >
          Continuar
          <Icons.arrowRight className="size-4" />
        </Button>
      ) : (
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setChangeDestinationAndDate((prev) => !prev)}
        >
          Ajustar local/data
          <Icons.settings className="size-4" />
        </Button>
      )}
    </div>
  );
}
