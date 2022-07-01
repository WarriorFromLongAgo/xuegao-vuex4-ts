<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <button @click="ChatMutations">ChatMutations</button> | chatCount getter = {{ chatCountGetter }}
    | chatCount getter = {{ chatCountGetter2 }}
    <h1></h1>
    <button @click="ChatV2Mutations">ChatV2Mutations</button> | chatCountV2 getter = {{ chatCountV2Getter }}
    | chatCountV2 getter = {{ chatCountV2Getter2 }}
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useStore} from "vuex";
const store = useStore()

let chatCountGetter = computed(() => store.getters.getChatCount)
console.log("chatCountGetter", chatCountGetter);
let chatCountV2Getter = computed(() => store.getters.getChatCountV2)
console.log("chatCountV2Getter", chatCountV2Getter);

let chatCountGetter2 = computed(() => store.getters.getChatCount2)
console.log("chatCountGetter2", chatCountGetter2);
let chatCountV2Getter2 = computed(() => store.getters.getChatCountV22)
console.log("chatCountGetter2", chatCountGetter2);

function ChatMutations() {
  // 使用 mutation
  store.commit('ChatMutations')
}
function ChatV2Mutations() {
  // 使用 mutation
  store.commit('ChatV2Mutations')
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
