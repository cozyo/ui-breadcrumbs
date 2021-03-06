import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bread-crumbs-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct class names', async function (assert) {
    await render(hbs `
      {{bread-crumbs-item
        className="class-name"
        itemClassName="item-class-name"
        linkClassName="link-class-name"
      }}

      {{#bread-crumbs-item as |linkClass|}}
        {{link-to "Foo" "foo" class=linkClass}}
      {{/bread-crumbs-item}}
    `);

    assert.ok(this.element.querySelector('.class-name .item-class-name .link-class-name'));
  });
});
