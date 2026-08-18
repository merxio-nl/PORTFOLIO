import { ui, languages, defaultLang } from './ui';

export type Lang = keyof typeof languages;

const prefixedLangs = (Object.keys(languages) as Lang[]).filter((lang) => lang !== defaultLang);

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Default locale (`en`) has no URL prefix; other locales are prefixed. */
export function localizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

/** Strips a leading non-default-locale prefix (`/ru`, `/nl`, ...) from a pathname. */
export function stripLangPrefix(pathname: string): string {
  const prefixPattern = new RegExp(`^/(${prefixedLangs.join('|')})(?=/|$)`);
  return pathname.replace(prefixPattern, '') || '/';
}

/** Maps any locale's pathname to the equivalent path in another locale. */
export function alternateLangPath(pathname: string, targetLang: Lang): string {
  return localizedPath(stripLangPrefix(pathname), targetLang);
}
