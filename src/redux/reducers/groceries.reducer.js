import groceryMachine from '../../FSM/groceryMachine';
import createMachine from '../../FSM/machine';

const machine = createMachine(groceryMachine);

const groceriesReducer = (state = machine, action) => {
    return machine.transitions(state, action);
}

export default groceriesReducer;
