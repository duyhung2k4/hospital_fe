import React, { useEffect, useMemo, useState } from "react";
import TableCustom from "@/components/table";

import { IconPencilMinus, IconPlus, IconReload, IconTrash } from "@tabler/icons-react";
import { Button, Group, Stack, Tooltip } from "@mantine/core";
import { OpenModalAction, OpenModalConfirm } from "@/utils/model";
import { DEFAULT_QUERY_DATA, useQueryMutation } from "@/redux/api/query";
import { FormCustomField } from "@/components/form";
import { MRT_ColumnDef } from "mantine-react-table";
import { SIZE } from "@/constants/size";


export type TableCRUDProps = {
    model: string
    isLoading?: boolean
    fields: FormCustomField[]
    cells: Record<string, (item: Record<string, any>) => React.ReactNode>
}
const TableCRUD: React.FC<TableCRUDProps> = (props) => {
    const [query, { isLoading }] = useQueryMutation();
    const [departments, setDepartments] = useState<Record<string, any>[]>([]);



    // Field
    const { fields, columns } = useMemo(() => {
        const fields: FormCustomField[] = props.fields;

        const columns: MRT_ColumnDef<Record<string, any>>[] = [
            ...fields.map(f => {
                const c: MRT_ColumnDef<Record<string, any>> = {
                    accessorKey: f.name,
                    header: `${f.data.label}`,
                }

                if(props.cells?.[f.name]) {
                    c.Cell = p => {
                        const Item = props.cells?.[f.name];
                        if (!Item) return <></>;

                        const value = p.cell.row.original;
                        return <Item {...value} />
                    }
                }
                
                return c;
            }),
            {
                accessorKey: "action",
                header: "Tác vụ",
                Cell: (props) => {
                    return (
                        <Group style={{ cursor: "pointer" }}>
                            <Tooltip label="Xóa">
                                <IconTrash
                                    color="red"
                                    onClick={() => {
                                        const item = props.cell.row.original;
                                        if (!item?.ID) return;

                                        OpenModalConfirm({
                                            title: "Xác nhận xóa",
                                            text: <>Bạn thật sự muốn xóa dữ liệu</>,
                                            idForm: "delete-department",
                                            cb: () => handleDelete(item.ID as number)
                                        });
                                    }}
                                />
                            </Tooltip>
                            <Tooltip label="Chỉnh sửa">
                                <IconPencilMinus
                                    color="blue"
                                    onClick={() => {
                                        const item = props.cell.row.original;
                                        if (!item?.ID) return;
                                        fields.forEach((f) => {
                                            f.data = {
                                                ...f.data,
                                                defaultValue: item[f.name],
                                            }
                                        })

                                        OpenModalAction({
                                            title: "Chỉnh sửa",
                                            fields,
                                            idForm: "update-department",
                                            cb: (values) => handleUpdate(item.ID as number, values)
                                        });
                                    }}
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
    }, [departments]);



    // Handle
    const handleGet = async () => {
        const result = await query({
            model: props.model,
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "get_all",
            }
        });

        if ("error" in result) return;
        const data = result.data.data as Record<string, any>[];
        setDepartments(data || []);
    }

    const handleCreate = async (values: Record<string, any>) => {
        const result = await query({
            model: props.model,
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "create",
                data: values,
            }
        });

        if ("error" in result) return;

        const data = result.data.data as Record<string, any>;
        setDepartments([...departments, data]);
    }

    const handleUpdate = async (id: number, values: Record<string, any>) => {
        const result = await query({
            model: props.model,
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "update",
                data: values,
                condition: "id = ?",
                args: [id],
            },
        });

        if ("error" in result) return;
        const data = result.data.data as Record<string, any>;
        setDepartments(departments.map(d => d.ID === data.ID ? data : d));
    }

    const handleDelete = async (id: number) => {
        const result = await query({
            model: props.model,
            data: {
                ...DEFAULT_QUERY_DATA,
                method: "delete",
                data: {},
                condition: "id = ?",
                args: [id],
            },
        });

        if ("error" in result) return;
        setDepartments(departments.filter(d => d.ID !== id));
    }



    // Init
    useEffect(() => {
        handleGet();
    }, []);


    return (
        <Stack w={"100%"}>
            <TableCustom
                columns={columns}
                data={departments}
                loading={isLoading || props.isLoading}
                maxHeight={`calc(100vh - ${SIZE.h_header} - ${SIZE.t_toolbar} - ${SIZE.t_header} - ${SIZE.t_footer})`}
                action={
                    <Group>
                        <Button
                            onClick={() => OpenModalAction({
                                title: "Thêm mới",
                                fields,
                                idForm: "create-department",
                                cb: handleCreate,
                            })}
                            leftSection={<IconPlus />}
                            color="green"
                        >Thêm</Button>
                        <Button
                            onClick={handleGet}
                            leftSection={<IconReload />}
                        >Tải lại</Button>
                    </Group>
                }
            />
        </Stack>
    )
}

export default TableCRUD;