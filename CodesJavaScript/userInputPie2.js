const Study = document.querySelector('.productivity-input');
const job = document.querySelector('.job-input');
const miscellaneous = document.querySelector('.miscellaneous-input');

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
// type can be line , pie , bar, radar,doughnut, polarArea
    type: 'polarArea', 
    data: {

        labels: ['Study Hours', 'job Hours', 'miscellaneous Hours'],
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

updateChartValue(Study, 0);
updateChartValue(job, 1);
updateChartValue(miscellaneous, 2);