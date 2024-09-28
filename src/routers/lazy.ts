import { lazy } from "react";

// page
export const PageHome = lazy(() => import("@/pages/home"));
export const PageDepartment = lazy(() => import("@/pages/department"));
export const PageSchedule = lazy(() => import("@/pages/schedule"));
export const PageRoom = lazy(() => import("@/pages/room"));
export const PageField = lazy(() => import("@/pages/field"));
export const PageFieldDetail = lazy(() => import("@/pages/field_detail"));
// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));