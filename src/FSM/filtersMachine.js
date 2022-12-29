const filtersMachine = {
    id: "filters",
    initial: [true, false, false],
    on: {
        ALL: () => {
            return {
                value: [true, false, false],
                context: [true, false, false]
            };
        },
        CHECKED: () => {
            return {
                value: [false, true, false],
                context: [false, true, false]
            };
        },
        UNCHECKED: () => {
            return {
                value: [false, false, true],
                context: [false, false, true]
            };
        }
    }
};

export default filtersMachine;