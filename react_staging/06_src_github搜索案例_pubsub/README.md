# 消息订阅-发布机制
1. 工具库: PubSubJS
2. 下载: npm install pubsub-js --save
3. 使用: 
    1) import PubSub from 'pubsub-js' //引入
    2) PubSub.subscribe('delete', function(data){ }); //订阅
    3) PubSub.publish('delete', data) //发布消息
