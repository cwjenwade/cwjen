export type Locale = 'en' | 'zh';

export const LOCALES: Locale[] = ['en', 'zh'];

export function isLocale(value: string | undefined): value is Locale {
  return (value ? LOCALES.includes(value as Locale) : false);
}
