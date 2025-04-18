[core](../../index.md) / [index](../index.md) / ComposeContext

# Interface: ComposeContext

Defined in: [types/context.ts:4](https://github.com/arthur-plazanet/i18next-compose/blob/414e3002796ebfffec21fa588fa2eecc4fa22150/packages/core/src/types/context.ts#L4)

## Extends

- [`I18nFormatterHelper`](../type-aliases/I18nFormatterHelper.md)

## Properties

### createTranslationHelper()

> **createTranslationHelper**: (`ns`) => `string` \| [`ttFunc`](../type-aliases/ttFunc.md)

Defined in: [types/formatter.ts:4](https://github.com/arthur-plazanet/i18next-compose/blob/414e3002796ebfffec21fa588fa2eecc4fa22150/packages/core/src/types/formatter.ts#L4)

#### Parameters

##### ns

`string`

#### Returns

`string` \| [`ttFunc`](../type-aliases/ttFunc.md)

#### Inherited from

[`I18nFormatterHelper`](../type-aliases/I18nFormatterHelper.md).[`createTranslationHelper`](../type-aliases/I18nFormatterHelper.md#createtranslationhelper)

---

### getTGlobal()

> **getTGlobal**: (`ns`) => `string` \| [`ttFunc`](../type-aliases/ttFunc.md)

Defined in: [types/formatter.ts:5](https://github.com/arthur-plazanet/i18next-compose/blob/414e3002796ebfffec21fa588fa2eecc4fa22150/packages/core/src/types/formatter.ts#L5)

#### Parameters

##### ns

`string`

#### Returns

`string` \| [`ttFunc`](../type-aliases/ttFunc.md)

#### Inherited from

[`I18nFormatterHelper`](../type-aliases/I18nFormatterHelper.md).[`getTGlobal`](../type-aliases/I18nFormatterHelper.md#gettglobal)

---

### i18nApp

> **i18nApp**: `i18n`

Defined in: [types/context.ts:5](https://github.com/arthur-plazanet/i18next-compose/blob/414e3002796ebfffec21fa588fa2eecc4fa22150/packages/core/src/types/context.ts#L5)
