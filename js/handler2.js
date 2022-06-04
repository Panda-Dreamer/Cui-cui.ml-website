document.getElementById("fileSelect").addEventListener("change", (e) => {  
  e.preventDefault();
  console.log("Cliked file select");
  const selectedFile = document.getElementById("fileSelect").files[0];

  const formData = new FormData();
  formData.append("complete", true);
  formData.append("audio", selectedFile);
  formData.append("idOnly", true);
  console.log("Sending files...");
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
})

function analyse() {
  setTimeout(analyse_suite, 2000);
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