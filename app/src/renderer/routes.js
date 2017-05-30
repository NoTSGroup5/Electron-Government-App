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
    name: 'organisationsView',
    component: require('./components/Organisation/OrganisationOverview')
  },
  {
    path: '/organisation/create',
    name: 'organisationCreate',
    component: require('./components/Organisation/AddOrganisation')
  },
    {
        path: '/organisation/:id/edit',
        name: 'organisationEdit',
        component: require('./components/Organisation/EditOrganisation.vue')
    },
  {
    path: '/organisation-organisationType/create',
    name: 'organisationTypeCreate',
    component: require('./components/Organisation/AddOrganisationType')
  },
  {
    path: '/organisation-types',
    name: 'organisationTypesView',
    component: require('./components/Organisation/OrganisationTypeOverview')
  },
  {
    path: '/patientsInfo/:bsn',
    name: 'patientInfo',
    component: require('components/Patient/PatientsInfoPage')
  }, {
    path: '/patientDossier/:bsn',
    name: 'patientDossier',
    component: require('components/Patient/Dossier')
  }, {
    path: '*',
    redirect: '/'
  }
]
