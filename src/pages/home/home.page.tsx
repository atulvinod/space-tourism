import { Explore } from "../../components";

export const HomePage = () => {
  return (
    <div className="home-screen page-content-container">
      <div className="content-container">
        <div className="content-row">
          <div className="content-main">
            <h5 className="text-font__400">So you want to travel to</h5>
            <h1 className="my-24">Space</h1>
            <p className="content-main-text">
              Lets face it; If you want to go to space, you might as well
              genuinely go to outer space and not hover on kind of on the edge
              of it. Well sit back, and relax because w'll give you a truly out
              of this world experience
            </p>
          </div>

          <Explore />
        </div>
      </div>
    </div>
  );
};
