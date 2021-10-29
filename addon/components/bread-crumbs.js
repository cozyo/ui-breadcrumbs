import Component from '@ember/component';
import layout from '../templates/components/bread-crumbs';

import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  // Injections

  breadcrumbs: service(),

  // Props

  classNames: ['breadcrumbs', 'list-reset', 'flex'],
  itemClassName: 'breadcrumbs__item',
  linkClassName: 'breadcrumbs__link',

  // State

  layout,
  classNameBindings: ['className'],
  tagName: 'ul',

	// Single line CP

	// Multiline CP

	// Lifecycle hooks

  didInsertElement() {
    get(this, 'breadcrumbs.instances').addObject(this);
  },

  willDestroyElement() {
    get(this, 'breadcrumbs.instances').removeObject(this);
  }

  // Tasks

	// Private

});
