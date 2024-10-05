import React from "react";
import AppshellLayout from "@/layouts/appShell";

import { Routes, Route } from "react-router-dom";
import {
    PageClinical,
    PageDepartment,
    PageDoctor,
    PageField,
    PageFieldDetail,
    PageHome,
    PageNotFound,
    PageRoom,
    PageSchedule,
    PageSpec,
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
                <Route path={ROUTER.CLINICAL.href} element={<PageClinical />} />
                <Route path={ROUTER.SPEC.href} element={<PageSpec />} />
                <Route path={ROUTER.DOCTOR.href} element={<PageDoctor />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;