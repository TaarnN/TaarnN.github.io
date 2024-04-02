import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
export default function Mui() {
  return (
    <div>
      <hr id="ushr" />
      <h1 id="ttt">
        MUI ( Google ) <a href="https://mui.com/material-ui/">Go</a>
      </h1>
      <hr id="shr" />
      <Button variant="contained" color="primary">
        MUI
      </Button>
      <br></br>
      <TextField
        id="muitextfield"
        label="MUI"
        variant="outlined"
        sx={{ marginTop: "1rem", width: "12rem" }}
        size="small"
      />
      <br></br>
      <Switch defaultChecked sx={{ marginTop: "1rem" }} />
    </div>
  );
}
