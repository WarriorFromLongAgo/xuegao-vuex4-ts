import {createStore} from 'vuex'

const CHAT = {
    state: {
        chatCount: 0,
    },
    mutations: {
        increment() {
            console.log("CHAT increment")
            CHAT.state.chatCount++;
        },
        ChatIncrement() {
            console.log("CHAT ChatIncrement")
            CHAT.state.chatCount++;
        },
    },
};
const CHAT_V2 = {
    state: {
        chatCountV2: 0,
    },
    mutations: {
        increment() {
            console.log("CHAT_V2 increment")
            CHAT_V2.state.chatCountV2++;
        },
        ChatV2Increment() {
            console.log("CHAT ChatV2Increment")
            const number = CHAT_V2.state.chatCountV2 + 1
            console.log("[xuegao-vuex4-ts][index.ts][number=s%]", number)
            CHAT_V2.state.chatCountV2 = number
            console.log("[xuegao-vuex4-ts][index.ts][chatCountV2=s%]", CHAT_V2.state.chatCountV2)
        },
    },
    getters: {
        getChatCountV2() {
            console.log("[xuegao-vuex4-ts][index.ts][getChatCountV2=%s]", CHAT_V2.state.chatCountV2)
            return CHAT_V2.state.chatCountV2
        }
    }
};

export default createStore({
    state: {
        defaultCount: 0
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        CHAT, CHAT_V2
    }
})
