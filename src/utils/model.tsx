import FormCustom, { FormCustomField } from "@/components/form";
import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import React from "react";


export type OpenModalActionProps = {
    title: React.ReactNode
    fields: FormCustomField[]
    idForm: string
    cb: (values: Record<string, any>) => void
}
export const OpenModalAction = (props: OpenModalActionProps) => modals.openConfirmModal({
    title: <Text>{props.title}</Text>,
    children: (
        <FormCustom
            id={props.idForm}
            fields={props.fields}
            cbSubmit={props.cb}
        />
    ),
    size: "lg",
    labels: {
        confirm: <Button type="submit" form={props.idForm}>Xác nhận</Button>,
        cancel: 'Hủy',
    },
});