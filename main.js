Webcam.set({
height:230,width:300,image_format:"jpeg",jpeg_quality:100

});
camera= document.getElementById("camera");

Webcam.attach(camera);

function capturecheese(){
Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML='<img id="Image_Displayer" src="'+data_uri+'">';
});
}
console.log("ml5 version",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2ORJ3l-eB/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model is loaded");
}
var prediction1="";
var prediction2="";

function  speak(){
    synth = window.speechSynthesis;
    speakdata1 = "The First Prediction is "+prediction1;
    speakdata2 = "The Second Prediction is "+prediction2;
    var utterthis= new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterthis);



}


 function emotion_predict(){
     var img= document.getElementById("Image_Displayer");
    classifier.classify(img,GotResult);
}

function GotResult(error,results){
    if(error){
        console.error(error);

    }
    else{
      console.log(results);
      document.getElementById("emotion_results").innerHTML= results[0].label;
      document.getElementById("emotion_results2").innerHTML= results[1].label;
      prediction1=results[0].label;
      prediction2=results[1].label;
      speak();
      
      if(results[0].label == "Happy" ){
       document.getElementById("emoji_results").innerHTML="&#128512;" ;
      }
      if(results[0].label == "Sad" ){
        document.getElementById("emoji_results").innerHTML="&#128532;" ;
       }

       if(results[0].label == "Angry" ){
        document.getElementById("emoji_results").innerHTML="&#128548;" ;
       }
       if(results[0].label == "Thumbs up" ){
        document.getElementById("emoji_results").innerHTML="&#128077;" ;
       }





       if(results[1].label == "Happy" ){
        document.getElementById("emoji_results2").innerHTML="&#128512;" ;
       }
       if(results[1].label == "Sad" ){
         document.getElementById("emoji_results2").innerHTML="&#128532;" ;
        }
 
        if(results[1].label == "Angry" ){
         document.getElementById("emoji_results2").innerHTML="&#128548;" ;
        }
        if(results[1].label == "Thumbs up" ){
         document.getElementById("emoji_results2").innerHTML="&#128077;" ;
        }
      
       
      

    }
}