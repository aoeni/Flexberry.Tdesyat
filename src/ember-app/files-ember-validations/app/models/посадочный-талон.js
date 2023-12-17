import {
  defineProjections,
  Model as ПосадТалонMixin
} from '../mixins/regenerated/models/посадочный-талон';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПосадТалонMixin, {
});

defineProjections(Model);

export default Model;
