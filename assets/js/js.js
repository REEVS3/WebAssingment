



fetch("assets/js/data.json")
.then(response => { return response.json() })
.then(data => {


   let createnew=(type,clazz,content)=>{
      let element =document.createElement(type)
      clazz.forEach(c => {
        element.classList.add(c)
      });
      element.innerHTML=content
      element.style.paddingRight="20px"
      return element
    }

    


    data['GridSongs'].forEach(gs=> {
      

      let GridSongs = document.createElement("div")
      GridSongs.style.backgroundImage="url("+gs.gridalbum+")"
      GridSongs.classList.add("gridsongs")

      let GridArtist = createnew("div",["gridartist"],gs.gridartist)
      let GridPlays = createnew("div",["gridplays"],gs.gridlistens)
      

      GridSongs.append(GridArtist,GridPlays)

      document.querySelector("#gridcont").append(GridSongs)



    })




    data['RecentSongs'].forEach((rs,i) => {
      
      let recentsongli =document.createElement("li")
      
      let aicon=document.createElement("div")

      aicon.style.backgroundImage="url("+rs.albumurl+")"
      aicon.classList.add("aicon")

      let song = createnew("div",["song"],rs.Song)

      let artist = createnew("div",["rartist"],rs.Artists)

      let time = createnew("div",["time"],rs.time)
    
      
      recentsongli.append(aicon,song,artist,time);
      document.querySelector("#recenttracks").append(recentsongli)

    });





    

    data['TopSongs'].forEach((ts,i) => {
      
      let topsongli =document.createElement("li")
      let heart = createnew("div",["far", "fa-heart","liked"],"")

      let number = createnew("div",["number"],i+1)

      let song = createnew("div",["song"],ts.Song)

      let artist = createnew("div",["artist"],ts.Artist)

      let barchart = createnew("div",["barchart"],ts.Scrobles)
      let maxwidth=data.TopSongs[0].Scrobles
      let curr =ts.Scrobles/maxwidth*100
      barchart.style.width=curr+"%"
      
      topsongli.append(heart,number,song,artist,barchart);
      document.querySelector("#toptracks").append(topsongli)

    });
    

    document.addEventListener("click", (event) => {
      if(event.target.matches(".liked")){

        if(event.target.classList.contains("far"))
        {

          event.target.classList.remove("far")
          event.target.classList.add("fas")

        }
        else
        {
          event.target.classList.remove("fas")
          event.target.classList.add("far")

        }
        
      }
    });
    




  })



















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
