import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { animated, useTransition } from "react-spring";

const App = () => {
  const bgImage = "/images/background.png";
  const url = "http://localhost:3030/members";
  const [member, setMember] = useState([]);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  // const transitions = useTransition(aboutIsOpen, null, {
  //   from: { position: "fixed", opacity: 0, width: 0 },
  //   enter: { opacity: 1, width: 800 },
  //   leave: { opacity: 0, width: 0 },
  // });

  const openAbout = () => setAboutIsOpen(!aboutIsOpen);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response.json);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMember(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log(`Fungsinya jalan loh!`);
      });
  }, []);

  return (
    <React.Fragment>
      <main
        className="bg-cover bg-no-repeat min-h-screen w-full fixed overflow-scroll"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="Backtext text-ice-blue absolute flex flex-col items-start opacity-[.06] pl-[106px] top-[-50px] overflow-hidden">
          <span className="mb-[-128px]">we</span>
          <span className="mb-[-128px]">design &</span>
          <span className="mb-[-72px]">develop</span>
        </div>
        <section className="flex flex-row w-screen min-h-screen pl-42 gap-74 justify-between">
          <Navbar handleOpenAbout={openAbout} />

          {/* title */}
          <div className="z-20 h-full self-center pt-24">
            <div className="flex flex-col justify-center">
              <h2 className="Subtitle text-primary-blue mb-[-24px]">
                hello, we are
              </h2>
              <h1 className="Title text-primary-blue">putronia</h1>
            </div>
          </div>
          {/* drawer */}
          {aboutIsOpen && <About members={member} />}
          {/* {transitions.map(
            ({ key, item, props }) =>
              item && (
                <animated.div key={key} style={{ opacity: props.opacity }}>
                  <animated.div style={{ width: props.width }}>
                    <About />
                  </animated.div>
                </animated.div>
              )
          )} */}

          {/* <Content members={member} /> */}
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
