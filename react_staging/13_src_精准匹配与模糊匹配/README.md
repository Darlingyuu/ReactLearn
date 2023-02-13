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
    
## 路由组件与一般组件
        1.写法不同：
                    一般组件：<Demo/>
                    路由组件：<Route path="/demo" component={Demo}/>
        2.存放位置不同：
                    一般组件：components
                    路由组件：pages
        3.接收到的props不同：
                    一般组件：写组件标签时传递了什么，就能收到什么
                    路由组件：接收到三个固定的属性
                                history:
                                    go: ƒ go(n)
                                    goBack: ƒ goBack()
                                    goForward: ƒ goForward()
                                    push: ƒ push(path, state)
                                    replace: ƒ replace(path, state)
                                location:
                                    pathname: "/about"
                                    search: ""
                                    state: undefined
                                match:
                                    params: {}
                                    path: "/about"
                                    url: "/about"
## NavLink与封装NavLink
        1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
        2.标签体内容是一个特殊的标签属性
        3.通过this.props.children可以 获取标签体内容

## Switch的使用
        1.通常情况下，path和component是一一对应的关系。
        2.Switch可以提高路由匹配效率(单一匹配)。
        
## 解决多级路径刷新页面样式丢失的问题
        1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
        2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
        3.使用HashRouter   

## 路由的严格匹配与模糊匹配
        1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
        2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
        3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
