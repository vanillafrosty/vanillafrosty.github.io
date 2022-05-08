import { useState } from "react";
import dwuPic from "../assets/images/dwu-san-diego.jpg";
import issue1 from "../assets/images/known-issues-1.png";
import "../stylesheets/About.scss";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const AboutPage = () => {
  const [modalActive, setModalActive] = useState(null);

  return (
    <div className="mx-auto col-span-2">
      <div className="mt-8 flex flex-col items-center">
        <img
          src={dwuPic}
          className="w-1/2 md:w-96 lg:w-96 2xl:w-104 rounded-lg"
          alt="Me"
        />
        <div className="max-w-128 text-justify mx-8">
          <div className="mt-8 mb-8">Welcome - my name is David.</div>
          <div className="mt-8 mb-8">
            On this site you can find reviews of places I've eaten at, mostly
            from 2022 onward, when this site was created.
          </div>
          <div className="mt-8 mb-8">
            This site is written in React and styled with a mix of Tailwind,
            vanilla CSS, and icon libraries. See a list of known issues{" "}
            <span
              onClick={() => setModalActive(true)}
              className="text-blue-600 cursor-pointer underline underline-offset-4"
            >
              here
            </span>
            .
          </div>
          <div
            className={`modal-container ${modalActive ? "sliding-modal" : ""} ${
              modalActive === false ? "sliding-modal sliding-modal-out" : ""
            }`}
          >
            <div className="modal-background">
              <div className="modal p-3 tiny:p-11 max-w-146 mx-2 tiny:mx-auto">
                <div className="mb-8">Known Issues</div>
                <div className="mb-8 p-3 border-2 rounded border-orange-400">
                  <ExclamationCircleIcon className="place-self-center h-6 w-6 text-orange-400 mb-2" />
                  <div className="mb-2">
                    Some map markers may appear to be off if a business has
                    moved locations. The marker is more recent, so it's right.
                  </div>
                  <img
                    src={issue1}
                    className="mx-auto w-11/12 rounded-lg"
                    alt="Known issue with map markers"
                  />
                </div>
                <div
                  onClick={() => setModalActive(false)}
                  className="cursor-pointer text-center w-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Back
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
