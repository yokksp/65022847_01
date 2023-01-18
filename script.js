let randNum = Math.floor(Math.random() * 101);
var count = 0; 

function GN() {
    const Guess_Number = document.getElementById('G_N').value;
    
    if (Guess_Number != randNum){
        if (Guess_Number < randNum) {
            alert("น้อยกว่า");
        } else if (Guess_Number > randNum) {
            alert("มากกว่า");
        }   
        count = count + 1; 

    } else if (Guess_Number == randNum) {
        alert("ถูกต้อง ค่าที่ถูกคือ " +randNum +": คุณทายไปทั้งหมด : " +count +" ครั้ง");
        count = 0;
    }
}