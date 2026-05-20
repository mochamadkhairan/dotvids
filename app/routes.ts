import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout/MainLayout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("team", "routes/team.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;