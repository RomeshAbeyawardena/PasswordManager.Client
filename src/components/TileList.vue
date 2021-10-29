<template>
    <v-list two-line>
        <v-list-item-group v-model="selected"
                           v-on:change="itemSelected"
                           active-class="blue--text">
            <template v-for="(item, id) in items">
                <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.name"></v-list-item-title>

                            <v-list-item-subtitle class="text--primary"
                                                  v-text="item.description"></v-list-item-subtitle>

                            <v-list-item-subtitle>Last updated: {{ item.lastUpdated }} </v-list-item-subtitle>
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

                <v-divider v-if="id < items.length - 1"
                           :key="id"></v-divider>
            </template>
        </v-list-item-group>
    </v-list>
</template>

<script type="text/javascript">
    export default {
        data: () => {
            return {
                selected: null,
                items: [{
                    id: 0,
                    name: "Krish E-mail",
                    description: "krish.ellis@dotnetinsights.net",
                    lastUpdated: "2021-10-22 12:45",
                    action: "roo"
                },
                {
                    id: 1,
                    name: "Romesh E-mail",
                    description: "romesh.abeyawardena@dotnetinsights.net",
                    lastUpdated: "2021-10-24 13:55",
                    action: "roo"
                },
                {
                    id: 2,
                    name: "Halifax Online Banking",
                    description: "romesh1166",
                    lastUpdated: "2020-05-06 19:45",
                    action: "roo"
                    },
                    {
                        id: 0,
                        name: "Krish E-mail",
                        description: "krish.ellis@dotnetinsights.net",
                        lastUpdated: "2021-10-22 12:45",
                        action: "roo"
                    },
                    {
                        id: 1,
                        name: "Romesh E-mail",
                        description: "romesh.abeyawardena@dotnetinsights.net",
                        lastUpdated: "2021-10-24 13:55",
                        action: "roo"
                    },
                    {
                        id: 2,
                        name: "Halifax Online Banking",
                        description: "romesh1166",
                        lastUpdated: "2020-05-06 19:45",
                        action: "roo"
                    },{
                        id: 0,
                        name: "Krish E-mail",
                        description: "krish.ellis@dotnetinsights.net",
                        lastUpdated: "2021-10-22 12:45",
                        action: "roo"
                    },
                    {
                        id: 1,
                        name: "Romesh E-mail",
                        description: "romesh.abeyawardena@dotnetinsights.net",
                        lastUpdated: "2021-10-24 13:55",
                        action: "roo"
                    },
                    {
                        id: 2,
                        name: "Halifax Online Banking",
                        description: "romesh1166",
                        lastUpdated: "2020-05-06 19:45",
                        action: "roo"
                    }, {
                        id: 0,
                        name: "Krish E-mail",
                        description: "krish.ellis@dotnetinsights.net",
                        lastUpdated: "2021-10-22 12:45",
                        action: "roo"
                    },
                    {
                        id: 1,
                        name: "Romesh E-mail",
                        description: "romesh.abeyawardena@dotnetinsights.net",
                        lastUpdated: "2021-10-24 13:55",
                        action: "roo"
                    },
                    {
                        id: 2,
                        name: "Halifax Online Banking",
                        description: "romesh1166",
                        lastUpdated: "2020-05-06 19:45",
                        action: "roo"
                    },
                    {
                        id: 0,
                        name: "Krish E-mail",
                        description: "krish.ellis@dotnetinsights.net",
                        lastUpdated: "2021-10-22 12:45",
                        action: "roo"
                    },
                    {
                        id: 1,
                        name: "Romesh E-mail",
                        description: "romesh.abeyawardena@dotnetinsights.net",
                        lastUpdated: "2021-10-24 13:55",
                        action: "roo"
                    },
                    {
                        id: 2,
                        name: "Halifax Online Banking",
                        description: "romesh1166",
                        lastUpdated: "2020-05-06 19:45",
                        action: "roo"
                    }, {
                        id: 0,
                        name: "Krish E-mail",
                        description: "krish.ellis@dotnetinsights.net",
                        lastUpdated: "2021-10-22 12:45",
                        action: "roo"
                    },
                    {
                        id: 1,
                        name: "Romesh E-mail",
                        description: "romesh.abeyawardena@dotnetinsights.net",
                        lastUpdated: "2021-10-24 13:55",
                        action: "roo"
                    },
                    {
                        id: 2,
                        name: "Halifax Online Banking",
                        description: "romesh1166",
                        lastUpdated: "2020-05-06 19:45",
                        action: "roo"
                    }]
            }
        },
        methods: {
            itemSelected() {
                this.$emit("changed", this.selected);
            }
        }
    }
</script>