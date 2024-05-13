import { FaLinkedinIn,  FaInstagram, FaTwitter, FaGithub} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="text-5xl font-serif">Ss</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/sakshamshinde12/" target="_blank"><FaLinkedinIn/></a>
          <a href="https://www.instagram.com/saksham_shinde_12/" target="_blank"><FaInstagram/></a>
          <a href="https://github.com/Saksham412" target="_blank"><FaGithub/></a>
          <a href="https://twitter.com/Saksham_412" target="_blank"><FaTwitter/></a>
        </div>
    </nav>
  )
}

export default Navbar
