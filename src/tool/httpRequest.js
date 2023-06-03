//axios
import axios from 'axios';

const config =
{
    "AWord": "https://v1.hitokoto.cn"
}

//Get调用一言接口
export function getAWord(ok,err=null){
    GetHelp(config.AWord,(data) => {
        ok(data.hitokoto)
    },err);
}

// //示例调用Get方法
// export function GetTest() {
//     GetHelp(config.Url + config.Test, (data) => {
//         console.log(data);
//     }, (error) => {
//         console.log(error);
//     });
// }

// //示例调用Post方法
// export function PostTest() {
//     PostHelp(config.Url + config.Test, {}, (data) => {
//         console.log(data);
//     }, (error) => {
//         console.log(error);
//     });
// }

//Get请求
export async function GetHelp(url, ok, err, token = '') {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        if (response.status !== 200) {
            err && err(response.statusText);
        }

        ok(response.data);
    } catch (error) {
        err && err(error.message);
    }
    loading.close();
}

//Post请求
export async function PostHelp(url, data, ok, err, token = '') {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        if (response.status !== 200) {
            err && err(response.statusText);
        }
        ok(response.data);
    } catch (error) {
        err && err(error.message);
    }

    loading.close();
}
