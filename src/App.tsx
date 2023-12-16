
import { MantineProvider } from "@mantine/core";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Notifications } from '@mantine/notifications';
import './index.css'
import Chat from "./pages/chat";
import Login from "./pages/login";
import SignUp from './pages/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]);

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
