const groceryMachine = {
    id: "groceries",
    initial: [],
    on: {
        ADD_PRODUCT: (state, payload) => {
            let tmp = [...state.context];
            tmp.push(payload);
            return {
                value: tmp,
                context: tmp
            };
        },
        REMOVE_PRODUCT: (state, payload) => {
            return {
                value: state.context.filter((item) => item.name !== payload.name),
                context: state.context.filter((item) => item.name !== payload.name)
            };
        },
        CHECK_PRODUCT: (state, payload) => {
            return {
                value: state.context.map((item) => item.name === payload.name ? {...item, active: payload.active} : item),
                context: state.context.map((item) => item.name === payload.name ? {...item, active: payload.active} : item),
            };
        },
        SHOW_CHECKED: (state, payload) => {
            return {
                value: state.context.filter((item) => !item.active),
                context: state.context,
            };
        },
        SHOW_UNCHECKED: (state, payload) => {
            return {
                value: state.context.filter((item) => item.active),
                context: state.context,
            };
        },
        SHOW_ALL: (state, payload) => {
            return {
                value: state.context,
                context: state.context,
            };
        }
    }
};

export default groceryMachine;