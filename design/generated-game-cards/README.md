# Coolgc 官网游戏卡片图 V1

本目录包含根据 Google Play 当前公开商店截图重新生成的 11 张官网宣传概念图。

## 生成原则

- Google Play 公开截图只作为游戏角色、配色、材质和玩法特征的视觉参考。
- 所有输出均为重新构图生成的 16:9 横向图片，不是截图裁切或实机画面。
- 图片内不放游戏名称、商店按钮和宣传文案；正式网页使用 HTML 文字叠加，避免 AI 字体和拼写问题。
- 生成图不能替代真实玩法截图。若页面文案涉及具体功能、关卡或奖励，仍以游戏实际版本和 Google Play 文案为准。
- 本轮没有改动网站首页，也没有将图片接入生产页面。

## 文件清单

| 游戏 | Google Play 包名 | 输出文件 |
| --- | --- | --- |
| Bubble Penguin | `com.coolgc.bubblepenguin` | `bubble-penguin-v1.png` |
| Domino Penguin | `com.coolgc.dominopenguin` | `domino-penguin-v1.png` |
| Sand Bucket Jam | `com.coolgc.sandflow` | `sand-flow-v1.png` |
| Color Block Escape | `com.coolgc.colorblock` | `color-block-v1.png` |
| Smash Kingdom | `com.coolgc.smashfest` | `smash-kingdom-v1.png` |
| Jewel Block Sort | `com.coolgc.gemsort` | `gem-sort-v1.png` |
| Fruit Orb Factory | `com.coolgc.fruit.orb.factory` | `fruit-orb-factory-v1.png` |
| Fruit Splash | `com.coolgc.fruitsplash` | `fruit-splash-v1.png` |
| Treetop Pop | `com.coolgc.bubblesquirrel` | `treetop-pop-v1.png` |
| Lila's Dream Home | `com.coolgc.homedesigner` | `lilas-dream-home-v1.png` |
| Puzzle Stories | `com.coolgc.puzzlestoies` | `puzzle-stories-v1.png` |

全部图片尺寸为 1672 × 941，接近标准 16:9。

完整生成提示词见 `prompts.md`。
