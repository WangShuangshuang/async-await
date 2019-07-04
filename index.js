/**
 * Created on 2019/7/4.
 */

async function getList(){
    console.log('0', new Date().getMilliseconds());
    var res = await fetch('http://rap2api.taobao.org/app/mock/161557/index0');
    console.log('1', new Date().getMilliseconds());
    var data = await res.json();
    console.log('2', new Date().getMilliseconds());
    return data;
}

getList().then((res)=>{console.log('3', new Date().getMilliseconds());console.log('res:', res)});
