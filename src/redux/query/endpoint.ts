export const HEADER = {
    defaultHeader: () => ({
        accept: 'application/json',
    }),
}

export const endPoint = {
    query: {
        query: (model: string) => ({
            url: `api/v1/query/${model}`,
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
    },
    schedule: {
        callMedicalFile: () => ({
            url: "api/v1/schedule/call-medical-file",
            method: "GET",
            headers: HEADER.defaultHeader(),
        }),
        pullMedicalFile: () => ({
            url: "api/v1/schedule/pull-medical-file",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        transit: () => ({
            url: "api/v1/schedule/transit",
            method: "POST",
            headers: HEADER.defaultHeader(),
        })
    },
    room: {
        addAccount: () => ({
            url: "api/v1/room/add-account",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        callStep: () => ({
            url: "api/v1/room/call-step",
            method: "GET",
            headers: HEADER.defaultHeader(),
        }),
        pullStep: () => ({
            url: "api/v1/room/pull-step",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        saveStep: () => ({
            url: "api/v1/room/save-step",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
    }
}