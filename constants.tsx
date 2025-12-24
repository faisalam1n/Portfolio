import React from 'react';
import {
  CheckCircle2,
  Code2,
  Database,
  Terminal,
  Bug,
  FileText,
  Layers,
  Workflow,
  Cpu,
  Search
} from 'lucide-react';
import { SkillCategory, ExperienceItem, SampleWorkItem } from './types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Manual Testing",
    skills: [
      { name: "Functional Testing", icon: <CheckCircle2 size={16} /> },
      { name: "Regression Testing", icon: <Layers size={16} /> },
      { name: "Smoke & Sanity", icon: <Workflow size={16} /> },

      { name: "Exploratory Testing", icon: <Search size={16} /> },
    ]
  },
  {
    title: "Automation",
    skills: [
      { name: "Cypress (2 Years)", icon: <Code2 size={16} /> },
      { name: "Playwright (1 Year)", icon: <Terminal size={16} /> },
      { name: "JavaScript/TypeScript", icon: <Code2 size={16} /> },
      { name: "Page Object Model", icon: <Layers size={16} /> },
    ]
  },
  {
    title: "API & Performance",
    skills: [
      { name: "Postman API", icon: <Database size={16} /> },
      { name: "JMeter (Intermediate)", icon: <Cpu size={16} /> },
      { name: "REST Verification", icon: <CheckCircle2 size={16} /> },
      { name: "JSON Validation", icon: <Code2 size={16} /> },
    ]
  },
  {
    title: "Tools & Management",
    skills: [
      { name: "Jira", icon: <Bug size={16} /> },
      { name: "TestRail", icon: <FileText size={16} /> },
      { name: "Git/GitHub", icon: <Code2 size={16} /> },
      { name: "Agile/Scrum", icon: <Workflow size={16} /> },
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Quality Assurance Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading QA initiatives for enterprise web applications, focusing on transition from manual to automated workflows.",
    achievements: [
      "Implemented Cypress automation framework reducing regression cycle time by 40%.",
      "Managed test cycles for complex PDF redaction and user management features.",
      "Collaborated with developers to resolve 200+ defects in pre-production.",
      "Conducted performance testing using JMeter for high-traffic endpoints."
    ],
    techStack: ["Cypress", "Jira", "Postman", "JavaScript"]
  },
  {
    id: "2",
    role: "QA Engineer",
    company: "Digital Innovations Corp",
    period: "2020 - 2022",
    description: "Responsible for manual and automated testing of fintech web products including authentication and email workflows.",
    achievements: [
      "Designed comprehensive test plans for secure authentication flows.",
      "Introduced Playwright for cross-browser testing coverage.",
      "Maintained 98% defect leakage prevention rate in UAT.",
      "Documented API endpoints and automated status checks."
    ],
    techStack: ["Playwright", "TestRail", "Agile", "SQL"]
  }
];

export const SAMPLE_WORK_DATA: SampleWorkItem[] = [
  {
    id: "sw1",
    title: "Defect Report: Checkout Failure",
    type: "Bug Report",
    description: "A standard highly-detailed bug report demonstrating reproduction steps and severity classification.",
    previewContent: `[Title] 
Cart fails to update total when coupon applied twice

[Severity] 
High

[Environment] 
Production v2.4.1, Chrome 118, Windows 11

[Steps to Reproduce]
1. Login as standard user
2. Add "Product A" ($50) to cart
3. Apply coupon "SAVE10" (Success message appears)
4. Refresh page
5. Apply coupon "SAVE10" again

[Expected Result]
System should validate coupon is already applied or show error.

[Actual Result]
System applies discount twice, resulting in negative balance.`
  },
  {
    id: "sw2",
    title: "Auth Flow Automation",
    type: "Automation Script",
    description: "Snippet of a Playwright test script using Page Object Model pattern.",
    previewContent: `import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Authentication Flow', () => {
  test('User should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.enterCredentials(
      process.env.USER_EMAIL, 
      process.env.USER_PASS
    );
    await loginPage.submit();

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('.welcome-msg'))
      .toBeVisible();
  });
});`
  },
  {
    id: "sw3",
    title: "Test Case: PDF Redaction",
    type: "Test Plan",
    description: "Acceptance criteria breakdown for a critical document feature.",
    previewContent: `ID: TC-PDF-005
Feature: Document Redaction

Scenario: User redacts PII from uploaded invoice

GIVEN user is on the Document Viewer
AND a PDF document is loaded
WHEN user selects the "Redact Tool"
AND highlights the "Social Security Number" text area
AND clicks "Apply Redactions"
THEN the selected text should be covered by a black overlay
AND the underlying text should be non-selectable
AND the "Download" version should have text permanently removed`
  }
];