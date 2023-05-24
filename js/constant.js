const PATH = "http://localhost:3000";
export const API_PRODUCT = `${PATH}/products`;
export const API_CATEGORY = `${PATH}/category`;
export const category = document.querySelector("#category");
export const product = document.querySelector("#product");
export const button = document.querySelector("#button");
export const input = document.querySelector("#input");
export const filter = document.querySelector("#filter");
export const up = document.querySelector("#up");
export const down = document.querySelector("#down");
export const display = document.querySelector("#display");
export const params = {
    sort: "",
    order: "",
    page: "1",
    limit: "18",
    start: "",
    category: "",
};
