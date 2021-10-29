<template>
    <v-list two-line>
        <v-list-item-group v-model="selected"
                           v-on:change="itemSelected"
                           active-class="blue--text">
            <template v-for="(item, id) in tiles">
                <v-list-item :key="item.id">
                    <template v-slot:default="{ active }">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.name"></v-list-item-title>

                            <v-list-item-subtitle class="text--primary"
                                                  v-text="item.description"></v-list-item-subtitle>

                            <v-list-item-subtitle>Last updated: {{ item.lastUpdated | date }} </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                            <v-icon v-if="!active"
                                    color="grey lighten-1">
                                mdi-shield-key-outline
                            </v-icon>

                            <v-icon v-else
                                    color="yellow darken-3">
                                mdi-shield-key
                            </v-icon>
                        </v-list-item-action>
                    </template>
                </v-list-item>

                <v-divider v-if="id < tiles.length - 1"
                           :key="id"></v-divider>
            </template>
        </v-list-item-group>
    </v-list>
</template>

<script type="text/javascript">
    export default {
        props: { tiles: Array },
        data: () => {
            return {
                selected: null
            }
        },
        methods: {
            itemSelected() {
                this.$emit("changed", this.tiles[this.selected]);
            }
        }
    }
</script>