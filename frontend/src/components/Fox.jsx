import React from "react";
import "./Fox.scss"; // <-- import the CSS here

const Fox = () => {
  return (
    <>
      <div className="fox">
        <div className="leg-outer">
          <div className="leg">
            <div className="paw">
              <div className="log">
                <div className="log-inner" />
              </div>
            </div>
          </div>
        </div>

        <div className="leg-outer">
          <div className="leg">
            <div className="paw">
              <div className="log">
                <div className="log-inner" />
              </div>
            </div>
          </div>
        </div>

        <div className="hind-leg-outer">
          <div className="hind-leg-outer2">
            <div className="hind-paw">
              <div className="hind-log">
                <div className="hind-log-inner" />
              </div>
            </div>
          </div>
        </div>

        <div className="hind-leg-outer">
          <div className="hind-leg-outer2">
            <div className="hind-paw">
              <div className="hind-log">
                <div className="hind-log-inner" />
              </div>
            </div>
          </div>
        </div>

        <div className="body">
          <div className="head">
            <div className="ears">
              <div className="ear" />
              <div className="ear" />
            </div>
            <div className="face" />
            <div className="snout" />
          </div>

          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tail2">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="snow" />
    </>
  );
};

export default Fox;
