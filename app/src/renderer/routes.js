export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('./components/Home/LandingPageView')
  },
  {
    path: '/patients',
    name: 'patientsOverview',
    component: require('./components/Patient/PatientsOverview')
  },
  {
    path: '/patients/create',
    name: 'patientsCreate',
    component: require('./components/Patient/PatientCreate')
  },
  {
    path: '/organisations',
    name: 'OrganisatieOverzicht',
    component: require('./components/Organisation/OrganisationOverview')
  },
  {
    path: '/organisation/create',
    name: 'createorganisation',
    component: require('./components/Organisation/AddOrganisation')
  },
  {
    path: '/organisation-type/create',
    name: 'Organisatie type toevoegen',
    component: require('./components/Organisation/AddOrganisationType')
  },
  {
    path: '/organisation-types',
    name: 'Organisatie Types Overzicht',
    component: require('./components/Organisation/OrganisationTypeOverview')
  },
  {
    path: '/patientsInfo/:bsn',
    name: 'patientinfo',
    component: require('components/Patient/PatientsInfoPage')
  }, {
    path: '/patientDossier/:bsn',
    name: 'patientdossier',
    component: require('components/Patient/Dossier')
  }, {
    path: '*',
    redirect: '/'
  }
]
