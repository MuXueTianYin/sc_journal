# 溯璃轻盒 · 品牌背景壁纸

品牌：**溯璃 / Suzuriel**  
原型：`brand/archive/v30-exploration/glaze-aurora`（正面曈光 · 与 v25 定稿同系）  
日期：2026-07-20

## 设计依据（文档对齐）

| 来源 | 采用结论 |
|------|----------|
| [`brand/README.md`](../../../../../../../muxue-platform/suzuriel-base/frontend/suzuriel-admin-mp/assets/brand/README.md) 方案 3 色板 | NavyBg `#0F3B7A`→`#0a2d5c` · GlassBlue `#2563A8`/`#60A5FA` · 颊色仅用 SakuraBridge 淡粉 |
| glaze-aurora 识别点 | 琉璃渐变发 · S 水晶发夹 · 方盒水晶背包 · 菱形耳坠 · 星夜底 |
| 规范「着装保守」 | 白无袖高领，不夸张 |
| 小程序以手机为主 | **主推 9:16 竖版**；桌面 16:9 为辅 |
| 首页底纹（需求方案） | App 内页仍用 CSS 淡琉璃渐变；本目录为 **IP 氛围壁纸 / 分享素材**，非首页铺底大图 |

## 当前方案 · glaze-aurora

| 规格 | 用途 | 路径 |
|------|------|------|
| **9:16 手机** | 锁屏/壁纸、分享竖图 | [`glaze-aurora/png/wallpaper-glaze-aurora-phone-9x16.png`](glaze-aurora/png/wallpaper-glaze-aurora-phone-9x16.png) |
| **16:9 桌面** | 宽屏壁纸、Banner 延展 | [`glaze-aurora/png/wallpaper-glaze-aurora-desktop-16x9.png`](glaze-aurora/png/wallpaper-glaze-aurora-desktop-16x9.png) |
| 母版 | 同源 master | `glaze-aurora/source/*-master.png` |

### 构图说明

- **竖版**：角色居中偏下（正面曈光），上 1/3 留星空+极光带，避开锁屏时钟区
- **横版**：角色偏右，左侧大留白星夜，便于桌面图标区
- **氛围延展**：图标方画布 → 全出血极光丝带、悬浮晶棱、景深 bokeh；无文字、无 UI 框

### 分辨率备注

当前生成母版约为 `1024×1536`（竖）/ `1536×1024`（横）。正式投放建议超分至：

- 手机：`1170×2532` 或 `1440×2560`
- 桌面：`2560×1440` 或 `3840×2160`

## 目录约定

```text
assets/wallpaper/
  README.md
  glaze-aurora/
    source/   # 母版
    png/      # 可分发
    previews/ # 场景 mock（可选）
```
