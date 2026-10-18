// Locale-independent facts reused by both dictionaries and by the SEO metadata.

export const site = {
  url: 'https://gprdev.com',
  name: 'Giuseppe Pio Ruocco',
  email: 'dev.pioruocco@gmail.com',
  linkedin: 'https://www.linkedin.com/in/giuseppe-pio-ruocco-7b4367267/',
  github: 'https://github.com/JosephPshine63',
  cv: '#cv', // TODO: link to the published CV PDF
} as const

export const projectLinks = {
  wacchat: { demo: 'https://wacchat.win', code: 'https://github.com/JosephPshine63/wacchat' },
  gprflow: { demo: 'https://gprflow.trade', code: 'https://github.com/JosephPshine63/GprFlow' },
  piocart: { code: 'https://github.com/JosephPshine63/PioCart' },
  booktribe: { code: 'https://github.com/JosephPshine63/BookTribe' },
} as const
