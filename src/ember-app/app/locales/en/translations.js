import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTdesyatКодБрониLForm from './forms/i-i-s-tdesyat-код-брони-l';
import IISTdesyatМестоНаРейсLForm from './forms/i-i-s-tdesyat-место-на-рейс-l';
import IISTdesyatПассажирLForm from './forms/i-i-s-tdesyat-пассажир-l';
import IISTdesyatПосадТалонLForm from './forms/i-i-s-tdesyat-посад-талон-l';
import IISTdesyatРейсLForm from './forms/i-i-s-tdesyat-рейс-l';
import IISTdesyatКодБрониEForm from './forms/i-i-s-tdesyat-код-брони-e';
import IISTdesyatМестоНаРейсEForm from './forms/i-i-s-tdesyat-место-на-рейс-e';
import IISTdesyatПассажирEForm from './forms/i-i-s-tdesyat-пассажир-e';
import IISTdesyatПосадТалонEForm from './forms/i-i-s-tdesyat-посад-талон-e';
import IISTdesyatРейсEForm from './forms/i-i-s-tdesyat-рейс-e';
import IISTdesyatМестоНаРейсModel from './models/i-i-s-tdesyat-место-на-рейс';
import IISTdesyatПассажирModel from './models/i-i-s-tdesyat-пассажир';
import IISTdesyatРейсModel from './models/i-i-s-tdesyat-рейс';
import Информация бронированияModel from './models/информация-бронирования';
import Код бронированияModel from './models/код-бронирования';
import Посадочный талонModel from './models/посадочный-талон';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tdesyat-место-на-рейс': IISTdesyatМестоНаРейсModel,
    'i-i-s-tdesyat-пассажир': IISTdesyatПассажирModel,
    'i-i-s-tdesyat-рейс': IISTdesyatРейсModel,
    'информация-бронирования': Информация бронированияModel,
    'код-бронирования': Код бронированияModel,
    'посадочный-талон': Посадочный талонModel
  },

  'application-name': 'Терминал регистрации на авиарейс',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Терминал регистрации на авиарейс',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Терминал регистрации на авиарейс',
          title: 'Терминал регистрации на авиарейс'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        tdesyat: {
          caption: 'Tdesyat',
          title: 'Tdesyat',
          'i-i-s-tdesyat-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          },
          'i-i-s-tdesyat-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          },
          'i-i-s-tdesyat-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-tdesyat-код-брони-l': {
            caption: 'Код брони',
            title: ''
          },
          'i-i-s-tdesyat-рейс-l': {
            caption: 'Рейс',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tdesyat-код-брони-l': IISTdesyatКодБрониLForm,
    'i-i-s-tdesyat-место-на-рейс-l': IISTdesyatМестоНаРейсLForm,
    'i-i-s-tdesyat-пассажир-l': IISTdesyatПассажирLForm,
    'i-i-s-tdesyat-посад-талон-l': IISTdesyatПосадТалонLForm,
    'i-i-s-tdesyat-рейс-l': IISTdesyatРейсLForm,
    'i-i-s-tdesyat-код-брони-e': IISTdesyatКодБрониEForm,
    'i-i-s-tdesyat-место-на-рейс-e': IISTdesyatМестоНаРейсEForm,
    'i-i-s-tdesyat-пассажир-e': IISTdesyatПассажирEForm,
    'i-i-s-tdesyat-посад-талон-e': IISTdesyatПосадТалонEForm,
    'i-i-s-tdesyat-рейс-e': IISTdesyatРейсEForm
  },

});

export default translations;
