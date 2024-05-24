import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://juantito77.github.io/ListTask", // Asegúrate de que esta ruta es correcta
});
