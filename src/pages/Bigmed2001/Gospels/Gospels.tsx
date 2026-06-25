import { useEffect } from "react";

const Bigmed2001GospelsGospels = () => {
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
<TABLE BORDER=3 cellpadding=7>
<TR><TD BGCOLOR=#0000A0 ALIGN=MIDDLE>

<IMG SRC="${BASE_URL}bigmed2001/graph/nodoubt1.jpg" ALT="Never doubt..." WIDTH=470 HEIGHT=128 BORDER=3>
</TD></TR>
</TABLE><BR>
<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5><BR>
<BLOCKQUOTE><H2><FONT  COLOR=#000055>N<FONT SIZE=-1>ANCHO </FONT>B<FONT SIZE=-1>IG </FONT>M<FONT SIZE=-1>EDICINE </FONT>G<FONT SIZE=-1>OSPELS</FONT><P><FONT  SIZE=3>Touchstone Texts for Big Battles to Come</FONT></FONT></H2></BLOCKQUOTE>

<IMG SRC="${BASE_URL}bigmed2001/graph/advline2.gif" WIDTH=75% HEIGHT=5><BR><BR>
</CENTER><P>
<FONT  SIZE=3>

<BLOCKQUOTE><BLOCKQUOTE><STRONG><U>Big Bod Genesis</U></STRONG>
<UL>
<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigmed2001/gospels/socasorg.html">Societies as Organisms</A> - - Lewis Thomas</FONT></STRONG>
<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigbody/apforum1.html">The Big Body Problem</A> - - W.D.K.</FONT></STRONG>
<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}kipower/kisoma.html">The Culture of Corporate Beings</A> - - W.D.K.</FONT></STRONG><BR>
</UL>
<STRONG><U>Acts &amp; Revelations</U></STRONG>
<UL>
<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigbody/knox1.html">The Trouble with Corporations</A> - - Barbara Knox </FONT></STRONG>
 <LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigmed2001/gospels/corprule.html">Emerging Corporate Governance</A> - - Tony Clarke et al.</FONT></STRONG>

<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigmed2001/gospels/lawguild.html">Fighting Corporate Power</A> - - The National Lawyers Guild</FONT></STRONG>

<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigmed2001/gospels/ivinstax.html">A Tax Plan to Help the Rich</A>  - - Molly Ivins </FONT></STRONG>
<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigmed2001/gospels/hightow.html">The Money Primary</A> - - Jim Hightower </FONT></STRONG><BR>
</UL>
<STRONG><U>Epistles to the Mad as Hell</U></STRONG>
<UL>
<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigmed2001/gospels/dugger.html">Real Populists Please Stand Up!</A> - - Ronnie Dugger</FONT></STRONG>
 <LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigbody/chrtink1.html">Taking Care of Business</A> - - Grossman &amp; Adams</FONT></STRONG>
 <LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigmed2001/gospels/ventura1.html">A Primer on Revolution</A> -- Michael Ventura</FONT></STRONG>
<LI><STRONG><FONT  COLOR=#0000bb><A href="${BASE_URL}bigmed2001/gospels/jusayes.html">Just Say Yes</A> - - John Perry Barlow </FONT></STRONG>


</P>

</UL></BLOCKQUOTE></BLOCKQUOTE>


<HR WIDTH=200 ALIGN=left SIZE=2>
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

export default Bigmed2001GospelsGospels;
