/// <reference path='./index.d.ts'/>

import * as React from "react";
import * as ReactDOM from "react-dom";
require("./main.css");

import { Hello} from "./components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("app")
);