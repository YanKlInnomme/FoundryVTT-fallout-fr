/**
 * Try to map a message into a translation key to translate notifications without modifying original system's code
 *
 * @param wrapped
 * @param args
 * @returns {*}
 */
function localizeUiNotification(wrapped, ...args) {
    const message = args[0]

    if (typeof message !== 'string') {
        return wrapped(...args)
    }

    let key = "FALLOUT.UI.NOTIFICATIONS."

    if (message.startsWith("Ammo ") && message.endsWith(" not found")) {
        key += "Ammo_not_found"
    } else if (message.startsWith("Not enough ") && message.endsWith(" ammo")) {
        key += "Not_enough_ammo"
    } else {
        key += `${message.replace(/\s+/g, '_')}`;
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