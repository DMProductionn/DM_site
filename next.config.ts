/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  // Если используете basePath (для GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/DM_site' : '',
  // Опционально: настройки для изображений
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
