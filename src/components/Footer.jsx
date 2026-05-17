const Footer = () => {
    return (
        <>
            <footer className="social">
            <p className="text-secondary text-center text-[13px] pb-2 tracking-wide">
              © {new Date().getFullYear()} CaleCode Inc. All rights reserved.
            </p>
            <ul>
                {/* GitHub */}
                <li>
                    <a href="https://github.com/CaleCabrera07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fa-brands fa-github" aria-hidden="true"></i>
                        <span> - GitHub</span>
                    </a>
                </li>
                {/* LinkedIN */}
                <li>
                    <a
                        href="https://www.linkedin.com/in/carloscabrerasemidey/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                        <span> - LinkedIn</span>
                    </a>
                </li>
                {/* X - Twitter */}
                <li>
                    <a href="https://x.com/calecabrera07" target="_blank" rel="noopener noreferrer" aria-label="X">
                        <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                        <span> - X/Twitter</span>
                    </a>
                </li>
                {/* Instagram */}
                {/* <li>
                    <a
                        href="https://www.instagram.com/calecabrera07"
                        target="_blank"
                    >
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <span> - Instagram</span>
                    </a>
                </li> */}
            </ul>
        </footer>
        </>
    )
}

export default Footer
