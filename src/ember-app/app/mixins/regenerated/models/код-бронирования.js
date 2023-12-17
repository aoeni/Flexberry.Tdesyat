import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.код-бронирования.validations.код.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КодБрониE', 'код-бронирования', {
    код: attr('Код', { index: 0 })
  });

  modelClass.defineProjection('КодБрониL', 'код-бронирования', {
    код: attr('Код', { index: 0 })
  });
};
