import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВыд: DS.attr('date'),
  пассажир: DS.belongsTo('i-i-s-tdesyat-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-tdesyat-рейс', { inverse: null, async: false })
});

export let ValidationRules = {
  датаВыд: {
    descriptionKey: 'models.посадочный-талон.validations.датаВыд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  пассажир: {
    descriptionKey: 'models.посадочный-талон.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.посадочный-талон.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосадТалонE', 'посадочный-талон', {
    датаВыд: attr('Дата выдачи', { index: 0 }),
    пассажир: belongsTo('i-i-s-tdesyat-пассажир', 'Пассажир', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      местоНаРейс: belongsTo('i-i-s-tdesyat-место-на-рейс', '', {
        класс: attr('Класс', { index: 5 }),
        место: attr('Место', { index: 6 })
      }, { index: -1, hidden: true }),
      кодБрони: belongsTo('код-бронирования', '', {
        код: attr('Код бронирования', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    рейс: belongsTo('i-i-s-tdesyat-рейс', 'Откуда', {
      откуда: attr('Откуда', { index: 3 }),
      куда: attr('Куда', { index: 4, hidden: true }),
      дата: attr('Дата', { index: 9 }),
      времяОтпр: attr('Время отправления', { index: 10 }),
      начПосад: attr('Начало посадки', { index: 11 }),
      конецПосад: attr('Конец посадки', { index: 12 }),
      выход: attr('', { index: 13 })
    }, { index: 8 })
  });

  modelClass.defineProjection('ПосадТалонL', 'посадочный-талон', {
    датаВыд: attr('Дата выдачи', { index: 0 }),
    пассажир: belongsTo('i-i-s-tdesyat-пассажир', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    рейс: belongsTo('i-i-s-tdesyat-рейс', 'Куда', {
      куда: attr('Куда', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
