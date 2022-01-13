import imgav from '../images/image-avatar.png'
import './footer.css'


function Footer() {
    return(
        <div className='divInFooter'>
            <img className='imgAv' src={imgav} alt="" />
            <p className='pInFooter' >Creation of <span className='spanInFooter'>El Farissi</span></p>
        </div>
    )
}




export default Footer