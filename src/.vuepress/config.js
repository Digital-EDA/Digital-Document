const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Digital-IDE',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#cb81da' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'English', // this will be set as the lang attribute on <html>
        },
        '/zh/': {
            lang: '简体中文',
        }
    },

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        logo: '/icon.png',
        lastUpdated: false,
        nav: [
            {
                text: 'Guide',
                link: '/guide/introduction',
            },
            {
                text: 'Github',
                link: 'https://github.com/Digital-EDA/Digital-IDE'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        'introduction',
                        'installation',
                        'todo',
                    ]
                },
                {
                    title: 'Language Services',
                    collapsable: false,
                    children: [
                        "language-service"
                    ]
                },
                {
                    title: 'Project Management',
                    collapsable: false,
                    children: [
                        'pm-introduction',
                        'pm-project-building',
                        'pm-simulation-building',
                        'pm-design-assistance'
                    ]
                },
                {
                    title: 'About',
                    collapsable: false,
                    children: [
                        "about"
                    ]
                }
            ],
            '/zh/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        'introduction',
                        'installation',
                        'todo',
                    ]
                },
                {
                    title: '语言服务',
                    collapsable: false,
                    children: [
                        "language-service"
                    ]
                },
                {
                    title: '项目管理',
                    collapsable: false,
                    children: [
                        'pm-introduction',
                        'pm-project-building',
                        'pm-simulation-building',
                        'pm-design-assistance'
                    ]
                },
                {
                    title: '关于',
                    collapsable: false,
                    children: [
                        "about"
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
