import { useEffect } from "react";

const CityhallVmjt = () => {
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
<CENTER><EM>Japan Times on the '93 Nancho Campaign </EM></center><P><P>

<div align="center"><table align="center" width="700" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td width="200" align="center"><TABLE BORDER=4 CELLPADDING=2 ALIGN=LEFT HSPACE=30 Vspace=20>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/virmajts.jpg" ALT="Japan Times Article" WIDTH=155 HEIGHT=188 BORDER=1 ALIGN=LEFT></TD></TR>
</TABLE></td>
    <td width="400" align="center"><STRONG>Local Press Coverage <BR>of the Virtual Mayoral Campaign for Direct Democracy </STRONG><BR><BR>
<IMG SRC="${BASE_URL}bulls/rainstk7.gif" WIDTH=250 HEIGHT=5><BR><BR>

<FONT  SIZE=+1><STRONG>"ALIEN HOPES NIXED CANDIDACY <BR>SPOTLIGHTS LACK OF DEMOCRACY"</STRONG><BR>By Cameron Hay</FONT><BR>
Japan Times<BR>May 10, 1993<BR>
<br>

<IMG SRC="${BASE_URL}bulls/rainstk7.gif" WIDTH=250 HEIGHT=5></td>
</tr>
</table></div>




<BR><BR>
<FONT  SIZE=+1>

<BLOCKQUOTE><STRONG>Kyoto</STRONG> - When long-term resident David Kubiak's application to run in this year's mayoral elections here is rejected, it will underscore the lack of political rights held by foreign residents in Japan.
	But behind Kubiak's campaign lies a more fundamental goal - real political rights for Japanese that he says would help them transform the country's troubled political system into a working democracy.
	Direct democracy will enable the Japanese people to rein in the excesses of the county's government bureaucracy and big business, Kubiak said at a meeting of minority groups in Osaka, Sunday.<P>
		"That corporate Japan is allowed to destroy Japan's own environment and culture is terrible.  But when it begins destroying the global environment, then the lack of democracy in Japan becomes a world problem," he said.<P>
Kubiak, 48, a lecturer at Ritsumeikan University who has lived here for 14 years, will launch a campaign for the August election next Sunday.  As a non-Japanese, he cannot run or vote in municipal elections.<P>
	Instead, Kubiak will use the elections to press the municipal assembly to adopt an ordinance to enable citizens to propose and enact ordinances directly.
	Currently, Kubiak said, the municipal assembly does not operate as a representative democracy, because new laws are all developed by the bureaucracy, not the elected representatives of the people.<P>
	"No member of the assembly has proposed a bill on his own initiative or in response to citizens' suggestions here for 36 years.  It's the same story in other Japanese cities, and the National Diet.<P>
	Kubiak has assisted groups like the <A href="${BASE_URL}cityhall/kybudnyt.html">Kyoto Buddhist Association</A> in their fight to preserve the city's traditional beauty.  He points to this issue as an example of how the city bureaucracy, in league with big money interests, can ignore popular opinion.
	"Over 60 percent of Kyoto residents oppose extending building heights here to 66 meters, but still the new Kyoto Hotel is allowed to go ahead. ... Environmental groups here cannot even slow the corporate rape of their cultural mother, Kyoto, let alone stop the destruction of rain forests and ecosystems far away."<P>
Under Kubiak's direct initiative scheme, modeled on systems used in six European countries and 37 U. S. states, any citizen could propose  a new ordinance, for example, limiting the height of all new buildings to 45 meters.
	If 5 percent of the electorate sign a referendum supporting it, the ordinance is put to the people at the next election.  If supported by a simple majority, it automatically comes into effect.<P>
	Currently, citizens must collect 22,000 signatures for the right to suggest a bill to the city assembly, which can, and usually does, ignore it.
	Ironically, this is the only mechanism now available to Kubiak and his supporters for introducing the direct initiative system.  To gather signatures, Kubiak plans to tap into existing citizens' networks and launch a multimedia campaign.<P>
	Along with Kyoto's first volunteer multilingual community radio station, the campaign will launch a video service and free computer bulletin board.
	The bilingual campaign is directed in part overseas, to put people in other countries in touch with grassroots opinion here, which is unheard in the international media.<P>
	"If people outside only knew how many people here really do care, they would not only stop fearing Japanese people, we hope that many might extend their hands in solidarity and cooperation," he said.


</FONT></BLOCKQUOTE><P>
<BR>
<CENTER><HR WIDTH=200 ALIGN=center SIZE=3>
<A HREF="http://web.kyoto-inet.or.jp/people/cityhall/index.html">City Hall</A> | <A href="${BASE_URL}cityhall/hizzonor.html">Mayoral Musements</A> | <A href="${BASE_URL}arcmain.html">Archives</A>
<HR WIDTH=200 ALIGN=center SIZE=3></CENTER>

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

export default CityhallVmjt;
