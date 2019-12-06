window.onload=function(){
    document.querySelector("#submit").addEventListener("click",provera);

    // MENI
    let nizMenu=["Home","Jane","Events","Books","Author"];
    let nizLink=["#wrapper","#first","#second","#third","#fourth"];
    let meni = "";

    meni += `<ul id="menu1">`;
    for(let i=0;i<nizMenu.length;i++){
        meni+=`<li><a href="${nizLink[i]}" id="${nizMenu[i]}">${nizMenu[i]}</a></li>`;
    }
    meni += "</ul>";
    document.getElementById("menu").innerHTML=meni;

    // DROPDOWN LISTA - CITY
    let nizCity=["London", "Oxfordshire" , "Ashbourne" ,"Brixham" ,  "Edenbridge" , "Newhaven"];
    let nizValue=[1,2,3,4,5,6];

    let ispisGradova=`<option value="0" class="dropdown">Choose...</option>`;
    for(let i=0;i<nizCity.length;i++){
        ispisGradova+=`<option value="${nizValue[i]}" class="dropdown">${nizCity[i]}</option>`;
    }
    document.getElementById("city").innerHTML=ispisGradova;

    // DROPDOWN LISTA - BOOKS
    let nizBook =['Sense and Sensibility','Pride and Prejudice','Emma','Persuasion','Mansfield Park','Northanger Abbey'];
    let nizValueBook=[1,2,3,4,5,6];
    
    let ispisBook=`<option value="0" class="bookDropdown">Choose...</option>`;
    for(let i in nizBook){
        ispisBook+=`<option value="${nizValueBook[i]}" class="bookDropdown">${nizBook[i]}</option>`;
    }
    this.document.getElementById("faveBook").innerHTML=ispisBook;

    // FOOTER  LISTA LINKOVA
    let nizFaFa=[`<i class="fab fa-facebook-f"></i>`,`<i class="fab fa-instagram"></i>`,`<i class="fab fa-twitter"></i>`,`<i class="fas fa-sitemap"></i>`,`<i class="fas fa-rss"></i>`,`<i class="fas fa-book"></i>`];
    let hrefFaFA=[`https://www.facebook.com/tijana.nestinac`,`https://www.instagram.com/tijana.nestinac/?hl=sr`,`https://twitter.com/home`,`sitemap.xml`,`rss.xml`,'documentatuon'];

    let ispisFaFa = "";
    for(let i=0; i<nizFaFa.length;i++){
        ispisFaFa += `<a href="${hrefFaFA[i]}">${nizFaFa[i]}</a>`;
    }
    document.querySelectorAll(".footerContent")[1].innerHTML=ispisFaFa;

    // FOOTER MENI
    let nizFooterMeni=["Home","Jane","Events","Books","Author"];
    let nizHrefFooter=["#wrapper","#first","#second","#third","#fourth"];

    ispisFooter = `<ul id="fMenu">`;
    for(let i=0;i<nizFooterMeni.length;i++){
        ispisFooter+=`<li><a href="${nizHrefFooter[i]}">${nizFooterMeni[i]}</a></li>`;
    }
    ispisFooter += "</ul>";
    document.getElementById("footerMenu").innerHTML=ispisFooter;
    
}

function provera(){
    let fName = document.getElementById("name").value;
    let reName = /^[A-Z][a-z]{3,20}(\s[A-Z][a-z]{3,20})+$/;

    if(reName.test(fName)){
        document.getElementById("name").classList.remove("red");
    }
    else{
        document.getElementById("name").classList.add("red");
    }

    let email = document.getElementById("email").value;
    let reEmail = /^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4})+$/;

    if(reEmail.test(email)){
        document.getElementById("email").classList.remove("red");
    }
    else{
        document.getElementById("email").classList.add("red");
    }

    let mobPhone = document.getElementById("phone").value;
    let reMobPhone = /^06[01234569]\/\d{3}\-\d{3,4}$/;

    if(reMobPhone.test(mobPhone)){
        document.getElementById("phone").classList.remove("red");
    }
    else{       
        document.getElementById("phone").classList.add("red");
    }

    let ddLista = document.querySelector(".dropdown");
    if(ddLista.value == 0){
        document.querySelector(".ispis").textContent="You have to choose a city.";
        return;
    }
    
}

$(document).ready(function(){    
    // BIO - FADE IN / OUT
    $("#extra").addClass("hide");
    let brojac = 0;
    $("#clickMore").click(function(e){
        e.preventDefault();
        if(brojac%2==0){
            $('#extra').fadeIn();
            $(this).html("Hide");
        }
        else{
            $('#extra').fadeOut();
            $(this).html("Click to see more");
        }
        brojac++;
    })

    // BOOKS - Show/Hide 
    $(".hidden").addClass("hide");
    let brojac1 = 0;
    $(".readMore").click(function(event){
        event.preventDefault();
        if(brojac1%2==0){
            $(".hidden").show();
            $(this).html("Hide");
        }
        else{
            $(".hidden").hide();
            $(this).html("Show more...");    
        }
        brojac1++;
    })

    $('#news ul').innerfade({
        animationtype: 'slide',
        speed: 700,
        timeout: 2000,
        type: 'random'
    });
  
    $(".slika1 img").hover(function(){
        $(this).animate({
             opacity: "0.4"
             },"slow")
        }, function(){
            $(this).animate({
                opacity:"1"
                },"slow")
        }
    )

});