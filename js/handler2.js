document.getElementById("fileSelect").addEventListener("change", (e) => {
  e.preventDefault();
  press(e,"fileSelect")
})

document.getElementById("fileSelectMic").addEventListener("change", (e) => {
  e.preventDefault();
  press(e,"fileSelectMic")
})

function press(e,id){  
  e.preventDefault();
  reset_button()
  console.log("Cliked file select");
  const selectedFile = document.getElementById(id).files[0];
  document.getElementById(id).value = null
  const formData = new FormData();
  formData.append("complete", true);
  formData.append("audio", selectedFile);
  formData.append("idOnly", true);
  console.log("Sending files...");
  analyse()
  fetch("https://cui-cui.ml/api/analyze", {
    method: "post",
    body: formData,
  }).then(res=>{
    res.json().then((data) => {
          console.log(data)
          if(data.status == true){
          document.cookie=`cuicuiml_token=${data.uuid}`;
          location.href = "result.php"
          }
    })
  })
  .catch(err=>{
    console.log("An error occured while uploading")
    upload_error()
  })
}

function analyse() {
  setTimeout(analyse_suite, 200);
}

function error_timeout(){
  setTimeout(upload_error, 200);
}

function reload() {
  location.href = 'index.php'
}
function analyse_suite() {
  if(document.querySelector(".btn_upload") != null){
  document.querySelector(".txt_upload").innerText ="Analyse en cours...";
  document.querySelector(".btn_upload").className = "btn_already_uploaded";
  document.querySelector(".img_btn_upload").style.display="none";
  document.querySelector(".img_analyse").style.display="block";
  var img=document.querySelector('.img_analyse');
  var angle=0;
  setInterval(function(){
      img.style.transform="rotateZ("+ angle++ +"deg)";
  }, 45);
  }
}

function upload_error(){
  if(document.querySelector(".btn_upload") != null){
  document.querySelector(".txt_upload").innerText ="Erreur de l'upload";
  document.querySelector(".btn_upload").className = "btn_error";
  document.querySelector(".img_btn_upload").style.display="none";
  document.querySelector(".img_analyse").style.display="block";
  }
  if(document.querySelector(".btn_already_uploaded") != null){
  document.querySelector(".txt_upload").innerText ="Erreur de l'upload";
  document.querySelector(".img_btn_upload").style.display="none";
  document.querySelector(".btn_already_uploaded").className = "btn_error";
  document.querySelector(".img_analyse").style.display="block";
  }
}

function reset_button(){
  if(document.querySelector(".btn_error") != null){
  document.querySelector(".txt_upload").innerText ="Analyse en cours...";
  document.querySelector(".btn_error").className = "btn_upload";
  document.querySelector(".img_btn_upload").style.display="none";
  document.querySelector(".img_analyse").style.display="block";
  }
}
function erreur(){
  alert("L'enregistrement sonore n'est pas encore disponible")
}

function analyse_suite() {
  document.querySelector(".txt_upload").innerText ="Analyse en cours...";
  document.querySelector(".btn_upload").className = "btn_already_uploaded";
  document.querySelector(".img_btn_upload").style.display="none";
  document.querySelector(".img_analyse").style.display="block";
}

function erreur(){
  alert("L'enregistrement sonore n'est pas encore disponible")
}