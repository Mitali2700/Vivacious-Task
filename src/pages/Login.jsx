import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import login from "./bg/login.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

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

export default function Login() {
  const [remember, setRemember] = useState(false);
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
          Successfully Logged In!
        </MuiAlert>
      </Snackbar>
      <Box sx={boxstyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Box
              style={{
                backgroundImage: `url(${login})`,
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
                    Login
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
                      Username
                    </InputLabel>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Enter your email"
                      name="email"
                      autoComplete="email"
                      InputProps={{
                        endAdornment: <PersonOutlineIcon color="action" />,
                      }}
                      variant="outlined"
                      sx={{
                        bgcolor: "#F1EAFF",
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
                  <Grid item xs={12}>
                    <InputLabel
                      htmlFor="password"
                      style={{
                        color: "#545d8e",
                        marginBottom: "8px",
                        marginTop: "20px",
                        fontSize: "1rem",
                      }}
                    >
                      Password
                    </InputLabel>
                    <TextField
                      required
                      fullWidth
                      id="password"
                      label="Enter Password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      variant="outlined"
                      sx={{
                        bgcolor: "#F1EAFF",
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

                  <Grid
                    item
                    xs={12}
                    sx={{
                      mt: "18px",
                      justifyContent: "space-between",
                      ml: "5px",
                    }}
                    container
                    spacing={2}
                  >
                    <FormControlLabel
                      control={<Checkbox checked={remember} />}
                      label="Remember me"
                    />
                    <Typography
                      variant="body1"
                      component="span"
                      onClick={() => {
                        navigate("/reset-password");
                      }}
                      style={{
                        cursor: "pointer",
                        color: "#711DB0",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      Forget Password
                    </Typography>
                  </Grid>
                  <Grid sx={center} item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      sx={{
                        mt: "10px",
                        borderRadius: 2,
                        color: "#ffffff",
                        backgroundColor: "#711DB0",
                        "&:hover": {
                          minWidth: "100px",
                          color: "#711DB0",
                          backgroundColor: "#F1EAFF",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      Sign In
                    </Button>
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
