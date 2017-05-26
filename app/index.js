import _ from "lodash";
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.css';

console.log(moment().format());

function component () {
  var element = document.createElement('div');
  element.className = "alert alert-info";

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack','2'], ' ');

  return element;
}

document.body.appendChild(component());