import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const MyComponent = () => {
    const [output, setOutput] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleFetch = async (input) => {
        try {
            const response = await fetch('https://www.buildai.space/app/dae3da25-888e-448f-b15c-5a20ca4ca961', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input })
            });
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const inputContainer = doc.querySelector('.app-input-container');
            const generateButton = doc.querySelector('.generate-button');
            const outputContent = doc.querySelector('#output-content');
            ReactDOM.render(inputContainer, document.querySelector('.app-input-container'), () => {
                generateButton.click();
                setOutput(outputContent.innerText);
            });
        } catch (error) {
            console.log(error);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        handleFetch(inputValue);
    }

    useEffect(() => {
        handleFetch('');
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <div className="app-input-container"></div>
            <div>here output comes{output}</div>
        </div>
    );
}

export default MyComponent;
