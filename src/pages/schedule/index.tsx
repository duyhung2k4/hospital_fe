import TableCRUD from "@/components/table_crud";
import { ScheduleModel } from "@/model/schedule";
import { Stack } from "@mantine/core";
import dayjs from "dayjs";
import React from "react";



const Schedule: React.FC = () => {



    return (
        <Stack w={"100%"}>
            <TableCRUD
                model="schedule"
                cells={{
                    dob: (values) => {
                        const schedule = values as ScheduleModel
                        return <>{dayjs(schedule.dob).format("DD/MM/YYYY")}</>
                    }
                }}
                fields={[
                    {
                        type: "text",
                        size: 6,
                        name: "name",
                        data: { label: "Họ tên" }
                    },
                    {
                        type: "date",
                        size: 6,
                        name: "dob",
                        data: { label: "Ngày sinh" }
                    },
                    {
                        type: "text",
                        size: 6,
                        name: "address",
                        data: { label: "Địa chỉ" }
                    },
                    {
                        type: "select",
                        size: 6,
                        name: "gender",
                        data: {
                            label: "Giới tính",
                            data: ["Nam", "Nữ"]
                        }
                    },
                    {
                        type: "text",
                        size: 6,
                        name: "phone",
                        data: { label: "Liên hệ" }
                    },
                ]}
            />
        </Stack>
    )
}

export default Schedule;