import { BaseModel } from "./base"
import { DepartmentModel } from "./department"

export type FieldModel = BaseModel & {
    lable: string
    placeholder: string
    name: string
    size: number
    type: "text" | "area" | "number" | "select"
    defaultValues: string[]

    departmentId: number
    department?: DepartmentModel
}