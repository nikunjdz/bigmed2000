import { useEffect } from "react";

const AnthcultLancet2 = () => {
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
<FONT  SIZE=2><EM>- The Annals of Anthroculture -<BR>The artful science of raising humans for terminal incorporation</EM></FONT><BR>
<IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=450 HEIGHT=7 VSPACE=2>
<H2> Dietary phyto-oestrogens <BR>and the menopause in Japan</H2>
<H5>The Lancet, Vol. 339: page 1233, May 16, 1992</H5>
<IMG SRC="${BASE_URL}bulls/brnblk.gif" WIDTH=450 HEIGHT=7 VSPACE=2></CENTER>
<P>
<BLOCKQUOTE><FONT  COLOR=#BF0000><STRONG>Nancho Advisory:</STRONG> Phyto-estrogens are plant-derived estrogenic molecules which can, like normal female hormones, destroy testosterone and the chemical basis of male maturation and masculinity. The strongest dietary plant estrogens come from soybeans (indeed the powerful daidzein is named directly after <EM>daizu</EM>, the Japanese soybean), but they also occur in buckwheat, chickpeas, hops, and other foods traditionally fed to the "underclasses" in various cultures. Although the subject of this study was the inexplicable gentleness of the Japanese menopause, the implications of such a drug-grade estrogenic diet for young boys should be apparent. Add this factor to the intense anti-androgenic examination stress that Japanese boys endure during puberty and it becomes a bit clearer why Japan's <EM>salarimen </EM>come so close to the corporate Ming eunuch ideal. (When I asked Dr. Honjo, the head of the Japanese research team, about the potential effects on male children, she said "our results suggest a potentially serious problem that deserves immediate attention, but who would ever fund the research?")  All added emphases in the text below are ours.  </FONT></BLOCKQUOTE>

<HR WIDTH=90% ALIGN=center SIZE=4><P>
Lock, in an article on the menopause<SUPER>1</SUPER>, has discussed differences between Japanese women and women in western societies. Japanese women have a much lower frequency of hot flushes than women in Canada. Lock concluded that "cultural indifference to the hot flush in Japan" was unlikely to account fully for these findings.<P>

Recently our Helsinki group studied, in collaboration with Japanese scientists, the diet and phyto-oestrogen excretion in Japanese women and men, and in a few children.<SUPER>2 </SUPER> The women's mean age was 50.4 (SD 18.0) years and they were all from a small village south of Kyoto and consumed a traditional Japanese low-fat diet.  We studied a group of three men, three women, and three children living in Kyoto and consuming the traditional diet, and in this group we measured the isoflavonoid genistein.<SUP>2</SUP>  <B>We found a very high excretion of phyto-oestrogens</B> in urine.  The mean values were almost identical in the two groups and especially high excretion was found for genistein (maximum 15.5 �mol per 24h <STRONG>in a man</STRONG>) and two other isoflavonoids, daidzein and equol (table).  All these compounds bind to oestrogen receptors and have weak oestrogenic activity.<SUP>3</SUP>  The excretion of the isoflavonoids in urine of the Japanese women was much higher than in American and Finnish women (table) (ref 4 and unpublished data) <B>and <FONT  COLOR="#D70000">as high in children </FONT>as in middle-aged and old people</B>. These compounds were excreted<B> <FONT  COLOR="#D70000">in 100-fold to 1000-fold higher amounts </FONT> than those of endogenous oestrogens in normal omnivorous women</B> consuming a western or oriental diet (table).<P>

<CENTER><TABLE BORDER=4 CELLPADDING=3 >
<CAPTION ALIGN=top><FONT  SIZE=1>URINARY EXCRETION OF ISOFLAVONOID PHYTO-OESTROGENS AND ENDOGENOUS OESTROGENS IN JAPANESE OR ORIENTAL
WOMEN, AND IN AMERICAN AND FINNISH OMNIVOROUS
	WOMEN</FONT></CAPTION>
<TR><TH ALIGN=MIDDLE>Urinary isoflavonoid<BR> or oestrogen</TH><TH>Japanese/<BR>Oriental</TH><TH>American</TH><TH>Finnish </TH></TR>
<TR><TH ALIGN=MIDDLE>Genistein</TH><TH>3440 (n = 3)*</TH><TH>- - -</TH><TH>32.1 (n = 12)</TH></TR>

<TR><TH ALIGN=MIDDLE>Daidzein</TH><TH>2600 (n = 10)*</TH><TH>216(n=21)</TH><TH>40.5 (n = 12)</TH></TR>

<TR><TH ALIGN=MIDDLE>Equol</TH><TH>2600 (n = 10)*</TH><TH>2.8 (n = 21)</TH><TH>44.2 (n = 12)</TH></TR>

<TR><TH ALIGN=MIDDLE>Oestrone (postmenopausal)</TH><TH>4.48 (n = 9)**</TH><TH>- - -</TH><TH>4.48 (n = IO)</TH></TR>

<TR><TH ALIGN=MIDDLE>Oestradiol (postmenopausal)</TH><TH>4.48 (n = 9)</TH><TH>- - -</TH><TH>0.94 (n = 10)</TH></TR>

<TR><TH ALIGN=MIDDLE>Oestriol (postmenopausal)</TH><TH>4 .48 (n = 9)**</TH><TH>- - -</TH><TH>4.44 (n = 10)</TH></TR>
</TABLE></CENTER>

<BLOCKQUOTE><FONT  SIZE=2>All assays by gas chromatography/mass spectrometry in selected ion-monitoring mode with deuterated internal standards<SUP>5, 6</SUP> Women collected two to four 72 h urine samples 3-6 months apart and values are thus means of urinary excretion in individual subjects over 6-12 days.  Results as geometric means in nmol/24 h. <P>
*Values from ref 2.<P>
**Oriental postmenopausal women (recent immigrants to Hawaii).  Same women as in ref 7, but oestrogens measured by new technique.'</FONT></BLOCKQUOTE><P>

The excretion of<B> the isoflavonoids in urine was associated with intake of soy products such as <FONT  COLOR=#D70000><EM>tofu, miso, aburage, atsuage, koridofu</EM>, and soybeans</FONT>.  All isoflavonoids are weak oestrogens and <FONT  COLOR=#D70000>such high amounts could have biological effects</B></FONT>, especially in post-menopausal women with low oestrogen levels.  High levels of isoflavonoid phyto-oestrogens may partly explain why hot flushes and other menopausal symptoms are so infrequent in Japanese women.<P>

<CENTER><FONT  SIZE=2><STRONG>Supported by grants from the Medical Research Council, Academy of Finland, and S. Juselius Foundation, Helsinki</STRONG></FONT>.</CENTER><P>

Herman Adlercreutz<BR>
Esa Hamalainen<P>
Department of Clinical Chemistry,<BR>
University of Helsinki,<BR>
SF-00290 Helsinki, Finland<P>

Sherwood Gorbach<BR>
Barry Goldin<P>
Nutrition/Infection Unit,<BR>
Department of Community Health,<BR>
Tufts University School of Medicine.<BR>
Boston, Massachusetts.  USA<P>




<FONT  SIZE=2>I. Lock, M, Contested Meanings of the Menopause.  <I>Lancet</I> 1991; 337:1270-72.<P>
2. Adlercreutz, H., Honjo, H., Higashi, A., et al.   Urinary excretion of lignans and isoflavonoid phyto-estrogens in Japanese men and women consuming traditional Japanese diets, <I>Am. J. Clin. Nutr</I>. 1991; 54:1093-100.<P>
3. Setchell K, Adlercreutz, H, Mammalian lignans and phytooestrogens: recent studies on their formaation, metabolism and biological role in health and diseases In: Rowland I. ed.  Role of the gut flora in toxicity and cancer. London,  Academic Press, 1988. 315-45.<P>
4. Adlercreutz, H, Votsis I, Bannwart C, et al. Determination, of urinary lignans and phytoesogen metabolites, potential antiestrogens and anticarcinogens,  in  urine of  women  on  various habitual  diets.  <I>J  Steroid  Biochem</I>  1986;  25:  791-97.<P>
5. Forsis  T,  Adlercreutz  H.  The  multicomponent  analysis  of estrogens in urine by ion  exchange chromatography  and  GC-MS-I:  quantitation of estrogens after intial  hydrolysis  of  conjugates.  J   Steroid  Biochem  1987;  28:  203-13.<P>
6. Adlercreurz  H,  Fortsis  T,  Bannwart  C,  Wahala  K,  Brunow  G,  Hase  T,  Isotope  dilution  gas  chromatographic-mass spectrometric  method for the determination of  lignans  and  isoflavonoids  in  human  urine,  including  identification  of  genistein.  <I>Clin  Chim  Acta  </I>1991;  199:  263-53<P>
7. Goldin   BR,  Adlercreutz  H,  Gorbach  SL,  et  al.  The  relationship  between  estrogen  levels  and  diets  of  Caucasion  and  Oriental  immigrant  women.  <I>Am  J  Clin  Nutr  </I>1986;  44:  945-53<P>
<P><HR SIZE=3>
Editor's note: These startling findings have since been re-confirmed by further follow-up studies which we shall reproduce or excerpt here later.</FONT><P>
<HR WIDTH=100 ALIGN=center SIZE=3>
<CENTER>
<A href="${BASE_URL}arcmain.html#anthrocult">Back to<BR><STRONG>Anthroculture</STRONG></A></CENTER>
<HR WIDTH=100 ALIGN=center SIZE=3>
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

export default AnthcultLancet2;
