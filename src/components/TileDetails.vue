<template>
    <v-card rounded="0" color="primary" dark elevation="2" width="100%">
        <v-card-title>{{ tileDetails.name }}</v-card-title>
        <v-card-text>{{ tileDetails.description }}</v-card-text>
        <v-card-text>Last updated: {{ tileDetails.lastUpdated | date }}</v-card-text>
        <v-card-text>Memorial Information: {{ tileDetails.credentials.length }}</v-card-text>
    </v-card>
</template>

<script type="text/javascript">
    export default {
        props: { "tileDetails": Object }
    }
</script>