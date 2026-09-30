export const projects = [
  { id: 'fraxses-design', name: 'Fraxses Design Site', category: 'Design system', description: 'The design and visual reference site for the Fraxses ecosystem.', url: 'https://fraxsessite.work.imber.me', cta: 'Open Fraxses Design Site', icon: 'design', accent: 'teal', ecosystem: 'fraxses' },
  { id: 'fraxses-docs', name: 'Fraxses Docs', category: 'Documentation', description: 'Documentation and reference material for the Fraxses ecosystem.', url: 'https://fraxsesdocs.work.imber.me', cta: 'Open Fraxses Docs', icon: 'docs', accent: 'violet', ecosystem: 'fraxses' },
  { id: 'fraxses-app', name: 'Fraxses App', category: 'Application', description: 'The primary Fraxses application.', url: 'https://fraxsesapp.work.imber.me', cta: 'Open Fraxses App', icon: 'app', accent: 'teal', ecosystem: 'fraxses' },
  { id: 'fsp', name: 'FSP App', category: 'Financial services', description: 'A financial services application focused on structured operational and compliance workflows.', url: 'https://fspapp.work.imber.me', cta: 'Open FSP App', icon: 'finance', accent: 'violet' },
  { id: 'nebula', name: 'Nebula Portal App', category: 'Portal', description: 'A central portal application for work-related tools and processes.', url: 'https://portal.work.imber.me', cta: 'Open Nebula Portal', icon: 'portal', accent: 'teal' },
  { id: 'iss', name: 'ISS App', category: 'Application', description: 'A work-related application for structured information and updates.', url: 'https://iss.work.imber.me', cta: 'Open ISS App', icon: 'updates', accent: 'violet' },
] as const;

export const fraxsesProjects = ['fraxses-app', 'fraxses-design', 'fraxses-docs'].map(id => projects.find(project => project.id === id)!);
export const footerProjects = ['fraxses-app', 'fsp', 'nebula', 'iss'].map(id => projects.find(project => project.id === id)!);
