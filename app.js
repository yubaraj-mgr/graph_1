const fs = require('fs');
const execSync = require('child_process').execSync;

for (let i = 1; i <= 365; i++) {
    for (let j = 0; j < Math.floor(Math.random() * 10) + 1; j++) {
        const d = `${i} days ago`;
        fs.appendFileSync('file.txt', d + '\n', 'utf-8');
        
        // Simulate git add and commit (Note: This won't work in a real Git repository)
        execSync('git add .');
        execSync(`git commit --date="${d}" -m "commit"`);
    }
}

// Simulate git push (Note: This won't work in a real Git repository)
execSync('git push -u origin main');
