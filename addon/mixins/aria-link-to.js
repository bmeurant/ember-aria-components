import Ember from 'ember';

const { Mixin, computed, get} = Ember;
const defaultAriaCurrentValue = 'page';
const ariaCurrentDeactivatedValue = 'false';

export default Mixin.create({
  attributeBindings: ['aria-label', 'ariaCurrent:aria-current'],

  ariaCurrent: computed('active', function computeAriaLabel() {
    let value = ariaCurrentDeactivatedValue;
    
    if (get(this, 'active')) {
      value = this.get('aria-current') || defaultAriaCurrentValue;
    }
    return value;
  })
});