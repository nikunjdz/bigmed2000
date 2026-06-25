import { useEffect } from "react";

const MemesMemlex = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  useEffect(() => {
    document.body.style.backgroundColor = "beige";
    document.body.style.backgroundImage = `url(${BASE_URL}barks/paper2.gif)`;
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    };
  }, []);

  const html = `




<CENTER><TABLE BORDER=4 CELLPADDING=5 ALIGN=CENTER>

<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/birdmem2.gif" BORDER=3 ALT="Buddhist Meme Winging West" WIDTH=200 HEIGHT=199 ><BR><STRONG>Buddhist Meme in Migration</STRONG></TD><TD>

<BR><CENTER><IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=200 HEIGHT=8 hspace=12>
<H3>Doors to Memetic <BR>Conception</H3>
<IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=200 HEIGHT=8 hspace=12><P>
<H2>Memetic Lexicon</H2>

<I>Author: Glenn Grant <br>
HTMLized by Anders Sandberg <BR>
Altered/expanded by David McFadzean 

</TD></TR>
</TABLE></CENTER>

</I></CENTER>
 <P><BR><BR><BR><BR>
<HR WIDTH=90% ALIGN=center SIZE=3>
<BLOCKQUOTE><FONT SIZE=+1 COLOR=#800040><STRONG>Nancho Advisory:</STRONG> Please note that these definitions (like most current memetic terminology) are heavily "contaminated" with terms, concepts and metaphors from social and medical pathology. This is said to be unavoidable given that memes spread from mind to mind like viruses, but it is rather akin to explaining genes entirely in terms of hemophilia, mongoloidism and color-blindness. <P>Please always keep in mind that "democracy,"  "equality" and "environmentalism" as well as poems and symphonies are also memes, and those which have advanced and enriched human evolution should still be a primary object of interest.</FONT></BLOCKQUOTE>
<HR WIDTH=90% ALIGN=center SIZE=3>
<UL>


                                                        
    <P><A NAME="AUTO-TOXIC"><B>AUTO-TOXIC</B></A>:
          Dangerous to itself. Highly auto-toxic memes are usually
          self-limiting because they promote the destruction of their
          hosts (such as the Jim Jones meme; any military indoctrination
          meme-complex; any "martyrdom" meme). (GMG) (See <A HREF="#EXO-TOXIC">exo-toxic</A>.)
          
          
    <P><A NAME="BAIT"><B>BAIT</B></A>:
	The part of a meme-complex that promises to benefit the host
          (usually in return for replicating the complex). The bait
          usually justifies, but does not explicitly urge, the
          replication of a meme-complex. (Donald Going, quoted by
          Hofstadter.) Also called the <A HREF="#REWARD_CO-MEME">reward co-meme</A>. (In many
          religions, "Salvation" is the bait, or promised reward; "Spread
          the Word" is the hook. Other common bait co-memes are "Eternal
          Bliss", "Security", "Prosperity", "Freedom".) (See <A HREF="#HOOK">hook</A>;
          <A HREF="#THREAT">threat</A>; <A HREF="#INFECTION_STRATEGY">infection strategy</A>.)


    <P><A NAME="BELIEF-SPACE"><B>BELIEF-SPACE</B></A>:
          Since a person can only be infected with and transmit a finite
          number of memes, there is a limit to their belief space
          (Henson). Memes evolve in competition for niches in the
          belief-space of individuals and societies.
          
    <P><A NAME="CENSORSHIP"><B>CENSORSHIP</B></A>:
          Any attempt to hinder the spread of a meme by eliminating its
          vectors. Hence, censorship is analogous to attempts to halt
          diseases by spraying insecticides. Censorship can never fully
          kill off an offensive meme, and may actually help to promote
          the meme's most virulent strain, while killing off milder
          forms.
          
    <P><A NAME="CO-MEME"><B>CO-MEME</B></A>:
          A meme which has symbiotically co-evolved with other memes, to
          form a mutually-assisting meme-complex. Also called a symmeme.
          (GMG)

          
    <P><A NAME="CULT"><B>CULT </B></A>:
	A sociotype of an auto-toxic meme-complex, composed of membots
          and/or memeoids. (GMG) Characteristics of cults include:
          self-isolation of the infected group (or at least new
          recruits); brainwashing by repetitive exposure (inducing
          dependent mental states); genetic functions discouraged
          (through celibacy, sterilization, devalued family) in favor of
          replication (proselytizing); and leader-worship ("personality
          cult"). (Henson.)
          
    <P><A NAME="DORMANT"><B>DORMANT</B></A>:
          Currently without human hosts. The ancient Egyptian hieroglyph
          system and the Gnostic Gospels are examples of "dead" schemes
          which lay dormant for millennia in hidden or untranslatable
          texts, waiting to re-activate themselves by infecting modern
          archeologists. Some obsolete memes never become entirely
          dormant, such as Phlogiston theory, which simply mutated from a
          "belief" into a "quaint historical footnote."
          
    <P><A NAME="EARWORM"><B>EARWORM</B></A>:
          "A tune or melody which infects a population rapidly."
          (Rheingold); a hit song. (Such as: "Don't Worry, Be Happy".)
          (f. German, ohrwurm=earworm.)
          
    <P><A NAME="EXO-TOXIC"><B>EXO-TOXIC</B></A>:
          Dangerous to others. Highly exo-toxic memes promote the
          destruction of persons other than their hosts, particularly
          those who are carriers of rival memes. (Such as: Nazism, the
          Inquisition, Pol Pot.) (See <A HREF="#MEME-ALLERGY">meme-allergy</A>.) (GMG)
          
    <P><A NAME="HISTAMEME"><B>HISTAMEME</B></A>:
	  See <a href="#VACCIME">vaccime</a>. (Morgan)

    <P><A NAME="HOOK"><B>HOOK </B></A>:
	The part of a meme-complex that urges replication. The hook is
          often most effective when it is not an explicit statement, but
          a logical consequence of the meme's content. (Hofstadter) (See
          <A HREF="#BAIT">bait</A>, <A HREF="#THREAT">threat</A>.)
          
    <P><A NAME="HOST"><B>HOST </B></A>:
	A person who has been successfully infected by a meme. See
          <A HREF="#INFECTION">infection</A>, <A HREF="#MEMBOT">membot</A>, <A HREF="#MEMEOID">memeoid</A>.
          
    <P><A NAME="IDEOSPHERE"><B>IDEOSPHERE</B></A>:
          The realm of memetic evolution, as the biosphere is the realm
          of biological evolution. The entire memetic ecology.
          (Hofstadter.) The health of an ideosphere can be measured by
          its memetic diversity.
          
    <P><A NAME="IMMUNO-DEPRESSANT"><B>IMMUNO-DEPRESSANT</B></A>:
          Anything that tends to reduce a personUs memetic immunity.
          Common immuno-depressants are: travel, disorientation, physical
          and emotional exhaustion, insecurity, emotional shock, loss of
          home or loved ones, future shock, culture shock, isolation
          stress, unfamiliar social situations, certain drugs,
          loneliness, alienation, paranoia, repeated exposure, respect
          for Authority, escapism, and hypnosis (suspension of critical
          judgment). Recruiters for cults often target airports and bus
          terminals because travelers are likely to be subject to a
          number of these immuno-depressants. (GMG) (See <A HREF="#CULT">cult</A>.)
          
    <P><A NAME="IMMUNO-MEME"><B>IMMUNO-MEME</B></A>:
          See <A HREF="#VACCIME">vaccime</A>. (GMG)
          
    <P><A NAME="INFECTION"><B>INFECTION</B></A>:
          1. Successful encoding of a meme in the memory of a human
          being. A memetic infection can be either active or inactive. It
          is inactive if the host does not feel inclined to transmit the
          meme to other people. An active infection causes the host to
          want to infect others. Fanatically active hosts are often
          membots or memeoids. A person who is exposed to a meme but who
          does not remember it (consciously or otherwise) is not
          infected. (A host can indeed be unconsciously infected, and
          even transmit a meme without conscious awareness of the fact.
          Many societal norms are transmitted this way.) (GMG)
           <P>
          2. Some memeticists have used \`infection' as a synonym for
          \`belief' (i.e. only believers are infected, non-believers are
          not). However, this usage ignores the fact that people often
          transmit memes they do not "believe in." Songs, jokes, and
          fantasies are memes which do not rely on "belief" as an
          infection strategy.
          
    <P><A NAME="INFECTION_STRATEGY"><B>INFECTION STRATEGY</B></A>:
          Any memetic strategy which encourages infection of a host.
          Jokes encourage infection by being humorous, tunes by evoking
          various emotions, slogans and catch-phrases by being terse and
          continuously repeated. Common infection strategies are "Villain
          vs. victim", "Fear of Death", and "Sense of Community". In a
          meme-complex, the bait co-meme is often central to the
          infection strategy. (See <A HREF="#REPLICATION_STRATEGY">replication strategy</A>; <A HREF="#MIMICRY">mimicry</A>.) (GMG)
          
    <P><A NAME="MEMBOT"><B>MEMBOT</B></A>:
          A person whose entire life has become subordinated to the
          propagation of a meme, robotically and at any opportunity.
          (Such as many Jehovah's Witnesses, Krishnas, and
          Scientologists.) Due to internal competition, the most vocal
          and extreme membots tend to rise to top of their sociotype's
          hierarchy. A self-destructive membot is a memeoid. (GMG)
          
    <P><A NAME="MEME"><B>MEME</B></A>:
	(pron. \`meem') A contagious information pattern that replicates
          by symbiotically infecting human minds and altering their
          behavior, causing them to propagate the pattern. (Term coined
          by Dawkins, by analogy with "gene".) Individual slogans,
          catch-phrases, melodies, icons, inventions, and fashions are
          typical memes. An idea or information pattern is not a meme
          until it causes someone to replicate it, to repeat it to
          someone else. All transmitted knowledge is memetic. (Wheelis,
          quoted in Hofstadter.) (See <A HREF="#MEME-COMPLEX">meme-complex</A>).
          
    <P><A NAME="MEME-ALLERGY"><B>MEME-ALLERGY</B></A>:
          A form of intolerance; a condition which causes a person to
          react in an unusually extreme manner when exposed to a specific
          semiotic stimulus, or \`meme-allergen.' Exo-toxic meme-complexes
          typically confer dangerous meme-allergies on their hosts.
          Often, the actual meme-allergens need not be present, but
          merely perceived to be present, to trigger a reaction. Common
          meme-allergies include homophobia, paranoid anti-Communism, and
          porno phobia. Common forms of meme-allergic reaction are
          censorship, vandalism, belligerent verbal abuse, and physical
          violence. (GMG)
          
    <P><A NAME="MEME-COMPLEX"><B>MEME-COMPLEX</B></A>:
          A set of mutually-assisting memes which have co-evolved a
          symbiotic relationship. Religious and political dogmas, social
          movements, artistic styles, traditions and customs, chain
          letters, paradigms, languages, etc. are meme-complexes. Also
          called an m-plex, or scheme (Hofstadter). Types of co-memes
          commonly found in a scheme are called the: bait; hook; threat;
          and vaccime. A successful scheme commonly has certain
          attributes: wide scope (a paradigm that explains much);
          opportunity for the carriers to participate and contribute;
          conviction of its self-evident truth (carries Authority);
          offers order and a sense of place, helping to stave off the
          dread of meaninglessness. (Wheelis, quoted by Hofstadter.)
          
    <P><A NAME="MEMEOID"><B>MEMEOID, or MEMOID</B></A>:
          A person "whose behavior is so strongly influenced by a
          [meme] that their own survival becomes inconsequential in their
          own minds." (Henson) (Such as: Kamikazes, Shiite terrorists,
          Jim Jones followers, any military personnel). hosts and membots
          are not necessarily memeoids. (See <A HREF="#AUTO-TOXIC">auto-toxic</A>; <A HREF="#EXO-TOXIC">exo-toxic</A>.)
          
    <P><A NAME="MEME_POOL"><B>MEME POOL</B></A>:
          The full diversity of memes accessible to a culture or
          individual. Learning languages and traveling are methods of
          expanding one's meme pool.
          
    <P><A NAME="MEMETIC"><B>MEMETIC</B></A>:
          Related to memes.
          
    <P><A NAME="MEMETIC_DRIFT"><B>MEMETIC DRIFT</B></A>:
          Accumulated mis-replications; (the rate of) memetic mutation or
          evolution. Written texts tend to slow the memetic drift of
          dogmas (Henson).
          
    <P><A NAME="MEMETIC_ENGINEER"><B>MEMETIC ENGINEER</B></A>:
          One who consciously devises memes, through meme-splicing and
          memetic synthesis, with the intent of altering the behavior of
          others. Writers of manifestos and of commercials are typical
          memetic engineers. (GMG)
          
    <P><A NAME="MEMETICIST"><B>MEMETICIST</B></A>:
          1. One who studies memetics. 2. A memetic engineer. (GMG)
          
    <P><A NAME="MEMETICS"><B>MEMETICS</B></A>:
          The study of <A HREF="#MEME">memes</A> and their social effects.
          
    <P><A NAME="MEMOTYPE"><B>MEMOTYPE</B></A>:
          1. The actual information-content of a meme, as distinct from
          its sociotype.
           <P>
          2. A class of similar memes. (GMG)
          
    <P><A NAME="META-MEME"><B>META-MEME</B></A>:
          Any meme about memes (such as: "tolerance", "metaphor").
          
    <P><A NAME="META-MEME, the"><B>META-MEME, the</B></A>:
          The concept of memes, considered as a meme itself.
          
    <P><A NAME="MILLENNIAL_MEME"><B>MILLENNIAL MEME</B></A>, the:
          Any of several currently-epidemic memes which predict
          catastrophic events for the year 2000, including the battle of
          Armageddon, the Rapture, the thousand-year reign of Jesus, etc.
          The "Imminent New Age" meme is simply a pan-denominational
          version of this. (Also called the \`Endmeme.')
          
    <P><A NAME="MIMICRY"><B>MIMICRY</B></A>:
          An infection strategy in which a meme attempts to imitate the
          semiotics of another successful meme. Such as: pseudo-science
          (Creationism, UFOlogy); pseudo-rebelliousness (Heavy Metal);
          subversion by forgery (Situationist detournement). (GMG)
          
    <P><A NAME="REPLICATION_STRATEGY"><B>REPLICATION STRATEGY</B></A>:
          Any memetic strategy used by a meme to encourage its host to
          repeat the meme to other people. The hook co-meme of a
          meme-complex. (GMG)
          
    <P><A NAME="RETROMEME"><B>RETROMEME</B></A>:
          A meme which attempts to splice itself into an existing
          meme-complex (example: Marxist-Leninists trying to co-opt other
          sociotypes). (GMG)
          
    <P><A NAME="REWARD_CO-MEME"><B>REWARD CO-MEME</B></A>:
	See <A HREF="#BAIT">bait</A>.

    <P><A NAME="SCHEME"><B>SCHEME</B></A>:
          A meme-complex. (Hofstadter.)
          
    <P><A NAME="SOCIOTYPE"><B>SOCIOTYPE</B></A>:
          1. The social expression of a memotype, as the body of an
          organism is the physical expression (phenotype) of the gene
          (genotype). Hence, the Protestant Church is one sociotype of
          the Bible's memotype. 2. A class of similar social
          organisations. (GMG)
          
    <P><A NAME="#SYMMEME"><B>SYMMEME</B></A>:
  	See <A HREF="#CO-MEME">co-meme</A>.


    <P><A NAME="THREAT"><B>THREAT</B></A>:
          The part of a meme-complex that encourages adherence and
          discourages mis-replication. ("Damnation to Hell" is the threat
          co-meme in many religious schemes.) (See: <A HREF="#BAIT">bait</A>, <A HREF="#HOOK">hook</A>, <A HREF="#VACCIME">vaccime</A>.)
          (Hofstadter)
          
    <P><A NAME="TOLERANCE"><B>TOLERANCE</B></A>:
          A meta-meme which confers resistance to a wide variety of memes
          (and their sociotypes), without conferring meme-allergies. In
          its purest form, Tolerance allows its host to be repeatedly
          exposed to rival memes, even intolerant rivals, without active
          infection or meme-allergic reaction. Tolerance is a central
          co-meme in a wide variety of schemes, particularly
          "liberalism", and "democracy". Without it, a scheme will often
          become exo-toxic and confer meme-allergies on its hosts. Since
          schemes compete for finite belief-space, tolerance is not
          necessarily a virtue, but it has co-evolved in the ideosphere
          in much the same way as co-operation has evolved in biological
          ecosystems. (Henson.)
          
    <P><A NAME="VACCIME"><B>VACCIME</B></A>:
          (pron. vak-seem) Any meta-meme which confers resistance or
          immunity to one or more memes, allowing that person to be
          exposed without acquiring an active infection. Also called an
          \`immuno-meme.' Common immune-conferring memes are "Faith",
          "Loyalty", "Skepticism", and "tolerance". (See: <A HREF="#MEME-ALLERGY">meme-allergy</A>.)
          (GMG.) <P>
          
          Every scheme includes a vaccime to protect against rival memes.
          For instance:

<UL>
                  <LI> Conservatism: automatically resist all new memes.
          <LI> Orthodoxy: automatically reject all new memes.
          <LI> Science: test new memes for theoretical consistency and(where
            applicable) empirical repeatability; continually re-assess
            old memes; accept schemes only conditionally, pending future
            re:-assessment.
          <LI> Radicalism: embrace one new scheme, reject all others.
          <LI> Nihilism: reject all schemes, new and old.
          <LI> New Age: accept all esthetically-appealing memes, new and
            old, regardless of empirical (or even internal) consistency;
            reject others. (Note that this one doesn't provide much
            protection.)
          <LI> Japanese: adapt (parts of) new schemes to the old ones.
</UL>

            
    <P><A NAME="VECTOR"><B>VECTOR</B></A>:
          A medium, method, or vehicle for the transmission of memes.
          Almost any communication medium can be a memetic vector. (GMG)
          
    <P><A NAME="VILLAIN_VICTIM"><B>VILLAIN VS. VICTIM</B></A>:
          An infection strategy common to many meme-complexes, placing
          the potential host in the role of Victim and playing on their
          insecurity, as in: "the bourgeoisie is oppressing the
          proletariat" (Hofstadter). Often dangerously toxic to host and
          society in general. Also known as the "Us-and-Them" strategy.


</UL>   

 <hr>
<p>
<HR WIDTH=300 ALIGN=center SIZE=3>
<CENTER><A href="${BASE_URL}memes/memework.html#memelinx">Back to Memework</A> | <A href="${BASE_URL}arcmain.html">Nancho Main Archive</A></CENTER>
<HR WIDTH=300 ALIGN=center SIZE=3>
<BLOCKQUOTE>
   
   <FONT  SIZE=-1><STRONG>Share-Right (S), 1990, by Glenn Grant</STRONG>, PO Box 36 Station H, Montreal,<BR>
   Quebec, H3C 2K5. (You may reproduce this material, only if your
   recipients may <BR>also reproduce it, you do not change it, and you
   include this notice. </FONT>.

</BLOCKQUOTE>

`;

  return (
    <div
      className="min-h-screen w-full legacy-page-wrapper"
      style={{ fontFamily: "Times New Roman, Georgia, serif", backgroundColor: 'beige', backgroundImage: `url(${BASE_URL}barks/paper2.gif)`, backgroundRepeat: 'repeat', color: '#000000' }}
    >
      <style>{`
  a { color: #1a40b8; text-decoration: underline; font-weight: bold; }
  a:hover { color: #cc0000; }
  h1, h2, h3, h4, h5, h6 { font-weight: bold; margin-bottom: 0.75em; }
  strong, b { font-weight: 900; }
  ul, ol { padding-left: 2em; margin-bottom: 1em; }
  li { margin-bottom: 0.5em; }
  img { max-width: 100%; height: auto; display: inline-block; }
  blockquote {
    padding-left: 1.5em;
    margin: 1em 2em;
  }
  hr {
    border: 0;
    border-top: 2px solid #333;
    margin: 1.5em auto !important;
  }
  /* Center tag should center its children */
  center {
    display: block;
    text-align: center;
  }
  center table, table[align="center"], table[align="CENTER"], [align="center" i] table, [align="middle" i] table {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  center hr, hr[align="center"], hr[align="CENTER"], [align="center" i] hr, [align="middle" i] hr {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  hr[align="left"], hr[align="LEFT"] {
    margin-left: 0 !important;
    margin-right: auto !important;
  }
  hr[align="right"], hr[align="RIGHT"] {
    margin-left: auto !important;
    margin-right: 0 !important;
  }
  
  /* Alignment attribute mappings */
  [align="left"], [align="LEFT"] {
    text-align: left !important;
  }
  [align="right"], [align="RIGHT"] {
    text-align: right !important;
  }
  [align="center"], [align="CENTER"], [align="middle"], [align="MIDDLE"] {
    text-align: center !important;
  }
  
  td, th {
    text-align: left;
  }
  
  /* Responsive styles for screens smaller than 768px */
  @media (max-width: 767px) {
    blockquote {
      margin-left: 0.5em;
      margin-right: 0.5em;
      padding-left: 0.5em;
    }
    hr {
      width: 100% !important;
      margin: 1em auto !important;
    }
    table {
      width: 100% !important;
      display: block !important;
      overflow-x: auto !important;
    }
  }

  .legacy-page-wrapper, .legacy-page-wrapper :where(p, li, td, th, dd, dt, blockquote, div, span, font) { color: inherit; }
  a { color: #007339; }
  a:visited { color: #1866C5; }
`}</style>
      <div className="legacy-page-content">
        <div dangerouslySetInnerHTML={{ __html: html }} className="w-full" />
      </div>
    </div>
  );
};

export default MemesMemlex;
