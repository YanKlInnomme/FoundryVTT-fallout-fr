Hooks.once('init', () => {
    if(typeof libWrapper !== 'undefined') {
        /**
         * Converter to handle lbs to kg conversion in the ActorSheet for characters
         */
        libWrapper.register('fallout-fr', 'game.fallout.FalloutActor.prototype._prepareCharacterData', function (wrapped, ...args) {
            wrapped(...args);

            if (this.type !== 'character') {
                return
            }

            // Encumbrance
            this.system.carryWeight.base -= (parseInt(this.system.attributes.str.value) * 5)
            this.system.carryWeight.value = this.system.carryWeight.base + parseInt(this.system.carryWeight.mod)

            if (this.system.carryWeight.total > this.system.carryWeight.value) {
                let dif = this.system.carryWeight.total - this.system.carryWeight.value
                this.system.encumbranceLevel = Math.ceil(dif / 25)
            }
        }, 'MIXED');

        /**
         * Converter to handle lbs to kg conversion in the ActorSheet for robots
         */
        libWrapper.register('fallout-fr', 'game.fallout.FalloutActor.prototype._prepareRobotData', function (wrapped, ...args) {
            wrapped(...args);

            if (this.type !== 'robot') {
                return
            }

            if (this.system.carryWeight.total > this.system.carryWeight.value) {
                let dif = this.system.carryWeight.total - this.system.carryWeight.value
                this.system.encumbranceLevel = Math.ceil(dif / 25)
            }
        }, 'MIXED');
    }
});