export function Card(props) {
  return (
    <div>
      <img src={props.img} alt="Exemplo" />
      <p>{props.children}</p>
    </div>
  );
}
