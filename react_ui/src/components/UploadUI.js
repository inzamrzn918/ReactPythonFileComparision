import { Container } from "react-bootstrap"
import { useEffect } from "react"

const UploadUI = ({formId,formName, label,msg})=>{
        
    useEffect(()=>{
        var data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("file", imagedata);

    fetch("http://localhost:3001", {
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "type": "formData"
      },
      body: data
    }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status === 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });
    })
        
    return(
        <Container>
            <form>
                <div class="form-group">
                  <label for="">{label}</label>
                  <input type="file" class="form-control" name={formName} id={formId} onChange={useEffect}/>
                  <small id="helpId" class="form-text text-muted">{msg}</small>
                </div>

            </form>
        </Container>
    )
}

UploadUI.defaultProps = {
    msg: "",
}

export default UploadUI;