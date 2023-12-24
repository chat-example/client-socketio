import { StateCreator } from "zustand";
import { IServer } from "../api/types";

interface IServerState {
  currentServer: IServer | null;
}

interface IServerAction {
  serverAction: {
    setCurrentServer: (server: IServer) => void;
  }
}

export type ServerSlice = IServerState & IServerAction;

const initialState: IServerState = {
  currentServer: null,
}

export const createServerSlice: StateCreator<ServerSlice, [], [], ServerSlice> = (set) => ({
  ...initialState,
  serverAction: {
    setCurrentServer: (currentServer) => set((state) => {
      state.currentServer = currentServer;

      return state;
    })
  }
});
