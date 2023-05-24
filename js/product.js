import { drawProduct } from "./drawProduct.js";
import { params } from "./constant.js";
import { up, down, display } from "./constant.js";
import { paginateBack, paginatePrevent } from "./pagination.js";
import { filter } from "./constant.js";
drawProduct();
up.addEventListener("click", () => {
    paginatePrevent(parseInt(params.page));

})
down.addEventListener("click", () => {
    if (parseInt(params.page) > 1) {
        paginateBack(parseInt(params.page));
    }
})
filter.addEventListener("change", () => {
    if (filter.value === "thap-den-cao") {
        params.sort = "price";
        params.order = "asc";
        drawProduct();
    } else if (filter.value === "cao-den-thap") {
        params.sort = "price";
        params.order = "desc";
        drawProduct();
    }
    else if (filter.value === "mac-dinh") {
        params.sort = "";
        params.order = "";
        drawProduct();
    }
    else {
        params.sort = "discountPercentage";
        params.order = "desc";
        drawProduct();
    }
})

