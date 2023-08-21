function myTime(){
  const time = new Date();
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();

  hh = ''+ Math.floor(hh / 10) + (hh % 10 )
  mm =  (''+mm).padStart(2,'0')
  ss =   ss<10?'0'+ss :ss



  let final_str = `${hh}:${mm}:${ss}`

  document.getElementById('clock').innerText = final_str
 
}
// myTime();


console.log('页面加载完成测试------------1');
window.onload=function(){
  console.log('页面加载完成测试------------2');
  setInterval(myTime,1000);
}
console.log('页面加载完成测试------------3');