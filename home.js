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