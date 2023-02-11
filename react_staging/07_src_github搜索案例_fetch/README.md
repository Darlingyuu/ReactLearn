# Fetch
1. 文档
    1. https://github.github.io/fetch/
    
    2. https://segmentfault.com/a/1190000003810652
2. 特点
    1. vfetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求
    2. 老版本浏览器可能不支持
3. 相关API

    1. GET请求
    
    ```json
     fetch(url).then(function(response){
        return response.json()
      }).then(function(data) {
        console.log(data)
      }).catch(function(e) {
        console.log(e)
      });
    ```

    2. POST请求
    
    ```json
      fetch(url,{
        method: "POST",
        body: JSON.stringify(data),
      }).then(function(data) {
        console.log(data)
      }).catch(function(e) {
        console.log(e)
      })
    ```


注意： await用在async匿名函数中
