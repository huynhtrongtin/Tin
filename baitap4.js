var a=2;
var b=-7;
var c=3;
var x;
var d;
var x1;
var x2;


if(a==0 || b==0) {
  document.write("Phuong trinh vo nghiem!");
} else if(c==0){
  x=-b/a;
  document.write(x);
} else{
    d=b*b-4*a*c;
    if(d==0){
      x=-b/2*a;
      document.write("phuong trinh co nghiem kep:");
      document.write(x);
    }
    if(d<0){
      document.write("Phuong trinh vo nghiem!");
    }
    if(d>0){
      d=Math.sqrt(d);
      x1=(-b-d)/(2*a);
      x2=(-b+d)/(2*a);
      document.write(" Nghiem 1: ");
      document.write(x1);
      document.write(" Nghiem 2: ");
      document.write(x2);
    }
  } 