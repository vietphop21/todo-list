import React from "react";
import { Grid, Box, Avatar, useMediaQuery, Link } from "@mui/material";
import { dataAdmin } from "../common";

export const ListAdmin = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      mx={!isMobile ? 20 : 5}
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
        {dataAdmin.map((admin, index) => (
          <Grid
            item
            xs={3}
            sm={1.5}
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1.5}
            height={!isMobile ? 80 : 80}
            sx={{ cursor: "pointer" }}
          >
            <Avatar src={admin?.avatar} />
            <span style={{}}>
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
                {index + 1}. {admin.name}
              </Link>
            </span>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
