
let headerIcon = document.querySelectorAll('.headerIcon');
let brush = document.getElementById('brush')
let moon = document.getElementById('moon');
let qr = document.getElementById('qr');
let container = document.querySelector('.container');
let containerId = document.querySelectorAll('#containerId');
let menu = document.querySelector('.menu');
let profileSection = document.querySelector('.profileSection');
let containerOpsi = document.querySelector('.containerOpsi');
let blurLayer = document.querySelector('.blurLayer');
let myAlert = document.querySelector('.containerAlert');
let myAlertText = document.querySelector('.textAlert');
let btnAlert = document.querySelector('.btn-alert');
let infoAlert = document.querySelector('.infoAlert');

let deskripsiKoleksi = document.querySelectorAll('.deskripsi-koleksi');

let containerMail = document.querySelector('.containerMail');
let boxEmail = document.querySelector('.boxEmail');
let judulEmail = document.querySelector('.judulEmail');
let emailValue = document.querySelector('.inputEmail');
let footerEmail = document.querySelector('.footerEmail');

let arrowMenu = document.getElementById('arrow-menu');
let headerUser = document.querySelector('.headerUser');
let header = document.querySelector('header');
let profileImgBox = document.querySelector('.profileImgBox');
let userInfo = document.querySelector('.userInfo');

let cards = document.querySelector('.cards');
let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');

let descriptionSatu = document.getElementById('descriptionSatu');
let descriptionDua = document.getElementById('descriptionDua');
let descriptionTiga = document.getElementById('descriptionTiga');

let descSatu = document.getElementById('desc1');
let descDua = document.getElementById('desc2');
let descTiga = document.getElementById('desc3');
let descEmpat = document.getElementById('desc4');

descriptionSatu.innerHTML = "Hi👋,My name is Farid Fathoni N. I am the developer of this website and I am a vocational high school student who is very enthusiastic about learning and has a special interest in making websites. Although sometimes I feel confused cause I am self-taught and don't hv a mentor to guide me.";

descriptionDua.innerHTML = "I have taught myself various techniques and programming languages such as HTML, CSS, and JavaScript to build attractive and interactive websites for users.";

descriptionTiga.innerHTML = "and lastly this website was created only to learn how to develop websites using the basic programming language and logic that I currently understand.";

descSatu.innerHTML = "I like to play games when my head can't think anymore about coding";

descDua.innerHTML = "I like to listen to music every day while I'm studying or not, if I'm not listening to it. I feel something is missing in my day";

descTiga.innerHTML = "I really like coding. because when I make something from 0 to it can be something interesting. that is a very proud thing for me";

descEmpat.innerHTML = "I like sleep because it is a place to forget all the things that make me tired";

descriptionSatu.onclick = function() {
 console.log('cards di klik')
 
 if(menu.classList.contains('menuVh')) {
  menu.classList.remove('menuVh');
 } else {
  menu.classList.add('menuVh')
 }
 
 cards.classList.toggle('active');
 setTimeout(() => {
  
  text1.style.transition = ".050s";
  text1.classList.toggle('active');
  
 setTimeout(() => {
  
  text2.style.transition = ".050s";
  text2.classList.toggle('active');
  
  }, 400);
 }, 500);
}

function perbesarGambar() {
    var blurLayer = document.querySelector('.blurLayer');
    blurLayer.classList.toggle('blurLayerActive');
    
  if (profileImgBox.classList.contains('profileImgBesar')) {
   
    profileImgBox.classList.remove('profileImgBesar');
    
  } else {
    profileImgBox.classList.add('profileImgBesar');
  }
}

arrowMenu.onclick = function() {
 console.log('arrow di klick');
 menu.classList.toggle('active');
 arrowMenu.classList.toggle('active');
 
 header.classList.toggle('active');
 container.classList.toggle('active');
 
 /* if else validation if arrowMenu */
 if(containerMail.classList.contains('containerMailActive')) {
  containerMail.classList.remove('containerMailActive');
  boxEmail.classList.remove('boxEmailActive');
  }
 if (profileImgBox.classList.contains('profileImgBesar')) {
   
    profileImgBox.classList.remove('profileImgBesar');
    blurLayer.classList.remove('blurLayerActive');
  }
 if(cards.classList.contains('active')) {
   cards.classList.toggle('active');
   setTimeout(() => {
   
   text1.style.transition = ".050s";
   text1.classList.toggle('active');
   
   setTimeout(() => {
   
   text2.style.transition = ".050s";
   text2.classList.toggle('active');
  
   }, 400);
  }, 500);
 }
 
 if(containerOpsi.classList.contains('opsiActive')) {
  containerOpsi.classList.remove('opsiActive');
 }
}/* ARROW MENU END FUNCTION */

arrowMenu.addEventListener('click', function() {
 if(localStorage.getItem("theme") === "basic") {
 arrowMenu.classList.add('clickEffect');
 setTimeout(function() {
   arrowMenu.classList.remove('clickEffect');
  }, 300);
 } else {
 arrowMenu.classList.add('clickEffectBlue');
 setTimeout(function() {
   arrowMenu.classList.remove('clickEffectBlue');
  }, 300);
 }
});

brush.onclick = () => {
 brush.classList.add('clickEffect');
 setTimeout(function() {
 brush.classList.remove('clickEffect');
 }, 300);
}

qr.onclick = () => {
 qr.classList.add('clickEffect');
 setTimeout(function() {
 qr.classList.remove('clickEffect');
 }, 300);
}

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset;
  var batasHeight = 15;

  if (scrollTop > batasHeight) {
    profileImgBox.classList.add('profileEffect');
    userInfo.classList.add('userEffect');
    profileImgBox.classList.remove('profileImgBesar');
    blurLayer.classList.remove('blurLayerActive');
    
   if (containerOpsi.classList.contains('opsiActive')) {
     containerOpsi.classList.remove('opsiActive');
     }
    
  } else {
   profileImgBox.classList.remove('profileEffect');
   userInfo.classList.remove('userEffect');
  }
});


let favoriteIcons = document.querySelectorAll('.favorite-items');
containerFav = document.querySelector('.container-favorite');
let activeFav = null;
let activeDesc = null;
let clickCount = 0;

favoriteIcons.forEach((favoriteIcon) => {
  favoriteIcon.addEventListener('click', () => {
    const clickedDesc = favoriteIcon.querySelector('.descFav');

    if (activeDesc === clickedDesc) {
     clickCount++
      clickedDesc.classList.toggle('active');
      activeFav.classList.remove('active');
      containerFav.classList.remove('active');
      
      if(clickCount >= 2) {
       containerFav.classList.add('active');
      
       clickedDesc.classList.add('active');
       favoriteIcon.querySelector('.rowFav').classList.add('active');
       
       activeFav = favoriteIcon.querySelector('.rowFav');
       
       activeDesc = clickedDesc;
       
        if(clickCount >= 2 && activeDesc === clickedDesc) {
         clickedDesc.classList.remove('active');
         activeFav.classList.remove('active');
         containerFav.classList.remove('active');
         }
       }
     } else {
       if (activeFav) {
        activeFav.classList.remove('active');
        activeDesc.classList.remove('active');
      }
     containerFav.classList.add('active');
     
     clickedDesc.classList.add('active');
     favoriteIcon.querySelector('.rowFav').classList.add('active');
     
     activeFav = favoriteIcon.querySelector('.rowFav');
     
     activeDesc = clickedDesc;
    }
  });
});

function openSendEmail() {
  boxEmail.style.transitionDelay = "0s";
 if(containerMail.classList.contains('containerMailActive')) {
  containerMail.classList.remove('containerMailActive');
  boxEmail.classList.remove('boxEmailActive');
  
  if(localStorage.getItem("theme") === "basic") {
   console.log("masuk ke basicc");
   mail.classList.add('clickEffect');
  setTimeout(function() {
    mail.classList.remove('clickEffect');
   }, 300);
  } else {
   mail.classList.add('clickEffectBlue');
   setTimeout(function() {
    console.log("masuk ke bluee")
     mail.classList.remove('clickEffectBlue');
    }, 300);
   }
  
 } else {
  boxEmail.style.transitionDelay = ".7s";
  boxEmail.classList.add('boxEmailActive')
  containerMail.classList.add('containerMailActive')
   
   if(localStorage.getItem("theme") === "basic") {
    mail.classList.add('clickEffect');
   setTimeout(function() {
     mail.classList.remove('clickEffect');
    }, 300);
   } else {
    mail.classList.add('clickEffectBlue');
   setTimeout(function() {
    console.log("masuk ke bluee")
    mail.classList.remove('clickEffectBlue');
   }, 300);
  }
 }
}

function sendEmail() {
 const listKasar = kataKasar;
 inputMail = emailValue.innerHTML.toLowerCase();
 mailTitle = judulEmail.innerHTML.toLowerCase();
 
if(listKasar.some((kata) => inputMail.includes(kata)) || listKasar.some((kata) => mailTitle.includes(kata))) {
 myAlert.style.display = "block";
 blurLayer.style.display = "block";
 infoAlert.innerHTML = "Perhatian !";
 myAlertText.innerHTML = "maaf. tolong berikan kata kata yang sopan";
 btnAlert.addEventListener('click', closeAlert);
  
 emailValue.style.color = "red";
 judulEmail.style.color = "red";
 judulEmail.style.color = "#f3c8c8";
 emailValue.style.color = "#f3c8c8";
 footerEmail.innerHTML = "Tolong berikan kata kata yang sopan";
 }// validasi berkata kata kasar
 else { // validasi tidak berkata kasar
if(emailValue.innerHTML.length >= 7) {
 if(judulEmail.innerHTML.length >= 4 ) {
  if(init >= 1) {
   
  var from = `${userData[0]}`;
  var serviceID = `service_uuzer5a`;
  var email = 'faridfathonin@gmail.com';
  var subject = `${judulEmail.innerHTML}`;
  var body = `${emailValue.innerHTML}`;
  var chatValue = fullData;
  
  var templateParams = {
    nama: from,
    to_email: email,
    subjects: subject,
    message: body,
    userInput: chatValue
  };
  console.log(templateParams)
  
  emailjs.send("service_uuzer5a","template_wb424q8", templateParams)
   
      setTimeout(() => {
       emailValue.innerHTML = "";
       judulEmail.innerHTML = "";
      if(init === 1) {
        infoAlert.style.color = "white";
        myAlert.style.display = "block";
        blurLayer.style.display = "block";
        infoAlert.innerHTML = "Info !";
        myAlertText.innerHTML = `Terimakasih ${userData[0]} sudah mengirimkan email kepada developer 🥳🎉`;
       footerEmail.innerHTML = `Terimakasih kritik dan saranya.`;
        btnAlert.addEventListener('click', closeAlert);
        
        emailValue.style.color = "white";
        judulEmail.style.color = "white";
         }
        }, 500);
       } else {
        myAlert.style.display = "block";
        blurLayer.style.display = "block";
        infoAlert.innerHTML = "Info !";
        myAlertText.innerHTML = "Tolong beritahu nama kamu terlebih dahulu sebelum mengirimkan email :)";
        btnAlert.addEventListener('click', closeAlert);
       }
        } else {
        myAlert.style.display = "block";
        blurLayer.style.display = "block";
        infoAlert.innerHTML = "Info !";
        myAlertText.innerHTML = "Tolong beritahu nama kamu terlebih dahulu sebelum mengirimkan email :)";
        btnAlert.addEventListener('click', closeAlert);
       }
      } else {
       myAlert.style.display = "block";
       blurLayer.style.display = "block";
       infoAlert.innerHTML = "Info !";
       myAlertText.innerHTML = "Tolong isi terlebih dahulu !";
       btnAlert.addEventListener('click', closeAlert);
    }
  }
}

ellips.onclick = function() {
 ellips.classList.add('clickEffect');
 
 setTimeout(function() {
  ellips.classList.remove('clickEffect');
 }, 300);
 
 containerOpsi.classList.add('opsiActive')
 containerOpsi.style.transitionDelay = ".5s";
 
 if(localStorage.getItem("theme") === "basic") {
    ellips.classList.add('clickEffect');
   setTimeout(function() {
     ellips.classList.remove('clickEffect');
    }, 300);
   } else {
    ellips.classList.add('clickEffectBlue');
   setTimeout(function() {
    console.log("masuk ke bluee")
    ellips.classList.remove('clickEffectBlue');
   }, 300);
  }
 
 var boxOpsi = document.querySelectorAll('.boxOpsi');

 boxOpsi.forEach(function(box) {
  box.addEventListener('click', function(event) {
   event.stopPropagation();
   
    btnAlert.addEventListener('click', closeAlert);
   
   if(localStorage.getItem("theme") === "basic") {
    box.classList.add('opsiHover');
    setTimeout(() => {
     box.classList.remove('opsiHover')
    }, 300);
   } else {
    infoAlert.style.color = "white";
    box.classList.add('opsiHoverBlue');
    setTimeout(() => {
     box.classList.remove('opsiHoverBlue')
    }, 300);
   }
  });
 });
 
 containerOpsi.onclick = function() {
  containerOpsi.classList.remove('opsiActive')
  containerOpsi.style.transitionDelay = "0s";
  }
}

deskripsiKoleksi.forEach(function(cardsKoleksi) {
 console.log("deskripsi koleksi di klik")
 
 cardsKoleksi.addEventListener('click', function() {
  
  if(cardsKoleksi.classList.contains('deskripsiKoleksiActive')) {
   cardsKoleksi.classList.remove('deskripsiKoleksiActive');
  } else {
   cardsKoleksi.classList.add('deskripsiKoleksiActive');
  }
 });
});

function opsi() {
 setTimeout(() => {
 infoAlert.innerHTML = "INFO";
 infoAlert.style.color = "white";
 myAlert.style.display = "block";
 blurLayer.style.display = "block";
 myAlertText.innerHTML = "fitur akan segera hadir.";
 }, 600);
}

function closeAlert() {
 judulEmail.innerHTML = "";
 emailValue.innerHTML = "";
 myAlert.style.display = "none";
 blurLayer.style.display = "none";
}

function toxicAlert() {
 document.open();
 document.close();
 window.location.reload();
}
/*service_uuzer5a*/