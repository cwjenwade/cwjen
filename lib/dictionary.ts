export const DICTIONARY = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      psychotherapy: 'Psychotherapy',
    },
    home: {
      title: 'Welcome to Wade Jen',
      description: 'Academic and professional resources on psychotherapy and counseling.',
    },
    about: {
      title: 'About Wade Jen',
      description: 'Professional background and academic work.',
    },
  },
  zh: {
    navigation: {
      home: '首頁',
      about: '關於',
      psychotherapy: '心理治療',
    },
    home: {
      title: '歡迎來到 Wade Jen',
      description: '心理治療與諮商的學術與專業資源。',
    },
    about: {
      title: '關於 Wade Jen',
      description: '專業背景與學術工作。',
    },
  },
} as const;

export type Dict = typeof DICTIONARY;
export type Locale = keyof Dict;
