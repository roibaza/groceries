import styled from "styled-components";
import Plus from "./Plus";
import {useState, useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { addProduct } from '../redux/actions/groceries.actions'
import {useDebounce} from "../hooks/useDebounce";
import { getProducts } from '../api/api';
import SearchItem from './SearchItem';
import Filters from "./Filters";
import {v4 as uuid} from "uuid";

const SearchSelect = () => {
    const [val, setVal] = useState("");
    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [display, setDisplay] = useState(false);
    const dispatch = useDispatch();
    const debounceSearchTerm = useDebounce(val, 300);
    const inputRef = useRef(null);

    const handleClick = (newVal) => {
        dispatch(addProduct(newVal));
    }

    useEffect(() => {
        getProducts().then((res) => {
            setOptions(res);
        });
    }, []);

    useEffect(() => {
        // console.log(display);
    }, [display]);

    useEffect(() => {
        if(debounceSearchTerm) {
            setFilteredOptions(options.filter((item) => item.name.toLowerCase().includes(debounceSearchTerm.toLowerCase())));
        } else {
            setFilteredOptions([]);
        }
    }, [debounceSearchTerm, options])

    return (
        <Container>
            <Wrapper>
                <Plus/>
                <input
                    id="input"
                    autoComplete="off"
                    ref={inputRef}
                    value={val}
                    placeholder="Add New Item"
                    onChange={(e) => setVal(e.target.value)}
                    onFocus={() => setDisplay(true)}
                />
                <Filters />
            </Wrapper>
            <Selection
                className="options"
                tabindex="-1"
                show={filteredOptions.length && display ? "block" : "none"}
                onMouseLeave={() => setDisplay(false)}
            >
                {filteredOptions.map((item, index) => (
                    <SearchItem className="item" key={uuid()} handleClick={handleClick}>
                        {item.name}
                    </SearchItem>
                ))}
            </Selection>
        </Container>
    );
}

export default SearchSelect;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
`;

const Selection = styled.div`
  display: ${({ show }) => show};
  position: absolute;
  top: 90px;
  width: 225px;
  padding: 0 5px;
  max-height: 300px;
  overflow: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-left: 30px;
  box-shadow: 1px 1px 0px 0px #eee;
  z-index: 1;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 500px;
    border: 5px solid #EFF2F7;
    box-sizing: border-box;
    #input {
        display: flex;
        justify-content: flex-start;
        width: 250px;
        height: 40px;
        border: none;
        box-sizing: border-box;
        &focus {
            border: none;
        }
        :focus-visible {
            outline: none;
        }
`;

