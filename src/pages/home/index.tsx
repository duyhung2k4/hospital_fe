import React, { useEffect, useState } from "react";
import FormCustom, { FormCustomField } from "@/components/form";
import { Button, Group, Stack } from "@mantine/core";
import { useQueryMutation } from "@/redux/api/query";
import { FieldModel } from "@/model/field";
import { HandleField } from "@/utils/field";



const Home: React.FC = () => {
    const [post] = useQueryMutation();
    const [fields, setFields] = useState<FormCustomField[]>([]);

    const handleSubmit = async () => {
        const result = await post({
            model: "field",
            data: {
                data: { a: 1 },
                condition: "",
                args: [],
                preload: [],
                omit: {},
                method: "get_all",
            }
        });

        if ("error" in result) return;
        const data = result.data.data as FieldModel[] | undefined
        const fields: FormCustomField[] = HandleField.convertToFieldsForGET(data || []);
        setFields(fields);
    }

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <Stack gap={0} p={36}>
            Home
            <FormCustom
                id="home"
                fields={fields}
                cbSubmit={(values) => console.log(values)}
            />
            <Group justify="end" mt={20}>
                <Button type="submit" form="home">Submit</Button>
            </Group>
        </Stack>
    )
}

export default Home;