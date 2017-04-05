<style lang="scss" scoped>@import 'core';
    .option,
    .quantity {
        margin-bottom: 24px;
        max-width: 320px;
    }

    label {
        display: block;
        font-size: 12px;
    }
</style>

<template>
    <div class="v-inventory-selector">
        <div v-for="option in product.options" class="option">
            <label :for="`option_${ option.id }`">{{ option.name }}</label>
            <v-select
                :id="`option_${ option.id }`"
                :value="findSelection(option).value"
                @input="onValueselections(option, $event)">
                <option>{{ option.placeholder }}</option>
                <option
                    v-for="value in option.values"
                    :disabled="isDisabled(value)"
                    :value="value.id">
                    {{ getValueText(value) }}
                </option>
            </v-select>
        </div>
        <div class="quantity">
            <label for="quantity">Quantity</label>
            <v-input
                v-model="quantity"
                id="quantity"
                min="0"
                type="number"
            />
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.selections = this.product.options.map(option => {
                return {
                    option: option.id,
                    value: null,
                };
            });
        },
        data() {
            return {
                quantity: 1,
                selections: [],
            };
        },
        methods: {
            findSelection(option) {
                return this.selections.find(model => model.option == option.id);
            },
            getInventoryByValueIds(valueIds) {
                return this.product.inventories.find(inventory => {
                    let inventoryValueIds = inventory.values.map(value => value.id);

                    return valueIds.every(i => inventoryValueIds.includes(i));
                });
            },
            getPossibleSelection(value) {
                return this.selections
                    .filter(selection => selection.value && selection.option !== value.option_id)
                    .map(selection => selection.value)
                    .concat(value.id);
            },
            getValueText(value) {
                let text = value.name;

                if (this.isDisabled(value)) {
                    text += ' (out of stock)';
                }

                return text;
            },
            isDisabled(value) {
                let valueIds = this.getPossibleSelection(value);
                let inventory = this.getInventoryByValueIds(valueIds);

                return ! inventory || inventory.quantity < 1;
            },
            onValueselections(option, value) {
                this.findSelection(option).value = Number(value);
            },
        },
        props: {
            product: {
                required: true,
                type: Object,
            },
        },
    };
</script>
