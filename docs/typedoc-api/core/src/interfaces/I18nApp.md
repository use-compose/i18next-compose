[@use-compose/i18next-compose-root](../../../index.md) / [core/src](../index.md) / I18nApp

# Interface: I18nApp

## Extends

- `i18n`

## Properties

### exists

```ts
exists: ExistsFunction;
```

Uses similar args as the t function and returns true if a key exists.

#### Inherited from

```ts
i18n.exists;
```

---

### format

```ts
format: FormatFunction;
```

Exposes interpolation.format function added on init.

#### Inherited from

```ts
i18n.format;
```

---

### initializedLanguageOnce

```ts
initializedLanguageOnce: boolean;
```

Language was initialized

#### Inherited from

```ts
i18n.initializedLanguageOnce;
```

---

### initializedStoreOnce

```ts
initializedStoreOnce: boolean;
```

Store was initialized

#### Inherited from

```ts
i18n.initializedStoreOnce;
```

---

### initOptions?

```ts
optional initOptions: InitOptions<object>;
```

---

### isInitialized

```ts
isInitialized: boolean;
```

Is initialized

#### Inherited from

```ts
i18n.isInitialized;
```

---

### isInitializing

```ts
isInitializing: boolean;
```

Is initializing

#### Inherited from

```ts
i18n.isInitializing;
```

---

### language

```ts
language: string;
```

Is set to the current detected or set language.
If you need the primary used language depending on your configuration (supportedLngs, load) you will prefer using i18next.languages[0].

#### Inherited from

```ts
i18n.language;
```

---

### languages

```ts
languages: readonly string[];
```

Is set to an array of language-codes that will be used it order to lookup the translation value.

#### Inherited from

```ts
i18n.languages;
```

---

### modules

```ts
modules: Modules;
```

List of modules used

#### Inherited from

```ts
i18n.modules;
```

---

### options

```ts
options: InitOptions;
```

Current options

#### Inherited from

```ts
i18n.options;
```

---

### resolvedLanguage?

```ts
optional resolvedLanguage: string;
```

Is set to the current resolved language.
It can be used as primary used language, for example in a language switcher.

#### Inherited from

```ts
i18n.resolvedLanguage;
```

---

### services

```ts
services: Services;
```

Internal container for all used plugins and implementation details like languageUtils, pluralResolvers, etc.

#### Inherited from

```ts
i18n.services;
```

---

### store

```ts
store: ResourceStore;
```

Internal container for translation resources

#### Inherited from

```ts
i18n.store;
```

---

### t

```ts
t: TFunction<['translation', ...string[]]>;
```

#### Inherited from

```ts
i18n.t;
```

## Methods

### addResource()

```ts
addResource(
   lng,
   ns,
   key,
   value,
   options?): i18n;
```

Adds one key/value.

#### Parameters

##### lng

`string`

##### ns

`string`

##### key

`string`

##### value

`string`

##### options?

###### keySeparator?

`string`

###### silent?

`boolean`

#### Returns

`i18n`

#### Inherited from

```ts
i18n.addResource;
```

---

### addResourceBundle()

```ts
addResourceBundle(
   lng,
   ns,
   resources,
   deep?,
   overwrite?): i18n;
```

Adds a complete bundle.
Setting deep param to true will extend existing translations in that file.
Setting overwrite to true it will overwrite existing translations in that file.

#### Parameters

##### lng

`string`

##### ns

`string`

##### resources

`any`

##### deep?

`boolean`

##### overwrite?

`boolean`

#### Returns

`i18n`

#### Inherited from

```ts
i18n.addResourceBundle;
```

---

### addResources()

```ts
addResources(
   lng,
   ns,
   resources): i18n;
```

Adds multiple key/values.

#### Parameters

##### lng

`string`

##### ns

`string`

##### resources

`any`

#### Returns

`i18n`

#### Inherited from

```ts
i18n.addResources;
```

---

### changeLanguage()

```ts
changeLanguage(lng?, callback?): Promise<TFunction<"translation", undefined>>;
```

Changes the language. The callback will be called as soon translations were loaded or an error occurs while loading.
HINT: For easy testing - setting lng to 'cimode' will set t function to always return the key.

#### Parameters

##### lng?

`string`

##### callback?

`Callback`

#### Returns

`Promise`\<`TFunction`\<`"translation"`, `undefined`\>\>

#### Inherited from

```ts
i18n.changeLanguage;
```

---

### cloneInstance()

```ts
cloneInstance(options?, callback?): i18n;
```

Creates a clone of the current instance. Shares store, plugins and initial configuration.
Can be used to create an instance sharing storage but being independent on set language or namespaces.

#### Parameters

##### options?

`CloneOptions`

##### callback?

`Callback`

#### Returns

`i18n`

#### Inherited from

```ts
i18n.cloneInstance;
```

---

### createInstance()

```ts
createInstance(options?, callback?): i18n;
```

Will return a new i18next instance.
Please read the options page for details on configuration options.
Providing a callback will automatically call init.
The callback will be called after all translations were loaded or with an error when failed (in case of using a backend).

#### Parameters

##### options?

`InitOptions`\<`object`\>

##### callback?

`Callback`

#### Returns

`i18n`

#### Inherited from

```ts
i18n.createInstance;
```

---

### dir()

```ts
dir(lng?): "ltr" | "rtl";
```

Returns rtl or ltr depending on languages read direction.

#### Parameters

##### lng?

`string`

#### Returns

`"ltr"` \| `"rtl"`

#### Inherited from

```ts
i18n.dir;
```

---

### emit()

```ts
emit(eventName, ...args): void;
```

Emit event

#### Parameters

##### eventName

`string`

##### args

...`any`[]

#### Returns

`void`

#### Inherited from

```ts
i18n.emit;
```

---

### getDataByLanguage()

```ts
getDataByLanguage(lng):
  | undefined
  | {
[key: string]: object;
};
```

Returns a resource data by language.

#### Parameters

##### lng

`string`

#### Returns

\| `undefined`
\| \{
\[`key`: `string`\]: `object`;
\}

#### Inherited from

```ts
i18n.getDataByLanguage;
```

---

### getFixedT()

```ts
getFixedT<Ns, TKPrefix, ActualNs>(...args): TFunction<ActualNs, TKPrefix>;
```

Returns a t function that defaults to given language or namespace.
Both params could be arrays of languages or namespaces and will be treated as fallbacks in that case.
On the returned function you can like in the t function override the languages or namespaces by passing them in options or by prepending namespace.

Accepts optional keyPrefix that will be automatically applied to returned t function.

#### Type Parameters

##### Ns

`Ns` _extends_ `null` \| `Namespace` = `"translation"`

##### TKPrefix

`TKPrefix` _extends_ `KeyPrefix`\<`Ns`\> = `undefined`

##### ActualNs

`ActualNs` _extends_ `Namespace` = `Ns` _extends_ `null` ? `"translation"` : `Ns`

#### Parameters

##### args

\[`string` \| readonly `string`[], `Ns`, `TKPrefix`\] | \[`null`, `Ns`, `TKPrefix`\]

#### Returns

`TFunction`\<`ActualNs`, `TKPrefix`\>

#### Inherited from

```ts
i18n.getFixedT;
```

---

### getResource()

```ts
getResource(
   lng,
   ns,
   key,
   options?): any;
```

Gets one value by given key.

#### Parameters

##### lng

`string`

##### ns

`string`

##### key

`string`

##### options?

`Pick`\<`InitOptions`\<`object`\>, `"keySeparator"` \| `"ignoreJSONStructure"`\>

#### Returns

`any`

#### Inherited from

```ts
i18n.getResource;
```

---

### getResourceBundle()

```ts
getResourceBundle(lng, ns): any;
```

Returns a resource bundle.

#### Parameters

##### lng

`string`

##### ns

`string`

#### Returns

`any`

#### Inherited from

```ts
i18n.getResourceBundle;
```

---

### hasLoadedNamespace()

```ts
hasLoadedNamespace(ns, options?): boolean;
```

Checks if namespace has loaded yet.
i.e. used by react-i18next

#### Parameters

##### ns

`string` | readonly `string`[]

##### options?

###### fallbackLng?

`false` \| `FallbackLng`

###### lng?

`string` \| readonly `string`[]

###### precheck?

(`i18n`, `loadNotPending`) => `undefined` \| `boolean`

if `undefined` is returned default checks are performed.

#### Returns

`boolean`

#### Inherited from

```ts
i18n.hasLoadedNamespace;
```

---

### hasResourceBundle()

```ts
hasResourceBundle(lng, ns): boolean;
```

Checks if a resource bundle exists.

#### Parameters

##### lng

`string`

##### ns

`string`

#### Returns

`boolean`

#### Inherited from

```ts
i18n.hasResourceBundle;
```

---

### init()

#### Call Signature

```ts
init(callback?): Promise<TFunction<"translation", undefined>>;
```

The default of the i18next module is an i18next instance ready to be initialized by calling init.
You can create additional instances using the createInstance function.

##### Parameters

###### callback?

`Callback`

will be called after all translations were loaded or with an error when failed (in case of using a backend).

##### Returns

`Promise`\<`TFunction`\<`"translation"`, `undefined`\>\>

##### Inherited from

```ts
i18n.init;
```

#### Call Signature

```ts
init<T>(options, callback?): Promise<TFunction<"translation", undefined>>;
```

##### Type Parameters

###### T

`T`

##### Parameters

###### options

`InitOptions`\<`T`\>

###### callback?

`Callback`

##### Returns

`Promise`\<`TFunction`\<`"translation"`, `undefined`\>\>

##### Inherited from

```ts
i18n.init;
```

---

### initCompose()

```ts
initCompose(cfg): Promise<I18nApp>;
```

#### Parameters

##### cfg

[`Createi18nConfigParams`](../type-aliases/Createi18nConfigParams.md)

#### Returns

`Promise`\<`I18nApp`\>

---

### loadLanguages()

```ts
loadLanguages(lngs, callback?): Promise<void>;
```

Loads additional languages not defined in init options (preload).

#### Parameters

##### lngs

`string` | readonly `string`[]

##### callback?

`Callback`

#### Returns

`Promise`\<`void`\>

#### Inherited from

```ts
i18n.loadLanguages;
```

---

### loadNamespaces()

```ts
loadNamespaces(ns, callback?): Promise<void>;
```

Loads additional namespaces not defined in init options.

#### Parameters

##### ns

`string` | readonly `string`[]

##### callback?

`Callback`

#### Returns

`Promise`\<`void`\>

#### Inherited from

```ts
i18n.loadNamespaces;
```

---

### loadResources()

```ts
loadResources(callback?): void;
```

#### Parameters

##### callback?

(`err`) => `void`

#### Returns

`void`

#### Inherited from

```ts
i18n.loadResources;
```

---

### off()

```ts
off(event, listener?): void;
```

Remove event listener
removes all callback when callback not specified

#### Parameters

##### event

`string`

##### listener?

(...`args`) => `void`

#### Returns

`void`

#### Inherited from

```ts
i18n.off;
```

---

### on()

#### Call Signature

```ts
on(event, callback): void;
```

Gets fired after initialization.

##### Parameters

###### event

`"initialized"`

###### callback

(`options`) => `void`

##### Returns

`void`

##### Inherited from

```ts
i18n.on;
```

#### Call Signature

```ts
on(event, callback): void;
```

Gets fired on loaded resources.

##### Parameters

###### event

`"loaded"`

###### callback

(`loaded`) => `void`

##### Returns

`void`

##### Inherited from

```ts
i18n.on;
```

#### Call Signature

```ts
on(event, callback): void;
```

Gets fired if loading resources failed.

##### Parameters

###### event

`"failedLoading"`

###### callback

(`lng`, `ns`, `msg`) => `void`

##### Returns

`void`

##### Inherited from

```ts
i18n.on;
```

#### Call Signature

```ts
on(event, callback): void;
```

Gets fired on accessing a key not existing.

##### Parameters

###### event

`"missingKey"`

###### callback

(`lngs`, `namespace`, `key`, `res`) => `void`

##### Returns

`void`

##### Inherited from

```ts
i18n.on;
```

#### Call Signature

```ts
on(event, callback): void;
```

Gets fired when resources got added or removed.

##### Parameters

###### event

`"added"` | `"removed"`

###### callback

(`lng`, `ns`) => `void`

##### Returns

`void`

##### Inherited from

```ts
i18n.on;
```

#### Call Signature

```ts
on(event, callback): void;
```

Gets fired when changeLanguage got called.

##### Parameters

###### event

`"languageChanged"`

###### callback

(`lng`) => `void`

##### Returns

`void`

##### Inherited from

```ts
i18n.on;
```

#### Call Signature

```ts
on(event, listener): void;
```

Event listener

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`void`

##### Inherited from

```ts
i18n.on;
```

---

### reloadResources()

#### Call Signature

```ts
reloadResources(
   lngs?,
   ns?,
callback?): Promise<void>;
```

Reloads resources on given state. Optionally you can pass an array of languages and namespaces as params if you don't want to reload all.

##### Parameters

###### lngs?

`string` | readonly `string`[]

###### ns?

`string` | readonly `string`[]

###### callback?

() => `void`

##### Returns

`Promise`\<`void`\>

##### Inherited from

```ts
i18n.reloadResources;
```

#### Call Signature

```ts
reloadResources(
   lngs,
   ns,
callback?): Promise<void>;
```

##### Parameters

###### lngs

`null`

###### ns

`string` | readonly `string`[]

###### callback?

() => `void`

##### Returns

`Promise`\<`void`\>

##### Inherited from

```ts
i18n.reloadResources;
```

---

### removeResourceBundle()

```ts
removeResourceBundle(lng, ns): i18n;
```

Removes an existing bundle.

#### Parameters

##### lng

`string`

##### ns

`string`

#### Returns

`i18n`

#### Inherited from

```ts
i18n.removeResourceBundle;
```

---

### setDefaultNamespace()

```ts
setDefaultNamespace(ns): void;
```

Changes the default namespace.

#### Parameters

##### ns

`string` | readonly `string`[]

#### Returns

`void`

#### Inherited from

```ts
i18n.setDefaultNamespace;
```

---

### use()

```ts
use<T>(module): this;
```

The use function is there to load additional plugins to i18next.
For available module see the plugins page and don't forget to read the documentation of the plugin.

#### Type Parameters

##### T

`T` _extends_ `Module`

#### Parameters

##### module

Accepts a class or object

`T` | `NewableModule`\<`T`\> | `Newable`\<`T`\>

#### Returns

`this`

#### Inherited from

```ts
i18n.use;
```
