import './card.css'
import Imgcard from '../imgcard/img'
import Bodycard from '../cardbody/body'
import Svg from '../svginbody/svginbody'
import Footer from '../footercard/footer'

function Card() {
    return(
        <div className='card'>
            <Imgcard />
            <Bodycard />
            <Svg />
            <hr className='hrOk' />
            <Footer />
        </div>
    )
}



export default Card