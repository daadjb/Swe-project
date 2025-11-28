import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig as defineVitestConfig } from 'vitest/config' 

export default defineConfig({
  plugins: [vue()],
  
  test: defineVitestConfig({
    globals: true,
    
    // 🟢 الحل: أخبر Vitest أن تستخدم بيئة المتصفح الوهمية (JSDOM)
    environment: 'jsdom', 

    coverage: {
      provider: 'v8',
      reporter: ['html'],
      thresholds: {
        lines: 0,
        functions: 0,
        branches: 0,
        statements: 0,
      }
    }
  }).test 
});
