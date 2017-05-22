export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  }, {
    path: '/patients',
    name: 'patientsOverview',
    component: require('components/patientsOverview')
  }, {
    path: '/patientsInfo',
    name: 'patientinfo',
    component: require('components/PatientsInfoPage')
  }, {
    path: '*',
    redirect: '/'
  }
]
