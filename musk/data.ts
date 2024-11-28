import { ApplicationIcons, FeedbackIcons, MaterialsIcons, ProfileIcons, RecommendationsIcons } from "@/components/icons";

export const LangArr = [
    {
      id: 1,
      label: "Ru",
      value: "ru",
    },
    {
      id: 2,
      label: "En",
      value: "en",
    },
    {
      id: 3,
      label: "Uz",
      value: "uz",
    },
  ];

  export const HeaderSiteBarrArr = [
    {
      id:1,
      title:'Главная',
      child:[
          {
            id:1,
            link:'/anticorrosive',
            text:'Виртуальная академия'
          },
          {
            id:2,
            link:'/glossary',
            text:'Словарь'
          },
          {
            id:3,
            link:'/about-us',
            text:'О нас'
          },
          {
            id:4,
            link:'/faq',
            text:'FAQ'
          }
        ]
    },
    {
        id:2,
        title:'ПОДФТ',
        child:[
            {
              id:1,
              link:'/',
              text:'text'
            },
            {
                id:2,
                link:'/',
                text:'text'
              },
              {
                id:3,
                link:'/',
                text:'text'
              }
          ]
      },
      {
        id:3,
        title:'Антикор',
        child:[
            {
                id:1,
                link:'/',
                text:'text'
              },
              {
                  id:2,
                  link:'/',
                  text:'text'
                },
                {
                  id:3,
                  link:'/',
                  text:'text'
                }
          ]
      },
  ]
  export const SitebarArr = [
    {
        id:1,
        text:"Главная",
        child: [
            {
                id:1,
                text:"Антикоррупционная деятельность"
            },
            {
                id:2,
                text:"Борьба с отмыванием денег и финансированием терроризма"
            },
            {
                id:3,
                text:"Виртуальная Академия"
            },
            {
                id:4,
                text:"Словарь"
            },
            {
                id:5,
                text:"Архив"
            },
            {
                id:6,
                text:"Часто задаваемые вопросы"
            }
        ]
    },
    {
        id:2,
        text:"Антикор",
        child: [
            {
                id:1,
                text:"Новости"
            },
            {
                id:2,
                text:"Источник"
            },
            {
                id:3,
                text:"Информация по странам"
            },
            {
                id:4,
                text:"Международные организации"
            },
            {
                id:5,
                text:"Информационная база"
            },
            {
                id:6,
                text:"Аналитика"
            }
        ]
    },
    {
        id:3,
        text:"ПОД/ФТ",
        child: [
            {
                id:1,
                text:"Новости"
            },
            {
                id:2,
                text:"Источник"
            },
            {
                id:3,
                text:"Информация по странам"
            },
            {
                id:4,
                text:"Международные организации"
            },
            {
                id:5,
                text:"Анализ"
            },
            
        ]
    },
    {
        id:4,
        text:"Посещения",
        child: [
            {
                id:1,
                text:"Общее"
            },
            {
                id:2,
                text:"Сегодня"
            },
            {
                id:3,
                text:"Вчера"
            },
            {
                id:4,
                text:"За неделю"
            },
            {
                id:5,
                text:"За месяц:"
            },
            
        ]
    }
  ]

  export const ResourcesArr = [
    {
        id:1,
        text:"Источники",
        link:"/sources",
        image:'/r1.png'
    },
    {
        id:2,
        text:"Страновая информация",
        link:"/country-information",
        image:'/r2.png'
    },
    {
        id:3,
        text:"Международные организации",
        link:"/international-organizations",
        image:'/r3.png'
    },
    {
        id:4,
        text:"Информационные базы данных",
        link:"/information-databases",
        image:'/r4.png'
    },
    {
        id:5,
        text:"Аналитика",
        link:"/analytics",
        image:'/r5.png'
    },
    {
        id:6,
        text:"Видеоматериалы",
        link:"/video-materials",
        image:'/r6.jfif'
    }
  ]


  export const ProfileLayoutArr = [
    {
        id:1,
        text:'Personal-information',
        link:'/profile/information',
        icons: ()=> ProfileIcons()
    },
    {
        id:2,
        text:'My-materials',
        link:'/profile/materials',
        icons: ()=> MaterialsIcons()
    },
    {
        id:3,
        text:'Recommendations',
        link:'/profile/recommendations',
        icons: ()=> RecommendationsIcons()
    },
    {
        id:4,
        text:'Feedback',
        link:'/profile/feedback',
        icons: ()=> FeedbackIcons()
    },
    {
        id:5,
        text:'Cooperation',
        link:'/profile/cooperation',
        icons: ()=> ApplicationIcons()
    },
    {
        id:6,
        text:'Notification',
        link:'/profile/notifications',
        icons: ()=> ApplicationIcons()
    },
]