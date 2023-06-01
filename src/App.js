import logo from "./asset/logo.svg";
import star from "./asset/star.svg";
import img1 from "./asset/img1.svg";
import eye from "./asset/eye.svg";
import data from "./asset/data.svg";
import power from "./asset/power.svg";
import val from "./asset/val.svg";

import datadriven from "./asset/datadriven.svg";
import launch from "./asset/launch.svg";

import teams from "./asset/teams.svg";
import engineering from "./asset/engineering.svg";
import cto from "./asset/cto.svg";

import listlogo from "./asset/listlogo.svg";
import listlogo2 from "./asset/listlogo2.svg";
import by from "./asset/by.svg";
import google from "./asset/google.svg";
import c from "./asset/c.svg";
import fly from "./asset/fly.svg";

import ig from "./asset/ig.svg";
import facebook from "./asset/facebook.svg";
import twitter from "./asset/twitter.svg";
import "./App.css";

function App() {
  const HeadAPP = () => {
    return (
      <div className="headbg">
        {/* nav bar */}
        <div className="bar pt-3 pb-5">
          <div className="row">
            <div className="col-6">
              <img src={logo} alt="" />
            </div>
            <div className="col-6">
              <nav class="nav justify-content-center">
                <a class="nav-link">About</a>
                <a class="nav-link">Pricing</a>
                <a class="nav-link">Contact Us</a>
                <a class="nav-link">Login</a>
                <a class="nav-link btn">Start free trial</a>
              </nav>
            </div>
          </div>
        </div>
        {/* content1 */}
        <div className="d-flex my-auto">
          <div className="m-16 row">
            <div className="col-6">
              <button type="button" class="btn btn-PrimaryTextBG my-3">
                <img className="my-auto" src={star} alt="" /> v3.1 released.
                Learn more
              </button>
              <h1 className="my-3">Your data with real-time analytics</h1>
              <div className="fs-5 color-textsub o05 my-5">
                Harness the potential of Big Data Analytics & Cloud Services and
                become a data-driven organization with Needle tail
              </div>
              <div class="row">
                <button
                  type="button"
                  class="btn btn-PrimaryBG col-3 text-center mx-3"
                >
                  Start free trial
                </button>
                <button
                  type="button"
                  class="btn btn-PrimaryText col-3 text-center  mx-3"
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="col-6">
              <img className="w-100" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Step = () => {
    return (
      <div className="bgw">
        <div className="m-16">
          <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-PrimaryTextBG my-5">
              <img className="my-auto" src={eye} alt="" /> Why Qubly
            </button>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <h2 className=" my-3">
                Get actionable insights from Big Data in 3 steps
              </h2>
              <div className="fs-5 color-textsub my-4 w-75 px-5 mx-auto">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
            <div className="col-4">
              <img src={val} alt="" className="my-3" />
              <h4 className=" my-3">Valuable business insights</h4>
              <div className="fs-5 color-textsub mb-5">
                Collect processed & cleansed data that is ready to be analyzed
                to gather valuable business insights.
              </div>
            </div>
            <div className="col-4">
              <img src={power} alt="" className="my-3" />
              <h4 className=" my-3">Powerful Algorithms</h4>
              <div className="fs-5 color-textsub mb-5">
                With the help of powerful algorithms, quality rules &
                techniques, obtain simplified & enriched data.
              </div>
            </div>
            <div className="col-4">
              <img src={data} alt="" className="my-3" />
              <h4 className=" my-3">Data in real-time</h4>
              <div className="fs-5 color-textsub mb-5">
                Collect data in real-time from multiple channels and move it
                into a data lake, in its original format.
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              <img src={launch} alt="" />
            </div>
            <div className="col-6">
              <button type="button" class="btn btn-PrimaryTextBG ">
                <img className="my-auto" src={teams} alt="" /> For Product Teams
              </button>
              <h2 className="my-3">Launch with the best stack</h2>
              <div className="fs-5 color-textsub mb-5">
                A centralized platform that integrates zillions of data sources
                using Big Data ELT (Extract, Load & Transform) that leaves no
                data behind
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center ml-16">
          <div className="col-6">
            <button type="button" class="btn btn-PrimaryTextBG ">
              <img className="my-auto" src={engineering} alt="" /> For
              Engineering Teams
            </button>
            <h2 className=" my-3">Data-driven pipelines in minutes</h2>
            <div className="pe-5 me-5">
              <div className="fs-5 color-textsub mb-5 pe-5 me-5">
                Maintenance-free data pipelines with quick set-up and
                straight-forward deployments that are powered by a modern &
                scalable platform.
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={datadriven} alt="" />
          </div>
        </div>
      </div>
    );
  };
  const WhatILove = () => {
    return (
      <div className="bg-love">
        <div className="tes">
          <h3 className="fw-500 m-16  text-center my-3">
            "What I love about Qubly is the easy way we can collaborate even if
            there is a lot of people involved in the process"
          </h3>
          <div className="d-flex justify-content-center my-5">
            <img src={cto} alt="" />
          </div>
          <h5 className="m-16 text-center my-3">
            Guillaume Cabane <br></br> CTO @ BigSpring
          </h5>
          <div className="d-flex justify-content-center my-5">
            <img src={listlogo} alt="" />
          </div>
        </div>
      </div>
    );
  };
  const FromControl = () => {
    return (
      <div className="bgw objcenter">
        <div className="my-auto m-16">
          <div className="row ">
            <div className="col-6 p-5">
              <h2 className=" mb-3">
                See why the world’s best companies use Qubly to become truly
                data-driven.
              </h2>
              <img className="my-5" src={by} alt="" />
              <img src={listlogo2} alt="" />
            </div>
            <div className="col-6 px-5">
              <div className="card mx-5 ">
                <div class="card-body py-4 px-5 ">
                  <h3 class="text-center my-4">Sign Up</h3>
                  <button
                    type="button"
                    class="btn btn-PrimaryBG col-3 text-center mb-4 w-100 nore"
                  >
                    Start your free trial
                  </button>
                  <input
                    type="text"
                    class="form-control mb-4 "
                    name=""
                    id="Id"
                    aria-describedby="helpId"
                    placeholder="Your primary email"
                  ></input>
                  <input
                    type="text"
                    class="form-control mb-4 "
                    name=""
                    id="Password"
                    aria-describedby="helpId"
                    placeholder="Password"
                  ></input>
                  <input
                    type="text"
                    class="form-control mb-4 "
                    name=""
                    id="RePassword"
                    aria-describedby="helpId"
                    placeholder="Re-type Password"
                  ></input>
                  <h5 class="text-center mb-4 fw-500">OR</h5>
                  <div className="text-center mb-4">
                    <img src={google} alt="" />
                  </div>
                  <hr></hr>
                  <p class="text-center mb-4">
                    <span className="color-textsub">
                      Already have an account?{" "}
                    </span>
                    <span className="text-primary">Login</span>
                  </p>
                </div>
                <div className="cardbg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Contact = () => {
    return (
      <div className="contact">
        <div className="objcenter m-16">
          <div className="row w-100 mt-5">
            <div className="contact-icon p-0  mx-4">
              <img className="mb-4" src={logo} alt="" />
              <p className="mb-3">
                Lorem ipsum doProductValuable business insightslor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi
                enim ad minim
              </p>
              <div>
                <span className="mx-1">
                  <img src={facebook} alt="" />
                </span>
                <span className="mx-1">
                  <img src={twitter} alt="" />
                </span>
                <span className="mx-1">
                  <img src={ig} alt="" />
                </span>
              </div>
            </div>
            <div className="contact-Product p-0  ms-4">
              <h4 className="mb-3">Product</h4>
              <p>Connections</p>
              <p>Protocols</p>
              <p>Personas</p>
              <p>Integrations</p>
              <p>Catalog</p>
              <p>Pricing</p>
              <p>Security</p>
              <p>GDPR</p>
            </div>
            <div className="contact-ForDevelopers p-0  ms-4">
              <h4 className="mb-3">For Developers</h4>
              <p>Docs</p>
              <p>API</p>
              <p>Open Source</p>
              <p>Engineering Team</p>
            </div>
            <div className="contact-Company p-0  ms-4">
              <h4 className="mb-3">Company</h4>
              <p>Careers</p>
              <p>Blog</p>
              <p>Press</p>
            </div>
            <div className="contact-Support p-0  ms-4">
              <h4 className="mb-3">Support</h4>
              <p>Help Center</p>
              <p>Contact Us</p>
              <p>Security</p>
              <p>Bulletins</p>
              <p>Documentation</p>
              <p>Partner</p>
              <p>Portal</p>
            </div>
            <div className="contact-Newsletter p-0  ms-4">
              <h4 className="mb-3">Newsletter</h4>
              <input
                type="text"
                class="form-control mb-4 "
                name=""
                id="Email"
                aria-describedby="helpId"
                placeholder="Email"
              ></input>
              <img id="emailicon" className="cur-p" src={fly} alt="" />
            </div>
          </div>
          <h4 className="mt-5">
            Rahul Rao <img className="pb-1" src={c} alt="" />
          </h4>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <HeadAPP></HeadAPP>
      {/* 3step */}
      <Step></Step>
      {/* What I love */}
      <WhatILove></WhatILove>
      {/* from */}
      <FromControl></FromControl>
      {/* contact */}
      <Contact></Contact>
      
    </div>
  );
}

export default App;
