---
title: 😤 用户中心项目后端文档
tag:
  - SpringBoot
  - JavaWeb
recommend: 1
---

项目地址:https://github.com/NightSquirrl/usercenter

##  用户中心项目

> 作者：[whattools](https://soft-vault.com/)
>
> 后端接口文档使用 swagger 生成



### 项目简介

一个企业中最最最常用的系统 —— `用户中心` ，说白了，就是一个简单的 “用户管理系统” ，实现了用户注册、登录、查询等基础功能。如图：

![image-20231120164412684](https://img.picgo.net/2023/11/20/image-20231120164412684dad11d9f29219991.png)

![image-20231120164509074](https://img.picgo.net/2023/11/20/image-2023112016450907404095b12eb488b78.png)

### 技术选型

#### 前端

主要运用阿里 Ant Design 生态：

- HTML + CSS + JavaScript 三件套
- React 开发框架
- Ant Design Pro 项目模板
- Ant Design 端组件库
- Umi 开发框架
- Umi Request 请求库



#### 后端

- Java 编程语言
- Spring + SpringMVC + SpringBoot 框架
- MyBatis + MyBatis Plus 数据访问框架
- MySQL 数据库
- jUnit 单元测试库



## 流程记录

### 数据库设计

#### 用户表设计

```sql


-- 创建库
create database if not exists whattools;

-- 切换库
use whattools;

# 用户表
create table user
(
    username     varchar(256)                       null comment '用户昵称',
    id           bigint auto_increment comment 'id'
        primary key,
    userAccount  varchar(256)                       null comment '账号',
    avatarUrl    varchar(1024)                      null comment '用户头像',
    gender       tinyint                            null comment '性别',
    userPassword varchar(512)                       not null comment '密码',
    phone        varchar(128)                       null comment '电话',
    email        varchar(512)                       null comment '邮箱',
    userStatus   int      default 0                 not null comment '状态 0 - 正常',
    createTime   datetime default CURRENT_TIMESTAMP null comment '创建时间',
    updateTime   datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
    isDelete     tinyint  default 0                 not null comment '是否删除',
    userRole     int      default 0                 not null comment '用户角色 0 - 普通用户 1 - 管理员',
)
    comment '用户';



```

### **自动生成器的使用**

MyBatisX 插件，自动根据数据库生成：

- domain：实体对象
- mapper：操作数据库的对象
- mapper.xml：定义了 mapper 对象和数据库的关联，可以在里面自己写 SQL
- service：包含常用的增删改查
- serviceImpl：具体实现 service

### **注册逻辑设计**

1. 用户在前端输入账户和密码、以及校验码（todo）
2. 校验用户的账户、密码、校验密码，是否符合要求 
   1. 非空
   2. 账户长度 不小于 4 位
   3. 密码就 不小于 8 位吧
   4. 账户不能重复
   5. 账户不包含特殊字符
   6. 密码和校验密码相同
3. 对密码进行加密（密码千万不要直接以明文存储到数据库中）
4. 向数据库插入用户数据

### **如何知道是哪个用户登录了？**

1. 连接服务器端后，得到一个 session 状态（匿名会话），返回给前端 
2. 登录成功后，得到了登录成功的 session，并且给该sessio n设置一些值（比如用户信息），返回给前端一个设置 cookie 的 ”命令“ session => cookie 
3. 前端接收到后端的命令后，设置 cookie，保存到浏览器内 
4. 前端再次请求后端的时候（相同的域名），在请求头中带上cookie去请求 
5. 后端拿到前端传来的 cookie，找到对应的 session 
6. 后端从 session 中可以取出基于该 session 存储的变量（用户的登录信息、登录名） 



### 跨域解决

链接地址:[点击跳转](/JavaWeb/9.cross-domain.md)

