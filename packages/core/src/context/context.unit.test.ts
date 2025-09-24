import { describe, expect, test } from 'vitest';

describe('contextCoreStub (unit)', () => {
  test('exposes i18nApp and translationHelper', async () => {
    const { contextCoreStub } = await import('./context');
    const ctx = contextCoreStub();
    expect(ctx.i18nApp).toBeDefined();
    expect(typeof ctx.translationHelper).toBe('function');
  });
});
