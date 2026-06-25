import { useEffect } from "react";

const Sithere1 = () => {
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
<H3><CENTER><EM>BIG MEDICINE 2000<BR>Meme Monger to the Immunogentiles</EM></H3>
<TABLE BORDER=4 HSPACE=12 CELLPADDING=2 >
<CAPTION ALIGN=bottom></CAPTION>
<TR><TD ALIGN=MIDDLE><P><BR><IMG SRC="${BASE_URL}graph/demonr.gif" ALT="Nancho Lite" WIDTH=84 HEIGHT=150 HSPACE=15 VSPACE=10><BR>"Walk that Talk!" </TD><TD align=center width=300>



<img align=middle src="${BASE_URL}bulls/rainstk5.gif" width=270 height=4 vspace=6>
<H3>ARE YOU AN <BR>IMMUNOGENTILE?</H3>
<FONT  SIZE=3 COLOR="#800000"><STRONG>Does the pain of people and places <BR>you hardly know oddly move you?<BR>If not, don't waste your precious time<BR> (or our meager bandwidth).</STRONG></FONT>
<img align=middle src="${BASE_URL}bulls/rainstk5.gif" width=270 height=4 vspace=9></TD>
</TR>
</TABLE></CENTER>

<BR><BR>
<BLOCKQUOTE><FONT  SIZE=3><STRONG>This site is dedicated to the planetic immune community, the inexplicable 10% of you hailing from every age, race, culture and profession who take distant suffering to heart, and are (mysteriously) moved.  If you have ever been active for a righteous cause, felt remote pangs for a perishing land or people, or experienced a shattering moment of erotic identity with another, others or the Other Itself, don't you move a goddamn inch. <BR><BR>As for the rest of you - well, sure, everybody else is welcome too (especially if you send us some sweets before you split), but if you don't feel a really visceral need for new arms or answers, you probably won't understand or appreciate what we have to offer. <BR><BR>

What we do offer here - besides a sideshow of very other climes, crafts and thought criminals - is a surprising new way to look at the world which should at first make perfect sense, then scare the living bejesus out of you with its implications, and finally arouse some nasty laughter and incredible confidence in the Millennial future. </FONT ></BLOCKQUOTE><P>

<HR WIDTH=75% ALIGN=center SIZE=3>
<HR WIDTH=90% ALIGN=center SIZE=4>
<HR WIDTH=75% ALIGN=center SIZE=3>

<BLOCKQUOTE><H3>Our three major premises and points of departure</H3>
<UL><STRONG>
<LI>Our world and Her children are being physically/mentally eaten alive by Big Bodies, a primitive new species of vast social organisms rapidly metastasizing across the planet; 
<LI>Corporate media anesthesia be damned, it�s getting far more wretched out there for most people/species/habitats than better; 
<LI>We have more than enough animal intelligence, memetic potency and twisted genius downtown,
on-line and in the trenches these days to do something rather spectacular about it.
</UL>
Essentially we just have to grow up, repudiate Big Body supremacy, and reclaim our specie's adult sovereign rights over our bodies, societies and evolutionary future. This final cut of Childhood's End  requires a new self-fulfilling prophecy  and we herein offer you the memes or seminal ideas to trigger that transformation. <P>
All we have to do is launch these ideas into the upper reaches of the media to cascade down throughout the Zeitgeist. If they are as potent and self-evident as we believe, millions among us will then awaken to the true nature of our eco-social plight and long postponed possibilities, and orchestrate (if not organize) our formidable immune forces for a final invincible offensive. This campaign to vanquish corporate monoculture may not be easy, but it will certainly be exciting and ultimately irresistible (a billion years of diversifying evolution can't be wrong). With art and a little luck, we might even enjoy a well deserved spiritual and 
erotic jubilee at the millennial checkout in 2001.  <BR><BR>If you want to know more, please cruise the pitch, but if you want to play the game, please observe our first three rules:
<UL>
<LI>Be pretty damn sure you have digested all the main <A href="${BASE_URL}memes/memework.html">memes</A> before you stand up or move out  (half-digested ideas throw up an awful mess).
<LI>Support the <A href="${BASE_URL}stays1.html">3 Stays of Saltation</A> - stay silent, stay aroused and stay unorganized.
<LI>Endure <A href="${BASE_URL}thespiel.html">The Spiel</A> - This is a hardscrabble shareware meme farm - if you pick up anything <BR>here that improves your mood, sex, or apocalyptic vision, give something in return.</UL>
<CENTER><FONT  COLOR=#800040><< We accept barter, custom, ad hoc class acts and (perhaps someday) MasterCard. >></FONT></CENTER><BR>
<HR WIDTH=75% ALIGN=center SIZE=3>
<HR WIDTH=90% ALIGN=center SIZE=4>
<HR WIDTH=75% ALIGN=center SIZE=3><P>
We should also warn off those of you who are concerned about the circles you move in. In fact, we happily dread this is going to be a very bad neighborhood indeed. We expect savory associations with:</STRONG>
<DL>

<DT><STRONG>Sixties Moles</STRONG><dd>The yet inert intrepid who penetrated the system, laid low and silently ascended.
<DT><STRONG>Grateful Heads</STRONG><dd>The unforgetting blessed who inhaled, arose and remember the heights.
<DT><STRONG>Ballsy Rich Fucks</STRONG><dd>Silver-spoon and brass-ring winners looking for a bigger game.
<DT><STRONG>Crazy Niggers</STRONG> (as opposed to blacks, accommodating Afro-Americans and the corporate colored)<dd>The threatened and scary few who never gave up, sold out or bought in.
<DT><STRONG>Feisty Old Farts</STRONG><dd>Pissed and randy elders who remember how it could still be.
<DT><STRONG>Notorious <EM>Ijin</EM></STRONG><dd>The unincorporated "Other People" - individualists, craftsmen, closet outsiders -  who would not take "Join!" for an answer.
<DT><STRONG>Suspicious Little Bastards</STRONG><dd>Annoyingly farsighted brats who keep looking out the window and asking if their schools are so damn smart, why the hell aren't they helping out?
<DT><STRONG>Redneck Monkeywrench Greens</STRONG><dd>The impassioned and impolite end of the activist spectrum.
<DT><STRONG>Insubordinate Nerds, Geeks and Crackers</STRONG><dd>The heroic glial precursors of techno-neural evolution.
<DT><STRONG>Desperado Trenchtowners</STRONG><dd>Angry, exhausted and/or desperate activists, too radical to settle, but too outgunned to win - the relentless in search of the Magic Bullet.
</DL>
<HR WIDTH=75% ALIGN=center SIZE=3>
<HR WIDTH=90% ALIGN=center SIZE=4>
<HR WIDTH=75% ALIGN=center SIZE=3><P>


<STRONG>At any rate, there is a hell of a lot to be done, and only a wild diversity of people jamming with different riffs and axes can pull it off. Once any of thee contracts these ideas, it is solely up to you to act on them in your own peculiar unauthorized / unorganized / unreported ways.</STRONG></BLOCKQUOTE>
 
<HR WIDTH=60%>

<BR>
<CENTER>

<!-- Table Tag --><TABLE BORDER=2>
<A href="${BASE_URL}bigmed2000/index.html" target="_blank"><H3>Join the US Precedential Campaign at<BR>Nancho Big Med 2000</H3></A>
<TR>

<TD><!-- Link Tag --><A href="${BASE_URL}arcmain.html"><!-- Graphic Tag --><IMG WIDTH=100 HEIGHT=36 BORDER=0  SRC="${BASE_URL}butts/btarcbl.gif" ALT="Archives"></A></TD>

<TD></TD>                                                                  <A HREF="#head"><IMG WIDTH=100 HEIGHT=36 BORDER=0  SRC="${BASE_URL}butts/btbackbl.gif" ALT="Back"></A>

<TD><!-- Link Tag --><A href="${BASE_URL}memes/sitstrat.html"><!-- Graphic Tag --><IMG WIDTH=100 HEIGHT=36 BORDER=0 SRC="${BASE_URL}butts/btstratk.gif" ALT="Strategy"></A></TD>

</TR>

</TABLE>
<H5>- This site maintained by Nancho East -</H5>
</CENTER>

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

export default Sithere1;
