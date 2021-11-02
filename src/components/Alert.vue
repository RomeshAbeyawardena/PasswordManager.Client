<template>
    <v-alert dismissible 
             dense
             v-if="alert.display && alert.type != 'none'" 
             border="bottom"
             :type="alert.type">{{ alert.message }}</v-alert>
</template>
<script type="text/javascript">
    import { mapState } from "vuex";

    export default {
        computed: mapState({
            alert: state => state.alert
        }),
    }
</script>