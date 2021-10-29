import Route from '@ember/routing/route';

export default Route.extend({

	// Defaults

	// Single line CP

	// Multiline CP

	// Lifecycle hooks

  model() {
    return [{
      id: 1,
      title: 'Event One'
    }, {
      id: 2,
      title: 'Event Two'
    }, {
      id: 3,
      title: 'Event Three'
    }]
  }

	// Private

});
