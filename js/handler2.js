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


