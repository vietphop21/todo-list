import React from "react";
import { Grid, Box, Avatar, useMediaQuery } from "@mui/material";

const listAdmin = [
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
    avatar:
      "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/463991029_122185182920232095_2921612347140824270_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=827vd6GptdcQ7kNvgF120IW&_nc_ht=scontent.fhan14-1.fna&_nc_gid=ApavwMMuS95Qs415MUKdedF&oh=00_AYCQMYyFHnacdVGCpfVTxMRDtZCwVdPTNYG0e5ao_N-8Mg&oe=671D9A05",
  },
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
    avatar:
      "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/463991029_122185182920232095_2921612347140824270_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=827vd6GptdcQ7kNvgF120IW&_nc_ht=scontent.fhan14-1.fna&_nc_gid=ApavwMMuS95Qs415MUKdedF&oh=00_AYCQMYyFHnacdVGCpfVTxMRDtZCwVdPTNYG0e5ao_N-8Mg&oe=671D9A05",
  },
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
    avatar:
      "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/463991029_122185182920232095_2921612347140824270_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=827vd6GptdcQ7kNvgF120IW&_nc_ht=scontent.fhan14-1.fna&_nc_gid=ApavwMMuS95Qs415MUKdedF&oh=00_AYCQMYyFHnacdVGCpfVTxMRDtZCwVdPTNYG0e5ao_N-8Mg&oe=671D9A05",
  },
  {
    name: "Viết Phốp Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
  },
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
  },
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
  },
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
  },
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
  },
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
  },
  {
    name: "Viết Phốp",
    facebook: "https://www.facebook.com/ZoeeVP2001",
    role: "all",
  },
];

export const ListAdmin = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      mx={!isMobile ? 20 : 0}
      my={5}
      sx={{
        border: "1px solid #d7d71d",
        height: "600px",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={2}
      >
        {listAdmin.map((admin, index) => (
          <Grid
            item
            xs={3}
            sm={1}
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1.5}
            height={!isMobile ? 16 : 80}
          >
            <Avatar src={admin?.avatar} />
            <span
              style={{
                display: "block",
                color: "#000",
                textTransform: "capitalize",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              {index + 1}. {admin.name}
            </span>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
