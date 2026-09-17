# Coolgc 官网中英文内容草案 V1

更新日期：2026-09-16

## URL 规则

| 内容 | English | 简体中文 |
| --- | --- | --- |
| 首页 | `/` | `/zh/` |
| 公司介绍 | `/company/` | `/zh/company/` |
| 联系我们 | `/contact-us/` | `/zh/contact-us/` |
| 隐私政策 | `/privacy/` | `/zh/privacy/` |
| 使用条款 | `/terms/` | `/zh/terms/` |
| 数据删除 | `/data-deletion/` | `/zh/data-deletion/` |

顶部语言切换器显示 `中文 / EN`。当前语言使用强调色和 `aria-current="page"`，两个语言名称始终可见，不仅使用国旗表示语言。

## 导航与首页文案

| 位置 | English | 简体中文 |
| --- | --- | --- |
| 导航 | Games | 游戏 |
| 导航 | About | 关于我们 |
| 导航 | Support | 玩家支持 |
| 主标题 | Fun. Free. Fantasy. | 乐趣 · 自由 · 想象 |
| 简介 | We make colorful puzzle worlds for everyone. | 我们为每一位玩家创造缤纷有趣的益智世界。 |
| 主按钮 | Explore our games | 探索我们的游戏 |
| 商店按钮 | Play on Google Play | 前往 Google Play |
| 作品标题 | Our Games | 我们的游戏 |
| 公司标题 | Games made with care | 用心创造每一份游戏乐趣 |
| 公司简介 | We create colorful casual puzzle games that are easy to enjoy and rewarding to master. | 我们专注于色彩丰富的休闲益智游戏，让每位玩家都能轻松上手，并在挑战中持续获得成就感。 |

## 当前游戏名称草案

中文名称基于 2026-09-16 读取到的 Google Play 简体中文公开页。正式上线前应再次核对商店名称。

| 包名 | English | 简体中文 |
| --- | --- | --- |
| `com.coolgc.bubblepenguin` | Bubble Penguin: Bubble Shooter | 泡泡企鹅：泡泡龙射击 |
| `com.coolgc.dominopenguin` | Domino Penguin: Merge & Match | Domino Penguin：多米诺合成 |
| `com.coolgc.sandflow` | Sand Bucket Jam: Color Puzzle | 彩沙入桶：颜色解谜 |
| `com.coolgc.colorblock` | Color Block Escape | 彩色方块逃脱 |
| `com.coolgc.smashfest` | Smash Kingdom: Cannon Puzzle | Smash Kingdom：大炮物理解谜 |
| `com.coolgc.gemsort` | Jewel Block Sort: Color Puzzle | 宝石方块分类 |
| `com.coolgc.fruit.orb.factory` | Fruit Orb Factory | 水果弹珠工厂 |
| `com.coolgc.fruitsplash` | Fruit Splash: Home Makeover | Fruit Splash: Home Makeover |
| `com.coolgc.bubblesquirrel` | Treetop Pop: Rescue & Rebuild | 松鼠泡泡：营救与重建 |
| `com.coolgc.homedesigner` | Lila's Dream Home: Match 3 | 莉拉的梦想家园：三消装扮 |
| `com.coolgc.puzzlestoies` | Puzzle Stories: Jigsaw Puzzles | 拼图奇缘：故事拼图游戏 |

## 页脚与支持文案

| English | 简体中文 |
| --- | --- |
| Contact Us | 联系我们 |
| Player Support | 玩家支持 |
| Privacy Policy | 隐私政策 |
| Terms of Use | 使用条款 |
| Data Deletion | 数据删除 |
| © 2026 Coolgc Games. All rights reserved. | © 2026 Coolgc Games。保留所有权利。 |

## 实施注意事项

- 所有页面设置正确的 `<html lang="en">` 或 `<html lang="zh-Hans">`。
- 语言选择属于功能偏好，不与广告或分析标识混用。
- 语言切换后保持当前页面和锚点位置，例如 `/#games` 对应 `/zh/#games`。
- 游戏宣传图不包含语言文字，中英文站共用同一套经过优化的图片。
- 图片替代文本、页面标题、Meta Description、Open Graph 文案必须分别翻译。
- 英文法务页面保持现有公开 URL；中文译本上线前必须确认与英文正式文本一致，并明确以哪个版本为准。
