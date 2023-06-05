import Head from 'next/head';
import { nurses } from '../../data/data';
import { useContext } from 'react';
import { StateContext } from '../../Components/Layout';
import { PageTitle } from '../../Components/dashboard/PageTitle';
import TableForPages from '../../Components/dashboard/TableForPages';
function Nurses() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);
  return (
    <>
      <Head>
        <title>Our Nurses</title>
      </Head>
      <div className='py-3 lg:py-5 '>
        <PageTitle category='Page' page='Nurses' />
        <div id='table' className={`flex ${activeMenu === false ? 'md:justify-center' : ''}`}>
          <div>
            <TableForPages type='nurses' items={nurses} one="Image" two="Nurse Name"
              three="Gender" four="Service" five="Service Price" six='Status'
              seven="Location" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Nurses;