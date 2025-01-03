import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpg: {
            
            quality: 80,
          },
        png: {
                quality: 80,
            },
      }),
    ],
  };
});