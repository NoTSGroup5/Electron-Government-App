export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('./components/Home/LandingPageView')
  }, {
    path: '/patients',
    name: 'patientsOverview',
    component: require('./components/Patient/PatientsOverview')
  }, {
    path: '/organisations',
    name: 'Organisatie Overzicht',
    component: require('./components/Organisation/OrganisationOverview')
  }, {
    path: '/organisation/create',
    name: 'createOrganization',
    component: require('./components/Organisation/AddOrganization')
  }, {
    path: '/patientsInfo',
    name: 'patientinfo',
    component: require('components/Patient/PatientsInfoPage')
  }, {
    path: '*',
    redirect: '/'
  }
]
