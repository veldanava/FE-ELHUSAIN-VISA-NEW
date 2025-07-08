import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("About", "routes/about.tsx"),
  route("Paket", "routes/paket.tsx"),
  route("Login", "routes/login.tsx"),
  route("Dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
