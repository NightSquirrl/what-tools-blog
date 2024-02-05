<template><div><h2 id="linux-安装-docker-centos" tabindex="-1"><a class="header-anchor" href="#linux-安装-docker-centos"><span>Linux 安装 docker CentOS</span></a></h2>
<h3 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本"><span>卸载旧版本</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>yum remove <span class="token function">docker</span> <span class="token punctuation">\</span>
    docker-client <span class="token punctuation">\</span>
    docker-client-latest <span class="token punctuation">\</span>
    docker-common <span class="token punctuation">\</span>
    docker-latest <span class="token punctuation">\</span>
    docker-latest-logrotate <span class="token punctuation">\</span>
    docker-logrotate <span class="token punctuation">\</span>
    docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置docker的yum库" tabindex="-1"><a class="header-anchor" href="#配置docker的yum库"><span>配置Docker的yum库</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功后，执行命令，配置Docker的yum源：</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre v-pre class="language-Bash"><code>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 docker</span></a></h3>
<div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre v-pre class="language-Bash"><code>yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动和校验" tabindex="-1"><a class="header-anchor" href="#启动和校验"><span>启动和校验</span></a></h3>
<div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre v-pre class="language-Bash"><code># 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置镜像加速" tabindex="-1"><a class="header-anchor" href="#配置镜像加速"><span>配置镜像加速</span></a></h3>
<h4 id="注册阿里云账号" tabindex="-1"><a class="header-anchor" href="#注册阿里云账号"><span>注册阿里云账号</span></a></h4>
<p>https://www.aliyun.com/</p>
<h4 id="开通镜像服务" tabindex="-1"><a class="header-anchor" href="#开通镜像服务"><span>开通镜像服务</span></a></h4>
<p>在首页的产品中，找到阿里云的<strong>容器镜像服务</strong></p>
<p>点击后进入控制台：</p>
<h4 id="配置镜像加速-1" tabindex="-1"><a class="header-anchor" href="#配置镜像加速-1"><span>配置镜像加速</span></a></h4>
<p>找到<strong>镜像工具</strong>下的<strong>镜像</strong>加速器：</p>
<figure><img src="https://img.picgo.net/2023/11/22/4d97fa93-c21b-40f8-8c02-dff9903cc924c68d94394b3bc676.png" alt="4d97fa93-c21b-40f8-8c02-dff9903cc924" tabindex="0" loading="lazy"><figcaption>4d97fa93-c21b-40f8-8c02-dff9903cc924</figcaption></figure>
<div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre v-pre class="language-Bash"><code># 创建目录
mkdir -p /etc/docker

# 复制内容，注意把其中的镜像加速地址改成你自己的
tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
  &quot;registry-mirrors&quot;: [&quot;https://xxxx.mirror.aliyuncs.com&quot;]
}
EOF

# 重新加载配置
systemctl daemon-reload

# 重启Docker
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span>快速入门</span></a></h2>
<h3 id="第一条命令" tabindex="-1"><a class="header-anchor" href="#第一条命令"><span>第一条命令</span></a></h3>
<div class="language-PowerShell line-numbers-mode" data-ext="PowerShell" data-title="PowerShell"><pre v-pre class="language-PowerShell"><code>docker run -d \
  --name mysql \
  -p 3306:3306 \
  -e TZ=Asia/Shanghai \
  -e MYSQL_ROOT_PASSWORD=123 \
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>docker run -d</code> ：创建并运行一个容器，<code v-pre>-d</code>则是让容器以后台进程运行</li>
<li><code v-pre>--name mysql </code> : 给容器起个名字叫<code v-pre>mysql</code>，你可以叫别的</li>
<li><code v-pre>-p 3306:3306</code> : 设置端口映射。
<ul>
<li><strong>容器是隔离环境</strong>，外界不可访问。但是可以<strong>将<strong><strong>宿主机</strong></strong>端口****映射容器内到端口</strong>，当访问宿主机指定端口时，就是在访问容器内的端口了。</li>
<li>容器内端口往往是由容器内的进程决定，例如MySQL进程默认端口是3306，因此容器内端口一定是3306；而宿主机端口则可以任意指定，一般与容器内保持一致。</li>
<li>格式： <code v-pre>-p 宿主机端口:容器内端口</code>，示例中就是将宿主机的3306映射到容器内的3306端口</li>
</ul>
</li>
<li><code v-pre>-e TZ=Asia/Shanghai</code> : 配置容器内进程运行时的一些参数
<ul>
<li>格式：<code v-pre>-e KEY=VALUE</code>，KEY和VALUE都由容器内进程决定</li>
<li>案例中，<code v-pre>TZ=Asia/Shanghai</code>是设置时区；<code v-pre>MYSQL_ROOT_PASSWORD=123</code>是设置MySQL默认密码</li>
</ul>
</li>
<li><code v-pre>mysql</code> : 设置<strong>镜像</strong>名称，Docker会根据这个名字搜索并下载镜像
<ul>
<li>格式：<code v-pre>REPOSITORY:TAG</code>，例如<code v-pre>mysql:8.0</code>，其中<code v-pre>REPOSITORY</code>可以理解为镜像名，<code v-pre>TAG</code>是版本号</li>
<li>在未指定<code v-pre>TAG</code>的情况下，默认是最新版本，也就是<code v-pre>mysql:latest</code></li>
</ul>
</li>
</ul>
<h2 id="命令整理" tabindex="-1"><a class="header-anchor" href="#命令整理"><span>命令整理</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>命令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>文档地址</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker pull</td>
<td style="text-align:left">拉取镜像</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/pull/" target="_blank" rel="noopener noreferrer">docker pull<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker push</td>
<td style="text-align:left">推送镜像到DockerRegistry</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/push/" target="_blank" rel="noopener noreferrer">docker push<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker images</td>
<td style="text-align:left">查看本地镜像</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/images/" target="_blank" rel="noopener noreferrer">docker images<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker rmi</td>
<td style="text-align:left">删除本地镜像</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/rmi/" target="_blank" rel="noopener noreferrer">docker rmi<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker run</td>
<td style="text-align:left">创建并运行容器（不能重复创建）</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/run/" target="_blank" rel="noopener noreferrer">docker run<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker stop</td>
<td style="text-align:left">停止指定容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/stop/" target="_blank" rel="noopener noreferrer">docker stop<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker start</td>
<td style="text-align:left">启动指定容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/start/" target="_blank" rel="noopener noreferrer">docker start<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker restart</td>
<td style="text-align:left">重新启动容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/restart/" target="_blank" rel="noopener noreferrer">docker restart<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker rm</td>
<td style="text-align:left">删除指定容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/rm/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker ps</td>
<td style="text-align:left">查看容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/ps/" target="_blank" rel="noopener noreferrer">docker ps<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker ps -a</td>
<td style="text-align:left">查看所有的容器包括已经停止的容器</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">docker logs</td>
<td style="text-align:left">查看容器运行日志</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/logs/" target="_blank" rel="noopener noreferrer">docker logs<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker exec</td>
<td style="text-align:left">进入容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/exec/" target="_blank" rel="noopener noreferrer">docker exec<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker save</td>
<td style="text-align:left">保存镜像到本地压缩文件</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/save/" target="_blank" rel="noopener noreferrer">docker save<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker load</td>
<td style="text-align:left">加载本地压缩文件到镜像</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/load/" target="_blank" rel="noopener noreferrer">docker load<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker inspect</td>
<td style="text-align:left">查看容器详细信息</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/inspect/" target="_blank" rel="noopener noreferrer">docker inspect<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">--name</td>
<td style="text-align:left">指定容器的名字</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">-d</td>
<td style="text-align:left">后台运行</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">-p</td>
<td style="text-align:left">端口映射</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">-e</td>
<td style="text-align:left">设置容器环境变量查看官网配置</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">-it</td>
<td style="text-align:left">交互式进入容器</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">bash</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">docker volume create</td>
<td style="text-align:left">创建数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_create/" target="_blank" rel="noopener noreferrer">docker volume create<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume ls</td>
<td style="text-align:left">查看所有数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_ls/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume rm</td>
<td style="text-align:left">删除指定数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_prune/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume inspect</td>
<td style="text-align:left">查看某个数据卷的详情</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_inspect/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume prune</td>
<td style="text-align:left">清除数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_prune/" target="_blank" rel="noopener noreferrer">docker volume prune<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h3 id="格式化访问的命令" tabindex="-1"><a class="header-anchor" href="#格式化访问的命令"><span>格式化访问的命令</span></a></h3>
<p>格式化方式访问，格式会更加清爽</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">--format</span> <span class="token string">"table {{.ID}}<span class="token entity" title="\t">\t</span>{{.Image}}<span class="token entity" title="\t">\t</span>{{.Ports}}<span class="token entity" title="\t">\t</span>{{.Status}}<span class="token entity" title="\t">\t</span>{{.Names}}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷"><span>数据卷</span></a></h3>
<p><strong>数据卷（volume）<strong>是一个虚拟目录，是</strong>容器内目录</strong>与<strong>宿主机****目录</strong>之间映射的桥梁。</p>
<p>以Nginx为例，我们知道Nginx中有两个关键的目录：</p>
<ul>
<li><code v-pre>html</code>：放置一些静态资源</li>
<li><code v-pre>conf</code>：放置配置文件</li>
</ul>
<p>如果我们要让Nginx代理我们的静态资源，最好是放到<code v-pre>html</code>目录；如果我们要修改Nginx的配置，最好是找到<code v-pre>conf</code>下的<code v-pre>nginx.conf</code>文件。</p>
<p>但遗憾的是，容器运行的Nginx所有的文件都在容器内部。所以我们必须利用数据卷将两个目录与宿主机目录关联，方便我们操作。如图：<img src="https://img.picgo.net/2023/11/22/whiteboard_exported_image385f09e5cfe86808.png" alt="whiteboard_exported_image" loading="lazy"></p>
<h4 id="数据卷命令" tabindex="-1"><a class="header-anchor" href="#数据卷命令"><span>数据卷命令</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>命令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>文档地址</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker volume create</td>
<td style="text-align:left">创建数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_create/" target="_blank" rel="noopener noreferrer">docker volume create<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume ls</td>
<td style="text-align:left">查看所有数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_ls/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume rm</td>
<td style="text-align:left">删除指定数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_prune/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume inspect</td>
<td style="text-align:left">查看某个数据卷的详情</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_inspect/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume prune</td>
<td style="text-align:left">清除数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_prune/" target="_blank" rel="noopener noreferrer">docker volume prune<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h4 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-v</span> html:/usr/share/ng
inx/html nginx

<span class="token function">docker</span> volume <span class="token function">ls</span>

<span class="token function">docker</span> volume inspect html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>DockerFile</span></a></h2>
<h3 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令"><span>常用指令</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>指令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>示例</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>FROM</strong></td>
<td style="text-align:left">指定基础镜像</td>
<td style="text-align:left"><code v-pre>FROM centos:6</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>ENV</strong></td>
<td style="text-align:left">设置环境变量，可在后面指令使用</td>
<td style="text-align:left"><code v-pre>ENV key value</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>COPY</strong></td>
<td style="text-align:left">拷贝本地文件到镜像的指定目录</td>
<td style="text-align:left"><code v-pre>COPY ./xx.jar /tmp/app.jar</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>RUN</strong></td>
<td style="text-align:left">执行Linux的shell命令，一般是安装过程的命令</td>
<td style="text-align:left"><code v-pre>RUN yum install gcc</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>EXPOSE</strong></td>
<td style="text-align:left">指定容器运行时监听的端口，是给镜像使用者看的</td>
<td style="text-align:left">EXPOSE 8080</td>
</tr>
<tr>
<td style="text-align:left"><strong>ENTRYPOINT</strong></td>
<td style="text-align:left">镜像中应用的启动命令，容器运行时调用</td>
<td style="text-align:left">ENTRYPOINT java -jar xx.jar</td>
</tr>
</tbody>
</table>
<h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1"><span>案例</span></a></h3>
<div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile" data-title="Dockerfile"><pre v-pre class="language-Dockerfile"><code># 基础镜像
FROM openjdk:11.0-jre-buster
# 设定时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &amp;&amp; echo $TZ &gt; /etc/timezone
# 拷贝jar包
COPY docker-demo.jar /app.jar
# 入口
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像"><span>构建镜像</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> docker-demo:1.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>docker build </code>: 就是构建一个docker镜像</li>
<li><code v-pre>-t docker-demo:1.0</code> ：<code v-pre>-t</code>参数是指定镜像的名称（<code v-pre>repository</code>和<code v-pre>tag</code>）</li>
<li><code v-pre>.</code> : 最后的点是指构建时Dockerfile所在路径，由于我们进入了demo目录，所以指定的是<code v-pre>.</code>代表当前目录，也可以直接指定Dockerfile目录：</li>
</ul>
<h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络"><span>网络</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>命令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>文档地址</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker network create</td>
<td style="text-align:left">创建一个网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_create/" target="_blank" rel="noopener noreferrer">docker network create<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker network ls</td>
<td style="text-align:left">查看所有网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_ls/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker network rm</td>
<td style="text-align:left">删除指定网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_rm/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker network prune</td>
<td style="text-align:left">清除未使用的网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_prune/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker network connect</td>
<td style="text-align:left">使指定容器连接加入某网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_connect/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker network disconnect</td>
<td style="text-align:left">使指定容器连接离开某网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_disconnect/" target="_blank" rel="noopener noreferrer">docker network disconnect<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker network inspect</td>
<td style="text-align:left">查看网络详细信息</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_inspect/" target="_blank" rel="noopener noreferrer">docker network inspect<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre v-pre class="language-Bash"><code># 1.首先通过命令创建一个网络
docker network create hmall

# 2.然后查看网络
docker network ls
# 结果：
NETWORK ID     NAME      DRIVER    SCOPE
639bc44d0a87   bridge    bridge    local
403f16ec62a2   hmall     bridge    local
0dc0f72a0fbb   host      host      local
cd8d3e8df47b   none      null      local
# 其中，除了hmall以外，其它都是默认的网络

# 3.让dd和mysql都加入该网络，注意，在加入网络时可以通过--alias给容器起别名
# 这样该网络内的其它容器可以用别名互相访问！
# 3.1.mysql容器，指定别名为db，另外每一个容器都有一个别名是容器名
docker network connect hmall mysql --alias db
# 3.2.db容器，也就是我们的java项目
docker network connect hmall dd

# 4.进入dd容器，尝试利用别名访问db
# 4.1.进入容器
docker exec -it dd bash
# 4.2.用db别名访问
ping db
# 结果
PING db (172.18.0.2) 56(84) bytes of data.
64 bytes from mysql.hmall (172.18.0.2): icmp_seq=1 ttl=64 time=0.070 ms
64 bytes from mysql.hmall (172.18.0.2): icmp_seq=2 ttl=64 time=0.056 ms
# 4.3.用容器名访问
ping mysql
# 结果：
PING mysql (172.18.0.2) 56(84) bytes of data.
64 bytes from mysql.hmall (172.18.0.2): icmp_seq=1 ttl=64 time=0.044 ms
64 bytes from mysql.hmall (172.18.0.2): icmp_seq=2 ttl=64 time=0.054 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


