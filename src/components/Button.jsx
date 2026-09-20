/**
 * A reusable CTA button component.
 * Navigates to a target section via the shared NavigationContext,
 * which resolves to either a slide change (desktop) or a smooth scroll (mobile).
 */
import { useNavigation } from "../context/NavigationContext";

const Button = ({ text, className, id, children }) => {
  const { goTo } = useNavigation();

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        if (id) goTo(id);
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
      {children}
    </a>
  );
};

export default Button;
