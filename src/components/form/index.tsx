import React, { useMemo } from "react";
import {
    TextInput, TextInputProps,
    Textarea, TextareaProps,
    NumberInput, NumberInputProps,
    Select, SelectProps,
    Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";



const FormCustom: React.FC<FormCustomProps> = (props) => {

    const { initalValue } = useMemo(() => {
        let initalValue: Record<string, any> = {};

        props.fields.forEach(f => {
            initalValue[f.name] = f.data.defaultValue;
        })

        return { initalValue }
    }, [props.fields]);

    const form = useForm({
        initialValues: initalValue,
    });

    const InputComponent = (payload: FormCustomField) => {
        switch (payload.type) {
            case "text":
                return <TextInput {...payload.data} {...form.getInputProps(payload.name)} />;
            case "area":
                return <Textarea {...payload.data} {...form.getInputProps(payload.name)} />;
            case "number":
                return <NumberInput {...payload.data} {...form.getInputProps(payload.name)} />;
            case "select":
                return <Select {...payload.data} {...form.getInputProps(payload.name)} />;
            default:
                return null;
        }
    };

    

    return (
        <>
            <form id={props.id} onSubmit={form.onSubmit(props.cbSubmit)}>
                <Grid>
                    {
                        props.fields.map(p =>
                            <Grid.Col key={p.name} span={p.size}>
                                {InputComponent(p)}
                            </Grid.Col>
                        )
                    }
                </Grid>
            </form>
        </>
    )
}

export default FormCustom;

export type FormCustomField =
    | {
        type: "text"
        name: string
        size: number
        data: TextInputProps
    }
    | {
        type: "area"
        name: string
        size: number
        data: TextareaProps
    }
    | {
        type: "number"
        name: string
        size: number
        data: NumberInputProps
    }
    | {
        type: "select"
        name: string
        size: number
        data: SelectProps
    }

export type FormCustomProps = {
    id: string
    fields: FormCustomField[]
    cbSubmit: (values: Record<string, any>) => void
}