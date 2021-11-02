import Vue from "vue";
import Vuex from "vuex";
import Api from "../api";
Vue.use(Vuex);

export const StoreActions = {
    getAccount: "getAccount",
    getTileDetails: "getTileDetails",
    selectTile: "selectTile",
    authenticateAccount: "authenticateAccount"
}

let myApi = Api.api.GetApi("/api");
let _payload = Api.payload;

export default new Vuex.Store({
    state: {
        accountId: null,
        account: {},
        selectedTileItem: null,
        selectedTileDetails: {}
    },
    mutations: {
        setAccountId(state, accountId) {
            Vue.set(state, "accountId", accountId);
        },
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
        authenticateAccount(context, payload) {
            let ctx = context;
            return myApi.post("account/authenticate", {
                payload: _payload.buildPayLoad("auth", [payload.emailAddress, payload.password])
            }).then(e => ctx.commit("setAccountId", e));
        },
        selectTile(context, tile) {
            context.commit("setSelectedTile", tile);
            return this.dispatch(StoreActions.getTileDetails,
                {
                    accountId: context.state.account.id,
                    tileId: tile.id
                });
        },
        getAccount(context, accountId) {
            let ctx = context;
            console.log(accountId);
            myApi.get("account", {
                payload: _payload.buildPayLoad("auth:", [ accountId ])
            }).then(e => ctx.commit("setAccount", e));
        },
        getTileDetails(context, payload) {
            let ctx = context;
            return myApi.get("tile", {
                payload: _payload.buildPayLoad("request:",[payload.accountId, payload.tileId])
            }).then(e => ctx.commit("setSelectedTileDetails", e));
        }
    },
    modules: {},
});
