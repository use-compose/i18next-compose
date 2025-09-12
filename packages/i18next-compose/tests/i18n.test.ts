import { describe, expect, test } from 'vitest';
import { initConfigAndGetContext } from './context';

describe('Create a translation context and consume it', () => {
  test('Init context and consume hook to get translation', async () => {
    const { useI18n } = await initConfigAndGetContext();
    expect(useI18n).toBeDefined();

    const { i18nApp } = useI18n('compose_translations');
    expect(i18nApp).toBeDefined();
    expect(i18nApp.language).toEqual('en');

    // Access translation function from the context
    const { cT } = useI18n('compose_translations');
    expect(cT('test_key')).toEqual('Value of test key');
    expect(cT('test_key')).toMatchSnapshot();
  });
});
