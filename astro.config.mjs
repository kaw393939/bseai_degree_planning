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
            { label: 'Outcomes & Competencies (Draft)', slug: 'curriculum/outcomes' }
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
