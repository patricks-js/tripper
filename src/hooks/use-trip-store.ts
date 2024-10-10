import type { DateRange } from "react-day-picker";
import { create } from "zustand";

type TripStore = {
  destination: string;
  dateRange: DateRange | undefined;
  invitees: string[];
  setDestination: (destination: string) => void;
  setDateRange: (date: DateRange | undefined) => void;
  addInvitee: (invitee: string) => void;
  removeInvitee: (invitee: string) => void;
};

export const useTripStore = create<TripStore>((set) => ({
  destination: "",
  dateRange: undefined,
  invitees: [],
  setDestination: (destination: string) => set({ destination }),
  setDateRange: (dateRange: DateRange | undefined) => set({ dateRange }),
  addInvitee: (invitee: string) =>
    set((state) => ({
      invitees: [...state.invitees, invitee],
    })),
  removeInvitee: (invitee: string) =>
    set((state) => ({
      invitees: state.invitees.filter((e) => e !== invitee),
    })),
}));
