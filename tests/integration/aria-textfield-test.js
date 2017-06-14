import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import AriaTextFieldInitializer from 'ember-aria-components/initializers/aria-textfield';

moduleForComponent('aria-textfield', 'Integration | Component | aria-textfield', {
  integration: true,

  beforeEach() {
    AriaTextFieldInitializer.initialize();
  }
});

test('it renders like a basic textfield', function(assert) {
  this.render(hbs`{{input title='regular title' value='regular value'}}`);

  assert.equal(this.$('.ember-text-field').val(), 'regular value');
  assert.equal(this.$('.ember-text-field').attr('title'), 'regular title');
});

test('it renders aria-label', function(assert) {
  this.render(hbs`{{input aria-label='accessible label' value='regular value'}}`);

  assert.equal(this.$('.ember-text-field').val(), 'regular value');
  assert.equal(this.$('.ember-text-field').attr('aria-label'), 'accessible label');
});