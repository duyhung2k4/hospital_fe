import React from "react";

import { Button, Grid, Group, Image, PasswordInput, Stack, Text, TextInput } from "@mantine/core";

import bgGIF from "@/assets/GIF/bg-login.gif";
import classes from "./style.module.css";



const Login: React.FC = () => {
    return (
        <Group className={classes.root}>
            <Grid 
                w={"100%"} 
                h={"100%"}
                classNames={{
                    inner: classes.inner
                }}
            >
                <Grid.Col span={8} w={"100%"}>
                    <Stack className={classes.bg}>
                        <Image className={classes.bg_image} src={bgGIF} />
                    </Stack>
                </Grid.Col>

                <Grid.Col span={4} w={"100%"}>
                    <Stack className={classes.box} gap={40}>
                        <Stack gap={0} w={"100%"} align="center">
                            <Text style={{ fontWeight: 800, fontSize: 30 }}>Chào mừng quay lại</Text>
                            <Text style={{ fontWeight: 800, fontSize: 14 }}>Vui lòng nhập thông tin đăng nhập</Text>
                        </Stack>

                        <form style={{ width: "100%" }}>
                            <Stack w={"100%"} gap={0}>
                                <TextInput
                                    label="Tên đăng nhập"
                                />
                                <PasswordInput
                                    label="Mật khẩu"
                                />
                            </Stack>
                        </form>

                        <Button w={"100%"}>Đăng nhập</Button>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Group>
    )
}

export default Login;