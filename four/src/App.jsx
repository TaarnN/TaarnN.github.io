import "./App.css";
import AntD from "./frameworks/antd";
import Bulma from "./frameworks/bulma";
import Evergreen from "./frameworks/evergreen";
import Mui from "./frameworks/mui";
import Other from "./frameworks/Other";

function App() {
  return (
    <div id="who">
      <h1 id="tt">
        Frameworks Showcase{"\n"}
        <p id="ds">
          Elements ที่จะเอามาแสดง : Button, Text Field และ Switch ( สี Primary
          ของแต่ละ Framework )
        </p>
      </h1>
      <hr id="mhr" style={{ marginTop: "1rem" }} />
      <div id="cntdiv" style={{ marginBottom: "5rem" }}>
        <AntD></AntD>
        <Bulma></Bulma>
        <Evergreen></Evergreen>
        <Mui></Mui>
        <Other></Other>
      </div>
    </div>
  );
}

export default App;
