import styled from "styled-components";
import CheckBox from "./CheckBox";
import Xmark from "./Xmark";
import { useDispatch } from "react-redux";
import {removeProduct, checkProduct, showAll} from '../redux/actions/groceries.actions'
import {all} from "../redux/actions/filters.actions";

const GroceryItem = ({children, checked}) => {
    
    const dispatch = useDispatch();

    const handleCheck = (item) => {
        dispatch(checkProduct(item));
    }
    
    const handleRemove = (item) => {
        dispatch(removeProduct(item));
        dispatch(all());
        dispatch(showAll());
    }

    return (
        <Container className="item">
            <div className="checkbox" onClick={() => handleCheck(children)}><CheckBox checked={checked}/></div>
            <div className="text">{children}</div>
            <div className="delete" onClick={() => handleRemove(children)}><Xmark/></div>
        </Container>
    );
}

export default GroceryItem;

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D4D4D5;
    box-sizing: border-box;
    z-index: 0;
    
    .text {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding-left: 10px;
    }
    
    &:last-child {
        border-bottom: none;
    }
`;
