import { describe, expect, test } from 'vitest';
import { mocki18nConfig } from '../../../core/tests/mocks/i18next-config';
import { composeI18nextContext } from '../../src/compose-context';

describe('Create a translation context and consume it', () => {
  test('Init context and consume hook to get translation', async () => {
    const context = await composeI18nextContext(mocki18nConfig);
    expect(context).toBeDefined();

    const { translationHelper, i18nApp } = context;
    expect(i18nApp).toBeDefined();

    // Access translation function from the context
    const tHelper = translationHelper('compose_translations');
    expect(tHelper).toBeDefined();
    expect(tHelper('test_key')).toEqual('Value of test key2');
    expect(tHelper('test_key')).toMatchSnapshot();
  });
});
