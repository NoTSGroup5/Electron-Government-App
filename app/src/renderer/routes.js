export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('./components/LandingPageView')
  }, {
    path: '/patients',
    name: 'patientsOverview',
    component: require('./components/PatientsOverview')
  }, {
    path: '/organisations',
    name: 'Organisatie Overzicht',
    component: require('./components/OrganizationOverview')
  }, {
    path: '*',
    redirect: '/'
  }
]
