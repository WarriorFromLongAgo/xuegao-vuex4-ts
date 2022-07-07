<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <button @click="chatMuChatCountIncr">chatMuChatCountIncr</button>
    | chatCount getter = {{ chatGetChatCountComputed }}
    <h1></h1>
    <button @click="chatV2MuChatCountV2Incr">chatV2MuChatCountV2Incr</button>
    | chatCountV2 getter = {{ chatV2GetChatCountV2Computed }}
    <h1></h1>
    getterDefaultCount = {{ getDefaultCountComputed }}
  </div>
  <div>
    <div>mapStateTest chatCount = {{ chatGetChatCount }}</div>
    <div>mapStateTest chatCount = chatGetChatCount</div>
    <div>mapStateTest chatCount = mapStateTestChatCountTest2</div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useStore, mapState, mapGetters, mapMutations, mapActions} from "vuex";

const store = useStore()

let chatGetChatCount = computed(() => store.state.chatCount)
console.log(" chatGetChatCount ", chatGetChatCount)


let chatGetChatCountComputed = computed(() => store.getters.chatGetChatCount)
console.log("chatGetChatCountComputed", chatGetChatCountComputed);
let chatV2GetChatCountV2Computed = computed(() => store.getters.chatV2GetChatCountV2)
console.log("chatV2GetChatCountV2Computed", chatV2GetChatCountV2Computed);

function chatMuChatCountIncr() {
  // 使用 mutation
  store.commit('chatMuChatCountIncr')
}

function chatV2MuChatCountV2Incr() {
  // 使用 mutation
  store.commit('chatV2MuChatCountV2Incr')
}

let getDefaultCountComputed = computed(() => store.getters.getDefaultCount)


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
