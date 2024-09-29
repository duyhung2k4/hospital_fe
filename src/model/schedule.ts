import { BaseModel } from "./base";
import { ProfileModel } from "./profile";

export type ScheduleModel = BaseModel & {
    clinId?: number
    code: string
    name: string
    dob: Date
    address: string
    gender: string
    phone: string
    description: string
    avatar: number[]
    status: string

    clin?: ProfileModel

    // steps: []Step
}