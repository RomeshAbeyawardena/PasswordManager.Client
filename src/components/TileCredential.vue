<template>
    <v-list color="secondary" active-class="white--text">
        <v-list-group append-icon="mdi-key"
                      :key="item.id"
                      v-for="(item, index) in tileCredentials">
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>{{ item.description }}</v-list-item-title>
                </v-list-item-content>
            </template>
            <v-list-item>
                <component :is="item.credentialType" :characters="item.value"></component>
            </v-list-item>
            <v-divider v-if="index < tileCredentials.length - 1"
                       :key="index"></v-divider>
        </v-list-group>
    </v-list>
</template>
<script type="text/javascript">

    export default {
        props: { tileCredentials: Array }
    }
</script>