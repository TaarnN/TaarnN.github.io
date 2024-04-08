import { Button, Input, Switch } from "antd";
import "./ttt.css";

export default function AntD() {
  return (
    <div>
      <h1 id="ttt">Ant Design <a href="https://ant.design">Go</a></h1>
      <hr id="shr" />
      <Button type="primary">Ant Design</Button>
      <br></br>
      <Input
        size="medium"
        placeholder="Ant Design"
        style={{ width: "12rem", marginTop: "1rem" }}
      ></Input>
      <br></br>
      <Switch defaultChecked style={{ marginTop: "1rem" }} />
    </div>
  );
}
