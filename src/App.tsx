import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthRoutingModule } from "./modules/auth/routing";

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
        element: <Outlet />,
        children: [...AuthRoutingModule],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
