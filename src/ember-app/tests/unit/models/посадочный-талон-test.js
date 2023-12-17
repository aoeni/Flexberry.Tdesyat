import { moduleForModel, test } from 'ember-qunit';

moduleForModel('посадочный-талон', 'Unit | Model | посадочный-талон', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tdesyat-место-на-рейс',
    'model:i-i-s-tdesyat-пассажир',
    'model:i-i-s-tdesyat-рейс',
    'model:информация-бронирования',
    'model:код-бронирования',
    'model:посадочный-талон',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
