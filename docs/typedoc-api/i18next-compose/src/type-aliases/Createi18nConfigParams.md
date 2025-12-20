[@use-compose/i18next-compose-root](../../../index.md) / [i18next-compose/src](../index.md) / Createi18nConfigParams

# Type Alias: Createi18nConfigParams

```ts
type Createi18nConfigParams = Omit<InitOptions, 'ns' | 'supportedLngs' | 'backend' | 'resources'> &
  object;
```

i18n configuration parameters
It extends i18next InitOptions but omits some properties to allow custom naming and typing.

## Type declaration

### backend?

```ts
optional backend: FsBackendOptions;
```

Optional: constrain backend to the FS backend options

### namespace

```ts
namespace: string | readonly string[];
```

Your alias for i18next's `ns`

### resources?

```ts
optional resources: Resource;
```

Keep a precise type for resources

### supportedLanguages

```ts
supportedLanguages: string[];
```

Your alias for i18next's `supportedLngs`
