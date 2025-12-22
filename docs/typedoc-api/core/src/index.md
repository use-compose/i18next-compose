[@use-compose/i18next-compose-root](../../index.md) / core/src

# core/src

## Interfaces

| Interface                                                | Description |
| -------------------------------------------------------- | ----------- |
| [CoreContext](interfaces/CoreContext.md)                 | -           |
| [I18nApp](interfaces/I18nApp.md)                         | -           |
| [I18nFormatterHelper](interfaces/I18nFormatterHelper.md) | -           |

## Type Aliases

| Type Alias                                                       | Description                                                                                                               |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [ChangeLanguageFunc](type-aliases/ChangeLanguageFunc.md)         | -                                                                                                                         |
| [Createi18nConfigParams](type-aliases/Createi18nConfigParams.md) | i18n configuration parameters It extends i18next InitOptions but omits some properties to allow custom naming and typing. |
| [cTFunc](type-aliases/cTFunc.md)                                 | -                                                                                                                         |
| [InputNamespaces](type-aliases/InputNamespaces.md)               | -                                                                                                                         |

## Variables

| Variable                                      | Description |
| --------------------------------------------- | ----------- |
| [changeLanguage](variables/changeLanguage.md) | -           |

## Functions

| Function                                                | Description                                                                                                 |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [contextCoreStub](functions/contextCoreStub.md)         | Creates a stub core context with default values                                                             |
| [getFlagEmoji](functions/getFlagEmoji.md)               | -                                                                                                           |
| [i18nFormatterHelper](functions/i18nFormatterHelper.md) | Provide helper formatter based on current i18next instance to access translations                           |
| [i18nFormatterMock](functions/i18nFormatterMock.md)     | -                                                                                                           |
| [initI18nConfig](functions/initI18nConfig.md)           | Initializes and configures an i18nApp instance which extends i18n to support custom methods and properties. |
| [useCoreContext](functions/useCoreContext.md)           | Hook to initialize and provide base core i18nApp context                                                    |
