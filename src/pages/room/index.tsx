import React, { useEffect, useState } from "react";
import TableCRUD from "@/components/table_crud";

import { Stack, Tooltip } from "@mantine/core";
import { DEFAULT_QUERY_DATA, useQueryMutation } from "@/redux/api/query";
import { DepartmentModel } from "@/model/department";
import { RoomModel } from "@/model/room";
import { IconUser } from "@tabler/icons-react";
import { OpenModalAction } from "@/utils/modal";
import { useAddAccountForRoomMutation } from "@/redux/api/room";
// import { AddAccountForRoomReq } from "@/dto/request/room";



const Room: React.FC = () => {

    const [departments, setDepartments] = useState<DepartmentModel[]>([]);

    const [query, { isLoading }] = useQueryMutation();
    const [_, { isLoading: loadingAddAccount }] = useAddAccountForRoomMutation();


    const changeData = () => {
        console.log("cc");
    }

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

    const handleAddAccount = async (values: Record<string, any>, room: RoomModel) => {
        if (!room.ID || !values?.email || !values?.password) return;
        // const payload: AddAccountForRoomReq = {
        //     roomId: room.ID,
        //     emailAccept: values.email,
        //     password: values.password,
        // };

        // console.log(payload);

        // const result = await addAccount(payload);
        // if ("error" in result) return;
        // const newRoom = result.data.data as RoomModel;
        // console.log(newRoom);
        changeData();
    }

    const modalAddAccount = (values: Record<string, any>) => {
        const room = values as RoomModel
        OpenModalAction({
            title: "Gán tài khoản",
            fields: [
                {
                    type: "text",
                    name: "email",
                    size: 6,
                    data: {
                        label: "Email nhận"
                    }
                },
                {
                    type: "text",
                    name: "password",
                    size: 6,
                    data: {
                        label: "Mật khẩu",
                    }
                }
            ],
            idForm: "add-account",
            cb: (values) => handleAddAccount(values, room),
        });
    }

    useEffect(() => {
        handleGetDepartment();
    }, []);



    return (
        <Stack w={"100%"}>
            <TableCRUD
                isLoading={isLoading || loadingAddAccount}
                model="room"
                cells={{
                    "departmentId": (values) => {
                        const room = values as RoomModel;
                        const department = departments.find(d => d.ID === room.departmentId);
                        return <>{department && department.name}</>
                    }
                }}
                changeData={changeData}
                preload={["Profile"]}
                omit={{
                    Profile: ["password", "username"]
                }}
                options={[
                    (values) => (
                        <>
                            <Tooltip label="Gán tài khoản">
                                <IconUser onClick={() => modalAddAccount(values)} color="green" />
                            </Tooltip>
                        </>
                    )
                ]}
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