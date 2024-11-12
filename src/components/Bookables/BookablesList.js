import { bookables } from "../../static.json";

export default function BookablesList() {
  const group = "Rooms";

  const bookableInGroup = bookables.filter((b) => b.group === group);

  const bookableIndex = 1;

  return (
    <ul className="bookables items-list-nav">
      {bookableInGroup.map((b, i) => (
        <li key={b.id} className={i === bookableIndex ? "selected" : null}>
          <button className="btn">{b.title}</button>
        </li>
      ))}
    </ul>
  );
}
