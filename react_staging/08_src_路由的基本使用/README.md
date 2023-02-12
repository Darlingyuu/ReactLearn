## 下载react-router-dom
最新版本：`npm add react-router-dom`或`npm i react-router-dom`

此处使用5版本：`npm add react-router-dom@5`或`npm i react-router-dom@5`


## 路由的基本使用
    1.明确好界面中的导航区、展示区
    2.导航区的a标签改为Link标签
                <Link to="/xxxxx">Demo</Link>
    3.展示区写Route标签进行路径的匹配
                <Route path='/xxxx' component={Demo}/>
    4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>
