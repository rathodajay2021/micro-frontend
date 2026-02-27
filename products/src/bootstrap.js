import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

/**
 * context #1
 * we are running this file in development isolation
 * we are using our local index.html file
 * which DEFNITELY has an element with an a id of #dev-products
 * we want to immediately render our app into the element
 */
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) mount(el);
}

/**
 * context #2
 * we are running this file in development or production
 * through the CONTAINER app
 * no GUARANTEE that an element with an id #dev-products exist
 * WE DO NOT WANT try to immediately render the app
 */

export { mount };
