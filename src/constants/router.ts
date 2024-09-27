export type ObjectRouter = {
    href: string
    name?: string
    type: "public" | "protected"
}

export type FieldRouter =
    | "POSTS"
export const ROUTER: Record<FieldRouter, ObjectRouter> = {
    POSTS: {
        href: "/face-auth",
        type: "public",
        name: "Bài đăng",
    }
}