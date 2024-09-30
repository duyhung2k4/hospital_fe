import React, { useEffect, useState } from "react";
import TableCRUD from "@/components/table_crud";

import { Stack } from "@mantine/core";
import { DEFAULT_QUERY_DATA, useQueryMutation } from "@/redux/api/query";
import { DepartmentModel } from "@/model/department";
import { RoomModel } from "@/model/room";



const Room: React.FC = () => {
    const [query, { isLoading }] = useQueryMutation();
    const [departments, setDepartments] = useState<DepartmentModel[]>([]);

    const handleGetDepartment = async () => {
        const result = await query({
            model: "department",
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "get_all",
            }
        });

        if ("error" in result) return;
        const data = result.data.data as DepartmentModel[] || [];
        setDepartments(data);
    }

    useEffect(() => {
        handleGetDepartment();
    }, []);



    return (
        <Stack w={"100%"}>
            <TableCRUD
                isLoading={isLoading}
                model="room"
                cells={{
                    "departmentId": (values) => {
                        const room = values as RoomModel;
                        const department = departments.find(d => d.ID === room.departmentId);
                        return <>{department && department.name}</>
                    }
                }}
                preload={["Profile"]}
                fields={[
                    {
                        type: "text",
                        size: 6,
                        name: "name",
                        data: { label: "Tên phòng", placeholder: "Ví dụ: Phòng chụp chiếu" }
                    },
                    {
                        type: "text",
                        size: 6,
                        name: "code",
                        data: { label: "Mã phòng", placeholder: "Ví dụ: p1-101" }
                    },
                    {
                        type: "select",
                        valueType: "number",
                        size: 12,
                        name: "departmentId",
                        data: {
                            label: "Khoa quản lí",
                            data: departments.map(d => ({ label: d.name, value: `${d.ID}` }))
                        }
                    }
                ]}
            />
        </Stack>
    )
}

export default Room;