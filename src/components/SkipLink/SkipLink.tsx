import { useRef } from "react";
import "./SkipLink.css";

function SkipLink() {
  const skipMainRef = useRef<HTMLAnchorElement>(null);
  const skipFooterRef = useRef<HTMLAnchorElement>(null);

  const handleSkip = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.focus();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="skip-links">
      <a
        ref={skipMainRef}
        className="skip-to-anchor-link"
        href="#center"
        onClick={(e) => handleSkip(e, "center")}
      >
        Skip to main content
      </a>
      <a
        ref={skipFooterRef}
        className="skip-to-anchor-link"
        href="#footer-content"
        onClick={(e) => handleSkip(e, "footer-content")}
      >
        Skip to footer
      </a>
    </div>
  );
}

export default SkipLink;
