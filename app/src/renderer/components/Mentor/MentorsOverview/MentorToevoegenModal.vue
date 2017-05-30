<template>
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Mentoren toevoegen</h4>
            </div>
                    
                <div class="modal-body">
                    <div>
                        <div class="input-group">
                            <input v-model="bsn" type="text" class="form-control" placeholder="Zoek mentor...">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button" v-on:click="findMentor()">Zoek</button>
                                </span>
                        </div>
                 
                        <table class="table" id="table">
                            <thead>
                            <tr>
                                <th>BSN</th>
                                <th>Naam</th>
                            </tr>
                            </thead>
                            <tbody>
                               <tr>
                                    <td>{{ model.bsn }}</td>
                                    <td>{{ model.name }}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Toevoegen</button>
                </div>
            </div>
    </div>
</template>

<script>

 import HttpPatientsService from '../../../../services/httpPatientsService'

let httpPatientsService = new HttpPatientsService();


export default {
  components: {

  },
  data () {
    return {
        bsn: "",
        model: {
            bsn: "",
            name: ""
        }
    }
  },

    methods: {
        findMentor(){
            httpPatientsService.getPatientbyBsn(this.bsn).then(response => {
            // JSON responses are automatically parsed.
            this.model.bsn = response.bsn;
            this.model.name = response.firstName + " " +  response.lastName;
            })
            .catch(e => {
            console.log(e);
            })
        }
    },
}

</script>
