import Header from "./components/Header";
import UploadUI from "./components/UploadUI";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container mt-4">
        <div class="row">
          <div className="col-md-6">
            <UploadUI/>
          </div>
          <div className="col-md-6">
              <UploadUI/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
 