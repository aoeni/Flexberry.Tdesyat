import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КлассБилетаEnum from '../enums/i-i-s-tdesyat-класс-билета';

export default FlexberryEnum.extend({
  enum: КлассБилетаEnum,
  sourceType: 'IIS.Tdesyat.КлассБилета'
});
