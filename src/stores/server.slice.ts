import { StateCreator } from "zustand";

export interface IServer {
  name: string;
  thumbnail: string;
}

interface IServerState {
  currentServer: IServer | null;
  serverList: IServer[];
}

interface IServerAction {
  serverAction: {
    setServerList: (serverList: IServer[]) => void;
    setCurrentServer: (server: IServer) => void;
  }
}

export type ServerSlice = IServerState & IServerAction;

const initialState: IServerState = {
  currentServer: null,
  serverList: []
}

export const createServerSlice: StateCreator<ServerSlice, [], [], ServerSlice> = (set) => ({
  ...initialState,
  serverAction: {
    setServerList: (serverList) => set((state) => {
      state.serverList = serverList;

      return state;
    }),
    setCurrentServer: (currentServer) => set((state) => {
      state.currentServer = currentServer;

      return state;
    })
  }
});
