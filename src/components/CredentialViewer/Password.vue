<template>
    <v-container>
        <v-row :align="center" no-gutters>
            <v-col class="text-center"
                   v-for="(character, index) in characters"
                   :key="index">
                <v-card class="pa-1"
                        outlined>
                        {{ character }}
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script type="text/javascript">
    import Vue from "vue";

    export default Vue.component("Password", {
        props: { characters: Array }
    })
</script>