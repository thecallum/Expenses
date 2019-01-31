const app = new Vue({
    el: '#app',

    data: {
        income: [
            { desc: 'memes', value: 1 }
        ],
        expenses: [
            { desc: 'memes', value: 1 }
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
        }
    },

    computed: {
        totalIncome: function () {
            return this.income.map(item => Number(item.value)).reduce((acc, cur) => acc + cur);
        },
        totalExpenses: function () {
            return this.expenses.map(item => Number(item.value)).reduce((acc, cur) => acc + cur);
        },
        totalBudget: function () {
            return this.totalIncome - this.totalExpenses;
        }
    }
})