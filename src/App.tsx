
import { MantineProvider } from "@mantine/core";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Chat from "./pages/chat";
import Login from "./pages/login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: '/chat',
    element: <Chat />
  }
]);

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
