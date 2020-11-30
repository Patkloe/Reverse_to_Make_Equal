function check(){
var tab1 = [1,2,3,5];
var tab2 = [4,3,2,1];
res = {};
size1 = tab1.length;
size2 = tab2.length;
 if(size1 !== size2){
   return false;
 }
 else{
  for(var i = 0; i < size1; i++){
      res[tab1[i]] = (res[tab1[i]] || 0)+ 1;
  } // for 1
  for(var j = 0; j < size2; j++){
   if(!res[tab2[j]]){
      return false;
   }
   res[tab2[j]]--;
  }// for 2
  return true;
 }// fin else
} // end function
check();
