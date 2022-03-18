const API="https://chatpy.janaleonova.repl.co";

let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');




async function ieladetChataZinas(){ 
        let datiNoServera = await fetch(API+'/lasit');
        let dati =await datiNoServera.json();
        let teksts="";
        for(let i=0;i<dati.length;i++){
                teksts=teksts+"<b>"+dati[i].vards+":</b> "+dati[i].zina+"<br />";
        }
        zinas.innerHTML = teksts;
}
 setInterval( ieladetChataZinas, 1000);

     
function sutitZinu(){
let vards = document.getElementById('vards').value;
        if(vards!=""){
                if(zina.value!=""){
                zinas.innerHTML = zinas.innerHTML+"<br /><b>"+
                                vards+":</b> "+zina.value;
                zina.value="";
                }else{
                alert("Ieraksti ziņu!");
                }
        }else{
                alert("Čats nepieļauj anonīmu ziņu iesniegšanu!");
        }
}
