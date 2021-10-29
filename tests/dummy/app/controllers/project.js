import Controller from '@ember/controller';

import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

	// Defaults

  router: service(),

	// Single line CP

  currentRouteName: computed.alias('router.currentRouteName')

	// Multiline CP

	// Lifecycle hooks

	// Private

});
