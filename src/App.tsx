
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
import './index.css';
import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import Chat from "./pages/chat";
import Login from "./pages/login";
import SignUp from './pages/signup';
import { NAVIGATION_PATH } from "./utils/path.const";

const router = createBrowserRouter([
  {
    path: NAVIGATION_PATH.LOGIN,
    element: <Login />
  },
  {
    path: NAVIGATION_PATH.CHAT,
    element: <Chat />
  },
  {
    path: NAVIGATION_PATH.SIGNUP,
    element: <SignUp />
  }
]);

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider >
        <Notifications position="top-right" zIndex={1000} />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
