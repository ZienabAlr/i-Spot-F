

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
            data: //giv the data of the last element in the array
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
    // console.log("results rray" ,results);

}
getResults();

function showResults(){

    // make a bar chart
  
    // console.log("results rray" ,results);
    // console.log("results rray" ,results);


}