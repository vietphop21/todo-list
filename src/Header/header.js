import Grid from "@mui/material/Grid";
import { LOGO } from "../common";

export const Header = () => {
  return (
    <>
      <Grid container px={8} py={2} flexDirection="column" alignItems="center">
        <Grid item xs={12}>
          <img alt="notfound" className="logo" src={LOGO} />
        </Grid>

        <Grid item xs={12}>
          <strong style={{ color: "red", fontSize: "26px" }}>
            QUỸ BẢO HIỂM CS
          </strong>
        </Grid>
      </Grid>
    </>
  );
};