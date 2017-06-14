import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import AriaLinkToInitializer from 'ember-aria-components/initializers/aria-link-to';

moduleForComponent('aria-link-to', 'Integration | Component | aria-link-to', {
  integration: true,

  beforeEach() {
    AriaLinkToInitializer.initialize();
  }
});

test('it renders like a basic link-to', function(assert) {
  this.render(hbs`{{link-to 'regular inline' 'application'}}`);

  assert.equal(this.$('a.ember-view').text().trim(), 'regular inline');

  this.render(hbs`{{#link-to 'application'}}regular block{{/link-to}}`);

  assert.equal(this.$('a.ember-view').text().trim(), 'regular block');
});

test('it renders aria-label', function(assert) {
  this.render(hbs`{{link-to 'regular inline' 'application' aria-label='aria inline'}}`);

  assert.equal(this.$('a.ember-view').text().trim(), 'regular inline');
  assert.equal(this.$('a.ember-view').attr('aria-label'), 'aria inline');

  this.render(hbs`{{#link-to 'application' aria-label='aria block'}}regular block{{/link-to}}`);

  assert.equal(this.$('a.ember-view').text().trim(), 'regular block');
  assert.equal(this.$('a.ember-view').attr('aria-label'), 'aria block');
});