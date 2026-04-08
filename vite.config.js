import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        healio: 'healio.html',
        ivDrips: 'iv-drips-monitor.html',
        shieldher: 'shieldher.html',
        trafis: 'trafis.html'
      }
    }
  }
});
