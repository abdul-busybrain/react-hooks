import { Fragment, useState } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa";

const { bookables } = data;

export default function BookablesList() {
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(1);
  const groups = [...new Set(bookables.map((b) => b.group))];

  const bookable = bookablesInGroup[bookableIndex];

  const [hasDetails, setHasDetails] = useState(false);

  /**
   * // Create a handler function to  respond to group selection.
  // Update the group

// Select the first bookable in the new group.
// Specify the new function as the onChange handler
   */

  function changeGroup(event) {
    setGroup(event.target.value);
    setBookableIndex(0);
  }

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  }

  return (
    <Fragment>
      <div>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          {groups.map((g) => (
            <option value={g} key={g} onChange={changeGroup}>
              {g}
            </option>
          ))}
        </select>
        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : null}>
              <button className="btn" onClick={() => setBookableIndex(i)}>
                {b.title}
              </button>
            </li>
          ))}
        </ul>

        <p>
          <button className="btn" onClick={nextBookable} autoFocus>
            <FaArrowRight />
            <span>Next</span>
          </button>
        </p>
      </div>

      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails((has) => !has)}
                  />
                  Show Details
                </label>
              </span>
            </div>

            <p>{bookable.notes}</p>
            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    Days
                    {bookable.days.sort().map((d) => (
                      <li key={d}>{bookable.days[d]}</li>
                    ))}
                  </ul>
                  <ul>
                    Sessions
                    {bookable.sessions.map((s) => (
                      <li key={s}>{bookable.sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
