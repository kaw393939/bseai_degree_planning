import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://kaw393939.github.io',
  base: '/bseai_degree_planning',
  integrations: [
    starlight({
      title: 'BS in Enterprise AI',
      description:
        'Curriculum planning hub for NJIT Informatics — preparing AI Product Engineers and AI Software Engineers.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/kaw393939/bseai_degree_planning'
        }
      ],
      sidebar: [
        {
          label: 'Curriculum',
          items: [
            { label: 'Program Overview', slug: 'curriculum/overview' },
            { label: 'Course Sequence (Draft)', slug: 'curriculum/course-sequence' },
            { label: 'Outcomes & Competencies (Draft)', slug: 'curriculum/outcomes' },
            { label: 'Core Studio Spine (Draft)', slug: 'curriculum/core-studio-spine' },
            { label: 'Student Journey (Draft)', slug: 'curriculum/student-journey' },
            { label: 'Course Catalog (Current)', slug: 'curriculum/course-catalog-current' },
            { label: 'Course Catalog (Proposed)', slug: 'curriculum/course-catalog-proposed' },
            { label: 'Implementation Plan (Draft)', slug: 'curriculum/implementation-plan' }
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
