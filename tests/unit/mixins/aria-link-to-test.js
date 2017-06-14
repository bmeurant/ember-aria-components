import Ember from 'ember';
import AriaLinkToMixin from 'ember-aria-components/mixins/aria-link-to';
import { moduleFor, test } from 'ember-qunit';

moduleFor('mixin:aria-link-to', 'Unit | Mixin | Aria Link To', {
  subject() {
    return Ember.Object.extend(AriaLinkToMixin).create();
  }
});

test('it should set ariaCurrent to false if unactive', function(assert) {
  assert.equal(this.subject().get('ariaCurrent'), 'false');

  this.subject = Ember.Object.extend(AriaLinkToMixin).create({'active': false});
  assert.equal(this.subject.get('ariaCurrent'), 'false');
});

test('it should set ariaCurrent to default if active', function(assert) {
  this.subject = Ember.Object.extend(AriaLinkToMixin).create({'active': true});
  assert.equal(this.subject.get('ariaCurrent'), 'page');
});

test('it should set ariaCurrent to default depending on active if undefined', function(assert) {
  Ember.run(() => {
    this.subject().set('active', true);
  });

  assert.equal(this.subject().get('ariaCurrent'), 'page');

  Ember.run(() => {
    this.subject().set('active', false);
  });

  assert.equal(this.subject().get('ariaCurrent'), 'false');
});

test('it should set ariaCurrent depending on active if defined', function(assert) {
  this.subject().set('aria-current', 'step');

  Ember.run(() => {
    this.subject().set('active', true);
  });
  
  assert.equal(this.subject().get('ariaCurrent'), 'step');

  Ember.run(() => {
    this.subject().set('active', false);
  });

  assert.equal(this.subject().get('ariaCurrent'), 'false');
});