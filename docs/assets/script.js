// script.js
document.getElementById('search-btn').addEventListener('click', async () => {
    const title = document.getElementById('job-title').value;
    const location = document.getElementById('location').value;

    const response = await fetch(`http://localhost:5500/api/jobs?title=${title}&location=${location}`);
    const jobs = await response.json();

    const results = document.getElementById('results');
    results.innerHTML = jobs.map(job => `
        <div class="job">
            <h2>${job.title}</h2>
            <p>${job.location}</p>
            <p>${job.description}</p>
        </div>
    `).join('');
});
