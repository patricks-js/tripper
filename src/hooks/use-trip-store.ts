import type { DateRange } from "react-day-picker";
import { create } from "zustand";

type TripStore = {
  destination: string;
  setDestination: (destination: string) => void;
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
  inviteesEmails: string[];
  setInviteesEmails: (inviteesEmails: string[]) => void;
};

export const useTripStore = create<TripStore>()((set) => ({
  destination: "",
  setDestination: (destination) => set({ destination }),
  date: undefined,
  setDate: (date) => set({ date }),
  inviteesEmails: [],
  setInviteesEmails: (inviteesEmails) => set({ inviteesEmails }),
}));
