module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Guides',
            link: {
                type: 'generated-index',
                title: 'Guides',
                slug: '/guides',
                keywords: ['guides'],
            },
            items: [
                'guides/apify-platform',
                'guides/request-storage',
                'guides/result-storage',
                'guides/environment-variables',
                'guides/proxy-management',
                'guides/session-management',
                'guides/type-script-actor',
                'guides/docker-images',
            ],
        },
        {
            type: 'category',
            label: 'Examples',
            link: {
                type: 'doc',
                id: 'examples/examples',
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'examples',
                },
            ],
        },
        {
            type: 'category',
            label: 'Upgrading',
            link: {
                type: 'generated-index',
                title: 'Upgrading',
                slug: '/upgrading',
                keywords: ['upgrading'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'upgrading',
                },
            ],
        },
    ],
};
