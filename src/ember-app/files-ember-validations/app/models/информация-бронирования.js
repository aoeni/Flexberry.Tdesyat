import {
  defineProjections,
  Model as ИнфБроньMixin
} from '../mixins/regenerated/models/информация-бронирования';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнфБроньMixin, {
});

defineProjections(Model);

export default Model;
