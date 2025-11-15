window.onload = function(){
    let targetObj = document.querySelector('#target');
    let result = [];

    for(let i = 0; i < rawdata.length; i++){
        if(rawdata[i].productMedia.length > 0)
        {
            result.push(rawdata[i]);
        }
    }

    for(let j = 0; j < result.length; j++){
        let str = `<div class="col-lg-3 col-md-6 col-sm-12 mt-3">
            <div class="card h-100">
              <div class="card-header">
                <a href="./detail.html?prodId=${result[j].prodId}">
                    <img src="https://storage.googleapis.com/luxe_media/wwwroot/${result[j].productMedia[0].url}"/>
                </a>
              </div>
              <div class="card-body">
                <div class="card-title">${result[j].title}</div>
              </div>
              <div class="card-footer">$ ${result[j].price}</div>
            </div>
        </div>`;
        targetObj.innerHTML += str;
    }
}

function filterByPrice() {
    let targetObj = document.querySelector('#target');
    let result_filterMedia = [];

    const select = document.getElementById('priceRange');
    const range = select.value;

    const [minStr, maxStr] = range.split('-');
    const min = parseFloat(minStr);
    const max = maxStr === 'max' ? Infinity : parseFloat(maxStr);

    console.log(range);
    console.log(min);
    console.log(max);

    for(let i = 0; i < rawdata.length; i++){
        if(rawdata[i].productMedia.length > 0)
        {
            result_filterMedia.push(rawdata[i]);
        }
    }

    let result_filterPrice = [];

    for(let i = 0; i < result_filterMedia.length; i++){
        // console.log(result_filterMedia[i]);
        // break;

        if(result_filterMedia[i].price >= min && result_filterMedia[i].price <= max){
            // console.log(result_filterMedia[i].price);
            result_filterPrice.push(result_filterMedia[i]);
        }
    }

    targetObj.innerHTML = ``;

    for(let j = 0; j < result_filterPrice.length; j++){
        let str = `<div class="col-lg-3 col-md-6 col-sm-12 mt-3">
            <div class="card h-100">
              <div class="card-header">
                <a href="./detail.html?prodId=${result_filterPrice[j].prodId}">
                    <img src="https://storage.googleapis.com/luxe_media/wwwroot/${result_filterPrice[j].productMedia[0].url}"/>
                </a>
              </div>
              <div class="card-body">
                <div class="card-title">${result_filterPrice[j].title}</div>
              </div>
              <div class="card-footer">$ ${result_filterPrice[j].price}</div>
            </div>
        </div>`;
        targetObj.innerHTML += str;
    }

}
