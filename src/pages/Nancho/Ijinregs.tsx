import { useEffect } from "react";

const NanchoIjinregs = () => {
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

<H3><CENTER><EM>The Nancho Restoration: Stage I</EM></H3>

<TABLE BORDER=5 CELLPADDING=5>
<CAPTION ALIGN=bottom>"Just like the LDP!"</CAPTION>
<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/demonr.gif" ALT="Nancho Lite" WIDTH=84 HEIGHT=150 HSPACE=12 BORDER=0  ALIGN=left>  <BR><BR><BR><BR>
<H2>THE<BR>NANCHO IJIN BUTAI<BR>IS LEGAL!</H2>
</TD></TR>
</TABLE>
<BR><BR>


<img align=middle src="${BASE_URL}bulls/rainstk6.gif" HEIGHT=4 WIDTH=90%></CENTER><P>

<FONT  COLOR=#800000><H3><CENTER><U>NANCHO GETS RESPECTABLE!</U></CENTER></H3>

<H4><CENTER>After 5 futile years campaigning for non-profit status for Japanese NGOs,<BR> we stumbled on the Great Secret: Form a Political Party!<BR>Anyone with 2 friends and 15 minutes can do it <BR>-- even an Alien! (They just never thought to forbid it...)</H4></FONT>

<img align=middle src="${BASE_URL}bulls/rainstk6.gif" HEIGHT=4 WIDTH=90%><P>


<!----***************************MAIN TEXT*****************************-->


<P>
<H3><U>The Official Aims &amp; Purposes of the Nancho Ijin Butai</U></H3>
 <H3>  <EM>(As registered with the Kyoto Prefectural Election Commission, April 1. 1995)</EM></H3></CENTER>
<FONT  SIZE=+1><STRONG>
<UL TYPE=disc>
<LH></LH>
<LI>1) 	to protect Japan's natural environment, human rights and 		cultural heritage by direct democratic empowerment of 
	Japanese citizens:

  	    <BLOCKQUOTE>(basic necessary reforms: freedom of information; community 
	    access to media; jury system; initiatives & referenda; and local 
	    control [of schools, police, airwaves, etc.]);</BLOCKQUOTE><P>

<LI> 2) 	to use various new media technologies to heighten local and   
    	foreign awareness that the impotence of Japanese democracy   
    	has become an international problem with grave implications 		for the environment, human rights and economic well-being 
	around the world;<P>

<LI> 3) 	to increase international support for and cooperation with local 
    	citizen groups working to reform & democratize Japanese society;<P>

<LI> 4) 	to educate the general public about the political, cultural 
    	and evolutionary importance of maturation and individuation; 
    	and the consequent social dangers of psychosomatic neoteny:
    	(explaining: a) how the estrogenic effects of examination hell,
    	social stress and imported soyfoods can systematically suppress
    	Japanese male hormones, making corporate workers more 
    	docile, child-like and obedient; and b) why many salarimen are        		therefore less able to stand up for their rights, principles or
    	families, and less interested in the adult responsibilities of 
    	democratic participation);<P>

<LI> 5) 	to quicken environmental compassion and the awakening of a 
    	Gaian immune system, using international media and Japanese 
    	<EM>danketsu</EM>, <EM>aiki </EM>and <EM>shudan ishiki</EM> techniques to create the Earth 
	Hour Conspiracy, a monthly simultaneous hour of shared global 
	consciousness and Gaian awareness.<P>
</UL>
<BR>
<CENTER><STRONG>*****  End of the New Beginning *****</STRONG></CENTER>
</STRONG>
<BR><BR>


</FONT>
<HR>
<!----******************************************************MORE INTERNAL LINKS AND THE END********---->
<BR><BR>
<CENTER>

<!-- Table Tag --><TABLE BORDER=2>
<TR>

<TD><!-- Link Tag --><A href="${BASE_URL}nancho/otheremp.html"><!-- Graphic Tag --><IMG SRC="${BASE_URL}butts/btmnhist.gif" WIDTH=100 HEIGHT=36 ALT="History"></A></TD>

<TD><!-- Link Tag --><A href="${BASE_URL}arcmain.html#nanchohistory"><!-- Graphic Tag --><IMG SRC="${BASE_URL}butts/btmnarc.gif" WIDTH=100 HEIGHT=36 ALT="Archives"></A></TD>

<TD><!-- Link Tag --><A href="${BASE_URL}cityhall/cityhall.html"><!-- Graphic Tag --><IMG SRC="${BASE_URL}butts/btmncity.gif" WIDTH=100 HEIGHT=36 ALT="City Hall"></A></TD>


</TR>
</TABLE><BR>


<H5>Supported By People Like You (which is to say as yet, By Vanishing Little At All) <BR> - Quickly
Correct This Disgraceful Situation, or At Least Endure <A href="${BASE_URL}thespiel.html">The Spiel</A>.<BR><BR>

LINK US UP ! <BR>Help Ignite Saltation -- Lay Fuse to Others of your Elusive Illustrious Ilk <BR><BR>


<A href="${BASE_URL}sharight.html">Shareright</A> (S) 1998 : Nancho Ijin Butai 
</H5></CENTER>
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

export default NanchoIjinregs;
