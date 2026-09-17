# Coolgc 官网改版方案 V1

更新日期：2026-09-16

## 1. 改版目标

把现有“单款游戏大图展示页”升级成面向全球玩家的 Coolgc Games 品牌与作品集门户，优先解决四件事：

1. 让访客在首屏理解 Coolgc 是一家休闲益智游戏工作室。
2. 让公开在架游戏都能被发现，并能直接进入 Google Play。
3. 给玩家提供清晰的支持、隐私、条款和数据删除入口。
4. 在保留现有静态站点低维护成本的同时，提高移动端体验、性能和搜索可见性。
5. 同时提供英文版和简体中文版，并让用户可在任何页面切换语言。

## 2. 当前问题

- 首页只展示 Bubble Penguin，无法体现当前产品阵容。
- “Games” 深色标题条占用大量首屏空间，但没有传达品牌价值。
- 当前首页文案仍是旧的“建造动物园”描述，与 Google Play 目前的泡泡射击、救援企鹅和房间装饰定位不一致。
- 作品入口、Google Play 转化入口和玩家支持入口不够突出。
- 页脚社交链接使用空地址；版权年份仍为 2019。
- 旧式 Bootstrap/jQuery 页面结构与固定像素容器不利于现代移动端适配。
- 隐私政策显示 2019 年生效日期，后续应单独进行法务与数据实践核对，不能仅做视觉替换。

## 3. 已核对的公开产品阵容

2026-09-16 重新读取公开 Google Play 开发者页后，确认页面展示 11 款游戏：

- Bubble Penguin
- Domino Penguin
- Sand Flow
- Color Block
- Smash Kingdom
- Gem Sort
- Fruit Orb Factory
- Fruit Splash
- Treetop Pop
- Lila's Dream Home
- Puzzle Stories

公开开发者页：<https://play.google.com/store/apps/dev?id=8912012143850621685>

首版官网应以配置数据驱动游戏卡片，后续上下架时只改一处列表，不手工复制页面结构。

## 4. 信息架构

### 顶部导航

- Games：跳转首页作品区。
- About：工作室简介与品牌主张。
- Support：联系方式、常见问题与数据删除入口。
- Google Play：右侧主行动按钮，进入开发者页。
- 中文 / EN：语言切换器；当前语言高亮，并跳转到另一个语言中对应的同一页面。

### 首页模块

1. **品牌首屏**
   - 左侧：Coolgc Games、品牌主张 “Fun. Free. Fantasy.”、一句工作室介绍。
   - 右侧：当前主推游戏视觉，首版建议使用 Bubble Penguin。
   - 主按钮：Play on Google Play。
   - 辅助信任信息：仅展示有公开依据的 Bubble Penguin 评分和下载量。

2. **Our Games 作品矩阵**
   - 桌面端 3 至 4 列，移动端 2 列。
   - 卡片包含横向游戏视觉、名称、类型标签和详情箭头。
   - 卡片先直接链接 Google Play；只有内容足够时再建设独立详情页。
   - 主推游戏可使用更大的卡片，不让所有产品争夺同一视觉层级。

3. **工作室简介**
   - 使用一段简短可信的品牌文案，不使用无法核实的行业领先或规模表述。
   - 可补充游戏类型关键词：Bubble Shooter、Match-3、Merge、Sort、Physics Puzzle。

4. **玩家支持与页脚**
   - Support / Contact Us
   - Privacy Policy
   - Terms of Use
   - Data Deletion
   - 仅在存在真实有效主页时展示社交媒体图标。

### 双语页面结构

- 英文版继续使用现有默认路径，例如 `/`、`/company/`、`/contact-us/`。
- 简体中文版使用 `/zh/` 前缀，例如 `/zh/`、`/zh/company/`、`/zh/contact-us/`。
- 每一对页面都提供 `中文 / EN` 切换，不将用户送回首页。
- 用户手动切换后，用本地偏好记住选择；即使 JavaScript 不可用，普通链接仍可完成切换。
- Google Play 链接根据当前语言使用相应商店语言参数，但包名和目标应用保持一致。
- 现有英文法务地址继续保留；中文版本使用 `/zh/privacy/`、`/zh/terms/`、`/zh/data-deletion/`，避免破坏 Google Play 已配置的旧链接。
- 法务页面的中文内容需要人工核对，不能把未经审阅的机器翻译直接视为正式法律文本。

## 5. 视觉方向

- **定位**：轻松、友好、可信；保留儿童友好感，但避免幼稚和过度卡通化。
- **主色**：Coolgc Green `#22CC2B`。
- **标题色**：Deep Navy `#172A43`。
- **背景色**：Warm White `#F8FAF7`、Aqua `#DDF8F4`。
- **点缀色**：来自各游戏素材的珊瑚红、阳光黄、泡泡紫。
- **字体**：圆润现代无衬线；标题强调个性，正文优先可读性。
- **组件**：20px 圆角卡片、轻阴影、充足留白、明确的键盘焦点和悬停状态。
- **素材原则**：正式开发时使用各游戏经过授权的真实图标、Feature Graphic 和截图；设计稿中的非现有画面仅作为版式占位。

## 6. 响应式规则

- 桌面端内容最大宽度约 1280px，不再使用 1600px 固定容器。
- 首屏采用左右布局；窄屏自动改为文案在上、主视觉在下。
- 游戏卡片在桌面端 3 至 4 列、平板 2 至 3 列、手机 2 列。
- 主要按钮触控高度不低于 48px；正文最低 16px。
- 顶部导航在手机端折叠为菜单，同时保留 Google Play 主入口。
- 所有核心内容和链接无需动画也能完整使用，并尊重 `prefers-reduced-motion`。

## 7. 技术实施建议

当前网站规模适合继续使用静态站点，不必为了改版引入大型框架：

- 使用语义化 HTML5、现代 CSS Grid/Flexbox 和少量原生 JavaScript。
- 新首页不再依赖旧 Bootstrap、jQuery 和 Slick；旧法务页可分阶段迁移。
- 游戏列表集中维护为一个 JavaScript/JSON 配置，统一生成卡片和链接。
- 英文和中文内容使用同一份结构化数据模型，通过语言字段生成两套静态页面，避免两份页面长期内容不一致。
- 图片提供 AVIF/WebP 与回退格式，首屏图预加载，其余图片懒加载。
- 补齐每页独立的 title、description、Open Graph、canonical、favicon、sitemap 和 robots.txt。
- 每一对双语页面配置 `hreflang="en"`、`hreflang="zh-Hans"` 和 `x-default`，并在站点地图中同时列出。
- 为 Organization、WebSite 和 SoftwareApplication 添加合适的结构化数据，但评分与下载量必须来自可核实来源。
- 保留现有 `/privacy/index.html`、`/terms/index.html`、`/data-deletion/index.html` 路径，避免 Google Play 后台链接失效。

## 8. 实施顺序与验收边界

### 阶段 A：内容与素材盘点

- 确认 11 款公开游戏的英文正式名称、包名、Google Play URL、图标、Feature Graphic 和一句话文案。
- 确认哪些游戏作为首页主推，哪些仅出现在作品矩阵。
- 核对 Company、Contact、Privacy、Terms 和 Data Deletion 的实际内容与责任邮箱。
- 确认中英文品牌文案、游戏正式译名和玩家支持文案；法律文本单独审核。

### 阶段 B：首页开发

- 建立新导航、品牌首屏、作品矩阵、工作室简介与新页脚。
- 建立英文默认页面和 `/zh/` 简体中文页面，以及对应页面间的语言切换。
- 完成桌面、平板和手机断点。
- 保持全部现有法务 URL 可访问。

### 阶段 C：验证与发布

- 检查 Chrome、Safari、Firefox 和常见 Android 手机尺寸。
- 验证键盘操作、对比度、图片替代文本和减少动画设置。
- 验证每个页面的中英文互链、语言偏好记忆、`lang` 属性、canonical 和 hreflang。
- 检查 Lighthouse 的 Performance、Accessibility、Best Practices 和 SEO。
- 发布后逐一验证首页、全部 Google Play 外链和三个法务入口。
- 仓库更新与公网部署应分开验证；代码提交成功不等于线上服务器已经同步。

## 9. 设计稿

- 文件：`design/coolgc-homepage-concept-v1.png`
- 尺寸：1586 × 992
- 内容：桌面首页与移动端响应式概念并列展示。
- 性质：方向性高保真概念稿；实际开发时必须替换为经过确认的正式游戏素材和准确商店文案。
