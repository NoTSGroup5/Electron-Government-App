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
    name: 'OrganisatieOverzicht',
    component: require('./components/Organisation/OrganisationOverview')
  }, {
    path: '/organisation/create',
    name: 'createorganisation',
    component: require('./components/Organisation/AddOrganisation')
  }, {
    path: '/patientsInfo/:bsn',
    name: 'patientinfo',
    component: require('components/Patient/PatientsInfoPage')
  }, {
    path: '*',
    redirect: '/'
  }
]
