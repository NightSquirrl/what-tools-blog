---
title: 🥹 git 收集
tag:
  - git
star: true
---

> git 无法检测到 文件夹命名大小写的变化如何解决

```bash
git config core.ignorecase # 查看本地仓库git忽略大小写是打开还是关闭
git config core.ignorecase false # 关闭忽略大小写
```

> 修改上次提交

```bash
git commit --amend -branch_name '新的描述' # 修改上次提交

# 如果上次的commit还没有推送到远程仓库
git push origin branch_name # 推送到远程仓库
# 如果上次的commit已经推送到远程仓库
git push -f origin branch_name # 强制推送到远程仓库
```

> 撤销提交

```bash
# 已提交但是没有push
git reset --soft HEAD^ # 撤销提交
git reset --mixed HEAD^ # 撤销提交并保留修改也就是撤销commit add
# 已提交并且已经push
git reset --hard HEAD^ # 撤销提交并删除修改 会丢掉所有的代码包括git commit的记录
git revert HEAD^ # 撤销提交并保留修改
```