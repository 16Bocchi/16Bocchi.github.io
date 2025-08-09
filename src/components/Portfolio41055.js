import { Container, Row, Col, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ScrollIndicator = ({ scrollToAbout }) => (
    <div className='scroll-indicator' onClick={scrollToAbout}>
        <span>&#9660;</span>
    </div>
);

const DesktopLanding41055 = ({ lastLogin, txt }) => (
    <Row className='align-items-stretch justify-content-center'>
        <Col xs={12} md={6} xl={5} className='card-box gx-5'>
            <h1>Subject Portfolio - 41055</h1>
            <p className='tagLine'>My work and reflections for the subject</p>
            <Link to='/' className='btn btn-outline-primary'>
                Back to Main Portfolio
            </Link>
            <br />
            <br />
            <button
                className='btn btn-outline-primary'
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/daniel-braithwaite",
                        "_blank"
                    )
                }
            >
                Let's connect
            </button>
        </Col>
        <Col xs={12} md={6} xl={5} className='gx-5'>
            <div className='terminal'>
                <div className='terminal-bar'>
                    <span className='terminal-button close'></span>
                    <span className='terminal-button minimize'></span>
                    <span className='terminal-button maximize'></span>
                </div>
                <p className='terminal-body'>
                    <span className='prompt'>
                        Last login: {lastLogin} on console
                    </span>
                    <br />
                    <a
                        href='https://github.com/16Bocchi'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className='prompt'>16Bocchi@github ~ %</span>
                    </a>
                    <span className='command'> echo I am a: </span>
                    <span className='output'>{txt}</span>
                    <span className='cursor'>_</span>
                </p>
            </div>
        </Col>
    </Row>
);

const MobileLanding41055 = ({ lastLogin, txt }) => (
    <>
        <div className='card-box-mobile'>
            <h1>Subject Portfolio - 41055</h1>
            <p className='tagLine'>My work and reflections for the subject</p>
            <Link to='/' className='btn btn-outline-primary'>
                Back to Main Portfolio
            </Link>
        </div>
        <div className='terminal'>
            <div className='terminal-bar'>
                <span className='terminal-button close'></span>
                <span className='terminal-button minimize'></span>
                <span className='terminal-button maximize'></span>
            </div>
            <p className='terminal-body'>
                <span className='prompt'>
                    Last login: {lastLogin} on console
                </span>
                <br />
                <a
                    href='https://github.com/16Bocchi'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <span className='prompt'>16Bocchi@github ~ %</span>
                </a>
                <span className='command'> echo I am a: </span>
                <span className='output'>{txt}</span>
                <span className='cursor'>_</span>
            </p>
        </div>
        <br></br>
        <Row className='card-box-mobile'>
            <button
                className='btn btn-outline-primary'
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/daniel-braithwaite",
                        "_blank"
                    )
                }
            >
                Let's connect
            </button>
        </Row>
    </>
);

const Landing41055 = () => {
    const [idx, setIdx] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const [txt, setTxt] = useState("");
    const [lastLogin, setLastLogin] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const period = 1000;
    const [deltaTime, setDeltaTime] = useState(200 - Math.random() * 50);
    const wordRotation = [
        "Software Engineer",
        "Student",
        "Portfolio Creator",
        "Problem Solver",
        "Tech Enthusiast",
    ];

    useEffect(() => {
        const now = new Date();
        setLastLogin(now.toLocaleString());
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, deltaTime);

        return () => {
            clearInterval(ticker);
        };
    }, [txt]);

    const tick = () => {
        const i = idx % wordRotation.length;
        const fullTxt = wordRotation[i];
        const updatedTxt = isDelete
            ? fullTxt.substring(0, txt.length - 1)
            : fullTxt.substring(0, txt.length + 1);

        setTxt(updatedTxt);

        if (isDelete) {
            setDeltaTime((prevDeltaTime) => prevDeltaTime / 1.2);
        }

        if (!isDelete && updatedTxt === fullTxt) {
            setIsDelete(true);
            setDeltaTime(period);
        } else if (isDelete && updatedTxt === "") {
            setIsDelete(false);
            setIdx(idx + 1);
            setDeltaTime(200);
        }
    };

    const scrollToAbout = () => {
        const resumeSection = document.getElementById("about");
        if (resumeSection) {
            resumeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className='landing' id='landing'>
            <Container>
                {isMobile ? (
                    <MobileLanding41055 lastLogin={lastLogin} txt={txt} />
                ) : (
                    <DesktopLanding41055 lastLogin={lastLogin} txt={txt} />
                )}
            </Container>
            {!isMobile && <ScrollIndicator scrollToAbout={scrollToAbout} />}
        </section>
    );
};

const PersonalStatement41055 = () => (
    <section className='about' id='about'>
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col xs={12}>
                    <h1>{">> Personal Statement"}</h1>
                </Col>
                <Col xs={12} md={10} xl={10} className='gx-5'>
                    <Card>
                        <Card.Body>
                            <div className='mb-4'>
                                <h2>Hello — I'm Daniel</h2>
                                <p className='mb-3'>
                                    A final-year Software Engineering (Honours)
                                    student at UTS, currently working as a
                                    Software Test Intern at Advanced Navigation.
                                    I'm fuelled by a passion for tackling
                                    challenging problems across algorithms, AI,
                                    and augmented reality. I'm driven not just
                                    by curiosity about how software works, but
                                    by a commitment to building systems and
                                    tools that endure — empowering teams with
                                    efficiency and clarity.
                                </p>

                                <h3>What I've worked on:</h3>
                                <ul className='mb-3 text-start'>
                                    <li>
                                        <strong>
                                            Apple Vision Pro projects
                                        </strong>{" "}
                                        blending immersive UI/UX with real-world
                                        usability.
                                    </li>
                                    <li>
                                        <strong>
                                            Software-in-the-loop testing and
                                            automation tooling
                                        </strong>
                                        , improving CI/CD performance and
                                        reproducibility.
                                    </li>
                                    <li>
                                        <strong>Machine learning</strong> and
                                        developer productivity frameworks — from
                                        ideation to deployment.
                                    </li>
                                </ul>

                                <p className='mb-3'>
                                    I bring energy, adaptability, and a
                                    cross-functional mindset to collaborative
                                    environments — particularly those that span
                                    global and intercultural teams. I have
                                    recently signed on as a Graduate QA Engineer
                                    at DroneShield, where I look forward to
                                    applying my skills in sustainable systems,
                                    developer tooling, and emerging tech to make
                                    a real impact.
                                </p>

                                <div className='mb-3'>
                                    <h4 className='text-center mb-3'>
                                        📄 Download Professional Documents
                                    </h4>
                                    <p className='small text-muted mb-3 text-center'>
                                        Full PDF versions available for
                                        download:
                                    </p>
                                    <div className='d-flex gap-3 justify-content-center flex-wrap'>
                                        <a
                                            href='/Resume.pdf'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-primary'
                                        >
                                            📄 Resume
                                            <br />
                                            PDF
                                        </a>
                                        <a
                                            href='/CoverLetter.pdf'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-secondary'
                                        >
                                            📧 Cover Letter PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

const Resume41055 = () => (
    <section className='about' id='resume'>
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col xs={12}>
                    <h1>{">> Resume"}</h1>
                </Col>
                <Col xs={12} md={10} xl={10} className='gx-5'>
                    <Card>
                        <Card.Body>
                            <div id='resume-content' className='mb-4'>
                                <div className='text-center mb-4'>
                                    <h2>Daniel Braithwaite</h2>
                                    <p className='mb-1'>
                                        <a
                                            href='https://www.linkedin.com/in/daniel-braithwaite/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            LinkedIn
                                        </a>{" "}
                                        |
                                        <a
                                            href='https://github.com/16Bocchi'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            GitHub
                                        </a>{" "}
                                        |
                                        <a
                                            href='https://danielkei.tech'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            Portfolio
                                        </a>
                                    </p>
                                    <p className='mb-1'>
                                        Daniel.K.Braithwaite@gmail.com | +61 468
                                        637 650
                                    </p>
                                </div>

                                <h3>PERSONAL STATEMENT:</h3>
                                <p className='left-justify mb-4'>
                                    Final-semester Software Engineering
                                    (Honours) student at the University of
                                    Technology Sydney with hands-on experience
                                    owning and maintaining critical test
                                    infrastructure. Specialises in
                                    Software-In-The-Loop (SITL) testing, CI/CD
                                    pipeline optimisation, and scalable
                                    developer tooling. Proven track record in
                                    automating test workflows, improving
                                    reproducibility, and collaborating across
                                    engineering teams to accelerate development
                                    cycles. Seeking to apply technical expertise
                                    and leadership skills in high-impact
                                    software development environments.
                                </p>

                                <h3>EDUCATION:</h3>
                                <p className='left-justify mb-2'>
                                    <strong>
                                        Bachelor of Engineering (Honours)
                                    </strong>
                                    <br />
                                    Majoring in Software Engineering
                                    <br />
                                    WAM (after transferring): 77.7
                                    <br />
                                    University of Technology Sydney
                                    <br />
                                    2022 - 2025 (Expected)
                                </p>
                                <p className='left-justify mb-4'>
                                    <strong>Accomplishments:</strong>
                                    <br />
                                    • FEIT Dean's List 2025
                                    <br />
                                    • Data Structures and Algorithms - High
                                    Distinction
                                    <br />
                                    • Machine Learning - High Distinction
                                    <br />
                                    • iOS Industry Studio - High Distinction
                                    <br />
                                    • Software Design Studio - High Distinction
                                    <br />
                                    • Software Innovation Studio - High
                                    Distinction
                                    <br />
                                    • Software Architecture - Distinction
                                    <br />• Software Analysis Studio -
                                    Distinction
                                </p>

                                <h3>RELEVANT EMPLOYMENT:</h3>
                                <p className='left-justify mb-2'>
                                    <strong>
                                        Advanced Navigation — Software Test
                                        Engineer Intern
                                    </strong>
                                </p>
                                <p className='left-justify mb-4'>
                                    • Improved SITL test coverage and developed
                                    a CI-ready HITL firmware flashing utility
                                    while being the only engineer responsible
                                    for the test system over a 6-month period.
                                    <br />
                                    • Enhanced and repaired internal tooling for
                                    log file replay in C++, increasing
                                    reliability for regression testing.
                                    <br />
                                    • Authored internal documentation to support
                                    Python tooling setup and version control for
                                    support engineers.
                                    <br />
                                    • Guided support teams in transitioning from
                                    MATLAB to Python scripting, improving
                                    maintainability and reducing overhead.
                                    <br />
                                    • Overhauled GitLab CI pipelines: improved
                                    uptime, introduced automated linting with
                                    merge request feedback, and enhanced JUnit
                                    reporting.
                                    <br />
                                    • Collaborated with cross-functional teams
                                    to resolve defects, improve pipeline
                                    transparency, and accelerate development
                                    cycles.
                                    <br />• Enhancements to CI and automated
                                    testing contributed to a surge in pipeline
                                    activity—from ~50 per month to over 1000
                                    during peak firmware development.
                                </p>

                                <p className='left-justify mb-2'>
                                    <strong>
                                        Veremark — Test Automation Engineer
                                        Intern
                                    </strong>
                                </p>
                                <p className='left-justify mb-4'>
                                    • Created a Pytest-based testing framework
                                    with customisable test selection and PDF
                                    reporting for non-technical users.
                                    <br />
                                    • Reduced manual QA effort by optimising
                                    execution flow and test reliability.
                                    <br />
                                    • Standardised YAML-based test
                                    configuration, empowering broader team
                                    adoption.
                                    <br />
                                    • Integrated logging and exception handling
                                    utilities to improve debuggability and
                                    maintainability of test suite.
                                    <br />• Contributed to documentation and
                                    onboarding materials to support adoption
                                    across QA and development teams.
                                </p>

                                <h3>PROJECTS:</h3>
                                <p className='left-justify mb-2'>
                                    <strong>
                                        AuslanLive — Software Innovation Studio
                                    </strong>
                                </p>
                                <p className='left-justify mb-4'>
                                    • Created an end-to-end software solution
                                    for translating Australian Sign Language to
                                    typed text and vice versa.
                                    <br />
                                    • Implemented a word separation algorithm to
                                    separate continuous Auslan signing into
                                    distinct signed words.
                                    <br />
                                    • Co-created a transformer based Neural
                                    Network approach to convert distinct signs
                                    into Australian English words.
                                    <br />• Received 2nd place community choice
                                    awards out of 26 groups.
                                </p>

                                <p className='left-justify mb-2'>
                                    <strong>
                                        Psithurism — iOS Industry Studio
                                    </strong>
                                </p>
                                <p className='left-justify mb-4'>
                                    • First cohort in Australia to complete a
                                    university subject for the Apple Vision Pro.
                                    <br />
                                    • Responsible for developing the Apple Watch
                                    application, Apple Vision Pro application
                                    UI, immersive environments, sound design,
                                    animation and timekeeping.
                                    <br />• Led group of 3 to develop a
                                    cross-platform application for the Apple
                                    Watch and Apple Vision Pro.
                                </p>

                                <p className='left-justify mb-2'>
                                    <strong>
                                        Eyedentify — Software Design Studio
                                    </strong>
                                </p>
                                <p className='left-justify mb-4'>
                                    • Developed a Semantic Image Segmentation
                                    model used to blur video backgrounds in
                                    real-time.
                                    <br />
                                    • Assisted in the development of mongoDB
                                    storage solution for image and data
                                    verification.
                                    <br />• Project received a final mark of
                                    97%.
                                </p>

                                <h3>TECHNICAL SKILLS:</h3>
                                <p className='left-justify mb-2'>
                                    <strong>Languages:</strong>
                                    <br />
                                    Python, Bash, C++, SwiftUI, Javascript
                                </p>
                                <p className='left-justify mb-2'>
                                    <strong>Libraries & Frameworks:</strong>
                                    <br />
                                    Pytest, React, Bootstrap, NodeJS, Docker,
                                    Selenium
                                </p>
                                <p className='left-justify mb-2'>
                                    <strong>Tools & Services:</strong>
                                    <br />
                                    Git, GitLab, GitHub, Jira, Confluence,
                                    Postman, PostgreSQL, MongoDB, Firebase,
                                    Cisco IOS CLI
                                </p>
                                <p className='left-justify mb-4'>
                                    <strong>Testing & CI/CD:</strong>
                                    <br />
                                    Pytest, GitLab CI, YAML config, Linting
                                    tools, Selenium, JUnit
                                </p>

                                <h3>EMPLOYMENT:</h3>
                                <p className='left-justify mb-2'>
                                    <strong>
                                        Employrite — Verification Associate
                                    </strong>
                                </p>
                                <p className='left-justify'>
                                    • Processed searches and reports related to
                                    background screening applications, focusing
                                    on Australian Federal Police (AFP) and
                                    Australian Criminal Intelligence Commission
                                    (ACIC) platforms.
                                    <br />
                                    • Ensured thorough and accurate review of
                                    information from responses, government
                                    records, and other documents with high
                                    accuracy (&lt;1% error rate).
                                    <br />• Communicated directly with clients
                                    and candidates to resolve any issues in a
                                    timely manner.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className='text-center mt-3'>
                        <a
                            href='/Resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-primary'
                        >
                            📄 Download Resume PDF
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

const Reflections41055 = () => (
    <section className='projects' id='reflections'>
        <Container>
            <Row className='align-items-stretch justify-content-center'>
                <Col xs={12}>
                    <h1>{">> Reflections"}</h1>
                </Col>
                <Col xs={12} md={10} xl={10} className='gx-5'>
                    <h2>
                        Reflection 1: Sustainability – Viable Systems through
                        Knowledge Transfer
                    </h2>
                    <Card className='mb-4'>
                        <Card.Body>
                            <Table
                                striped
                                bordered
                                hover
                                responsive
                                className='reflection-table'
                            >
                                <thead>
                                    <tr>
                                        <th
                                            className='text-column'
                                            style={{ width: "70%" }}
                                        >
                                            Text
                                        </th>
                                        <th
                                            className='type-column'
                                            style={{ width: "30%" }}
                                        >
                                            Reflection Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='left-justify'>
                                            During my internship, I noticed that
                                            several teams were independently
                                            maintaining and rewriting nearly
                                            identical IMU analysis scripts.
                                            There was no centralised repository,
                                            and many scripts lacked version
                                            control or explanation. After some
                                            investigation, I realised different
                                            teams had solved the same problem in
                                            slightly different ways—duplicating
                                            effort and introducing
                                            inconsistencies in results.
                                        </td>
                                        <td className='text-center'>Recount</td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            Initially, I was frustrated. It felt
                                            like a lot of talent and time had
                                            gone to waste. I also felt
                                            overwhelmed by the responsibility of
                                            resolving it as an intern,
                                            especially because I had limited
                                            authority to ask teams to change
                                            their workflows.
                                        </td>
                                        <td className='text-center'>
                                            Feelings
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            This experience challenged my prior
                                            belief that storing information in
                                            wikis like Confluence was enough to
                                            ensure sustainability. A colleague
                                            even said, "Confluence is where
                                            information goes to die," which made
                                            me reconsider my assumption that
                                            written documentation alone was a
                                            sufficient handover strategy. I
                                            realised that sustainability isn't
                                            just about storing knowledge—it's
                                            about making it accessible,
                                            relevant, and easy to maintain.
                                        </td>
                                        <td className='text-center'>
                                            Personal beliefs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            The core issue was a lack of
                                            alignment and automation. There were
                                            no shared update mechanisms, and
                                            manual documentation was quickly
                                            outdated. Even well-written guides
                                            were ignored because no one trusted
                                            them to reflect the current state of
                                            the tool. I realised this breakdown
                                            was not technical but cultural and
                                            systemic.
                                        </td>
                                        <td className='text-center'>
                                            Recognising difficulties
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            Dowling et al. (2016) describe
                                            sustainable engineering as not just
                                            environmental but also about
                                            conserving time and resources. In
                                            this case, redoing work due to poor
                                            information sharing was a clear
                                            sustainability failure. Similarly,
                                            Argote and Ingram (2000) highlight
                                            that effective knowledge transfer is
                                            critical for organisational
                                            learning, and without it,
                                            organisations risk inefficiency and
                                            repeated mistakes. I came to see
                                            sustainability through the lens of
                                            knowledge preservation and scalable
                                            systems, rather than just
                                            environmental impact.
                                        </td>
                                        <td className='text-center'>
                                            Perspective
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            After gaining support from the
                                            support team, I helped unify the IMU
                                            scripts into one shared tool with
                                            automated data logging and minimal
                                            manual configuration. Going forward,
                                            I intend to design systems that
                                            prioritise long-term viability—using
                                            automation where possible and
                                            reducing the burden on individuals
                                            to "document and forget."
                                            Sustainability, to me, now includes
                                            the ability of systems and knowledge
                                            to outlive their creators without
                                            decay.
                                        </td>
                                        <td className='text-center'>
                                            Lessons learned and Future
                                            Intentions
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <h3 className='left-justify mt-3'>References</h3>
                            <ul className='left-justify'>
                                <li>
                                    Argote, L., & Ingram, P. (2000). Knowledge
                                    transfer: A basis for competitive advantage
                                    in firms. Organizational Behavior and Human
                                    Decision Processes, 82(1), 150–169.
                                    <a
                                        href='https://doi.org/10.1006/obhd.2000.2893'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        https://doi.org/10.1006/obhd.2000.2893
                                    </a>
                                </li>
                                <li>
                                    Dowling, D., Carew, A., & Hadgraft, R.
                                    (2016).
                                    <em>
                                        Engineering your future: An Australasian
                                        guide
                                    </em>{" "}
                                    (3rd ed.).
                                    <a
                                        href='https://www.wiley.com/en-au/Engineering+Your+Future%3A+An+Australasian+Guide%2C+4th+Edition-p-9780730369165'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        John Wiley & Sons
                                    </a>
                                    .
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <br />
                    <br />
                    <h2>
                        Reflection 2: Professional Practice in Intercultural and
                        Global Contexts
                    </h2>
                    <Card className='mb-4'>
                        <Card.Body>
                            <Table
                                striped
                                bordered
                                hover
                                responsive
                                className='reflection-table'
                            >
                                <thead>
                                    <tr>
                                        <th
                                            className='text-column'
                                            style={{ width: "70%" }}
                                        >
                                            Text
                                        </th>
                                        <th
                                            className='type-column'
                                            style={{ width: "30%" }}
                                        >
                                            Reflection Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='left-justify'>
                                            While working on a joint data
                                            analysis project during my
                                            internship, I collaborated with
                                            engineers from all regions, being
                                            APAC, EMEA, and the Americas. One
                                            task involved reviewing sensor
                                            calibration methods, but each team
                                            had a different process and level of
                                            formality. One group used a detailed
                                            approval chain in Jira; another
                                            preferred verbal agreement and email
                                            summaries. This discrepancy caused
                                            delays when attempting to align
                                            timelines and validate data.
                                        </td>
                                        <td className='text-center'>Recount</td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            I felt uncertain about how to
                                            proceed. It was tempting to think
                                            that one method was "right" and the
                                            others were inefficient. I was
                                            particularly concerned that the lack
                                            of formalisation in some teams might
                                            lead to errors going unnoticed. But
                                            I also didn't want to come across as
                                            inflexible or pushy.
                                        </td>
                                        <td className='text-center'>
                                            Feelings
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            I initially believed that structure
                                            and documentation were synonymous
                                            with professionalism. However, I
                                            come from a multicultural background
                                            and have always adapted easily to
                                            different environments. I had to
                                            confront my assumption that a rigid
                                            process was the only "correct"
                                            approach and instead focus on what
                                            actually led to results.
                                        </td>
                                        <td className='text-center'>
                                            Personal beliefs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            The main difficulty was not
                                            technical—it was cultural. The teams
                                            were all competent, but their norms
                                            around communication and
                                            accountability were shaped by their
                                            local work cultures. I realised that
                                            enforcing uniformity might actually
                                            damage relationships or create
                                            resistance.
                                        </td>
                                        <td className='text-center'>
                                            Recognising difficulties
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            Engineering Australia (2017) states
                                            that engineers should appreciate
                                            global and cultural diversity and
                                            operate respectfully in
                                            multicultural teams. This helped me
                                            reframe the situation—not as a clash
                                            to resolve, but as a gap to bridge.
                                            To address this, I began actively
                                            translating between styles:
                                            capturing key points from verbal
                                            discussions and syncing them into
                                            the team's shared tool. This action
                                            reassured the formal group that
                                            documentation existed while
                                            respecting the verbal style of the
                                            other. This adaptation helped align
                                            the groups without dismissing
                                            anyone's cultural preferences, which
                                            improved efficiency and reduced
                                            tension. Research on intercultural
                                            competence also reinforces that
                                            flexibility and empathy are
                                            essential for effective teamwork
                                            across borders (Deardorff, 2006).
                                        </td>
                                        <td className='text-center'>
                                            Perspective
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='left-justify'>
                                            This experience taught me that
                                            intercultural professionalism isn't
                                            about imposing one model but about
                                            achieving alignment through empathy
                                            and clarity. In future global teams,
                                            I will continue to adapt my
                                            communication style while ensuring
                                            mutual understanding and
                                            accountability. Results matter—but
                                            getting there in a culturally
                                            responsive way is equally important
                                            (Hofstede, Hofstede, & Minkov,
                                            2010).
                                        </td>
                                        <td className='text-center'>
                                            Lessons learned and Future
                                            Intentions
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <h3 className='left-justify mt-3'>References</h3>
                            <ul className='left-justify'>
                                <li>
                                    Deardorff, D. K. (2006). Identification and
                                    assessment of intercultural competence as a
                                    student outcome of internationalization.
                                    <em>
                                        Journal of Studies in International
                                        Education, 10
                                    </em>
                                    (3), 241–266.
                                    <a
                                        href='https://doi.org/10.1177/1028315306287002'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        https://doi.org/10.1177/1028315306287002
                                    </a>
                                </li>
                                <li>
                                    Engineering Australia. (2017).
                                    <em>
                                        Stage 1 competency standard for
                                        professional engineer
                                    </em>
                                    .
                                    <a
                                        href='https://www.engineersaustralia.org.au/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        https://www.engineersaustralia.org.au/
                                    </a>
                                </li>
                                <li>
                                    Hofstede, G., Hofstede, G. J., & Minkov, M.
                                    (2010).
                                    <em>
                                        Cultures and organizations: Software of
                                        the mind
                                    </em>{" "}
                                    (3rd ed.).
                                    <a
                                        href='https://books.google.com.au/books?id=o4OqTgV3V00C&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        McGraw-Hill
                                    </a>
                                    .
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

const CoverLetter41055 = () => (
    <section className='contact' id='cover-letter'>
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col xs={12}>
                    <h1>{">> Cover Letter"}</h1>
                </Col>
                <Col xs={12} md={10} xl={10} className='gx-5'>
                    <Card>
                        <Card.Body>
                            <div id='cover-letter-content' className='mb-4'>
                                <div className='cover-letter-header mb-4'>
                                    <div className='text-center mb-3'>
                                        <h3>Daniel Braithwaite</h3>
                                        <p className='mb-1'>
                                            <a
                                                href='https://www.linkedin.com/in/daniel-braithwaite/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                LinkedIn
                                            </a>{" "}
                                            |
                                            <a
                                                href='https://github.com/16Bocchi'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                GitHub
                                            </a>{" "}
                                            |
                                            <a
                                                href='https://danielkei.tech'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Portfolio
                                            </a>
                                        </p>
                                        <p className='mb-1'>
                                            Daniel.K.Braithwaite@gmail.com | +61
                                            468 637 650
                                        </p>
                                    </div>
                                </div>

                                <div className='cover-letter-body'>
                                    <p className='left-justify mb-3'>
                                        <strong>Dear Hiring Manager,</strong>
                                    </p>

                                    <p className='left-justify mb-3'>
                                        I am applying for the Graduate Engineer
                                        Program at Industrus Engineering. The
                                        opportunity to rotate across
                                        projects—ranging from renewable energy
                                        storage to disaster recovery and digital
                                        design—aligns strongly with my passion
                                        for building sustainable, innovative
                                        engineering solutions. As a Software
                                        Engineering (Honours) student at UTS
                                        with hands-on experience in software
                                        test infrastructure, automation, and
                                        cross-team collaboration, I am excited
                                        to contribute to Industrus's mission of
                                        re-imagining engineering.
                                    </p>

                                    <p className='left-justify mb-3'>
                                        At Employrite, I upheld the highest
                                        standards of ethical conduct and
                                        accountability (3.1) by processing
                                        sensitive background screening
                                        applications with &lt;1% error rates.
                                        This attention to detail reinforced
                                        trust with clients and stakeholders.
                                    </p>

                                    <p className='left-justify mb-3'>
                                        At Advanced Navigation, I demonstrated
                                        communication and performance management
                                        (3.2, 3.5) by coordinating the company's
                                        transition from MATLAB to Python.
                                        Through documentation, walkthroughs, and
                                        feedback sessions, I improved tooling
                                        maintainability and achieved a 20×
                                        increase in CI/CD throughput, showing
                                        both technical impact and
                                        self-direction.
                                    </p>

                                    <p className='left-justify mb-3'>
                                        I thrive in creative and innovative
                                        environments (3.3). During AuslanLive, I
                                        co-developed a neural network to
                                        translate Australian Sign Language into
                                        text, contributing to a second-place
                                        award in the community choice category.
                                        Similarly, at Veremark, I built a
                                        Pytest-based testing framework with YAML
                                        configuration and PDF reporting, making
                                        results accessible to non-technical
                                        users and improving information
                                        management (3.4) across teams.
                                    </p>

                                    <p className='left-justify mb-3'>
                                        Finally, I have demonstrated teamwork
                                        and leadership (3.6) in the Psithurism
                                        iOS Industry Studio, where I led a group
                                        of three to deliver Apple Vision Pro and
                                        Apple Watch applications on time and to
                                        a high standard.
                                    </p>

                                    <p className='left-justify mb-3'>
                                        I would welcome the opportunity to
                                        discuss how my skills and experience can
                                        support Industrus Engineering's diverse
                                        and innovative projects. Thank you for
                                        considering my application.
                                    </p>

                                    <div className='mt-4'>
                                        <p className='left-justify mb-1'>
                                            <strong>Sincerely,</strong>
                                        </p>
                                        <p className='left-justify mb-1'>
                                            Daniel Braithwaite
                                        </p>
                                        <p className='left-justify'>
                                            Bachelor of Software Engineering
                                            (Honours)
                                        </p>
                                        <p className='left-justify'>
                                            University of Technology Sydney
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className='text-center mt-3'>
                        <a
                            href='/CoverLetter.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-secondary'
                        >
                            📧 Download Cover Letter PDF
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

const Portfolio41055 = () => (
    <div className='App'>
        <Landing41055 />
        <section>
            <PersonalStatement41055 />
        </section>
        <section>
            <Resume41055 />
        </section>
        <section>
            <Reflections41055 />
        </section>
        <section>
            <CoverLetter41055 />
        </section>
    </div>
);

export default Portfolio41055;
