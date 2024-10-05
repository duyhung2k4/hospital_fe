import { 
    Icon, 
    IconLayoutDashboard, 
    IconProps, 
    IconHeartbeat,
    IconCalendarMonth,
    IconBed,
    IconChartInfographic,
    IconStethoscope,
    IconSpaces,
    IconUserCog
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
    | "ROOM"
    | "FIELD"
    | "FIELD_DETAIL"
    | "CLINICAL"
    | "SPEC"
    | "DOCTOR"
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
    },
    ROOM: {
        href: "/room",
        type: "protected",
        name: "Phòng khám",
        icon: IconBed
    },
    FIELD: {
        href: "/field",
        type: "protected",
        name: "Thông số bệnh lí",
        icon: IconChartInfographic
    },
    FIELD_DETAIL: {
        href: "/field/:id",
        type: "protected",
    },
    CLINICAL: {
        href: "/clinical",
        type: "protected",
        name: "Khám lâm sàng",
        icon: IconStethoscope
    },
    SPEC: {
        href: "/spec",
        type: "protected",
        name: "Khám chuyên khoa",
        icon: IconSpaces
    },
    DOCTOR: {
        href: "/doctor",
        type: "protected",
        name: "Tài khoản Bác sĩ",
        icon: IconUserCog
    }
}