import dwuPic from "./assets/dwu-san-diego.jpg";

const AboutPage = () => (
  <div className="mx-auto col-span-2">
    <div className="mt-8 flex flex-col items-center">
      <img
        src={dwuPic}
        className="w-72 md:w-96 lg:w-96 2xl:w-112 rounded-lg"
        alt="Me"
      />
      <div className="w-112 text-justify">
        <div className="mt-8">Welcome - my name is David.</div>
        <div className="mt-8 mb-8">
          On this site you can find reviews of places I've eaten at throughout
          my time on this earth (since the year 2022).
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
