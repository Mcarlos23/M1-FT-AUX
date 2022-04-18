function timeConversion(time){
    // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
    // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
    //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
        let hours = time.slice(0, 2);
        let minutes = time.slice(3, 5);
        let seconds = time.slice(6, 8);
        let amPM = time.slice(8, 10);
        if (hours > 12 || minutes > 59 || seconds > 59 || time.length < 10) {
            return false;
        }
        if (amPM == "AM" && hours == "12") hours = "00";
        if (amPM == "PM" && hours != "12") hours =  parseInt(hours) + 12;

        return hours + time.slice(2, 8);
    }
    
      console.log(timeConversion("12:00:00AM")); 


    // module.exports = {
    //     timeConversion
    // }