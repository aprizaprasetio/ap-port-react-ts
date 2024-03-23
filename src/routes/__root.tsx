import { Outlet, createRootRoute } from "@tanstack/react-router";
import Topbar from "../components/Topbar/Topbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}
