<template>
<!-- Modal -->
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Mentoren toevoegen</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <input type="search" id="search" value="" class="form-control"
                                placeholder="Zoeken op BSN">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <table class="table" id="table">
                            <thead>
                            <tr>
                                <th>BSN</th>
                                <th>Naam</th>
                            </tr>
                            </thead>
                            <tbody>
                            <Mentor v-for="mentor in mentoren" v-bind="mentor"></Mentor>
                            </tbody>
                        </table>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Opslaan
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import Mentor from './Mentor'
let mentoren = []

export default {
  components: {
    Mentor
  },
  data: () => {
    return {
      mentoren: mentoren
    }
  },

  beforeCreate: () => {
      // TODO: Add actual API endpoint here, simulate async call for now
    setTimeout(() => {
      mentoren.push({
        BSN: '2736498',
        naam: 'Kees, J'
      })
      mentoren.push({
        BSN: '3243243',
        naam: 'Hans, S'
      })
    }, 100)
  },

  beforeDestroy: () => {
    mentoren = []
  }
}

</script>
