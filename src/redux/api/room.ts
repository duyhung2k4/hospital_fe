import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { QueryReturnType } from "@/dto/base";
import { AddAccountForRoomReq } from "@/dto/request/room";
import { RoomModel } from "@/model/room";



export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        addAccountForRoom: builder.mutation<QueryReturnType<RoomModel>, AddAccountForRoomReq>({
            query: (payload) => ({
                ...endPoint.room.addAccount(),
                data: payload,
            }),
        }),
    })
});

export const {
    useAddAccountForRoomMutation,
} = roomApi;