export interface IServer {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  banner: string |null;
  createdAt: string;
  updatedAt: string;
}

export interface IChannel {
  id: bigint;
  name: string;
  description: string | null;
  updatedAt: string | Date;
  createdAt: string | Date;
}

export interface IChannelGroup {
  id: bigint;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
  serverId?: number;
  channels?: IChannel[];
}
