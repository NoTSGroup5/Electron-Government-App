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
    path: '*',
    redirect: '/'
  }
]
