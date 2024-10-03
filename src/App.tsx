import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthRoutingModule } from "./modules/auth/routing";
import { AuthLayout } from "./modules/auth/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [...AuthRoutingModule],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
