import React from 'react';

export type ThemeColor = 'red' | 'blue' | 'green' | 'purple' | 'orange' | 'cyan';

export interface SkillItem {
  name: string;
  level?: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
}

export interface SampleWorkItem {
  id: string;
  title: string;
  type: 'Bug Report' | 'Test Plan' | 'Automation Script';
  description: string;
  previewContent: string | React.ReactNode;
}

export interface SectionProps {
  themeColor: ThemeColor;
}