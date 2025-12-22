[@use-compose/i18next-compose-root](../../index.md) / i18next-compose/src

# i18next-compose/src

## Interfaces

| Interface                                                | Description |
| -------------------------------------------------------- | ----------- |
| [CoreContext](interfaces/CoreContext.md)                 | -           |
| [I18nApp](interfaces/I18nApp.md)                         | -           |
| [I18NextContext](interfaces/I18NextContext.md)           | -           |
| [I18nFormatterHelper](interfaces/I18nFormatterHelper.md) | -           |

## Type Aliases

| Type Alias                                                       | Description                                                                                                               |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [ChangeLanguageFunc](type-aliases/ChangeLanguageFunc.md)         | -                                                                                                                         |
| [Createi18nConfigParams](type-aliases/Createi18nConfigParams.md) | i18n configuration parameters It extends i18next InitOptions but omits some properties to allow custom naming and typing. |
| [cTFunc](type-aliases/cTFunc.md)                                 | -                                                                                                                         |
| [InputNamespaces](type-aliases/InputNamespaces.md)               | -                                                                                                                         |

## Variables

| Variable                                              | Description |
| ----------------------------------------------------- | ----------- |
| [changeLanguage](variables/changeLanguage.md)         | -           |
| [i18nextContextStub](variables/i18nextContextStub.md) | -           |
| [i18nFormatterMock](variables/i18nFormatterMock.md)   | -           |

## Functions

| Function                                                    | Description                                                                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [composeI18nextContext](functions/composeI18nextContext.md) | Creates and returns an i18next context with the provided configuration options.                             |
| [contextCoreStub](functions/contextCoreStub.md)             | Creates a stub core context with default values                                                             |
| [getFlagEmoji](functions/getFlagEmoji.md)                   | -                                                                                                           |
| [i18nFormatterHelper](functions/i18nFormatterHelper.md)     | Provide helper formatter based on current i18next instance to access translations                           |
| [initI18nConfig](functions/initI18nConfig.md)               | Initializes and configures an i18nApp instance which extends i18n to support custom methods and properties. |
| [useCoreContext](functions/useCoreContext.md)               | Hook to initialize and provide base core i18nApp context                                                    |
