/**
 * Try to map a message into a translation key to translate notifications without modifying original system's code
 *
 * @param wrapped
 * @param args
 * @returns {*}
 */
function localizeUiNotification(wrapped, ...args) {
    let key = "FALLOUT.UI.NOTIFICATIONS."

    if (args[0].startsWith("Ammo ") && args[0].endsWith(" not found")) {
        key += "Ammo_not_found"
    } else if (args[0].startsWith("Not enough ") && args[0].endsWith(" ammo")) {
        key += "Not_enough_ammo"
    } else {
        key += `${args[0].replace(/\s+/g, '_')}`;
    }

    if (game.i18n.has(key)) {
        args[0] = game.i18n.localize(key)
    }

    return wrapped(...args)
}

Hooks.once('ready', () => {
    if(typeof libWrapper !== 'undefined') {
        libWrapper.register('fallout-fr', 'ui.notifications.notify', localizeUiNotification)
        libWrapper.register('fallout-fr', 'ui.notifications.warn', localizeUiNotification)
    }
});