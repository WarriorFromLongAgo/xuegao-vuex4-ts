<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <button @click="incr">incr</button>
    <button @click="ChatIncrement">ChatIncrement</button>
    <button @click="ChatV2Increment">ChatV2Increment</button>
    <button @click="ChatV2DiyStateIncr">ChatV2DiyStateIncr</button>
    <div>defaultCount = {{ defaultCount }}</div>
    <div>chatCount = {{ chatCount }}</div>
    <div>chatCountV2 = {{ chatCountV2 }}</div>
    <button @click="getChatCountV2">getChatCountV2 = {{ getChatCountV2Result }}</button>
    <div>getChatCountV2Result = {{ getChatCountV2Result }}</div>
    <input type="text" v-model="getChatCountV2Result">
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useStore} from "vuex";
import {key} from "@/store";
const store = useStore(key)

console.log("store", store);
let defaultCount = computed(() => store.state.defaultCount)
console.log("defaultCount", defaultCount);
let chatCount = computed(() => store.state.chatCount)
console.log("chatCount", chatCount);
let chatCountV2 = computed(() => store.state.CHAT_V2.chatCountV2)
console.log("chatCountV2", chatCountV2);

function getChatCountV2() {
  let getChatCountV2Result = store.getters.getChatCountV2
  console.log("[xuegao-vuex4-ts][App.vue][getChatCountV2Result=s%]", getChatCountV2Result)
  return getChatCountV2Result
}
let getChatCountV2Result = getChatCountV2()

function incr() {
  // 使用 mutation
  store.commit('increment')
}

function ChatIncrement() {
  // 使用 mutation
  store.commit('ChatIncrement')
}

function ChatV2Increment() {
  // 使用 mutation
  store.commit('ChatV2Increment')
}

function ChatV2DiyStateIncr() {
  // 使用 mutation
  store.commit('ChatV2DiyStateIncr')
}
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
