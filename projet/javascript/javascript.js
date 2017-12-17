

savedPageStyle = 'savedPageStyle' ; //permet d'éviter des fautes defrappes idiote sur savePageStyle

function init() {                            //init du body

   if (getCookie(savedPageStyle) == null  )
   { 
       document.getElementById('body').style.display = "block";
       document.getElementById("csslink").setAttribute("href","css/css_index.css"); // !!!!!!!!!!!!!!!!!! mettre adresse du css par defaut quand le page s'ouvre
       console.log("first time")

   }
   else {   
    console.log("second time")
    resetSavedPage();
   }
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! rajouter ça aux body <body onload="init()" id="body">
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! rajouter ça a chaque page <link rel="stylesheet" id="csslink"/>



function swapStyleSheet ()   //changement de css
{   console.log("swapstylesheet");
    var night = 'css/css_index.css'; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! adresse des deux pages css
    var day   = 'css/css_index2.css';// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    if (document.getElementById("csslink").getAttribute("href") === day)

    {  
         console.log(getCookie(savedPageStyle));
         eraseCookie(savedPageStyle);
        document.getElementById("csslink").setAttribute("href", night);
        setCookie(savedPageStyle, night, 1 );
         console.log(getCookie(savedPageStyle));
    }

    else if (document.getElementById("csslink").getAttribute("href") === night) {
         console.log(getCookie(savedPageStyle));
        eraseCookie(savedPageStyle);
       
        document.getElementById("csslink").setAttribute("href", day);
        setCookie(savedPageStyle, day, 1);
        console.log(getCookie(savedPageStyle));




    }
}


function resetSavedPage()   //remettre la page css save dans les cookies
{

    document.getElementById("csslink").setAttribute("href",
    getCookie(savedPageStyle));
    document.getElementById('body').style.display = "block";
}



function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    setCookie(name,"",-1);
}
function echo() {
    console.log("ma fonction echo");
}