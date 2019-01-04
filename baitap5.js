var n=253;
var d=0;
var z;
var a;



document.write(n);
document.write("<br />");
if (n<10){
  document.write("Khong dao duoc.");
}


for(z=0;z<n;z++){
  d=d*10;
  d=d+(n%10);
  n=Math.floor(n/10);
}
document.write(d);

