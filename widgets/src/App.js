/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "We use React by creating components.",
  },
];
const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
