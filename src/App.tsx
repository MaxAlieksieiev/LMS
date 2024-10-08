import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthRoutingModule } from "./modules/auth/routing";
import { AuthLayout } from "./modules/auth/layout";
import { Dashboard } from "./modules/dashboard/pages/dashboard";
import { RouteGuard } from "./modules/core/routing/routeGuards";

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
      {
        path: "dashboard",
        element: (
          <RouteGuard>
            <Dashboard />
          </RouteGuard>
        ),
        index: true,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
