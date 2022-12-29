import filtersMachine from '../../FSM/filtersMachine';
import createMachine from '../../FSM/machine';

const machine = createMachine(filtersMachine);

const filtersReducer = (state = machine, action) => {
    return machine.transitions(state, action);
}

export default filtersReducer;
