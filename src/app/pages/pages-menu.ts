import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'layout-outline',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  {
    title: 'REPORTES',
    group: true,
  },
  {
    title: 'Gestión',
    icon: 'pie-chart-outline',
    link: '/pages/gestion',
    // children: [
    //   {
    //     title: 'Stepper',
    //     link: '/pages/layout/stepper',
    //   },
    //   {
    //     title: 'List',
    //     link: '/pages/layout/list',
    //   },
    //   {
    //     title: 'Infinite List',
    //     link: '/pages/layout/infinite-list',
    //   },
    //   {
    //     title: 'Accordion',
    //     link: '/pages/layout/accordion',
    //   },
    //   {
    //     title: 'Tabs',
    //     pathMatch: 'prefix',
    //     link: '/pages/layout/tabs',
    //   },
    // ],
  },
  {
    title: 'PPR',
    icon: 'clipboard-outline',
    link:'/pages/ppr',
    //children: [
    //  {
    //    title: 'Programa Articulado Nutricional',
    //    link: '/pages/ppr/programa-articulado-nutricional',
    //  },
    //  {
    //    title: 'Salud Materno Neonatal',
    //    link: '/pages/ppr/salud-materno-neonatal',
    //  },
    //  {
    //    title: 'TBC - VIH/SIDA',
    //    link: '/pages/ppr/tbc',
    //  },
    //  {
    //    title: 'Enfermedades No Transmisibles',
    //    link: '/pages/ppr/enfermedades-no-transmisibles',
    //  },
    //  {
    //    title: 'Prevención y Control del Cancer',
    //    link: '/pages/ppr/prevencion-control-cancer',
    //  },
    //  {
    //    title: 'Salud Mental',
    //    link: '/pages/ppr/salud-mental',
    //  },
    //],
  },
  {
    title: 'FED',
    icon: 'book-outline',
    link: '/pages/fed',
    // children: [
    //   {
    //     title: 'Grid',
    //     link: '/pages/ui-features/grid',
    //   },
    //   {
    //     title: 'Icons',
    //     link: '/pages/ui-features/icons',
    //   },
    //   {
    //     title: 'Typography',
    //     link: '/pages/ui-features/typography',
    //   },
    //   {
    //     title: 'Animated Searches',
    //     link: '/pages/ui-features/search-fields',
    //   },
    // ],
  },
  {
    title: 'Financiero',
    icon: 'layers-outline',
    link: '/pages/financiero',
    // children: [
    //   {
    //     title: 'Dialog',
    //     link: '/pages/modal-overlays/dialog',
    //   },
    //   {
    //     title: 'Window',
    //     link: '/pages/modal-overlays/window',
    //   },
    //   {
    //     title: 'Popover',
    //     link: '/pages/modal-overlays/popover',
    //   },
    //   {
    //     title: 'Toastr',
    //     link: '/pages/modal-overlays/toastr',
    //   },
    //   {
    //     title: 'Tooltip',
    //     link: '/pages/modal-overlays/tooltip',
    //   },
    // ],
  },
  {
    title: 'Campaña de Salud',
    icon: 'activity-outline',
    link: '/pages/campana-salud',
    // children: [
    //   {
    //     title: 'Calendar',
    //     link: '/pages/extra-components/calendar',
    //   },
    //   {
    //     title: 'Progress Bar',
    //     link: '/pages/extra-components/progress-bar',
    //   },
    //   {
    //     title: 'Spinner',
    //     link: '/pages/extra-components/spinner',
    //   },
    //   {
    //     title: 'Alert',
    //     link: '/pages/extra-components/alert',
    //   },
    //   {
    //     title: 'Calendar Kit',
    //     link: '/pages/extra-components/calendar-kit',
    //   },
    //   {
    //     title: 'Chat',
    //     link: '/pages/extra-components/chat',
    //   },
    // ],
  },
  {
    title: 'Produccion',
    icon: 'npm-outline',
    link: '/pages/produccion',
    // children: [
    //   {
    //     title: 'Google Maps',
    //     link: '/pages/maps/gmaps',
    //   },
    //   {
    //     title: 'Leaflet Maps',
    //     link: '/pages/maps/leaflet',
    //   },
    //   {
    //     title: 'Bubble Maps',
    //     link: '/pages/maps/bubble',
    //   },
    //   {
    //     title: 'Search Maps',
    //     link: '/pages/maps/searchmap',
    //   },
    // ],
  },
  {
    title: 'VPH',
    icon: 'bookmark-outline',
    link: '/pages/vph',
    // children: [
    //   {
    //     title: 'Echarts',
    //     link: '/pages/charts/echarts',
    //   },
    //   {
    //     title: 'Charts.js',
    //     link: '/pages/charts/chartjs',
    //   },
    //   {
    //     title: 'D3',
    //     link: '/pages/charts/d3',
    //   },
    // ],
  },
  {
    title: 'Recursos Humanos',
    icon: 'people-outline',
    link: '/pages/recursos-humanos',
    // children: [
    //   {
    //     title: 'TinyMCE',
    //     link: '/pages/editors/tinymce',
    //   },
    //   {
    //     title: 'CKEditor',
    //     link: '/pages/editors/ckeditor',
    //   },
    // ],
  },
  {
    title: 'REGISTRO',
    group: true,
  },
  {
    title: 'Gestión',
    icon: 'grid-outline',
    link: '/pages/registro/gestion',
    /*children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],*/
  },
  {
    title: 'OpenData PPR',
    icon: 'shuffle-2-outline',
    link: '/pages/miscellaneous/404',
    /*children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],*/
  },
  {
    title: 'Campaña',
    icon: 'lock-outline',
    children: [
      {
        title: 'Campaña Vacunometro',
        link: '/auth/login',
      },
/*      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },*/
    ],
  },
  {
    title: 'Produccion',
    icon: 'people-outline',
    link: '/pages/editors/tinymce',
    // children: [
    //   {
    //     title: 'TinyMCE',
    //     link: '/pages/editors/tinymce',
    //   },
    //   {
    //     title: 'CKEditor',
    //     link: '/pages/editors/ckeditor',
    //   },
    // ],
  },
  {
    title: 'Convenio FED',
    icon: 'people-outline',
    link: '/pages/editors/tinymce',
    // children: [
    //   {
    //     title: 'TinyMCE',
    //     link: '/pages/editors/tinymce',
    //   },
    //   {
    //     title: 'CKEditor',
    //     link: '/pages/editors/ckeditor',
    //   },
    // ],
  },
];
