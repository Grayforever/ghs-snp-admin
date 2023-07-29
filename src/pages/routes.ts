import { lazy } from "react";
const Home = lazy(() => import("./home"));
const DataViews = lazy(() => import("./data-view"));
const RegionalIndicator = lazy(
  () => import("./data-view/subPages/regionalIndicator")
);
const DistrictPerformance = lazy(
  () => import("./data-view/subPages/districtPerformance")
);
const Blog = lazy(() => import("./blog"));
const Learn = lazy(() => import("./learn"));
const Profile = lazy(() => import("./profile"));
const Notifications = lazy(() => import("./notifications"));
const Regional = lazy(() => import("./regional"));
const Reports = lazy(() => import("./regional/subPages/reports"));
const InnovationDocs = lazy(() => import("./regional/subPages/innovationDocs"));

const routes = [
  { path: "/", exact: true, name: "Dashboard", index: true, element: Home },
  {
    path: "/data-view",
    exact: true,
    name: "Data View",
    index: true,
    element: DataViews,
  },
  {
    path: "/data-view/regional-indicator",
    exact: true,
    name: "Regional Indicator",
    index: true,
    element: RegionalIndicator,
  },
  {
    path: "/data-view/district-performance",
    exact: true,
    name: "District Performance",
    index: true,
    element: DistrictPerformance,
  },
  { path: "/blog", exact: true, name: "Blog", index: true, element: Blog },
  { path: "/learn", exact: true, name: "Learn", index: true, element: Learn },
  {
    path: "/regional",
    exact: true,
    name: "Regional",
    index: true,
    element: Regional,
  },
  {
    path: "/regional/reports",
    exact: true,
    name: "Reports",
    index: true,
    element: Reports,
  },
  {
    path: "/regional/innovation-docs",
    exact: true,
    name: "Innovation Document",
    index: true,
    element: InnovationDocs,
  },
  {
    path: "/profile",
    exact: true,
    name: "Profile",
    index: true,
    element: Profile,
  },
  {
    path: "/notifications",
    exact: true,
    name: "Notifications",
    index: true,
    element: Notifications,
  },
];
export default routes;
