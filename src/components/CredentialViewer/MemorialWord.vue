<template>
    <v-container>
        <v-row :align="center" no-gutters>
            <v-col class="text-center" 
                   v-for="index in characters.length"
                   :key="index">
                <v-card class="pa-1"
                        outlined
                        tile>
                    {{ index }}
                </v-card>
            </v-col>
        </v-row>
            <v-row :align="center" no-gutters>
                <v-col class="text-center"
                       v-for="(character, index) in characters"
                       :key="index">
                    <v-card class="pa-1"
                            outlined
                            tile>
                        {{ character }}
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<script type="text/javascript">
    import Vue from "vue";

    export default Vue.component("MemorialWord", {
        props: { characters: Array }
    })
</script>