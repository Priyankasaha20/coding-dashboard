const Footer = () => {
    return (
      <footer className="bg-[#DBE0E6] py-8 mt-16 text-center">
        <h2 className="text-3xl font-heading text-primary-text mb-4">Join the Community</h2>
        <p className="text-lg text-primary-text mb-6 font-paragraph">
          Stay up to date with the latest coding tutorials and news.
        </p>
        <a href="#subscribe">
          <button className="bg-button-bg text-primary-bg font-heading px-8 py-3 rounded-full hover:bg-button-hover transition duration-300">
            Subscribe
          </button>
        </a>
        <div className="text-sm text-primary-text mt-8">
          &copy; 2024 Collaborative Coding. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  