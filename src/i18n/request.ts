import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';    

export default getRequestConfig(async (param) => {
  const store = await cookies();
  const locale = param.locale || store.get('locale')?.value || 'en';
 
  return {
    locale,
    messages : (await import(`../textLang/${locale}.json`)).default
  };
}); 