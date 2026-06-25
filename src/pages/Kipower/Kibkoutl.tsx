import { useEffect } from "react";

const KipowerKibkoutl = () => {
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
<table width="800" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td width="180"><TABLE BORDER=4 CELLPADDING=3 ALIGN=LEFT HSPACE=15 VSPACE=5>
<CAPTION ALIGN=bottom></CAPTION>
<TR><TD><IMG SRC="${BASE_URL}graph/kijis.gif" WIDTH=80 HEIGHT=79 ALT="The Ki Character"></TD></TR>
</TABLE>
</td>
    <td align="left">


<table><tr><td><div align="center"><IMG SRC="${BASE_URL}jclu/images/jclulin.gif" WIDTH=330 HEIGHT=5>
<H3><U>"Ki & the Powers of Japan"</U></H3> <FONT  SIZE=-1>CHAPTER OUTLINE<BR>For a Universally Rejected Book Proposal</FONT><br>
<IMG SRC="${BASE_URL}jclu/images/jclulin.gif" WIDTH=330 HEIGHT=5></div></td></tr></table><P>
</td>
</tr>
</table>

<table width="800" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<BR>
<IMG SRC="${BASE_URL}jclu/images/jclulin.gif" WIDTH=90% HEIGHT=3>
<H3><U>Section I</U><P>ENERGY AND THE WEB OF LIFE<BR> 
- The Political Economy of Ki -</H3>
<IMG SRC="${BASE_URL}jclu/images/jclulin.gif" WIDTH=90% HEIGHT=3></CENTER>

<H3>Needling the Yellow Emperor : Ki in History</H3>

<UL>
<LI>China's discovery/perceptions of ki in the natural/physiological environment;
<LI>Relation to prana, pneuma, ruach; 
<LI>Ki of heaven and earth: astrological/geomantic phenomena; 
<LI>Human body/social polity parallels: bio-social intimations. 

</UL>

<H3>Nectar and the Cauldron : Ki Incarnate</H3>

<UL>
<LI>Energy medicine: disciplines, drugs and rituals to manifest the energy body; 
<LI>Endo-incandescence: sexual ki, tantra and meridian intercourse; 
<LI>Mystic physiology: role of the tonsils, appendix and pineal crystals;
<LI>Ki and the sense of self: individuation, assertiveness, libido, endocrine function and immune competence; 
<LI>Internal ki, focal chakras and personality/societal types; 
<LI>Attentional ki as determinant of consciousness, memory, identity.
</UL>

<H3>Sizzle, Dazzle and Star: Ki in Society</H3>

<UL>
<LI>Attention, please: Japanese perceptions of social ki phenomena;
<LI>Interpersonal ki: trade balances &amp  addiction; 
<LI>Depersonalizing psychosomatic toll of chronic ki deficits; 
<LI><I>Ninki</I> - charisma and crowd effects; 
<LI>Transpersonal ki bonds - tantric, compassionate and cerebral-vicarious; 
<LI>Psycho-social ki as existential nutrient.
</UL>

<H3>Media, Movements and Flow-Alongs: Ki in the Body Politic</H3>

<UL>

<LI>Channeling: bio-social ki bonds and group attention structure; 
<LI>Ki leadership: fear, love and strange attracters; 
<LI>Commercial animadversions: ki pandering by the cubic second;
<LI>Ki suction: 5th argument for elimination of television; 
<LI>Ki polarity: encephalization, sensual retardation and organizational development.
</UL>

<H3>Time Wars: Ki and Humane Evolution</H3>

<UL>
<LI>KiQ: ki distribution curves &amp  the topology of transcendence; 
<LI>Organic ki cycles: tribal/community models; 
<LI>Sustainable creation:maturation/individuation/genius; 
<LI>Internalizing acquisitiveness: antidotes to consumerism; 

<LI>Craft vs. corporate life.
</UL>
<HR WIDTH=50% ALIGN=center SIZE=4><BR>
<CENTER><H3>Immunogentile Appendices</H3>

Dowsing the Grid: Meridian/Leiline/Attention Structure Maps<P>
Hunting the Wild Tsubo: Points that Make a Difference<P>
Compiling Ki Budgets: Discrete Dispersals vs. Circulating Synergy<P>
</CENTER>
<table><tr><td><div align="center"><IMG SRC="${BASE_URL}jclu/images/jclulin.gif" WIDTH=90% HEIGHT=3><BR>
<H3><U>Section II</U><P>CORPORATE ANTHROCULTURE<BR>

- This Business of Neoteny -</H3>
<IMG SRC="${BASE_URL}jclu/images/jclulin.gif" WIDTH=90% HEIGHT=3></div></td></tr></table>

<H3>Social Organismics: Corporate Bodies as Dominant Life Forms</H3>

<UL>
<LI>Bio-precedents: ancestral collective/colonial organisms; 
<LI>Sonata for slime molds; 
<LI>Great body mutations and the fascist ideal - tribal/military/ecclesiastic models;
<LI>Corpo-typology: symbionts, parasites, saprophytes and bottom feeders;
<LI>Engineering adhesion: membranes, symbols, fear and insider consciousness.
</UL>

<H3>Osaka <I>Hanninmae</I>: Reinventing Little People</H3>

<UL>
<LI>Who killed Adam Smith: the paralysis of the "Invisible Hand"; 
<LI>The wasp's tale: the economics of corporate brood retention;
<LI>Ballad of the wild anchovy: facultative vs. compulsory schoolers; 
<LI>Corporate body-building ideals: women and children - first, last, always.
</UL>

<H3>Kyoto <I>Senseis</I>: Masterminding the Bonsai Puberty</H3>

<UL>
<LI>Hormonal engineering: the war on androgens; 
<LI>Estrogenizing adolescence: the politic economy of high stress schooling; 
<LI><I>Iemoto</I> culture: disinventing graduation and perpetuating pupil/pupahood;

<LI>Macrobiotic ball busting: unhip hops and the secrets of soy; 
<LI>Authoritarian endocrinology: Aunt Jemima and the buckwheat cake.
</UL>
<H3> 
Tokyo <I>Kaisha-shugi</I>: Husbanding/Harvesting the Homuncell</H3><P>

<UL>
<LI>Pre-adolescent society: bondage, fashion and the reign of cute; 
<LI>Corporate booming: fad induction and market peristalsis; 
<LI>Situationally soluble ethics; 
<LI>Deconstructing democracy: participatory consensus vs. surrender to boss thought; 
<LI>Banzai salarimen and the Nanking Massacre; 
<LI>Slime mold sonata (reprise).
</UL>

<H3>Cultural Caponization: Big Orgs and Memetic Eunuchs*</H3>

<UL>
<LI>Memes, genes and androgens: encephalizing emasculation; 
<LI>Return of the Child Buyer and the Ming eunuch's mother; 
<LI>Memetic vasectomies: disindividuation and "ism" clones; 
<LI>Corporate scale and homuncell culture; 
<LI>Beyond neoteny: waking up, breaking out, growing up.
</UL>
<HR WIDTH=50% ALIGN=center SIZE=4><BR>
<CENTER><H3>Immunogentile Appendices</H3>

Calculating Incorporation: How <STRONG>In </STRONG>Are You?<P>

Estro-Eating: Diet for a Small Spirit<P></CENTER>
<HR WIDTH=60% ALIGN=center SIZE=4><BR>

<table><tr><td><CENTER>
<IMG SRC="${BASE_URL}jclu/images/jclulin.gif" WIDTH=90% HEIGHT=3><BR>
<H3><U>Section III</U><P>GAIAN DIAGNOSTICS<BR>
- New Dimensions in Disease -</H3>
<IMG SRC="${BASE_URL}jclu/images/jclulin.gif" WIDTH=90% HEIGHT=3>
</CENTER></td></tr></table>

<H3>BIG Trouble: Mega-Corps as Planetic Pathogens</H3>

<UL>
<LI>Scale plague: escalating size and diminishing existential returns; 
<LI>Germ theory revisited: the Yellow Emperor in the rainforest; 
<LI>Multinational metastasis: despecialized growth syndrome and the corporate socionoma; 
<LI>Mega-pathogen perspectives on political/economic/cultural/environmental pathology; 
<LI>Silicon centralization: competitive evolution between human and corporate bodies.
</UL>

<H3>Antibody Alert : Activism as Immune Response</H3>

<UL>
<LI>Immunological allegories: the body, the corps, the whole she-bang; 
<LI>Evoking the immunogentry: chaos networking and the planetary lymphocyte; 
<LI>Parable of the macrophage; 
<LI>Social anaphylaxis: the '60s re-aroused.
</UL>

<H3>Saltation Now! : Empowering Person and Planet</H3>

<UL>
<LI>Inducing Omega: Gaianimism, bio-theology and the Net's first thought;
<LI>Planetrysts: alpha synch, energy churning and collective epiphanies; 
<LI>Sensual tantrysts and identity transparency**; 
<LI>Toward planet-wide, bio-regional populism; 
<LI>Deliquescing daddy: socio-lysis, craft and worker control; 
<LI>Media medicaments: fumigating the zeitgeist.
</UL>
<HR WIDTH=50% ALIGN=center SIZE=4><BR>
<CENTER><H3>Immunogentile Appendices</H3>

Assessing Your Immunogentility<P>

<A href="${BASE_URL}earthour/earthour.html">EARTH HOUR CONSPIRACY</A>: Igniting Global Consciousness<P></CENTER>
<HR WIDTH=60% ALIGN=center SIZE=4><BR><BR>
*cf, <A href="${BASE_URL}memes/abexotic.html">The Abhorrence of Exotic Ideas</A>.<P>
**cf, <A href="${BASE_URL}tantra/tangrail.html">Tantra for Terra Erotica</A>.<P>
<HR WIDTH=100 ALIGN=center SIZE=3>
<CENTER>
<A href="${BASE_URL}arcmain.html#kipapers"><STRONG>Main Archive</STRONG></A></CENTER>
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

export default KipowerKibkoutl;
