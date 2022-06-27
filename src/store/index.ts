import {createStore, Store} from 'vuex'
import {InjectionKey} from "vue";

// 为 store state 声明类型
export interface DiyState {
    defaultCount?: number,
    chatCount?: number,
    chatCountV2?: number
}

export const key: InjectionKey<Store<DiyState>> = Symbol()

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
        ChatV2DiyStateIncr(state: DiyState) {
            console.log("ChatV2DiyStateIncr ", state)
            console.log("ChatV2DiyStateIncr chatCountV2 ", state.chatCountV2)
            if (state.chatCountV2 != undefined) {
                state.chatCountV2++;
            }
            console.log("ChatV2DiyStateIncr chatCountV2 ++ ", state.chatCountV2)
        },
    },
    getters: {
        getChatCountV2() {
            console.log("[xuegao-vuex4-ts][index.ts][getChatCountV2=%s]", CHAT_V2.state.chatCountV2)
            return CHAT_V2.state.chatCountV2
        }
    }
};

export default createStore<DiyState>({
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
