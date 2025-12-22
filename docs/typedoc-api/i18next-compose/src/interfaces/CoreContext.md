[@use-compose/i18next-compose-root](../../../index.md) / [i18next-compose/src](../index.md) / CoreContext

# Interface: CoreContext

## Extended by

- [`I18NextContext`](I18NextContext.md)

## Properties

### i18nApp

```ts
i18nApp: I18nApp;
```

---

### translationHelper()

```ts
translationHelper: (level2) => cTFunc;
```

#### Parameters

##### level2

`Namespace`

#### Returns

[`cTFunc`](../type-aliases/cTFunc.md)

## Methods

### composeHelper()

```ts
composeHelper(level2): cTFunc;
```

#### Parameters

##### level2

`string`

#### Returns

[`cTFunc`](../type-aliases/cTFunc.md)
