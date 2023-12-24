import { StateCreator } from "zustand";
import { IChannel } from "../api/types";

interface IChannelState {
  currentChannel: IChannel | null;
}

interface IChannelAction {
  channelAction: {
    setCurrentChannel: (channel: IChannel) => void;
  }
}

export type ChannelSlice = IChannelState & IChannelAction;

const initialState: IChannelState = {
  currentChannel: null,
}

export const createChannelSlice: StateCreator<ChannelSlice, [], [], ChannelSlice> = (set) => ({
  ...initialState,
  channelAction: {
    setCurrentChannel: (currentChannel) => set((state) => {
      state.currentChannel = currentChannel;

      return state;
    })
  }
});
