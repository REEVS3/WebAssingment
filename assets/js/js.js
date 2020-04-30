fetch("assets/js/data.json")
.then(response => { return response.json() })
.then(data => {
    let songdiv = document.getElementsByClassName('song')
    let artistdiv = document.getElementsByClassName('artist')
    let plays = document.getElementsByClassName('barchart')

    for (let i =0; i < songdiv.length; i++)
    {
        songdiv[i].innerHTML= (data['TopSongs'][i]['Song'])
        artistdiv[i].innerHTML= (data['TopSongs'][i]['Artist'])
        plays[i].innerHTML= (data['TopSongs'][i]['Scrobles'])

    }
    

    let songlisten = document.getElementsByClassName('songlisten')
    let artistlisten = document.getElementsByClassName('artistlisten')
    let timelisten = document.getElementsByClassName('timelisten')
    let albumurl = document.getElementsByClassName('albumurl')



    for (let i =0; i < songlisten.length; i++)
    {
         songlisten[i].innerHTML= (data['RecentSongs'][i]['Song'])
        artistlisten[i].innerHTML= (data['RecentSongs'][i]['Artists'])
        timelisten[i].innerHTML= (data['RecentSongs'][i]['time']) 
        albumurl[i].src= (data['RecentSongs'][i]['albumurl'])
    
     
    }
    

    let gridartist = document.getElementsByClassName('gridartist')
    let gridplays = document.getElementsByClassName('gridplays')
    let gridalbum = document.getElementsByClassName('covers')
   
    for (let i =0; i < gridartist.length; i++)
    {
        gridalbum[i].src= (data['GridSongs'][i]['gridalbum'])
        gridartist[i].innerHTML= (data['GridSongs'][i]['gridartist'])
        gridplays[i].innerHTML= (data['GridSongs'][i]['gridlistens'])
  
    
       
    }
    
    console.log(gridalbum)

 



})




function heart1like() {
    let heart=document.getElementById("heart1")
   if (heart.style.filter == "brightness(100%)")
   {
   heart.style.filter = "brightness(50%)";
   }
   else 
   {
     heart.style.filter = "brightness(100%)";
   }
   }




function heart2like(){
    let heart=document.getElementById("heart2")
    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}

}



function heart3like(){
    let heart=document.getElementById("heart3")

    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}





function heart4like(){
    let heart=document.getElementById("heart4")

    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}



function heart5like(){
    let heart=document.getElementById("heart5")

    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}



function heart6like(){
    let heart=document.getElementById("heart6")

    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}





function heart7like(){
    let heart=document.getElementById("heart7")

    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}




function heart8like(){
    let heart=document.getElementById("heart8")

    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}




function heart9like(){
    let heart=document.getElementById("heart9")

    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}


function heart10like(){
    let heart=document.getElementById("heart10")

    if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}




function SubmitComment(){

  alert("Thank you for commenting!")

  let Username=document.getElementById("name").value
  let Usercomment=document.getElementById("usercomment").value
  let commentbox=document.getElementById("commentbox")
  let namediv = document.createElement('div')
  let commentdiv = document.createElement('div')
  let timediv = document.createElement('div')
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+' '+time; 
  
  
  timediv.innerHTML=dateTime;
  namediv.innerHTML=Username;
  commentdiv.innerHTML=Usercomment;

  
  
  console.log.Usercomment
  console.log.Username
  console.log.dateTime

  commentbox.append(namediv)
  commentbox.append(commentdiv)
  commentbox.append(timediv)

  

}


function SubmitComment2(){


  let Username=document.getElementById("userfname").value
  let Usercomment=document.getElementById("userlname").value
  alert("Thank you "+ Username+" "+Usercomment)


  document.getElementById("userfname").value="";
  document.getElementById("userlname").value="";
  document.getElementById("phnum").value="";



}
