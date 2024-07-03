## 官方文档

[首页 | VuePress (vuejs.press)](https://vuejs.press/zh/)



## git使用SSH连接仓库

1. ssh连接github需要修改设置 ` ~/.ssh/config`

``````
# GitHub Account
Host github.com
HostName ssh.github.com
Port 443
PreferredAuthentications publickey
IdentityFile <path to your private ssh key>
``````

2. 修改后测试连接

```shell 
ssh -T -p 443 git@ssh.github.com
```



## 修改配置文件

出现部署后无样式问题需要再配置文件中设置 `base`属性， `/blog/` 为git仓库名称

```js
base: "/blog/",
```



## 部署命令

```sh
sh deploy.sh
```

