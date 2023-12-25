import { StateCreator } from "zustand";
import { IChannel, IChannelGroup } from "../api/types";
import { Socket } from "socket.io-client";
import { manager } from '../utils/socket';
import { ServerSlice } from './server.slice';

interface IChannelState {
  currentChannel: IChannel | null;
  currentChannelGroup: IChannelGroup | null;
  socket: Socket | null;
}

interface IChannelAction {
  channelAction: {
    setCurrentChannel: (channelGroup: IChannelGroup, channel: IChannel) => void;
  }
}

export type ChannelSlice = IChannelState & IChannelAction;

const initialState: IChannelState = {
  currentChannel: null,
  currentChannelGroup: null,
  socket: null
}

export const createChannelSlice: StateCreator<ChannelSlice & ServerSlice, [], [], ChannelSlice> = (set, get) => ({
  ...initialState,
  channelAction: {
    setCurrentChannel: (currentChannelGroup, currentChannel) => {
      const { currentServer } = get();

      const connectionData = {
        serverId: currentServer?.id,
        channelId: currentChannel.id,
        channelGroupId: currentChannelGroup.id,
      }

      set((state) => {
        state.currentChannel = currentChannel;
        state.currentChannelGroup = currentChannelGroup;

        if (currentServer) {
          state.socket = manager.socket('/', {
            auth: connectionData,
          });
        }

        return state;
      });
    }
  }
});
