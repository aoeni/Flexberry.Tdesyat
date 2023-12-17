import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tdesyat-код-брони-l');
  this.route('i-i-s-tdesyat-код-брони-e',
  { path: 'i-i-s-tdesyat-код-брони-e/:id' });
  this.route('i-i-s-tdesyat-код-брони-e.new',
  { path: 'i-i-s-tdesyat-код-брони-e/new' });
  this.route('i-i-s-tdesyat-место-на-рейс-l');
  this.route('i-i-s-tdesyat-место-на-рейс-e',
  { path: 'i-i-s-tdesyat-место-на-рейс-e/:id' });
  this.route('i-i-s-tdesyat-место-на-рейс-e.new',
  { path: 'i-i-s-tdesyat-место-на-рейс-e/new' });
  this.route('i-i-s-tdesyat-пассажир-l');
  this.route('i-i-s-tdesyat-пассажир-e',
  { path: 'i-i-s-tdesyat-пассажир-e/:id' });
  this.route('i-i-s-tdesyat-пассажир-e.new',
  { path: 'i-i-s-tdesyat-пассажир-e/new' });
  this.route('i-i-s-tdesyat-посад-талон-l');
  this.route('i-i-s-tdesyat-посад-талон-e',
  { path: 'i-i-s-tdesyat-посад-талон-e/:id' });
  this.route('i-i-s-tdesyat-посад-талон-e.new',
  { path: 'i-i-s-tdesyat-посад-талон-e/new' });
  this.route('i-i-s-tdesyat-рейс-l');
  this.route('i-i-s-tdesyat-рейс-e',
  { path: 'i-i-s-tdesyat-рейс-e/:id' });
  this.route('i-i-s-tdesyat-рейс-e.new',
  { path: 'i-i-s-tdesyat-рейс-e/new' });
});

export default Router;
