import { useEffect } from "react";

const MemesSitstrat = () => {
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

<CENTER><IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=450 HEIGHT=8>
<H2>MEME CASCADES<BR>Cloudseeding the Zeitgeist</H2>
<H4>No matter how true, sane or inspiring a new idea may be, <BR>it can't sprout until its sown and known. <BR>(Ask the godforsaken <A href="${BASE_URL}cityhall/ignaz.html">Dr. Semmelweis</A>...)<BR>Getting out the Word is thus the name of the game.<br>
<IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=450 HEIGHT=8>
</CENTER><BR>

<BLOCKQUOTE><HR WIDTH=90% ALIGN=center SIZE=3>

<BLOCKQUOTE><FONT  COLOR=#800000><STRONG>Nancho Advisory: </STRONG>In the voice of friend &amp; mentor, <A href="${BASE_URL}adepintr.html#Howardsan">Howard Rheingold</A>: "People think and behave the way we do in large part because we have words that make these thoughts and behaviors possible, acceptable and useful. If you want to change the way people think, you can educate them, brainwash them, bribe them, drug them...or you can teach them a few carefully chosen new words."</FONT></H4></BLOCKQUOTE>
<HR WIDTH=90% ALIGN=center SIZE=3><BR>
<STRONG>
 <FONT SIZE=3>There are actually a pile of United Nations studies on the spread of memes or ideas that illuminate our task. The UN focus was how to best ration scarce staff to implant non-profit memes like "vaccination," "condom" or "toilet hole" in the villages of the world. They found that if their field people left a place before the new idea "took", it whithered and died; conversely, staying too long after it was solidly rooted wasted precious time. They happily discovered a simple formula:<P>
<CENTER><H3>[ ( New Meme <I>&lt </I>+<I>&gt </I> ) x 10% ] + [ ( New Meme <I>&lt </I>+/-<I>&gt </I> ) x 30%] = 100% Pregnant</H3></CENTER>
That is, if 10% of a community actively supported a new idea and another 30% had at least heard of it, it was safely implanted, and the team could confidently move on to the next hamlet. From that point on, it was a purely matter of virtue. If the meme really worked as advertised, it would now spread through the group mind on its own. <P>
(In fact, if the meme worked wondrous well, far lower percentages could trigger dissemination. The spread of food washing among Japan's Kojima island macaques that inspired the <A href="${BASE_URL}advisors/watsonly.html#monkey">Grand Hundredth Monkey myth</A> is just one familiar example - and that entire revolution was set off by just one ballsy young primate wench.)<P>
Thanks to her and the UN, one strategic avenue is clear - we simply have to expose our memes to about 40% of a population (and trust that at least a quarter of those exposed both try and like the ideas). Given the near universal access of this media-intensive age, if we could thus just trigger a CASCADE or ramifying avalanche of these memes from the cybersphere, we could expose a fair size population pretty damn fast. And the population of first choice is, of course, the netizen world: 
<UL>
<LI>First, because pulling off a CASCADE requires the vantage of the mental highlands; 
<LI>Second, because so many of you connect to strangely influential networks outside the wired world; 
<LI>And finally, because you're some of the brightest, richest, easiest to fondle animals on the planet.
</UL></BLOCKQUOTE>

<H3>Thus we reach out to thee for tactics, aid and abetment. But before all else, please:</H3>
<UL>
<LI><STRONG>CONVINCE YOURSELF! </STRONG><BR><BR><CENTER>Until you can personally see what all this means and how it can work, you are not a very contagious source.</CENTER><P>
<LI><STRONG>Rummage around the neighborhood</STRONG><P> <CENTER>Read through the Archive and if you find any ideas you resonate with take them home, develop them and release them to your world.</CENTER><P>
<LI><STRONG>OBSERVE EARTH HOUR</STRONG>  <P><CENTER>Get a full moon calendar (or print out ours), check the time of Earth Hour in your timezone and alpha attend to it. That is, quiet thy self into an alpha state and imaginatively float in the vast web of historical / genetic / biological connections that support thy brief and shining moment. (Check out "<A href="${BASE_URL}earthour/ehatech.html">Intimating Alpha</A>" for some royal roads to the alpha highland.)</CENTER><P>
<LI><STRONG>SEND US IDEAS!</STRONG> <P><CENTER>Tactics you can pull off on your own, go for it! Tactics you need help with or want to share, please communicate. For our part we need all manner of help, from bumper sticker designs and scientific research quotes to video project sponsors and vast network collusion. Send all thy brilliant / bizarre / bemusing suggestions to:</CENTER></STRONG>
</UL>

<CENTER>
<IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=130 HEIGHT=4><BR>
<H3><A HREF="mailto:bigmed@nancho.net"><U>BIG MEDICINE</U></A></H3>
<IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=130 HEIGHT=4><BR></CENTER>

<p>
<HR WIDTH=300 ALIGN=center SIZE=3>
<CENTER>
<A href="${BASE_URL}memes/memework.html">Memework</A> 
| <A href="${BASE_URL}arcmain.html"> Archives</A> 
</CENTER>
<HR WIDTH=300 ALIGN=center SIZE=3>


</FONT><P>
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

export default MemesSitstrat;
