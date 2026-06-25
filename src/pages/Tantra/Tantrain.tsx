import { useEffect } from "react";

const TantraTantrain = () => {
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

<H3><CENTER><EM>Tantra & Awakened Bodies</EM></CENTER></H3>
    <CENTER><TABLE WIDTH=550 CELLPADDING=6>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/aizenrss.jpg" WIDTH=150 HEIGHT=191 ALT="Aizenmyo-o : Buddhist Diety of Erotic Fire" HSPACE=25 BORDER=3 ></TD><TD>
<CENTER><img align=middle src="${BASE_URL}bulls/redblk.gif" width=300 height=6></CENTER><P>
<H3><CENTER>RE-ENCHANTING THE ENDANGERED ANIMAL<BR>
<HR WIDTH=210 ALIGN=center SIZE=3>
References for remembrance</CENTER></H3>
<CENTER><img align=middle src="${BASE_URL}bulls/redblk.gif"  width=300 height=6><P></CENTER></TD></TR>
</TABLE></CENTER>

<BR>  

<BR><BR>
<BLOCKQUOTE><BLOCKQUOTE><FONT  SIZE=+1><STRONG>
Tantra for Terra Erotica
<UL>
<LI><A href="${BASE_URL}tantra/tangrail.html">Meditations on the Tantric Grail</A> <BR>- Old Maps &amp; Buried Pleasure<P>
<LI><A href="${BASE_URL}tantra/tantween.html">Song to Omega</A> <BR>- Epiphany &amp; the Torrents of Tween
</UL>
<P>
Links
<UL>



<LI><A HREF="http://www.luckymojo.com/sacredsex.html" target="_blank">
Sacred Sex</A> <BR> Information on Karezza, Tantra, and Sex Magic<BR>
Info ranges from deep and fine to fun and flaky...
<P>
<LI><A HREF="http://www.tantraworks.com/tantrawk.html" target="_blank">
Tantra Works</A> <BR>Good essays, links, and art.
<P>
<LI><A HREF="http://www.hubcom.com/tantric/" target="_blank">
Hindu Tantrik Home Page</A> <BR>Compendium of classical (and often corrupted) lore

</UL>

</BLOCKQUOTE></BLOCKQUOTE>


</STRONG> </FONT>






<HR WIDTH=60%>


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

export default TantraTantrain;
