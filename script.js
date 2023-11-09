
function Hitung(){
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;

    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("hasil-bmi").innerHTML = result;
        if(result < 18.5){
            document.getElementById("status-bmi").innerHTML = "Kamu underweight nih :( Makan yang banyak yuk";
        }
        else if(result < 25){
            document.getElementById("status-bmi").innerHTML = "Body goals banget nih, Healthy! Pertahankan ya :)";
        }
        else if(result < 30){
            document.getElementById("status-bmi").innerHTML = "Kamu overweight. Badan gemoy kamu butuh diet nih, semangat ya !";
        }
        else{
            document.getElementById("status-bmi").innerHTML = "Yah kamu obesitas :( Semangat nurunin BB yahh";
        }
    }
}
