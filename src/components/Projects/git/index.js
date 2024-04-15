import React, { useEffect, useState } from 'react';
import { marked } from 'marked'; // Correct import

const Git = () => {
    const [readmeContent, setReadmeContent] = useState('Loading...');

    useEffect(() => {
        const owner = 'ShajaatAli'; // Replace with your GitHub username
        const repo = 'Supplementary-Course-Analyzer'; // Replace with your repository name

        fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
            headers: { 'Accept': 'application/vnd.github.VERSION.raw' }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            setReadmeContent(marked(data));
        })
        .catch(error => {
            console.error('Failed to fetch README:', error);
            setReadmeContent('Failed to load README');
        });
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: readmeContent }} />;
}

export default Git;
