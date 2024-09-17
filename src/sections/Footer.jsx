const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Terms and Conditions</p>
            <p> | </p> 
            <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
            <div className="social-icon">
            <a href="https://github.com/techtalkdev" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/github.svg" alt="github" className="social-icon w-1/2 h-1/2" />
                </a>
            </div>
            <div className="social-icon">
            <a href="https://x.com/techtalkdev" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/twitter.svg" alt="twitter" className="social-icon w-1/2 h-1/2" />
                </a>
            </div>
            <div className="social-icon">
            <a href="https://www.instagram.com/techtalk.dev/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/instagram.svg" alt="instagram" className="social-icon w-1/2 h-1/2" />
                </a>
            </div>
        </div>
        <p className="text-white-500">© 2024 Mike. All rights reserved</p>
    </section>
  )
}

export default Footer