import Vue from "vue";
import Vuex from "vuex";
import Api from "../api";
Vue.use(Vuex);

export const StoreActions = {
    getAccount: "getAccount",
    getTileDetails: "getTileDetails",
    selectTile: "selectTile",
}

let myApi = Api.api.GetApi("/api");

export default new Vuex.Store({
    state: {
        accountId: null,
        account: {},
        selectedTileItem: null,
        selectedTileDetails: {}
    },
    mutations: {
        setAccount(state, account) {
            Vue.set(state, "account", account);
        },
        setSelectedTile(state, tile) {
            Vue.set(state, "selectedTileItem", tile);
        },
        setSelectedTileDetails(state, tileDetails) {
            Vue.set(state, "selectedTileDetails", tileDetails);
        }
    },
    actions: {
        selectTile(context, tile) {
            context.commit("setSelectedTile", tile);
            return this.dispatch(StoreActions.getTileDetails, { accountId: context.state.account.id, tileId: tile.id });
        },
        getAccount(context, accountId) {
            let ctx = context;
            myApi.get("account", {
                payload: btoa(accountId)
            }).then(e => ctx.commit("setAccount", e));
        },
        getTileDetails(context, payload) {
            let ctx = context;
            return myApi.get("tile", {
                payload: btoa("".concat(btoa(payload.accountId), "|", btoa(payload.tileId)))
            }).then(e => ctx.commit("setSelectedTileDetails", e));
        }
    },
    modules: {},
});
