

function getResults(){

    fetch('http://localhost:3000/api/v2/results')
    .then(res => res.json())
    .then((data) =>{
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Talen', 'Exacte Wetenschappen', 'Wiskunde', 'Literatuur', 'Medische Activiteiten', 'Sociale Wetenschappen', 'Handel-Zaken', 'Muziek', 'Sport', 'Plastisch Opvoeding', 'Techniek', 'Sociale Wetenschappen'],
        datasets: [{
            label: '# Results',
            data: //give the data of the last element in the array
            [data.data.results[data.data.results.length - 1].talen,
            data.data.results[data.data.results.length - 1].exacteWetenschappen,
            data.data.results[data.data.results.length - 1].wiskunde,
            data.data.results[data.data.results.length - 1].literatuur,
            data.data.results[data.data.results.length - 1].medischeActiviteiten,
            data.data.results[data.data.results.length - 1].socialeDienstbetoon,
            data.data.results[data.data.results.length - 1].handelZaken,
            data.data.results[data.data.results.length - 1].muziek,
            data.data.results[data.data.results.length - 1].sport,
            data.data.results[data.data.results.length - 1].plastischOpvoeding,
            data.data.results[data.data.results.length - 1].techniek,
            data.data.results[data.data.results.length - 1].socialeWetenschappen

            ],
            backgroundColor: [
                '#67B1D2', 
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2'

            ],
            borderColor: [
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2',
                '#67B1D2'

         
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true

            }
        }
    }
});

    }
    );

}
getResults();
