import "./style.modules.css";
export function Button(props) {
  return (
    <button className="btn" onClick={props.clickFunction}>
      {props.children}
    </button>
  );
}
