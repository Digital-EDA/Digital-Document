import { defineClientConfig } from 'vuepress/client';
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue';
import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue';
import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue';
import Swiper from 'vuepress-theme-plume/features/Swiper.vue';

import DetailUrl from './theme/components/detail-url.vue';

import './theme/styles/index.css';
import './theme/styles/mermaid.css';

export default defineClientConfig({
    enhance({ app }) {
        // built-in components
        app.component('detail-url', DetailUrl)
        app.component('RepoCard', RepoCard)
        app.component('NpmBadge', NpmBadge)
        app.component('NpmBadgeGroup', NpmBadgeGroup)
        app.component('Swiper', Swiper)
    },
})
