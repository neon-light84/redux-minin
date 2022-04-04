const redux = require('redux')

const initialState = {
    counter: 0
}

// Reducer
// тут описать все возможные экшены на изменения store-а (и как на них реагировать).
// Его можно менять только через заранее заготовленные экшены.
// Дергать через dispatch
// В уроке упомянули про стрелочную функцию, можно он должен быть имено стрелочноый.
const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'SUB') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        }
    }
    return state;
}

// Store
// "Центральное" хранилище всех "Глобальных переменных". На весь проект ОДИН store.
const store = redux.createStore(reducer)

// вот так store.getState() можно посмотреть текущее состояние стора

// А вот так можно подписаться на изменения стора
store.subscribe( () => {
    console.log('Subscribe', store.getState())

})


// Action
const addCounter ={
    type: 'ADD'
}

// вот так меняют состояние  (возможные значения type должны быть перечислены в reducer
store.dispatch(addCounter)
store.dispatch({type: 'SUB'})
store.dispatch({type: 'ADD_NUMBER', value: 10})
