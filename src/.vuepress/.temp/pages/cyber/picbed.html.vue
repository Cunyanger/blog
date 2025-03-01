<template><div><p>github 作为云存储，jsDeliv 作为 CDN，PicGo 充作为图片 git push 工具</p>
<!-- more -->
<h2 id="github" tabindex="-1"><a class="header-anchor" href="#github"><span>Github</span></a></h2>
<p><a href="https://link.zhihu.com/?target=https%3A//github.com/" target="_blank" rel="noopener noreferrer">https://github.com/</a></p>
<h3 id="新建-repository" tabindex="-1"><a class="header-anchor" href="#新建-repository"><span>新建 Repository</span></a></h3>
<p>可以创建一个<code v-pre>images</code>文件夹，在 CDN 中图片所在项目目录填写<code v-pre>images</code></p>
<h3 id="创建访问令牌" tabindex="-1"><a class="header-anchor" href="#创建访问令牌"><span>创建访问令牌</span></a></h3>
<p><strong>Settings</strong> --&gt; <strong>Developer settings</strong>--&gt; <strong>Personal access tokens</strong> --&gt; <strong>New personal access token</strong> --&gt; <strong>copy token</strong></p>
<div class="hint-container tip">
<p class="hint-container-title">token 权限</p>
<ul>
<li>打开所有权限</li>
</ul>
</div>
<h2 id="jsdelivr" tabindex="-1"><a class="header-anchor" href="#jsdelivr"><span>jsDelivr</span></a></h2>
<p><a href="https://link.zhihu.com/?target=https%3A//www.jsdelivr.com/%3Fdocs%3Dgh" target="_blank" rel="noopener noreferrer">https://www.jsdelivr.com/?docs=gh</a></p>
<p>·<a href="https://cdn.jsdelivr.net/gh/github%E7%94%A8%E6%88%B7%E5%90%8D/%E4%BB%93%E5%BA%93%E5%90%8D%E7%A7%B0@%E5%88%86%E6%94%AF/%E5%9B%BE%E7%89%87%E6%89%80%E5%9C%A8%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%C2%B7" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/gh/github用户名/仓库名称@分支/图片所在项目目录·</a></p>
<h2 id="picgo" tabindex="-1"><a class="header-anchor" href="#picgo"><span>PicGo</span></a></h2>
<p>PicList使用更加方便，也支持Typora</p>
<hr>
<h2 id="遇到问题" tabindex="-1"><a class="header-anchor" href="#遇到问题"><span>遇到问题</span></a></h2>
<p>使用代理可能出现 picGo 上传图片失败的情况，需要关闭代理上传文件</p>
<p>可以使用 PicList 删除云端的图片，PicGo 能删除云端图片，会出现图片名重复的问题</p>
</div></template>


