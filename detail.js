window.onload = function(){

    let targetObj = document.querySelector("#target");
    let search = location.search.substring(1);
    let urlParams = new URLSearchParams(search);
    let prodId = urlParams.get("prodId");

    let showProduct;

    for(let i = 0; i < rawdata.length; i++){
        if(prodId == rawdata[i].prodId){
            showProduct = rawdata[i];
        }
    }

    let str = `
        <h5>${showProduct.title}</h5>
        <hr>
        <div class="col-12 col-sm-12 col-md-12 col-xl-5">
            <img src="https://storage.googleapis.com/luxe_media/wwwroot/${showProduct.productMedia[0].url}" />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-xl-6">
            <p>${showProduct.description}</p>
            <p>${showProduct.price}</p>
        </div>
    `;

    targetObj.innerHTML = str;

}