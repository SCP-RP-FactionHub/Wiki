module.exports = {
    title: "SCP:RP Faction Hub Wiki",
    description: "An Unofficial SCP:RP Faction Hub",
    
    // favicon configuration
    imageWidth: 256,
    imageHeight: 256,
    head: [
        ["link", { rel: "icon", href: "/favicon.png" }]
    ],
    
    // theme configuration
    theme: 'yuu',
    themeColor: "#121212",
    themeConfig: {
		yuu: {
			disableThemeIgnore: true,
            labels: {
                darkTheme: "Dark theme",
            }
		},
	},

    plugins: [
        'vuepress-plugin-nprogress',
        ["vuepress-plugin-container", {
            type: "feature",
            before: text => `<div class="feature"><h2>${text}</h2>`,
            after: "</div>"
        }]
    ]
}