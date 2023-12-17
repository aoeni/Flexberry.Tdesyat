import {
  defineProjections,
  Model as КодБрониMixin
} from '../mixins/regenerated/models/код-бронирования';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КодБрониMixin, {
});

defineProjections(Model);

export default Model;
