import "bulma/css/bulma.min.css";

export default function Bulma() {
  return (
    <div>
      <hr id="ushr" />
      <h1 id="ttt">Bulma <a href="https://bulma.io">Go</a></h1>
      <hr id="shr" />
      <button className="button is-primary">Bulma</button>
      <br></br>
      <input
        className="input"
        type="text"
        placeholder="Bulma"
        style={{ marginTop: "1rem", width: "12rem" }}
      />
      <br></br>
      <h5 style={{ marginTop: "1rem", color: "gray" }}>
        ( ขออภัย ไม่พบ Switch ของ Bulma )
      </h5>
    </div>
  );
}
