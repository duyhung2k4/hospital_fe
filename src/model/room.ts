import { BaseModel } from "./base";
import { DepartmentModel } from "./department";

export type RoomModel = BaseModel & {
    name: string
    code: string

    departmentId: number
    department?: DepartmentModel
}