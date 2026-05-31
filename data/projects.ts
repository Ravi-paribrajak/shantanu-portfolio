export interface Project {
  id: string;
  title: string;
  category: 'short-form' | 'long-form' | 'graphic';
  client: string;
  duration: string;
  thumbnailUrl: string;
  videoEmbedId: string; // YouTube ID
  aspectRatio: 'video' | 'portrait'; // 'video' = 16:9, 'portrait' = 9:16
  description: string;
  tags: string[];
  previewVideoUrl?: string; // e.g., lightweight .mp4 loops (optional)
  metrics?: { label: string; value: string }[]; // e.g., [{ label: 'Retention', value: '72%' }]
  tools?: string[]; // e.g., ['Premiere Pro', 'After Effects']
}

export const projectsData: Project[] = [
  // Actual Long-form Video Assets
  {
    id: 'long-full-edited',
    title: 'full edited videos',
    category: 'long-form',
    client: 'Shantanu Tech Channel',
    duration: '12:45',
    thumbnailUrl: '/thumbnails/design-thumb-1.jpg',
    videoEmbedId: 't-vN4wUoE28',
    aspectRatio: 'video',
    description: 'Documentary-style post-production edit focusing on tech history, custom graphics overlays, and dynamic transition cuts.',
    tags: ['Tech', 'Long-form', 'Documentary style'],
    metrics: [{ label: "Avg. Retention", value: "64%" }, { label: "Click Rate", value: "+18%" }],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    previewVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-working-late-on-a-video-editor-console-42354-large.mp4"
  },
  {
    id: 'long-tech-videos',
    title: 'Tech videos',
    category: 'long-form',
    client: 'Tech Reviews Inc.',
    duration: '08:30',
    thumbnailUrl: '/thumbnails/design-thumb-2.jpg',
    videoEmbedId: '4ybjrh4lEuk',
    aspectRatio: 'video',
    description: 'Highly engaging explainer tech video incorporating interactive diagrams, kinetic text callouts, and clean frame changes.',
    tags: ['Tech review', 'B-Roll Sync', 'Motion Design']
  },
  {
    id: 'long-doc-style',
    title: 'Documentary Style',
    category: 'long-form',
    client: 'Cinematic Essayist',
    duration: '14:20',
    thumbnailUrl: '/thumbnails/design-thumb-3.jpg', // FIXED duplication bug here
    videoEmbedId: 'FBLlDBfx4Qw',
    aspectRatio: 'video',
    description: 'Immersive cinematic narrative edit utilizing sound landscape design, matching colors, and paced text explanations.',
    tags: ['Documentary Style', 'Cinematic', 'Color Grading']
  },

  // Actual Short-form Video Assets
  {
    id: 'short-edit-reel-1',
    title: 'Editing Reel 1',
    category: 'short-form',
    client: 'Shantanu Edits',
    duration: '00:45',
    thumbnailUrl: '/thumbnails/design-thumb-19.jpg',
    videoEmbedId: 'ovKwbDaKCDo',
    aspectRatio: 'portrait',
    description: 'Cinematic vertical showreel highlighting speed ramping, creative transition masks, sound design sync, and pace cuts.',
    tags: ['Shorts', 'Kinetic', 'ASMR Cuts'],
    metrics: [{ label: "Hook Rate", value: "89%" }, { label: "Total Views", value: "1.2M+" }],
    tools: ["After Effects", "Premiere Pro", "Audition"],
    previewVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-neon-light-sign-letters-glowing-48600-large.mp4"
  },
  {
    id: 'short-tech-short-1',
    title: 'Tech Short 1',
    category: 'short-form',
    client: 'Tech Explored',
    duration: '00:58',
    thumbnailUrl: '/thumbnails/design-thumb-15.jpg',
    videoEmbedId: 'jiVfQvAgNgg',
    aspectRatio: 'portrait',
    description: 'Explaining complex tech paradigms inside 60 seconds using zoom transitions and auto-captions.',
    tags: ['Tech', 'Reel', 'Explainer']
  },
  {
    id: 'short-motion-graphics-1',
    title: 'Motion-Graphics Short 1',
    category: 'short-form',
    client: 'Motion Designs',
    duration: '00:30',
    thumbnailUrl: '/thumbnails/design-thumb-20.jpg',
    videoEmbedId: '9FirRiW6GoQ',
    aspectRatio: 'portrait',
    description: 'Kinetic typography overlay showing seamless text animation matching speakers cadence and frequency beats.',
    tags: ['Motion Graphics', 'Reels', 'Typography']
  },

  // Graphic Design Thumbnails (Thumbnail Graphics Category)
  {
    id: 'graphic-thumb-5',
    title: 'Thumbnail Concept 5',
    category: 'graphic',
    client: 'YouTube Gaming',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-5.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'portrait',
    description: 'Designed gaming thumbnail featuring custom lighting highlights and high-contrast Photoshop compositing.',
    tags: ['Thumbnail', 'Gaming', 'Graphic Design']
  },
  {
    id: 'graphic-thumb-6',
    title: 'Thumbnail Concept 6',
    category: 'graphic',
    client: 'YouTube Tech',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-6.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'portrait',
    description: 'High-contrast product review cover utilizing bold, layered typography and premium highlights.',
    tags: ['Thumbnail', 'Tech', '3D Text']
  },
  {
    id: 'graphic-thumb-7',
    title: 'Thumbnail Concept 7',
    category: 'graphic',
    client: 'YouTube Finance',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-7.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Bold finance thumbnail designed for maximum click-through-rate using saturated assets and clean lines.',
    tags: ['Thumbnail', 'Finance', 'CTR Opt']
  },
  {
    id: 'graphic-thumb-8',
    title: 'Thumbnail Concept 8',
    category: 'graphic',
    client: 'YouTube Lifestyle',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-8.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Sleek travel vlog cover design with detailed exposure blending and custom title shapes.',
    tags: ['Thumbnail', 'Vlog', 'Photoshop']
  },
  {
    id: 'graphic-thumb-9',
    title: 'Thumbnail Concept 9',
    category: 'graphic',
    client: 'YouTube Tech Explainer',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-9.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Atmospheric tech analysis thumbnail using custom wireframe graphics and neon green overlays.',
    tags: ['Thumbnail', 'Tech', 'Vector Art']
  },
  {
    id: 'graphic-thumb-10',
    title: 'Thumbnail Concept 10',
    category: 'graphic',
    client: 'YouTube Documentary',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-10.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Moody storytelling thumbnail built around complex character maskings and dark background contrast.',
    tags: ['Thumbnail', 'CineDoc', 'Masking']
  },
  {
    id: 'graphic-thumb-11',
    title: 'Thumbnail Concept 11',
    category: 'graphic',
    client: 'YouTube Reviewer',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-11.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'AESTHETICS first thumbnail showcasing premium product layout and soft shadows.',
    tags: ['Thumbnail', 'Design', 'Typography']
  },
  {
    id: 'graphic-thumb-12',
    title: 'Thumbnail Concept 12',
    category: 'graphic',
    client: 'YouTube Education',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-12.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Simple and bold layout with clear readability under tiny mobile screens.',
    tags: ['Thumbnail', 'CTR Opt', 'Minimalist']
  },
  {
    id: 'graphic-thumb-13',
    title: 'Thumbnail Concept 13',
    category: 'graphic',
    client: 'YouTube AI News',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-13.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Futuristic design focusing on artificial intelligence reviews and metallic textures.',
    tags: ['Thumbnail', 'AI', 'Render']
  },
  {
    id: 'graphic-thumb-14',
    title: 'Thumbnail Concept 14',
    category: 'graphic',
    client: 'YouTube Vlog',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-14.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Cohesive branding thumbnail using color palettes optimized for user click paths.',
    tags: ['Thumbnail', 'Vlog', 'Branding']
  },
  
  // Extra Graphics to fill out portfolio nicely
  {
    id: 'graphic-thumb-3',
    title: 'Thumbnail Concept 3',
    category: 'graphic',
    client: 'YouTube Education',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-3.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Educational topic cover with visual graphic guides and prominent title alignment.',
    tags: ['Thumbnail', 'Infographic', 'Design']
  },
  {
    id: 'graphic-thumb-4',
    title: 'Thumbnail Concept 4',
    category: 'graphic',
    client: 'YouTube Tech',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-4.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'Modern neon-style product launch cover featuring high contrast gradients and customized glow effects.',
    tags: ['Thumbnail', 'Tech', 'Gradients']
  },
  {
    id: 'graphic-thumb-16',
    title: 'Thumbnail Concept 16',
    category: 'graphic',
    client: 'YouTube Reviewer',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-16.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'video',
    description: 'High CTR gaming thumbnail featuring sharp vector graphics and glowing highlights.',
    tags: ['Thumbnail', 'Gaming', 'Vector']
  },
  {
    id: 'graphic-thumb-17',
    title: 'Thumbnail Concept 17',
    category: 'graphic',
    client: 'YouTube Finance',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-17.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'portrait',
    description: 'Business case study cover featuring corporate colors and high-legibility typographic blocks.',
    tags: ['Thumbnail', 'Business', 'Typography']
  },

  // Shorts/Reels Graphic Covers (9:16 portrait design graphics)
  {
    id: 'graphic-cover-15',
    title: 'Shorts Cover Concept 15',
    category: 'graphic',
    client: 'YouTube Shorts',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-15.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'portrait',
    description: 'Designed YouTube Shorts graphic cover layout featuring high-contrast text and bright accent highlights.',
    tags: ['Shorts Cover', 'Graphic Design']
  },
  {
    id: 'graphic-cover-19',
    title: 'Reels Cover Concept 19',
    category: 'graphic',
    client: 'Instagram Reels',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-19.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'portrait',
    description: 'Instagram Reels vertical cover design utilizing bold layout elements and strong shadows.',
    tags: ['Reels Cover', 'Graphic Design']
  },
  {
    id: 'graphic-cover-20',
    title: 'TikTok Cover Concept 20',
    category: 'graphic',
    client: 'TikTok Creator',
    duration: 'Static',
    thumbnailUrl: '/thumbnails/design-thumb-20.jpg',
    videoEmbedId: 'dQw4w9WgXcQ',
    aspectRatio: 'portrait',
    description: 'Highly clickable TikTok vertical design thumbnail using bright neon graphics.',
    tags: ['TikTok Cover', 'Graphic Design']
  }
];
