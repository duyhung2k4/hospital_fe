import React from "react";
import TableCRUD from "@/components/table_crud";

import { Stack } from "@mantine/core";



const Doctor: React.FC = () => {
    return (
        <Stack w={"100%"}>
            <TableCRUD
                model="profile"
                cells={{}}
                omit={{

                }}
                fields={[
                    {
                        type: "text",
                        size: 6,
                        name: "firstName",
                        data: { label: "Họ, tên đệm" }
                    },
                    {
                        type: "text",
                        size: 6,
                        name: "lastName",
                        data: { label: "Tên" }
                    },
                ]}
            />
        </Stack>
    )
}

export default Doctor;