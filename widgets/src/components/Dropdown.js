import React, { useEffect, useRef, useState } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = props.options
    .filter((x) => x.value !== props.selected.value)
    .map((o) => {
      return (
        <div
          key={o.value}
          className="item"
          onClick={() => {
            props.onSelect(o);
          }}
        >
          {o.label}
        </div>
      );
    });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{props.label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
