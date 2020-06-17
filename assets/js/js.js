



fetch("/data")
.then(response => { return response.json() })
.then(data => {
  console.log(data)

  let createnew=(type,clazz,content)=>{
    let element = $(type);
    $.each(clazz,function (i, c) {
      element.addClass(c)
    });
    element.html(content).css('padding-right',"20px");
    return element;
  }
  


    


    $.each(data['GridSongs'],function(i,gs)  {
      let GridSongs = $("<div></div>")
      GridSongs.css('background-image','url(' + gs.gridalbum + ')');
      GridSongs.addClass("gridsongs")
      console.log(gs)

      let GridArtist = createnew("<div></div>",["gridartist"],gs.gridartist)
      let GridPlays = createnew("<div></div>",["gridplays"],gs.gridlistens)
    

      GridSongs.append(GridArtist,GridPlays)
      
      $('#gridcont').append(GridSongs)

    })



    


   $.each(data['RecentSongs'],function (i,rs) {
      

      let recentsongli = $("<li></li>")
      let aicon=$("<div></div>")

      aicon.css('background-image','url(' + rs.albumurl + ')');
      aicon.addClass("aicon")

      let song = createnew("<div></div>",["song"],rs.Song)

      let artist = createnew("<div></div>",["rartist"],rs.Artists)

      let time = createnew("<div></div>",["time"],rs.time)

      recentsongli.append(aicon,song,artist,time);
      $('#recenttracks').append(recentsongli)

    });


  

    $.each(data['TopSongs'],function(i,ts) {
      
       let topsongli = $("<li></li>")
       let heart = createnew("<div></div>",["far", "fa-heart","liked"],"")

       let number = createnew("<div></div>",["number"],i+1)

       let song = createnew("<div></div>",["song"],ts.Song)

       let artist = createnew("<div></div>",["artist"],ts.Artist)

       let barchart = createnew("<div></div>",["barchart"],ts.Scrobles)
       
       let maxwidth=data.TopSongs[0].Scrobles
       let curr =ts.Scrobles/maxwidth*100
       barchart.css('width',+(curr)+'%')
      
       topsongli.append(heart,number,song,artist,barchart);       
       $('#toptracks').append(topsongli)

     });
    
    
     $(document).on( "click", ".far", function() {
      $(this).toggleClass("fas");
     });
 
    
    })


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
