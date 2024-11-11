const cases = document.querySelector('.coronavirus-input');
const deaths = document.querySelector('.deaths-input');
const recovered = document.querySelector('.recovered-input');

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
// type can be line , pie , bar, radar,doughnut, polarArea
    type: 'pie', 
    data: {

        labels: ['Active Cases', 'Deaths', 'Recovered'],
        datasets: [
            {

                label: '# of votes',
                data: [0, 0, 0],
                backgroundColor: ['#d5d880', '#dd3b79', '#ff766b'],
                borderWidth: 0
            }
        ]

    }

});


const updateChartValue = (input, dataOrder) => {

    input.addEventListener('change', e => {
        myChart.data.datasets[0].data[dataOrder] = e.target.value;
        myChart.update();
    });

};

updateChartValue(cases, 0);
updateChartValue(deaths, 1);
updateChartValue(recovered, 2);