import Head from 'next/head';
import { PageTitle } from '../../Components/dashboard/PageTitle';
function Map() {
    return (
        <>
            <Head>
                <title>Our Address</title>
            </Head>
            <div className='py-3 lg:py-5'>
                <PageTitle category='DashBoard' page='Map' />
                <div class="mapouter py-5 px-10">
                    <div class="gmap_canvas">
                        <iframe width="100%" height="100%" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=talkhah&t=&z=4&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://2yu.co">2yu</a>
                        <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Map;