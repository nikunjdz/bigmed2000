import { useEffect } from "react";

const NewchauNchistry = () => {
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

<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5 vspace=9><BR>
<STRONG> <FONT  SIZE=4 COLOR=#000055>NEW CHAUTAUQUA ARCHIVES</font></STRONG><br>


<div align="center"><IMG SRC="${BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>
<img src="${BASE_URL}graph/BIGBODBM.jpg" width="117" height="223" hspace="12" border="0" align="left" alt="">
<table width="550" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<strong>
<uL>
<LI><a href="${BASE_URL}newchau/arc/" target="_blank">New Chautauqua Web Site Archive</a><br>

<LI><a href="http://maine.indymedia.org" target="_blank">Maine IndyMedia</a> Chautauqua Coverage  <br>
<UL>
<LI><a href="http://imcmedia.berogard.psouth.net/real/NC/Carolyn_Chute_360x240_8fps.rm">Carolyn Chute &amp; Richard Grossman</a> (RealVideo - 33 min.)
<br>

<LI><a href="http://imcmedia.berogard.psouth.net/real/NC/GrannyD-360x240-10fps.rm">Doris "Granny D" Haddock</a> (RealVideo - 38 min.)
</ul>
<LI><a href="http://www.weru.org" target="_blank">WERU</a> Chautauqua Coverage &nbsp;&nbsp; (streaming audio)
<UL>
<LI><a href="http://www.radio4all.net/proginfo.php?id=3649">David Kubiak</a>  - 9/13/01
<LI><a href="http://www.radio4all.net/proginfo.php?id=3742">Jim Hightower</a> - 9/21/01
<LI><a href="http://www.radio4all.net/proginfo.php?id=3694">Reverend Billy &amp; Ethan Miller</a>  
- 9/22/01
</UL>
<br><br>
<a href="${BASE_URL}newchau/jhfinal.html" target="_blank">Short Jim Hightower Interview</a> - 9/22/01<br><br>



<hr align="left" width="400" size="3"><br>

<LI><a href="http://maine.indymedia.org" target="_blank">Buy Chautauqua Audio/Video Tapes from Maine Indymedia</a> <br>
<LI><a href="http://radiofreemaine.com/" target="_blank">Buy Chautauqua Audio/Video Tapes from Radio Free Maine</a> <br>
</ul>
	</strong>
	
	</td>
</tr>
</table></div>


<br><div align="center"><a href="${BASE_URL}newchau/" target="_top"><img src="${BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a></div><p>
<div align="center"><font SIZE="-1" face="Verdana,Arial,Helvetica"><a href="${BASE_URL}newchau/ccgoals.html">Goals</a> | <a href="${BASE_URL}newchau/ccplay.html">Play</a> |  <a href="${BASE_URL}newchau/gospels.html">Study</a> | <a href="${BASE_URL}newchau/ccnews.html">News</a> | <a href="${BASE_URL}newchau/faq.html">FAQ</a> | <a href="${BASE_URL}newchau/contact.html">Contact</a> | <a href="${BASE_URL}newchau/cchelp.html">Help</a> | <a href="${BASE_URL}newchau/nchistry.html">Archives</a></font></div>
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

export default NewchauNchistry;
