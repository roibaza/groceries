import { useSelector } from "react-redux";
import Header from "./components/Header";
import styled from "styled-components";
import GroceryItem from "./components/GroceryItem";
import SearchSelect from "./components/SearchSelect";
import {v4 as uuid} from "uuid";

const Groceries = () => {
    const state = useSelector((storeState) => storeState);

    const groceries = state.groceriesReducer.value;

    return (
        <Container>
            <Header title="Groceries"/>
            <SearchSelect />
            <GroceryItemsWrapper className="grocery-items">
                {
                    groceries.map((item) => <GroceryItem key={uuid()} checked={item.active}>{item.name}</GroceryItem>)
                }
            </GroceryItemsWrapper>
        </Container>
    );
}

export default Groceries;

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    border: 1px solid #D4D4D5;
    z-index: 0;
`;

const GroceryItemsWrapper = styled.div`
    padding: 0 5px;
    width: 100%;
    height: calc(100% - 90px);
    overflow: auto;
    box-sizing: border-box;
    z-index: 0;
`;