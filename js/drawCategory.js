import { category } from "./constant.js";
import { API_CATEGORY } from "./constant.js";
import { params } from "./constant.js";
import { drawProduct } from "./drawProduct.js";
import { button, input } from "./constant.js";
export const drawCategory = () => {
    fetch(API_CATEGORY).then(res => res.json())
        .then(data => {
            var dataCategory = data.map(item => {
                return (
                    `<div class="category-item">
                       ${item}
                     </div>`
                )
            })
            var dataFinal = dataCategory.join("");
            category.innerHTML = dataFinal;
            // click sẽ vẽ lại giao diện sản phẩm theo danh mục category 
            let categoryItem = document.querySelectorAll(".category-item")
            categoryItem.forEach(element => {
                element.addEventListener("click", () => {
                    params.category = element.innerText;
                    drawProduct();
                })
            });
            // Sản phẩm theo tên 
            button.addEventListener("click", () => {
                let fil = data.filter(item => {
                    return item.includes(input.value)
                })
                params.category = fil[0];
                drawProduct();
            })
        })
}