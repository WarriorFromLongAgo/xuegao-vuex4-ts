import {createStore} from 'vuex'

// 为 store state 声明类型
export interface DiyState1 {
    chatCount: number
}

export interface DiyState2 {
    chatCountV2: number
}

const CHAT = {
    state: {
        chatCount: 0
    },
    mutations: {
        ChatMutations(state: DiyState1) {
            console.log("ChatDiyStateIncr mutations ", state)
            console.log("ChatDiyStateIncr mutations chatCount ", state.chatCount)
            if (state.chatCount != undefined) {
                state.chatCount++;
            }
            console.log("ChatDiyStateIncr mutations chatCount ++ ", state.chatCount)
        },
    },
    getters: {
        getChatCount(state: DiyState1) {
            console.log("[xuegao-vuex4-ts][index.ts][getChatCount][state=", state)
            console.log("[xuegao-vuex4-ts][index.ts][getChatCount][chatCount=", state.chatCount)
            return state.chatCount
        },
        // 这个是没有用的
        getChatCount2() {
            console.log("[xuegao-vuex4-ts][index.ts][getChatCount2][state=", CHAT.state)
            console.log("[xuegao-vuex4-ts][index.ts][getChatCount2][chatCount=", CHAT.state.chatCount)
            return CHAT.state.chatCount
        }
    }
};
const CHAT_V2 = {
    state: {
        chatCountV2: 0
    },
    mutations: {
        ChatV2Mutations(state: DiyState2) {
            console.log("ChatV2Mutations ", state)
            console.log("ChatV2Mutations chatCountV2 ", state.chatCountV2)
            if (state.chatCountV2 != undefined) {
                state.chatCountV2++;
            }
            console.log("ChatV2Mutations chatCountV2 ++ ", state.chatCountV2)
        },
    },
    getters: {
        getChatCountV2(state: DiyState2) {
            console.log("[xuegao-vuex4-ts][index.ts][getChatCountV2][state=", state)
            console.log("[xuegao-vuex4-ts][index.ts][getChatCountV2][chatCountV2=", state.chatCountV2)
            return state.chatCountV2
        },
        // 这个是没有用的
        getChatCountV22() {
            console.log("[xuegao-vuex4-ts][index.ts][getChatCountV22][state=", CHAT_V2.state)
            console.log("[xuegao-vuex4-ts][index.ts][getChatCountV22][chatCount=", CHAT_V2.state.chatCountV2)
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
