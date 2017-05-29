<template>
    <div id="app">
        <Navbar title="EPD">
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/patients">Patients</NavbarLink>
            <NavbarLink to="/organisations">Organisaties</NavbarLink>
            <NavbarLink to="/organisation-types">Organisatie Types</NavbarLink>
        </Navbar>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import store from 'renderer/vuex/store'
    import Navbar from './components/Shared/Bootstrap/Navbar/Navbar';
    import NavbarLink from './components/Shared/Bootstrap/Navbar/NavbarLink'

    export default {
        store,

        components: {
            Navbar,
            NavbarLink
        },

        created () {
            console.log('created')
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
