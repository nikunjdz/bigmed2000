import { useEffect } from "react";

const FdlapFdlalert = () => {
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
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4 VSPACE=6><BR>
<FONT  SIZE=+3 COLOR=#FF0000><STRONG><EM>FDL-AP ALERTS</EM></STRONG></FONT>
<HR WIDTH=220 ALIGN=center SIZE=2>
<FONT  SIZE=+1 COLOR=#800000>Highlighting problems of particular urgency <BR>in the Asia-Pacific with links to background literature<BR> and groups working to resolve them.</FONT><BR><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4></CENTER>
<BR><BLOCKQUOTE><EM><STRONG>Background:</STRONG> Like all associations with boundless hopes and limited means, the FDL-AP is obliged to focus its resources on a few battles at a time. Although we are now working intensely on Burma, Cambodia, and youth education, we are of course also deeply concerned with the many other tragedies in the region. This section will therefore try to illuminate lesser known struggles in the Asian neighborhood, which are also committed to self-determination, human rights and social justice. Due to its length, body count and now nuclear aspects, we begin with the Kashmir conflict, but also invite your assistance to expose other movements which desperately require public attention and support. </EM></BLOCKQUOTE><CENTER>
<HR WIDTH=300 ALIGN=CENTER SIZE=3>
<H3> KASHMIRI INDEPENDENCE<BR>Key to Defusing the Indo-Pakistani Nuclear Standoff</H3> 
<H4>Links and references for action</H4>
<HR WIDTH=300 ALIGN=CENTER SIZE=3><BR>
</CENTER>
<TABLE>
<TR><TD><IMG SRC="${BASE_URL}bulls/dot_clea.gif" WIDTH=1 HEIGHT=1></TD><TD>

	<FONT  SIZE=4>

<UL>
<LI><A href="${BASE_URL}fdlap/kashmir/outlookf.html"><STRONG>Till Freedom Come</STRONG></A> - 1995 OUTLOOK/MODE Kashmir Public Opinion Poll<P>
<LI><A href="${BASE_URL}fdlap/kashmir/jknyt1.html"><STRONG>The Kashmir Tinderbox</STRONG></A> - New York Times Editorial <P>
<LI><A href="${BASE_URL}fdlap/kashmir/jkstates.html"><STRONG>Talk, Don't Race</STRONG></A> -  Editorial from India's Statesman Newspaper<P>
<LI> <A href="${BASE_URL}fdlap/kashmir/jkplea.html"><STRONG>Plea for Kashmiri Self-Determination</STRONG></A> by East Timorese Nobel Peace Laureate Jose Ramos Horta<P>

<LI> <A href="${BASE_URL}fdlap/kashmir/kashplus.html"><STRONG>Advantages of an Independent Jammu & Kashmir</STRONG></A><P>
<LI> <A href="${BASE_URL}fdlap/kashmir/pledges.html"><STRONG>Quotes on Kashmiri Self-Determination</STRONG></A> <BR>by the founding fathers of India & Pakistan<P>

<LI> <STRONG>1999 UN Hague Appeal for Peace Proposal</STRONG>
<H4><A href="${BASE_URL}fdlap/kashmir/hapkash.html">FROM CANTONMENTS TO CANTONS <BR>-- A Modest Proposal for Kashmir</A></H4>
<H4>A sweeping new proposal to test Switzerland's proven <BR>direct democratic system to multi-ethnic Kashmir and beyond.</H4>
<P>
<H4><A href="${BASE_URL}fdlap/swissdd1.html">HIGHLIGHTS OF THE SWISS SYSTEM <BR>-- Excerpts from "Swiss Political Institutions" by Oswald Sigg</A></H4>
<LI> <STRONG>Collateral Views from Pakistan</STRONG>

<H4><A href="${BASE_URL}fdlap/kashmir/nahmad.html">SETTLING KASHMIR<BR>
Prospects for Peace, Justice, Independence...</a></H4>
<H4>Interview with Lt. Gen. (Retd)  Nishat Ahmad <BR>
Director, Institute of Regional Studies, <BR>Islamabad, Pakistan<H4>
<H4><A href="${BASE_URL}fdlap/jehangir.html">DEMOCRACY IS SURVIVAL FOR WOMEN</A></H4>
<H4>An Interview with human rights crusader Asma Jehangir <BR>on the plight of women &amp; children,<BR> and the fundamentalist threat in Pakistan today</H4><P>
<H4><A href="${BASE_URL}fdlap/imran.html">ISLAM MEANS JUSTICE, <BR>
AND JUSTICE MEANS RIGHTS</A></H4>
<H4>An Interview with cricket legend turned fiery social/political activist,<BR> Imran Khan on the fight for democratic reform in Pakistan
</H4>

<LI> <STRONG>A Collateral View from India</STRONG>

<H4><A href="${BASE_URL}fdlap/khosla.html">TURN THE SYSTEMS OF GOVERNANCE UPSIDE TOWN <BR>-- Toward a Sustainable Democracy</A></H4>
<H4>A ground-breaking interview with People First co-founder, <BR>Dr. Ashok Khosla on the necessity for direct democracy in India</H4>

<LI> <STRONG>Important Links</STRONG><P>
<UL>
<LI><a href="http://members.aol.com/kashmir290/home.html"><strong>Kashmir Online</strong></a><P><CENTER>Voice of the Jammu & Kashmir Democratic Freedom Front, <BR>the most non-violent, ecumenical Kashmiri independence movement. Led by Amnesty Prisoner of Conscience Shabir Shah, the JKDFF has formed the J&K Democratic Freedom Party, a pro-independence party that includes prominent leaders among Kashmiri Muslims, Ladakhi Buddhists and the Jammu Hindu community.</CENTER><P>
<LI><A HREF="http://www.kashmiri-cc.ca"><STRONG>Kashmir Canada</STRONG></A><P><CENTER>Excellent archives and documentation on the history of the conflict</CENTER>


</UL>

</UL>

</FONT><P>

</TD></TR>
</TABLE>

<CENTER>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fdlhome.html#essayarc"><STRONG>Back to Home</A></STRONG><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:Secretariat@fdlap.org"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
<A href="${BASE_URL}fdlap/fdlorg.html#address">Our Address...</A></FONT>
<HR WIDTH=105 ALIGN=LEFT SIZE=2>
<FONT  SIZE=-2 COLOR=#007339>Pagework by Nancho East</FONT>


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

export default FdlapFdlalert;
