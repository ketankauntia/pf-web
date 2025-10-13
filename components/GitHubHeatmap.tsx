'use client';

import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubHeatmap() {
    const [selectedYear, setSelectedYear] = useState<number | 'last12months'>(new Date().getFullYear());
    const currentYear = new Date().getFullYear();
    const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];

    return (
        <div className="github-heatmap-section mt-20">
            <div className="heatmap-container border border-gray-800 rounded-lg p-8">
                <GitHubCalendar 
                    username="ketankauntia"
                    colorScheme="dark"
                    blockSize={12}
                    fontSize={14}
                    year={selectedYear === 'last12months' ? undefined : selectedYear}
                />
                
                <div className="year-filters flex gap-3 mt-6 justify-center">
                    <button
                        onClick={() => setSelectedYear('last12months')}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                            selectedYear === 'last12months' 
                                ? 'border-white bg-white text-black' 
                                : 'border-gray-700 hover:border-gray-500'
                        }`}
                    >
                        past 12 months
                    </button>
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-4 py-2 rounded-lg border transition-colors ${
                                selectedYear === year 
                                    ? 'border-white bg-white text-black' 
                                    : 'border-gray-700 hover:border-gray-500'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

