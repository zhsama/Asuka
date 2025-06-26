import type I18nKeys from "../locales/keys";
import zhCN from "../locales/zh-CN.json";
import en from "../locales/en.json";

export type Locale = "zh-CN" | "en";

const translations: Record<Locale, Record<string, string>> = {
  "zh-CN": zhCN,
  "en": en,
};

export function getTranslation(locale: Locale, key: I18nKeys): string {
  return translations[locale]?.[key] || key;
}

export function getTranslationWithParams(
  locale: Locale,
  key: I18nKeys,
  params: Record<string, string | number>
): string {
  let translation = getTranslation(locale, key);
  
  Object.entries(params).forEach(([paramKey, value]) => {
    translation = translation.replace(`{{${paramKey}}}`, String(value));
  });
  
  return translation;
}

export function getI18nPath(locale: Locale, path: string): string {
  if (locale === "en") {
    return path;
  }
  return `/${locale}${path}`;
} 