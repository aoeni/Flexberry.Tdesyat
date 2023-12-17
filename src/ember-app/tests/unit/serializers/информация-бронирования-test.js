import { moduleForModel, test } from 'ember-qunit';

moduleForModel('информация-бронирования', 'Unit | Serializer | информация-бронирования', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:информация-бронирования',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-tdesyat-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
