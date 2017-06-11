export default [
    {
        path: '/',
        name: 'home',
        component: require('./components/Home/LandingPageView')
    },
    {
        path: '/patients',
        name: 'patientsOverview',
        component: require('./components/Patient/PatientsOverview')
    },
    {
        path: '/patientsInfo/:bsn',
        name: 'patientInfo',
        component: require('components/Patient/PatientsInfoPage')
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
        path: '/organisation-type/create',
        name: 'organisationTypeCreate',
        component: require('./components/Organisation/AddOrganisationType')
    },
    {
        path: '/organisation-types',
        name: 'organisationTypesView',
        component: require('./components/Organisation/OrganisationTypeOverview')
    },
    {
        path: '/health-care-professionals',
        name: 'healthCareProfessionalsOverview',
        component: require('./components/HealthCareProfessional/HealthCareProfessionalsOverview')
    },
    {
        path: '/health-care-professional/create',
        name: 'healthCareProfessionalCreate',
        component: require('./components/HealthCareProfessional/HealthCareProfessionalCreate')
    },
    {
        path: '/health-care-professional/:bsn',
        name: 'healthCareProfessionalInfo',
        component: require('./components/HealthCareProfessional/HealthCareProfessionalEdit.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: require('components/Settings')
    },
    {
        path: '*',
        redirect: '/'
    }
]
