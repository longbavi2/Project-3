import { API_PRODUCT } from "./constant.js";
import { product } from "./constant.js";
import { params } from "./constant.js";
export const drawProduct = () => {
    let api = "";
    if (params.category != "") {
       params.q = `category=${params.category}`;
    }
    api = `${API_PRODUCT}?${params.q}&_sort=${params.sort}&_order=${params.order}&_start=${params.start}&_limit=${params.limit}`
    console.log(api)
    fetch(api).then(res => res.json())
        .then(data => {
            let dataProduct = data.map(item => {
                return (
                    `
                    <div class="product-item">
                    <div class="product-box">
                        <div class="product-image">
                            <img src=${item.thumbnail} alt="thumbnail" />
                        </div>
                        <h4 class="product-title">
                            ${item.title}
                        </h4>
                        <div class="product-meta">
                            <div class="item-price">
                                ${item.price}$
                            </div>
                            <span class="product-discountPercentage">
                                ${item.discountPercentage}%
                            </span>
                            <span class="product-stock">
                                ${item.stock}SP
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                   `
                )
            })
            let dataFinal = dataProduct.join("");
            product.innerHTML = dataFinal;
        })
}
