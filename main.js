
function clockUpdate(){
    const datenow = new Date();
    const houerEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');
    const hour = datenow.getHours();
    const minute = datenow.getMinutes();
    const second = datenow.getSeconds();
    


    const hourdeg = (hour /12)*360;
    const minutedeg = (minute /60)*360;
    const seconddeg = (second /60)*360;
    setTimeout(clockUpdate,1000);

    houerEl.style.transform = `rotate(${hourdeg}deg)`;
    secondEl.style.transform = `rotate(${seconddeg}deg)`;
    minuteEl.style.transform = `rotate(${minutedeg}deg)`;
    var ampm = hour >= 12 ? 'pm' : 'am';
    
    let hour2dig;
    let min2dig;
    let sec2dig;

    if (hour < 10) {
        hour2dig = '0'+hour;
    } else{
        hour2dig = hour;
    }
    if (minute < 10)  {
        min2dig = '0'+minute;
    }else{
        min2dig = minute;
    }
    
  

    const tit = document.title = (`${hour2dig}:${min2dig} ${ampm}`);
}

clockUpdate();
