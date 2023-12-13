import { create } from 'zustand';
import { ServerSlice, createServerSlice } from './server.slice';
import { immer } from 'zustand/middleware/immer';

export const useServerBoundStore = create<ServerSlice>()(immer((...a) => ({
  ...createServerSlice(...a),
})));
