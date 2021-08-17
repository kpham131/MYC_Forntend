import { flexbox } from "@material-ui/system";
import { Typography, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
// import Montserrat from "../../util/styles/fonts/Montserrat-ExtraBold.tff";
export default function Landing() {
  document.body.style = "background:cyan";
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
  });
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <flexbox>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className="pt-5" align="center">
              MISSED YOUR CALL
            </Typography>
          </ThemeProvider>
        </flexbox>
      </Grid>
      <Grid item xs={6}>
        <flexbox>...</flexbox>
      </Grid>
      <Grid item xs={6}>
        <flexbox>Agency</flexbox>
      </Grid>
      <Grid item xs={12}>
        <flexbox>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              className="pt-3"
              align="center"
              style={{ whiteSpace: "pre" }}
            >
              E S T 2 0 1 9
            </Typography>
          </ThemeProvider>
        </flexbox>
      </Grid>
      <Grid item xs={12}>
        <flexbox>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              className="pt-5"
              align="center"
              style={{ whiteSpace: "pre" }}
            >
              - Welcome to your choice -
            </Typography>
          </ThemeProvider>
        </flexbox>
      </Grid>
      <Grid item xs={12}>
        <flexbox>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              className="pt-5"
              align="center"
              style={{ whiteSpace: "pre" }}
            >
              _____________
            </Typography>
          </ThemeProvider>
        </flexbox>
      </Grid>
      <Grid item xs={12}>
        <flexbox>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              className="pt-1 pb-0"
              align="center"
              style={{ whiteSpace: "pre" }}
            >
              Public Store
            </Typography>
          </ThemeProvider>
        </flexbox>
      </Grid>
      <Grid item xs={12}>
        <flexbox>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              className="pt-1"
              align="center"
              style={{ whiteSpace: "pre" }}
            >
              _____________
            </Typography>
          </ThemeProvider>
        </flexbox>
      </Grid>
      <Grid item xs={12}>
        <flexbox>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              className="pt-2"
              align="center"
              style={{ whiteSpace: "pre" }}
            >
              Design Your Own
            </Typography>
          </ThemeProvider>
        </flexbox>
      </Grid>
    </Grid>
  );
}
