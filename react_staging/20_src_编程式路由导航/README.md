## 向路由组件传递参数
        1.params参数
                路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
                注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
                接收参数：this.props.match.params
        2.search参数
                路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
                注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
                接收参数：this.props.location.search
                备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
        3.state参数
                路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
                注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
                接收参数：this.props.location.state
                备注：刷新也可以保留住参数

## 编程式路由导航
        借助this.prosp.history对象上的API对操作路由跳转、前进、后退
                        -this.prosp.history.push()
                        -this.prosp.history.replace()
                        -this.prosp.history.goBack()
                        -this.prosp.history.goForward()
                        -this.prosp.history.go()                