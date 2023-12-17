import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tdesyat-пассажир', 'Unit | Serializer | i-i-s-tdesyat-пассажир', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tdesyat-пассажир',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-tdesyat-класс-билета',

    'model:i-i-s-tdesyat-инф-бронь',
    'model:i-i-s-tdesyat-код-брони',
    'model:i-i-s-tdesyat-место-на-рейс',
    'model:i-i-s-tdesyat-пассажир',
    'model:i-i-s-tdesyat-посад-талон',
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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
