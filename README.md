# Portfolio Website

The entire readme is generated via gpt, incase you'r wondering ( too lazy. thats it. )

## 📁 Project Structure

```
pf-web/
├── app/                    # Next.js 13+ App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ExperienceItem.tsx # Individual experience item
│   ├── Experience.tsx     # Experience section
│   ├── Footer.tsx         # Footer component
│   ├── Intro.tsx          # Introduction section
│   ├── Projects.tsx       # Projects section
│   └── Skills.tsx         # Skills section
├── data/                  # JSON data files
│   ├── personal.json      # Personal info, contact, resume
│   ├── experience.json    # Work experience
│   ├── projects.json      # Projects showcase
│   ├── skills.json        # Technical skills
│   ├── education.json     # Educational background
│   ├── socials.json       # Social media links
│   ├── coding-profiles.json # Coding platform profiles
│   └── footer.json        # Footer information
├── lib/                   # Utility functions
│   └── data.ts            # Data loading functions
├── types/                 # TypeScript type definitions
│   └── portfolio.ts       # Portfolio data types
└── public/                # Static assets
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

## 📝 Data Management

### Why This Structure?

- **Separation of Concerns**: Data is separate from components
- **Easy Updates**: Update JSON files without touching code
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Maintainability**: Organized data files by domain

### How to Update Data

1. **Personal Information**: Edit `data/personal.json`
2. **Experience**: Edit `data/experience.json`
3. **Projects**: Edit `data/projects.json`
4. **Skills**: Edit `data/skills.json`
5. **Education**: Edit `data/education.json`
6. **Social Links**: Edit `data/socials.json`
7. **Coding Profiles**: Edit `data/coding-profiles.json`

### Using Data in Components

```tsx
import { getPersonalData, getExperienceData } from '@/lib/data';
import { PersonalData, Experience } from '@/types/portfolio';

export default function MyComponent() {
  const personalData: PersonalData = getPersonalData();
  const experiences: Experience[] = getExperienceData();
  
  return (
    <div>
      <h1>{personalData.intro.name}</h1>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h3>{exp.title} at {exp.company}</h3>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## 🏗️ Overview

### Component Naming
- Use **PascalCase** for component files (e.g., `MyComponent.tsx`)
- Use **camelCase** for utility files (e.g., `dataHelpers.ts`)

### Data Organization
- Keep related data in separate JSON files
- Use descriptive names for data fields
- Maintain consistent data structure across similar items

### Type Safety
- Define TypeScript interfaces in `types/portfolio.ts`
- Import and use types in components
- Update types when adding new data fields

### File Organization
- **Components**: Reusable UI components
- **Data**: JSON files with content
- **Lib**: Utility functions and helpers
- **Types**: TypeScript type definitions
- **Public**: Static assets (images, icons)

## 📋 Adding New Data

1. **Create JSON file** in `data/` directory
2. **Add data loading function** in `lib/data.ts`
3. **Define TypeScript types** in `types/portfolio.ts`
4. **Use in components** with proper typing

