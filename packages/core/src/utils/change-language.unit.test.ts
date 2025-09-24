import { createInstance } from 'i18next';
import { describe, expect, test } from 'vitest';
import { changeLanguage } from './change-language';

describe('changeLanguage (unit)', () => {
  test('delegates to i18n.changeLanguage', async () => {
    const i18n = createInstance({
      lng: 'en',
    });
    await i18n.init();
    expect(i18n.language).toBe('en');
    await changeLanguage(i18n, 'de');
    expect(i18n.language).toBe('de');
  });
});
