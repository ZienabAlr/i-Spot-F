let images = [];
let left= 0; 
let right = 0;
let seconds = 0;
let imagesData ;
let randomImage2;
let randomImage3;
let results = [];
let count;

webgazer.setRegression('ridge') /* currently must set regression and tracker */
.setTracker('clmtrackr')
.setGazeListener(function(data, elapsedTime) {

    seconds += 1;
    function results(){
        console.log("start");
        if (data.x < 896 ){
           
            // console.log("left", left);
            left ++; 

        } else if (data.x > 896){
            // console.log("right", right);
            right ++;
        }

    }
    //restart from 0
    
    if (seconds == 147){ // each 30 times is equal to 1 second
        left = 0;
        right = 0;
        seconds = 0;
        console.log("Time is up"); 
       
    }
    results();

    // after 6 seconds make seconds = 0
    // function reset(){
    //     seconds = 0;
    // }
    // setTimeout(reset, 6000);
    //restart reset function after 6 seconds

    

        // var xprediction = data.x; /* these x coordinates are relative to the viewport */
        // var yprediction = data.y; /* these y coordinates are relative to the viewport */
        // console.log(xprediction, yprediction)


}).begin()

function getImages(){
    fetch('http://localhost:3000/api/v1/test')
    .then(res => res.json())
    .then((data) =>{
        // inserting the images into the array
        images.push(data);
        // console.log("images rray" ,images);
        // console.log("data", data);

        setInterval(showImage, 6000);
        clearInterval(showImage);

    }); 

}
getImages();
// console.log("images rray" ,images);

function showImage(){      

    // let randomImage = images[Math.floor(Math.random() * images.length)];
    imagesData = images[0];
        
    randomImage2 = imagesData[Math.floor(Math.random() * imagesData.length)];
    document.querySelector('.image1').src = randomImage2.url;
    // document.querySelector('.image2').src= randomImage2.url;
    
    randomImage3 = imagesData[Math.floor(Math.random() * imagesData.length)];
    document.querySelector('.image2').src = randomImage3.url;

    console.log(randomImage2.meaning, randomImage3.meaning);
    //meaning should not be the same as the meaning of the second image
    if (randomImage2.meaning == randomImage3.meaning){
        // console.log("same meaning");
    //     // get another random image
        randomImage3 = imagesData[Math.floor(Math.random() * imagesData.length)];
        document.querySelector('.image2').src = randomImage3.url;
        // console.log(randomImage3.meaning);
    }
   
    let index1 = imagesData.findIndex(image => image._id === randomImage2._id);
    // console.log(index1, randomImage2.meaning);
    imagesData.splice(index1, 1);

    let index2 = imagesData.findIndex(image => image._id === randomImage3._id);
    // console.log(index2, randomImage3.meaning);
    imagesData.splice(index2, 1); // 1 = remove 1 element from the array

    // if the array is empty console.log("array is empty")
    if (imagesData.length == 0){
        console.log("array is empty");
        // go to results page after 6 seconds
        setTimeout(function(){
            window.location.href = "http://127.0.0.1:5173/results.html";
            postResults();
        }
        , 6000);

       
    }

    if (left > right){
        results.push(randomImage2.meaning);
        
    } else if (right > left){
        results.push(randomImage3.meaning);
    } else if (left == right){
        
        results.push(randomImage2.meaning, randomImage3.meaning);
    }
    console.log(results);
    //count how many times each meaning is repeated in the results array
        count = results.reduce((a, b) => ({ ...a,
        [b]: (a[b] || 0) + 1
    }), {})
    console.log(count);
    
}

function postResults(){

    const Talen = count["Talen"];
    const Exacte_wetenschappen = count["Exacte wetenschappen"];
    const Wiskunde = count["Wiskunde"];
    const Literatuur = count["Literatuur"];
    const Medische_activiteiten = count["Medische activiteiten"];
    const Social_dienstbetoon = count["Social dienstbetoon"];
    const Handel_zaken = count["Handel-zaken"];
    const Muziek = count["Muziek"];
    const Sport = count["Sport"];
    const Plastisch_opvoeding = count["Plastisch opvoeding"];
    const Techniek = count["Techniek"];
    const Sociale_wetenschappen = count["Sociale wetenschappen"];


    const results = {
        talen: Talen,
        exacteWetenschappen: Exacte_wetenschappen,
        wiskunde: Wiskunde,
        literatuur: Literatuur,
        medischeActiviteiten: Medische_activiteiten,
        socialeDienstbetoon: Social_dienstbetoon,
        handelZaken: Handel_zaken,
        muziek: Muziek,
        sport: Sport,
        plastischOpvoeding: Plastisch_opvoeding,
        techniek: Techniek,
        socialeWetenschappen: Sociale_wetenschappen


    };
    fetch('http://localhost:3000/api/v2/results', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(results)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        }
        )

}



    // .showPredictionPoints(true); /* shows a square every 100 milliseconds where current prediction is */
// .then(data => data.map(data => console.log(data.url)))
// .then(data => data.map(data => console.log(data.url))) // data.map is an array method that returns an array of the results of calling a function for every array element
    