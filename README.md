# levelup-docs

LevelUp Land 官方帮助文档与项目白皮书站点（Astro 静态站，独立部署）。

视觉风格移植自 `quest-frontend` 的 `redesign-platform-ui` 分支：暗色主题、玻璃拟态卡片、`#00f0ff` 青色霓虹点缀、Unbounded / Montserrat 字体与海洋波浪动效。

## 页面

| 路由 | 内容 |
| --- | --- |
| `/` | 文档首页（导航入口） |
| `/whitepaper/` | 项目白皮书（含 Arena 经济模型全解） |
| `/arena/` | Arena（NU 世界）玩法帮助文档 |
| `/level/` | Level 成长体系帮助文档 |

## 开发

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## 构建与部署（Cloudflare Pages）

```bash
pnpm build      # 输出到 dist/
pnpm exec wrangler pages deploy dist --project-name levelup-docs
```

Cloudflare Pages 构建配置：`pnpm build`，输出目录 `dist/`。建议绑定域名 `docs.levelup.land`（`astro.config.mjs` 中的 `site` 已按此设置）。

## 内容维护说明

- 白皮书中 Arena 的所有数值（票价 1 USDT、100 张/轮、90.25 / 5 / 4.75 分配、11 轮纪元、55 USDT 大奖池及 90/10 分配等）均取自 `firsttouch-backend/src/main/resources/contracts/LevelupLottery.sol` 的合约常量，合约参数调整时需同步更新文档。
- 「成长激励池」（平台每轮保留金部分注入、奖励 Level 持续成长用户）为产品设计承诺，具体注入比例与发放规则待定，文档中刻意未写死数值。
