import { Button, TextInput, Switch } from "evergreen-ui";
import { useState } from "react";

export default function Evergreen() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <hr id="ushr" />
      <h1 id="ttt">Evergreen <a href="https://evergreen.segment.com">Go</a></h1>
      <hr id="shr" />
      <Button appearance="primary">Evergreen</Button>
      <br></br>
      <TextInput
        name="evergreen-textinput"
        placeholder="Evergreen"
        style={{ marginTop: "1rem", width: "12rem" }}
      ></TextInput>
      <br></br>
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        style={{ marginTop: "1rem" }}
      />
    </div>
  );
}
