import { useEffect } from "react";

const Bigmed2001Nanmain = () => {
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

<CENTER><FONT  SIZE=4 COLOR=#00006A ><EM><STRONG><Nancho presents></STRONG> </EM></FONT>
<TABLE BORDER=3 cellpadding=7>
<TR><TD BGCOLOR=#0000A0 ALIGN=MIDDLE>


<FONT  SIZE=4 COLOR=#DBDCA3>
<STRONG><U>BIG MEDICINE 2001</U> <BR>
Curing the Corporate Ills <BR>of the New Millennium</STRONG></FONT><BR>
<FONT  COLOR=#FFFFE8><IMG SRC="${BASE_URL}bigmed2001/graph/vision5.jpg" ALT="Let us lift our vision..." WIDTH=378 HEIGHT=93 HSPACE=9 VSPACE=9 BORDER=3>

</FONT>

</TD></TR></TABLE><BR>
</CENTER>

 <BLOCKQUOTE><BLOCKQUOTE><STRONG><CENTER><IMG SRC="${BASE_URL}graph/jclulin.gif" WIDTH=380 HEIGHT=4 VSPACE=6> <BR><FONT  COLOR=#D20020 FONT  Size=4>We Are Still Recompounding<BR>BIG MEDICINE<BR>For the 21st Century</FONT>
<P>
Please check back with us <BR>after Lunar New Year on January 24th...
 <BR><IMG SRC="${BASE_URL}graph/jclulin.gif" WIDTH=380 HEIGHT=4 VSPACE=9><BR><FONT  Size=3>
<CENTER><FONT  SIZE=4><STRONG>In the meantime, please cruise the archives <BR>of the <A href="${BASE_URL}bigmed2001/nanmain2.html">Campaign 2000 site</A> and check out <BR>the new offerings in the <A href="${BASE_URL}bigmed2001/av.html">Big Med A/V Library</A>.

</STRONG></FONT></CENTER>
<IMG SRC="${BASE_URL}graph/jclulin.gif" WIDTH=380 HEIGHT=4 VSPACE=9><P><FONT  Size=3>

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

export default Bigmed2001Nanmain;
