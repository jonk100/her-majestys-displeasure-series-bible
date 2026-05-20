/**
 * Main series bible content.
 * All data flows from here into modular primitives.
 */

import type { HeroData } from '@/components/hero/hero';
import type { TonePanelData } from '@/types/tone';
import type { PillarData } from '@/types/pillar';
import type { Episode } from '@/types/episode';
import type {
  CharacterCardData,
  CastItemData
} from '@/types/character';

// ─── HERO ─────────────────────────────────────────────

export const hero: HeroData = {
  fileRef: 'File Ref: OM/1965/001 · Series Bible · 6 Parts',

  title: "Her Majesty's Displeasure",

  subtitle: 'A Limited Series · 6 Episodes',

  logline:
    'When The Beatles are awarded MBEs in 1965, Prince Philip responds not with pride — but by quietly unleashing MI5 to rein them in. Two hapless intelligence officers. Five years. One farcical conspiracy. The ultimate cosmic joke.',

  meta: [
    { label: 'Period', value: '1965 – 1970' },
    { label: 'Genre', value: 'Dark Political Satire' },
    { label: 'Format', value: 'Limited Series' },
  ],
};

// ─── OVERVIEW ─────────────────────────────────────────

export const premiseParagraphs: string[] = [
  `A petty grievance at Buckingham Palace triggers a five-year covert operation. What begins as an aristocrat's wounded pride metastasises — through layers of bureaucracy, delusion, and incompetence — into a conspiracy that threatens to reshape history. It fails, spectacularly, because history cannot be managed. Art cannot be neutralised. And the universe is indifferent to the schemes of small men.`,

  `The series tracks the <strong>"miserable symmetry"</strong> of power: the rigid machinery of the state attempting to crush the chaotic influence of art, only to find itself utterly transformed — and humiliated — by the encounter.`,
];

export const comparisons: string[] = [
  'Patriot (Steven Conrad)',
  'The Death of Stalin (Iannucci)',
  'The Royal Tenenbaums (Anderson)',
  'Better Call Saul (Gilligan)',
];

// ─── TONE ─────────────────────────────────────────────

export const tonePanels: TonePanelData[] = [
  {
    tag: 'The Royal / MI5 World',
    title: 'Rigid Symmetry',
    variant: 'cold',
    description:
      'Desaturated palettes — greys, muted blues, pale yellows. Dusty, sterile production design. Framing is deadpan, flat, and wide, emphasising the absurdity of the institution. Think Patriot. Every object is precisely placed. Every silence is too long.',
  },

  {
    tag: "The Beatles' World",
    title: 'Warm Organic Chaos',
    variant: 'warm',
    description:
      'Handheld or fluid camera movements during creative sessions. Spaces cluttered with instruments, art, and life. The palette warms and loosens as the series moves toward 1970. Comedy comes from a chaotic element — Yoko\'s art, a clumsy spy — entering a rigidly composed Royal frame.',
  },
];

// ─── THEMES / PILLARS ─────────────────────────────────

export const pillars: PillarData[] = [
  {
    number: '01',
    title: 'Power vs. Art',
    description:
      'The conflict between inherited state power and earned creative influence. One speaks the language of command. The other doesn\'t speak at all — it simply is.',
  },

  {
    number: '02',
    title: 'The Absurdity of Bureaucracy',
    description:
      'History is shaped not by grand design, but by middle-manager incompetence and flawed paperwork. The tragedy is that it nearly works anyway.',
  },

  {
    number: '03',
    title: 'Myth vs. Reality',
    description:
      'The gap between the public icons of the Monarchy and The Beatles — and the dysfunctional, human realities beneath both mythologies.',
  },
];

// ─── CHARACTERS ───────────────────────────────────────

export const featuredCharacters: CharacterCardData[] = [
  {
    file: "FILE: FINCH, N. · MI5 · AGE 48–53",
    name: "Nigel Finch",
    role: "The Moral Saboteur · Conscience",
    quote:
      "Yes, sir. That is… certainly one approach to the situation. I'll get right on it.",
    image: "nigel_finch.png",
    description:
      "<span class=name-in-description><strong>Nigel</strong></span> begins motivated by a single goal: reaching his government pension with <strong>minimal fuss</strong>. Over five years, his motivations transform completely — from protecting his pension to protecting innocent people from his own government's folly.",
  },
  {
    file: "FILE: BARROW, C. · MI5 · AGE 41–46",
    name: "Clive Barrow",
    role: 'Delusional Visionary · "Klaus"',
    quote:
      '"As Kandinsky once said — or perhaps it was Klee — the true artist penetrates the veil of… of… well, the point is penetration."',
    image: "clive_barrow.png",
    description:
      '<span class=name-in-description><strong>Clive</strong></span> sees Operation Minuet as his magnum opus — <strong>a five-year artistic masterpiece</strong> that will revolutionize intelligence work. His invented spy jargon ("psychological ricochet," "unintentional success matrix") transforms bumbling surveillance into what he believes is sophisticated psychological warfare.',
  },
];

export const agentDetails: { name: string; description: string }[] = [
  {
    name: "Nigel Finch",
    description:
      "Nigel begins motivated by a single goal: reaching his <strong>government pension with minimal fuss</strong>. Over five years, his motivations transform completely — from protecting his pension to protecting innocent people from his own government's folly.",
  },
  {
    name: "Clive Barrow",
    description:
      'Clive sees Operation Minuet as his <strong>magnum opus</strong> — a five-year artistic masterpiece that will revolutionise intelligence work. His invented spy jargon ("psychological ricochet," "unintentional success matrix") transforms bumbling surveillance into what he believes is sophisticated psychological warfare.',
  },
];

export const cast: CastItemData[] = [
  {
    name: "Prince Philip",
    tag: "The Crown · Age 44–49",
    description:
      'The primary antagonist. Offended by John Lennon\'s "killing people" comment at the 1965 MBE ceremony, his wounded pride triggers a five-year obsession that escalates — through layers of rationalism and denial — from psychological warfare to attempted assassination. A guardian of tradition transformed into its greatest threat.',
    image: "phillip.jpg",
  },

  {
    name: "John Lennon",
    tag: "The Beatles · Age 25–30",
    description:
      "The unwitting catalyst. His casual irreverence at the MBE ceremony is pure instinct, not calculated rebellion. His genuine political awakening — driven by authentic conviction — is also partially the product of the very conspiracy designed to destroy him. Dramatic irony as the engine of tragedy.",
    image: "john.jpg",
  },
  {
    name: "Lord Mountbatten",
    tag: "The Crown · Age 65–70",
    description:
      "Philip's strategic mentor. Applies Cold War psychological tactics to neutralise a pop group's cultural influence. A chess master forced to play Snakes and Ladders, and knowing it. His professionalism is both an asset and a limitation when confronting forces that cannot be planned against.",
    image: "mountbatten-01.jpg",
  },
  {
    name: "Paul McCartney",
    tag: "The Beatles · Age 23–28",
    description:
      "The diplomatic workhorse. Becomes the unwitting target of Nigel Finch's fake knighthood letter — designed to isolate John by making Paul appear establishment-favoured. His genuine love for John makes him an unwitting accomplice in the band's destruction.",
    image: "paul.jpg",
  },
  {
    name: "Queen Elizabeth II",
    tag: "Moral Anchor · D-Plot",
    description:
      "The quiet observer. Never directly intervening, but representing the institutional memory that knows — with the certainty of long experience — that this will fail. Her final judgment, delivered in one scene, delivers the series' moral weight. Patience defeats everything.",
    image: "queen.jpg",
  },
  {
    name: "George Harrison",
    tag: "The Beatles · Age 22–27",
    description:
      "The overlooked Beatle. His genuine spiritual seeking and creative frustration make him the perfect unwitting target for Nigel's sitar book manipulation. His authentic journey toward enlightenment is — in a detail he will never learn — partially built on government manipulation.",
    image: "george.jpg",
  },
];

// ─── EPISODES ─────────────────────────────────────────

export const episodes: Episode[] = [
  {
    number: 'EP. 01',
    title: 'The Investiture',
    scenes: 'Scenes 1 – 16',
    timeframe: 'Oct 1965 – Mar 1966',
    summary:
      'After The Beatles smoke a joint in the Buckingham Palace bathroom, John Lennon makes a flippant remark about military service that triggers Prince Philip\'s fury. Operation Minuet is born. Nigel sighs. Clive is energised.',
    tension: 25,
    tensionLabel: 'Tension 2–5/10 · Low simmer',
  },

  {
    number: 'EP. 02',
    title: 'The Subtle Campaign',
    scenes: 'Scenes 17 – 31',
    timeframe: 'Mar 1966 – Jul 1967',
    summary:
      'Nigel and Clive begin their "nudges" — amplifying the "More popular than Jesus" controversy, deploying rumour campaigns. The operation claims credit for organic chaos. Clive files his first victory report. Nigel sees the truth. Neither matters.',
    tension: 50,
    tensionLabel: 'Tension 3–7/10 · First interference',
  },

  {
    number: 'EP. 03',
    title: 'The Cultural Fracture',
    scenes: 'Scenes 32 – 49',
    timeframe: 'Aug 1967 – Aug 1968',
    summary:
      'Sgt. Pepper convinces Philip the threat is real. The "Klaus" persona is born. Clive begins his masterpiece within the masterpiece. Nigel guides George Harrison toward India — fulfilling orders while minimising harm. The last innocent summer ends.',
    tension: 35,
    tensionLabel: 'Tension 2–6/10 · Peak creativity / conspiracy expands',
  },

  {
    number: 'EP. 04',
    title: 'The Sound of Chaos',
    scenes: 'Scenes 50 – 60',
    timeframe: 'Sept 1968 – Apr 1969',
    summary:
      'India creates an operational dead zone. The agents sit in a sweltering hotel unable to surveil meditating musicians. The White Album sessions reveal the conspiracy\'s true impotence: the band is fracturing entirely on its own. Nigel writes poetry that no one reads.',
    tension: 45,
    tensionLabel: 'Tension 2–7/10 · India peace / return conflict',
  },

  {
    number: 'EP. 05',
    title: 'The Long and Winding Road',
    scenes: 'Scenes 61 – 71',
    timeframe: 'May 1969 – Feb 1970',
    summary:
      'John returns his MBE. Philip\'s fury crystallises into a demand for "permanent administrative solution." The order is received. Clive sees a third-act twist. Nigel sees a man he has come to recognise as human. He makes his choice.',
    tension: 75,
    tensionLabel: 'Tension 4–10/10 · Assassination ordered',
  },

  {
    number: 'EP. 06',
    title: 'The Ultimate Cosmic Joke',
    scenes: 'Scenes 72 – 87',
    timeframe: 'Feb 1970 + Epilogue 1980',
    summary:
      'The Rooftop Concert. The failed assassination. The farcical collapse. The Beatles dissolve, through their own dynamics, not Philip\'s masterful design. A decade later, in a Falklands office, a radio announces the news. The conspiracy is revealed as utterly, cosmically irrelevant.',
    tension: 100,
    tensionLabel: 'Tension 0–10/10 · Failure / death / resolution',
  },
];

// ─── EPILOGUE ─────────────────────────────────────────

export const epilogue = {
  location: 'The Falklands, 1980',
  paragraphs: [
    `Nigel and Clive. Now aged and forgotten. A small office at the end of the world. A radio. The news of John Lennon's death — December 8, 1980 — arrives not as tragedy but as punchline to a five-year joke neither man finds funny. A random madman achieves what the entire apparatus of the state could not.`,

    `<strong>"We didn't do it."</strong> Nigel's vindication. Clive's final delusion: convinced, still, that they turned Yoko without her knowing it. The camera holds on Nigel's face. The universe, as ever, is indifferent.`,
  ],
  endCard: [
    'John Lennon was assassinated by Mark David Chapman on December 8, 1980.',
    'There is no evidence that the royal family had any involvement.',
    '— End title card',
  ] as string[],
};