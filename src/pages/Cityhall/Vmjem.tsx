import { useEffect } from "react";

const CityhallVmjem = () => {
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
<CENTER><EM> Japan Environment Monitor on the '93 Nancho Campaign </EM><P><P>


<FONT  SIZE=3><STRONG>Local Press Coverage <BR>of the Virtual Mayoral Campaign for Direct Democracy </STRONG></FONT><BR><BR>
<IMG SRC="${BASE_URL}bulls/rainstk7.gif" WIDTH=250 HEIGHT=5><BR><P><P>

<FONT  SIZE=+1><STRONG>TAKING THE INITIATIVE<BR> <FONT  SIZE=2>- CAMPAIGNING FOR DEMOCRATIC RIGHTS IN KYOTO</FONT> </STRONG><P>By Ken Rodgers</FONT><P>
<STRONG> Japan Environment Monitor</STRONG><BR>June, 1993<P>
<IMG SRC="${BASE_URL}bulls/rainstk7.gif" WIDTH=250 HEIGHT=5>
</CENTER>
<BR><BR><BR>
<FONT  SIZE=+1>

<BLOCKQUOTE>

In a bid to introduce to Japan both the concept and actuality of 
local-level direct democracy, Kyoto resident David Kubiak, long-
term activist, networker and well-known critic of Japan's mega-
organizations, is preparing to campaign as a candidate in Kyoto's 
upcoming mayoral election.  There is however a "small technical 
problem". That is,  despite having lived long enough in Japan to have 
gained legally naturalized status four times in the U.S.A., Kubiak 
is still ineligible to even vote, let alone stand for public office in 
Japan. (A disenfranchisement shared by even third-generation 
Japanese residents of Korean lineage, incidentally).<P>

Undeterred, on the auspicious date of April 1st, Kubiak legally 
registered an independent political association, the 
Nancho Iijin Butai, (an effective way, incidentally, to create a tax-
free activist/fund-raising organization that other groups would do 
well to investigate).  Since his actual registration as a mayoral 
candidate is certain to be rejected, he already refers to running a 
"virtual campaign", as a "virtual candidate".  Instead of votes, he 
actually seeks to collect at least 24,000 signatures from voters on 
a formal request for a city ordinance allowing citizen initiatives 
and referenda.  "Nowhere else in Japan have these basic rights 
been approved or even proposed - and as yet there's really no word 
that expresses what is meant by 'citizen initiative' in the Japanese 
language", he comments.  Once implemented in Kyoto, Japan's 
spiritual heartland, this change could show the way for the rest of 
the nation, and provide a means for direct legislative action on 
every type of local issue.<P>

Kubiak identifies the bureaucratic domination of Japan's lawmaking 
system as a major obstacle to democracy and political awareness 
in Japan:  "If you want Japan to be responsible in the international 
community, first of all you have to give the citizens responsibility.  
In the Japanese system of 'representative democracy,' as opposed 
to a direct democratic system, politicians are supposed to 
represent the wishes of their constituencies and codify these into 
legal proposals and present them as bills for enactment.  Nobody 
has presented a bill drafted by a legislator in the Kyoto Assembly 
for 38 years!  So representational democracy doesn't really 
represent anything down here."<P>

Who constitutes Kubiak's constituency? "The 'other Japanese', who 
don't fit any of the stereotypes - primarily activists, whether 
monks, or mothers, or old people, all those who haven't given up on 
making the system work for themselves, their families, or their 
communities".  He describes his "virtual campaign" as a call to 
voters to "vote for themselves", a concept perhaps superficially 
reminiscent of the U.S. 70's Yippie "Nobody For President" campaign 
(sample slogan: "Who's got your interests at heart in Washington? 
...Nobody!"), but supported by a solid platform citing five essential 
changes required for real democratic rights in Japan:<P>
<UL>
<LI>Freedom of information
<LI>Freedom of the media
<LI>Reintroduction of the jury system
<LI>Legalization of citizen initiatives and referenda
<LI>Local control (of school boards, air waves, police, etc.)
</UL>

Not coincidentally, these form the theme of a book Kubiak has just 
produced, entitled <U>Memes for a New Democracy</U> (in Japanese, no 
English translation as yet) and published by Kamogawa Shoten.  It 
analyzes these issues through interviews with eminent Japanese 
activists and articles by experts in civil law and associated fields.  
A campaign video cassette, Mo Hitotsu No Nippon, is also 
planned; sales of tapes and the book are hoped to make this a 
unique example of a self-financing campaign.  <P>

Being a virtual candidate gives Kubiak the opportunity to focus on 
the issues that other candidates prefer to ignore.  For example, 
throw-away consumerism: "Nothing should be disposable, and 
there should be really radical taxes on things that are thrown 
away, especially things that are made to be thrown away". <P>

He is 
also especially concerned by current pressures on Kyoto's faltering 
craft traditions, which he describes as "the greatest extant models 
I know for a future Gaian economy, in terms of creative sustainable 
modes of production, in terms of craft-based life".  While other 
candidates fixate on a techno-nirvanic vision of 21st Century 
Kyoto, Kubiak points out that "a socio-economic climate that 
makes the pursuit of craft trades and lifestyles 'impractical' is 
systematically extinguishing the flames of Kyoto's culture".<P>
Kubiak has no intention of perpetuating what he characterizes as 
the "dismal" lack of substance in Japanese electioneering.  He is 
setting up Kyoto's first volunteer-run multilingual community mini-
FM radio station to air interviews and debate on relevant issues 
(with programming exchange from a FM station run by a Korean 
group in Osaka), and will operate a free computer bulletin-board, 
providing information and allowing direct input and feedback from 
the community, both on the local and international level.<P>

The campaign will also be directed overseas, in an attempt to dispel 
the highly distorted image received through most media: "Japan's 
corporate bodies are what constantly fill television, newspapers 
and advertising, and the human face of the country is almost 
invisible.  Meanwhile, the people here, because of cartel pricing, 
are overpaying for everything, and the extra money they pay, that 
cuts into their own quality of life, ends up financing dumping 
campaigns and predatory marketing abroad. Those offensives then 
destroy other nations' industries, putting their people out of jobs, 
and raising up an extraordinary level of foreign animosity towards 
the same Japanese citizens who are getting bilked at home. This all 
will finally make the country less secure, and, in the long run, less 
economically viable.  So ordinary Japanese are in effect having to 
buy their own doom.  And to the extent that they still have no real 
political say in how things operate here, they really cannot be 
blamed for what is happening, and that has to be shown."<P>

Kubiak welcomes suggestions, support, feedback, and even 
non-corporate donations.  Contact: <P>
Nancho Ijin Butai, Shinchihaya, <BR>
8 Kaguraoka-cho, Sakyo-ku, Kyoto 606; <BR>
Tel: (075)761-1400; Fax: (075)762-2267



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

export default CityhallVmjem;
