"use client";

import { useState } from "react";
import { Fieldset } from "./fieldset";
import { Icons } from "./icons";
import { TripDatePicker } from "./trip-date-picker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function CreateTripForm() {
  const [isGuestInputVisible, setIsGuestInputVisible] = useState(false);

  function handleGuestInputVisibility() {
    setIsGuestInputVisible((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-4">
      <Fieldset>
        <div className="flex flex-1 items-center gap-2 py-2">
          <Icons.location className="size-4 text-muted-foreground" />
          <Input
            disabled={isGuestInputVisible}
            placeholder="Para onde deseja ir?"
            className="pl-0 focus-visible:ring-0 border-none shadow-none"
          />
        </div>
        <TripDatePicker disabled={isGuestInputVisible} />
        {!isGuestInputVisible ? (
          <Button className="gap-2" onClick={handleGuestInputVisibility}>
            Continuar
            <Icons.arrowRight className="size-4" />
          </Button>
        ) : (
          <Button
            className="gap-2"
            variant="secondary"
            onClick={handleGuestInputVisibility}
          >
            Alterar local/data
            <Icons.settings className="size-4" />
          </Button>
        )}
      </Fieldset>
    </div>
  );
}
