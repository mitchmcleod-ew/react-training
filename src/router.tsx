import {
  createBrowserRouter
} from "react-router-dom";
import { Page1 } from "./pages/page-1";
import { Page2 } from "./pages/page-2";
import { Page3 } from "./pages/page-3";
import { Root } from "./pages/root";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/page-1",
        element: <Page1 />,
      },
      {
        path: "/page-2",
        element: <Page2 />,
      },
      {
        path: "/page-3",
        element: <Page3 />,
      }
    ],
  },
]);
