import { useEffect } from "react";

const Bigmed2000Index = () => {
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
<FONT  COLOR=#00DB6D></FONT>
<script language="javascript">
pageonload();
</script>
<CENTER><IMG SRC="${BASE_URL}graph/dawn.jpg" WIDTH=600 HEIGHT=124><BR>

<IMG SRC="${BASE_URL}graph/firework!.gif" WIDTH=100 HEIGHT=100><BR>
<IMG SRC="${BASE_URL}graph/snakeup!.gif" WIDTH=30 HEIGHT=209>
<IMG SRC="${BASE_URL}graph/grlotus1.jpg" ALT= "Alex Grey's Chakra Tree" WIDTH=189 HEIGHT=209>
<IMG SRC="${BASE_URL}graph/snakeup!.gif" WIDTH=30 HEIGHT=209>
<H3>
Click on our patient below to move on to <BR><A href="${BASE_URL}">BIG MEDICINE 2001, <BR>the Real Millennium and
<BR>Year of the Golden Serpent</A></H3>
<STRONG>A time of seductive arts, rising illumination and strange numinous power.</STRONG><BR>
(In case you don't put much stock in these quaint superstitions, <BR>
recall that 2000 was a Golden Dragon Year, infamous in the Orient <BR>
for unpredictable eruptions and uproar. Considering just Milosevitch, Israel, the NASDAQ,<BR>
and America's electoral carnage, the elder Asians would simply smile, "Q.E.D".<P>
<P><P>

<H4>BIG MED'S PATIENT OF THE YEAR<BR>
A Fever Chart of Planet Earth</H4>



<A href="${BASE_URL}bigmed2001/index.html"><IMG SRC="${BASE_URL}graph/earthlis.jpg" WIDTH=599 HEIGHT=278></A>
<BR><FONT  SIZE=+1>Bright Areas Show Malignant Spread of Corporate Hives</FONT><BR>(Where corporate driven consumption threatens the Earth and all mankind.)
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

export default Bigmed2000Index;
