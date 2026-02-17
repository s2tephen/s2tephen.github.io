// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://stephensuen.com',

  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.local(),
        name: 'Tiempos Text',
        cssVariable: '--font-tiempos',
        options: {
          variants: [
            {
              weight: 400,
              style: 'normal',
              src: ['./src/assets/fonts/TiemposTextWeb-Regular.woff2'],
            },
            {
              weight: 400,
              style: 'italic',
              src: ['./src/assets/fonts/TiemposTextWeb-RegularItalic.woff2'],
            }
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: 'General Sans',
        cssVariable: '--font-general',
        options: {
          variants: [
            {
              weight: '400 500 600 700',
              style: 'normal',
              src: ['./src/assets/fonts/GeneralSans-Variable.woff2'],
            },

            {
              weight: '400 500 600 700',
              style: 'italic',
              src: ['./src/assets/fonts/GeneralSans-VariableItalic.woff2'],
            },
          ],
        },
      },
    ],
  }
});