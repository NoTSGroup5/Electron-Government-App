<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ getLocation() }}</td>
        <td><router-link :to="{ path: '/organisation/' + id + '/edit', params: { id }}"><span class="glyphicon glyphicon-pencil"></span></router-link></td>
        <td><span @click="triggerShowConfirmDeleteModal(getOrganisation())" class="glyphicon glyphicon-remove"></span></td>
    </tr>
</template>

<style scoped>
    .glyphicon-remove{
        cursor: pointer;
        color: red;
    }

    .glyphicon-remove:hover{
        color: #A60000;
    }
</style>

<script>
    import EventHub from '../../../../services/eventHub'

    export default {
        props: ['id', 'name', 'city', 'houseNumber', 'houseNumberExtra', 'zipCode', 'street'],
        methods : {
            getLocation(){
                let address = this.street + ' ' + this.houseNumber;

                if(this.houseNumberExtra){
                    address += ' ' + this.houseNumberExtra;
                }

                address += ', ' + this.zipCode + ' ' + this.city;

                return address;
            },
            getOrganisation(){
                return {
                    id : this.id,
                    name : this.name,
                    city : this.city,
                    street : this.street,
                    houseNumber : this.houseNumber,
                    houseNumberExtra : this.houseNumberExtra,
                    zipCode : this.zipCode
                };
            },
            triggerShowConfirmDeleteModal(organisation){
                EventHub.$emit('ShowConfirmDeleteModal', organisation);
            }
        }
    }
</script>
