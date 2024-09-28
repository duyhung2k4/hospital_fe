import React, { useEffect, useMemo, useState } from "react";
import TableCustom from "@/components/table";

import { IconPencilMinus, IconPlus, IconReload, IconTrash } from "@tabler/icons-react";
import { Button, Group, Stack, Tooltip } from "@mantine/core";
import { OpenModalAction } from "@/utils/model";
import { DEFAULT_QUERY_DATA, useQueryMutation } from "@/redux/api/query";
import { DepartmentModel } from "@/model/department";
import { FormCustomField } from "@/components/form";
import { MRT_ColumnDef } from "mantine-react-table";
import { SIZE } from "@/constants/size";



const Department: React.FC = () => {
    const [query, { isLoading }] = useQueryMutation();
    const [departments, setDepartments] = useState<DepartmentModel[]>([]);


    const { fields, columns } = useMemo(() => {
        const fields: FormCustomField[] = [
            {
                type: "text",
                size: 6,
                name: "name",
                data: { label: "Tên khoa", placeholder: "Ví dụ: Khoa tim mạch" }
            },
            {
                type: "text",
                size: 6,
                name: "code",
                data: { label: "Mã khoa", placeholder: "Ví dụ: ktm" }
            },
        ];

        const columns: MRT_ColumnDef<Record<string, any>>[] = [
            ...fields.map(f => ({ accessorKey: f.name, header: `${f.data.label}` })),
            {
                accessorKey: "action",
                header: "Tác vụ",
                Cell: (props) => {
                    return (
                        <Group style={{ cursor: "pointer" }}>
                            <Tooltip label="Xóa">
                                <IconTrash color="red" />
                            </Tooltip>
                            <Tooltip label="Chỉnh sửa">
                                <IconPencilMinus 
                                    color="blue"
                                    onClick={() => console.log(props.cell.row.original)}
                                />
                            </Tooltip>
                        </Group>
                    )
                }
            }
        ]

        return {
            fields,
            columns,
        };
    }, []);

    const handleGet = async () => {
        const result = await query({
            model: "department",
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "get_all",
            }
        });

        if ("error" in result) return;
        const data = result.data.data as DepartmentModel[];
        setDepartments(data || []);
    }

    const handleCreate = async (values: Record<string, any>) => {
        const result = await query({
            model: "department",
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "create",
                data: values,
            }
        });

        if ("error" in result) return;

        const data = result.data.data as DepartmentModel;
        setDepartments([data, ...departments]);
    }

    const handleUpdate = async (id: number, values: Record<string, any>) => {
        const result = await query({
            model: "department",
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "update",
                data: values,
                condition: "id = ?",
                args: [id],
            },
        });

        if ("error" in result) return;
    }

    useEffect(() => {
        handleGet();
    }, []);



    return (
        <Stack w={"100%"}>
            <TableCustom
                columns={columns}
                data={departments}
                loading={isLoading}
                maxHeight={`calc(100vh - ${SIZE.h_header} - ${SIZE.t_toolbar} - ${SIZE.t_header} - ${SIZE.t_footer})`}
                action={
                    <Group>
                        <Button
                            onClick={() => OpenModalAction({
                                title: "Thêm mới khoa",
                                fields,
                                idForm: "create-department",
                                cb: handleCreate,
                            })}
                            leftSection={<IconPlus/>}
                            color="green"
                        >Thêm</Button>
                        <Button 
                            onClick={handleGet}
                            leftSection={<IconReload/>}
                        >Tải lại</Button>
                    </Group>
                }
            />
        </Stack>
    )
}

export default Department;