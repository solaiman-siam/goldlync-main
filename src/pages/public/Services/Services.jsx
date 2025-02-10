import GetInTouchBanner from '@/components/home-sections/GetInTouchBanner'
import AllServices from '@/components/services-sections/AllServices'
import SetJobPref from '@/components/services-sections/SetJobPref'

function Services() {
  return (
    <div>
      <AllServices/>
      {/* <SetJobPref/> */}
      <GetInTouchBanner/>
    </div>
  )
}

export default Services