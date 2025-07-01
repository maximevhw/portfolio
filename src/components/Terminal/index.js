import React from "react";
import { ReactTerminal } from "react-terminal";
import { useColorMode } from '@docusaurus/theme-common';
import "./Terminal.css";

function Terminal() {
    const { colorMode } = useColorMode();
    const welcomeMessage = (
        <span>
            Type "help" for all available commands. <br />
        </span>
    );
    const whoami = (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><span style={{ color: 'blue' }}>•</span> Name: Maxime Vanhoorneweder</li>
            <li><span style={{ color: 'blue' }}>•</span> Profession: Cybersecurity Graduate</li>
            <li><span style={{ color: 'blue' }}>•</span> Intrests: Pentesting and SOC operations</li>
            <li><span style={{ color: 'blue' }}>•</span> Hobbies: Cars</li>
        </ul>
    );

    const cat = (
        <span>
            Here's a cat for you! <br />
            <img src="https://cataas.com/cat" alt="cat" style={{ maxWidth: '100%', height: 'auto' }} />
        </span>
    );

    // Default commands that can be extended
    const defaultCommands = {
        whoami: whoami,
        help: "Available commands: whoami, help, clear, ls",
        ls: "tutorial.js  index.js  blog.js  secret.js",
        echo: (args) => args.join(' '),
    };

    // Theme configurations
    const lightTheme = {
        themeBGColor: "#f8f8f8",
        themeToolbarColor: "#e8e8e8",
        themeColor: "#333333",
        themePromptColor: "#666666"
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
            </div>
        </div>
    );
}

export default Terminal;
