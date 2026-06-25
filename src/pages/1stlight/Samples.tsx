import { useEffect } from "react";

const Page1stlightSamples = () => {
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
<IMG SRC="${BASE_URL}bulls/plasma.gif" WIDTH=300 HEIGHT=6>

<H3><EM><STRONG>kyoto coven works</STRONG></H3>
<H2>trans-genre jams <BR>with the hidden virtuosos of asia</EM></H2>
<H3>Tsuyu Typhoon<BR>
Real Audio Samples
</H3>
<IMG SRC="${BASE_URL}bulls/plasma.gif" WIDTH=300 HEIGHT=6>
<blockquote>
<table cellpadding=22>
<TR><TD>

<a href="${BASE_URL}1stlight/samples/ncounter.ram">Encounter in Summertime</a> <BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>5:50</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/daring.ram">Daring Fourplay</a> <BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>3:52</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/south.ram">South Chakra Song</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>7:52</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/mandel.ram">Mandeltrance</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>9:14</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/second.ram">Second Thoughts Serenade</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>1:43</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/mamacant.ram">Mama Can't Mind</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>3:40</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/javaknee.ram">Java Knees Skittle</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>2:40</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/kama.ram">Kama Sutralight</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>5:32</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/davidroc.ram">David Rockefeller Vexes the Queen</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>6:14</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/pleasing.ram">Pleasing Her</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>6:21</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/musetant.ram">Muse Tantra</a><BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>9:03</b></font></TD></TR>
<TR><TD><a href="${BASE_URL}1stlight/samples/afterglo.ram">Afterglow: Cicada Sunset</a> <BR>
</TD><TD>&nbsp;&nbsp;<font size="2"><b>6:17</b></font>

</TD><TD>
</TD></TR>
</TABLE>
</blockquote>

</font>

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

export default Page1stlightSamples;
