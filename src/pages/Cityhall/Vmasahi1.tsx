import { useEffect } from "react";

const CityhallVmasahi1 = () => {
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
<CENTER><EM>Asahi Evening News on the '93 Nancho Campaign </EM></center><P><P>

<div align="center"><table align="center" width="700" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td width="200" align="center"><TABLE BORDER=4 CELLPADDING=2 ALIGN=LEFT HSPACE=30 Vspace=20>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/virmaen.jpg" ALT="Asahi Evening News Article" WIDTH=250 HEIGHT=175 BORDER=1 ALIGN=left></TD></TR>
</TABLE></td>
    <td width="400" align="center"><STRONG>Local Press Coverage <BR>of the Virtual Mayoral Campaign for Direct Democracy </STRONG><BR><BR>
<IMG SRC="${BASE_URL}bulls/rainstk7.gif" WIDTH=250 HEIGHT=5><BR><BR>

<FONT  SIZE=+1><STRONG>"CAMPAIGNING IN A VIRTUAL DEMOCRACY"</STRONG><BR>By Ken Rodgers<BR></FONT><P>
<STRONG>Asahi Evening News</STRONG><br>
May 11, 1993<P>
<IMG SRC="${BASE_URL}bulls/rainstk7.gif" WIDTH=250 HEIGHT=5></td>
</tr>
</table></div>

<BR><BR>
<FONT  SIZE=+1>

<BLOCKQUOTE><STRONG>Kyoto</STRONG> - 

David Kubiak. long an adamant and articulate critic of Japanese mega-organizations, used to joke about how he would run Japan if he were shogun. Now he's talking about what he would do if elected mayor of, Kyoto this August. This time he's virtually serious.
<P>
Of course, there is what he calls "a small technical problem." As a U.S. citizen, he's not eligible to register as a candidate, let alone serve. Undeterred, he is mounting a "virtual campaign," focused not on his personal disenfranchisement, but on what he sees as the effective exclusion of Japanese voters from true democratic process.
<P>
Rather than to get him elected, the primary focus of the campaign is to collect 24,000 signatures from registered voters so that he can formally ask the city to adopt an ordinance allowing direct initiatives and referenda.                                 
<P>
Believing Japan's superb cultural and craft heritage, as symbolized by Kyoto, to be under dire threat of extinction, Kubiak argues that it can only be saved by giving citizens such basic democratic rights.
<P>
But the country's representative democracy system, where politicians are supposed to represent the wishes of their constituencies and codify them into bills, just doesn't work that way, he says.
<P>
"Nobody has presented a bill drafted by a legislator in the Kyoto Assembly for 38 years. So representational democracy doesn't really represent anything down here."
<P>
Citizen initiatives would allow Kyoto residents the right to propose and vote upon ordinances concerning nuclear power, recycling and other conservation issues, he says.
<P>
At 47, Kubiak, who teaches mass media studies in the economics department of Kyoto's prestigious Ritsumeikan University, has lived most of his adult life in Kyoto. Long enough, he says wryly, 'to gain legally naturalized status four times in America."
<P>
He defines his constituency "as 'the other Japanese' who don't fit any of the stereotypes - primarily activists. whether monks or mothers or older people, all those who have not given up on making the system work for themselves, their families and their communities."
<P>
Kubiak legally registered his political association, the Nancho Ijin Butai, on April 1 and describes his "virtual campaign" as a call to voters to 'vote for themselves.' His campaign targets specific changes that he believes are needed for true democratization: freedom of information, freedom of the press; reintroduction of the jury system: legalization of citizen initiatives and referendums; and local control of school boards.
<P>
His ideas are highlighted in a new book, Memes for a New Democracy, and its proceeds, along with those from the sales of a planned video magazine, will go toward Kubiak's campaign, A free computer bulletin board will also provide information and allow community feedback.
<P>
One significant aspect of this campaign is that it is bilingual, and directed in part overseas. Kubiak, who speaks fluent Japanese, wants to change the highly distorted image of Japan that he believes the outside world receives. '"The corporate bodies are what constantly fill the television, newspapers and advertising, and the human face of Japan is almost invisible," he says. He also believes that overseas attention will attract the interest of Japanese voters as well.
<P>
Naturally, media plays a more than virtual role in Kubiak's campaign. He is setting up Kyoto's first volunteer-run multilingual community radio station as an alternative to the conventional style of loudspeaker-van campaigning. "Unless candidates make a speech with substance, shouting only their names and 'yoroshiku' amounts to noise pollution," he says.
<P>
As with most foreigners who settle in Kyoto, its cultural continuity attracted Kubiak. not its current circumstances. On arrival in Kyoto in 1970 after three years in the Peace Corps in South Korea, he was profoundly impressed to find many aspects of its age-old culture still an important part of people's lives.
<P>
"I just wanted to stay here and find out how this was created, what kind of mind could do this. What I'd seen human hands and human existence create here, I'd never seen or heard of or imagined anywhere else in the world.
<P>
'I mean a level of personal creativity, art, richness - the way people lived and the way they approached their lives - the greatest extant model I know for what is possible in the future in the Gaian context in terms of sustainability, in terms of craft-based life."
<P>
Kubiak is, however, clearly pessimistic about Kyoto's cultural survival, despite intensive efforts to help local activists, including the Kyoto Buddhist Association, fight insensitive development such as the recent relaxation of building-height restrictions. Treating social symptoms, he says, is not enough.
<P>
"Kyoto's active craftsmen are now approaching their early sixties, and there are few apprentices. This for me is a bigger disaster than the new Kyoto Hotel and new Kyoto Station put together. A socio-economic climate that makes the pursuit of these craft trades and lifestyles no longer desirable is systematically extinguishing the flames of Kyoto's culture."
<P>
If Kyoto's age-old traditional values now form the base of today's radicalism, the time is surely ripe for serious reflection on what's wrong with the current status quo. Kubiak's "virtual campaign" could be instrumental in opening real debate vital to everyone's future.




</FONT></BLOCKQUOTE><P>
<BR>

<CENTER><IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=250 HEIGHT=5 vspace=8><BR>

<HR WIDTH=140 ALIGN=center SIZE=3>
<A HREF="http://web.kyoto-inet.or.jp/people/cityhall/index.html">City Hall</A> | <A href="${BASE_URL}arcmain.html">Archives</A>
<HR WIDTH=140 ALIGN=center SIZE=3>
<IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=250  HEIGHT=5>

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

export default CityhallVmasahi1;
