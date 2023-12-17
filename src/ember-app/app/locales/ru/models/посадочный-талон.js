export default {
  projections: {
    ПосадТалонE: {
      датаВыд: {
        __caption__: 'Дата выдачи'
      },
      пассажир: {
        __caption__: 'Пассажир',
        фИО: {
          __caption__: 'ФИО'
        },
        местоНаРейс: {
          __caption__: '',
          класс: {
            __caption__: 'Класс'
          },
          место: {
            __caption__: 'Место'
          }
        },
        кодБрони: {
          __caption__: '',
          код: {
            __caption__: 'Код бронирования'
          }
        }
      },
      рейс: {
        __caption__: 'Откуда',
        откуда: {
          __caption__: 'Откуда'
        },
        куда: {
          __caption__: 'Куда'
        },
        дата: {
          __caption__: 'Дата'
        },
        времяОтпр: {
          __caption__: 'Время отправления'
        },
        начПосад: {
          __caption__: 'Начало посадки'
        },
        конецПосад: {
          __caption__: 'Конец посадки'
        },
        выход: {
          __caption__: ''
        }
      }
    },
    ПосадТалонL: {
      датаВыд: {
        __caption__: 'Дата выдачи'
      },
      пассажир: {
        __caption__: 'ФИО',
        фИО: {
          __caption__: 'ФИО'
        }
      },
      рейс: {
        __caption__: 'Куда',
        куда: {
          __caption__: 'Куда'
        }
      }
    }
  },
  validations: {
    датаВыд: {
      __caption__: 'Дата выдачи'
    },
    пассажир: {
      __caption__: 'Пассажир'
    },
    рейс: {
      __caption__: 'Откуда'
    }
  }
};
