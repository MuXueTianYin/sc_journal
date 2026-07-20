# sc_journal · 页面封面（Glaze Aurora）

品牌风格对齐：`assets/wallpaper/glaze-aurora`（琉璃蓝星夜 · 溯璃 IP）  
用途：纪念站路由入口卡 / OG 分享 / 列表封面  
规格：**16:9**（约 `1536×1024`；投放建议 `1920×1080` 或 OG `1200×630` 裁切）  
日期：2026-07-20

> 对应站：`sc_journal_next`（GitHub Pages）。本目录为设计母版；上线可拷贝至  
> `sc_journal_next/public/assets/covers/`。

## 路由 ↔ 封面

| 路由 | 页面 | 封面 |
|------|------|------|
| `/` 或纪念空间入口 | 纪念空间（时光笺 + 留影 + 互动） | [`cover-memorial.png`](png/cover-memorial.png) |
| `/heart_tree` | Canvas 心形树动画 | [`cover-heart-tree.png`](png/cover-heart-tree.png) |
| `/album_3d` | CSS 3D 旋转立方体相册 | [`cover-album-3d.png`](png/cover-album-3d.png) |
| `/love_letter` | 情书拆封 | [`cover-love-letter.png`](png/cover-love-letter.png) |
| `/starry_night` | 星空许愿（星点 + 雪花粒子 + 流星） | [`cover-starry-night.png`](png/cover-starry-night.png) |
| `/valentine` | 趣味问答 | [`cover-valentine.png`](png/cover-valentine.png) |
| `/countdown` | 纪念日倒计时 | [`cover-countdown.png`](png/cover-countdown.png) |
| `/flipbook` | 翻页相册 | [`cover-flipbook.png`](png/cover-flipbook.png) |
| `/gift` | 神秘礼物 | [`cover-gift.png`](png/cover-gift.png) |
| `/diaries` | 时光笺列表 | [`cover-diaries.png`](png/cover-diaries.png) |
| `/diaries/[id]` | 笺文详情 | [`cover-diaries-detail.png`](png/cover-diaries-detail.png) |

## 设计约定

- 色板：NavyBg `#0F3B7A`→`#0a2d5c` · GlassBlue `#2563A8`/`#60A5FA` · 感情向仅点缀 Sakura 淡粉
- 材质：琉璃/水晶折射，与 glaze-aurora 壁纸同系
- **无文字**（标题由前端叠字），便于多语言与改文案
- 角色出镜：`memorial` / `love_letter` / `valentine`；其余以道具场景为主

## 目录

```text
assets/covers/sc-journal/
  README.md
  png/      # 可分发
  source/   # 母版 *-master.png
```
