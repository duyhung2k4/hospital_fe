import React, { useEffect, useMemo, useState } from "react";
import FormCustom, { FormCustomField } from "@/components/form";
import EditorCustom from "@/components/editor";

import { Avatar, Button, Grid, Group, Stack, Text } from "@mantine/core";
import { IconMapPin, IconPhone } from "@tabler/icons-react";
import { DepartmentModel } from "@/model/department";
import { DEFAULT_QUERY_DATA, useQueryMutation } from "@/redux/api/query";

import classes from "./style.module.css";



const Clinical: React.FC = () => {
    const [departments, setDepartments] = useState<DepartmentModel[]>([]);

    const [query] = useQueryMutation();

    const { fields } = useMemo(() => {
        const fields: FormCustomField[] = [
            {
                type: "text",
                name: "code",
                size: 12,
                data: {
                    label: "Mã hồ sơ",
                    readOnly: true,
                    value: "0123456789",
                    defaultValue: "0123456789"
                }
            },
            {
                type: "multi_select",
                name: "departments",
                size: 12,
                data: {
                    label: "Danh sách khoa cần khám",
                    data: departments.map(d => ({ label: d.name, value: `${d.ID}` }))
                }
            }
        ]

        return { fields }
    }, [departments]);

    const handleGetDepartments = async () => {
        const result = await query({
            model: "department",
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "get_all",
            }
        });

        if("error" in result) return;
        const data = result.data.data as DepartmentModel[] | [];
        setDepartments(data);
    }

    const handleSubmit = async (values: Record<string, any>) => {
        console.log(values);
    }

    useEffect(() => {
        handleGetDepartments();
    }, []);



    return (
        <Stack
            w={"100%"}
        >
            <Grid>
                <Grid.Col span={4}>
                    <Stack className={classes.info}>
                        <Group>
                            <Avatar radius="xl" size={80} />
                            <Text style={{ fontSize: 20 }}>Nguyễn Văn A</Text>
                        </Group>
                        <Stack>
                            <Text fw={500} style={{ fontSize: 18 }}>Thông tin liên hệ </Text>
                            <Group>
                                <IconPhone />
                                <Text>0123456789</Text>
                            </Group>
                            <Group>
                                <IconMapPin />
                                <Text>ABCD</Text>
                            </Group>
                        </Stack>
                    </Stack>

                    <Stack className={classes.detail} mt={20}>
                        <Text fw={500} style={{ fontSize: 18 }}>Thông tin chi tiết</Text>
                        <Stack gap={4}>
                            <Group>
                                <Text>Ngày sinh:</Text> <Text>0/0/0</Text>
                            </Group>
                            <Group>
                                <Text>Giới tính:</Text> <Text>ABC</Text>
                            </Group>
                        </Stack>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Stack className={classes.medical_file}>
                        <Text fw={500} style={{ fontSize: 18 }}>Hồ sơ bệnh án</Text>
                        <FormCustom
                            id="clinical"
                            fields={fields}
                            cbSubmit={handleSubmit}
                            clear={false}
                        />
                        <Stack gap={4} mt={36}>
                            <Text fw={500}>Mô tả / Kết luận</Text>
                            <EditorCustom/>
                        </Stack>
                    </Stack>
                </Grid.Col>
            </Grid>

            <Group className={classes.option} justify="end">
                <Button color="red">Hủy</Button>
                <Button color="green" type="submit" form="clinical">Chuyển tuyến</Button>
            </Group>
        </Stack>
    )
}

export default Clinical;