import { useEffect } from "react";

const AdvisorsEjcricht = () => {
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

<FONT  COLOR=#400000><CENTER><EM>The Nancho Consultations</EM></FONT>

<TABLE BORDER=5 CELLPADDING=5>
<CAPTION ALIGN=bottom> Michael Crichton </CAPTION>
<TR><TD ALIGN=MIDDLE><BR><BR><IMG SRC="${BASE_URL}graph/demonr.gif" ALT="Nancho Lite" hspace=15 WIDTH=84 HEIGHT=150 HSPACE=2 BORDER=0 > </TD><TD>
<IMG SRC="${BASE_URL}advisors/graphics/michaelc.jpg" WIDTH=113 HEIGHT=150 HSPACE=15 VSPACE=15 BORDER=3  ALT="Sri Michael"></TD></TR><BR><BR>
</TABLE>
<BR>




<IMG SRC="${BASE_URL}bulls/advline1.gif" WIDTH=399 HEIGHT=6></CENTER><P>

<!----******************************************MAIN TEXT******************************************-->
<CENTER><H2>Nancho Consults Dr. Michael Crichton</H2>
<BLOCKQUOTE>Wherein the preeminent diagnostician of the modern Body Politic warns us of the <A HREF="#MNCs">Multinational Plague</A>, the <A HREF="#bigness">Symptoms of Bigness</A>, <A HREF="#cyberhype">Cyberspace Hype</A> and the <A HREF="#Lappham">Big Body Takeover of the Socio-Political Universe</A>. </BLOCKQUOTE>
<H3>- <EM>Verbatim Excerpts</EM> -</H3></CENTER>

<CENTER><IMG SRC="${BASE_URL}bulls/advline1.gif" WIDTH=399 HEIGHT=6><P></CENTER>


<!----*******************************************LINKD****************************---->

<BR>
<FONT  SIZE=4>

<FONT  COLOR=#400000><STRONG>Nancho</STRONG>: Just one query before we start. Why do you still submit to these indignities? Why do you still do interviews?</FONT><P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  Why is it an indignity? </BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> Well, there are people who gain from interviews, who are self-promoting or have something they want to put out to the world so interviewers can help them. We turn them on, plug in the tape recorder, and they present their case to the world using us as their instrument. But there are a lot of people like thee who have already made it, who no longer need exposure, so that the interview rather than being any kind of service to you, it's obviously a complimentary boon to us that is being granted.</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  I don't feel that way. I feel that the classic problem that someone in my position faces is isolation. And so periodically it's very useful for me to go out and have contact of different kinds.  That's primarily the reason I give speeches.  I don't care if I give the speech, but I want to meet the group that I'm speaking to or have some contact with them. And the reason for doing press is also that. Or, you know, related things like book signings or anything like that. That's very often the most interesting thing that I can do in terms of having some interaction. It's something about not being locked up in my own room, in my own head. Talking is interactive and writing is not.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  OK, then, first question: the youth of the world wants to know, "Is there is life beyond the millennium?" I mean, livable life, sensual life, carbon-based life. You have been involved more than most people thinking about, writing about, and studying the unfolding of the new technologies, their implications, the movement of the geo-political economy, etc. <A NAME="MNCs">You </A>see the concentrations of power. You can read the future a bit. And what do you see? How would you prepare yourself for life in the next 20 years?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  I think we're coming into a difficult time, difficult around the world. And the reason I say that is western societies have elected to permit the rise of multinational corporations. And those corporations are now more powerful than nation-states. And they have very different kinds of structures and allegiances. And in their present form they are, in fact, quite new. So, I think we're going to be feeling our way in this new period in which entities make the world safe for capitalism or for capital and not for people. Exactly how that's going to turn out in terms of national governance or for smaller groups or particularly for individuals is not clear. But it's going to be a very powerful force. <P>

I personally see it as a return to feudalism. At least in the States now there is a kind of panic about not having a job and all the things that it means. There is a kind of perception of people who are not attached to some sort of corporate entity as being wicked or dangerous or unscrupulous or something wrong with them. I mean, it's the image of the ronin, you know. It's this kind of masterless samurai. It's very weird really.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> <A NAME="bigness">The </A>rise of these multinational corporations...you can look at it as a competitive evolution, you know, between individuals or communities and much, much larger, more hierarchical organisms that are usurping more power within the media, within the educational system, within the political process - entities that don't necessarily have our biological, ground level interests at heart...nor the interests of the ground itself for that matter. You warn about that so often...</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>: Historically we have made a step which I find very unusual... a step toward bigness that's not very old. You know, in Hawthorn's day, people, Hawthorne himself, went to London just to look at it. It was so big. It was 2 and a half million people. It was the biggest thing, the biggest city on the planet, western city. I don't know how big Tokyo was at that time. Probably pretty large. Or how big cities in China were. But the decision to make a population site that is that large, I think is very much against deep human nature. I don't think we're comfortable in it. I don't think we like it and I don't think it's good for us. I think left to our own devices, we won't be in those places. Left to our own devices.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> You're talking about a huge historical force then to drag us into them...</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  Yes, that's right.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  So, how would you define that?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  I don't understand it. I mean, I understand it in a sense economically that there are opportunities in urban environments and I think there are attractions historically. "How are you going to keep them down on the farm after they've seen...", you know. Farming existence to the extent that I have any sense about it is very rewarding and grounding and sobering and very, very hard work. Very hard work. </BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  But what about the small city...I mean, historically you've had wonderfully burgeoning cultures in metropolises of 50,000 to 100,000, right? No high-rises, no malls...</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  Yes, and I think there is going to actually be a return... I don't know what will happen in Japan but I think there is going to be a trend away from enormous centers. I don't know what will happen in countries like Japan and England where the central metropolis is so defining of the entire culture. But...</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  What do you see causing this or enabling this?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  Causing what?</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  The flight from the cities.</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  I think the people really don't want to live there. I believe the people want to live in groups sufficiently small that you can recognize the people that you see, at least recognize by face. Small. What? Thirty thousand is maybe the upper limit of that. I think that's what's most comfortable.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> Population centers are one thing, but what about these vast corporations? You see them getting bigger, you see them getting more powerful, you see them getting more empowered by new technologies...</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  I don't have any secret answers that other people don't have, but I do have a belief that systems are self-correcting. Somehow or other they correct or they die. But you know, for example, in the last ten years in the States there's been a tremendous problem about unchecked media power. The people are starting to win many more law suits against the media which was kind of unheard of sometime in the past. Now, it's getting more and more common. It seems that every few months there's another lawsuit and the media is losing. And it's almost as if the whole society is making this slow turn and saying, "Fuck you, guys! You know, I don't care about the First Amendment. I don't care about anything. You are out of control." And it's interesting. It's sort of an unstated thing. But it has to occur. Too many people are being irreparably damaged on personal levels and work levels. And the social fabric is being turned to junk  </BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> You've got a young daughter, right?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>: Yeah.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> And among my friends, myself included, I have noticed that having kids late in life tends to take a relatively healthy level of urgency and push it one level further because you start to see the future down beyond where you can be confident that you yourself would survive. And when you look at that, the insults to our future are not just a matter of bureaucratic inconvenience or economic inequities that we will learn to live with or we will correct democratically at some point in life. Don't you see a certain convergence of new... I won't say malevolent because there is no morality involved... but of forces that are not in our general, spiritual or ecological interest; forces that have taken a much stronger hand in our culture and society in the last hundred years, say forces that have taken the evolutionary initiative away from us as a species...</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  I know, David, but here is the problem. When you read Plato's complaints about the youth...</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  All right, you can have too much perspective...</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>: No, they're like my complaints about the youth and I think it's easy to attain a certain maturity and then say that the whole world is going to hell in a handbasket and it's not as good as it used to be when I was younger and these directions are all wrong. And that's the traditional attitude of, you know, that was the way that old people talked to me and I didn't have the luxury of saying, "yeah, you're right." I was moving up into this world and my daughter will move up into this world, too.<P>

You know, do I think we have a problem with disposable nuclear waste? Absolutely. Could it finish off everybody with a nice big error? Absolutely. It's not likely, but yeah it could be very devastating. Are we at risk for diseases because of the extent to which we are rapidly cutting down the rainforest? It's my opinion that we are. You know, is it going to kill everybody on the planet? I don't know. The planet has been devastated and human beings have been devastated...seventy-five percent mortality of groups. Historically that has happened more often than not. You know, every time we think we have an idea about how it works we get new information that suggests that we don't. You know, there is a gigantic convulsion in the States now which no one will really talk about which has to do with the fact that it turns out that there are a number of skulls that appear to be pre-Native American that are Caucasoid. <P>
And people are just going crazy, you know. And there is a tentatively held thesis that the Ainu are a remnant of a great migration that came out of Europe or Asia that was Caucasoid which crossed Bering Bridge leaving behind isolated pockets like the Ainu which inhabited the new world until a second group which is Amer-Indian came in and wiped them all out. </BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>Thus justifying Mormonism! </FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>: Is this likely to be true? I would imagine that the whole history of the planet is these successive battles between groups in which disease spreads or simply something like holocaust-like behavior attempts to make another group extinct.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  OK, you're building the logic for it, but you're not saying in your work or in your life that since we don't know the answer, since we don't know what effect we're going to have, since we don't understand the system in which we work...you're obviously not saying that we're not going to do anything about it. So, given all those levels of uncertainty, how do you focus yourself? You make very strong statements in your books.</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  Yeah, but I think that it's not widely recognized that most of the things that I am dealing with are relatively near-term. You know, every once in a while someone will say, "What do you think about the 23rd century?" Nothing. It never crosses my mind. I mean, I've been alive more than half a century. Many, many of the outcomes today seem very surprising to me based on what I would have anticipated earlier in my life. And I'm not sure which of those surprising outcomes will remain or which will disappear.  In many areas of my interests I've noticed that a lot of people are very enthusiastic about running with the bulls a long ways. You know, when I did <U>Travels</U> which sort of talked about...I don't know what the word for it would be, psychic or extrasensory things or whatever, I would either be attacked - people would say, "how did you believe this obvious fraudulent malarkey?" or I would then have an interview with somebody and they'd say, "hey, that's right and what about those aliens?" Well, I don't actually think that aliens walk among us. I really don't. I mean, some do but I don't feel this way. So, I was made very uncomfortable by the person who would assume that because these ideas, that I had some set of ideas that I also had another set. And I think that one of the most difficult things for us to say is that we don't know.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> Well, out of that period, what did you learn that was most important? I mean, you've observed a lot of different phenomena and out of that what have you taken into your life? What was the lesson?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>: I'm pretty clear that there are perceptual insights into the future that are not acknowledged in current science but which are true nevertheless. And that also these abilities are not 'booga booga', they're not devil worship, they're not religious in any way at all. They are just abilities. And one day people will be more comfortable with them. But at the moment the tendency to define them as psychosis or heresy is not useful. </BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> I'm still looking for redemptive impulses in society here, and I don't believe it's going to come out of technology at the rate or the way it's being controlled or pedaled now.</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  No, I don't think it ever has. I think the whole notion that mankind evolves with its machines, that the proof of progress is technological advancement is erroneous and it's been recognized among observers as opposed to participants, it's been recognized as erroneous for a very long time. </BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>But that hasn't slowed it.</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  No, of course it won't slow it. </BLOCKQUOTE>  

<FONT  COLOR=#400000> Why "of course"? Why is it hopeless?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>: Because the people who recognize it are not the manufacturers. I mean, here in Japan this past week I was perceived by many people as kind of critical and depressive in my views, relentlessly negative. Some sense of, "well, you're so successful, why are you negative?" (laughter) And my response was or my way of thinking was or my answer was, "What everyone hears is a lot of enthusiasm for new technology because it's coming from the manufacturers of the  technology. Of course, they're enthusiastic, they're trying to sell it." But what we don't get is much balanced appraisal. <A NAME="cyberhype">And</A>, in fact, it's quite possible about the Internet and cell phones and beepers and all this connectant technology, connection technology, it's possible to be very negative about it. To see it as eroding human interactions of all kinds, as a kind of addictive process that's eating up behavior, as a kind of promotion of absurd fantasy. You know, these "cyber relationships" and cybersex. And cyber sex???? And cyberspace. There is no cyberspace. That's delusion. It's not a space. When you telephone somebody there's no "phono-space." It's a telephone call, for Chrissakes. This is all baloney. But how we think about  these things is tremendously powerful. You know, I'm in cyberspace now, I can't talk to my children. Really? Well, you don't do that on the telephone because the kid goes, "Dad, hang up the phone." You're not 'in' any space, you're just talking on the phone. You're 'in' this space. Well, now we've decided that you can go away from here and now to cyberspace. It's Neverland for Peter Pan. Of course, the people who sell this shit want to have us believe that, but it's absolutely invalid.<P>

I was ten years old before there was television. That's old enough to see what it is actually doing. It's not a benign force. It was claimed to be. It claimed to offer all the wonders of the educational future. You know, pretty much in the same terms and in the same way that the Internet is now touted as. I mean, the Internet is ultimately a new advertising and distribution medium. Oh, a new advertising medium! That's wonderful! Because if there is anything that I think that I lack in my daily life it's exposure to advertising! So, the fact that I can now turn on my computer which was formerly free of advertising and get some ads. Isn't that great? And along with the ads I get a tremendous amount of really erroneous information. Good deal! And I pay for it. Outstanding! And it's going to be in every classroom. Perfect! Great! I love it! (Biting laughter...)</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> But when you pick a topic to write on, for example, do you pick things that you feel some affinity for or do you feel that it's something people should know about?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC:</STRONG>  I feel it's something people should know about.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> So, it is didactic, the initial impulse?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  Yes, absolutely. But I stay away from areas that I'm unpersuaded by, and even areas where I can see conflicts between my position, which I think I'm holding for the right reasons, but which are also kind of self-serving. You know, in a way saying, "well, I want population control" is very self-serving. I've got my family, now there's too many people. "Stop it now." You know, I've made my money. "Let's not have any more of this." It's quite inappropriate for me. And certainly in the United States there is a 'do-gooder' mentality that says, "Oh, all you people cutting in the rainforest, stop that!" Well, meanwhile what are we doing about the US forests? We're not handling that as well as we could. "So, why don't you shut up about Central and South America and deal with Oregon, please, if you're so smart? Start here." It's very difficult to talk like that. It will make you unpopular. </BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> So, this thing is still a mystery...how you keep going given all the madness.  Because you see it...you've got a vested interest - you've got family, you've got genes rolling on into that future...</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  You know, in my lifetime...well, not in my lifetime but in the last 20 years something happened which I never would have expected, which is that as a fundamentally left-leaning person, I have seen the rise of what I call post-modern leftist fascism in the United States. That is, people who I think of as my people, you know, the people that I agree with, are now very ready to tell everybody else how to behave. It scares the shit out of me. And there is no doubt that it is occurring.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> This is beyond PC (political correctness)?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  PC is enough, you know. (laughter)  The only reason for starting to say this is that the initiating impulse is that "I know what is best for you. I know what is best for you. I'm going to tell you what is best for you." "Oh, dear, really? How do you know what is best for me? How do you know what is best for society? I don't." And I think there is a kind of disease of paternalism which is what it really is. "Let me tell you what I think"...you know, "I've thought about this and I'm smart and wise and I'll tell you how you ought to behave." I reject that.      You know, I did several television interviews here in which they asked, "What is your advice for Japan?" and in every case I said, "I couldn't make such a judgment...it would be far too arrogant for me to give advice to Japan." And in every case they were disappointed or angry that I wouldn't do that. I think I have no business doing that. Who am I to make judgments about even how another individual person lives their life, let alone a whole country? Who am I?</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  I'm getting a lot of news from your good angel here today, because you obviously do make judgments in your work. You make these powerful diatribes that come bursting out in these otherwise placid plot movements sometimes. And obviously something has been building up and the fact that you were still able to deliver it to the screen as well as through the book is often miraculous. But when that comes out, you are full of judgment. And it's not necessarily "this is how you should live your life" but "this is what's happening and this is how I see it and I do not look lightly upon this phenomenon...."</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  <A NAME="Lappham">And </A>I certainly have spoken in those ways here � about the erosion of human values that I see; the erosion of the opportunity for human interactive time; the dominance of increasingly large corporate business groups that have increasingly autonomous agendas that no one can touch; and the increasing recognition that 'that's the way it is.' You know, Louis Lappham who is the editor of Harper's Magazine was on television and I just thought it was breathtaking...after the last American election, he said, "Well, I think we had the election that the corporations allowed us to have." Just like that, on television. Well, no one will really touch this intellectually. It's just too scary. We all like to think that we are masters of our fate and we go, "march right into that polling booth and make our feelings known." Uh, hmmm. (sarcastic tone) Yeah, I talk about that.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> And....</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  And I don't know what to do about it.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> But you will continue talking and thinking about it, though?</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>: Oh, sure. And I think individually you can try and take action. I believe a great deal in the way we were talking before about the psychology of allowing a person to make their own change. I believe that there's enormous amount of value in talking about problems, of defining them. </BLOCKQUOTE>  <P>

<FONT  COLOR=#400000> Okay, so now we're talking about the jet stream above public opinion (MC: Yes.) and how media and official attitudes can effect that. You are a player in that world. (MC: Hmmm.) You know the memetics idea, the idea about memes as cultural genes, the Dawkins thing about how ideas spread through the public nervous system? (MC: Yes.) Well, you're kind of a meme accelerator. I mean, when something enters your central chamber, the way in which it is emitted into the public nervous system, it is turbo-charged in such a way that it becomes a "topic". And whether it is in reviews or op-ed pieces or 12 o'clock at night on drunken talk radio, it continues to reverberate through the public mind. So, when you pick your topics, reveal their implications - the way you focus them does play a larger role in the American debate, and therefore the world debate than almost anyone else. What...maybe a dozen other people have that kind of clout on the planet right now  in terms of being able to frame a debate, of being able to define a controversy? So, it's always kind of important what your next book is about. And that's why I'd like to know how you make those distinctions. You say, you think it's what people should know. You have a didactic, a "dare to be didactic!" mission and most people don't anymore...</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>:  Yes, I think didacticism is good. I think a lot of times my task is to provide perspective which is missing or to take any given thing, issue, situation, and expose the other side. All the things that no one is talking about, because there is always another side. And the clearest one for me, and very clear in terms of the influence on your own children, the clearest one for me was sexual harassment. Because, you know, I've got this daughter growing up in the world and I don't want her to have this experience. But the way in which  people were going about addressing it, clearly seemed to me to be deleterious to the entire system and to the position of woman. You know, I don't want my child to feel that she is a victim who has to cower her way through life around these men who are vile, satanic creatures. Which was the posture, which was the kind of opposition that was starting to happen. It was baloney. And so I wanted to try and get a rebalancing. Clearly. Clearly I had an agenda and I thought I was right. It wasn't a very global agenda. It was just sort of a response to a philosophy that I thought had become extreme.</BLOCKQUOTE>  <P>

<FONT  COLOR=#400000>  Okay, but when you do that it does generate to some degree a little more sanity in the debate.</FONT>  <P>

<BLOCKQUOTE>  <STRONG>MC</STRONG>: Yeah, but you know what I think happens, and this certainly was true about Rising Sun in Japan, is that it just opens the door. You know, what could never be said can now at least be said. <P><CENTER> - End -</CENTER></FONT>
<P>
<FONT  SIZE=-1 COLOR=#400000>Nancho Rep: W. David Kubiak</FONT>
</BLOCKQUOTE>  <P>


<!----******************************************************MORE INTERNAL LINKS AND THE END********---->
<BR>
<CENTER>
<HR WIDTH=250 ALIGN=center SIZE=2>

<A HREF="#toc">Return to Beginning</A>  | <A href="${BASE_URL}arcmain.html">Go to Archives</A> 

<HR WIDTH=250 ALIGN=center SIZE=2>

<HR WIDTH=90% ALIGN=center SIZE=3>

TO CONSULT HIM THYSELF, VISIT A CRICHTON CORNUCOPIA:<BR> <A HREF="http://spaa.simplenet.com/crichton/" > CRICHTON ONLINE</A>
<HR WIDTH=90% ALIGN=center SIZE=3>

<!----******************************************************MORE INTERNAL LINKS AND THE END********---->

<HR>
<CENTER>
<TABLE BORDER=3>
<TR><TD ALIGN=MIDDLE><A HREF="#toc"><IMG SRC="${BASE_URL}butts/btlback.gif" WIDTH=100 HEIGHT=36 border=0 ALT="Back"></A></TD><TD><A href="${BASE_URL}arcmain.html#consultations"><IMG SRC="${BASE_URL}butts/buttarch.gif" WIDTH=100 HEIGHT=36 BORDER=0 ALT="Archives"></A></TD><TD><A href="${BASE_URL}advisors/vcabinet.html#portfolios"><IMG SRC="${BASE_URL}butts/btlindex.gif" WIDTH=100 HEIGHT=36 BORDER=0 ALT="Index"></A></TD></TR>
</TABLE>
</CENTER>



<H5>
<A href="${BASE_URL}sharight.html">Shareright </A>(S) 1999 : Nancho Ijin Butai 
</H5>
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

export default AdvisorsEjcricht;
