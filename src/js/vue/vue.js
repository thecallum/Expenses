const animatedInteger = require('./conponents/animated-integer');


const app = new Vue({
    el: '#app',

    data: {
        income: [
            { desc: 'memes', value: 1 }
        ],
        expenses: [
            // { desc: 'memes', value: 1 }
        ],

        sliderIsPlus: true,
        description: '',
        value: 0,

        error_description: false,
        error_value: false,
    },

    methods: {
        add(e) {
            e.preventDefault();

            if (this.description && this.value) {
                this[this.sliderIsPlus ? 'income' : 'expenses'].push({
                    desc: this.description,
                    value: Number(this.value)
                });

                this.resetAdd();
            } else {
                this.error_description = !this.description;
                this.error_value = !this.value;
            }
        },

        resetAdd() {
            this.description = '';
            this.value = 0;
            this.error_description = false;
            this.error_value = false;
        },

        formatCurrency(num) {
            return num < 0 ? `-£${(num * -1).toFixed(2)}` : `£${num.toFixed(2)}`;
        },
        formatPercentage(num) {
            return `${num.toFixed(0)}%`;
        }
    },

    computed: {
        totalIncome: function () {
            const values = this.income.map(item => Number(item.value));
            return values.length ? values.reduce((acc, cur) => acc + cur) : 0;
        },
        totalExpenses: function () {
            const values = this.expenses.map(item => Number(item.value));
            return values.length ? values.reduce((acc, cur) => acc + cur) : 0;
        },
        totalBudget: function () {
            return this.totalIncome - this.totalExpenses;
        },

    }
})