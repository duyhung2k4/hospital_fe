import { 
    Icon, 
    IconLayoutDashboard, 
    IconProps, 
    IconHeartbeat,
    IconCalendarMonth
} from "@tabler/icons-react"

export type ObjectRouter = {
    href: string
    name?: string
    type: "public" | "protected"
    icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
}

export type FieldRouter =
    | "HOME"
    | "DEPARTMENT"
    | "SCHEDULE"
export const ROUTER: Record<FieldRouter, ObjectRouter> = {
    HOME: {
        href: "/",
        type: "protected",
        name: "Trang chủ",
        icon: IconLayoutDashboard
    },
    DEPARTMENT: {
        href: "/department",
        type: "protected",
        name: "Quản lí khoa",
        icon: IconHeartbeat
    },
    SCHEDULE: {
        href: "/schedule",
        type: "protected",
        name: "Lịch khám",
        icon: IconCalendarMonth
    }
}