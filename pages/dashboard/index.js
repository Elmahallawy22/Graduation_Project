import Head from 'next/head';
import { PageTitle } from '../../Components/dashboard/PageTitle';
import { Boxes } from '../../Components/dashboard/home/Boxes';
import { Overview } from '../../Components/dashboard/home/Overview';
function Dashboard() {
  return (
    <>
      <Head>
        <title>Our Dashboard</title>
      </Head>
      <div className='py-3 lg:py-5 '>
        <PageTitle category='DashBoard' page='Home' />
        <div className='px-6'>
        <Boxes />
        <Overview/>
        </div>
      </div>
    </>
  )
}
export default Dashboard;