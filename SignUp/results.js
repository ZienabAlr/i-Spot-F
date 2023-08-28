

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
            [data.data.results[data.data.results.length - 1].talen / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].exacteWetenschappen / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].wiskunde / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].literatuur / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].medischeActiviteiten / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].socialeDienstbetoon / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].handelZaken / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].muziek / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].sport / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].plastischOpvoeding / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].techniek / data.data.results.length - 1,
            data.data.results[data.data.results.length - 1].socialeWetenschappen / data.data.results.length - 1, 

            console.log (data.data.results[data.data.results.length - 1].talen / data.data.results.length - 1)
            // give the average of talen of the last element in the array

            ],
            backgroundColor: [
        

            ],
            borderColor: [
         
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
