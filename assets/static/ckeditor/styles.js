
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Style manager - static version.
 *
 * This module contains stylesheet-based and custom style management features.
 *
 * It uses a subset of `CSSOM` API for managing style definitions and rules, so the following APIs
 * are used (check them in {@link https://developer.mozilla.org/en-US/docs/Web/API}):
 *
 * * `CSSStyleSheet`,
 * * `CSSStyleRule`,
 * * `CSSImportRule`,
 * * `CSSFontFaceRule`,
 * * `CSSMediaRule`,
 * * `CSSSupportsRule`,
 * * `CSSGroupingRule`,
 * * `CSSConditionRule`,
 * * `CSSNamespaceRule`,
 * * `CSSKeyframesRule`,
 * * `CSSKeyframeRule`,
 * * `CSSStyleDeclaration`.
 *
 * Styles in CKEditor 5 can be divided into:
 *
 * * Stylesheets,
 * * Widget styles,
 * * Editor features styles,
 * * Global styles,
 * * Font family and font size style rules.
 *
 * Note that in the case of `editor features styles`, it is the most abstract definition. In the code
 * those are not implemented as separate style types but rather as separate "collections" of style rules.
 *
 * In general, CKEditor 5 provides an easy way to:
 *
 * * Manage {@link module:engine/view/document~Document document style rules} based on view's document
 * structure (based on a schema) with `view/styles` module,
 * * Add {@link module:engine/view/style/viewstyle~ViewStyle style rules} to {@link module:engine/view/documentdocument~Document},
 * * Get style information based on {@link module:engine/view/documentdocument~Document selection}
 * with {@link module:engine/view/
