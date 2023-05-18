import React from 'react'
import resume from '../Resume/Aryan Shinde CV.pdf';

function Footer() {
    return (
        <div>
            <div id="footer">
                <div id="footer_grid">
                    <div id="footer_pages">
                        <div id="footer_pages_heading">
                            <h1>Pages</h1>
                        </div>
                        <div id="footer_pages_links">
                            <div className="link">
                                <a href="/">Home</a>
                            </div>
                            <div className="link">
                                <a href={resume} download>Get CV</a>
                            </div>
                        </div>
                    </div>
                    <div id="footer_projects">
                        <div id="footer_projects_heading">
                            <h1>Projects</h1>
                        </div>
                        <div id="footer_projects_links">
                            <div className="link">
                                <a href="https://devoutlook.netlify.app" target="_blank" rel="noopener noreferrer">Dev Outlooks</a>
                            </div>
                            <div className="link">
                                <a href="https://hetref.github.io/csfurniture" target="_blank" rel="noopener noreferrer">Classic Furniture</a>
                            </div>
                            <div className="link">
                                <a href="https://hetref.github.io/yourtodo" target="_blank" rel="noopener noreferrer">Todo</a>
                            </div>
                            <div className="link">
                                <a href="https://hetref.github.io/codinguides" target="_blank" rel="noopener noreferrer">Coding Guidez</a>
                            </div>
                            <div className="link">
                                <a href="https://hetref.github.io/weatherapp" target="_blank" rel="noopener noreferrer">Weather Forecaster</a>
                            </div>
                            <div className="link">
                                <a href="https://hetref.github.io/textutils" target="_blank" rel="noopener noreferrer">Textutils</a>
                            </div>
                            <div className="link">
                                <a href="https://hetref.github.io/airline" target="_blank" rel="noopener noreferrer">Airlines</a>
                            </div>
                        </div>
                    </div>
                    <div id="footer_certificates">
                        <div id="footer_certificates_heading">
                            <h1>Certificates</h1>
                        </div>
                        <div id="footer_certificates_links">
                            <div className="link">
                                <a href="#footer">Web Development (Udemy)</a>
                            </div>
                            <div className="link">
                                <a href="#footer">Web Design (Udemy)</a>
                            </div>
                            <div className="link">
                                <a href="#footer">App Development (Udemy)</a>
                            </div>
                            <div className="link">
                                <a href="#footer">IOT Development (Skillinabox)</a>
                            </div>
                            <div className="link">
                                <a href="#footer">Progressive Web App (Udemy)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer