import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import Profile from '../Profile.vue';
import HomePage from '../HomePage.vue';

// =============== Functional Tests ===============
describe('Functional Tests - Profile Component', () => {
  it('shows alert after account creation', async () => {
    render(Profile);
    window.alert = vi.fn();

    const fullName = screen.getByPlaceholderText('Full Name');
    const email = screen.getByPlaceholderText('Email');
    const phone = screen.getByPlaceholderText('Phone Number');
    const password = screen.getByPlaceholderText('Password (min 6 chars)');

    await fireEvent.update(fullName, 'Daad');
    await fireEvent.update(email, 'daad@example.com');
    await fireEvent.update(phone, '0123456789');
    await fireEvent.update(password, '123456');

    const saveButton = screen.getByRole('button', { name: /create account/i });
    await fireEvent.click(saveButton);

    expect(window.alert).toHaveBeenCalledWith('Account created successfully!');
  });
});

// =============== Non-Functional Tests ===============
describe('Non-Functional Tests - HomePage Component', () => {
  it('renders Boulevard World event and footer links', () => {
    render(HomePage, {
      global: {
        stubs: { 'router-link': { template: '<a><slot /></a>' } },
      }
    });

    expect(screen.getByText('Boulevard World')).not.toBeNull();
    expect(screen.getByText('🏠 Home')).not.toBeNull();
    expect(screen.getByText('🎟️ Tickets')).not.toBeNull();
    expect(screen.getByText('❤️ Favourites')).not.toBeNull();
  });
});
