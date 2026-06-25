import { useEffect } from "react";

const FdlapKashmirJkplea = () => {
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
<H3>"IN SUPPORT OF THE KASHMIRI PEOPLE'S <BR>RIGHT TO TRUE SELF- DETERMINATION"</H3> 
<H4>by Jose Ramos Horta<BR>
1997 Nobel Peace Prize Laureate from East Timor</H4>
<HR WIDTH=300 ALIGN=CENTER SIZE=3><BR>
</CENTER>

	<FONT  SIZE=4>

 

          

<BLOCKQUOTE>The closing years of the millennium have been rocked by waves of turbulent and  often tragic news from Asia. All informed citizens of the world must now be aware  of the economic crises from Seoul to Jakarta; the ongoing human rights violations in  Tibet, Burma and East Timor; and the continuing eco-emergencies in the region's  forests, river valleys and coastal areas. 
<P>
Although the social and cultural backdrops of these sad events vary wildly, all have  one obvious common denominator: the people most affected have little or no  influence over the policies that created these crises. The absence of comprehensive  democratic rights and sometimes even the most basic right of self-determination has  allowed countless local problems to spiral out of all proportion and rational control.  
<P>
The latest and perhaps the most ominous crisis in the region is the outbreak of  nuclear rivalry between Pakistan and India.  We can only pray that the unexpected  Indo-Pakistani outburst will finally shock the world into a truly global disarmament  process that reaches deep into the arsenals of ALL nuclear powers. In the  meantime, however, we must also recognize that a far more devastating outcome is  equally possible and the probability of such a catastrophe largely depends on the  fate of Kashmir.  
<P>
India and Pakistan have already fought two bitter, murderous wars over this  beautiful land and the border between their respectively controlled sectors remains  perhaps the most dangerous flashpoint in the world.  
<P>
Meanwhile, the people of Jammu & Kashmir are caught in the middle of this lethal  tug-of-war. They have now been waiting 50 years for a chance to express their own  resolve in a plebiscite mandated by the United Nations shortly after the  Indian/Pakistani partition (August 13, 1948). Although the Nehru and Jinnah  governments of the time both publicly supported the Kashmiri people's democratic  right to peacefully choose either independence or accession to India or Pakistan,  that choice still has not been offered. It is thus time, before this conflict ignites an  even greater tragedy, for all parties to take pause and finally endorse will of the  Kashmiri people, the United Nations, and the founding fathers of these two great  nations. 
<P>
I therefore urge everyone wishing to bring peace, democracy and social justice to  this troubled region to join in supporting a free, fair and binding plebiscite for all the  people of Kashmir, that the world may finally know and abide by their long deferred  aspirations. <P>

<STRONG>Jose Ramos Horta</STRONG><BR>Sydney, Australia<BR>July 14, 1998
</BLOCKQUOTE>
<P>
<HR WIDTH=80% ALIGN=center SIZE=2>
<HR WIDTH=90% ALIGN=center SIZE=3>
<HR WIDTH=80% ALIGN=center SIZE=2><P>
<FONT  SIZE=-1><STRONG>REFERENCES</STRONG><P>
<STRONG>Jawaharlal Nehru</STRONG>, first Prime Minister of India:<P>

<BLOCKQUOTE>Address to the Indian Parliament on 12 February, 1951: "We have given our pledge to the people of Jammu & Kashmir and subsequently to the United Nation; we stood by it and we stand by it today. Let the people of Kashmir decide." 
<P>
Report to All Indian Congress Committee on 6th July, 1951: "Kashmir has been wrongly looked upon as a prize for India or Pakistan. People seem to forget that Kashmir is not a commodity for sale or to be bartered. It has an individual existence     and its people must be the final arbiters of their future. It is here today that a struggle is bearing fruit, not in the battlefield but in the minds of men."</BLOCKQUOTE>
<BR>
<STRONG>Mohammed Ali Jinnah</STRONG>, first Prime Minister of Pakistan:
<BLOCKQUOTE>Welcoming the Indian Independence Act in 1947:
 "constitutionally and legally the Indian states will be independent sovereign states on termination of paramountcy and they will be free to decide for themselves to adopt any course they like. It is open to them to join the Hindustan Constituent Assembly or the Pakistan Constituent Assembly or remain independent.."</BLOCKQUOTE></FONT>

<CENTER>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/fdlalert.html"><STRONG>Back to Alerts</A></STRONG> | 
<A href="${BASE_URL}fdlap/fdlpaper.html#essayarc"><STRONG>Main Archives</A></STRONG><BR>

<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:Secretariat@fdlap.org"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
<A href="${BASE_URL}fdlap/kashmir/fdlorg.html#address">Our Address...</A></FONT>
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

export default FdlapKashmirJkplea;
