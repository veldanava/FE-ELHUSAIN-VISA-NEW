import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("About", "routes/about.tsx"), // ← tambah ini
] satisfies RouteConfig;
