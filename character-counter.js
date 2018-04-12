function countletters(input){
  var newinput=input.split(" ").join("");
  var countedletters={};


  for(var a=0; a<newinput.length; a++){
    if(countedletters[newinput[a]]===undefined){
      countedletters[newinput[a]]=1;
    } else{
      countedletters[newinput[a]]++;
    }
  }
  console.log(countedletters);

}
countletters("hello");