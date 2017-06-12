<template>
    <form @submit.prevent="validateForm()">

        <div class="form-group row" :class="{'has-error': errors.has('bsn') }">
            <label for="bsn" class="col-sm-2 col-form-label">BSN</label>
            <div class="col-sm-10">
                <input v-model="model.bsn" name="bsn" v-validate="'required'" class="form-control" id="bsn">
                <p class="text-danger" v-show="errors.has('bsn')">Een BSN is verplicht.</p>
            </div>
        </div>

        <div class="form-group row" :class="{'has-error': errors.has('secret') }">
            <label for="secret" class="col-sm-2 col-form-label">Code</label>
            <div class="col-sm-10">
                <input v-model="model.secret" name="secret"  v-validate="'required'" class="form-control" id="secret">
                <p class="text-danger" v-show="errors.has('secret')">Een code is verplicht.</p>
            </div>
        </div>

        <button type="submit" class="btn btn-success pull-right">Opslaan</button>
    </form>
</template>

<script>
    export default {
        data: () => {
            return {
                model: {
                    bsn: '',
                    secret: ''
                }
            }
        },
        created : function () {
          let account = localStorage.getItem("account") != null ? JSON.parse(localStorage.getItem("account")) : null;

          if(account){
              this.model.bsn = account.bsn;
              this.model.secret = account.secret;
          }
        },
        methods: {
            validateForm () {
                this.$validator.validateAll().then(() => {

                   localStorage.setItem("account", JSON.stringify({
                       bsn : this.model.bsn,
                       secret : this.model.secret
                   }));

                    return this.$router.push({name: 'home'})
                }).catch(() => {});
            }
        }
    }
</script>
