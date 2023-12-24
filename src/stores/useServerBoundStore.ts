import { create } from 'zustand';
import { ServerSlice, createServerSlice } from './server.slice';
import { immer } from 'zustand/middleware/immer';
import { ChannelSlice, createChannelSlice } from './channel.slice';

export const useServerBoundStore = create<ServerSlice & ChannelSlice>()(immer((...a) => ({
  ...createServerSlice(...a),
  ...createChannelSlice(...a),
})));
