import React, { useEffect, useState } from "react";
import { Grid, Box, Avatar, useMediaQuery, Link } from "@mui/material";
import { cacheAvatarImage } from "../common";

export const ListAdmin = ({ adminData }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [avatars, setAvatars] = useState({});

  useEffect(() => {
    adminData?.forEach((admin, index) => {
      const key = admin.id;
      cacheAvatarImage(admin.avatar, key).then((cachedAvatar) => {
        setAvatars((prev) => ({ ...prev, [key]: cachedAvatar }));
      });
    });
  }, []);

  // useEffect(() => {
  //   console.log("avatar", avatars);
  // }, [adminData]);

  return (
    <Box
      mx={!isMobile ? 20 : 2.5}
      my={5}
      sx={{
        border: "1px solid #d7d71d",
        borderRadius: "16px",
        height: isMobile ? "2500px" : "1200px",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={2}
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
              gap={isMobile ? 3 : 1.5}
              height={80}
              sx={{ cursor: "pointer" }}
            >
              <Link
                href={admin.fb}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Avatar src={avatars[`avatar_${index}`] || admin.avatar} />
              </Link>{" "}
              <span>
                <Link
                  href={admin.fb}
                  target="_blank"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    display: "block",
                    textTransform: "capitalize",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  {admin.id}. {admin.name}
                </Link>
              </span>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
