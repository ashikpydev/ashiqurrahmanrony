document.addEventListener('DOMContentLoaded', function() {
    const projectDetails = {
        'health': {
            title: 'National Health Surveillance System',
            content: `
                <div class="space-y-6">
                    <div class="bg-blue-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold mb-3">Project Overview</h3>
                        <p class="text-gray-700">Processed and cleaned one of Bangladesh's largest health datasets with 35,000+ variables from 5,000+ household surveys, contributing to the development of a comprehensive national health surveillance system.</p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">📊 Dataset Scale</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• 35,000+ variables processed</li>
                                <li>• 5,000+ household surveys</li>
                                <li>• Multiple data collection rounds</li>
                                <li>• Complex nested data structures</li>
                            </ul>
                        </div>
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">🛠️ Tools Used</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• Stata for data processing</li>
                                <li>• Advanced data cleaning techniques</li>
                                <li>• Quality control protocols</li>
                                <li>• Statistical validation methods</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-green-50 p-6 rounded-lg">
                        <h4 class="font-semibold mb-3">🎯 Impact & Results</h4>
                        <ul class="space-y-2 text-gray-700">
                            <li>• Enabled real-time health monitoring across Bangladesh</li>
                            <li>• Improved data quality through systematic cleaning procedures</li>
                            <li>• Reduced data processing time for future surveys by 40%</li>
                            <li>• Contributed to evidence-based health policy making</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'surveys': {
            title: 'International Research Survey Forms',
            content: `
                <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold mb-3">Project Overview</h3>
                        <p class="text-gray-700">Developed over 100 digital survey forms for prestigious international research institutions, ensuring high-quality data collection across diverse research projects.</p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-4">
                        <div class="bg-white border rounded-lg p-4 text-center">
                            <div class="text-2xl mb-2">🏛️</div>
                            <div class="font-semibold">World Bank</div>
                            <div class="text-sm text-gray-600">Development Projects</div>
                        </div>
                        <div class="bg-white border rounded-lg p-4 text-center">
                            <div class="text-2xl mb-2">🎓</div>
                            <div class="font-semibold">Oxford University</div>
                            <div class="text-sm text-gray-600">Academic Research</div>
                        </div>
                        <div class="bg-white border rounded-lg p-4 text-center">
                            <div class="text-2xl mb-2">📚</div>
                            <div class="font-semibold">LSE</div>
                            <div class="text-sm text-gray-600">Social Studies</div>
                        </div>
                    </div>
                    <div class="bg-yellow-50 p-6 rounded-lg">
                        <h4 class="font-semibold mb-3">🎯 Achievements</h4>
                        <ul class="space-y-2 text-gray-700">
                            <li>• 100+ survey forms successfully deployed</li>
                            <li>• Zero critical errors in production surveys</li>
                            <li>• Reduced survey development time by 30%</li>
                            <li>• Improved data quality through validation rules</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'dashboards': {
            title: 'Real-time Data Monitoring Dashboards',
            content: `
                <div class="space-y-6">
                    <div class="bg-orange-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold mb-3">Project Overview</h3>
                        <p class="text-gray-700">Designed and implemented over 30 live dashboards integrated with SurveyCTO APIs for real-time monitoring of data quality in large-scale surveys.</p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">📊 Dashboard Features</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• Real-time data visualization</li>
                                <li>• Automated data quality checks</li>
                                <li>• Interactive user interfaces</li>
                                <li>• Customizable reporting tools</li>
                            </ul>
                        </div>
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">🛠️ Technologies</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• Power BI for visualization</li>
                                <li>• SurveyCTO API integration</li>
                                <li>• Python for data processing</li>
                                <li>• SQL for data management</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-red-50 p-6 rounded-lg">
                        <h4 class="font-semibold mb-3">🎯 Impact</h4>
                        <ul class="space-y-2 text-gray-700">
                            <li>• Enhanced data monitoring efficiency by 50%</li>
                            <li>• Reduced error detection time significantly</li>
                            <li>• Supported real-time decision-making for research teams</li>
                            <li>• Improved stakeholder reporting accuracy</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'transcription': {
            title: 'Bangla Audio Transcription App',
            content: `
                <div class="space-y-6">
                    <div class="bg-purple-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold mb-3">Project Overview</h3>
                        <p class="text-gray-700">Developed an AI-powered web application using Gemini 2.5 Pro to transcribe Bangla audio into English reports, streamlining qualitative research processes.</p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">🤖 AI Integration</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• Gemini 2.5 Pro for NLP</li>
                                <li>• Speech-to-text conversion</li>
                                <li>• Language translation capabilities</li>
                                <li>• Automated report generation</li>
                            </ul>
                        </div>
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">🛠️ Development Stack</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• Python Flask for backend</li>
                                <li>• HTML/CSS/JavaScript for frontend</li>
                                <li>• API for AI model integration</li>
                                <li>• Cloud hosting for scalability</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-pink-50 p-6 rounded-lg">
                        <h4 class="font-semibold mb-3">🎯 Outcomes</h4>
                        <ul class="space-y-2 text-gray-700">
                            <li>• Reduced transcription time by 60%</li>
                            <li>• Achieved 95% transcription accuracy</li>
                            <li>• Enabled multilingual research outputs</li>
                            <li>• Streamlined qualitative data analysis</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'mental-health': {
            title: 'Mental Health Trends Research',
            content: `
                <div class="space-y-6">
                    <div class="bg-indigo-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold mb-3">Project Overview</h3>
                        <p class="text-gray-700">Conducted a longitudinal analysis of mental health trends in Bangladesh using three waves of BDHS data (2014-2022) to identify key correlates and trends.</p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">📊 Methodology</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• Chi-square tests for associations</li>
                                <li>• Logistic regression modeling</li>
                                <li>• Time-series analysis</li>
                                <li>• Data cleaning and validation</li>
                            </ul>
                        </div>
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">🛠️ Tools Used</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• R for statistical analysis</li>
                                <li>• Stata for data processing</li>
                                <li>• Excel for initial exploration</li>
                                <li>• QGIS for spatial visualization</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-cyan-50 p-6 rounded-lg">
                        <h4 class="font-semibold mb-3">🎯 Research Impact</h4>
                        <ul class="space-y-2 text-gray-700">
                            <li>• Identified key mental health correlates</li>
                            <li>• Manuscript in preparation for journal</li>
                            <li>• Informed public health policy discussions</li>
                            <li>• Contributed to national health strategies</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'stata-packages': {
            title: 'Custom STATA Packages for Automation',
            content: `
                <div class="space-y-6">
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold mb-3">Project Overview</h3>
                        <p class="text-gray-700">Developed custom STATA packages to automate survey data cleaning processes, significantly improving efficiency in large-scale research projects.</p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">⚙️ Package Features</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• Automated outlier detection</li>
                                <li>• Missing data imputation</li>
                                <li>• Data consistency checks</li>
                                <li>• Batch processing capabilities</li>
                            </ul>
                        </div>
                        <div class="bg-white border rounded-lg p-6">
                            <h4 class="font-semibold mb-3">🛠️ Development</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li>• STATA programming</li>
                                <li>• Modular code design</li>
                                <li>• User-friendly documentation</li>
                                <li>• Integration with existing workflows</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-green-50 p-6 rounded-lg">
                        <h4 class="font-semibold mb-3">🎯 Impact</h4>
                        <ul class="space-y-2 text-gray-700">
                            <li>• Improved data cleaning efficiency by 25%</li>
                            <li>• Reduced manual processing errors</li>
                            <li>• Adopted by multiple research teams</li>
                            <li>• Enhanced reproducibility in research</li>
                        </ul>
                    </div>
                </div>
            `
        }
    };

    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const projectButtons = document.querySelectorAll('.project-btn');

    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectDetails[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalContent.innerHTML = project.content;
                projectModal.classList.remove('hidden');
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            projectModal.classList.add('hidden');
        });
    }

    projectModal.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            projectModal.classList.add('hidden');
        }
    });
});