// Where we are going to create Context
// 1 global state (smaller application)

import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
     transactions: [
        /* Dummy values; expenses <0, income >0
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }*/
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component (wrapping; children are the components)
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions (that make calls to Reducer)
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}