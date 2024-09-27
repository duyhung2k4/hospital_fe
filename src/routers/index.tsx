import React from "react";

import { Routes, Route } from "react-router-dom";
import {
    PageHome,
    PageNotFound,
} from "./lazy";
import AppshellLayout from "@/layouts/appShell";



const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route element={<AppshellLayout />}>
                <Route path="/" element={<PageHome />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;