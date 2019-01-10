<template>
    <tr>
        <th scope="row">{{id}}</th>
        <td>{{name}}</td>
        <td>
            <div>
                <div class="file-upload-form">
                    <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['id', 'name', 'file']
}
</script>

