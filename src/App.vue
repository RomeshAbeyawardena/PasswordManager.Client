<template>
    <v-app>

        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Password Manager</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <TileList v-on:changed="tileListChanged" />
        </v-main>
        <v-slide-y-transition origin="bottom center 0">
            <v-footer app padless v-if="shown">
                <TileDetails />
            </v-footer>
        </v-slide-y-transition>
    </v-app>
</template>

<script>
    import TileList from "./components/TileList";
    import TileDetails from "./components/TileDetails";

    export default {
        name: "App",

        components: {
            TileList,
            TileDetails
        },

        data: () => ({
            shown: false
        }),

        methods: {
            tileListChanged(value) {
                this.shown = value != null;
            }
        }
    };
</script>
