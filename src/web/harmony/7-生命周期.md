---
title: 🦋 7-生命周期
tag:
  - harmony
star: true
---

# 生命周期

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);"
					 sandbox="allow-scripts allow-popups allow-forms allow-modals allow-same-origin"
					 width="800" height="450" src="https://pixso.cn/app/ifr?url=https://pixso.cn/app/board/bnFWVuhoAUXEjcEF2odNsg"
					 allowfullscreen></iframe>

## EntryAbility 文件

>  hilog.info 日志
>
> '%{public}s'  public 表示日志是否公开

```ts
import UIAbility from '@ohos.app.ability.UIAbility';
import hilog from '@ohos.hilog';
import window from '@ohos.window';

export default class EntryAbility extends UIAbility {
  onCreate(want, launchParam) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
  }

  onDestroy() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
		// 打开首屏的页面
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }

  // 销毁
  onWindowStageDestroy() {
    // Main window is destroyed, release UI related resources
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  // 处于前台
  onForeground() {
    // Ability has brought to foreground
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }
  // 处于后台 -- 即切换到任务中心
  onBackground() {
    // Ability has back to background
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
}

```

## UIAbility 模式

> 修改模式
>
> 在每个 entry 的模块中
>
> module.json5
>
> ​	launchType

### Singleton 模式

只会存在一个后台的实例

### Standard 模式 

每次打开,创建一个新的实例,保留旧

### multiton模式

每次打开,创建一个新的实例,删除旧

### specified 模式

为每个实例设置 key 标识 类似同时编辑多个不同的文档

```ts
// 1
// 获取上下文
context = getContext(this) as common.UIAbilityContext;
// 指定要跳转的UIAbility 信息
let want = {
  deviceId:"",// 想要跳转的设备 id 为空表示本应用 (表示可以跨设备跳转)
  bundleName:"",// 想要跳转的应用包名
  abilityName:"",
  moduleName:"entry", // 非必填
  parameter:{
    // 自定义方法,生成目标 UIAbility 实例的 key
    instanceKey:this.getInstanceKey()
  }
}

// 尝试拉起目标 UIAbility 实例
this.context.startAbility(want)

// 2
//在Abi1 ityStage的生命周期回调中为目标UIAbility.实例生成ey
export default class MyAbilityStage extends AbilityStage{
onAcceptWant(want:Want):string
//判断当前要拉取的是否是DocumentAbility
if(want.abilityName ==='DocumentAbility'){
//根据参数中的nstanceKey参数拼接生成一个key值并返回
		return `DocAbility_${want.parameters.instanceKey}`
		}
		return "";
	}
}


// 3
//3.在module,J5on5置文件中，通过srcEnti门y参数指定Abl的y5tage路径
{
  "module":
	"name":"entry",
	"type":"entry",
	"srcEntry":"./ets/myabilitystage/MyAbilityStage.ts",
}

```



