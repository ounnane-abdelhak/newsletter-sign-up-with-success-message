const mail=document.getElementById("inp");
 const err= document.getElementById("err");


mail.addEventListener('blur',e=>
{
  if(valid()==true){err.textContent='';}
})

document.getElementById("subscribe").addEventListener('click',event =>
{
  if(valid()==true)
  {
    jump()
  }
else
{
  err.textContent="please enter a valid email";
  mail.style.borderColor="red";
  mail.style.backgroundColor="rgb(255, 145, 145)";
}
})
document.getElementById("mail").addEventListener('click',event=>{  err.textContent="";
  mail.style.borderColor="black";
  mail.style.backgroundColor="white";})
function valid()
{
  return /^[^\s@]+@[^\s@]+\.[^\s@][^\.]+$/.test(mail.value);
}
function jump(){
  document.getElementById("container").style.display='none';
    document.getElementById("success").style.display='inline';
}
document.getElementById("dis").addEventListener('click',event =>{
  document.getElementById("container").style.display='flex';
    document.getElementById("success").style.display='none'; 
    mail.value='';
})