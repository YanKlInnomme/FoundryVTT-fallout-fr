Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'fallout-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});
