document.getElementById("fileSelect").addEventListener("change", (e) => {  
  e.preventDefault();
  console.log("Cliked file select");
  const selectedFile = document.getElementById("fileSelect").files[0];

  const formData = new FormData();
  formData.append("complete", true);
  formData.append("audio", selectedFile);
  formData.append("idOnly", true);
  console.log("Sending files...");
  fetch("http://129.151.73.110/api/analyze", {
    method: "post",
    body: formData,
  }).then(id=>{
    console.log('response:',id)
    if(id.status == true){
    document.cookie=`cuicuiml_token=${id.uuid}`;
    location.href = "result.php"
    }
  })
})


