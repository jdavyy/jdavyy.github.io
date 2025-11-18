
// lib/data.ts
// This file stores static data for the portfolio pages

import { GitBranch, Zap, Cpu, Aperture, Code, Plane, Target } from 'lucide-react'

export interface Project {
    id: number;
    title: string;
    tags: string[];
    icon: React.ReactNode;
    description: string;
    details: string;
    link: string;
}

export const PROJECTS_DATA: Project[] = [
    { 
        id: 1, 
        title: 'QueryChain RAG Pipeline', 
        tags: ['AI', 'RAG', 'Python', 'ChromaDB', 'Azure GPT-4o'], 
        icon: <GitBranch className="w-6 h-6" />, 
        description: 'Multi-stage retrieval pipeline specializing in Excel metadata extraction and contextual awareness.',
        details: 'Achieved 40% higher precision on complex, multi-hop queries compared to standard RAG implementations.',
        link: '#querychain'
    },
    { 
        id: 2, 
        title: 'HiddenHeaderFinalRes', 
        tags: ['Full-Stack', 'TypeScript', 'Node.js', 'Vercel Edge'], 
        icon: <Zap className="w-6 h-6" />, 
        description: 'A performant serverless function framework leveraging edge computing for advanced routing and data manipulation.',
        details: 'Designed for minimal cold starts and low latency API interactions.',
        link: '#hiddenheader'
    },
    { 
        id: 3, 
        title: 'Garmin Wellness AI Dashboard', 
        tags: ['Data Eng', 'ML', 'Python', 'Recharts'], 
        icon: <Cpu className="w-6 h-6" />, 
        description: 'AI-driven insights on physical progression, predicting VO2 Max and optimizing training loads.',
        details: 'Built predictive model using Scikit-learn to correlate training metrics with recovery data.',
        link: '#garmin'
    },
    { 
        id: 4, 
        title: 'OpenGL 3D Graphics Gallery', 
        tags: ['Graphics', 'C++', 'OpenGL', 'Digital Media'], 
        icon: <Aperture className="w-6 h-6" />, 
        description: 'Gallery showcasing keyframe animation (carousel horse) and texture mapping projects from CS coursework.',
        details: 'Implemented custom lighting models and coordinate transformations using C++ and GLSL.',
        link: '#opengl'
    },
];

export interface Stat {
    value: string;
    label: string;
    icon: React.ReactNode;
}

export const ABOUT_STATS: Stat[] = [
    { value: "98.5%", label: "Code Quality Score", icon: <Code /> },
    { value: "21k", label: "GitHub Commits", icon: <GitCommit /> },
    { value: "55", label: "VO2 Max (ml/kg/min)", icon: <Zap /> },
    { value: "7", label: "Countries Traveled", icon: <Plane /> },
];
