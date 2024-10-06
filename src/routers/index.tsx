import React from "react";
import AppshellLayout from "@/layouts/appShell";

import { Routes, Route } from "react-router-dom";
import {
    PageClinical,
    PageDepartment,
    PageDetailResult,
    PageField,
    PageFieldDetail,
    PageHome,
    PageLogin,
    PageNotFound,
    PageResult,
    PageRoomClin,
    PageRoomSpec,
    PageSchedule,
    PageScheduleDetail,
    PageSpec,
} from "./lazy";
import { ROUTER } from "@/constants/router";
import ProtectedLayout from "@/layouts/protected";



const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route path={ROUTER.LOGIN.href} element={<PageLogin />} />

            <Route element={<ProtectedLayout />}>
                <Route element={<AppshellLayout />}>
                    <Route path={ROUTER.HOME.href} element={<PageHome />} />
                    <Route path={ROUTER.DEPARTMENT.href} element={<PageDepartment />} />
                    <Route path={ROUTER.SCHEDULE.href} element={<PageSchedule />} />
                    <Route path={`${ROUTER.SCHEDULE.href}/:id`} element={<PageScheduleDetail />} />
                    <Route path={ROUTER.ROOM_CLIN.href} element={<PageRoomClin />} />
                    <Route path={ROUTER.ROOM_SPEC.href} element={<PageRoomSpec />} />
                    <Route path={ROUTER.FIELD.href} element={<PageField />} />
                    <Route path={ROUTER.FIELD_DETAIL.href} element={<PageFieldDetail />} />
                    <Route path={ROUTER.CLINICAL.href} element={<PageClinical />} />
                    <Route path={ROUTER.SPEC.href} element={<PageSpec />} />
                    <Route path={ROUTER.RESULT.href} element={<PageResult />} />
                    <Route path={`${ROUTER.RESULT.href}/:id`} element={<PageDetailResult />} />
                    {/* <Route path={ROUTER.DOCTOR.href} element={<PageDoctor />} /> */}
                </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRouter;