import { useEffect } from "react";

const Arcmain = () => {
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

<H4><CENTER><EM>THE NANCHO ARCHIVES : Under Permanent Construction<BR>Mind your head...</EM></CENTER></H4>

<CENTER><TABLE WIDTH=450 CELLPADDING=2>

<TR><TD ALIGN=MIDDLE><IMG SRC="${BASE_URL}graph/jittokus.jpg" ALT="Once you know, it's all your show!" WIDTH=108 HEIGHT=150 BORDER=3 ></TD>
<TD ALIGN=MIDDLE><img src="${BASE_URL}bulls/rainstk6.gif" WIDTH=300 HEIGHT=5 HSPACE=12>

<BR>
<H3>THE NANCHO ARCHIVES<P>An Arsenal of Incendiary Ideas</H3>

<BR>
<img src="${BASE_URL}bulls/rainstk6.gif" WIDTH=300 HEIGHT=5  HSPACE=12></TD></TR>
</TABLE></CENTER>

<BR><BR>
<BLOCKQUOTE>
<H3><A NAME="topics">Topic Areas</A></H3>
<UL TYPE=disc>

<LI><STRONG><A HREF="#alt.kyoto"><FONT  SIZE=+1>Alternative Kyoto</FONT></A></STRONG> <BR><CENTER>Perspectives on the Miyako's Plight &amp; Prospects<BR> from Surprising Citizens</CENTER>
<LI><STRONG><A HREF="#bbpathology"><FONT  SIZE=+1>Big Body Pathology</FONT></A></STRONG> <BR><CENTER>Recognizing/Recording Mega-Corporate Assaults <BR>against the Body, Spirit & Biosphere</CENTER>
<LI><STRONG><A HREF="#anthrocult"><FONT  SIZE=+1>Corporate Anthroculture</FONT></A></STRONG><CENTER>The Art & Science of Raising <BR>Small People for Big Bodies</CENTER>
<LI><STRONG> <A HREF="#earthour"><FONT  SIZE=+1>Earth Hour</FONT></STRONG></A><CENTER>Monthly Moments of Transparent Identity<BR> with the Mother Corporate Body of Us All</CENTER>
<LI><STRONG><A HREF="#gloss"><FONT  SIZE=+1>Glossalalia</FONT></A></STRONG> <CENTER>Meanings of Unfamiliar Terms</CENTER>
<LI><STRONG><A HREF="#memetics"><FONT  SIZE=+1>Memetics</FONT></A></STRONG><CENTER>The Science and Strategy of Seminal Ideas</CENTER>
<LI><A HREF="#kipapers"><STRONG><FONT  SIZE=+1>Ki Papers</FONT></STRONG></A> <CENTER>The Numinous Powers of Attention</CENTER>
<LI><STRONG><A HREF="#consultations"><FONT  SIZE=+1>Nancho Consultations</FONT></A></STRONG> <CENTER>Millennial Guidance<BR>from Modern Meme Masters</CENTER>
<LI><STRONG><A HREF="#nanchohistory"><FONT  SIZE=+1>Nancho History & Horizons</FONT></A></STRONG> <CENTER>Origin/Agenda of  the Southern Court <BR>and The Future of Taoist Democracy</CENTER>
<LI><STRONG><A HREF="#tantra"><FONT  SIZE=+1>Tantra & Terra Erotica </FONT></A></STRONG> <CENTER>Arousing the Animal, Igniting the Body, <BR>Enchanting  the World</CENTER>
</UL>
<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>

<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="alt.kyoto">Alternative Kyoto</A></H3><P>
<A href="${BASE_URL}cityhall/catacomb.html"><STRONG>NEWS FROM CITY HALL</STRONG></A><CENTER>Reports on the Nancho Regency and the State of the City</CENTER><BR><BR>
<A href="${BASE_URL}1stlight/konomi.html"><STRONG> NANCHO KONOMI | NANCHO STYLE</STRONG></A><CENTER>Exposing Hidden Genii <BR> Works & Writings of the Inspired and Unfashionhobbled</CENTER><BR><BR>
<A href="${BASE_URL}kyoto/kyoijin.html"><STRONG>IN THE VOICE OF THE IJIN </STRONG></A> - <CENTER>Incensed, Aggrieved, and/or Exhilirating Interviews<BR> with Kyoto's Intrepidly Unincorporated </CENTER> <BR><BR>
<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="bbpathology">Big Body Pathology</A></H3>
<STRONG><A href="${BASE_URL}bigbody/lusions1.html">LUSIONS</A></STRONG> <CENTER>The Inescapable Parallels Between Japanese Corporate Bodies,  <BR>Eco-Pathogens and the Mysterious Slime Mold</CENTER>
<BR><BR>

<STRONG><A href="${BASE_URL}bigbody/apforum1.html">THE BIG BODY PROBLEM</A></STRONG><CENTER>Toward an Immune Approach to Grassroots Activism</CENTER><BR><BR>

<STRONG><A href="${BASE_URL}memes/orthodoc.html">SO YOU WANT TO BE AN ORTHODOCTOR?</A></STRONG><CENTER>Three Big Body Revelations &amp; A Little Heresy To Go</CENTER><BR><BR>

<STRONG><A href="${BASE_URL}bigbody/bbjbrown.html">CORPORATIONS: A REAL-LIFE FRANKENSTEIN</A></STRONG><CENTER>Jerry Brown on the Cancerous Growth of Big Bodies in America</CENTER><BR><BR>

<STRONG><A href="${BASE_URL}bigbody/corprule.html">THE 11 INHERENT RULES OF CORPORATE BEHAVIOR</A></STRONG><CENTER>Jerry Mander on: Why Big Bodies Can't Make Nice...</CENTER><BR><BR>

<STRONG><A href="${BASE_URL}bigbody/knox1.html">THE TROUBLE WITH CORPORATIONS</A></STRONG><CENTER>Barbara Knox series  on the Corporate Takeover of American Society</CENTER><BR><BR>

<STRONG><A href="${BASE_URL}bigbody/chrtink1.html">TAKING CARE OF BUSINESS</A></STRONG><CENTER>Breakthrough Proposals on "Citizenship and the Charter of Incorporation"
by Richard  Grossman and Frank Adams</CENTER><BR><BR>

<STRONG><A href="${BASE_URL}bigmed2000/index.html">BIG MEDICINE 2000</A></STRONG><CENTER>The Virtual Presidential Campaign to Heal Big Body Pathology for Once and for All.</CENTER><BR><BR>

<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="anthrocult">Corporate Anthroculture</A></H3>
<STRONG><A href="${BASE_URL}bigbody/lusions3.html">LUSIONS III</A></STRONG> <CENTER>Social Conditioning for Terminal Incorporation</CENTER>
<BR><BR>

<STRONG><A href="${BASE_URL}anthcult/castrhiv.html">"CASTRATION", THE HIV SCANDAL AND THE JAPANESE BUREAUCRACY</A></STRONG> <CENTER> [ <U>MIT Speech</U> ] : Defrocked elite bureaucrat and best-selling author, <BR>Dr. Masao Miyamoto reveals how people are made small to fit in Big Bodies <BR>and their murderous potential when rampant  </CENTER><BR><BR>

<STRONG><A href="${BASE_URL}anthcult/castreg.html">"CASTRATION" -- THE GOAL OF JAPANESE EDUCATION <BR>AND ITS RELATION TO GOVERNMENT DEREGULATION</A></STRONG> <CENTER>[ <U>Oxford &amp; Cambridge Speech</U> ]: Dr. Miyamoto explains Japanese anthroculture<BR> and how Big Bodies unman their members and stifle democratic reform </CENTER><BR><BR>


<A href="${BASE_URL}cityhall/rectmeme.html"><STRONG>HISTORY IN YOUR PANTS</STRONG></A><CENTER>Hormone Hobbles on the Body Politic</CENTER><BR><BR>
<STRONG><A href="${BASE_URL}anthcult/lancet2.html">SOY ESTROGENS, MENOPAUSE <BR>(&amp; ELEGANT EMASCULATION)</A></STRONG> <CENTER>A Lancet Report on the Medical Effects <BR>of Tofu, Miso, et Anti-androgenic Cetera.</CENTER>
<BR><BR>
<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="earthour">Earth Hour</A></H3>   
 
<A href="${BASE_URL}earthour/earthour.html"><STRONG>IGNITING THE EARTH HOUR </STRONG></A><CENTER>Alpha to Omega with a Recurring Lunar Conspiracy</CENTER><BR><BR>

<A href="${BASE_URL}earthour/ehdates.html"><STRONG>EARTH HOUR CALENDER</STRONG></A><CENTER>Earth Hour Timings Around the World</CENTER><BR>


<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="gloss">Glossolalia</A></H3>        
<BR>
 <A href="${BASE_URL}bigmed2000/biggloss.html"><STRONG>NANCHO DEFINITIONS</STRONG></A> <CENTER>Inventive Meanings and the Etymological Underbrush</CENTER><BR><BR>

<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="kipapers">THE <EM>KI </EM> PAPERS</A> </H3><P>
<STRONG>The Introductory Series on "Ki in the Body Politic"</STRONG> <BR>
<UL TYPE=disc >
<LH>Originally published in Kyoto Journal; reprinted in the Melbourne Star, <BR>Sydney Morning Herald, Whole Earth Review and Adbusters</LH><BR><P>
<LI><STRONG>PART I :</STRONG> <A href="${BASE_URL}kipower/kiarts.html">KI AND THE ARTS OF SEX, HEALING AND CORPORATE BODY BUILDING</A>
<LI><STRONG>PART II :</STRONG> <A href="${BASE_URL}kipower/kisoma.html">E PLURIBUS YAMATO: THE CULTURE OF CORPORATE BODIES</A>
<LI><STRONG>PART III :</STRONG> <A href="${BASE_URL}kipower/mindbind.html">KI AND THE JAPANESE ART OF MINDBINDING</A>
</UL><BR>

<STRONG><A href="${BASE_URL}kipower/kipower1.html">KI & THE POWERS OF JAPAN : The Video</A></STRONG>  <CENTER>Narration Text <BR>of the Video Proposal</CENTER>
<BR><BR>

<STRONG><A href="${BASE_URL}kipower/kibkoutl.html">KI & THE POWERS OF JAPAN : The Book</A></STRONG>  <CENTER>Chapter Outline <BR>for the Book Proposal</CENTER>
<BR><BR>

<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="memetics">Memetics</A></H3>

<STRONG><A href="${BASE_URL}memes/memework.html">MEMEWORK</A></STRONG>  <CENTER>Introductory Ideas &amp; Links for Mastering Memes</CENTER>
<BR><BR>
<STRONG><A href="${BASE_URL}memes/abexotic.html">THE ABHORRENCE OF THE EXOTIC</A></STRONG>  <CENTER>Japan's Comparative Advantage in Memetic Immunity</CENTER>
<BR><BR>
<STRONG><A href="${BASE_URL}memes/infoviru.html">MEMETICS</A></STRONG>  <CENTER>The Science of Information Viruses</CENTER>
<BR><BR>

<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="consultations">Nancho Consultations</A></H3>

<STRONG><A href="${BASE_URL}advisors/vcabinet.html">VIEWS FROM THE VIRTUAL CABINET</A></STRONG>  <CENTER>Excerpts from our initial audiences <BR>with the leading thinkers, movers and meme masters of the age<BR>Capra, Chomsky, Nader, Suzuki, Watson, Weil<BR>and many, many more...<BR>(This will take a few months to complete-- transcription's a bitch...)</CENTER>
<BR><BR>


<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="nanchohistory">Nancho History & Horizons</A></H3>
<A href="${BASE_URL}nancho/otheremp.html"><STRONG>JAPAN'S OTHER EMPEROR </STRONG></A><CENTER>Taoist Politics & the Nancho Resurgence </CENTER>
<BR><BR>

<A href="${BASE_URL}nancho/ghqkuma1.html"><STRONG>THE MACARTHUR ARCHIVES ON NANCHO</STRONG></A><CENTER>Excerpts from Classified GHQ Intelligence Reports<BR> on Kumazawa Tenno &amp; the Nancho Claim to the Throne </CENTER>
<BR><BR>

<A href="${BASE_URL}nancho/ghqemps1.html"><STRONG>THE MACARTHUR ARCHIVES ON JAPAN'S IMPERIAL LINE</STRONG></A><CENTER>Classified GHQ Intelligence Reports<BR> on the History of  the Chrysanthemum Throne</CENTER>
<BR><BR>


<A href="${BASE_URL}nancho/southdef.html"><STRONG>THE SOUTHERN COURT DEFENSE</STRONG></A><CENTER>Classified Notes on Mysterious Powers, <BR>Virtual Umbrellas and Buddhist High Tech</CENTER>
<BR><BR>

<A href="${BASE_URL}nancho/ijinregs.html"><STRONG>THE NANCHO AGENDA</STRONG></A><CENTER>The Government Registered Aims <BR>and Means of the Nancho Ijin Butai</CENTER>
<BR><BR>

<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >

<H3><A NAME="tantra">Tantra &amp; Terra Erotica</A></H3>
<BR>
<A href="${BASE_URL}tantra/tantween.html"><STRONG>SONG TO OMEGA</STRONG></A><CENTER>Epiphany &amp; the Torrents of Tween</CENTER>
<BR>
<A href="${BASE_URL}tantra/tangrail.html"><STRONG>MEDITATIONS ON THE TANTRIC GRAIL</STRONG></A><CENTER>Old Maps &amp; Buried Pleasure</CENTER>
<BR><BR>
<HR WIDTH=120 ALIGN=center SIZE=2>
<CENTER><A HREF="#topics"><FONT  SIZE=-1><STRONG>Backward yet Upward</STRONG></FONT></A></CENTER>
<HR WIDTH=120 ALIGN=center SIZE=2>
<HR WIDTH=70% ALIGN=center SIZE=2 >
<HR WIDTH=80% ALIGN=center SIZE=3 >
<HR WIDTH=70% ALIGN=center SIZE=2 >


<H6>Supported By People Like You (which is to say as yet, By Vanishing Little At All)  - But You Can Quickly
Correct This Disgraceful Situation, or At Least Endure <A href="${BASE_URL}thespiel.html"><STRONG>The Spiel</STRONG></A>.<BR>

LINK US UP ! Help Lay Fuse and Mycellium to Others Individuals of Thy Illustrious Ilk

<p><center>
<h5>Maintained by Nancho East </h5>
</center>
</BLOCKQUOTE>
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

export default Arcmain;
