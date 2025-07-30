import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import Header from '@/lib/Header';
import socials from '@/data/socials.json';

const GitHubContributions: React.FC = () => {
  // Find GitHub URL from socials array
  const githubSocial = socials.socials.find(social => social.name === "GitHub");
  // Extract username from URL and provide a fallback
  const githubUsername = githubSocial?.url.split('/').pop() || "ketankauntia";
  
  // Using built-in dark theme

  return (
    <section className="github-calendar-section mb-12">
      <Header title="GitHub Contributions" />
      <div className="github-calendar-container mt-4">
        <GitHubCalendar 
          username={githubUsername}
          colorScheme="dark"
          blockSize={8}
          blockMargin={2}
          fontSize={12}
          year="last"
          hideColorLegend={true}
          hideMonthLabels={true}
          hideTotalCount={false}
          style={{
            maxWidth: '100%',
            margin: '0 auto',
          }}
        />
      </div>
      <div className="text-center text-sm text-gray-500 mt-2">
        <p>See more on <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a></p>
      </div>
    </section>
  );
};

export default GitHubContributions;