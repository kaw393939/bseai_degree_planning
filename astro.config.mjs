import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://kaw393939.github.io',
  base: '/bseai_degree_planning',
  integrations: [
    starlight({
      title: 'BS in Enterprise AI — The Human Edge',
      description:
        'Curriculum planning hub for the NJIT BS in Enterprise AI — training irreplaceable leaders for an AI-powered world.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/kaw393939/bseai_degree_planning'
        }
      ],
      sidebar: [
        {
          label: 'The Program',
          items: [
            { label: 'The Human Edge (Vision)', slug: 'curriculum/overview' },
            { label: 'The Eight Studios', slug: 'curriculum/core-studio-spine' },
            { label: 'The Human Edge Framework', slug: 'curriculum/outcomes' },
            { label: 'The Complete Degree', slug: 'curriculum/course-sequence' },
            { label: 'The Student Journey', slug: 'curriculum/student-journey' },
          ]
        },
        {
          label: 'Philosophy',
          items: [
            { label: 'Executive Summary', slug: 'philosophy/executive-summary' },
            { label: 'The Stripping Thesis', slug: 'philosophy/stripping-thesis' },
            { label: 'The Acceleration Thesis', slug: 'philosophy/acceleration-thesis' },
            { label: 'The New Paradigm', slug: 'philosophy/new-paradigm' },
          ]
        },
        {
          label: 'Program Design',
          items: [
            { label: 'Program Objectives (PEOs)', slug: 'program/program-objectives' },
            { label: 'Student Outcomes', slug: 'program/student-outcomes' },
            { label: 'Learning Objectives', slug: 'program/learning-objectives' },
            { label: 'Curriculum Map', slug: 'program/curriculum-map' },
            { label: 'The 40/60 Policy', slug: 'program/forty-sixty-policy' },
            { label: 'The Context Pack', slug: 'program/context-pack' },
          ]
        },
        {
          label: 'Syllabi',
          items: [
            { label: 'IS 117 — Web Development & Inquiry', slug: 'syllabi/is117' },
            { label: 'IS 118 — Interactive Web Development', slug: 'syllabi/is118' },
            { label: 'IS 218 — Web Application Engineering', slug: 'syllabi/is218' },
            { label: 'IS 265 — Problem Analysis in Information Systems', slug: 'syllabi/is265' },
            { label: 'IS 219 — Web Systems & Infrastructure', slug: 'syllabi/is219' },
            { label: 'IS 331 — Data & Knowledge Systems', slug: 'syllabi/is331' },
            { label: 'IS 390 — Systems Analysis & Design', slug: 'syllabi/is390' },
            { label: 'IS 425 — Applied Enterprise AI', slug: 'syllabi/is425' },
          ]
        },
        {
          label: 'Accreditation',
          items: [
            { label: 'ABET CAC Alignment', slug: 'accreditation/abet-alignment' },
            { label: 'MSCHE Alignment', slug: 'accreditation/msche-alignment' },
            { label: 'Outcomes Mapping', slug: 'accreditation/outcomes-mapping' },
            { label: 'Assessment Plan', slug: 'accreditation/assessment-plan' },
          ]
        },
        {
          label: 'Evidence',
          items: [
            { label: 'Why Now', slug: 'evidence/why-now' },
            { label: 'Job Market Data', slug: 'evidence/job-market' },
            { label: 'Industry Voices', slug: 'evidence/industry-voices' },
            { label: 'Higher Ed Landscape', slug: 'evidence/higher-ed-landscape' },
          ]
        },
        {
          label: 'Stakeholders',
          items: [
            { label: 'For Administrators', slug: 'stakeholders/for-administrators' },
            { label: 'For Faculty', slug: 'stakeholders/for-faculty' },
            { label: 'For Students', slug: 'stakeholders/for-students' },
            { label: 'For Industry Partners', slug: 'stakeholders/for-industry' },
          ]
        },
        {
          label: 'Reference',
          items: [
            { label: 'Course Catalog (Current)', slug: 'curriculum/course-catalog-current' },
            { label: 'Course Catalog (Proposed)', slug: 'curriculum/course-catalog-proposed' },
            { label: 'Implementation Plan', slug: 'curriculum/implementation-plan' }
          ]
        },
        {
          label: 'Careers',
          items: [
            { label: 'Job Signals Summary', slug: 'careers/job-signals-summary' },
            { label: 'Skills Map', slug: 'careers/skills-map' },
            { label: 'Example Job Descriptions + Salaries', slug: 'careers/example-job-descriptions' }
          ]
        },
        {
          label: 'Research',
          items: [{ label: 'Peer Program Benchmarks', slug: 'research/peer-programs' }]
        }
      ]
    })
  ]
});
