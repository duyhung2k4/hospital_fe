import { BaseModel } from "./base";
import { DepartmentModel } from "./department";
import { ProfileModel } from "./profile";

export type RoomModel = BaseModel & {
    name: string
    code: string

    departmentId: number
    department?: DepartmentModel
    profile?: ProfileModel
}