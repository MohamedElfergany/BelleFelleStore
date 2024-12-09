const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#EEEFFB] text-base-content p-6 flex justify-center items-center">
        <div className="flex w-full justify-evenly items-start ">
          <form>
            <h6 className="footer-title text-4xl">Hakto</h6>
            <fieldset className="form-control w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-alex join-item">Subscribe</button>
              </div>
              <label className="label flex flex-col justify-start items-start">
                <span className="label-text">Enter email address</span>
                <span className="label-text">contact info</span>
                <span className="label-text">Enter email address</span>
              </label>
            </fieldset>
          </form>
          
            <nav className="flex flex-col items-start justify-start gap-3">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col items-start justify-start gap-3">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col items-start justify-start gap-3">
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
