import { useEffect } from "react";

const CityhallVmmainic = () => {
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
<CENTER><EM> Mainichi Daily News on the '93 Nancho Campaign </EM></center><P><P>

<div align="center"><table align="center" width="700" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td width="200" align="center"><TABLE BORDER=4 CELLPADDING=2 ALIGN=LEFT HSPACE=30 Vspace=20>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/vmmainic.jpg" ALT="Mainichi Daily News Article" WIDTH=176 HEIGHT=200 BORDER=1 ALIGN=LEFT></TD></TR>
</TABLE></td>
    <td width="400" align="center"><STRONG>Local Press Coverage <BR>of the Virtual Mayoral Campaign for Direct Democracy </STRONG><BR><BR>
<IMG SRC="${BASE_URL}bulls/rainstk7.gif" WIDTH=250 HEIGHT=5><BR><BR>

<FONT  SIZE=+1><STRONG>"KYOTO RESIDENT TO CAMPAIGN FOR POLITICAL RIGHTS"</STRONG><br>By Brian Covert</FONT><br>
<STRONG> Mainichi Daily News</STRONG><BR>May 12, 1993<P>
<IMG SRC="${BASE_URL}bulls/rainstk7.gif" WIDTH=250 HEIGHT=5></td>
</tr>
</table></div>

<BR><BR>
<FONT  SIZE=+1>

<BLOCKQUOTE><STRONG>Kyoto</STRONG> - 



David Kubiak is going to attempt something no foreigner has ever
done: get elected mayor of this historical Japanese city.<P>
He knows the odds are overwhelmingly slim that he will be elected, and slimmer still that Kyoto lawmakers would pass the long-term reforms he has in mind if he does make it into office.
So why is he pushing ahead with his self-described "virtual campaign"?<P>
He wants to focus attention on the issue of the Japanese public's isolation from political issues - to use his campaign "as a pulpit for the rest of Japan to begin a dialogue, or hopefully a controversy, about why citizens here can't be trusted with power."
Kubiak, 47, recently registered his political organization, the "Nancho Ijin Butai," with the authorities and is gearing up for the August elections with a number of backup projects.<P>
But there is one major obstacle:  As a foreigner he is prohibited under Japanese law from registering for and holding a public office.
He obviously knows this, and acknowledges that the real goal of the campaign is to collect 24,000 signatures among registered voters.  With those signatures in hand, he would then officially request the municipal government to adopt an ordinance permitting referenda that would let Kyoto residents have a direct say in the political decisions regarding their city.<P>
With Kyoto facing renewed corporate exploitation, environmental degradation, and the possible extinction of the traditional crafts world, he says, the time has come for Kyoto residents to take political power in shaping their own future.<P>
"(Legislators) are supposed to be legislating on behalf of the people, but Kyoto legislators haven't created a single law in 50 years, and if they won't help, then the people should have the right to do it for themselves," he said.  "From there, they can create the basic condition for real democracy like freedom of information ordinances.  They can also create their own ordinances to modify the school law so that they can have elected school boards here and have some say in their kids education."<P>
He is also pushing for laws guaranteeing stronger freedom of the press and a return to the jury system in court cases.<P>
Kubiak, an instructor of mass media studies in the economics department of Ritsumeikan University, sees Kyoto as both a testing ground and substantial contributor to grassroots strategies inside and outside Japan.  The way he views it, people-power in Kyoto is just a logical extension of such liberation drives around the world.<P>
"This is bubbling up everywhere," he explains.  "We're not leading the charge -- we're basically just trying to spotlight a lot of Japanese groups that are working on democratization, that understand it and can explain it to Japan a lot better than I can."<P>
Kubiak has started a "Kyoto New Democracy Fund" to help finance his campaign, which he plans to publicize by setting up a volunteer-run radio station and making full use of computer networks.
And to help implement his ideas, Kubiak has written a book in Japanese entitled "Memes for a New Democracy" in which he presents a blueprint for political power once it is back in the hands of common citizens.<P>
Kubiak shares with many local residents a rising sense of alarm over the replacement of the Kyoto of yesterday by a new, more industrialized version that has little room for environmental concerns or for the traditional Japanese craftpersons who have deeply inspired him since he came here back in 1970.<P>
"I don't expect Kyoto ever to become a really beautiful city again -- certainly not in my lifetime," the American-born Kubiak says. "In the next 10 or 15 years, if there isn't some motivated return to craft-based life . . . then Japan's just going to go through a desert for another 50 years.  It's going to be like it was in the States - the craft traditions and their masters die out, and when people finally wake up, it's too late. They will have to rediscover everything from the textbooks and start over."<P>
He nevertheless remains optimistic about the potential for change among Kyotoites, and is hoping that Japanese and foreign residents alike will heed his coalition's call to get more politically involved.


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

export default CityhallVmmainic;
