document.addEventListener('DOMContentLoaded', () => {
    fetchFileList();
    setupLinkHandler();
});

function fetchFileList() {
    fetch('/api/files')
        .then(response => response.json())
        .then(files => {
            const fileList = document.getElementById('file-list');
            fileList.innerHTML = '';
            files.forEach(file => {
                const li = document.createElement('li');
                li.textContent = file.replace(/\.md$/, '');
                li.className = 'cursor-pointer hover:text-gray-300';
                li.onclick = () => loadMarkdownFile(file);
                fileList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching file list:', error));
}

function setupLinkHandler() {
    document.getElementById('markdown-content').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            if (href.startsWith('http')) {
                window.open(href, '_blank');
            } else if (href.startsWith('#')) {
                const targetId = href.substring(1);
                const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                const targetHeader = Array.from(headers).find(header => header.id === decodeURIComponent(targetId));
                console.log(targetId, headers, targetHeader);
                if (targetHeader) {
                    targetHeader.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Handle other internal links here if needed
                console.log('Internal link clicked:', href);
            }
        }
    });
} function loadMarkdownFile(filename) {
    fetch(`/api/file/${filename}`)
        .then(response => response.text())
        .then(markdown => {
            document.getElementById('doc-title').textContent = filename;
            if (typeof marked === 'function') {
                document.getElementById('markdown-content').innerHTML = marked(markdown);
            } else if (typeof marked === 'object' && typeof marked.parse === 'function') {
                document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
            } else {
                console.error('Marked library not found or not initialized properly');
                document.getElementById('markdown-content').textContent = markdown;
            }
        })
        .catch(error => console.error('Error loading markdown file:', error));
}