import LayoutTemplate from "@/components/templates/Layout.template";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutTemplate />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
