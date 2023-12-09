
import { MantineProvider } from "@mantine/core";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Chat from "./pages/chat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />
  },
]);

function App() {

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
