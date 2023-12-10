import { io } from "socket.io-client"

export const socket = io("http://localhost:3550",
  {
    autoConnect: false,
    reconnectionDelayMax: 10000,
    auth: {
      token: "123",
    },
    query: {
      "my-key": "my-value",
    }
  }  
)
