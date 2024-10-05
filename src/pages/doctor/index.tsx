import React from "react";
import TableCRUD from "@/components/table_crud";

import { Badge, Group, Stack, Text } from "@mantine/core";
import { ProfileModel } from "@/model/profile";



const Doctor: React.FC = () => {



    return (
        <Stack w={"100%"}>
            <TableCRUD
                model="profile"
                cells={{
                    "statusAuth": (values) => {
                        const profile = values as ProfileModel;
                        return (
                            <Group style={{ cursor: "pointer" }}>
                                {
                                    profile.active ?
                                        <Badge color="green">Đã xác thực</Badge> :
                                        <Badge color="red">Chưa xác thực</Badge>
                                }
                            </Group>
                        )
                    },
                    "role": (values) => {
                        const profile = values as ProfileModel;
                        return (
                            <Group style={{ cursor: "pointer" }}>
                                {
                                    profile.role === "clin" ?
                                        <Text>Lâm sàng</Text> :
                                        <Text>Chuyên khoa</Text>
                                }
                            </Group>
                        )
                    },
                    "gender": (values) => {
                        const profile = values as ProfileModel;
                        return (
                            <Group style={{ cursor: "pointer" }}>
                                {
                                    !profile.gender ? "" : (profile.gender === "male" ? <Text>Nam</Text> : <Text>Nữ</Text>)
                                }
                            </Group>
                        )
                    }
                }}
                omit={{}}
                condition="role = 'clin' OR role = 'spec'"
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
                    {
                        type: "text",
                        size: 6,
                        name: "phone",
                        data: { label: "Số điện thoại" }
                    },
                    {
                        type: "select",
                        size: 6,
                        name: "gender",
                        data: {
                            label: "Giới tính",
                            data: [
                                { label: "Nam", value: "male" },
                                { label: "Nữ", value: "female" },
                            ]
                        }
                    },
                    {
                        type: "select",
                        size: 12,
                        name: "role",
                        data: {
                            label: "Phân loại",
                            data: [
                                { label: "Bác sĩ chuyên khoa", value: "spec" },
                                { label: "Bác sĩ lâm sàng", value: "clin" },
                            ]
                        }
                    },
                    {
                        type: "text",
                        size: 6,
                        name: "statusAuth",
                        isField: false,
                        data: {
                            label: "Trạng thái"
                        }
                    }
                ]}
            />
        </Stack>
    )
}

export default Doctor;