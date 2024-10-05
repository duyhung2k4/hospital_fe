import { BaseModel } from "./base";

export type ProfileModel = BaseModel & {
    firstName: string
    lastName: string
    phone: string
    email: string
    address: string
    gender?: "male" | "female"
    password: string
    role: "admin" | "user" | "clin" | "spec"
    active: boolean
    avatar: number[][]

    // Faces []Face `json:"faces" gorm:"foreignKey:ProfileId"`
}