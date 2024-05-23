import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ListTask/', // Asegúrate de que esta ruta es correcta
});
