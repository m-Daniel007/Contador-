var sec = 00
var min = 00
var hr =  00
var interval 

function zero(num){
    if(num <  10){
        return ('0'+ num)
     } else{
            return (num)
        }

}

function inicio(){
tempo()
interval = setInterval(tempo ,1000);

}


function pausa(){
  clearInterval(interval)

}


function parar(){
 clearInterval(interval)
    sec=00
    min=00
    hr=00
    document.getElementById('cont').innerHTML ='00:00:00'
}


function tempo(){
    document.getElementById('cont').innerHTML =zero(hr) + ':' + zero(min) + ':' + zero(sec)  
      sec ++
      if(sec==60){
        min++
        sec = 0;
       if(min==60){
            hr++
        }
      }

    

   

}