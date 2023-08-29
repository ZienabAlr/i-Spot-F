

function getResults(){

    fetch('http://localhost:3000/api/v2/results')
    .then(res => res.json())
    .then((data) =>{
    
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            // make a percatage bar 
            type: 'bar',
            data: {
                labels: ['Talen', 'Exacte Wetenschappen', 'Wiskunde', 'Literatuur', 'Medische Activiteiten', 'Sociale Wetenschappen', 'Handel-Zaken', 'Muziek', 'Sport', 'Plastisch Opvoeding', 'Techniek', 'Sociale Wetenschappen', 'Administratie', 'Overtuigen en Besturen'],
                datasets: [{
                    label: '# Results in %',
                    data: 
                    [
                        (data.data.results[data.data.results.length - 1].talen/11)*100,
                        (data.data.results[data.data.results.length - 1].exacteWetenschappen/10)*100,
                        (data.data.results[data.data.results.length - 1].wiskunde/10)*100,
                        (data.data.results[data.data.results.length - 1].literatuur/7)*100,
                        (data.data.results[data.data.results.length - 1].medischeActiviteiten/10)*100,
                        (data.data.results[data.data.results.length - 1].socialeDienstbetoon/8)*100,
                        (data.data.results[data.data.results.length - 1].handelZaken/10)*100,
                        (data.data.results[data.data.results.length - 1].muziek/9)*100,
                        (data.data.results[data.data.results.length - 1].sport/9)*100,
                        (data.data.results[data.data.results.length - 1].plastischOpvoeding/11)*100,
                        (data.data.results[data.data.results.length - 1].techniek/9)*100,
                        (data.data.results[data.data.results.length - 1].socialeWetenschappen/11)*100, 
                        (data.data.results[data.data.results.length - 1].administratie/10)*100,
                        (data.data.results[data.data.results.length - 1].overtuigenEnBesturen/9)*100


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
                        '#67B1D2',
                        '#67B1D2',
                        '#67b1d2'

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
                        '#67B1D2',
                        '#67b1d2',
                        '#67b1d2'

                
                    ],
                    borderWidth: 1
                }]
            } 
            // show a perecentage mark on the y-axis
            ,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 100,
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    }]
                }
            }

        });

    });

}
getResults();

function user(){

    // get request to get the user data
    fetch('http://localhost:3000/ap/v2/userinfo')
    .then(res => res.json())
    .then((data) =>{

        const name = document.querySelector(".user");
        name.innerHTML = data.data.userinfo[data.data.userinfo.length - 1].name;

    });
   


}
user();
