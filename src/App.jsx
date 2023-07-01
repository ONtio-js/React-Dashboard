import { FaBars, FaStar, FaUserAlt } from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {TbReport} from 'react-icons/tb';
import {BsFillBarChartFill} from 'react-icons/bs';
import {GrProjects} from 'react-icons/gr';
export default function App() {
  return <>
    <div className="bg-gray-200 w-screen text-gray-700 h-screen flex justify-center items-center">
      <div className="w-[80%] h-[80%] bg-white/50 rounded-3xl p-10 grid grid-cols-[1fr,5fr] gap-1 ">
        {/* side bar start */}
        <div className=" relative h-full w-full  p-4  ">
          <h1 className="text-primaryColor ml-3 font-semibold text-xl capitalize">dashboard</h1>
          <div className="h-4/5 py-4 ">
            <ul className='flex flex-col gap-2'>
              <li className="text-base capitalize font-[600] text-gray-600 flex items-center gap-3 hover:bg-gray-500 px-4 py-3 rounded-xl hover:text-white w-full transition-all duration-500"><span className='text-secondaryColor text-lg'>{< GrProjects />}</span> project</li>
              <li className="text-base capitalize font-[600] text-gray-600 flex items-center gap-3 hover:bg-gray-500 px-4 py-3 rounded-xl hover:text-white w-full transition-all duration-500"><span className='text-secondaryColor text-xl'>{< BsFillBarChartFill />}</span> statistics</li>
              <li className="text-base capitalize font-[600] text-gray-600 flex items-center gap-3 hover:bg-gray-500 px-4 py-3 rounded-xl hover:text-white w-full transition-all duration-500"><span className='text-secondaryColor text-xl'>{<FaStar />}</span> media</li>
              <li className="text-base capitalize font-[600] text-gray-600 flex items-center gap-3 hover:bg-gray-500 px-4 py-3 rounded-xl hover:text-white w-full transition-all duration-500"><span className='text-secondaryColor text-xl'>{< FaUserAlt />}</span> dashboard</li>
              <li className="text-base capitalize font-[600] text-gray-600 flex items-center gap-3 hover:bg-gray-500 px-4 py-3 rounded-xl hover:text-white w-full transition-all duration-500"><span className='text-secondaryColor text-xl'>{< TbReport />}</span> report</li>
            </ul>
          </div>
          <h3 className=" absolute bottom-0 text-base capitalize font-[600] text-gray-600 flex items-center gap-3  px-4 py-3 rounded-xl hover:text-black w-[13%] transition-all duration-500"><span className='text-secondaryColor text-xl'>{< FiSettings />}</span> settings</h3>
        </div>
        {/* side bar end */}
        <div className='flex flex-col gap-1.5'>
          {/* top bar start */}
          <div className='b flex justify-between items-center py-2 px-5'>
            <div className='flex items-center gap-3'>
              <div className='w-16 h-16 rounded-full bg-gray-300'>
              </div>
              <div>
                <h1 className='font-semibold capitalize text-xl text-gray-700'>Nkwuda Theophilus</h1>
                <h4 className='text-base font-medium'>Manager</h4>
              </div>
            </div>
            <div className='text-3xl'>
              {<FaBars />}
            </div>
          </div>
          {/* top bar end */}
          {/*main section start */}
          <div className='w-full h-full rounded-3xl grid grid-cols-[3fr,2fr] gap-5  overflow-y-scroll scroll-smooth'>
              <div className='grid grid-cols-2 gap-4 p-5'>
                <div className='bg-white rounded-xl shadow-md'></div>
                <div className='bg-white rounded-xl shadow-md'></div>
                <div className='bg-white col-span-2 rounded-xl shadow-md '></div>
              </div>
              <div className='flex flex-col gap-5 py-4 pr-5'>
                <div className='bg-black/80 h-[18%] rounded-3xl shadow-md'></div>
                <div className='bg-white h-[80%] rounded-3xl shadow-md'></div>
              </div>
          </div>
          {/* main section end */}
        </div>
      </div>
    </div>
  </>
}