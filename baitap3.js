var a;
var tien;
var n=210;

if(n<=50){
  tien=n*2000;
  tien=(tien/1000+","+"000");
  document.write(tien);
}
if(n>50 && n<=100){

  document.write(50*2000+(n-50)*1800);
}
if(n>100 && n<=200){
  document.write(50*2000+50*1800+(n-100)*1500);
}
if(n>200){
  document.write(50*2000+50*1800+100*1500+(n-200)*1400);
}
