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
