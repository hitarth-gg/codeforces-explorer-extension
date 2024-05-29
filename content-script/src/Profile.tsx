import React from "react";

export default function Profile() {
  return (
    <div className="">
      <div
        className="roundbox "
        style={{ padding: "2em 1em 0 1em", marginTop: "1em" }}
        //   height={10}
      >
        <div className="roundbox-lt">&nbsp;</div>
        <div className="roundbox-rt">&nbsp;</div>
        <div className="roundbox-lb">&nbsp;</div>
        <div className="roundbox-rb">&nbsp;</div>
        <h4>Plug Bro</h4>
        <iframe
          src="https://hitarth.me/codeforces-explorer/"
          width="100%"
          height="1000px"
        ></iframe>

        <br />
      </div>
    </div>
  );
}
