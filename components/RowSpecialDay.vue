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
        <td>
            <div class="text-area-wrap">
                <b-form-textarea id="textarea1"
                                v-model="textSi"
                                placeholder="Enter something"
                                :rows="2"
                                :max-rows="6">
                </b-form-textarea>
            </div>
        </td>
        <td>
            <div class="text-area-wrap">
                <b-form-textarea id="textarea2"
                                v-model="textEn"
                                placeholder="Enter something"
                                :rows="2"
                                :max-rows="6">
                </b-form-textarea>
            </div>
        </td>
        <td>
            <div class="text-area-wrap">
                <b-form-textarea id="textarea3"
                                v-model="textTa"
                                placeholder="Enter something"
                                :rows="2"
                                :max-rows="6">
                </b-form-textarea>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['id', 'name', 'file', 'textSi', 'textEn', 'textTa'],
}
</script>
