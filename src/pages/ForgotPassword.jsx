import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import reset from "./bg/reset.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
};

const center = {
  textAlign: "center",
};

export default function ForgotPassword() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          Successfully Password Reset!
        </MuiAlert>
      </Snackbar>
      <Box sx={boxstyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Box
              style={{
                backgroundImage: `url(${reset})`,
                backgroundSize: "cover",
                height: "70vh",
                color: "#f5f5f5",
                borderRadius: "10px 0 0 10px",
              }}
            ></Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box
              style={{
                backgroundSize: "cover",
                height: "70vh",
                minHeight: "500px",
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0 10px 10px 0",
              }}
            >
              <Container maxWidth="sm">
                <Box sx={center}>
                  <Typography
                    component="h1"
                    variant="h4"
                    style={{ fontWeight: "bold", marginBottom: "20px" }}
                  >
                    Forget Password
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel
                      htmlFor="email"
                      style={{
                        color: "#545d8e",
                        marginBottom: "8px",
                        fontSize: "1rem",
                      }}
                    >
                      Email
                    </InputLabel>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Enter email"
                      name="email"
                      autoComplete="email"
                      InputProps={{
                        endAdornment: <MailOutlineIcon color="action" />,
                      }}
                      variant="outlined"
                      sx={{
                        bgcolor: "#D2E0FB",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "black",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "black",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black",
                        },
                      }}
                    />
                  </Grid>

                  <Grid sx={center} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      sx={{
                        mt: "20px",
                        mb: "20px",
                        borderRadius: 2,
                        color: "#ffffff",
                        backgroundColor: "#0C359E",
                        "&:hover": {
                          minWidth: "100px",
                          color: "#711DB0",
                          backgroundColor: "#F1EAFF",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                  <Grid sx={center} item xs={12}>
                    <div>
                      Don't want to reset?
                      <Typography
                        variant="body1"
                        component="span"
                        onClick={() => {
                          navigate("/reset-password");
                        }}
                        style={{
                          cursor: "pointer",
                          color: "#0C359E",
                          fontWeight: "bold",
                          marginLeft: "5px",
                        }}
                      >
                        Login
                      </Typography>{" "}
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
