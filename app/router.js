import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('boardrooms', function () {
    this.route('boardroom', {path: ':boardroom_id'});
    this.route('book', {path: ':boardroom_id/book'});
  });
  this.route('employees', function () {
    this.route('employee', {path: ':employee_id'});
    this.route('new');
    this.route('edit', {path: ':employee_id/edit'});
  });
  this.route('test');
});

export default Router;
