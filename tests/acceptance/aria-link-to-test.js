import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | aria-link-to');

test('it renders aria-current value if defined & active', function(assert) {
  visit('/arialinkto');

  andThen(function() {
    assert.equal(currentURL(), '/arialinkto');

    // Inline
    assert.equal(find('#inline > .aria-link-to-active > a').attr('aria-current').trim(), 'step');
    assert.equal(find('#inline > .aria-link-to > a').attr('aria-current').trim(), 'false');

    // Block
    assert.equal(find('#block > .aria-link-to-active > a').attr('aria-current').trim(), 'step');
    assert.equal(find('#block > .aria-link-to > a').attr('aria-current').trim(), 'false');
  });
});

test('it renders aria-current deactivated value if defined & not active', function(assert) {
  visit('/arialinkto');

  andThen(function() {
    assert.equal(currentURL(), '/arialinkto');

    // Inline
    assert.equal(find('#inline > .aria-link-to-unactive > a').attr('aria-current').trim(), 'false');

    // Block
    assert.equal(find('#block > .aria-link-to-unactive > a').attr('aria-current').trim(), 'false');
  });
});

test('it renders aria-current default if not defined & active', function(assert) {
  visit('/arialinkto');

  andThen(function() {
    assert.equal(currentURL(), '/arialinkto');

    // Inline
    assert.equal(find('#inline > .aria-link-to-active-default > a').attr('aria-current').trim(), 'page');

    // Block
    assert.equal(find('#block > .aria-link-to-active-default > a').attr('aria-current').trim(), 'page');
  });
});

test('it renders aria-current deactivated value if not defined & not active', function(assert) {
  visit('/arialinkto');

  andThen(function() {
    assert.equal(currentURL(), '/arialinkto');

    // Inline
    assert.equal(find('#inline > .aria-link-to > a').attr('aria-current').trim(), 'false');

    // Block
    assert.equal(find('#block > .aria-link-to > a').attr('aria-current').trim(), 'false');
  });
});