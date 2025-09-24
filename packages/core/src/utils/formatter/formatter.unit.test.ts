import { describe, expect, test } from 'vitest';
import { I18nApp } from '../../types';
import { i18nFormatterHelper } from './translation-helpers';

describe('i18nFormatterHelper (unit)', () => {
  test('translationHelper prefixes namespace directly', () => {
    const fakeI18n = {
      t: (k: string) => (k === 'compose_translations.test_key' ? 'Value of test key2' : ''),
    } as Partial<I18nApp> as I18nApp;
    const { translationHelper } = i18nFormatterHelper(fakeI18n);
    expect(translationHelper('compose_translations')('test_key')).toBe('Value of test key2');
  });
});
