import { i18n } from 'i18next';
import { beforeEach, describe, expect, test } from 'vitest';
import { getFormatterFunctions, initi18nConfig } from './i18n';

describe('Create a custom config and access translation keys through formatter', () => {
  let i18next: i18n;

  beforeEach(async () => {
    i18next = await initi18nConfig();
  });

  test('i18next configuration', async () => {
    expect(i18next).toBeDefined();
    expect(i18next.language).toEqual('en');
    expect(i18next.languages).toEqual(['en']);
  });

  test('i18nFormatter functions', async () => {
    const { testTranslationHelper, getTGlobal } = getFormatterFunctions(i18next);
    expect(testTranslationHelper).toBeDefined();
    expect(getTGlobal).toBeDefined();

    const cT = testTranslationHelper('compose_translations');
    expect(cT).toBeDefined();

    const keyValue = cT('test_key');
    expect(keyValue).toEqual('Value of test key2');
    expect(cT('test_key')).toMatchSnapshot();
  });
});
