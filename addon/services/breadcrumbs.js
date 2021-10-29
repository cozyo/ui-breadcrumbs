import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({

  // Injections

  // Props

  // State

  instances: null,

	// Single line CP

	// Multiline CP

	// Lifecycle hooks

  init() {
    this._super(...arguments);

    this.instances = A([]);
  }

  // Tasks

	// Private

});
