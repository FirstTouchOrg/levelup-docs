/**
 * 多語言配置：新增語言時在 LOCALES 中加一項，並在 src/pages/<code>/ 下補齊頁面即可。
 * 預設語言（繁體中文）位於根路徑，其餘語言以 /<code>/ 為前綴。
 */

export type LocaleCode = 'zh-hant' | 'en' | 'vi';

export interface LocaleMeta {
  code: LocaleCode;
  /** html lang 屬性 */
  lang: string;
  /** 語言切換器中顯示的名稱 */
  label: string;
  /** URL 前綴，預設語言為空字串 */
  basePath: string;
}

export const LOCALES: Record<LocaleCode, LocaleMeta> = {
  'zh-hant': { code: 'zh-hant', lang: 'zh-Hant', label: '繁體中文', basePath: '' },
  en: { code: 'en', lang: 'en', label: 'English', basePath: '/en' },
  vi: { code: 'vi', lang: 'vi', label: 'Tiếng Việt', basePath: '/vi' },
};

export const DEFAULT_LOCALE: LocaleCode = 'zh-hant';

interface UIStrings {
  siteName: string;
  description: string;
  nav: { home: string; whitepaper: string; arena: string; level: string };
  footerTagline: string;
  footerSub: string;
}

export const UI: Record<LocaleCode, UIStrings> = {
  'zh-hant': {
    siteName: 'LevelUp Land Docs',
    description: 'LevelUp Land 幫助文件 — 陪伴每一位航海者持續成長',
    nav: { home: '首頁', whitepaper: '白皮書', arena: 'Arena 指南', level: 'Level 指南' },
    footerTagline: '每天航行，持續收穫',
    footerSub: '成長者的群島',
  },
  en: {
    siteName: 'LevelUp Land Docs',
    description: 'LevelUp Land Help Center — growing with every voyager, every day',
    nav: { home: 'Home', whitepaper: 'Whitepaper', arena: 'Arena Guide', level: 'Level Guide' },
    footerTagline: 'Sail every day, harvest along the way',
    footerSub: 'The Archipelago of Growth',
  },
  vi: {
    siteName: 'LevelUp Land Docs',
    description: 'Trung tâm trợ giúp LevelUp Land — đồng hành cùng mỗi thủy thủ trưởng thành mỗi ngày',
    nav: { home: 'Trang chủ', whitepaper: 'Sách trắng', arena: 'Hướng dẫn Arena', level: 'Hướng dẫn Level' },
    footerTagline: 'Ra khơi mỗi ngày, gặt hái không ngừng',
    footerSub: 'Quần đảo của những người trưởng thành',
  },
};

/** 由 slug（'' | 'whitepaper' | 'arena' | 'level'）生成某語言下的路徑 */
export function localePath(locale: LocaleCode, slug: string): string {
  const base = LOCALES[locale].basePath;
  return slug ? `${base}/${slug}/` : `${base}/` || '/';
}
