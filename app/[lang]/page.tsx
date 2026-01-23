import { isLocale } from '@/lib/locale';
import getDictionary from '../dictionaries/get-dictionary';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function Page({ params }: { params: { lang: string } }) {
  const lang = isLocale(params.lang) ? params.lang : 'zh';
  const dict = await getDictionary(lang);

  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">{dict.home.title}</h1>
          <p className="mt-2 text-stone-600">{dict.home.description}</p>
        </div>
        <LanguageSwitcher />
      </div>

      <nav className="mt-8">
        <ul className="flex gap-4">
          <li>{dict.navigation.home}</li>
          <li>{dict.navigation.about}</li>
          <li>{dict.navigation.psychotherapy}</li>
        </ul>
      </nav>
    </section>
  );
}
