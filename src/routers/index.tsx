import React from "react";
import AppshellLayout from "@/layouts/appShell";

import { Routes, Route } from "react-router-dom";
import {
    PageDepartment,
    PageField,
    PageFieldDetail,
    PageHome,
    PageNotFound,
    PageRoom,
    PageSchedule,
} from "./lazy";
import { ROUTER } from "@/constants/router";



const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route element={<AppshellLayout />}>
                <Route path={ROUTER.HOME.href} element={<PageHome />} />
                <Route path={ROUTER.DEPARTMENT.href} element={<PageDepartment />} />
                <Route path={ROUTER.SCHEDULE.href} element={<PageSchedule />} />
                <Route path={ROUTER.ROOM.href} element={<PageRoom />} />
                <Route path={ROUTER.FIELD.href} element={<PageField />} />
                <Route path={ROUTER.FIELD_DETAIL.href} element={<PageFieldDetail />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;