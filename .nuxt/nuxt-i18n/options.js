export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","file":"en.js","name":"english","switchText":"Switch language to english "},{"code":"pl","file":"pl.js","name":"polski","switchText":"Zmień język na polski"}],
  defaultLocale: "pl",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: true,
  langDir: "locales/",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"pl","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  seo: true,
  normalizedLocales: [{"code":"en","file":"en.js","name":"english","switchText":"Switch language to english "},{"code":"pl","file":"pl.js","name":"polski","switchText":"Zmień język na polski"}],
  localeCodes: ["en","pl"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "\"",
  2: "e",
  3: "n",
  4: ".",
  5: "j",
  6: "s",
  7: "\"",
  8: ":",
  9: "\"",
  10: ".",
  11: ".",
  12: "\\",
  13: "\\",
  14: "\\",
  15: "\\",
  16: "l",
  17: "o",
  18: "c",
  19: "a",
  20: "l",
  21: "e",
  22: "s",
  23: "\\",
  24: "\\",
  25: "\\",
  26: "\\",
  27: "e",
  28: "n",
  29: ".",
  30: "j",
  31: "s",
  32: "\"",
  33: ",",
  34: "\"",
  35: "p",
  36: "l",
  37: ".",
  38: "j",
  39: "s",
  40: "\"",
  41: ":",
  42: "\"",
  43: ".",
  44: ".",
  45: "\\",
  46: "\\",
  47: "\\",
  48: "\\",
  49: "l",
  50: "o",
  51: "c",
  52: "a",
  53: "l",
  54: "e",
  55: "s",
  56: "\\",
  57: "\\",
  58: "\\",
  59: "\\",
  60: "p",
  61: "l",
  62: ".",
  63: "j",
  64: "s",
  65: "\"",
  66: "}",
}

export const localeMessages = {
  'en.js': () => import('../..\\locales\\en.js' /* webpackChunkName: "lang-en.js" */),
  'pl.js': () => import('../..\\locales\\pl.js' /* webpackChunkName: "lang-pl.js" */),
}
