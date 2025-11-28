import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/vue';
// 💡 تم تصحيح المسار النسبي للوصول إلى المكون داخل مجلد components
import HomePage from '../components/HomePage.vue'; // افترض أن هذا هو المكون الذي تختبره
// تأكد من أن هذا يطابق اسم المكون الذي تم استخدامه في الملف الأصلي!

// Mock لـ router-link
const stubs = {
  'router-link': { template: '<a><slot /></a>' },
};
describe('HomePage Component', () => {
  it('renders Boulevard World event and footer links', () => {
    render(HomePage, { global: { stubs } });

    const boulevardEvent = screen.getByText('Boulevard World');
    expect(boulevardEvent).not.toBeNull(); 

    expect(screen.getByText('🏠 Home')).not.toBeNull();
    expect(screen.getByText('🎟️ Tickets')).not.toBeNull();
    expect(screen.getByText('❤️ Favourites')).not.toBeNull();
  });
});
