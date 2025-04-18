## Configuration Options

- `dir`: source directory for SVGs
- `prefix` / `suffix`: component name modifiers
- `case`: PascalCase or kebab-case
- `namespaced`: use folder names in component name

## Compatibility

- Nuxt 3 (Vite-based)
- No runtime dependencies
- Fully static, tree-shakable

## Quick Reference

| Capability           | Notes                                 |
| -------------------- | ------------------------------------- |
| Component per SVG    | One `.vue` per `.svg`                 |
| No wrappers          | `<svg>` is the root                   |
| CSS variable support | `var(--icon-fill, fallback)`          |
| Auto-import          | Via Nuxt `components`                 |
| Typing support       | IDE autocompletion + type safety      |
| Configurable names   | Prefix, suffix, folders, case style   |
| Theming              | Compatible with runtime CSS overrides |

This module was built with the following goals:

- **No wrappers** — the root element of each component is the `<svg>` tag.
- **Styling through CSS custom properties** — `fill`, `stroke`, and `stroke-width` are automatically replaced with `var(--...)`, with a fallback to the original SVG value
- **Component-level usage** — not runtime rendering, not prop-based injection.
- **Scalability** — works for 5 icons or 500, with consistent naming and structure.
- **IDE support** — full auto-import, autocompletion, and type inference in Nuxt.

The goal is to provide a system that feels like hand-authored components, but is generated automatically.

This module is designed to eliminate the trade-offs of the above approaches.

Goals:

- **No wrappers** — the root element is always the `<svg>` itself
- **Type-safe and auto-imported** — each icon is a Vue component with a predictable name and full IDE support
- **Build-time generation** — components are created during the build, with no runtime overhead
- **Theming flexibility** — CSS variables allow icons to inherit styles from light/dark themes or scoped tokens

## This Module

This module:

- Parses `.svg` files at build time
- Outputs one Vue component per icon
- Rewrites `fill`, `stroke`, etc. using `var(--icon-*, originalValue)`
- Generates predictable component names (`user-badge.svg` → `IconUserBadge`)
- Registers components with Nuxt auto-import
- Supports type inference and autocomplete in templates
