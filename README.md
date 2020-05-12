# Blog
## Route Design

| 路由      | 方法 | get参数 | post参数                  | 是否需要权限 | 备注         |
| --------- | ---- | ------- | ------------------------- | ------------ | ------------ |
| /         | GET  |         |                           |              | 请求首页     |
| /register | GET  |         |                           |              | 请求注册页面 |
| /register | POST |         | email, nickname, password |              | 处理注册请求 |
| /login    | GET  |         |                           |              | 请求登录页面 |
| /login    | POST |         | email, password           |              | 处理登录请求 |
| /logout   | GET  |         |                           |              | 处理登出请求 |

