import { useEffect } from "react";

const FdlapFdessay1 = () => {
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
<FONT  SIZE=+2 COLOR=#007339><STRONG><EM>FDL-AP Archives</EM></STRONG></FONT><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4>
<BR><BR>
<HR WIDTH=300 ALIGN=CENTER SIZE=3>
<H3> "Asia and Human Rights"</H3> 
<H4>by Angela Lee<BR>
Director, Education Department<BR>Amnesty International</H4>
<HR WIDTH=300 ALIGN=CENTER SIZE=3><BR>
</CENTER>
<TABLE>
<TR><TD><IMG SRC="${BASE_URL}bulls/dot_clea.gif" WIDTH=1 HEIGHT=1></TD><TD>

	<FONT  SIZE=4>At the end of this year we will "celebrate" the 50th anniversary of the Universal Declaration of 
Human Rights.  Unfortunately, however, there will be little to celebrate for many in Asia because this document has little meaning for a countless number of Asians.  It was document drawn up from the 
ashes of World War II.  While it provides a basis for a universal set of rights, little action seems 
to have been taken to try and make the rights enshrined within the document a reality for the majority of the Asian people.<P>
	People in Asia, when they think of human rights, often associate human rights with politics, hypocritical government policy, and maybe even with prison and or dissidents.  To those such as myself, 
who are involved in human rights education, human rights is seen as neither negative nor political.  
Human rights is a very basic need.  Human rights mean a fundamental right to education, a right to state your own opinion, and a right to live a basic standard of life.<P>
	Within Asia, human rights have been talked about more than ever before.  Regrettably, though, human rights have become a bit like political football - to be tossed around when governments and others feel it is in their self-interest to do so.  Despite some appalling human rights situations in Asia, we see little concerted action, nothing compared to what we saw when the world united to rid South Africa of the evil apartheid policy.<P>
	In Burma we have a military government that refuses to hand over ruling power to the democratically elected government of Daw Aung San Suu Kyi.  Although Burma is comparatively being called the "South Africa of Asia", it is Western governments, such as France, and the governments of ASEAN that continue to undermine and suppress the human rights of the Burmese people.  They do this with the purpose of greed and trade.<P>
	We see a willingness of governments from around the world to view Asia as nothing more than a bowl of natural resources and plentiful, cheap labor.  With mercenary ambitions to exploit these resources, governments world-wide are prepared to trample over the poor in Asia, at times doing so with the support of some Asian leaders.  We have heard terms such as "constructive engagement" and "Asian 
Values" being put forward with increasing frequency.  It seems, to many of us involved in this struggle to ensure Asians receive the human rights they rightfully deserve, that these terms are an excuse for the repression of human rights and the stagnation of democracy to be maintained as status quo. 
 To explain this simply, it means that the rich get richer, the poor stay poor, and the wide poverty 
gap remains.  It is obvious that constructive engagement is not working in countries such as Burma.<P>
	Traditionally, human rights violations and abuses have been thought of as problems created by governments which, therefore, can only be solved by governments.  Contrary to this belief, it is becoming increasingly and widely recognized that multinational companies have tremendous power to improve 
human rights.  The proliferation of multinationals throughout Asia often means that much of the wealth is being transported out of Asian countries.  While these companies justify their investments by 
arguing that they are positively improving the well being of the community, many pay exploitative wages and expect their workers to toil in conditions that would not be acceptable in their home countries.  The richer countries in Asia that now have new democracies, such as Taiwan, Thailand, and South Korea, seem to have benefited from increased human rights.  These countries also seem intent on maximizing profits rather than exercising their responsibilities to ensure that all Asians benefit from the economic miracle that is occurring throughout Asia.  <P>
	In Asia we need to promote human rights in schools and talk about what human rights mean to children.  Human rights have to be relevant for young people, not the often abstract concepts of lofty ideals that are laid out in human rights documents.  For example, in Hong Kong we discuss such classroom issues as whether school rules are a breach of children's rights or how the need for discipline 
squares with the need to recognize individual rights.  With older children we discuss topical issues 
such as discrimination and child abuse.  <P>
	Singapore's former Prime Minister Mr. Lee Kwan Yew, as well as other Asian leaders, has set himself up as a spokesperson on "Asian Values".  We have a great need in Asia to continue to find a strong counter voice to that of Mr. Lees'.  While we all recognize the achievements made by Singapore, we cannot have good housing justify the lack of a freedom of press, the right to free expression, or 
a restricted flow of information.  We cannot underscore the need for international support, and we must become much more self reliant in voicing our concerns for human rights.  In order to convey the 
message that human rights should not be threatening nor political, we need to look at the cultural context within which we are working and accordingly strategize our messages.  With the concern of governments in the West often being dictated by domestic agendas, we in Asia must make ourselves more proactive in getting our messages into Asian agendas at all levels.<P>
	We need to further empower ourselves.  We need to believe that yes we can make a difference.  Education is a key to empowerment, and this can be done only if more resources are found for human rights education.  We must ensure that in the emerging economies in our region the desire to "get rich quick" is balanced by concerns for our society.  We must ensure that individual rights and that human rights are not trampled.<P>
	The decade of 1995-2005 has been designated as the United Nations' "Decade for Human Rights Education", but how many in Asia know this?  It is important all countries throughout the region use this decade to expand awareness and bring about concrete changes.  Asian governments as members of the United Nations must live up to their international obligations.<P>
	With financial gains being the important way to measure success in this region, we must point out that most companies depend upon social stability and the rule of law to operate efficiently.  A rapid spread of corruption and the breakdown of essential structural services would threaten most business.  Upholding human rights is, without question, in the interest of the powerful Asian business leaders and the wider community - not only for our generation, but for our future generations.</FONT><P>
<HR WIDTH=280 ALIGN=left SIZE=2>
<H4>Angela Lee is Director of the <BR>Human Rights Education Department <BR>at Amnesty International, Hong 
Kong</H4>
<HR WIDTH=280 ALIGN=left SIZE=2>
</TD></TR>
</TABLE>

<CENTER>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fdlpaper.html#essayarc"><STRONG>Back to Main Archives</A></STRONG><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:fdlap@chollian.dacom.co.kr"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
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

export default FdlapFdessay1;
