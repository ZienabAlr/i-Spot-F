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
            left ++; 

        } else if (data.x > 896){

            right ++;
        }

    }

    
    if (seconds == 147){ 
        left = 0;
        right = 0;
        seconds = 0;
        console.log("Time is up"); 
       
    }
    results();

}).begin()

function getImages(){
    fetch('http://localhost:3000/api/v1/test')
    .then(res => res.json())
    .then((data) =>{
        
        images.push(data);

        setInterval(showImage, 6000);
        clearInterval(showImage);

    }); 

}
getImages();


function showImage(){      

    imagesData = images[0];
        
    randomImage2 = imagesData[Math.floor(Math.random() * imagesData.length)];
    document.querySelector('.image1').src = randomImage2.url;
    
    randomImage3 = imagesData[Math.floor(Math.random() * imagesData.length)];
    document.querySelector('.image2').src = randomImage3.url;

    if (randomImage2.meaning == randomImage3.meaning){
        randomImage3 = imagesData[Math.floor(Math.random() * imagesData.length)];
        document.querySelector('.image2').src = randomImage3.url;
    }

    spliceImage();
    compareResults();
    countResults();
    endTest();
}

// function to remove shown images from array
function spliceImage(){
    let index1 = imagesData.findIndex(image => image._id === randomImage2._id);
    imagesData.splice(index1, 1);

    let index2 = imagesData.findIndex(image => image._id === randomImage3._id);
    imagesData.splice(index2, 1);
}

// function to compare results
function compareResults(){
    if (left > right){
        results.push(randomImage2.meaning);
        console.log("left");
        
    } else if (right > left){
        results.push(randomImage3.meaning);
        console.log("right");
    } else if (left == right){
        
        results.push(randomImage2.meaning, randomImage3.meaning);
        console.log("both");
    }; 
}; 

// function to count results of each category
function countResults(){
    console.log(results);
    count = results.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
}), {})
console.log(count);
}; 

// function to end test
function endTest(){
    console.log("end");
    if (imagesData.length == 0){
        console.log("array is empty");
        setTimeout(function(){
            window.location.href = "http://127.0.0.1:5173/results.html";
            postResults();
        }
        , 6000);

       
    }
}
    
// function to post results to database
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
    const Administratie = count["Administratie"];
    const OvertuigenEnBesturen = count["Overtuigen en besturen"];



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
        socialeWetenschappen: Sociale_wetenschappen, 
        administratie: Administratie,
        overtuigenEnBesturen: OvertuigenEnBesturen


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
            console.log("this is results",data);
        }
        )

}



