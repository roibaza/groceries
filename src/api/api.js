import axios from "axios";

export const getProducts = async () => {
    let res = await axios(
        "https://mocki.io/v1/5ca1712d-cb22-45ab-bff4-3733ba4910bc"
    );
    // console.log(res);
    // res = await res.json();
    return res.data;
};