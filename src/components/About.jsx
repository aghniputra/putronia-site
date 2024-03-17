import React from "react";

const About = ({ members }) => {
  console.log(members);

  return (
    <React.Fragment>
      <div className="fixed h-[90vh] right-0 max-w-[800px] my-8 bg-white/[.40] backdrop-blur-3xl py-20 pl-24 pr-16 flex flex-col justify-center items-start rounded-l-3xl border-l-2 border-white">
        <div id="about" className="flex flex-col gap-18 items-start">
          <h3 className="Heading1 text-primary-blue">about us</h3>
          <div id="profile" className="flex flex-col gap-12 items-start">
            {/* member row */}
            {members.map((member) => {
              return (
                <div
                  key={member.id}
                  className="flex flex-row gap-12 items-center"
                >
                  <img
                    src="/icons/Ellipse-1.png"
                    width={"180px"}
                    height={"180px"}
                  ></img>
                  {/* member's detail */}
                  <div className="flex flex-col gap-3 max-w-[400px]">
                    <h4 className="Heading2 text-primary-blue">
                      {member.name}
                    </h4>
                    <p className="Body text-neutral-900">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
