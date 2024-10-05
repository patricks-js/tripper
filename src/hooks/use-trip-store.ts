import type { DateRange } from "react-day-picker";
import { create } from "zustand";

type TripStore = {
  destination: string;
  dateRange: DateRange;
  invitees: string[];
  setDestination: (destination: string) => void;
  setDate: (date: DateRange) => void;
  addInvitee: (invitee: string) => void;
  removeInvitee: (invitee: string) => void;
};

export const useTripStore = create<TripStore>((set) => ({
  destination: "",
  dateRange: { from: undefined, to: undefined },
  invitees: [],
  setDestination: (destination: string) => set({ destination }),
  setDate: (dateRange: DateRange) => set({ dateRange }),
  addInvitee: (invitee: string) =>
    set((state) => ({
      invitees: [...state.invitees, invitee],
    })),
  removeInvitee: (invitee: string) =>
    set((state) => ({
      invitees: state.invitees.filter((e) => e !== invitee),
    })),
}));
