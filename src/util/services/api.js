/* eslint-disable import/no-anonymous-default-export */
const URL = "http://localhost:8080";
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

async function deleteApi(url) {
  const res = await fetch(`${URL}${url}`, {
    method: "DELETE",
  });
  return res.json();
}
export default {
  //-----PRODUCTS
  getProductByID(id) {
    return getApi(`/products/${id}`);
  },
  getAllProduct() {
    return getApi(`/products`);
  },
  createProduct(product) {
    return postApi(`/products`, product);
  },
  updateProduct(id, product) {
    return putApi(`/products/${id}`, product);
  },
  deleteProduct(id) {
    return deleteApi(`/products/${id}`);
  },
  changeProductStatus(id) {
    return putApi(`/products/${id}`, null);
  },

  //-----COLLECTIONS
  getAllCollection() {
    return getApi("/collections");
  },
  getCollectionByID(id) {
    return getApi(`/collections/${id}`);
  },
  getProductByCollectionID(id) {
    return getApi(`/collections/${id}/products`);
  },
  createCollection(collection) {
    return postApi(`/collections`, collection);
  },
  updateCollection(id, collection) {
    return putApi(`/collections/${id}`, collection);
  },
  deleteCollection(id) {
    return deleteApi(`/collections/${id}`);
  },

  //-----Order
  getAllOrders() {
    return getApi(`/orders`);
  },
  getOrderByID(id) {
    return getApi(`/orders/${id}`);
  },
  getOrderByCustomerID(customerID) {
    return getApi(`/orders/customer/${customerID}`);
  },
  getOrderByStatusID(statusID) {
    return getApi(`/orders/status/${statusID}`);
  },
  getOrderByCustomerIDAndStatusID(customerID, statusID) {
    return getApi(`/${customerID}/${statusID}`);
  },
  getOrderByTimeRange(fromDate, toDate) {
    return getApi(`/orders/${fromDate}/${toDate}`);
  },
  getOrderItemByOrderID(id) {
    return getApi(`/orders/${id}/items`);
  },
  createOrder(order) {
    return postApi(`/orders`, order);
  },
  updateOrder(id, order) {
    return putApi(`/orders/${id}`, order);
  },
  deleteOrder(id) {
    return deleteApi(`/orders/${id}`);
  },

  // ORDER_ITEM
  getAllOrderItems() {
    return getApi(`/orderItems`);
  },
  getOrderItemByID(id) {
    return getApi(`/orderItems/${id}`);
  },
  createOrderItem(orderItem) {
    return postApi(`/orderItems`, orderItem);
  },
  updateOrderItem(id, orderItem) {
    return putApi(`/orderItems/${id}`, orderItem);
  },
  deleteOrderItem(id) {
    return deleteApi(`/orderItems/${id}`);
  },

  // SIZE_IN_PRODUCT
  getAllSizeInProducts() {
    return getApi(`/sizeInProducts`);
  },
  getSizeInProductByID(id) {
    return getApi(`/sizeInProducts/${id}`);
  },
  createSizeInProduct(sizeInProduct) {
    return postApi(`/sizeInProducts`, sizeInProduct);
  },
  updateSizeInProduct(id, sizeInProduct) {
    return putApi(`/sizeInProducts/${id}`, sizeInProduct);
  },
  updateSizeInProductQuantity(id, newQuantity) {
    return putApi(`/sizeInProducts/${id}/update/${newQuantity}`, null);
  },
  deleteSizeInProduct(id) {
    return deleteApi(`/sizeInProducts/${id}`);
  },
};
