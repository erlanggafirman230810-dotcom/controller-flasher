let speedTimer = null;
let genitTimer = null;
let modeBusy = false;


function goPage(path){
  window.location.assign(path);
}


function toggleGenitBox(m){
  let box = document.getElementById('genitBox');

  if(box){
    box.style.display =
    (m === 'genit') ? 'block' : 'none';
  }
}



async function setMode(m){

  if(modeBusy) return;

  modeBusy = true;


  document
  .querySelectorAll('.modeBtn')
  .forEach(b=>{
    b.classList.remove('active');
  });



  const btn =
  document.getElementById('btn_'+m);



  if(btn){

    btn.classList.add('active');


    let modeText =
    document.getElementById('modeText');


    if(modeText){
      modeText.innerText =
      btn.innerText.trim();
    }

  }


  toggleGenitBox(m);



  try{

    await sendCommand(
      "MODE:" + m
    );


  }catch(error){

    console.log(
      "MODE ERROR:",
      error
    );

  }



  modeBusy = false;

}



function setSpeed(v){


  let speedText =
  document.getElementById('speedText');


  if(speedText){

    speedText.innerText =
    v + '%';

  }



  if(speedTimer){

    clearTimeout(speedTimer);

  }



  speedTimer =
  setTimeout(()=>{


    sendCommand(
      "SPEED:" + v
    );


  },70);


}




function setGenitBlink(v){


  let genitText =
  document.getElementById('genitBlinkText');



  if(genitText){

    genitText.innerText =
    v + 'x';

  }



  if(genitTimer){

    clearTimeout(genitTimer);

  }



  genitTimer =
  setTimeout(()=>{


    sendCommand(
      "GENIT:" + v
    );


  },70);


}