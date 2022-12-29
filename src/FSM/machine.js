const createMachine = (fsmConfig) => {
    const machine = {
        id: fsmConfig.id,
        value: fsmConfig.initial,
        context: fsmConfig.initial,
        transitions: (state, event) => {
            let result = state;
            if (fsmConfig.on) {
                const transition = fsmConfig.on[event.type];
                if (transition === undefined) {
                    return result;
                }
                result = transition(state, event.payload);
            }

            return result;
        }
    };
    return machine;
}

// let state = groceryMachine;
// console.log(`current state: ${JSON.stringify(state.value)}`);
// state = groceryMachine.transitions(state.context, { type: "Add", payload: 3 });
// state = groceryMachine.transitions(state.context, { type: "Add", payload: 6 });
// console.log(`current state: ${JSON.stringify(state.value)}`);
// state = groceryMachine.transitions(state.context, { type: "Filter", payload: 3});
// console.log(`current state: ${JSON.stringify(state.value)}`);
// state = groceryMachine.transitions(state.context, { type: "Add", payload: 6 });
// console.log(`current state: ${JSON.stringify(state.value)}`);

export default createMachine;
