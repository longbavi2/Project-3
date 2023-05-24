import { params } from "./constant.js";
import { drawProduct } from "./drawProduct.js";
// Sang trang tiếp theo 
export const paginatePrevent =(page)=>{
    let numbePage = page + 1;
    display.innerHTML = `${numbePage}`;
    params.page = `${numbePage}`
    params.start = (parseInt(params.page)-1) * params.limit;
    drawProduct();
}
// Quay lại trang trước đó 
export const paginateBack =(page)=>{
    let numbePage = page - 1;
    display.innerHTML = `${numbePage}`;
    params.page = `${numbePage}`
    params.start = (numbePage-1) * params.limit;
    drawProduct();
}