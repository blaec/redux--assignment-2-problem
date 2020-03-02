
const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                results: state.results.concat({
                    id: Math.random(),
                    name: 'Max',
                    age: Math.floor(Math.random() * 40)
                })
            };
        case 'DELETE':
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            };
    }
    return state;
};

export default reducer;