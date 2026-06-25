import { useEffect } from "react";

const KyotoKyoijin = () => {
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

<CENTER>

<TABLE BORDER=5 CELLPADDING=5>

<TR><TD ALIGN=MIDDLE><FONT  SIZE=5><B>Voices From An <EM>Other</EM></B></FONT>
<BR><IMG SRC="${BASE_URL}graph/kyoto.gif" WIDTH=200 HEIGHT=84 vspace=10></TD><TD ALIGN=MIDDLE>


<IMG SRC="${BASE_URL}bulls/advline1.gif" WIDTH=200 HEIGHT=4> <BR><BR><H2><U>KYOTO IJIN</U></H2><FONT  SIZE=4>THE MIYAKO'S MANTIC <BR>"OTHER" PEOPLE </STRONG><BR> <HR WIDTH=180 ALIGN=center SIZE=3>Incensed, Aggrieved, Exhilirating <BR>Interviews with Kyoto's <BR>Intrepidly Unincorporated</FONT><BR><BR><IMG SRC="${BASE_URL}bulls/advline1.gif" WIDTH=200 HEIGHT=4></TD></TR>
</TABLE>

<BR><BR>
<IMG SRC="${BASE_URL}bulls/advline1.gif" WIDTH=399 HEIGHT=6></CENTER><P>
<BLOCKQUOTE><BLOCKQUOTE><H4>Everybody knows Japan's Corporate Bodies. Sony, Honda, Yamaha, Nintendo, Canon, Mitsubishi and a score of other vast "legal persons" are now household names in the !st, 2nd and 3rd Worlds. (In contrast, one notorious 1995 survey asked Americans to list 3 famous Japanese: hands-down winners - Bruce Lee, Godzilla and Yoko Ono.) Obviously, outsiders know few of Japan's human inhabitants, let alone what they think, dream or feel. Nancho thus takes great pleasure in introducing a few of Kyoto's (thousands of)  remarkable individuals and their eloquent hopes and fears for this troubled land.</H4></BLOCKQUOTE></BLOCKQUOTE>

<CENTER>
<IMG SRC="${BASE_URL}bulls/advline1.gif" WIDTH=399 HEIGHT=6><P>
<HR WIDTH=340 ALIGN=center SIZE=3>
<FONT  COLOR=#800000><STRONG>Please Click on the Names for Interview Texts</STRONG></FONT>
<HR WIDTH=340 ALIGN=center SIZE=3>
</CENTER>
<UL>


<LI><DT><H3><A href="${BASE_URL}advisors/inamori.htm">Iconoclastic Entrepreneur, Inamori Kazuo</A></H3><dd><CENTER><STRONG>"There is no fixed boundary to human creative potential. You must become
          unshakably convinced that nothing is impossible... and in all
          your endeavors strive to position yourself in the center of the whirlpool."</STRONG></CENTER><P>
<LI><DT><H3><A href="${BASE_URL}kyoto/ylee.html">Korean Rights Activist, Lee Yumi</A></H3><dd><CENTER><STRONG>"Japanese society is a vertical, hierarchical society. Always somebody has to be up and somebody down. There is so much pressure that needs an outlet that Korean people are often used as scapegoats. Last year, a politician announced that some North Korean organization was dangerous. The next day, Korean students were attacked in Kyoto; their  dresses were cut and they were kicked and insulted. There were ten incidents a day, all over Japan. A Korean grade school student was interviewed and said "An old Japanese woman asked me why I am here." This tiny girl!"</STRONG></CENTER><P>

<LI><DT><H3><A href="${BASE_URL}kyoto/nadamoto.html">Buraku ("Outcaste") Liberationist, Nadamoto Masahisa
</A></H3><dd><CENTER><STRONG>"There needs to be a change of consciousness so that people have confidence in themselves... They lack the personality of independent individuals. They have probably been shaped by the patterns of discrimination and the corrective movement over the past thirty years. They have a sense of disgrace as children of the <EM>eta</EM>. Everyone thinks discrimination
comes only from the outside world, and that is the source of their pain. But it is actually coming from inside themselves, too."</STRONG></CENTER><P>

<LI><DT><H3><A href="${BASE_URL}kyoto/nonaka.html">Craft Visionary, Nonaka Akira</A></H3><dd><CENTER><STRONG>"Japan envied western industrial power so we copied their most industrial education systems. Serving the individual, serving the nation's history or culture, even serving Japan's long-term best interests were never even an educational question. Everything, everybody was to serve the industrial system. There had been indigenous educational traditions for craftspeople that grew up during Edo, and the new system set out to systematically destroy them. The fewer self-employed craftsmen there were, the more jobless laborers would be available for industry."</STRONG></CENTER><P>


<LI><DT><H3><A href="${BASE_URL}kyoto/ono.html">Human Rights Pioneer, Ono Nobuyuki</A></H3><dd><CENTER><STRONG>"The whole idea of human rights begins with self-respect and a sense of what is valuable in one's life. People are losing the habit or capacity for sympathy, compassion. It is bound up with your sensitivity to your environment generally. When your environment is damaged, it can scar you too. Many people cope with that pain by turning themselves off, by learning to feel less. It is not just an aesthetic problem. It has a lot of important social and political effects."</STRONG></CENTER><P>
<LI><DT><H3><A href="${BASE_URL}advisors/takayama.html">Yakuza Godfather, Takayama Tokutaro</A></H3><dd><CENTER><STRONG>"The big corporations and the bureaucracy, the officials here,
     they're the real ruling class. And they guarantee their position at the top by making
     sure there is a permanent crowd down at the bottom. Hell, they want outlaws,
     criminals, desperate people out there on the streets. It frightens the wits out of the
     middle class and keeps them quiet.  And then when the government says they need
     more money for security, more police, more sacrifice of your rights and more
     interference in your life, nobody says a word."</STRONG></CENTER><P>
<LI><DT><H3><A href="${BASE_URL}kyoto/c-ueno.html">Feminist Warrior, Ueno Chizuko</A></H3><dd><CENTER><STRONG>"The important thing is to define the main enemy, the main and common enemy of people in a
     variety of situations. Partly so groups working on different problems can cooperate and don't end up,
     like some of our discriminated minorities, competing with each other; and partly to just get better ideas
     on how to defend ourselves, how to survive."</STRONG></CENTER><P>

<LI><DT><H3><A href="${BASE_URL}kyoto/yamaguch.html">Nishijin Master Weaver, Yamaguchi Itaro</A></H3><dd><CENTER><STRONG>"On the whole, the biggest factor in the destruction of
     Nishijin is the national education system. It has totally alienated people from
     the life of craftsmanship."</STRONG></CENTER>

</UL>



<HR WIDTH=90% ALIGN=center SIZE=3>



<HR>
<CENTER>
<TABLE BORDER=3>
<TR><TD><A href="${BASE_URL}arcmain.html#alt.kyoto"><IMG SRC="${BASE_URL}butts/buttarch.gif" WIDTH=100 HEIGHT=36 BORDER=0 ALT="Archives"></A></TD></TR>
</TABLE>
</CENTER>



<H5>
<A href="${BASE_URL}sharight.html">Shareright </A>(S) 1998 : Nancho Ijin Butai 
</H5>
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

export default KyotoKyoijin;
