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



## .gitignore文件

```
node_modules
# VuePress 默认临时文件目录
docs/.vuepress/.temp
# VuePress 默认缓存目录
docs/.vuepress/.cache
# VuePress 默认构建生成的静态文件目录
docs/.vuepress/dist
```



## 修改配置文件

出现部署后无样式问题需要再配置文件中设置 `base`属性， `/blog/` 为git仓库名称

```js
base: "/blog/",
```



## 打包部署脚本 deploy.sh

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 发布到 git@github.com:<username>/<repos-name>.git master:<branch>
 git push -f git@github.com:Cunyanger/blog.git master:gh-pages


```



## 部署命令

```sh
sh deploy.sh
```

