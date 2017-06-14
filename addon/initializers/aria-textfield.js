import Ember from 'ember';

const { TextField } = Ember;

export function initialize() {
  TextField.reopen({
    attributeBindings: ['aria-label'],
  });
}

export default {
  name: 'aria-textfield',
  initialize
};

