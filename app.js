function fare() {







function city(km){
    a= new Date();
    var dis = km;
    var far_dis= dis*5;
    result.innerHTML= " Date : " + a +"<br>"   +  " Distane From "+origin.value +" to " + desti.value + " = " + dis +"km"+ "<br>" +
  "  Fare is = " +  eval(far_dis*weight.value/4)+ "<br>" + " Sur_charge is = "+ eval(far_dis*weight.value/4)/4 + "<br>"+
   "Total = "+ Math.ceil(   eval(far_dis*weight.value/4+((far_dis*weight.value/2)/4))   )

}











    var origin = document.getElementById("origin")
    var desti = document.getElementById("desti")
    var weight = document.getElementById("weight-box")
    var date = document.getElementById("date-box")
    var result= document.getElementById("res")

    if (origin.value ==="APE") {
        if (desti.value ==="BWP") {
         city(50);
        }
        else if (desti.value === "MLT"){
         city(119);
        }
        else if (desti.value === "LHR"){
            city(400);
        }
        else if (desti.value === "DGK"){
            city(117);
        }
        else{
            result.innerHTML="Not Found"
        }
   }



     else if (origin.value === "BWP"){

        if (desti.value ==="APE") {
            city(50);
           }
           else if (desti.value === "MLT"){
            city(90);
           }
           else if (desti.value === "LHR"){
               city(350);
           }
           else if (desti.value === "DGK"){
               city(123);
           }
           else{
               result.innerHTML="Not Found"
           }



    }
    else if (origin.value === "MLT") {


        if (desti.value ==="APE") {
            city(119);
           }
           else if (desti.value === "BWP"){
            city(90);
           }
           else if (desti.value === "LHR"){
               city(313);
           }
           else if (desti.value === "DGK"){
               city(81);
           }
           else{
               result.innerHTML="Not Found"
           }



    }
    else if (origin.value === "LHR") {

        if (desti.value ==="APE") {
            city(400);
           }
           else if (desti.value === "BWP"){
            city(350);
           }
           else if (desti.value === "MLT"){
               city(313);
           }
           else if (desti.value === "DGK"){
               city(390);
           }
           else{
               result.innerHTML="Not Found"
           }

    }
    else if (origin.value === "DGK") {

        if (desti.value ==="APE") {
            city(117);
           }
           else if (desti.value === "BWP"){
            city(123);
           }
           else if (desti.value === "MLT"){
               city(81);
           }
           else if (desti.value === "LHR"){
               city(390);
           }
           else{
               result.innerHTML="Not Found"
           }



    }
    else {
        result.innerHTML="Not Found"

    }
}