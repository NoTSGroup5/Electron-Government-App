<template>
    <div id="app">
        <Navbar title="EPD">
            <NavbarLink to="/" :active="$route.path === '/'">Home</NavbarLink>
            <NavbarLink to="/patients" :active="isPatientsPageActive()">Patients</NavbarLink>
            <NavbarLink to="/organisations" :active="isOrganisationPageActive()">Organisaties</NavbarLink>
            <NavbarLink to="/organisation-types" :active="isOrganisationTypePageActive()">Organisatie Types</NavbarLink>
        </Navbar>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import store from 'renderer/vuex/store';
    import Navbar from './components/Shared/Bootstrap/Navbar/Navbar';
    import NavbarLink from './components/Shared/Bootstrap/Navbar/NavbarLink';

    export default {
        store,

        components: {
            Navbar,
            NavbarLink
        },

        methods: {
            isOrganisationPageActive() {
                let pages = ['/organisations', '/organisation/create'];

                return pages.indexOf(this.$route.path) > -1;
            },
            isOrganisationTypePageActive(){
                let pages = ['/organisation-types', '/organisation-type/create'];

                return pages.indexOf(this.$route.path) > -1;
            },
            isPatientsPageActive(){
                let pages = ['/patients', '/patientsInfo/:bsn', '/patientDossier/:bsn'];

                return pages.indexOf(this.$route.path) > -1;
            }
        }
    }
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Lato:300);

    * {
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
        width: 100%
    }
</style>
