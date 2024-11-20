import { Navbar, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState(""); // Active link state
    const [scrollLock, setScrollLock] = useState(false); // Lock to manage scroll during link clicks

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        const bottomBar = document.getElementById("bottom-bar");

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6, // Trigger when 60% of a section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            if (scrollLock) return; // Skip updates during link clicks

            let lastVisibleSection = null;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    lastVisibleSection = entry.target.id;
                }
            });

            if (lastVisibleSection && lastVisibleSection !== "bottom-bar") {
                setActiveLink(lastVisibleSection);
            }

            // Special case: Ensure 'contact' remains active when BottomBar is visible
            if (
                bottomBar &&
                bottomBar.getBoundingClientRect().top <= window.innerHeight
            ) {
                setActiveLink("contact");
            }
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [scrollLock]);

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
        setScrollLock(true); // Lock scroll updates during link click

        const targetSection = document.getElementById(link);
        if (targetSection) {
            // Use scrollIntoView for better cross-browser behavior
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start", // Aligns the section at the top of the viewport
            });
        }

        // Unlock scrolling after the animation duration (adjust timeout as needed)
        setTimeout(() => {
            setScrollLock(false);
        }, 600); // Duration in milliseconds, matching scrollIntoView smooth behavior
    };

    return (
        <Navbar expand='lg' className='bg-body-tertiary d-none d-lg-block'>
            <Nav className='flex-column'>
                <Nav.Link
                    className={
                        activeLink === "landing"
                            ? "active navbar-link"
                            : "navbar-link"
                    }
                    onClick={() => handleNavLinkClick("landing")}
                >
                    <i className='fas fa-circle'></i>
                </Nav.Link>
                <Nav.Link
                    className={
                        activeLink === "about"
                            ? "active navbar-link"
                            : "navbar-link"
                    }
                    onClick={() => handleNavLinkClick("about")}
                >
                    <i className='fas fa-circle'></i>
                </Nav.Link>
                <Nav.Link
                    className={
                        activeLink === "projects"
                            ? "active navbar-link"
                            : "navbar-link"
                    }
                    onClick={() => handleNavLinkClick("projects")}
                >
                    <i className='fas fa-circle'></i>
                </Nav.Link>
                <Nav.Link
                    className={
                        activeLink === "contact"
                            ? "active navbar-link"
                            : "navbar-link"
                    }
                    onClick={() => handleNavLinkClick("contact")}
                >
                    <i className='fas fa-circle'></i>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};
