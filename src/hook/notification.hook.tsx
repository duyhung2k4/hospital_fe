import React from "react";
import { notifications } from "@mantine/notifications";

export const useNotification = () => {
  return {
    success: (message: string | React.ReactNode) => notifications.show({
      title: "Thành công!",
      message: message,
      color: "green",
      position: "bottom-right",
    }),
    error: (message: string | React.ReactNode) => notifications.show({
      title: "Lỗi!",
      message: message,
      color: "red",
      position: "bottom-right",
    }),
    warning: (message: string | React.ReactNode) => notifications.show({
      title: "Cảnh báo!",
      message: message,
      color: "yellow",
      position: "bottom-right",
    }),
  }
}