import { AsyncComponentLoader, Component } from 'vue';

export { registerComponent, registry, resolveRegistered };
export type { RegisteredComponent };

/**
 * Register Vue components or HTML tags to directly use them in translations.
 * It means to be used by components without props or pre-defined props.
 *
 * Example:
 * registerComponent('ColoredLabel', ColoredLabel);
 *
 * Now ColoredLabel will be automatically parsed on each use of the <Translate> component
 * if it's part of the translation string.
 *
 */

type RegisteredComponent =
  | Component // a Vue component
  | string // a native HTML tag name (e.g., 'a', 'strong')
  | AsyncComponentLoader; // async component loader

const registry: Record<string, RegisteredComponent> = {};

/**
 * Registers a component or HTML tag in the registry.
 *
 * @param {string} name
 * @param {RegisteredComponent} component
 */
function registerComponent(name: string, component: RegisteredComponent) {
  registry[name] = component;
}

/**
 * Resolves a registered component or HTML tag by name.
 *
 * @param {string} name
 * @returns {Record<string, any>}
 */
function resolveRegistered(name: string) {
  return registry[name];
}
