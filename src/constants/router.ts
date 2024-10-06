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
    IconUserCog,
    IconThermometer,
    IconReport
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
    | "ROOM_CLIN"
    | "ROOM_SPEC"
    | "FIELD"
    | "FIELD_DETAIL"
    | "CLINICAL"
    | "SPEC"
    | "DOCTOR"
    | "LOGIN"
    | "RESULT"
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
    ROOM_CLIN: {
        href: "/room-clin",
        type: "protected",
        name: "Phòng khám lâm sàng",
        icon: IconBed
    },
    ROOM_SPEC: {
        href: "/room-spec",
        type: "protected",
        name: "Phòng khám chuyên khoa",
        icon: IconThermometer
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
    },
    LOGIN: {
        href: "/login",
        type: "protected",
        name: "Đăng nhập",
    },
    RESULT: {
        href: "/result",
        type: "protected",
        name: "Kết luận",
        icon: IconReport,
    },
}