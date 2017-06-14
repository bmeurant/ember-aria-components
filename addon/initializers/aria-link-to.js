import Ember from 'ember';
import AriaLinkToMixin from '../mixins/aria-link-to';

const { LinkComponent } = Ember;

export function initialize() {
  LinkComponent.reopen(AriaLinkToMixin);
}

export default {
  name: 'aria-link-to',
  initialize
};

