window.onload = function(){

  let hexes = [];
  let hexobjA = new HexObj(50,50,50,0);
  hexes.push(hexobjA);
  hexobjA.display();
  hexobjA.appendGradient();
  document.getElementById(0).style.left = "100px";
  document.getElementById(0).style.top = "100px";

  let hexobjB = new HexObj(50,50,50,1);
  hexes.push(hexobjB);

  hexobjB.display();
  hexobjB.appendGradient();


document.getElementById(1).style.left = "200px";
document.getElementById(1).style.top = "100px";

let hexobjC = new HexObj(50,50,50,2);
hexes.push(hexobjC);

hexobjC.display();
hexobjC.appendGradient();

document.getElementById(2).style.left = "100px";
document.getElementById(2).style.top = "200px";

let hexobjD = new HexObj(50,50,50,3);
hexes.push(hexobjD);

hexobjD.display();
hexobjD.appendGradient();

document.getElementById(3).style.title = {content: "hello"};
document.getElementById(3).style.left = "200px";
document.getElementById(3).style.top = "200px";

console.log(hexes.length);

for (i=0;i<hexes.length;i++){
document.getElementById(i).addEventListener('mousedown',function(){
  console.log("clicked");
})
document.getElementById(i).addEventListener('mouseover',function(){
  console.log("overs");
})
}

}
