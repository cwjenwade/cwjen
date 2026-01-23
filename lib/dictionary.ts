export const DICTIONARY = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      'eis-heauton': 'Eis-heauton',
      psychotherapy: 'Psychotherapy',
      couple: 'Couple Therapy',
      group: 'Group Therapy',
      project: 'Projects'
    },
    home: {
      title: 'Welcome to Wade Jen',
      description: 'Academic and professional resources on psychotherapy and counseling.',
      content: 'This site shares work on psychotherapy, counselling and related projects.'
    },
    about: {
      title: 'About Wade Jen',
      description: 'Professional background and academic work.',
    },
    'eis-heauton': {
      title: 'Eis-heauton',
      description: 'Thoughts and writings.'
    },
    psychotherapy: {
      title: 'Psychotherapy',
      description: 'Approaches and resources.'
    },
    couple: {
      title: 'Couple Therapy',
      description: 'Work with couples.'
    },
    group: {
      title: 'Group Therapy',
      description: 'Group processes and research.'
    },
    project: {
      title: 'Projects',
      description: 'Research and community projects.'
    },
  },
  zh: {
    navigation: {
      home: '首頁',
      about: '關於',
      'eis-heauton': '思想起',
      psychotherapy: '心理治療',
      couple: '伴侶治療',
      group: '團體治療',
      project: '專案計畫'
    },
    home: {
      title: '歡迎來到 Wade Jen',
      description: '心理治療與諮商的學術與專業資源。',
      content: '本站分享心理治療、諮商與相關計畫工作。'
    },
    about: {
      title: '關於 Wade Jen',
      description: '專業背景與學術工作。',
    },
    'eis-heauton': {
      title: '思想起',
      description: '思考與書寫。'
    },
    psychotherapy: {
      title: '心理治療',
      description: '治療方法與資源。'
    },
    couple: {
      title: '伴侶治療',
      description: '伴侶工作。'
    },
    group: {
      title: '團體治療',
      description: '團體過程與研究。'
    },
    project: {
      title: '專案計畫',
      description: '研究與社群計畫。'
    },
  },
} as const;

export type Dict = typeof DICTIONARY;
export type Locale = keyof Dict;
