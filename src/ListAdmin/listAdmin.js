import React, { useEffect, useRef, useState } from "react";
import { Grid, Box, Avatar, useMediaQuery, Link } from "@mui/material";
import { cacheAvatarImage, dataAdmin, LOGO } from "../common";

export const ListAdmin = ({ adminData = dataAdmin }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isInitialized, setIsInitialized] = useState(false);
  const [height, setHeight] = useState(isMobile ? "1500px" : "2800px");
  const ref = useRef(null);

  const [avatars, setAvatars] = useState({});
  console.log(height);
  useEffect(() => {
    if (!isInitialized) {
      dataAdmin?.forEach((admin) => {
        const key = admin.id;
        cacheAvatarImage(admin.avatar, key).then((cachedAvatar) => {
          setAvatars((prev) => ({ ...prev, [key]: cachedAvatar }));
        });
      });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    let arrImage = [];
    adminData?.forEach((item) => {
      const key = item.id;
      const cachedImage = localStorage.getItem(key);
      arrImage.push(cachedImage);
    });
    setAvatars(arrImage);
  }, [adminData]);

  useEffect(() => {
    setHeight(`${ref?.current?.clientHeight + 15}px`);
    console.log(ref);
  }, [adminData]);

  return (
    <>
      <Box
        mx={!isMobile ? 20 : 1.5}
        mt={5}
        sx={{
          border: "1px solid #d7d71d",
          borderRadius: "16px",
          height: height,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          gap={2}
          mt={2}
          ref={ref}
        >
          {adminData?.length > 0 &&
            adminData?.map((admin, index) => (
              <Grid
                item
                xs={3}
                sm={1.5}
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1.5}
                height={90}
                sx={{ cursor: "pointer" }}
              >
                <Link
                  href={admin.fb}
                  style={{ textDecoration: "none" }}
                >
                  <Avatar src={avatars[index] || admin.avatar} />
                </Link>
                <span>
                  <Link
                    href={admin.fb}
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      display: "block",
                      textTransform: "capitalize",
                      textAlign: "center",
                      fontSize: "12px",
                    }}
                  >
                    {index + 1}. {admin.name}
                  </Link>
                </span>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={2}
        mb={5}
      >
        <Grid item xs={12}>
          <p>
            <img alt="notfound" className="logo" src={LOGO} />
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            <Link
              style={{ textDecoration: "none" }}
              href="https://checkscam.vn/lien-he/?_gl=1*vc5886*_ga*MTkzODA4MDAwNy4xNzI1ODA1MTcy*_ga_8WTQQ9LFJB*MTcyOTc3NTcxNi43LjEuMTcyOTc3NjcyMC4yNi4wLjE4MjY5NDgwODk"
            >
              Liên hệ AD
            </Link>{" "}
            |{" "}
            <Link
              style={{ textDecoration: "none" }}
              href="https://checkscam.vn/marketing/?_gl=1*vc5886*_ga*MTkzODA4MDAwNy4xNzI1ODA1MTcy*_ga_8WTQQ9LFJB*MTcyOTc3NTcxNi43LjEuMTcyOTc3NjcyMC4yNi4wLjE4MjY5NDgwODk"
            >
              Quảng cáo
            </Link>
          </p>
        </Grid>

        <Grid item xs={12}>
          <p>
            <Link
              style={{ textDecoration: "none" }}
              href="https://admin.checkscam.vn/dieu-khoan-admin/"
            >
              Đăng kí bảo hiểm{" "}
            </Link>{" "}
            ★{" "}
            <Link
              style={{ textDecoration: "none" }}
              href="https://admin.checkscam.vn/noi-quy-giao-dich/"
            >
              Nội quy box giao dịch
            </Link>
          </p>
        </Grid>
      </Grid>
    </>
  );
};
