import Vue from "vue";
import Vuex from "vuex";
import Promise from "promise";
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

function handleError(error, context, getMessage) {
    if (error.status === 400) {
        context.commit("setAlert", { type: "warning", message: getMessage(error.data), display: true })
    }
    else if (error.status === 500) {
        console.log("Server error", error);
    }
    else {
        console.log("Unknown error", error);
    }
}

export default new Vuex.Store({
    state: {
        alert: {
            type: "none",
            message: "",
            display: false
        },
        accountId: null,
        account: {},
        selectedTileItem: null,
        selectedTileDetails: {}
    },
    mutations: {
        setAlert(state, alert) {
            Vue.set(state, "alert", {
                type: alert.type,
                message: alert.message,
                display: alert.display
            });
        },
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

            return new Promise(resolve => {
                myApi.post("account/authenticate", {
                    payload: _payload.buildPayLoad("auth", [payload.emailAddress, payload.password])
                })
                    .then(e => { ctx.commit("setAccountId", e); resolve(e); })
                    .catch(e => handleError(e, ctx, errorData => errorData["EmailAddress"].join(";") ));
            });
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
