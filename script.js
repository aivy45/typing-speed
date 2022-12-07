// tasks 
// 1. when user click start button then only active the textarea else disabled and vice versa . 
// 2. Every time a new set of lines on top. Whenever a start button is ScriptProcessorNode. Not the done one.
// 3. get the time and change the button text to done  
// 4. get the end time when user clicked on Done GamepadButton. find the total time taken 
// 5. find the total words on the setof Words. 
// 6. find the speed of the user and show it on top when user clicked on Done 
// 7. then call the compare words fun and find how many of the words aare matching and how many not. display the result ontop with speed 


const setOfWords = ["Mr. Cole lived in a rather imposing white stone house within sight of the Park. The entrance was on the level with the sidewalk. Bay-trees in green tubs flanked the door which was guarded by a bronze grilling. The three boys were admitted by a uniformed butler and conducted into a tiny white-and-gold", 

"Your choices apply only to this site. You may manage specific privacy settings or accept all settings to allow personalized advertising by clicking one of the buttons below. You may adjust your settings at any time in the future by clicking the link at the bottom of pages on this site or by visiting the privacy policy page",

"Sainik School Nagrota, Jammu & Kashmir is a residential Public School inaugurated on 22 Aug 1970 by the then Defence Minister Late Sh Jagjivan Ram. The Founder Principal was Cdr NN Seth. The school campus is located 18 kms away from the nearest railway station Jammu Tawi and linked with Jammu-Srinagar Highway",


"The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet with a diameter about one-quarter that of Earth. The Moon is a planetary-mass object with a differentiated rocky body, making it a satellite planet under the geophysical definitions of the term and larger than all known dwarf planets of the Solar System. It lacks any significant atmosphere, hydrosphere, or magnetic field."



];

const msg = document.querySelector("#msg");
const typeWords = document.querySelector('#mywords');
const btn = document.querySelector('#btn');
let startTime, endTime; 
typeWords.disabled = true;

 const playGame = ()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    typeWords.value=""; 
    typeWords.focus(); // cursor pointing towards typeWords
    let date = new Date();
    startTime = date.getTime();
    btn.innerText="Done";
}

const endPlay=()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount/totalTime)*60);

    let finalMsg = "You typed total at "+speed+" words per minutes! ";
    
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText=finalMsg;


}

const compareWords = (str1, str2)=>{
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt=0; 

   words1.forEach(function(item, index){       // current_value and index
       if(item==words2[index])
       {
        cnt++;
       }
   })

   let errorWords = (words1.length - cnt);
   return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");




}

const wordCounter =(str)=>{
  let response = str.split(" ").length;
  return response;
}


btn.addEventListener('click', function(){
    if(this.innerText == "Start"){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText=="Done")
    {
        typeWords.disabled = true;
        btn.innerText="Start";
        endPlay();
    }
})













