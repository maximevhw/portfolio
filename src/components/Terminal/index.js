import { React, useEffect, useState } from 'react';
import { ReactTerminal } from "react-terminal";
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { isMobile } from "react-device-detect";
import "./Terminal.css";

function Terminal() {
    if (isMobile) return null;
    
    const { colorMode } = useColorMode();
    const [showCatPopup, setShowCatPopup] = useState(false);
    const welcomeMessage = (
        <span>
            Type "help" for all available commands. <br />
        </span>
    );
    const whoami = (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><span style={{ color: 'blue' }}>•</span> Name: Maxime Vanhoorneweder</li>
            <li><span style={{ color: 'blue' }}>•</span> Profession: Cybersecurity Graduate</li>
            <li><span style={{ color: 'blue' }}>•</span> Interests: Pentesting and SOC operations</li>
            <li><span style={{ color: 'blue' }}>•</span> Hobbies: Cars</li>
        </ul>
    );

    function CatPopup() {
        setShowCatPopup(true);
        return (
            <span>Here's a cat for you!</span>
        );
    }

    // Default commands that can be extended
    const defaultCommands = {
        whoami: whoami,
        cat: CatPopup,
        help: "Available commands: whoami, help, clear, ls, cat, echo",
        ls: "tutorial.js  index.js  blog.js  secret.js",
        echo: (args) => {
            // Handle different argument formats that react-terminal might pass
            if (typeof args === 'string') {
                return args;
            } else if (Array.isArray(args)) {
                return args.join(' ');
            } else if (args && typeof args === 'object') {
                // If args is an object with the command arguments
                return Object.values(args).join(' ');
            }
            return '';
        },
    };

    // Theme configurations
    const lightTheme = {
        themeBGColor: "#e6e6e6",
        themeToolbarColor: "#595959",
        themeColor: "#000000",
        themePromptColor: "#000000"
    };

    const darkTheme = {
        themeBGColor: "#000000",
        themeToolbarColor: "#1a1a1a",
        themeColor: "#00ff00",
        themePromptColor: "#00ff00"
    };

    const currentTheme = colorMode === 'dark' ? darkTheme : lightTheme;

    return (
        
        <div className="terminal-container">
            <h2>Terminal</h2>
            <div className="terminal-wrapper">
                <BrowserOnly fallback={<div>Loading terminal...</div>}>
                    {() => (
                        <ReactTerminal
                            welcomeMessage={welcomeMessage}
                            commands={defaultCommands}
                            prompt="maxime@portfolio:~$"
                            showControlBar={true}
                            themes={{
                                "custom-theme": currentTheme
                            }}
                            theme="custom-theme"
                        />
                    )}
                </BrowserOnly>
            </div>
            
            {showCatPopup && (
                <div 
                    onClick={() => setShowCatPopup(false)}
                    className="cat-popup-overlay">
                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className="cat-popup-modal">
                        <button
                            onClick={() => setShowCatPopup(false)}
                            className="cat-popup-close-button"
                        >
                            ×
                        </button>
                        <img 
                            src={`https://cataas.com/cat?${Date.now()}`}
                            alt="Random Cat" 
                            className="cat-popup-image"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Terminal;
