import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DotVids" },
    { name: "description", content: "Welcome to DotVids!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
