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
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", flex: 1 }} // Màu đỏ
          >
            <Link
              href="https://checkscam.vn/to-cao-lua-dao/?_gl=1*lf4aqc*_ga*MTkzODA4MDAwNy4xNzI1ODA1MTcy*_ga_8WTQQ9LFJB*MTcyOTc3NTcxNi43LjEuMTcyOTc3NzYyMC41Ni4wLjE4MjY5NDgwODk."
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
            sx={{ backgroundColor: "skyblue", flex: 1 }} // Màu xanh da trời
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
