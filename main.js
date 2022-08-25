/*https://teachablemachine.withgoogle.com/models/uzg0YZbSy/ */

function microP(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    soundClassifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelReady)
}
function modelReady(){
    soundClassifier.classify(gotResult)

    }
    function gotResult(error,result){
        if (error){
            console.log(error);
        }
        else{
            console.log(result);

            random_number_r = Math.floor(Math.random()* 255);
            random_number_g = Math.floor(Math.random()* 255);
            random_number_b = Math.floor(Math.random()* 255);

            document.getElementById("Sound").innerHTML = " I can hear " + result[0].label;
            document.getElementById("Accuracy").innerHTML = "Accuracy: " + (result[0].confidence *100).toFixed(2);

            document.getElementById("Sound").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
            document.getElementById("Accuracy").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        }
    }