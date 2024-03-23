import { createLazyFileRoute } from "@tanstack/react-router";
import SocialMedia from "../pages/SocialMedia/SocialMedia";

export const Route = createLazyFileRoute("/social-media")({
  component: SocialMediaComponent,
});

function SocialMediaComponent() {
  return <SocialMedia />;
}
