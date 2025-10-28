[@use-compose/i18next-compose-root](../../../index.md) / [i18next-compose/src](../index.md) / I18NextContext

# Interface: I18NextContext

## Extends

- [`CoreContext`](CoreContext.md)

## Properties

### globalNSHelper?

```ts
optional globalNSHelper: cTFunc;
```

---

### i18nApp

```ts
i18nApp: I18nApp;
```

#### Inherited from

[`CoreContext`](CoreContext.md).[`i18nApp`](CoreContext.md#i18napp)

---

### lang()

```ts
lang: (lang?) => Promise<void>;
```

#### Parameters

##### lang?

`string`

#### Returns

`Promise`\<`void`\>

---

### onLangChange()

```ts
onLangChange: (callback) => () => void;
```

#### Parameters

##### callback

(`lng`) => `void`

#### Returns

```ts
(): void;
```

##### Returns

`void`

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

#### Inherited from

[`CoreContext`](CoreContext.md).[`translationHelper`](CoreContext.md#translationhelper)

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

#### Inherited from

[`CoreContext`](CoreContext.md).[`composeHelper`](CoreContext.md#composehelper)
