import Typewriter from "typewriter-effect";

import { ArrowDownward } from '@mui/icons-material';

const index = () => {
  return (
    <div className="py-6 px-10">
      <div id="hero-page" className="py-12">
        <h1 className="text-6xl font-bold text-center text-primary-text leading-tight">
          Do you want to digitizing <br/>your company business ?
        </h1>
        <div className="text-center my-10 text-2xl">
          <Typewriter
            options={{
              strings: ["Point of sale application", "Build a responsive website apps", "Human resource information system (HRIS)"],
              autoStart: true,
              loop: true,
              delay: 35,
            }}
          />
        </div>
        <div className="text-center animate-bounce pt-16">
          <ArrowDownward />
        </div>
        <h4 className="text-center text-sm">Get to know us</h4>
      </div>
      <div></div>
    </div>
  )
}

export default index