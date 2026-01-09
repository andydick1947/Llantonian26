let buttons=[];
let sessions=[];
        const mnth= ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
let myResults=[["0","0","1","0"]];
 for (let p=0;p<=51;p++){
  sessions[p]=[[0],[0]];
  myResults[p]=["0","0","1","0"];
 }

   
for (let zz=0; zz<=51; zz++){

     zzz=zz*7;
        const d = new Date("Jan 5, 2026");
        d.setDate(d.getDate()+zzz);
       let month = d.getMonth();
      for (let i=0; i<=11; i++){ 
      if(month==i){ 
      mmm=mnth[i];
      mm=i+1;
      }
      }
       let day = d.getDate();
       dd=day.toString();
       let year = d.getFullYear();
       year = year.toString();
       yy = year.slice(2,4);
    
      shortDate=dd.concat(" ",mmm).concat(" ",yy);
      fileRef="Ranks ".concat(mm," ").concat(dd," ").concat(yy,".htm");
    myResults[zz][0]=shortDate;
    myResults[zz][1]=fileRef;
     sessions[zz]=[shortDate,1];
    myResults[zz][3]=mm;
   
    }
let wpm=[];
for (let aa=0;aa<=11;aa++){
   wpm[aa]=0;
for (let bb=0;bb<=51;bb++){
  if (myResults[bb][3]==(aa+1)){
    wpm[aa]=wpm[aa]+1;
  }}}
let runtot=[];
    for (let xx=1;xx<=12;xx++){
      runtot[0]=1;
     runtot[xx]=runtot[xx-1]+wpm[xx-1];
        }

for (let yy=0;yy<=11;yy++){
  buttons[yy]=[mnth[yy],runtot[yy],runtot[yy+1]-1];
}


/*sessions[0][1]=0;*/
for (let i=0; i<=51;i++){
  myResults[i][2]=sessions[i][1];
}

