// import { computed } from 'vue'
// import { mapGetters, mapState, useStore } from 'vuex'
//
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// const useMapper = (mapper, mapFn) => {
//     const store = useStore()
//
//     const storeStateFns = mapFn(mapper)
//     const storeState = {}
//     Object.keys(storeStateFns).forEach((keyFn) => {
//         const fn = storeStateFns[keyFn].bind({ $store: store })
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         storeState[keyFn] = computed(fn)
//     })
//
//     return storeState
// }
//
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// export const useStateTest = ( mapper) => {
//     return useMapper(mapper, mapState)
// }
//
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// export const useGettersTest = (mapper) => {
//     return useMapper(mapper, mapGetters)
// }
//
