function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/51nZg7yI1/', modelReady)

}



function modelReady(){
    classifier.classify(gotResults);
}

