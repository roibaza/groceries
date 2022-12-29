import * as AT from "../action.types";
import {SHOW_CHECKED} from "../action.types";

export const addProduct = (name) => ({
    type: AT.ADD_PRODUCT,
    payload: {
        name: name,
        active: true,
    }
});

export const removeProduct = (name) => ({
    type: AT.REMOVE_PRODUCT,
    payload: {
        name: name,
        active: false,
    }
});

export const checkProduct = (name) => ({
    type: AT.CHECK_PRODUCT,
    payload: {
        name: name,
        active: false,
    }
});

export const showAll = () => ({
    type: AT.SHOW_ALL,
    payload: {}
});

export const showChecked = () => ({
    type: AT.SHOW_CHECKED,
    payload: {}
});

export const showUnChecked = () => ({
    type: AT.SHOW_UNCHECKED,
    payload: {}
});