import React from "react";

import { Routes, Route } from "react-router-dom";
import {
    PageDepartment,
    PageHome,
    PageNotFound,
    PageSchedule,
} from "./lazy";
import AppshellLayout from "@/layouts/appShell";
import { ROUTER } from "@/constants/router";



const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route element={<AppshellLayout />}>
                <Route path={ROUTER.HOME.href} element={<PageHome />} />
                <Route path={ROUTER.DEPARTMENT.href} element={<PageDepartment />} />
                <Route path={ROUTER.SCHEDULE.href} element={<PageSchedule />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;