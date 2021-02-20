export const state = () => ({
    users: [
        {
            name: 'Marcin',
            id: '312',
        },
        {
            name: 'Wojtek',
            id: '313'
        },
        {
            name: 'Czlowiek',
            id: '314'
        }
    ],
    users20: [
        {
            name: 'Marcin',
            id: '312',
        },
        {
            name: 'Wojtek',
            id: '313'
        },
        {
            name: 'Czlowiek',
            id: '314'
        }
    ],

});

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

// export const mutations = {
//     updateValue: (state, payload) => {
//         state.value = payload
//     }
// }

// export const actions = {
//     updateActionValue({ commit }) {
//         commit('updateValue', payload)
//     }
// }