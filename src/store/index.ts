import {Commit, createStore} from 'vuex'

// 为 store state 声明类型
export interface DiyState {
    defaultCount: number
}

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
        chatMuChatCountIncr(state: DiyState1) {
            console.log("chatChatCountIncr mutations ", state)
            console.log("chatChatCountIncr mutations chatCount ", state.chatCount)
            if (state.chatCount != undefined) {
                state.chatCount++;
            }
            console.log("chatChatCountIncr mutations chatCount ++ ", state.chatCount)
        },
    },
    getters: {
        chatGetChatCount(state: DiyState1) {
            console.log("[xuegao-vuex4-ts][index.ts][getChatCount][state=", state)
            console.log("[xuegao-vuex4-ts][index.ts][getChatCount][chatCount=", state.chatCount)
            return state.chatCount
        },
    },
    actions: {
        chatAcChatCountIncr (context: { commit: Commit }) {
            context.commit('chatMuChatCountIncr')
        }
    }
};
const CHAT_V2 = {
    state: {
        chatCountV2: 0
    },
    mutations: {
        chatV2MuChatCountV2Incr(state: DiyState2) {
            console.log("chatV2MuChatCountV2Incr ", state)
            console.log("chatV2MuChatCountV2Incr ", state.chatCountV2)
            if (state.chatCountV2 != undefined) {
                state.chatCountV2++;
            }
            console.log("ChatV2Mutations chatCountV2 ++ ", state.chatCountV2)
        },
    },
    getters: {
        chatV2GetChatCountV2(state: DiyState2) {
            console.log("[xuegao-vuex4-ts][index.ts][getChatCountV2][state=", state)
            console.log("[xuegao-vuex4-ts][index.ts][getChatCountV2][chatCountV2=", state.chatCountV2)
            return state.chatCountV2
        },
    },
    actions: {
        chatV2AcChatCountIncr (context: { commit: Commit }) {
            context.commit('chatV2MuChatCountV2Incr')
        }
    }
};

export default createStore<DiyState>({
    state: {
        defaultCount: 0
    },
    getters: {
        getDefaultCount(state: DiyState) {
            console.log("[xuegao-vuex4-ts][index.ts][getterDefaultCount][state]", state)
            return state.defaultCount
        },
    },
    mutations: {},
    actions: {},
    modules: {
        CHAT, CHAT_V2
    }
})
