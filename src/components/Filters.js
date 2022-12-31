import React from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import { all, checked, unchecked } from "../redux/actions/filters.actions";
import { showAll, showChecked, showUnChecked } from "../redux/actions/groceries.actions";

const Filters = () => {
    const state = useSelector((storeState) => storeState.filtersReducer);
    const dispatch = useDispatch();

    const handleClick = (filter) => {
        if(filter === "CHECKED") {
            dispatch(checked());
            dispatch(showChecked());
        } else if(filter === "UNCHECKED") {
            dispatch(unchecked());
            dispatch(showUnChecked());
        } else {
            dispatch(all());
            dispatch(showAll());
        }
    }

    return (
        <Container className="filters">
            <Filter
                className="all"
                active={state.context[0]}
                onClick={() => handleClick("ALL")}
            >All</Filter>
            <Filter
                className="checked"
                active={state.context[1]}
                onClick={() => handleClick("CHECKED")}
            >Checked</Filter>
            <Filter
                className="unchecked"
                active={state.context[2]}
                onClick={() => handleClick("UNCHECKED")}
            >UnChecked</Filter>
        </Container>
    )
};

export default Filters;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    height: 40px;
    padding: 0 10px;
    background-color: #EFF2F7;
    
    .all , .checked, .unchecked {
        cursor: pointer;
    }
`;

const Filter = styled.div`
    color: ${({ active }) => active ? "#000": "#ccc"}
`;