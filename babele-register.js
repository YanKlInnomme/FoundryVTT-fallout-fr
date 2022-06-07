Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'fallout-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});

/* // Encumbrance
data.carryWeight.base =
75 + parseInt(this.data.data.attributes.str.value) * 5
data.carryWeight.value =
parseInt(data.carryWeight.base) + parseInt(data.carryWeight.mod)
data.totalWeight = this._getItemsTotalWeight()
data.encumbranceLevel = 0
if (data.totalWeight > data.carryWeight.value) {
let dif = data.totalWeight - data.carryWeight.value
data.encumbranceLevel = Math.ceil(dif / 50)
} */