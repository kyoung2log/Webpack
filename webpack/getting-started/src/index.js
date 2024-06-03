import _ from 'lodash';
function component() {
  var element = document.createElement('dic');

  element.innerHTML = _.join(['hello', 'webpack']);

  return element;
}

document.body.appendChild(component());
