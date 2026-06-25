import { useEffect } from "react";

const Bigmed2001Nh = () => {
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
<CENTER><TABLE BORDER=3 CELLPADDING=8 CELLSPACING=8>
<TR><TD BGCOLOR=#0080C0 ALIGN=MIDDLE>
<STRONG>B<FONT SIZE=-1>IG </FONT>M<FONT SIZE=-1>EDICINE </FONT>C<FONT SIZE=-1>AMPAIGN </FONT>N<FONT SIZE=-1>OTES</FONT></STRONG><HR>
<H3>NEW HAMPSHIRE 2000<BR>
The Democratic VP Primary</H3>
</TD></TR>
</TABLE>
</CENTER>

<BLOCKQUOTE><UL>
<LI> <STRONG><A href="${BASE_URL}bigmed2000/warbull.html">The Road In </A>(<FONT  SIZE=-1>AKA</FONT> The Warren Beatty Debacle)</STRONG> - in which we discover <BR>that the Spirit of Bulworth did indeed pass away leaving only a very frail ghost.
<LI><A href="${BASE_URL}bigmed2000/solongnh.html"><STRONG>Cassandra Call: The Big Body Threat to New Hampshire &amp; Democracy</STRONG></A> <BR>(The only peril not prophetically addressed in this appeal was the Republicans' 
<BR>late-inning electoral larceny, which made George W the second man in history 
<BR>to gain the presidency without winning the NH primary. The first was Clinton in '92.)
<LI><A href="${BASE_URL}nh/nhfly.html"><STRONG>The Big Medicine Flier</STRONG></A> - Our plain but potent appeal to the Live-Free-or-Die crowd.
<LI><A href="${BASE_URL}ram/nhcspan.ram"><STRONG>Our CSPAN NH Debut</STRONG></A> - 20 minutes from the "Lesser Known Candidates' Debate".<BR>Presents basic Big Med positions and selected riffs from other worthy candidates. (RealVideo)
<LI><A href="${BASE_URL}bigmed2000/nhfinal.html"><STRONG>The Smashing Results</STRONG></A> - Seeing is believing. We carried every county in the state.
<LI><A href="${BASE_URL}bigmed2000/getreal.html"><STRONG>What Happened Then</STRONG></A> - Why we folded our tents in hopes of a serious Nader challenge.
</UL></BLOCKQUOTE>

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

export default Bigmed2001Nh;
