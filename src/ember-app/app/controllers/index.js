import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tdesyat.caption'),
          title: i18n.t('forms.application.sitemap.tdesyat.title'),
          children: [{
            link: 'i-i-s-tdesyat-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-посад-талон-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-tdesyat-пассажир-l',
            caption: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-пассажир-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-tdesyat-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-место-на-рейс-l.title'),
            children: null
          }, {
            link: 'i-i-s-tdesyat-код-брони-l',
            caption: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-код-брони-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-tdesyat-рейс-l',
            caption: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tdesyat.i-i-s-tdesyat-рейс-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})