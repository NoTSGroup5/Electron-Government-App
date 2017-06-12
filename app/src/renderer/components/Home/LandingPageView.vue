<template>
  <div>
    <h1>Nationaal EPD systeem</h1>
    <p>Overheid.</p>
  </div>
</template>

<script>
    import Vue from 'vue'
    import Electron from 'electron'
    import Headers from "vue-resource/src/http/headers";

    export default {
        components: {
        },
        name: 'landing-page',
        created(){
            let account = localStorage.getItem("account") != null ? JSON.parse(localStorage.getItem("account")) : null;

            // We have to set a bsn and secret key first
            if(!account){
                return this.$router.push({name: 'settings'})
            }

            // we are already authenticated with facebook
            if(window.location.href.includes("done=true")) {
                let walletId = null;

                doAjaxRequest('http://localhost:3000/api/wallets', 'GET').then((wallets) => {
                    walletId = wallets[0].id;

                    return doAjaxRequest(`http://localhost:3000/api/wallets/${walletId}/identities`, 'POST', {
                        "enrollmentID": account.bsn,
                        "enrollmentSecret": account.secret,
                    });
                }).then((identity) => {
                    return doAjaxRequest(`http://localhost:3000/api/wallets/${walletId}/identities/${identity.id}/setDefault`, 'POST');
                }).then(() => {
                    console.log('Done!');
                }).catch(() => {
                    console.log('Iets is goed kapot!');
                });

                return false;
            }

            window.location.href = 'http://localhost:3000/auth/facebook';

            function doAjaxRequest(url, method, data){
                return $.ajax({
                    url: url,
                    cache : false,
                    data : data,
                    method : method,
                    // send cross domain cookies, for da lulz
                    xhrFields: {
                        withCredentials: true
                    }
                });
            }
        }
    }
</script>

