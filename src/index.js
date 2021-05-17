import {createStore} from 'redux'
import './style.css'


const result = document.querySelector('.table__value')

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'RES':
            return 0
        default:
            return state
    }
}

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const res = () => ({type: 'RES'})


const store = createStore(reducer)


document.querySelector('.buttons__enc').addEventListener('click', () => {
    store.dispatch(inc())
})
document.querySelector('.buttons__dec').addEventListener('click', () => {
    store.dispatch(dec())
})
document.querySelector('.buttons__res').addEventListener('click', () => {
    store.dispatch(res())
})

const updateResult = () => result.innerHTML = String(store.getState())
store.subscribe(updateResult)























//
// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case  'INC':
//             return state + 1
//         case 'DEC':
//             return state - 1
//         case 'RND':
//             return state + action.value
//
//         default:
//             return state
//     }
// }
//
// const inc = () => ({type: 'INC'})
// const dec = () => ({type: 'DEC'})
// const rnd = (value) => ({type: 'RND', value})
//
// const store = createStore(reducer)
//
// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch(inc())
// })
// document.getElementById('dec').addEventListener('click', () => {
//     store.dispatch(dec())
// })
// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10)
//     store.dispatch(rnd(value))
// })
//
//
// const update = () => {
//     document.getElementById('counter').textContent = String(store.getState())
// }
// store.subscribe(update)
//
