import type { Locale } from '../../lib/locale';

export default async function getDictionary(locale: Locale) {
  // Dynamically import the JSON dictionary for the requested locale.
  // Using dynamic import so bundler only includes what's necessary server-side.
  const dict = await import(`./${locale}.json`);
  return dict.default as Record<string, any>;
}
