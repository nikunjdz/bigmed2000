import { useEffect } from "react";

const FdlapFdlpaper = () => {
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
<! - old color - BFDFB9>
<CENTER><TABLE BORDER=6 CELLPADDING=10 BGCOLOR="#003E1F">
<TR><TD><IMG SRC="${BASE_URL}bulls/flame2.gif" WIDTH=30 HEIGHT=60></TD><TD ALIGN=CENTER><FONT SIZE=+2 COLOR=#70B0F1><STRONG>THE FORUM OF DEMOCRATIC LEADERS IN THE ASIA-PACIFIC</STRONG></FONT></TD><TD><IMG SRC="${BASE_URL}bulls/flame2.gif" WIDTH=30 HEIGHT=60></TD></TR>
</TABLE>

<BR><BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4 VSPACE=6><BR>
<FONT  SIZE=+2 COLOR=#007339><STRONG><EM>Archives &amp; Literature</EM></STRONG></FONT>
<HR WIDTH=200 ALIGN=center SIZE=2>
<STRONG><A HREF="#newsletter">Journal</A> | <A HREF="#declarations">Declarations</A> | <A HREF="#reading">Readings</A> | <A HREF="#interview">Interviews</A></STRONG>
<BR>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=350 HEIGHT=4>
</CENTER>

<BR>
<BR><HR WIDTH=250 ALIGN=center SIZE=3>
<CENTER><H2><FONT   SIZE=+2 COLOR=#FF0000><STRONG> <A NAME="newsletter">FDL-AP QUARTERLY</A> </H2><H3> Official Journal <BR>of <BR>The Forum of Democratic Leaders in the Asia-Pacific</STRONG></FONT></H3><P>
<HR WIDTH=250 ALIGN=center SIZE=3><P>

<H3><A href="${BASE_URL}fdlap/fdljrnl.html">Introduction to Summer '97 Issue </A></H3>
<P>
Includes full text of
Democracy in Asia <BR>by Dr. Kim Dae-jung<P>

The Role of NGOs: An East Timorese Example <BR>by Dr. Jose Ramos Horta<P>

NGOs in Singapore<BR>by Dr. Chee Soon Juan<P>
<H3><A href="${BASE_URL}fdlap/fdljrnl2.html">Introduction to Autumn '97 Issue </A></H3>
<H3><A href="${BASE_URL}fdlap/fdljrnl4.html">Introduction to Spring '98 Issue </A></H3>
<H3><A href="${BASE_URL}fdlap/fdljrnl6.html">Introduction to Spring '99 Issue </A></H3>
</CENTER>
<P>

<BR><HR WIDTH=250 ALIGN=center SIZE=3>
<CENTER><H2><FONT   SIZE=+2 COLOR=#FF0000><STRONG><A NAME="declarations"> FDL-AP DECLARATIONS</A> 
<BR>&amp; POSITION PAPERS</STRONG></FONT></H2><P>
<HR WIDTH=250 ALIGN=center SIZE=3><P>

<H3><A href="${BASE_URL}fdlap/fdlburm2.html">Declaration on Transition <BR>from Dictatorship to Democracy</A></H3>
<H4>by the Conference of the Forum <BR>of Democratic Leaders in the
Asia-Pacific (FDL-AP)<BR><FONT  SIZE=1>(Manila, Philippines, November 2-4, 1996)</FONT></H4></CENTER>
<P>



<BR><HR WIDTH=250 ALIGN=center SIZE=3>
<CENTER><H2><FONT   SIZE=+2 COLOR=#FF0000><STRONG> <A NAME="essayarc"><A NAME="reading">RECOMMENDED READING</A></A> </STRONG></FONT></H2></CENTER><P>
<HR WIDTH=250 ALIGN=center SIZE=3><P>

<CENTER>
<H3> <A href="${BASE_URL}fdlap/fdessay1.html">"Asia and Human Rights"</A></H3> 
<H4>by Angela Lee<BR>
Amnesty International</H4>

<H3><A href="${BASE_URL}fdlap/fdessay2.html">"Asian Values vs. Human Rights"</A></H3>  
<H4>by Aryeh Neier<BR>Open Society Institute</H4>

<H3><A href="${BASE_URL}fdlap/fdessay3.html">"Social Justice and Rule of Law in Burma"</A></H3> 
<H4>by Aung Htoo<BR>National Council for the Union of Burma</H4>

<H3><A href="${BASE_URL}fdlap/fdessay4.html">"Economic and Political Freedom are Inseparable"</A></H3>
 <H4>by Dr. Meinardus
<BR>Friedrich Nauman Foundation</H4>

<H3><A href="${BASE_URL}fdlap/newmedia.html">"The New Media and Human Rights"</A></H3>
 <H4>by Michael M.J. Fischer, MIT </H4>


<H3><A href="${BASE_URL}fdlap/kashmir/hapkash.html">FROM CANTONMENTS TO CANTONS <BR>-- A Modest Proposal for Kashmir and the Asian Neighborhood</A></H3>
<H4>A 1999 UN Hague Appeal for Peace proposal that advocates adoption of Switzerland's radically direct democratic system in Kashmir and beyond.</H4>

</CENTER><P>
<HR WIDTH=250 ALIGN=center SIZE=3>
<CENTER><H2><FONT COLOR=#FF0000><STRONG><A NAME="interview"> FEATURED INTERVIEWS</A></STRONG></FONT></H2><P>
<HR WIDTH=250 ALIGN=center SIZE=3><P>
<HR WIDTH=200 ALIGN=center SIZE=4>
<STRONG>ON EAST TIMOR</STRONG>
<HR WIDTH=200 ALIGN=center SIZE=4>
<H3><A href="${BASE_URL}fdlap/jrhorta.html">ILLUMINATING ATROCITIES<BR>-- Disturbing a Purchased Peace with Nobel Prize Winner, <BR>Jose Ramos Horta</A></H3>
<H4>A wide-ranging interview with the outspoken laureate <BR>on media apathy, ASEAN authoritarianism, <BR>Japanese war crimes and the uses of Nobel attention</H4>
<P>
<H3><A href="${BASE_URL}fdlap/maxstahl.html">TWENTY YEARS OF TERROR <BR>-- Indonesia in East Timor</A></H3>
<H4>An angry education with Max Stahl, <BR>the award-winning British photo-journalist who filmed <BR>the infamous 1991 Santa Cruz massacre</H4>

<HR WIDTH=200 ALIGN=center SIZE=4>
<STRONG>ON INDIA</STRONG>
<HR WIDTH=200 ALIGN=center SIZE=4>
<H3><A href="${BASE_URL}fdlap/khosla.html">TURN THE SYSTEMS OF GOVERNANCE UPSIDE TOWN <BR>-- Toward a Sustainable Democracy</A></H3>
<H4>A ground-breaking interview with People First co-founder, Dr. Ashok Khosla <BR>on the necessity and possibility of direct democracy in India</H4>

<HR WIDTH=200 ALIGN=center SIZE=4>
<STRONG>ON PAKISTAN</STRONG>
<HR WIDTH=200 ALIGN=center SIZE=4>
<H3><A href="${BASE_URL}fdlap/jehangir.html">DEMOCRACY IS SURVIVAL FOR WOMEN</A></H3>
<H4>An Interview with human rights crusader Asma Jehangir <BR>on the plight of women &amp; children,<BR> and the fundamentalist threat in Pakistan today</H4><P>
<H3><A href="${BASE_URL}fdlap/imran.html">ISLAM MEANS JUSTICE, <BR>
AND JUSTICE MEANS RIGHTS</A></H3>
<H4>An Interview with cricket legend turned fiery social/political activist,<BR> Imran Khan on the fight for democratic reform in Pakistan
</H4>



<HR WIDTH=200 ALIGN=center SIZE=4>
<STRONG>ON KASHMIR</STRONG>
<HR WIDTH=200 ALIGN=center SIZE=4>
<H3><A href="${BASE_URL}fdlap/kashmir/nahmad.htm">SETTLING KASHMIR<BR>
Prospects for Peace, Justice, Independence...</a></H3>
<H4>Interview with Lt. Gen. (Retd)  Nishat Ahmad <BR>
Director, Institute of Regional Studies, <BR>Islamabad, Pakistan<H4>




<P>





<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9><BR>
<A href="${BASE_URL}fdlap/index.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdhome.jpg" ALT="Home" WIDTH=138 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fmission.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdmiss.jpg" ALT="Mission" WIDTH=138 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdlorg.html"><IMG SRC="${BASE_URL}fdlap/graph/btgfdorg.jpg" ALT="Organization" WIDTH=136 HEIGHT=38></A>

<A href="${BASE_URL}fdlap/fdlinits.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdinit.jpg" ALT="Initiatives" WIDTH=136 HEIGHT=38></A>
<A href="${BASE_URL}fdlap/fdllinks.html"><IMG SRC="${BASE_URL}fdlap/graph/btfdlink.jpg" ALT="Links" WIDTH=136 HEIGHT=38 ></A>
<BR></CENTER>
<IMG SRC="${BASE_URL}fdlap/graph/fdline5.gif" WIDTH=100% HEIGHT=6 VSPACE=9><P>

<H5><A HREF="mailto:fdlap@chollian.net"><U>Contact FDLAP...</U></A><BR>
<A href="${BASE_URL}fdlap/fdlorg.html#address">Our Address...</A></H5>
<HR WIDTH=105 ALIGN=left SIZE=2>
<FONT  SIZE=-2 COLOR=#007339>Pagework by Nancho East</FONT>
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

export default FdlapFdlpaper;
