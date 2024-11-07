import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
 
export default function About() {
  const t = useTranslations('AboutPage');
  return (
    <div>
      <h1 className="text-blue-500">{t('title')}</h1>
      <Link href="/">{t('about')}</Link>
    </div>
  );
}