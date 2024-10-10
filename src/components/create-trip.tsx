"use client";

import { useState } from "react";
import { AddInviteesForm } from "./add-invitees-form";
import { ConfirmTripForm } from "./confirm-trip-form";
import { SetDestinationAndDate } from "./set-destination-and-date";
import { Separator } from "./ui/separator";

export function CreateTrip() {
  const [isInviteeInputVisible, setIsInviteeInputVisible] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <SetDestinationAndDate
        changeDestinationAndDate={!isInviteeInputVisible}
        setChangeDestinationAndDate={setIsInviteeInputVisible}
      />
      {isInviteeInputVisible && (
        <div className="shadow-shape bg-card px-4 py-1.5 rounded-md flex items-center justify-between">
          <AddInviteesForm />
          <Separator orientation="vertical" className="h-7 mx-2" />
          <ConfirmTripForm />
        </div>
      )}
    </div>
  );
}
