import Typewriter from "typewriter-effect";
import Image from "next/image";

import { 
  ArrowDownward, 
  PendingActionsOutlined, 
  DataUsageOutlined, 
  PaymentsOutlined,
  MoreOutlined,
  Circle 
} from '@mui/icons-material';

import service1 from '../public/assets/images/services1.svg'
import service2 from '../public/assets/images/services2.svg'
import service3 from '../public/assets/images/services3.svg'
import porto1_1 from '../public/assets/images/porto1_1.png'

const index = () => {
  return (
    <div className="py-6 overflow-hidden">
      <div id="hero-page" className="py-12 px-10">
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
      <div className="px-10">
        <div className="absolute left-0 right-0 py-10">
          <div className="flex px-24">
            <div className="w-1/3 py-10 flex px-3">
              <div className="w-1/3">
                <Image
                  src={service1}
                  alt="Picture of the author"
                  width="95px"
                  height="95px"
                />
              </div>
              <div className="w-2/3">
                <h4 className="font-semibold mb-1">Build your website</h4>
                <p className="text-sm">We provide services to build your web apps.</p>
              </div>
            </div>
            <div className="w-1/3 py-10 flex px-3">
            <div className="w-1/3">
                <Image
                  src={service2}
                  alt="Picture of the author"
                  width="95px"
                  height="95px"
                />
              </div>
              <div className="w-2/3">
                <h4 className="font-semibold mb-1">Feel free consulting</h4>
                <p className="text-sm">We are open for consulting about your digitalitation plan.</p>
              </div>
            </div>
            <div className="w-1/3 py-10 flex px-3">
            <div className="w-1/3">
                <Image
                  src={service3}
                  alt="Picture of the author"
                  width="95px"
                  height="95px"
                />
              </div>
              <div className="w-2/3">
                <h4 className="font-semibold mb-1">Affordable Prices</h4>
                <p className="text-sm">The price of our service is really affordable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-72">
        <div className="w-0 h-0 border-l-[1000px] border-l-transparent border-b-[250px] border-b-primary-text border-r-[1000px] border-r-transparent"></div>
      </div>
      <div className="bg-primary-text text-primary-white text-center pb-24">
          <h2 className="text-3xl font-semibold mb-20">Our Product in 2022</h2>
          <div className="flex my-6 px-6">
            <div className="w-1/2 px-4">
              <div className="">
                <Image
                    src={porto1_1}
                    alt="Picture of the author"
                />
              </div>
            </div>
            <div className="w-1/2 px-4">
              <div className="text-left">
                <h2 className="text-xl font-semibold mb-4">Human Resource Information System</h2>
                <div className="border border-primary-white rounded-xl w-max">
                  <h3 className="py-2 px-3 bg-primary-white rounded-t-xl text-primary-text font-semibold">What can you get ? <Circle className="float-right text-sm"/><Circle className="float-right text-sm"/><Circle className="float-right text-sm"/></h3>
                  <ul className="px-3">
                    <li className="my-3"><PendingActionsOutlined className="mr-3"/>User friendly attendance system</li>
                    <li className="my-3"><DataUsageOutlined className="mr-3"/>Clear employee information system</li>
                    <li className="my-3"><PaymentsOutlined className="mr-3"/>Detailed employee payroll records</li>
                    <li className="my-3"><MoreOutlined className="mr-3"/>And more best features ... </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default index