
// Initialize experience and education counters
let experienceCount = 0;
let educationCount = 0;

// Helper function to count words in text
function countWords(text) {
    if (!text) return 0;
    return text.split(/\s+/).filter(word => word.length > 0).length;
}

// Initialize the form with one experience and one education entry
document.addEventListener('DOMContentLoaded', function() {
    addExperience();
    addEducation();
});

// Add Experience Entry
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const id = experienceCount++;
    
    const html = `
        <div class="experience-item" id="experience-${id}">
            <button type="button" class="remove-btn" onclick="removeExperience(${id})">Remove</button>
            <div class="form-group">
                <label for="expTitle-${id}">Job Title *</label>
                <input type="text" id="expTitle-${id}" placeholder="Software Engineer" required>
            </div>
            <div class="form-group">
                <label for="expCompany-${id}">Company *</label>
                <input type="text" id="expCompany-${id}" placeholder="Tech Corp" required>
            </div>
            <div class="form-group">
                <label for="expLocation-${id}">Location</label>
                <input type="text" id="expLocation-${id}" placeholder="San Francisco, CA">
            </div>
            <div class="form-group">
                <label for="expStart-${id}">Start Date *</label>
                <input type="month" id="expStart-${id}" required>
            </div>
            <div class="form-group">
                <label for="expEnd-${id}">End Date (Leave empty if current)</label>
                <input type="month" id="expEnd-${id}">
            </div>
            <div class="form-group">
                <label for="expDesc-${id}">Description *</label>
                <textarea id="expDesc-${id}" rows="3" placeholder="Describe your responsibilities and achievements..." required></textarea>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', html);
}

// Remove Experience Entry
function removeExperience(id) {
    const element = document.getElementById(`experience-${id}`);
    if (element) {
        element.remove();
    }
}

// Add Education Entry
function addEducation() {
    const container = document.getElementById('educationContainer');
    const id = educationCount++;
    
    const html = `
        <div class="education-item" id="education-${id}">
            <button type="button" class="remove-btn" onclick="removeEducation(${id})">Remove</button>
            <div class="form-group">
                <label for="eduDegree-${id}">Degree *</label>
                <input type="text" id="eduDegree-${id}" placeholder="Bachelor of Science in Computer Science" required>
            </div>
            <div class="form-group">
                <label for="eduSchool-${id}">School/University *</label>
                <input type="text" id="eduSchool-${id}" placeholder="University of Technology" required>
            </div>
            <div class="form-group">
                <label for="eduLocation-${id}">Location</label>
                <input type="text" id="eduLocation-${id}" placeholder="Boston, MA">
            </div>
            <div class="form-group">
                <label for="eduGrad-${id}">Graduation Date *</label>
                <input type="month" id="eduGrad-${id}" required>
            </div>
            <div class="form-group">
                <label for="eduGPA-${id}">GPA (Optional)</label>
                <input type="text" id="eduGPA-${id}" placeholder="3.8/4.0">
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', html);
}

// Remove Education Entry
function removeEducation(id) {
    const element = document.getElementById(`education-${id}`);
    if (element) {
        element.remove();
    }
}

// Collect Resume Data
function collectResumeData() {
    const data = {
        personalInfo: {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            linkedin: document.getElementById('linkedin').value,
            website: document.getElementById('website').value
        },
        summary: document.getElementById('summary').value,
        experience: [],
        education: [],
        skills: document.getElementById('skills').value.split(',').map(s => s.trim()).filter(s => s)
    };
    
    // Collect experience entries
    for (let i = 0; i < experienceCount; i++) {
        const titleEl = document.getElementById(`expTitle-${i}`);
        if (titleEl && titleEl.closest('.experience-item')) {
            const startDate = document.getElementById(`expStart-${i}`).value;
            const endDate = document.getElementById(`expEnd-${i}`).value;
            
            data.experience.push({
                title: titleEl.value,
                company: document.getElementById(`expCompany-${i}`).value,
                location: document.getElementById(`expLocation-${i}`).value,
                startDate: startDate,
                endDate: endDate || 'Present',
                description: document.getElementById(`expDesc-${i}`).value
            });
        }
    }
    
    // Collect education entries
    for (let i = 0; i < educationCount; i++) {
        const degreeEl = document.getElementById(`eduDegree-${i}`);
        if (degreeEl && degreeEl.closest('.education-item')) {
            data.education.push({
                degree: degreeEl.value,
                school: document.getElementById(`eduSchool-${i}`).value,
                location: document.getElementById(`eduLocation-${i}`).value,
                graduationDate: document.getElementById(`eduGrad-${i}`).value,
                gpa: document.getElementById(`eduGPA-${i}`).value
            });
        }
    }
    
    return data;
}

// Validate Resume Data
function validateResumeData(data) {
    const errors = [];
    
    if (!data.personalInfo.fullName) errors.push('Full name is required');
    if (!data.personalInfo.email) errors.push('Email is required');
    if (!data.summary) errors.push('Professional summary is required');
    if (data.experience.length === 0) errors.push('At least one work experience is required');
    if (data.education.length === 0) errors.push('At least one education entry is required');
    if (data.skills.length === 0) errors.push('At least one skill is required');
    
    return errors;
}

// Format date for display
function formatDate(dateString) {
    if (dateString === 'Present') return 'Present';
    if (!dateString) return '';
    
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

// Generate Resume Preview
function generateResume() {
    const data = collectResumeData();
    const errors = validateResumeData(data);
    
    if (errors.length > 0) {
        showToast('Please fill in all required fields:\n' + errors.join('\n'), 'error');
        return;
    }
    
    const preview = document.getElementById('resumePreview');
    const previewCard = document.getElementById('previewCard');
    
    let html = `
        <h1>${data.personalInfo.fullName}</h1>
        <div class="contact-info">
            ${data.personalInfo.email ? `<span>📧 ${data.personalInfo.email}</span>` : ''}
            ${data.personalInfo.phone ? `<span>📱 ${data.personalInfo.phone}</span>` : ''}
            ${data.personalInfo.location ? `<span>📍 ${data.personalInfo.location}</span>` : ''}
            ${data.personalInfo.linkedin ? `<span>💼 ${data.personalInfo.linkedin}</span>` : ''}
            ${data.personalInfo.website ? `<span>🌐 ${data.personalInfo.website}</span>` : ''}
        </div>
        
        <h2>Professional Summary</h2>
        <div class="summary">${data.summary}</div>
        
        <h2>Work Experience</h2>
    `;
    
    data.experience.forEach(exp => {
        html += `
            <div class="experience-entry">
                <div class="entry-header">
                    <div>
                        <div class="entry-title">${exp.title}</div>
                        <div class="entry-subtitle">${exp.company}${exp.location ? ` • ${exp.location}` : ''}</div>
                    </div>
                    <div class="entry-date">${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}</div>
                </div>
                <div class="entry-description">${exp.description}</div>
            </div>
        `;
    });
    
    html += '<h2>Education</h2>';
    
    data.education.forEach(edu => {
        html += `
            <div class="education-entry">
                <div class="entry-header">
                    <div>
                        <div class="entry-title">${edu.degree}</div>
                        <div class="entry-subtitle">${edu.school}${edu.location ? ` • ${edu.location}` : ''}</div>
                    </div>
                    <div class="entry-date">${formatDate(edu.graduationDate)}</div>
                </div>
                ${edu.gpa ? `<div class="entry-description">GPA: ${edu.gpa}</div>` : ''}
            </div>
        `;
    });
    
    html += '<h2>Skills</h2><div class="skills-list">';
    
    data.skills.forEach(skill => {
        html += `<span class="skill-tag">${skill}</span>`;
    });
    
    html += '</div>';
    
    preview.innerHTML = html;
    previewCard.style.display = 'block';
    
    // Scroll to preview
    previewCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    showToast('Resume generated successfully!', 'success');
}

// Analyze Resume
function analyzeResume() {
    const data = collectResumeData();
    const errors = validateResumeData(data);
    
    if (errors.length > 0) {
        showToast('Please fill in all required fields before analyzing', 'error');
        return;
    }
    
    const analysis = performAnalysis(data);
    displayAnalysis(analysis);
    
    const analysisCard = document.getElementById('analysisCard');
    analysisCard.style.display = 'block';
    analysisCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    showToast('Resume analysis complete!', 'success');
}

// Perform Resume Analysis
function performAnalysis(data) {
    let score = 0;
    const maxScore = 100;
    const feedback = [];
    const keywords = new Set();
    
    // Personal Info Analysis (20 points)
    let personalScore = 0;
    if (data.personalInfo.fullName) personalScore += 5;
    if (data.personalInfo.email) personalScore += 5;
    if (data.personalInfo.phone) personalScore += 3;
    if (data.personalInfo.location) personalScore += 2;
    if (data.personalInfo.linkedin) personalScore += 3;
    if (data.personalInfo.website) personalScore += 2;
    score += personalScore;
    
    if (personalScore >= 18) {
        feedback.push({ type: 'success', message: 'Excellent contact information coverage' });
    } else if (!data.personalInfo.linkedin) {
        feedback.push({ type: 'warning', message: 'Consider adding your LinkedIn profile' });
    }
    
    // Summary Analysis (15 points)
    const summaryWordCount = countWords(data.summary);
    if (summaryWordCount >= 20 && summaryWordCount <= 60) {
        score += 15;
        feedback.push({ type: 'success', message: 'Professional summary is well-written and concise' });
    } else if (summaryWordCount < 20) {
        score += 8;
        feedback.push({ type: 'warning', message: 'Professional summary could be more detailed (aim for 20-60 words)' });
    } else {
        score += 10;
        feedback.push({ type: 'warning', message: 'Professional summary is too long. Keep it concise (20-60 words)' });
    }
    
    // Experience Analysis (30 points)
    const expCount = data.experience.length;
    if (expCount >= 3) {
        score += 30;
        feedback.push({ type: 'success', message: `Strong work history with ${expCount} experiences` });
    } else if (expCount >= 2) {
        score += 25;
        feedback.push({ type: 'success', message: 'Good work experience coverage' });
    } else {
        score += 15;
        feedback.push({ type: 'info', message: 'Consider adding more work experiences if available' });
    }
    
    // Check for detailed descriptions
    data.experience.forEach(exp => {
        if (exp.description.length < 50) {
            feedback.push({ type: 'warning', message: `Experience at ${exp.company} needs more detailed description` });
        }
        
        // Extract keywords from descriptions
        const words = exp.description.toLowerCase().match(/\b\w+\b/g) || [];
        words.forEach(word => {
            if (word.length > 3) keywords.add(word);
        });
    });
    
    // Education Analysis (15 points)
    if (data.education.length >= 1) {
        score += 15;
        feedback.push({ type: 'success', message: 'Education section is complete' });
    }
    
    if (data.education.some(edu => edu.gpa)) {
        feedback.push({ type: 'success', message: 'Including GPA shows academic achievement' });
    }
    
    // Skills Analysis (20 points)
    const skillCount = data.skills.length;
    if (skillCount >= 8) {
        score += 20;
        feedback.push({ type: 'success', message: `Excellent skill coverage with ${skillCount} skills` });
    } else if (skillCount >= 5) {
        score += 15;
        feedback.push({ type: 'success', message: 'Good variety of skills listed' });
    } else {
        score += 10;
        feedback.push({ type: 'warning', message: 'Consider adding more skills (aim for at least 8)' });
    }
    
    // Add skills to keywords
    data.skills.forEach(skill => {
        keywords.add(skill.toLowerCase());
    });
    
    // Keyword density analysis
    const topKeywords = Array.from(keywords).slice(0, 10);
    
    // Calculate statistics
    const stats = {
        totalWords: countWords(data.summary) + 
                    data.experience.reduce((sum, exp) => sum + countWords(exp.description), 0),
        totalExperience: expCount,
        totalEducation: data.education.length,
        totalSkills: skillCount,
        uniqueKeywords: keywords.size
    };
    
    return {
        score: Math.min(score, maxScore),
        feedback,
        keywords: topKeywords,
        stats
    };
}

// Display Analysis Results
function displayAnalysis(analysis) {
    const container = document.getElementById('analysisResults');
    
    let scoreClass = 'poor';
    let scoreLabel = 'Needs Improvement';
    if (analysis.score >= 90) {
        scoreClass = 'excellent';
        scoreLabel = 'Excellent';
    } else if (analysis.score >= 75) {
        scoreClass = 'good';
        scoreLabel = 'Good';
    } else if (analysis.score >= 60) {
        scoreClass = 'fair';
        scoreLabel = 'Fair';
    }
    
    let html = `
        <div class="analysis-score">
            <div class="score-circle ${scoreClass}">
                ${analysis.score}<span style="font-size: 1.5rem;">/100</span>
                <div style="position: absolute; bottom: -30px; font-size: 1rem; color: var(--text-primary); white-space: nowrap;">${scoreLabel}</div>
            </div>
        </div>
        
        <div class="analysis-section">
            <h3>📊 Statistics</h3>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value">${analysis.stats.totalWords}</div>
                    <div class="stat-label">Total Words</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${analysis.stats.totalExperience}</div>
                    <div class="stat-label">Experiences</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${analysis.stats.totalEducation}</div>
                    <div class="stat-label">Education</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${analysis.stats.totalSkills}</div>
                    <div class="stat-label">Skills</div>
                </div>
            </div>
        </div>
        
        <div class="analysis-section">
            <h3>💡 Feedback & Recommendations</h3>
    `;
    
    analysis.feedback.forEach(item => {
        const icon = item.type === 'success' ? '✅' : item.type === 'warning' ? '⚠️' : 'ℹ️';
        html += `
            <div class="analysis-item ${item.type}">
                <span class="icon">${icon}</span>
                <span>${item.message}</span>
            </div>
        `;
    });
    
    html += `
        </div>
        
        <div class="analysis-section">
            <h3>🔑 Top Keywords Found</h3>
            <div class="keyword-tags">
    `;
    
    analysis.keywords.forEach(keyword => {
        html += `<span class="keyword-tag">${keyword}</span>`;
    });
    
    html += `
            </div>
            <p style="margin-top: 15px; color: var(--text-secondary); font-size: 0.9rem;">
                Keywords help your resume get past Applicant Tracking Systems (ATS) and catch recruiters' attention.
            </p>
        </div>
    `;
    
    container.innerHTML = html;
}

// Export to PDF (using print functionality)
function exportToPDF() {
    const resumePreview = document.getElementById('resumePreview');
    if (!resumePreview || resumePreview.innerHTML === '') {
        showToast('Please generate your resume first', 'error');
        return;
    }
    
    // Create a new window with just the resume content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Resume - ${document.getElementById('fullName').value || 'My Resume'}</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px;
                    color: #1f2937;
                    line-height: 1.6;
                }
                h1 {
                    color: #4f46e5;
                    font-size: 2.2rem;
                    margin-bottom: 10px;
                }
                h2 {
                    color: #4f46e5;
                    font-size: 1.4rem;
                    margin-top: 25px;
                    margin-bottom: 15px;
                    border-bottom: 2px solid #4f46e5;
                    padding-bottom: 5px;
                }
                .contact-info {
                    color: #6b7280;
                    margin-bottom: 25px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    font-size: 0.9rem;
                }
                .summary {
                    line-height: 1.7;
                    margin-bottom: 20px;
                }
                .experience-entry, .education-entry {
                    margin-bottom: 20px;
                }
                .entry-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 8px;
                }
                .entry-title {
                    font-weight: 700;
                }
                .entry-subtitle {
                    color: #6b7280;
                    font-style: italic;
                }
                .entry-date {
                    color: #6b7280;
                    font-size: 0.9rem;
                }
                .entry-description {
                    line-height: 1.6;
                    margin-top: 8px;
                }
                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .skill-tag {
                    background: #4f46e5;
                    color: white;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 0.85rem;
                }
                @media print {
                    body {
                        padding: 20px;
                    }
                }
            </style>
        </head>
        <body>
            ${resumePreview.innerHTML}
        </body>
        </html>
    `);
    printWindow.document.close();
    
    // Wait for content to load then print
    setTimeout(() => {
        printWindow.print();
    }, 250);
    
    showToast('Opening print dialog for PDF export...', 'success');
}

// Export to JSON
function exportToJSON() {
    const data = collectResumeData();
    const errors = validateResumeData(data);
    
    if (errors.length > 0) {
        showToast('Please fill in all required fields before exporting', 'error');
        return;
    }
    
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    // Sanitize filename: remove special characters, replace spaces with hyphens
    const sanitizedName = data.personalInfo.fullName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase();
    const finalName = sanitizedName || 'resume';
    a.download = `resume-${finalName}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Resume data exported as JSON!', 'success');
}

// Clear Form
function clearForm() {
    if (!confirm('Are you sure you want to clear all form data?')) {
        return;
    }
    
    // Clear all input fields
    document.querySelectorAll('input, textarea').forEach(input => {
        input.value = '';
    });
    
    // Clear experience and education containers
    document.getElementById('experienceContainer').innerHTML = '';
    document.getElementById('educationContainer').innerHTML = '';
    
    // Reset counters
    experienceCount = 0;
    educationCount = 0;
    
    // Add initial entries
    addExperience();
    addEducation();
    
    // Hide preview and analysis
    document.getElementById('previewCard').style.display = 'none';
    document.getElementById('analysisCard').style.display = 'none';
    
    showToast('Form cleared successfully', 'success');
}

// Show Toast Notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
