/* eslint-disable import/no-anonymous-default-export */
const URL = "http://localhost:8080"
//------------

async function getApi(url) {
    const res = await fetch(`${URL}${url}`, {
        method: "GET",
    });
    return res.json();
}

function postApi(url, data) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    };
    return fetch(`${URL}${url}`, requestOptions);
}

function putApi(url, data) {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    };
    return fetch(`${URL}${url}`, requestOptions);
}

function deleteApi(url, data) {
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    return fetch(`${URL}${url}`, requestOptions);
}
export default {
    //-----PRODUCTS
    getProductByID(id) {
        return getApi(`/products/${id}`);
    },
    getAllProduct() {
        return getApi(`/products`);
    }
}