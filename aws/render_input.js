'use strict';

import { Template } from 'meteor/templating';

import './render.html';

module.exports = function render_input (values) {
  values = values || {};
  return '{{> render}}';
};
