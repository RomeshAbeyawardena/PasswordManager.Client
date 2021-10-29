<template>
    <v-card rounded="0" color="primary" dark elevation="2" width="100%">
        <v-card-title>{{ tileDetails.name }}</v-card-title>
        <v-card-text>{{ tileDetails.description }}</v-card-text>
        <v-card-text>Last updated: {{ tileDetails.lastUpdated | date }}</v-card-text>
        <v-card-text>Memorial Information:</v-card-text>
        <TileCredential :tile-credentials="tileDetails.credentials"></TileCredential>
    </v-card>
</template>

<script type="text/javascript">
    import TileCredential from "./TileCredential";

    export default {
        props: { "tileDetails": Object },
        components: { TileCredential }
    }
</script>