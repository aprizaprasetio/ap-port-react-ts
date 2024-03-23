import { createLazyFileRoute } from "@tanstack/react-router";
import Highlights from "../pages/Highlights/Highlights";

export const Route = createLazyFileRoute("/")({
  component: Highlights,
});
