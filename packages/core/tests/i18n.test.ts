import { expect, test } from 'vitest';
import { initi18nConfigAndGetKey } from './i18n';

test('i18n', async () => {
  const i18nKeyValue = await initi18nConfigAndGetKey();
  expect(i18nKeyValue).toEqual('Value of test key');
});
