import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
import IISTdesyatИнфБроньModel from './models/i-i-s-tdesyat-инф-бронь';
import IISTdesyatКодБрониModel from './models/i-i-s-tdesyat-код-брони';
import IISTdesyatМестоНаРейсModel from './models/i-i-s-tdesyat-место-на-рейс';
import IISTdesyatПассажирModel from './models/i-i-s-tdesyat-пассажир';
import IISTdesyatПосадТалонModel from './models/i-i-s-tdesyat-посад-талон';
import IISTdesyatРейсModel from './models/i-i-s-tdesyat-рейс';
import Информация бронированияModel from './models/информация-бронирования';
import Код бронированияModel from './models/код-бронирования';
import Посадочный талонModel from './models/посадочный-талон';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tdesyat-инф-бронь': IISTdesyatИнфБроньModel,
    'i-i-s-tdesyat-код-брони': IISTdesyatКодБрониModel,
    'i-i-s-tdesyat-место-на-рейс': IISTdesyatМестоНаРейсModel,
    'i-i-s-tdesyat-пассажир': IISTdesyatПассажирModel,
    'i-i-s-tdesyat-посад-талон': IISTdesyatПосадТалонModel,
    'i-i-s-tdesyat-рейс': IISTdesyatРейсModel,
    'информация-бронирования': Информация бронированияModel,
    'код-бронирования': Код бронированияModel,
    'посадочный-талон': Посадочный талонModel
  },

  'application-name': 'Терминал регистрации на авиарейс',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Терминал регистрации на авиарейс',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Терминал регистрации на авиарейс',
          title: 'Tdesyat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
