<template>
    <v-app>

        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Password Manager</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <TileList :tiles="account.tiles" v-on:changed="tileListChanged" />
        </v-main>
        <v-slide-y-transition origin="bottom center 0">
            <v-footer app padless v-if="shown">
                <TileDetails :tile-details="selectedTileDetails" />
            </v-footer>
        </v-slide-y-transition>
    </v-app>
</template>

<script>
    import TileList from "./components/TileList";
    import TileDetails from "./components/TileDetails";
    import { StoreActions } from "./store";
    import { mapState } from 'vuex'

    export default {
        name: "App",

        components: {
            TileList,
            TileDetails
        },

        data: () => ({
            shown: false
        }),
        computed: mapState({
            account: state => state.account,
            selectedTileDetails: state => state.selectedTileDetails
        }),
        methods: {
            tileListChanged(value) {
                this.shown = value != undefined || value != null;
                if (this.shown) {
                    this.$store.dispatch(StoreActions.selectTile, value);
                }
            }
        },
        async mounted() {
            await this.$store.dispatch(StoreActions.getAccount, { payload: btoa("cbb0291892114d258ad254193f0889a9") })
        }
    };
</script>
