export interface PerspectiveData {
  milestone: string;
  body: string;
  tone: string;
}

export interface EpisodeData {
  number: number;
  year: string;
  title: string;
  mi5: PerspectiveData;
  beatles: PerspectiveData;
}
export const episodeData = [
  {
    number: 1,
    year: "Oct 1965",
    title: "A Toast to Her Majesty",
    mi5: {
      milestone: "Lennon's quip triggers Philip's cold fury",
      body: `Phillip bypasses the PM and tasks overlooked civil servants Nigel Finch and Clive Barrow with <em>Operation Minuet</em>. Nigel wants his pension. Clive thinks history has handed him a canvas.`,
      tone: "Crisp, symmetrical satire of bureaucratic stagnation.",
    },
    beatles: {
      milestone: "The MBE Ceremony at Buckingham Palace",
      body: `The lads from Liverpool smoke a joint in the royal bathroom to steady their nerves,
             then collect their medals. John's throwaway quip sets a chain of events in motion
             that will echo across a decade.`,
      tone: "Innocent charm masking the cultural revolution ahead.",
    },
  },
  {
    number: 2,
    year: "1966",
    title: "The Klaus Technique",
    mi5: {
      milestone: "Nigel sparks George's sitar obsession; Clive amplifies the Jesus quote.",
      body: `Nigel leaves an Eastern philosophy text on George's amp. Clive adopts the persona of
             a pretentious German art critic named "Klaus" to infiltrate John's avant-garde circle, and
             works overtime to weaponize the Jesus quote against the band.`,
      tone: "Fast-paced institutional farce. Paranoid surveillance logs vs. effortless creative explosion.",
    },
    beatles: {
      milestone: "<em>Rubber Soul</em> & <em>Revolver</em> sessions; 'More popular than Jesus'",
      body: `As the band continues to push every musical boundary, <em>Revolver</em> marks their creative peak —
             just in time for John's "more popular than Jesus" quote to ignite outrage across the Bible Belt. 
             The band decides their touring days have come to an end.`,
      tone: "Creative explosion meets cultural backlash. Confidence grows even as the establishment pushes back.",
    },
  },
  {
    number: 3,
    year: "Aug 1967",
    title: "Tactical Advantages",
    mi5: {
      milestone: "Philip and Mountbatten evaluate Epstein's death as a 'tactical advantage'",
      body: `<em>Sgt. Pepper</em> leaves the agents feeling utterly defeated. Then Brian Epstein
             overdoses. In a chilling palace meeting, the Crown views the band's beloved manager
             not as a human tragedy but as an unexpected opportunity — and steps into the power vacuum.`,
      tone: "The turning point. Satire trades lightness for cold psychological weight.",
    },
    beatles: {
      milestone: "<em>Sgt. Pepper's Lonely Hearts Club Band</em> is released; later, the death of Brian Epstein.",
      body: `The band releases their masterpiece studio album. They stand at the peak of their cultural authority,
             with nothing in their way. Then, their manager, protector, mediator, anchor — Brian Epstein - is gone. 
             The vacuum he leaves will eventually pull them apart.`,
      tone: "Creative peak meets personal tragedy. The beginning of the end for the band's unity.",
    },
  },
  {
    number: 4,
    year: "1968",
    title: "The Frequency of Revolution",
    mi5: {
      milestone: "Clive convinces himself 'Revolution 9' contains KGB launch codes",
      body: `Secretly listening in to a fractured broadcast of the White Album sessions, Clive stays
             awake for days parsing avant-garde noise as Soviet intelligence. Nigel watches his
             partner unravel.`,
      tone: "Claustrophobic and darkly funny. The agents begin to mirror the deterioration they were ordered to cause.",
    },
    beatles: {
      milestone: "The <em>White Album</em> recordings; Yoko Ono arrives.",
      body: `The band records a sprawling double album in a state of mutual exhaustion. John's
             deepening bond with Yoko Ono intensifies the fractures — four enormous egos turning
             inward, consuming the unity that made them great.`,
      tone: "Fracture and experimentation. The creative energy turns corrosive.",
    },
  },
  {
    number: 5,
    year: "Late 1969",
    title: "Operation Elegy",
    mi5: {
      milestone: "Philip raises the stakes; Nigel's conscience finally breaks",
      body: `Nigel's forged knighthood letter backfires spectacularly as John returns his MBE.
             Philip demands a permanent solution. Faced with actual blood on his hands, Nigel finds
             he doesn't have the stomach for it anymore.`,
      tone: "High-stakes espionage thriller. A moral crisis managed from inside a cubicle.",
    },
    beatles: {
      milestone: "The <em>Get Back</em> sessions; John returns his MBE",
      body: `The band endures the grueling, videotaped Get Back sessions under Twickenham's
             fluorescent lights. John makes a proud trip to the post office to make a protest
             and to publicly reject the establishment that once feted him.`,
      tone: "The final spiral. Conflicts reach their climax; the world descends into chaos around them.",
    },
  },
  {
    number: 6,
    year: "1970, 1980",
    title: "The Ultimate Cosmic Joke",
    mi5: {
      milestone: "Nigel quietly tanks Elegy; a dark, cold exile; the radio crackles",
      body: `Nigel orchestrates the operation's failure through bad paperwork and logistics.
             As the agents are exiled to a remote office in the Falklands, the band splits
             through pure, organic means. Years later, a transistor radio announces John Lennon's murder
             by a lone, deranged fan. Two frozen, forgotten old men stare at each other as the wind howls outside.`,
      tone: "Crushing, brilliant dramatic irony. Their secret war was fought for absolutely nothing.",
    },
    beatles: {
      milestone: "The Rooftop Concert; the breakup and divorce; and a 1980 epilogue",
      body: `The Beatles make one last performance on the roof of Apple Corps. Shortly after, it's over. 
             Not with a bang. With lawyers and grudges, paperwork and emotions. Each of the Beatles goes on to have a 
             successful solo career, but a decade later, John Lennon steps out of 
             the Dakota building in New York, where he's shot dead by a stranger who loved his music.`,
      tone: "Ironic tragedy. The Crown's goal achieved by a madman in an afternoon — after five years of expensive failure.",
    },
  },
];
