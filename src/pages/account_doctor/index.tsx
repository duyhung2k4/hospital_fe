import React from "react";
import TableCRUD from "@/components/table_crud";

import { Badge, Stack } from "@mantine/core";
import { ProfileModel } from "@/model/profile";



export const mapStatus: Record<string, any> = {
  "active": <Badge color="green">Đã xác nhận</Badge>,
  "none_active": <Badge color="yellow">Chưa xác nhận</Badge>,
}

const AccountDoctor: React.FC = () => {
  return (
    <Stack w={"100%"}>
      <TableCRUD
        model="profile"
        cells={{
          active: (values) => {
            const profile = values as ProfileModel
            return <>{profile.active ? mapStatus.active : mapStatus.none_active}</>
          },
          role: (values) => {
            const profile = values as ProfileModel
            return <>{profile.role === "clin" ? "Lâm sàng" : "Chuyên khoa"}</>
          },
        }}
        condition="role IN (?, ?)"
        args={["clin", "spec"]}
        fields={[
          {
            type: "text",
            size: 6,
            name: "firstName",
            data: { label: "Họ, tên đệm" }
          },
          {
            type: "text",
            size: 6,
            name: "lastName",
            data: { label: "Tên" }
          },
          {
            type: "text",
            size: 6,
            name: "username",
            data: { label: "Nickname" }
          },
          {
            type: "text",
            size: 6,
            name: "address",
            data: { label: "Địa chỉ" }
          },
          {
            type: "select",
            size: 6,
            name: "gender",
            data: {
              label: "Giới tính",
              data: ["Nam", "Nữ"]
            }
          },
          {
            type: "text",
            size: 6,
            name: "phone",
            data: { label: "Liên hệ" }
          },
          {
            type: "select",
            size: 6,
            name: "role",
            data: {
              label: "Vai trò",
              data: [
                { label: "Bác sĩ lâm sàng", value: "clin" },
                { label: "Bác sĩ chuyên khoa", value: "spec" },
              ]
            }
          },
          {
            type: "text",
            size: 6,
            name: "active",
            isField: false,
            data: { label: "Trạng thái" }
          },
        ]}
      />
    </Stack>
  )
}

export default AccountDoctor;