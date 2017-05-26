import _ from "lodash";

var moment = require('moment');
console.log(moment().format());

function component () {
  var element = document.createElement('div');
  element.className = "alert alert-info";

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());