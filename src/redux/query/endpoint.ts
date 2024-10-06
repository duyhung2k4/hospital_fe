import Cookies from "js-cookie";
import { TOKEN_TYPE } from "@/model/variable";



export const HEADER = {
    defaultHeader: () => ({
        accept: 'application/json',
    }),
    refreshTokenHeader: () => {
        const token = Cookies.get(TOKEN_TYPE.REFRESH_TOKEN);
        return {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    },
    protectedHeader: () => {
        const token = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
        return {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
}

export const endPoint = {
    auth: {
        loginGoogle: () => ({
            url: "api/v1/public/login",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        refreshToken: () => ({
            url: "api/v1/protected/refresh-token",
            method: "POST",
            headers: HEADER.refreshTokenHeader(),
        }),
    },
    query: {
        query: (model: string) => ({
            url: `api/v1/protected/query/${model}`,
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
    },
    schedule: {
        callMedicalFile: () => ({
            url: "api/v1/protected/schedule/call-medical-file",
            method: "GET",
            headers: HEADER.protectedHeader(),
        }),
        pullMedicalFile: () => ({
            url: "api/v1/protected/schedule/pull-medical-file",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
        transit: () => ({
            url: "api/v1/protected/schedule/transit",
            method: "POST",
            headers: HEADER.protectedHeader(),
        })
    },
    room: {
        addAccount: () => ({
            url: "api/v1/protected/room/add-account",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
        callStep: () => ({
            url: "api/v1/protected/room/call-step",
            method: "GET",
            headers: HEADER.protectedHeader(),
        }),
        pullStep: () => ({
            url: "api/v1/protected/room/pull-step",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
        saveStep: () => ({
            url: "api/v1/protected/room/save-step",
            method: "POST",
            headers: HEADER.protectedHeader(),
        }),
    }
}