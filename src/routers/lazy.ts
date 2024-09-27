import { lazy } from "react";

// page
export const PageHome = lazy(() => import("@/pages/home"));
export const PageDepartment = lazy(() => import("@/pages/department"));
export const PageSchedule = lazy(() => import("@/pages/schedule"));
// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));