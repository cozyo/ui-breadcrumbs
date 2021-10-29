import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('project', function() {
    this.route('index', { path: '/' });
    this.route('detail', { path: '/:project_id' });
    this.route('update', { path: '/:project_id/update' });
    this.route('new');
  });
});

export default Router;
