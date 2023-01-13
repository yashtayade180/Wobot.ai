import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";

const options = [
  { value: "IT", label: "IT" },
  { value: "Marketing", label: "Marketing" },
  { value: "Automation", label: "Automation" },
];

const wobo = () => {
  return (
    <div className="main">
      <div>
        <img
          src="/wobologo2.png"
          style={{
            //
            position: "fixed",
            top: 40,
            left: 40,
            height: 50,
          }}
        />
      </div>
      <div className="container col-xl-4">
        <div
          classname="container ml-5"
          style={{ padding: 8, overflow: "auto", marginBottom: 8 }}
        ></div>
        <div>
          <img
            src="/wobologo3.png"
            style={{
              //width: 140,
              marginBottom: 10,
              marginTop: 25,
              height: 80,
              //marginLeft: 300,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: 110,
            }}
          />
        </div>
        <h5 className="head" style={{ fontSize: 25 }}>
          It's delight to have you on <br />
          onboard
        </h5>

        <h6 className="head" style={{ fontSize: 12, color: "GrayText" }}>
          Help us know you better. <br />
          (This is how we optimize Wobot as per your Business needs)
        </h6>
        <form className="mt-4">
          <div className="row">
            {/* <div
            classname="container ml-5"
            style={{ padding: 20, marginBottom: 10, overflow: "auto" }}
          ></div> */}

            <div class="mb-2 col-lg-12 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Company Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
            </div>

            <div class="mb-2 col-lg-12 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Industry
              </label>
              <Select options={options} />
            </div>

            <div class="mb-2 col-lg-12 col-md-6 col-12">
              <label>Company Size</label>
              <div>
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ marginTop: 10, marginRight: 10 }}
                >
                  1-20
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ marginTop: 10, marginRight: 10 }}
                >
                  21-50
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  style={{ marginTop: 10, marginRight: 10 }}
                >
                  51-200
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ marginTop: 10, marginRight: 10 }}
                >
                  201-500
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  style={{ marginTop: 10, marginRight: 10 }}
                >
                  500+
                </button>
              </div>
            </div>
            <div
              classname="container ml-5"
              style={{ padding: 10, overflow: "auto", marginBottom: 10 }}
            ></div>
            <button type="submit" class="edit btn btn-primary">
              Get started
            </button>
            <div
              classname="container ml-5"
              style={{ padding: 10, overflow: "auto", marginBottom: 10 }}
            ></div>
          </div>
        </form>
      </div>
      <div
        classname="container ml-5"
        style={{ padding: 10, overflow: "auto", marginBottom: 10 }}
      ></div>
      <footer className="base-home">Terms of use | Privacy policy</footer>
    </div>
  );
};

export default wobo;
