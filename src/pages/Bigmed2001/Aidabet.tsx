import { useEffect } from "react";

const Bigmed2001Aidabet = () => {
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

<STRONG>"Walking on water wasn't built in a day."</STRONG><BR>Kerouac to Ginsberg, 1967
<P>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5><BR>
<BLOCKQUOTE><H2><FONT  COLOR=#000055>N<FONT SIZE=-1>ANCHO </FONT>A<FONT SIZE=-1>ID </FONT>&amp;  A<FONT SIZE=-1>BETMENT</FONT><BR><FONT  SIZE=3>Begin play right away...</FONT></FONT></H2></BLOCKQUOTE>

<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5></CENTER>
<BLOCKQUOTE><BLOCKQUOTE><FONT  COLOR=#000080><STRONG>
Big Medicine is flat broke and starting from scratch against horrendous odds and monstrous foes. So, yes, we need a bit of help. 
Although evolutionary momentum, our sense of  justice and the pleasure principle ensure that we triumphantly belittle Big Bodies in the final reel,  we can save an awful lot of species, children and self-respect if we work to hasten the process now. Indeed the grand coincidence of the <A HREF="http://www.millenniuminstitute.net/misc/begins.html" target="_blank">2-year Millennium</A>, Internet's abrupt epiphany, and  this desperately vacuous election offers us a rare chance to accelerate this transformation exponentially.  
<P>
We therefore request your active aid  to get out the Big word and generate so many forms of ingenious resistance that the Big Bodies will finally lose heart (or at least their rapacious esprit de corps), melt down (relatively) peaceably, and stop fighting to rule the beings they were intended to serve. <P>
To that devoutly desired end, all contributions are lavishly appreciated. In particular we are requesting:
</FONT></STRONG></BLOCKQUOTE>
<STRONG><UL>
<LI><DL><FONT  SIZE=4>Y<FONT SIZE=-1>OUR </FONT>A<FONT SIZE=-1>TTENTION</FONT></FONT><DD><FONT  COLOR=#000080>
More vital than your precious vote or money is your focused attention - for when that is engaged all else will follow. If you possess the slightest social conscience, once you see  that shrinking and democratizing Big Bodies will cure 80% of our most painful eco-social ills in a single stroke, whatever you do afterward -- with or without us -- will doubtless be the Right Thing.</FONT></DL>
<P>
<LI><DL><FONT  SIZE=4>Y<FONT SIZE=-1>OUR </FONT>I<FONT SIZE=-1>MAGINATION</FONT></FONT> <DD><FONT  COLOR=#000080>
Although Big Bodies are objectively quite new, trying to imagine life without them today is as difficult as imagining life free of aristocracy and popes in the Dark Ages or life without the all-powerful Party in Stalinist Russia or Maoist China.  For children of this century,  Big Bodies and their propaganda have always been with us controlling our media, our politics, our opinions of our bodies, worth and lives. 
 <P>
After Big Bodies, what? Would you believe community based media, worker controlled factories, a rebirth of craft work, small cities, non-toxic family farms, et perfectly credible cetera. In other words, a sensual renaissance of regional character, values and diversity attuned to the local environment and responsive to  the will of the people. This is what we see. Is it really so hard to imagine?</FONT></DL><P>

<LI><DL><FONT  SIZE=4>Y<FONT SIZE=-1>OUR </FONT>T<FONT SIZE=-1>IME</FONT></FONT> <DD><FONT  COLOR=#000080>
Once you grasp the problem, we would ask you to devote a personal Time Tithe to its solution - in this case, 10% of our national per capita TV time or about 4 hours each week. It makes no difference whether you spend that time studying Big pathology, helping this campaign or working in your own innovative unauthorized ways. (We sincerely urge you to practice Big Medicine without our license. We hardly want to build another Big Body of our own, since inhuman scale in <U>any</U> organization perpetuates the very plague we're fighting. When you understand we must drastically downscale <U>all</U> our reigning corporate bodies, your ideas will likely be as good as ours and your tactics more suited to your scene.</DL></FONT></FONT>
<P>
<LI><DL><STRONG><FONT  SIZE=4>Y<FONT SIZE=-1>OUR </FONT>S<FONT SIZE=-1>KILLS &amp; </FONT>R<FONT SIZE=-1>ESOURCES</FONT></FONT><DD><FONT  COLOR=#000080>
For those who wish to help this campaign directly, we need a whole range of talents - networkers, artists, educators, futurists, hackers et creatively diverse alii (see <A href="${BASE_URL}spielist.html">Help Further Out</A>). And yes, we also need money - only a few percent of what a "normal" Big election campaign costs, but by normal human standards serious money nonetheless.If you can help in any way with this campaign or one of its Big educational initiatives, may blessings rain upon thee. Our alms box resides <A href="${BASE_URL}bigmed2001/support.html">here</A>. </FONT></DL></STRONG>
</UL>
</BLOCKQUOTE>



<CENTER>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5><P>
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

export default Bigmed2001Aidabet;
