export type AddAccountForRoomReq = {
    roomId: number
    password: string
    emailAccept: string
}

export type SaveStepReq = {
    scheduleId: number
    result: string
    roomId: number
}