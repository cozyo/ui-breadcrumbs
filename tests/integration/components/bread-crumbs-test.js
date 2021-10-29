import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bread-crumbs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class name', async function (assert) {
    await render(hbs `{{bread-crumbs className="class-name"}}`);

    assert.ok(this.element.querySelector('.class-name'));
  });

  test('it renders multiple instances with the correct base class name', async function (assert) {
    await render(hbs `
      {{bread-crumbs className="class-name-1"}}
      {{bread-crumbs className="class-name-2"}}
    `);

    assert.ok(this.element.querySelector('.class-name-1'));
    assert.ok(this.element.querySelector('.class-name-2'));
  });
});
