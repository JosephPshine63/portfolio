// Locale-independent facts reused by both dictionaries and by the SEO metadata.

export const site = {
  url: 'https://gprdev.com',
  name: 'Giuseppe Pio Ruocco',
  email: 'dev.pioruocco@gmail.com',
  whatsapp: 'https://wa.me/393467528654',
  linkedin: 'https://www.linkedin.com/in/giuseppe-pio-ruocco-7b4367267/',
  github: 'https://github.com/JosephPshine63',
  // Web3Forms access key: public by design, it only lets the form send mail to
  // the address it was registered with.
  web3formsKey: 'e885a104-b3da-448f-8dcc-429333253be5',
  cv: '/cv/CV_Giuseppe_Pio_Ruocco.pdf',
} as const

export const projectLinks = {
  wacchat: { demo: 'https://wacchat.win', code: 'https://github.com/JosephPshine63/wacchat' },
  gprflow: { demo: 'https://gprflow.trade', code: 'https://github.com/JosephPshine63/GprFlow' },
  piocart: { demo: 'https://pio-cart-psi.vercel.app', code: 'https://github.com/JosephPshine63/PioCart' },
  booktribe: { code: 'https://github.com/JosephPshine63/BookTribe' },
} as const

// Screenshots live in public/projects/<slug>/<name>.webp.
export const screen = (slug: string, name: string) => `/projects/${slug}/${name}.webp`
