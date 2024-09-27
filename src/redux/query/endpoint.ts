export const HEADER = {
    defaultHeader: () => ({
        accept: 'application/json',
    }),
}

export const endPoint = {
    posts: {
        getAllPosts: () => ({
            url: "posts",
            method: "GET",
            headers: HEADER.defaultHeader(),
        }),
    },
    query: {
        query: (model: string) => ({
            url: `api/v1/query/${model}`,
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
    },
}