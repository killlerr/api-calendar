<template>
    <tr>
        <th scope="row">{{id}}</th>
        <td>{{name}}</td>
        <td><flat-pickr v-model="date" class="form-control" :config="config" placeholder="Select date"></flat-pickr></td>                          
    </tr>
</template>

<script>
export default {
    props:['id', 'name', 'date']
}
</script>
