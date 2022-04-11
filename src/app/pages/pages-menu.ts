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
    link: '/pages/iot-dashboard',
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
    children: [
      {
        title: 'Programa Articulado Nutricional',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Salud Materno Neonatal',
        link: '/pages/forms/layouts',
      },
      {
        title: 'TBC - VIH/SIDA',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Enfermedades No Transmisibles',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Prevención y Control del Cancer',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Salud Mental',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'FED',
    icon: 'book-outline',
    link: '/pages/ui-features',
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
    link: '/pages/modal-overlays/dialog',
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
    link: '/pages/extra-components/calendar',
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
    link: '/pages/maps/gmaps',
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
    link: '/pages/charts/echarts',
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
    title: 'REGISTRO',
    group: true,
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
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
      },
    ],
  },
];
