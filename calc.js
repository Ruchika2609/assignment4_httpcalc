

//http://http://localhost:8080/calc/add/?v1=9&v2=8
module.exports=calc={};
calc.add=function (a,b){
        if(a !==null && b!==null){
          return parseFloat(a)+parseFloat(b);
        }else{
                 throw "wrong input";
        }
}

calc.sub=function (a,b){
      if(a !==null && b!==null){
          return parseFloat(a)-parseFloat(b);
        }else{
                 throw "wrong input";
        }
}

calc.mult=function (a,b){
      if(a !==null && b!==null){
          return parseFloat(a)*parseFloat(b);
        }else{
                 throw "wrong input";
        }
}

calc.mod=function (a,b){
      if(a !==null && b!==null){
          return parseFloat(a)%parseFloat(b);
        }else{
                 throw "wrong input";
        }
}

calc.div=function (a,b){
      if(a !==null && b!==null){
          return parseFloat(parseFloat(a)/parseFloat(b));
        }else{
                 throw "wrong input";
        }
}
