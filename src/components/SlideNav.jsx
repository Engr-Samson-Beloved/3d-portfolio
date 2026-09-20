import slides from "../constants/slides";

const SlideNav = ({ activeIndex, onNavigate }) => {
  const isFirst = activeIndex <= 0;
  const isLast = activeIndex >= slides.length - 1;

  return (
    <>
      <nav className="side-nav" aria-label="Section navigation">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to ${slide.label}`}
            aria-current={index === activeIndex}
            onClick={() => onNavigate(index)}
            className={`side-nav-dot ${index === activeIndex ? "active" : ""}`}
          >
            <span className="side-nav-label">{slide.label}</span>
          </button>
        ))}
      </nav>

      <div className="slide-arrows">
        <button
          type="button"
          aria-label="Previous section"
          disabled={isFirst}
          onClick={() => onNavigate(activeIndex - 1)}
          className="slide-arrow-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next section"
          disabled={isLast}
          onClick={() => onNavigate(activeIndex + 1)}
          className="slide-arrow-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SlideNav;
