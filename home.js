const students = [
    {
        id: "988985",
        name: "梁平",
        sex: '女',
        age: 15,
        address: "北京市",
        tel: "123456789"
    },
    {
        id: "988984",
        name: "张强",
        sex: '男',
        age: 21,
        address: "上海市",
        tel: "4567907543"
    },
    {
        id: "988981",
        name: "赵楠",
        sex: '女',
        age: 30,
        address: "黑龙江省",
        tel: "12347554890"
    },
    {
        id: "988982",
        name: "陆明",
        sex: '女',
        age: 42,
        address: "重庆市",
        tel: "123476436899"
    },
    {
        id: "988989",
        name: "张东",
        sex: '男',
        age: 18,
        address: "北京市",
        tel: "345678912"
    },
    {
        id: "988988",
        name: "孙明",
        sex: '女',
        age: 19,
        address: "成都市",
        tel: "1234562345"
    },
    {
        id: "988987",
        name: "赵杰",
        sex: '女',
        age: 15,
        address: "北京市",
        tel: "14567894567"
    },
    {
        id: "988986",
        name: "张良",
        sex: '男',
        age: 15,
        address: "北京市",
        tel: "12348945332"
    },
    {
        id: "988984",
        name: "黄丽",
        sex: '女',
        age: 17,
        address: "北京市",
        tel: "123456789"
    }
]

/**
 * 1. 遍历输出学生的姓名；
 * 2. 得到所有女生；
 * 3. 得到所有年龄在25岁以下的女生；
 * 4. 得到所有姓孙的学生；
 * 5. 得到所有电话号码为1结尾的学生；
 * 6. 得到所有学生姓名组成的数组；
 * 7. 得到所有学生的姓名组成的字符串，以逗号分隔；
 * 8. 把所有学生姓名以p元素包起来，形成一个html片段；
 * 9. 得到所有女生的姓名数组；
 * 10. 得到所有女生的姓名和电话号码 [{name: 'xxx', tel: 'xxx'}]
 *
 *
 */

window.onload = function(){
    getQuestion1();
    getQuestion2();
    getQuestion3();
    getQuestion4();
    getQuestion5();
    getQuestion6();
    getQuestion7();
    getQuestion8();
    getQuestion9();
    getQuestion10();

}



function getQuestion1(){
        let targetObj = document.querySelector('#question1');
        let result = [];

        for(let i=0; i < students.length; i++){
            // console.log(students[i].name);
            result.push(students[i].name);
        }

        for(let j=0; j<result.length; j++){
            let str = `
            <li>${result[j]}</li>
        `;
            targetObj.innerHTML += str;
        }
}

function getQuestion2(){
    let targetObj = document.querySelector('#question2');
    let result = [];

    for(let i=0; i < students.length; i++){
        if(students[i].sex == '女'){
            result.push(students[i].name);
        }
    }

    for(let j=0; j<result.length; j++){
        let str = `
            <li>${result[j]}</li>
        `;
        targetObj.innerHTML += str;
    }
}

function getQuestion3(){
    let targetObj = document.querySelector('#question3');
    let result = [];

    for(let i=0; i < students.length; i++){
        if(students[i].sex == '女' && students[i].age <= 25){
            result.push(students[i].name);
        }
    }

    for(let j=0; j<result.length; j++){
        let str = `
            <li>${result[j]}</li>
        `;
        targetObj.innerHTML += str;
    }
}

function getQuestion4(){
    let targetObj = document.querySelector('#question4');
    let result = [];

    for(let i=0; i < students.length; i++){
        if(students[i].name.includes('孙')){
            result.push(students[i].name);
        }
    }

    for(let j=0; j<result.length; j++){
        let str = `
            <li>${result[j]}</li>
        `;
        targetObj.innerHTML += str;
    }
}

function isLastDigitOne(tel) {
    tel = String(tel);
    const lastChar = tel.charAt(tel.length - 1);
    return lastChar === '1';
}

function getQuestion5(){
    let targetObj = document.querySelector('#question5');
    let result = [];

    for(let i=0; i < students.length; i++){
        // console.log(students[i].tel);
        if(isLastDigitOne(students[i].tel))
        {
            result.push(students[i].name);
        }
    }
    if(result.length) {
        for(let j=0; j<result.length; j++){
            let str = `
            <li>${result[j]}</li>
        `;
            targetObj.innerHTML += str;
        }
    }
    else{
        let str = `!!!  No One`;
        targetObj.innerHTML += str;
    }
}


function getQuestion6(){
    let targetObj = document.querySelector('#question6');
    let result = [];

    for(let i=0; i < students.length; i++){
        result.push(students[i].name);
    }
    // console.log(result);

    targetObj.textContent = '[' + result.map(item => `'${item}'`).join(", ") + ']';
}

function getQuestion7(){
    let targetObj = document.querySelector('#question7');
    let result = [];

    for(let i=0; i < students.length; i++){
        result.push(students[i].name);
    }
    let nameStr = result.join(', ');
    // console.log(nameStr);
    targetObj.textContent = nameStr;
}

function getQuestion8(){
    let targetObj = document.querySelector('#question8');
    let result = [];

    for(let i=0; i < students.length; i++){
        result.push(students[i].name);
    }
    let nameStr = result.join(', ');
    // console.log(nameStr);
    targetObj.textContent = nameStr;
}

function getQuestion9(){
    let targetObj = document.querySelector('#question9');
    let result = [];

    for(let i=0; i < students.length; i++){
        if(students[i].sex == '女'){
            result.push(students[i].name);
        }
    }
    // console.log(result);
    targetObj.textContent = '[' + result.map(item => `'${item}'`).join(", ") + ']';
}

function getQuestion10(){
    let targetObj = document.querySelector('#question10');
    let result = [];

    for(let i=0; i < students.length; i++){
        if(students[i].sex == '女'){
            result.push(students[i]);
        }
    }
    // console.log(result);
    const femalesInfo = result.map(item => ({name: item.name, tel: item.tel}));
    console.log(femalesInfo);

    for(let j=0; j<femalesInfo.length; j++){
        let str = `
            <li>name:&nbsp&nbsp'${femalesInfo[j].name}',&nbsp&nbsptel:&nbsp&nbsp'${femalesInfo[j].tel}'</li>
        `;
        targetObj.innerHTML += str;
    }
}





/**
 * 根据指定的图片路径，创建一个img元素    let img = document.createElement('img')
 * 该函数需要返回一个Promise，当图片加载完成后，任务完成；若图片加载失败，任务失败
 * 任务完成后，需要提供的数据是图片DOM元素；任务失败时，需要提供失败的原因；
 * 提示：
 *      img元素有两个事件，load事件会在图片加载完成时触发，error事件会在图片加载失败时触发
 *      img.onload = () => {}
 *      img.onerror = (e) => {}
 *
 */
function createImage(imgUrl){
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgUrl;

        img.onload = () => {
            resolve(img);
        };

        img.onerror = (e) => {
            reject(new Error(`加载图片失败：${imgUrl}`));
        };
    });
}


let url = "http://www.mining.com/wp-content/uploads/2014/07/Potash.jpg";
createImage(url).then((img)=>{
    const p = document.getElementById('sizeInfo');
    p.textContent = `宽：${img.width} 像素， 高：${img.height} 像素`;

    const container = document.getElementById('container');
    container.appendChild(img);
    })
    .catch((err)=>{
        console.log(err.message);
    });
/**
 * 使用createImage函数创建一个图像，图像路径自行定义
 * 当图像成功加载后，将图片的宽高显示在p元素中；当图片加载失败后，输出加载失败的原因；
 */



/**
 * 使用createImage函数创建一个图像，图像路径自行定义
 * 当图像成功加载后，将图片元素加入到container容器中   div.appendChild(img)
 * 当图像加载失败后，输出加载失败的原因
 */