import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'sc_journal';
const nextConfig:NextConfig = {
    output: "export", // 关键：启用纯静态导出[3,6](@ref)
    trailingSlash: true, // 强制路径以斜杠结尾，避免路由冲突[1](@ref)
    basePath: isProd ? `/${repositoryName}` : '', // 生产环境添加仓库名称
    assetPrefix: isProd ? `/${repositoryName}/` : '', // 资源路径前缀
    images: {
        unoptimized: true, // 禁用默认图片优化（静态导出需关闭）[4](@ref)
    },
    // 按需添加编译缓存（大型项目提速 50%+）
    experimental: {
        turbo: {
            resolveAlias: {}, // 示例配置
            rules: {},
        }
    }
};
module.exports = nextConfig;


export default nextConfig;
