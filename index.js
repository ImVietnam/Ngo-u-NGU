let submit = document.getElementById("submit");
submit.onclick = function(){
  let btn1 = document.getElementById("btn1").checked;
  let btn2 = document.getElementById("btn2").checked;
  let name = document.getElementById("in").value;
  let out = document.getElementById("out");
  if(btn1 == true){
    out = out.innerHTML = `Hé lô ông già ${name} nghèo khổ giữa trời đông cô đơn`
  }
  if(btn2 == true){
    out = out.innerHTML = `Hé lô bà già ${name} nghèo khổ giữa trời đông cô đơn`
  }
  if(btn1 == false && btn2 == false){
    window.alert("Bạn phải chọn 1 trong 2 lựa chọn")
  }
}
