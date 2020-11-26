"use strict";

var desc = document.querySelectorAll('.card__title_subtitle');

var _loop = function _loop(i) {
  desc[i].onclick = function () {
    if (desc[i].classList.contains('hidden')) {
      desc[i].classList.remove('hidden');
    }
  };
};

for (var i = 0; i < desc.length; i++) {
  _loop(i);
}