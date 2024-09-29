import React, { useEffect } from "react";
import {
    TextInput, TextInputProps,
    Textarea, TextareaProps,
    NumberInput, NumberInputProps,
    Select, SelectProps,
    TagsInput, TagsInputProps,
    Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";



const FormCustom: React.FC<FormCustomProps> = (props) => {

    const form = useForm();

    useEffect(() => {
        let initalValue: Record<string, any> = {};

        props.fields.forEach(f => {
            switch (f.type) {
                case "select":
                    initalValue[f.name] = `${f.data.defaultValue}`;
                    break;
                default:
                    initalValue[f.name] = f.data.defaultValue;
                    break;
            }
        })

        form.setValues(initalValue);
    }, [props.fields]);


    const InputComponent = (payload: FormCustomField) => {
        switch (payload.type) {
            case "text":
                return <TextInput {...payload.data} {...form.getInputProps(payload.name)} />;
            case "area":
                return <Textarea {...payload.data} {...form.getInputProps(payload.name)} />;
            case "number":
                return <NumberInput {...payload.data} {...form.getInputProps(payload.name)} />;
            case "tag":
                return <TagsInput {...payload.data} {...form.getInputProps(payload.name)} />;
            case "select":
                return (
                    <Select
                        {...payload.data}
                        {...form.getInputProps(payload.name)}
                    />
                );
            default:
                return <></>;
        }
    };

    const handleSubmit = (values: Record<string, any>) => {
        props.fields.map(f => {
            if (f.valueType === "number") {
                values[f.name] = Number(values[f.name] || 0);
            }
        })

        props.cbSubmit(values);
        form.reset();
        props.fields.forEach(f => f.data.defaultValue = undefined);
    }

    const handleClear = () => {
        form.reset();
        props.fields.forEach(f => f.data.defaultValue = undefined);
    }



    return (
        <>
            <form id={props.id} onSubmit={form.onSubmit(handleSubmit)}>
                <Grid>
                    {
                        props.fields.map(p =>
                            <Grid.Col key={p.name} span={p.size | 6}>
                                {InputComponent(p)}
                            </Grid.Col>
                        )
                    }
                </Grid>
            </form>
            <form id={`${props.id}-clear`} onSubmit={form.onSubmit(handleClear)}></form>
        </>
    )
}

export default FormCustom;

export type FormCustomField =
    | {
        type: "text"
        valueType?: "string" | "number"
        name: string
        size: number
        data: TextInputProps
    }
    | {
        type: "area"
        valueType?: "string" | "number"
        name: string
        size: number
        data: TextareaProps
    }
    | {
        type: "number"
        valueType?: "string" | "number"
        name: string
        size: number
        data: NumberInputProps
    }
    | {
        type: "select"
        valueType?: "string" | "number"
        name: string
        size: number
        data: SelectProps
    }
    | {
        type: "tag"
        valueType?: "string" | "number"
        name: string
        size: number
        data: TagsInputProps
    }

export type FormCustomProps = {
    id: string
    fields: FormCustomField[]
    cbSubmit: (values: Record<string, any>) => void
}