import { CSSProperties, createTheme } from "@mantine/core";

const themeOverride = createTheme({
    colors: {
        blue: ["#177AE3", "#177AE3", "#177AE3", "#177AE3", "#177AE3", "#177AE3", "#177AE3", "#177AE3", "#177AE3", "#177AE3"],
    },
    components: {
        Input: {
            styles: {
                input: {
                    borderRadius: 8,
                    border: 0,
                    backgroundColor: "#efefef"
                } as CSSProperties
            }
        },
        InputWrapper: {
            styles: {
                root: {
                } as CSSProperties
            }
        },
        Button: {
            styles: {
                root: {
                    borderRadius: 16,
                } as CSSProperties
            }
        },
    },
    primaryColor: "blue"
});

export default themeOverride;