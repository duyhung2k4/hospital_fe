import React, { Suspense } from "react";

import { useOutlet } from "react-router";
import { AppShell, LoadingOverlay } from '@mantine/core';



const AppshellLayout: React.FC = () => {
    const outlet = useOutlet();



    return (
        <Suspense fallback={<LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />}>
            <AppShell
                padding={0}
            >
                <AppShell.Main>
                    {outlet}
                </AppShell.Main>
            </AppShell>
        </Suspense>
    )
}

export default AppshellLayout;