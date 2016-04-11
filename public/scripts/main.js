var imageList = [];
var captionList = [];
for(var i = 0; i< bloccitProject.pics.length; i++){imageList.push(bloccitProject.pics[i]); captionList.push(bloccitProject.descriptions[i]); };
for(var i = 0; i< blocmetricsProject.pics.length; i++){imageList.push(blocmetricsProject.pics[i]); captionList.push(blocmetricsProject.descriptions[i]); };
    
var currentImage = 0;
var currentCaption = 0;

var roterAttenCatcher = $("#RoterAttenCatcher"); //must be in bottom of html to read element selection
var caption = $("#caption");
var galerryDiv = $("#siteGalerry");
    
var roterAttenTemplate = function() {
    return "<img src='"+imageList[currentImage]+"' class='vhcenters col-12' style='height:100%; position:absolute; opacity:0.9;' > ";
        }
var objectiveTemplate = function(){
    return "<p class=' removempb seebox' style='margin:0px;  font-size:4.5vmax; position: absolute; top:50%;transform: translate(0, -50%); '>"+resume.objective+"</p>";
        }
var captionTemplate = function(){return "<b>"+captionList[currentCaption]+"</b>"}


var roterbuttonFoward = function(){
        if(currentImage <= imageList.length-2)
        {currentImage++; currentCaption++; roterAttenCatcher.html(roterAttenTemplate()); caption.html(captionTemplate) }
        else{currentImage = 0; currentCaption = 0; roterAttenCatcher.html(roterAttenTemplate()); caption.html(captionTemplate); } };

var roterbuttonBack = function(){
        if(!currentImage == 0) {
            currentImage--; currentCaption--; roterAttenCatcher.html(roterAttenTemplate()); caption.html(captionTemplate);
        }
        else{currentImage = imageList.length-1;
             currentCaption = captionList.length-1;
             roterAttenCatcher.html(roterAttenTemplate()); caption.html(captionTemplate); 
            } 
};
        
for(var i = 0; i< imageList.length; i++){
    
    var galerryTemplate = function(){ 
            
return "<div class='seebox col-6 height vhcenterp'  >"
   + "<div class='col-12 vhcenterp'  style='height:100%;'>"
    +"<div class='seebox col-11 vhcenters' "
    +  "style='height:70%; background-color:grey; position:absolute; opacity:0.8; z-index:2; display:none;' id='galerryCaptionBox'>"
    + "<p class='vhcenters removempb'"
    +" style='color:white; font-size:2em; text-align:center;'>"
    +captionList[i]
    +"</p></div></div>"
    +"<div class='seebox col-10 col-p-10 vhcenters' id='galerryCaption' style='height:80%; z-index:1;'>"
    +"<img src='"+imageList[i]+"' class=' col-12 '  style='height:100%; '></img>"
    +"</div> </div> "           

                }
    

    galerryDiv.append(galerryTemplate);

    }
    


var qualitiesTemplate = function(){ 
        return "<div class='col-12 seebox  vhcenterp' style='font-size:2.2em; height:700px; background-image:url("+"/assets/images/display/maxre.jpg"
        +");'><p class='vhcenters col-10' style='background-color:white; opacity:0.8;  font-size:4.5vmax; text-align:center; margin:5px; z-index:2;'>"
        +resume.qualities
        +"</p></div>";
   
                                      }









var experienceTemplate = function(){
    
    return  "<div class='col-12 seebox  vhcenterp' style='height:600px; background-image:url("+"/assets/images/display/notespic.jpg"
        +");'><p class='vhcenters col-10' style='background-color:white; opacity:0.8;  font-size:4.5vmax; text-align:center; margin:5px; z-index:2;'>"
        +resume.experience
        +"</p></div>";
  
    
}

var contact = {
    
    contactdisplay:"<h3 class='removempb seebox vhcenters'  style='font-size:2em;'>contact</h3>",
    contacthover:"<h3 class='removempb seebox vhcenters'  style='font-size:2em;'>Migs@miggymigs.com</h3>"
}
    
$(document).ready(function(){
    $("#ParentAttenCatcher").hover(
                                    function(){$("*#arrow, #caption").show()},
                                    /*callback->*/function(){$("*#arrow, #caption").hide()}
                                  )
    $("*#galerryCaption, *#galerryCaptionBox").hover(
                                function(){$(this).parent().find("#galerryCaptionBox").show()}
                                ,function(){$(this).parent().find("#galerryCaptionBox").hide()}
                            );
    
    $("#contactdiv, #contactdiv h3").hover(
                            function(){  $("#contactdiv").html(contact.contacthover); console.log("hover")}
                            ,function(){  $("#contactdiv").html(contact.contactdisplay); console.log("display")}
                            );
    
    $("#objective").html(objectiveTemplate);
    
    //qualitys
    $(qualitiesTemplate()).insertAfter($("#siteGalerry").children()[1]);
    
    $(experienceTemplate()).insertAfter($("#siteGalerry").children()[4]);
    
});