import _ from "lodash";
import "./style.css";
import dramaPotatoFile from "./dramapotato.png";
import Data from "./data.xml";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hey", "webpack"], " ");
  element.classList.add("hello");

  const dramaPotatoImage = new Image();
  dramaPotatoImage.src = dramaPotatoFile;
  element.appendChild(dramaPotatoImage);

  console.log(Data);
  return element;
}

document.body.appendChild(component());
