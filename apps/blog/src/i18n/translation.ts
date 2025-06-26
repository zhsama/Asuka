import AsukaConfig from "~/asuka.config";
import type I18nKeys from "./keys";
import { en } from "./lang/en";
import { zh_CN } from "./lang/zh_cn";

export type Locale = "zh-CN" | "en";

export type Translation = {
  [K in I18nKeys]: string;
};

const map: { [key: string]: Translation } = {
  en: en,
  "zh-cn": zh_CN,
};

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || en;
}

export function i18n(key: I18nKeys, ...interpolations: string[]): string {
  const lang = AsukaConfig.locale;
  let translation = getTranslation(lang)[key];
  interpolations.forEach((interpolation) => {
    translation = translation.replace("{{}}", interpolation);
  });
  return translation;
}
