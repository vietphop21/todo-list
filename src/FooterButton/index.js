import React from "react";
import { Button, Box, useMediaQuery, Link } from "@mui/material";
import { DOMAIN } from "../common";

export const FooterButton = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {isMobile && (
        <Box
          sx={{
            position: "fixed", // Đặt vị trí cố định
            bottom: 0, // Căn dưới cùng
            left: 0,
            right: 0,
            display: "flex", // Sử dụng flexbox
            justifyContent: "space-between", // Căn giữa các nút
            height: "40px",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ff0000", flex: 1, padding: "5px" }} // Màu đỏ
          >
            <Link
              href="https://checkscam-admin.io.vn/danh-sach-admin"
              style={{
                fontSize: "13px",
                textDecoration: "none",
                fontWeight: "bold",
                color: "white",
              }}
            >
              GỬI TỐ CÁO LỪA ĐẢO
            </Link>
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#008ff3", flex: 1, padding: "5px" }} // Màu xanh da trời
          >
            <Link
              href={`${DOMAIN}danh-sach-admin`}
              style={{
                fontSize: "13px",
                textDecoration: "none",
                fontWeight: "bold",
                color: "white",
              }}
            >
              CHECK QUỸ BẢO HIỂM
            </Link>
          </Button>
        </Box>
      )}
    </>
  );
};
