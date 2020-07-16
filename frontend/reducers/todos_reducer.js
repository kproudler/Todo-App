const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "wax after wash",
        done: false
    },
    2: {
        id: 2,
        title: "buy groceries",
        body: "fruits and veggies",
        done: true
    }
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default todosReducer;