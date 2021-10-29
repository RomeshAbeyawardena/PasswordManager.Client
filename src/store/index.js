import Vue from "vue";
import Vuex from "vuex";
import Api from "../api";
Vue.use(Vuex);

export const StoreActions = {
    getAccount: "getAccount",
    getTileDetails: "getTileDetails",
    selectTile: "selectTile",
}

let myApi = Api.GetApi("");

export default new Vuex.Store({
    state: {
        account: {},
        selectedTileItem: null,
        selectedTileDetails: {}
    },
    mutations: {
        setAccount(state, account) {
            Vue.set(state.account, account);
        },
        setSelectedTile(state, tile) {
            Vue.set(state.selectedTileItem, tile);
        },
        setSelectedTileDetails(state, tileDetails) {
            Vue.set(state.selectedTileDetails, tileDetails);
        }
    },
    actions: {
        selectTile(context, tile) {
            context.commit("setSelectedTile", tile);
        },
        getAccount(context, accountId) {
            let ctx = context;
            myApi.get("account", {
                accId: btoa(accountId)
            }).then(e => ctx.commit("setAccount", e));
        },
        getTileDetails(context, accountId, tileId) {
            let ctx = context;
            myApi.get("tile", {
                accId: btoa(accountId),
                tId: btoa(tileId)
            }).then(e => ctx.commit("setSelectedTileDetails", e));
        }
    },
    modules: {},
});
