import React, { useState } from "react";
import { data } from "./data";
import ChevronDownIcon from "./chevron-down.svg";
import "./Accordian.css";

const Accordian = ({ title, multi = false }) => {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);

  const toggle = (index) => {
    if (multi == true) {
      toggleMulti(index);
    } else {
      toggleSingle(index);
    }
  };

  const toggleMulti = (index) => {
    if (multiSelected.includes(index)) {
      setMultiSelected(multiSelected.filter((item) => item != index));
      return;
    }
    setMultiSelected([...multiSelected, index]);
  };

  const toggleSingle = (index) => {
    if (selected == index) {
      setSelected(null);
      return;
    }

    setSelected(index);
  };

  return (
    <div className="accordian">
      <div className="heading">{title}</div>
      {data.map(({ title, content }, index) => {
        let showClass;

        if (multi == true) {
          showClass = multiSelected.includes(index) ? "show" : "";
        } else {
          showClass = selected == index ? "show" : "";
        }

        return (
          <div key={index} className="item">
            <div className="title" onClick={() => toggle(index)}>
              <span>{title}</span>
              <img className={`icon ${showClass}`} src={ChevronDownIcon} />
            </div>
            <div className={`container ${showClass}`}>
              <div className="content">{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
