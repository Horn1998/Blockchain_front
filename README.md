# login-register-vue-node
## 1.Promise理解
- 由于ajax请求数据时，我们不能知道数据具体回来的时间，所以只能将一个callback函数传递给ajax封装的方法，当ajax请求完成后，执行callback
- promise对象接收resolv、reject两个参数，当一个异步动作发生时，promise对象会通过resolve完成动作进行解析，reject负责捕获异常。
- 一个Promise对象通过new Promise().then()执行下一步操作

new Promise((resolve, reject) =>{
    setTimeout(() =>{
        //成功的时候调用resolve
        resolve('成功data')
        //失败的时候调用reject
        reject('error message')
    }, 1000)
}).then((data) =>{
    //处理成功后的逻辑
    console.log(data);//这个data 是接收的resolve参数
}).catch((err) =>{
    console.log(err);
})

