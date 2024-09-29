import { BaseModel } from "./base";

export type ProfileModel = BaseModel & {
    firstName: string
    lastName: string
    phone: string
    email: string
    address: string
    gender: string
    password: string
    role: "admin" | "user" | "clin" | "spec"

    // Faces []Face `json:"faces" gorm:"foreignKey:ProfileId"`
}