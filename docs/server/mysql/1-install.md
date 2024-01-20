---
sticky: 98
title: 🧐 1. MySql 的安装
tag:
  - Java
top: 4
recommend: 1
---

## 1. MacOS 版本的安装

### 1.1 下载地址

> 选择对应的版本下载即可

[MacOS 下载地址](https://dev.mysql.com/downloads/mysql/)

### 1.2 解决无法启动MySQL问题

1. 打开设置中的mysql图标，发现红点，点击"Start MySQL Server"后，变绿后秒变红，无法启动。
2. ![image-20231111030503079](/Users/zeroeldath/Library/Application Support/typora-user-images/image-20231111030503079.png)

2. 进入configuration，找到Error log的位置，尝试打开。

4. 报错：无法打开data文件夹，权限不够。重新授权：

```shell
sudo chown -R mysql /usr/local/mysql/data
```

5. 打开error文件，报错为：`Could not create unix socket lock file /usr/local/mysql/mysql.sock.lock.`

```shell
mkdir -p /usr/local/mysql/ 
```

6. 然后可以设置目录权限

```shell
sudo chown -R mysql:mysql /usr/local/mysql/
```

### 1.3配置MySQL环境变量

如果需要在终端里面输入Mysql命令，那么就需要进行如下的配置。

1. 打开文件：`open ~/.bash_profile`
2. 加入语句：`PATH=$PATH:/usr/local/mysql/bin`
3. 使配置的语句生效：`source ~/.bash_profile`
4. 如果配置成功，那么输入命令：`mysql -uroot -p` 输入密码后成功登录



