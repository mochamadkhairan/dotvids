import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout/MainLayout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("contact", "routes/contact.tsx"),
    route("privacy", "routes/privacy.tsx"),
    route("terms", "routes/terms.tsx"),
    route("cookies", "routes/cookies.tsx"),
  ]),
] satisfies RouteConfig;