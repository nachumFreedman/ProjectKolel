import React, { Component } from 'react';

import './Central.css';

import HeaderList from '../pure/HeaderList';

class Central extends Component {
  state = {
  }

  backToTop = ()=>{
    window.scrollTo(0,0);
  }

  
  render() {
    const BackToTop = ()=> (
      <div style={{ width: 100, margin: '0 auto', color: 'blue' }}
           onClick={this.backToTop}>
        Back to top
      </div>
    );

    return (
      <div className="CentralPage">

        <center>
          <h1>D.A.F.'s Dafyomi Central Headquarters</h1>
          <p>
            <a href="index.htm" target="_parent">D.A.F.</a>
      &nbsp;has compiled for your convenience a list of Dafyomi and Talmud related resources which are available through Email or the web.
                                                                                                                             <br/>
      <small>
        To update us our list write to &nbsp;
        <a href="mailto:daf@dafyomi.co.il?subject=Dafyomi Central">daf@dafyomi.co.il</a>
      </small>
          </p>
        </center>
        
        <div style={{ display: 'flex' }}>
          <HeaderList head="About Dafyomi" items={[
            { text: 'Calendars', link: '#calendars' },
            { text: 'What and where is Dafyomi?', link: '#whatisdafyomi' },
            { text: 'What is the Talmud?', link: '#whatisthetalmud' },
            { text: 'Siyum Clips', link: '#siyum' },
          ]}/>

          
          <HeaderList head="Free Online Resources" items={[
            { text: 'Dafyomi and Talmud material', link: '#onlineresources' },
            { text: 'See the Daf; Hear a Shiur', link: '#videoaudio' },
            { text: 'Hebrew fonts', link: '#hebrew' },
            { text: 'Free texts and databases', link: '#indexes' },
          ]}/>


          <HeaderList head="Puchasable Products" items={[
            { text: 'Texts in electronic format', link: '#products' },
            { text: 'Books relating to Talmud', link: '#books' },
            { text: 'Audio cassettes & CDs', link: '#tapes' },
            { text: 'Software', link: '#cds' },
          ]}/>
        </div>


        <i><h1>About Dafyomi</h1></i>

        <h3 style={{ color: 'red' }}>Dafyomi calendars, 13th cycle</h3>

        <ol>
          <li>
            <a href="index.htm" target="_parent">
              http://www.dafyomi.co.il
            </a>
            <br/>
            <b>D.A.F. presents 3 convenient Dafyomi calendars:</b>
            <ul>
              <li><a href="calendars/calendar.htm" target="_parent">D.A.F.'s 12th cycle Dafyomi calendar</a>- An easy to use calendar (for browsers supporting frames) for the entire twelfth Dafyomi cycle (2005-2012). Also available as a self-unzipping file in <a href="calendars/calendar12-txt.exe">text format</a>.
              </li>
              
              <li><a href="calendars/cal-short.htm">The short version</a>
                - D.A.F.'s list of when to begin each Maseches in the present Dafyomi cycle (12th cycle).
              </li>
              
              <li><a href="calendars/yomi/ymi-indx.htm">Other Yomi Calendars</a> - D.A.F. has prepared for you a convenient collection of <i>all </i>the Yomi, weekly, and monthly Torah-study programs that we could find. These include:
              </li>

              <li>
                <ul>
                  <li>
                    Yerushalmi Yomi
                  </li><li>
                    Mishnah Yomi
                  </li><li>
                    Halachah Yomi
                  </li><li>
                    Mishnah Berurah Yomi (two programs)
                  </li><li>
                    Shemiras ha'Lashon Yomi
                  </li><li>
                    Rambam Yomi
                  </li><li>
                    Nevi'im and Kesuvim weekly readings (Chok l'Yisrael)
                  </li><li>
                    The full spectrum of <strong><b>Mifal ha'Shas</b></strong> learning programs. (Mifal ha'Shas, founded by the Kloizenberger Rebbe ZT'L, offers stipends for the study of Shas and Shulchan Aruch based on the results of monthly written tests. In the U.S. they can be contacted at, Mifal Hashas, 4415 14th Ave., Brooklyn, N.Y. 11219, tel. (718) 435-3692 or (718) 436-7790. In Israel they can be reached at Rechov Rebb Akiva 108, P.O.B. 620, Bnei Brak, tel. (03) 579-7020.)
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <a href="http://www.bobnewell.net/nucleus/bnewell.php?itemid=216" target="new">http://www.bobnewell.net/nucleus/bnewell.php?itemid=216</a>
            <br/><b>Bob Newell's Dafyomi Bavli and Yerushalmi and Mishnah Yomis and Nach Yomi calculator</b>
            Bob's easy-to-use calculator will find for you the correct Daf-of-the-day in Talmud Bavli or Yerushalmi and even Mishnah and Tanach Yomi for any date in the past, present or future. (It even notifies you if you choose a date before the first cycle began.) Contact Bob at <a href="mailto:bobnewell@bobnewell.net?subject=Calendar information request, from link at www.dafyomi.co.il">bobnewell@bobnewell.net</a> if you have any questions.
          </li>       
          
          <li><a href="http://www.aish.com/jewish-calendar/?s=nb" target="new">
            http://www.aish.com/jewish-calendar/?s=nb</a>
            <br/><b>Aish HaTorah's Jewish Calendar</b>
            A Jewish calendar on Aish.com that provides times for Shabbos and Yom Tov across the globe.
          </li>
          
          <li><a href="http://www.dafyomi.us/daf-yomi-calendar/" target="new">
            http://www.dafyomi.us/daf-yomi-calendar/</a>
            <br/><b>Daf Yomi in Motion</b>
            Rabbi Moshe Simon's daily Dafyomi site includes an online, printable Dafyomi calendar.
          </li>                                            
          
          <li>
            <a href="http://www.pilotyid.com" target="new">
              http://www.pilotyid.com</a>
            <br/>PilotYid is Ari Engel's extensive list of links to Jewish software for the Palm Pilot. Included in their list are a number of Dafyomi calendars for the Palm Pilot.
          </li>
        </ol>


        
        <BackToTop/>



        
        <h3 style={{ color:'red'}}>What and where is "Dafyomi?"</h3>
        <ol>
          <li>
            <a href="dafyomi.htm">
              http://www.dafyomi.co.il/dafyomi.htm
            </a>
            <br/><b>D.A.F.'s "What is Dafyomi?"</b>
            <br/>Our Dafyomi Advancement Forum's short summary of what Dafyomi is all about.
            <br/>
          </li>
          
          <li>
            <a href="rmeirshapiro-yahrzeit.htm">
              http://www.dafyomi.co.il/rmeirshapiro-yahrzeit.htm
            </a>
            
            <br/><b>Yahrzeit of Ha'Gaon Rav Meir Shapiro, founder of the Dafyomi</b>
            <br/>Biographical information, Divrei Musar and Divrei Torah for the Yahrzeit of the great Gaon, who passed away abruptly at the age of 46 on 7 Cheshvan 5694 (1933).
            <br/>
          </li>
          
          <li>
            <a href="http://www.chareidi.org" target="new">
              http://www.chareidi.org
            </a>
            <br/> <b>Dei'ah veDibur (Rabbi Mordechai Plaut)</b>
            <br/>Rabbi Plaut's site includes numerous essays on the Haga'on Rav Meir Shapiro and the Dafyomi, such as
            <br/>
            <a href="http://www.chareidi.org/archives5765/kisiso/KSS65features.htm">An article about the history of Dafyomi</a>

            <br/>
            <a href="http://www.chareidi.org/archives5773/noach/fsrshpironch73.htm">A short biography of Rav Meir Shapiro</a>
            <br/>
            
            <a href="http://www.chareidi.org/archives5765/kisiso/KSS65features2.htm">Part I of an extensive 2-part biography of Rav Meir Shapiro</a>
            <br/>
            <a href="http://www.chareidi.org/archives5765/vayakhel/VYK65features.htm">Part II of the 2-part biography</a>
            <br/>
          </li>          
          
          <li>
            <a href="http://www.ohr.org.il/web/yomi.htm" target="new">
              http://www.ohr.org.il/web/yomi.htm
            </a>
            <br/> <b>Ohr Somayach</b>
            <br/> A brief article on the history of Dafyomi and Herman Wouk's reflections about learning the Daf.
          </li>
          
          <li>
            <a href="http://hadafhayomi.co.il/index.php?a=homepage/archive" target="new">
              http://hadafhayomi.co.il/index.php?a=homepage/archive
            </a>
            <br/><b>Meoros Hadaf's Israeli Dafyomi Shiur search engine</b>
            <br/>
            Over 1000(!) Dafyomi Shiurim in Israel, with times and places of Shiurim.
            <br/>
          </li>
          
          <li>
            <a href="mailto:dafyomi@agudathisrael.org?subject=Dafyomi Shiur Near Me, from link at www.dafyomi.co.il">
              dafyomi@agudathisrael.org
            </a>
            <br/><b>Agudath Israel Dafyomi Shiur</b>
            <br/>
            Feel free to contact Agudas Yisrael to find a Dafyomi Shiur in your area. Email or call 212-797-9000 ext. 266.
            <br/>
          </li>            
        </ol>
        


        
        <BackToTop/>




        <h3 style={{ color: 'red' }}>What is the Talmud?</h3>
        <ol>
          <li>
            <a href="http://www.acs.ucalgary.ca/~elsegal/TalmudPage.html" target="_blank">
              http://www.acs.ucalgary.ca/~elsegal/TalmudPage.html
            </a>
            <br/>
            <a href="http://www.acs.ucalgary.ca/~elsegal/TalmudMap/Samples.html" target="_blank">
              http://www.acs.ucalgary.ca/~elsegal/TalmudMap/Samples.html
            </a>
            <br/><b>Meet the Babylonian Talmud</b>
            <br/>Segal, who teaches Jewish history and Talmud at the University of Calgary, shows a typical page of the Talmud in which one form of text wraps around another, written in different scripts:
            <br/> Each paragraph of the main text of the Talmud contains references to the Bible and to rabbinic interpretations of the law; the framing commentary, which also appears on each page, contains references to legal codes, related citations and conflicting opinions. Through a click-on sample page of the Talmud, Segal introduces the reader to the many different texts that make up the typical page of Talmud. For people with frame browsers, he provides interlinked samples of Talmudic sources - really neat.
            <br/>
            
            Another short article by Segal,&nbsp;
            <a href="http://www.acs.ucalgary.ca/~elsegal/Shokel/890419_Siyyum.html" target="_blank">
              http://www.acs.ucalgary.ca/~elsegal/Shokel/890419_Siyyum.html
            </a> discusses the value of Dafyomi study.
            <br/><br/>
            
          </li><li><a href="http://www.shemayisrael.co.il/gemara.htm" target="_blank">
            http://www.shemayisrael.co.il/gemara.htm
          </a>
          <br/><b>Advice to the beginner in Talmud from accomplished Torah sages</b>
          <br/>Shemayisrael has posted translated excerpts from various works written by well-known Talmudists, in which the authors offer their advice to the beginner in Talmud-study.<br/>Included are excerpts from "Darchei ha'Talmud" (Hagaon Rav Yitzchak Kampanton, ~1700), a letter from the Chazon Ish (Hagaon Rav Avraham Yeshayah Karelitz, d. ~1964), and a piece of advice from Rav Chaim Pinchas Scheinberg, shlita.
          <br/><br/>
          
          </li><li><a href="http://www.jewishhistory.com/PRINTINGTHETALMUD/home.html" target="new">
            http://www.jewishhistory.com/PRINTINGTHETALMUD/home.html</a>
            <br/><b>History of the Printing and Study of the Talmud</b>
            <br/>Y.U. Museum's online exhibit provides a broad selection of exhibits with adjustable photos of historic editions of the Talmud and Talmud related material, plus essays and videos relating to the Talmud and Talmud study.<br/>
            Click the tabs on top to read, for example, Haym Soloveichik's essay on why Rashi and Tosfos were chosen to be included in the printed editions of the Talmud, and to watch videos of scholars delivering lectures on the Talmud in Ponovezh Yeshiva, Lithuania.
            <br/><br/>
            
          </li><li>
            <a href="https://www.firstthings.com/article/1998/08/003-discovering-the-talmud" target="new">
              https://www.firstthings.com/article/1998/08/003-discovering-the-talmud</a>
            <br/> <b>Eric Chevlen's introduction to the Talmud</b>
            <br/> An introductory essay to the subjects of Talmud and Dafyomi. The article assumes virtually no prior knowledge of Jewish studies.
            <br/><br/>

          </li>
        </ol>
        



        
        <BackToTop/>



        
        <h3 style={{ color: 'red' }}>Siyum clips</h3>
        
        <ol>  
          <li>
            <a href="http://www.dafyomi.co.il/siyum/kollelsiyum2-highlights.htm" target="_blank">
              http://www.dafyomi.co.il/siyum/kollelsiyum2-highlights.htm</a>
            <br/>
            <b>Kollel Iyun Hadaf's 2nd Siyum Celebration</b><br/>
            Highlights from Kollel Iyun Hadaf's 2nd "Grand Siyum" event, celebrating the completion of their second seven-1/3-year cycle for producing the study material of the Dafyomi Advancement Forum. Find here a summary of the event, photos, and videos of speakers including Rabbis Berel Eichenstein, Shalom Perel, and Mordecai Kornfeld, 
            <br/><br/>

          </li>
          
          <li>
            <a href="http://www.dafyomi.co.il/orders/order-siyum-cd.htm" target="_blank">
              http://www.dafyomi.co.il/orders/order-siyum-cd.htm</a>
            <br/>
            <b>11th Siyum HaShas in Yerushalayim</b><br/>
            Highlights of the English-language Siyum HaShas of the 11th cycle of Daf Yomi
            that took place in Yerushalayim on 21 Adar I 5765 (March 2, 2005).
            <br/><br/>
          </li>
        </ol>


        

        
        <BackToTop/>


        <hr/>



        <i><h1><a name="onlineresources">Online Resources</a></h1></i><br/>

        <h3>Talmud study programs<br/><small>(Dafyomi study material available through email or the Web)</small></h3>

        <ol>
          <li>
            <a href="subscribe.htm">
              http://www.dafyomi.co.il/subscribe.htm</a>
            <br/><b>The Dafyomi Advancement Forum</b>
            <br/>Join our free, informative mailing lists! With the Dafyomi Advancement Forum's free mailing lists you will be constantly updated with information on the current Daf. No matter what your level of learning is, you will find study material molded to your level in at least one of these mailngs. The mailings, which are produced by Kollel Iyun Hadaf of Yerushalayim, currently are divided into seven English mailings (Daf-Insights; Daf-Background; Daf-Review; Daf-Discuss; Daf-Points; Daf-Quiz; Daf-Halachah; Daf-RevachL'Daf; Daf-Tosfos) and three Hebrew ones (Daf-HebrewReview; Daf-HebrewCharts; Daf-Chidonim)
            <br/>Archives of all of the above can be accessed through our own Website, <a href="http://www.dafyomi.co.il/index.htm" target="_parent">www.dafyomi.co.il</a>, or from our backup on the <a href="http://dafyomi.shemayisrael.co.il"> Shemayisrael server</a>.
            <a name="jewishchicago">&nbsp<br/><br/></a>


          </li><li>
            <a href="http://www.shemayisrael.com/dafyomi/lameddaat" target="new">
              http://www.shemayisrael.com/dafyomi/lameddaat</a>
            <br/><b>Dafyomi Review tests in Hebrew (questions only)</b>
            <br/>Lamed Da'at provides a weekly list of questions on Gemara and Rashi in Hebrew for reviewing the Daf. (The questions are scanned in; no Hebrew fonts are required.) You can also find in their archives tests on past Masechtos, since the beginning of Berachos.
            <br/><br/>

          </li><li><a name="YU"></a>
            <a href="http://www.yutorah.org/daf.cfm" target="new">
              http://www.yutorah.org/daf.cfm</a>
            <br/><b>Yeshiva University's Dafyomi learner's website</b>
            <br/>YU offers a wealth of shiurim for the Dafyomi learner on its site. Besides a picture of the Daf (from <a href="http://www.e-daf.com" target="new">e-daf</a>), they offer typed shiurim on many Dapim. At present, the available typed shiurim include a plethora of Hebrew shiurim by Rabbi Eli Baruch Shulman, a Bochen at RIETS and rabbi of the Young Israel of Midwood in Brooklyn, NY, as well as a number of English shiurim by various lecturers. The site also offers a recording of Rabbi Shalom Rosner's Daf Yomi Shiur (which is uploaded immediately after the day's shiur has been given).
  <br/><br/>
    
          </li><li>
          <a href="http://www.naaleh.com" target="new">
            http://www.naaleh.com/</a>
          <br/><b>Na'aleh</b>
          <br/>This excellent website offers hundreds of free classes on the Parsha, Talmud, and Jewish ethics with 10 new classes added each week in streaming video. Also available are Ipod and MP3 downloads as well as discussion boards.
          <br/><br/>


          </li><li>
          <a href="http://www.tzurba.com/" target="new">
            http://www.tzurba.com/</a>
          <br/><b>Tzurba me'Rabanan</b>
          <br/>An ambitious project with lots of Shiurim and source pages on Halachic and Talmuduc subjects. Tzurba me'Rabanan offers weekly Shiurim to introduce the layman to the Rabbinic study of Halachah. The Shiurim, which are accompanied by study sheets, are given in many locations in Eretz Yisrael.
          <br/><br/>


          </li><li>
          <a href="http://hadranalach.com/index.php" target="new">
            http://hadranalach.com/index.php</a>
          <br/><b>Hadran Alach site</b>
          <br/>This wonderful site, by Y.S., creator of the dafyomireview site, provides a convenient way to manage the distribution of Dapim/Mishnayos/Tehillim for making a group Siyum. With options to create private (password protected) or public lists for Siyumim, there couldn't be a more convenient way to organize a Siyum!
          <br/><br/>



          </li><li>
          <a href="http://www.2mishnasaday.com" target="new">
            http://www.2mishnasaday.com</a>
          <br/><b>Two Mishnayos a Day</b>
          <br/>Rabbi Shloimy Zelcer will mail you two Mishnayos per day, every single day, until you finish Shas. Subscribe, or just browse through their resources (translations of each Mishnah, and recorded explications of the Mishnah by Rabbi Zelcer and Dr. Michael Sokolov). To date, the site has until the end of Zera'im (Tamuz 5773).<br/>
          Site includes a similar program for studying Kitzur Shulchan Aruch in two years.
          <br/><br/>


          </li><li>
          <a href="http://www.mishnaportal.co.za/" target="new">
            http://www.mishnaportal.co.za/</a>
          <br/><b>Mishna Portal</b>
          <br/>Mishnah Yomis MP3 Shiurim, recorded during the learning of the Mishnah Yomis group of Ohr Somayach Savoy in Johannesburg, South Africa.
          <br/><br/>


          </li><li>
          <a href="http://www.emishnah.com/sedarim.html" target="new">
            http://www.emishnah.com/sedarim.html</a>
          <br/><b>eMishnah.com </b>
          <br/>Browse through the text of the Mishnayos, in the original Hebrew with a smooth English translation (plus Rav Ovadiah of Bartenura's commentary), Perek by Perek. Pages are going up according to the current Mishnah Yomis cycle; pages have been prepared up to and including the current Mishah Yomis.
          <br/><br/>



          </li><li>
          <a href="http://www.mp3shiur.com" target="new">
            http://www.mp3shiur.com/</a>
          <br/><b>MP3 Downloadable Shiurim</b>
          <br/>An online resource for free, downloadable MP3 Shiurim by renowned Talmidei Chachamim. Topics include Gemara, Halachah, Tanach, and Hashkafah. Shiurim on seven Masechtos are currently available.
          <br/><br/>

          </li><li>
          <a href="http://www.dafhayomi.fr" target="new">
            www.dafhayomi.fr</a>
          <br/><b>French Dafyomi site of Yeshiva Ohavei Torah</b>
          <br/>Launched in 2014, this website under the direction of ha'Rav Israel Abib provides Dafyomi shiurim in French both live and archived. The site also offers a free Daf-summary newsletter in French as well as a Halachah Yomi podcast. Check out their iPhone and Android apps and audio iTunes podcasts.
          <br/><br/>

          </li><li>
          <a href="http://www.evrey.com/">
            http://www.evrey.com/tradition/talm/#bava</a>
          <br/><b>Aish Hatorah's Russian language Dafyomi site</b>
          <br/>If you speak Russian, this is a terrific site which contains much more than up to date postings on the daily Daf. So far, its archives include about a dozen Masechtos, and the list is growing.
          <br/><br/>

          </li><li><br/>
          <a href="http://www.gemaraberura.com/" target="new">
            http://www.gemaraberura.com/</a>
          <br/><b>Gemara Berura site</b>

          The Gemara Berura project, created by Mati Monheit of Ra'anana, presents a novel way to teach Gemara: Each statement on the page is classified and given a symbol of a particular shape and color to denote its class (question, answer, Mishnah, Beraisa, etc.). Concise flow charts, based on the same system, are then used to summarize the Daf. Samples of their work on Dafim recently learned in the Dafyomi program are available at <a href="http://www.gemaraberura.com/hdafyomi.htm" target="new">their site</a>. They offer CD's on the entire Shas for 590 NIS, or single Masechtos for less, from their <a href="http://www.gemaraberura.com/hsales.htm" target="new">sales page</a> or via email to <a href="mailto:learn@gemaraberura.com?subject=Gemara Berura (from DAF link)">learn@gemaraberura.com</a> or by phone at 972 2 653-7440.
          <br/><br/>


          </li><li>
          <a href="http://dafnotes.com/" target="new">
            http://dafnotes.com/</a>
          <br/><b>Daf Notes</b>
          <br/> <a href="http://dafnotes.com/wp-content/uploads/2015/07/avrohom.jpg">Rabbi Avrohom Adler</a> of Beachwood, Ohio, provides an English Translation of the Daf, along with some brief Insights and a daily parable (Mashal). Available also via email; subscribe from his site. (Material posted on the site is from the beginning of the 13th cycle until the current Maseches.)<br/><br/>

          </li><li>
          <a href="http://www.ohr.org.il/web/index/yomiidx.htm" target="new">
            http://www.ohr.org.il/web/index/yomiidx.htm</a>
          <br/><b>Ohr Somayach</b>
          <br/>Subscribe to Ohr Somayach’s "Weekly Daf Insights," one or two comments per week on the Dafyomi (part of their popular weekly "Ohrnet" publication). This is the link to their archive site.
          <br/><br/>

          </li><li>
          <a href="http://aishdas.org/" target="new">
            http://aishdas.org/</a>
          <br/><b>Aishdas</b>
          <br/>Aishdas' MMG"H Learning Program, includes among other things learning one amud a day on the net. They have a mailing list to discuss issues and problems that arise.
          <br/><br/>

          </li><li>
          <a href="http://www.yeshiva.org.il" target="new">
            http://www.yeshiva.org.il</a>
          <br/><b>Yeshivat Beit El website</b>
          <br/>The extensive Yeshivat Beit El website includes many video, MP3 and text-based Shiurim on the Talmud in Hebrew. You can try their <a href="http://www.yeshiva.org.il/test/test.asp?cat=4">multiple choice quizzes</a> on most of Shas, or their wide variety of <a href="http://www.yeshiva.org.il/midrash/Hmidrash.asp?cat=9">in-depth lectures</a> from a broad selection of Talmidei Chachamim.
          <br/><br/>

          </li><li>
          <a href="http://www.vbm-torah.org/webarch.htm" target="new">
            http://www.vbm-torah.org/webarch.htm</a>
          <br/><b>Yeshivat Har Etzion web archives</b>
          <br/>The Yeshivat Har Etzion (YHE) website. YHE offers a number of online courses <a href="http://www.vbm-torah.org/courses.htm" target="new">(http://www.vbm-torah.org/courses.htm)</a>on various Masechtos of the Talmud. Presently, the Talmud courses in their archives include a number of Shi'urim on the beginning of Pesachim and on Kidushin.
          <br/><br/>

          </li><li>
          <a href="http://www.geocities.com/yeshol" target="new">
            http://www.geocities.com/yeshol</a>
          <br/><b>Yeshayahu HaKohen Hollander's Talmud site</b>
          <br/>Yeshayahu HaKohen Hollander's "New, Easy-to-Read Talmud": A new way to read the DAF -- the Talmud paragraphed, punctuated, clearly printed dialogues, with Rashi's commentary embedded in the text. Rashi's right on the spot -- the Gemara reads like a book. Currently available Masechtos: Gitin, Shevuos, Bava Basra, Horayos.
          <br/><br/>

          </li><li>
          <a href="http://www.gemaraboards.forumotion.com" target="new">
            http://www.gemaraboards.forumotion.com</a>
          <br/><b>Gemara Study Public Bulletin Board</b>
          <br/>A public forum for posting questions about any page in Shas, created and modified by Michoel Reach of Baltimore.
          <br/><br/>


          </li><li>
          <a href="http://dafyomireview.com" target="new">
            http://dafyomireview.com</a>
          <br/><b>Customized Talmud Review Programs</b>
          <br/>Rav Yosef Sebag's site is a powerful resource, presenting a compendium of review programs and tools for using them to design customized programs for one's learning, whether it be Dafyomi, Amudyomi, or some other system. An outstanding Chazarah resource.<br/><br/>

          </li><li>
          <a href="http://www.shaschabura.org" target="new">
            http://www.shaschabura.org</a>
          <br/><b>Rabbi Sender Dolgin's "Chazaras Hashas" Review System</b>
          <br/>Rav Sender Dolgin of Lakewood, N.J., has developed a revolutionary method of reviewing and mastering all of Shas (or any other study you prefer to concentrate on). His program has experienced tremendous success and has been written up in numerous media. Hundreds of people have completed all of Shas using his method. At the heart of the method lies the personalized review calendar, designed such that one reviews every day what was learned 1 day ago, 1 week ago, 1 month ago, and 1 year ago.
          <br/>For more information and to prepare a personal review calendar for yourself, click on the link above or write Abe Jaffe <a href="mailto:abe@jaffegroupmarketing.com">abe@jaffegroupmarketing.com</a> or call Shas Chabura at 1.732.730.9496 <br/><br/>


          </li><li><a href="http://www.rabbileff.net/shiurim/amudyomi/index.htm" target="new">
            http://www.rabbileff.net/shiurim/amudyomi/index.htm</a>
          <br/><b>Rabbi Zev Leff's Amud Yomi page</b>
          <br/>Archives include tapes on the entire Maseches Berachos.
          <br/><br/>


          </li><li><a href="http://www.DafAWeek.com" target="new">
            http://www.DafAWeek.com</a>
          <br/><b>Rabbi Shlomo Abrahams' Daf-A-Week Website</b>
          <br/> Daf-A-Week is a program to study one page (two sides) of Gemara per week. The program started at the beginning of the twelfth cycle of Daf Yomi. The goal is to learn one daf per week with extensive time for review. The first cycle will end together with the eighteenth cycle of the Daf Yomi.  This website lists the weekly learning and review schedule as well as links relating to Daf-A-Week and Talmud learning. (On Wednesday, May 17th, 2006 they will be starting Maseches Shabbos.)
          <br/><br/>

          </li><li><a href="http://www.jbuff.com/daf_yomi_halacha.htm" target="new">
            http://www.jbuff.com/daf_yomi_halacha.htm</a>
          <br/><b>Daf Yomi Halacha</b>
          <br/>Daf Yomi Halacha, prepared by Rabbi Jay Spero who presently resides in Cleveland Ohio, is meant to provide an Halachic overview of the Daf based on the rulings of the Shulchan Aruch and Rambam, as referenced in the Ein Mishpat. Rabbi Spero can be contacted at jsohr1@juno.com .
          <br/><br/>


          </li><li><a href="http://www.dafdigest.org" target="new">
            http://www.dafdigest.org</a>
          <br/><b>Daf Yomi Digest</b>
          <br/>Daf Yomi Digest is published by The Chicago Center for Torah and Chesed, under the leadership of HaRav Yehoshua Eichenstein, shlit'a. The Daf Digest is a one-page, "Reader's Digest" style electronic mailing, which provides a brief overview of the Daf, a Halachic highlight, an insight, a story, a few short review questions.
          <br/><br/>

          </li><li><a href="http://www.bonayich.com" target="new">
            http://www.bonayich.com</a>
          <br/><b>Bonayich</b>
          <br/>Bonayich specializes in the learning and teaching of Jewish Studies, especially the Oral
          Tradition, including Mishnah and related texts, Talmudim, Halachah and Aggadah. Bonayich
          offers a full range of educational materials for the study and teaching of Oral Tradition.
          Custom-made materials may also be ordered for special groups and needs.
          <br/><br/>

          </li><li><a href="http://www.tosfos.com/" target="new">
            http://www.Tosfos.com</a>
          <br/><b>Tosfos explained in text and video formats</b>
          <br/>Website with videos and text files by Rabbi Yacov Schonfeld elucidating Tosfos on parts of several Masechtos. (Videos: Kesuvos and Bava Kama; Text: Berachos, Shabbos, Eruvin, Yevamos, Kesuvos, Gitin, Bava Kama, Bama Metzia.)
          <br/><br/>

          </li><li><a href="http://www.howtolearngemara.com" target="new">
            http://www.howtolearngemara.com</a>
          <br/><b>Basics of Talmudic Study and Analysis</b>
          <br/>A helpful place to begin if you want to learn the intricacies of Talmudic analysis. Prepared by Avihu Aboud of Yeshivas Bircas Hatorah in the Old City Yerushalayim.
          <br/><br/>

          </li><li><a href="http://webyeshiva.org/" target="new">
            http://webyeshiva.org/</a>
          <br/><b>Rabbi Chaim Brovender's Web Yeshiva</b>
          <br/>WebYeshiva, Rabbi Chaim Brovender's innovative new enterprise, opens the doors of the Yeshiva and Midrasha experience to anyone with an internet connection.  Truly unique in the Torah World, WebYeshiva recreates the intellectual and social atmosphere of a real Yeshiva (with a focus on the student's growth in learning abilities).  Using cutting edge video conferencing technology, WebYeshiva offers many powerful features that make it a unique learning environment which promises real growth in Torah study for the experienced student or the novice.
          <br/><br/>

          </li><li><a href="http://mastertorah.com/" target="new">
            http:/mastertorah.com/</a>
          <br/><b>Rabbi Meir Pogrow's popular MasterTorah</b>
          <br/>Audio Shi'urim on Gemara and Mishnayos are available online. Rabbi Pogrow's lucid and comprehensive explanation features introductions to every Daf and Sugya. His Amud Yomi Shi'urim cover 8 complete Masechtos of the Gemara (with more on the way), and his "Shas Review" Shi'urim now cover about half of Shas. His comprehensive Shi'urim on Shas Mishnayos cover all of Shas (except Avos), with a number of "Mishnah Bekiyus" Shi'urim as well. Unique to Rabbi Pogrow's Shi'urim is an extensive program of review and tests to facilitate mastery of Shas.
          <br/><br/>
          </li>
        </ol>




        <BackToTop/>

        <h3>See and hear the Daf online</h3>
        <ol>


            <li>
              <a href="http://www.e-daf.com" target="new">
                http://www.e-daf.com
              </a>
              <br/><b>E-daf's online Daf</b>
              <br/>View the Daf online, with e-daf's clear and easy-to-access .gif's of the Daf. Conceived by Rabbi Dovid Kraus and created by Josh Itzkowitz. Archives now include the entire text of the Babylonian Talmud; users can download or print out the desired page for free, enabling them to study at their convenience even when they travel. In addition, the site contains links to audio English-language Talmud classes archived on the web, which can be listened to online at no cost.
              <br/><br/>
              
            </li><li>
              <a href="http://www.dafyomi.org/index.php" target="new">
                http://www.dafyomi.org/index.php
              </a>
              <br/><b>Rabbi Grossman's free online Dafyomi Shiurim</b>
              <br/>
              David Hirschorn (
              <a href="mailto:hirschorn.david@mgh.harvard.edu">hirschorn.david@mgh.harvard.edu</a>
              ) has kindly made available online the entire series of tapes of Rabbi Grossman''s Dafyomi shiurim. Rabbi Grossman, presently teaching in Yeshiva Gedola of Los Angeles, recorded the Shiurim during the 11th Dafyomi cycle. The Shiurim are available in MP3 format.<br/>
    Jacob Shalev of the Diasoft Corporation generously gave of his time and talent to write a&nbsp;
    <a href="http://www.dafyomi.org/masechtadownloader.php" target="_blank">Masechta Downloader</a> for these Shiurim, which makes it possible to download an entire Masechta at a time.
    <br/><br/>
    
            </li><li>
              <a href="http://www.hadafhayomi.co.il/" target="new">
                http://www.hadafhayomi.co.il/
              </a>
              <br/><b>Online video Dafyomi Shiur site of "Meoros Hadaf Hayomi"</b>
              <br/>This multi-language streaming video archive of Dafyomi Shiurim (in RealVideo format; links for player available on site) is updated daily with video recordings of Dafyomi Shiurim. The <b>English</b> Shiur is currently given by Rabbi Mayer Bar of Meoros Hadaf Hayomi.  English Shiur Archives are available from Zevachim (by R. Klatzko). The <b>Hebrew</b> Shiur is given by a lecturer from the Sochotchov Beis Midrash, and archives begin from Sanhedrin. The <b>French</b> shiur is current since the beginning of this cycle, in addition to Nidah and most of Seder Nezikin.  The <b>Yiddish</b> Shiur is given by Rabbi Yoseph Nachum Stram and is current since Berachos.
              <br/><br/>


            </li><li><a href="http://www.ou-dafyomi.org" target="new">
              http://www.ou-dafyomi.org
            </a>
            <br/><b>OU's Dafyomi page</b>
            <br/>Very clear and easy to understand English audio Dafyomi shiurim uploaded daily. Shiurim are delivered by Rabbi Moshe Elefant of the OU.
            <br/><br/>

            </li><li><a href="http://www.dafyomi.us/" target="new">
              http://www.dafyomi.us/
            </a>
            <br/><b>Daf Yomi in Motion</b>
            <br/>Rabbi Moshe Simon's daily Dafyomi Shiur (starting from Megilah, of 13th cycle). Make the best use of your time in transit with the help of Rabbi Simon's calm and clear Daf Yomi podcast. Site includes an online, printable Dafyomi calendar.
            <br/><br/>
            
            </li><li><a href="http://www.sinai.org.il" target="new">
              http://www.sinai.org.il
            </a>
            <br/><b>Sinai (Hebrew)</b>
            <br/>10-20 minute audio recordings by Rav Uri Brilliant, providing a review of the Daf in Hebrew. Includes summary notes as well as flow diagrams for the Daf.
            <br/><br/>
            
            </li><li>
              <a href="http://www.yutorah.org/daf.cfm" target="new">
                http://www.yutorah.org/daf.cfm
              </a>
              <br/><b>Yeshiva University's Dafyomi learner's website</b>
              <br/>
              As mentioned <a href="#YU">above</a>, YU offers a wealth of shiurim for the Dafyomi learner on its site. Besides a picture of the Daf (from <a href="http://www.e-daf.com" target="new">e-daf</a>), they offer typed shiurim and a recording of Rabbi Shalom Rosner's Daf Yomi Shiur (which is uploaded immediately after the day's shiur has been given).

                                                                                                                                                                                                                                                                                                                                                                    <br/><br/>

            </li><li>
              <a href="http://www.dailygemara.com" target="new">http://www.dailygemara.com</a>
              <br/><b>Daf HaYomi in English by Rabbi Eli Mansour</b>
              <br/>Dafyomi in English, in Realaudio format, by Rabbi Eli Mansour of Brooklyn, New York. The Shi'urim are orated and explained in Sephardic tradition. This website also displays the Daf so you can view it while listening to the Shi'ur.
              <br/><br/>
              

            </li><li>
              <a href="http://www.kolavrohom.com" target="new">
                http://www.kolavrohom.com
              </a>
              <br/><b>Daf HaYomi in Yiddish by HaRav Avrohom Karp ZT"L</b>
              <br/>Dafyomi in Yiddish, in Realaudio format, by ha'Rav Avrohom Karp of blessed memory, of the Lubavitcher Yeshiva in Montreal, who delivered the Shi'urim in the Lubavitcher shul of Montreal. (Archives are not complete, but the current Dafim are available.)
              <br/><br/>

              
            </li><li>
              <a href="http://www.bostonrebbe.org/video-shiurim-with-text/daf-yomi-yerushalmi" target="new">
                http://www.bostonrebbe.org/video-shiurim-with-text/daf-yomi-yerushalmi
              </a>
              <br/><b>Dafyomi Bavli and Yerushalmi by the Bostoner Rebbe of Yerushalayim, HaRav Mayer Horowitz shlit'a</b>
              <br/>Dafyomi Bavli, and the matching section of Yerushalmi, accompanied by a video showing a place-pointer advancing through the Hebrew Machon ha'Me'or edition of the Talmudim.
              <br/><br/>
              
            </li><li>
              <a href="http://dafhachaim.org/" target="new">
                http://dafhachaim.org/
              </a>
              <br/><b>Daf Hachaim</b>
              <br/>Daf Hachaim offers a beautifully arranged site, including for every Daf a 1-minute intro to the Daf, Full Shiur, and Brief Review of the Shiur (all by Rabbi Shlomie Schwartzberg) - plus lots of other audio-visual cues and graphics. Replete with charts, illustrations and pdf's, it makes a great learning resource. (Archives start from Berachos, 13th cycle.)<br/>
              The site includes a great international Dafyomi Shiur locator, here <a href="http://dafhachaim.org/daf-locator/">http://dafhachaim.org/daf-locator/</a>.
              <br/><br/>

            </li><li>
              <a href="http://livedaf.net/" target="new">
                http://livedaf.net/
              </a>
              <br/><b>LiveDaf Video Shiur</b>
              <br/>LiveDaf (Rabbi Kessler) is sponsored by Kollel Toronto. It includes with Shiurim on the Daf, and shorter Shiurim with insights on the Daf. The Shiurim are aired in high quality video and feature on-screen diagrams which display a short summary at the end of each section. All videos are iPhone and iPad compatible. In addition LiveDaf shiurim can be downloaded free of charge with options for audio (mp3) video (mp4) and the daily diagrams (jpeg). Questions may be submitted as well.
              <br/><br/>

            </li><li>
              <a href="http://www.dafyomiyicc.org/" target="new">
                http://www.dafyomiyicc.org/
              </a>
              <br/><b>Daf Yomi Page of Young Israel Of Century City</b>
              <br/>The Daf Yomi Page of Young Israel Of Century City featuring the Daf Yomi Shiur given by Rabbi Yitzchak Etshalom in a clear concise fashion.
              <br/><br/>

              
            </li><li>
              <a href="http://www.yerushalmionline.org" target="new">
                http://www.yerushalmionline.org
              </a>
              <br/>
              <b>Talmud Yerushalmi</b>
              <br/>Audio tapes of shiurim on the entire Talmud Yerushalmi by Rabbi Yosef Gavriel Bechhofer of Chicago. Rabbi Bechhofer has completed a set of tapes on the entire Yerushalmi. See our <a href="calendars/yomi/ymi-indx.htm" target="new">Yomi Calendars page</a> for the Yerushalmi Yomi calendar.

              <br/>

            </li><li>
              <a href="http://englishtorahtapes.com/talmud_yerushalmi.htm">http://englishtorahtapes.com/talmud_yerushalmi.htm</a>
              <br/><b>Talmud Yerushalmi Shiurim</b>
              <br/>Shiurim in Talmud Yerushalmi by Rabbi Zalman Manela of Los Angeles. He also has over 3,000 shiurim online on many topics.
              <br/><br/>

            </li><li>
              <a href="http://www.yadavraham.org/Default.aspx?tabid=70">http://yadavraham.org</a>
              <br/><b>Dafyomi Video Lectures</b>
              <br/>Yad Avraham is a Torah learning institute located in the heart of New York City. Classes in Chumash, Halacha, Hashkofa, Gemara, and general topics are well attended by hundreds of business people, students and professionals from all walks of life. This page contains their online shiurim on the Dafyomi, as well as other topics.
              <br/><br/>

            </li><li>
              <a href="http://www.myshiur.net">http://myshiur.net</a>
              <br/><b>Dafyomi Hebrew Audio</b>
              <br/>Dafyomi Shiurim given by Rabbi Yehuda Eliyahu, Rav of the TOV synagogue of Staten Island and Rosh Kollel of Shaare Tzion, Brooklyn, NY. Shiurim are available for download on most of Shas.
              <br/><br/>

            </li><li>
              <a href="http://www.kipa.co.il/daf_yomi">http://www.kipa.co.il/daf_yomi</a>
              <br/><b>Steinsaltz Daf Yomi</b>
              <br/>The Kipa website offers learners of the Daf Yomi a daily viewing of Rav Adin Steinsaltz's version of the Daf. The site contains all the Gemara pages translated to Hebrew, a short commentary, illustrations, and more.
              <br/><br/>

              
            </li><li>
              <a href="http://http://www.yutorah.org/landingPages/404Handler.cfm?url=rabbi_mordechai_pinchas_teitz">http://www.yutorah.org/landingPages/404Handler.cfm?url=rabbi_mordechai_pinchas_teitz</a>
              <br/><b>Daf ha'Shavu'a</b>
              <br/>Daf Hashovua Shiurim in Yiddish by HaRav Mordechai Pinchas Teitz ZT"L are available here on Masechtos Berachos, Rosh Hashanah, Beitzah, Chagigah, and Sukkah. Tapes are also available on Masechtos Makos, Moed Katan, and Taanis. For additional information, please contact <a href="mailto:yrblau@verizon.net?subject=Daf Hashovua in Yiddish, from link at www.dafyomi.co.il">
                yrblau@verizon.net</a> or call Rivkah Teitz Blau at 212-568-1129.
              <br/><br/>

            </li><li>
              <a href="http://thehalachacenter.org/cm_resources/bshvd_on_daf_yomi.php">http://thehalachacenter.org/cm_resources/bshvd_on_daf_yomi.php</a>
              <br/><b>Bais Havaad of Lakewood</b>
              <br/>Bais Havaad has recently produced a very innovative new series of Choshen Mishpat shiurim on the Daf. The series features a 15-20 minute Choshen Mishpat shiur on how the principles discussed in the Daf are applied in today's complex financial world. Shiurim are given by many recognized experts in Choshen Mishpat.
              <br/><br/>

            </li><li>
              <a href="http://congalhadaf.tripod.com/index.html">http://congalhadaf.tripod.com/index.html</a>
              <br/><b>Al HaDaf- the Daf Yomi Companion</b>
              <br/>A publication designed to enhance Talmud study, Al HaDaf has material available by subscription for both beginners and advanced students. It also has material available for a shorter daily Limud program.
              <br/><br/>

            </li><li>
              <a href="http://torahdownloads.com/c-10-talmud.html?filter_speaker=1">http://torahdownloads.com/c-10-talmud.html?filter_speaker=1</a>
              <br/><b>Torah Downloads</b>
              <br/>A project of Yad Yehuda, this site offers audio Shiurim on the Daf by a wide variety of Talmidei Chachamim, in addition to a wealth of Shiurim on many Torah topics.
              <br/><br/>


            </li><li>
              <a href="http://www.sinai.org.il/">http://www.sinai.org.il</a>
              <br/><b>Sinai</b>
              <br/>This website offers very clear ten-minute long Shiurim of the Daf in Hebrew.
              <br/><br/>
            </li>
          </ol>




          <BackToTop />





          
          <h3> Talmud and Dafyomi databases & free texts</h3>

          <ol>

            <li>
              <a name="MTR"></a>
              <a href="http://www.mechon-mamre.org/mtrpromo.htm" target="new">
                http://www.mechon-mamre.org/mtrpromo.htm
              </a>
              <br/><b>MTR Download site</b><br/>
              MTR is a Win95-compliant DOS freeware program that is simply amazing. It contains the full text of Mishneh Torah of Rambam, Torah Nevi'im and Kesuvim (both actual spelling and "Kesiv Malei"), Targum Onkelos on the Chumash, Mishnah, Tosefta, Yerushalmi, and Bavli. Full details can be found in the mtrinfo.txt file on the Simtel site listed above. As of today (Tamuz 5759) they're up to version "e", but this will change soon since the program is updated twice yearly.
              
              <br/>

              They are using Yemenite manuscripts of Rambam and are doing their best to correct errors that have crept into the texts of Mishneh Torah and Shas...so much so that there are far fewer errors in this program than there are in the expensive CD-ROM packages commercially available. It comes with either Hebrew or English interfaces, it's compact, fast, searchable, Windows clipboard compliant and configurable.

              <br/>

              You can download the entire collection in compressed form from the site listed above or the msdos/torah/ directory of any other Simtel site (there are over 80 Simtel mirror sites). Fully expanded, the files use approximately 28M of harddisk space.
              <br/><br/>


            </li><li>
              <a href="http://kodesh.snunit.k12.il/" target="new">
                http://kodesh.snunit.k12.il/
              </a>
              <br/><b>Snunit browse site</b>
              <br/>Full Hebrew text of the Tanach, Talmud Bavli, and Talmud Yerushalmi is available at this site (Snunit at the Hebrew University) for Web browsing, including hypertext links between verses in Tanach and any mention of them in the Talmud and v.v.! These texts, along with Mishneh Torah, Mishnah, and Tosefta are available for downloading along with DOS browsing software in the <a href="#MTR">MTR freeware package</a> mentioned above.
              <br/><br/>


            </li><li>
              <a href="http://www.webshas.org" target="new">
                http://www.webshas.org
              </a>
              <br/><b>Webshas</b>
              <br/> Webshas is an ambitious index to the Talmud, prepared by Rabbi Mordechai Torczyner, rabbi of Congregation Ohave Shalom, Young Israel of Pawtucket, Rhode Island. The index is easy to use, and is arranged both alphabetically and hierarchially, according to subject. Pages of the Talmud indexed so far are listed at
              <a href="http://www.webshas.org/about.htm" target="new">
                http://www.webshas.org/about.htm
              </a>, and the main index resides at <a href="http://www.webshas.org/main.htm" target="new">
                http://www.webshas.org/main.htm
              </a>. Rabbi Torczyner himself can be reached at <a href="mailto:Rabbi Torczyner <rabbi@att.net>">rabbi@att.net</a>
              <br/><br/>

            </li><li>
              <a href="http://web.nli.org.il/sites/NLI/Hebrew/collections/jewish-collection/Talmud/Pages/default.aspx" target="new">
                http://web.nli.org.il/sites/NLI/Hebrew/collections/jewish-collection/Talmud/Pages/default.aspx
              </a>
              <br/><b>The National Library of Israel Treasury of Talmudic Manuscripts</b>
              <br/>An online treasury of manuscripts of the Mishnah and Talmud (courtesy of the National Library of Israel, David and Fela Shapell Family Digitization Project) This project brings together images of major manuscripts of the Talmud (as well as the Kaufmann manuscript of the Mishnah) from libraries throughout the world. The site enables one to view and read the actual manuscripts as they were written. The manuscripts are indexed to enable access by standard citation (Tractate, Daf and Amud for the Talmud Bavli, and Tractate, chapter and Mishnah for the Mishnah). 
              <br/><br/>

            </li><li>
              <a href="https://bavli.genizah.org/Global/homepage?lan=heb&isPartial=False&isDoubleLogin=True&TractateID=0&DafID=0">
                https://bavli.genizah.org/Global/homepage?lan=heb&isPartial=False&isDoubleLogin=True&TractateID=0&DafID=0
              </a>
              <br/><b>The Friedberg Jewish Manuscript Society</b>
              <br/>'Hachi Garsinan', the Friedberg Project for Talmud Bavli Variants, provides access to digital pictures of 26 manuscripts of the Talmud and is available to the general public. The texts may be viewed in a variey of options.
                                                                                                                                                                                                <br/><br/>
    
            </li><li><a href="http://dafyomi.chareidi.org" target="new">
              http://dafyomi.chareidi.org
            </a>
            <br/><b>Sefarim on the Daf (.pdf), for the advanced Dafyomi learner</b>
            <br/>Rabbi Mordecai Plaut's collections of useful Sefarim for every Maseches in Shas along with the text of the Gemara itself (all in PDF form), chosen and downloaded from Hebrewbooks.com . Collections include Sefarim such as the Soncino English translation, Chavrusa, Daf Al Daf, Bi'urei ha'Daf, Ein Yakov, and others as appropriate.
            <br/>Since Avodah Zarah, the site has been updated as new Masechtos are started in the Dafyomi cycle. Presently it has collections on all of Kodshim, Nidah, Berachos, Moed, and Nashim until Nedarim - and be'h it will continue to be updated throughout the current Dafyomi cycle until collections have been prepared for all of Shas. Contact editor(a)chareidi.org for more information.
            <br/><br/>

            </li><li>
              <a href="http://www.pilotyid.com/hebrew-texts.php" target="new">http://www.pilotyid.com
              </a>
              <br/><b>Shas Reader with Rashi for Palm (free)</b><br/>
              PilotYid.com offers links to several Free and Purchasable Talmud texts for Palm.  The most notable is <b>Shas Reader with Rashi for Palm</b> by Hamaor. It is the only one that has Rashi, it includes the entire Talmud, and it is free.  It is built to see Rashi simultaneously with the main text, with the option to force either the Gemara or the Rashi to a full page size. Searching can be done through the built-in Palm search. The entire Shas/Gemara/Talmud is included in the .zip file download. It is available for free download by going to
              <a href="http://www.pilotyid.com/hebrew-texts.php" target="new">www.pilotyid.com and scrolling down to "Shas Reader with Rashi".</a>
              <br/><br/>




            </li><li>
              <a href="http://www.hebrewbooks.org" target="new">http://www.hebrewbooks.org</a>
              <br/><b>Hebrew Books</b>
              <br/>Hebrewbooks.org was founded in order to preserve old Hebrew books that are out of print and/or circulation. Many American Rabbis wrote Sefarim in the early part of the 20th century. They have long since passed away and in many instances so has their holy work. If you have a Sefer that you would like to put on the web please call (718) 930-3402 or email: oldhebrewbooks@aol.com .
              <br/><br/>


            </li><li>
              <a href="http://www.seforimonline.org/seforim.html" target="new">http://www.seforimonline.org/seforim.html</a>
              <br/><b>Seforim Online</b>
              <br/>SeforimOnline.org presents electronic editions of rare and hard to find Seforim (Hebrew books) on many topics including Hashkafah and Talmud-related texts in .pdf format, free for download.
              <br/><br/>

            </li><li>
              <a href="http://www.tshuvos.com" target="new">http://www.tshuvos.com</a>
              <br/><b>Responsa Resource</b>
              <br/>An excellent online collection of Sifrei She'elot u'Teshuvot.
              <br/><br/>
              
            </li><li>
              <a href="http://www.maharsho.com" target="new">http://www.maharsho.com</a>
              <br/><b>R. Folger on Maharsho and Maharshal</b>
              <br/>Analyses of Maharsho and Maharshal in both English and Hebrew, on several Masechtos, by R' Yecheskel Folger. See also his English exposition of the entire Mei'ri on Kidushin (initially published by Feldheim) at http://www.rmbsh.com .
              
              <br/><br/>
            </li>


          </ol>
          <br/>



          <BackToTop />
          <hr/>



          <h1><i><a name="products">Purchasable Dafyomi-study Products</a></i></h1><br/>
          <h3>Texts in electronic format</h3>
          
          <ol>
            <li>
              <table>
                <tbody>
                  <tr><td><a href="http://www.virtualgeula.com" target="new"><img src="virtualgeula.gif" width="135" height="50" alt="VirtualGeula.Com" /></a></td>
                    <td>&nbsp;<br/><a href="http://www.virtualgeula.com" target="new">
	              http://www.virtualgeula.com
                    </a>
	            <br/><b>The Jewish Archival Project</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              J.A.P. has set as its goal to make any Sefer that was ever printed available to all for the asking. Offering a wealth of otherwise unavailable Torah resources, J.A.P. will send you a scan or photocopy of any Sifrei Kodesh that you choose -- or pages thereof -- upon request. Either choose from their already extensive collection of archives, or put in a request for specific material that you are looking for. If it is available in the national library in Hebrew University, they will scan it and send it to you (by regular mail or Email) for a very reasonable fee).<br/>
              You can contact them directly at <b>Tel:</b> 972-544-990379; <b>Fax:</b> 972-2-5710306; <b>Email:</b> <a href="mailto:seforim@virtualgeula.net">seforim@virtualgeula.net</a>, or write to them at POB 45281, Jerusalem, Israel.
                                                                                                                                                                                                                              <br/><br/>

            </li><li><a href="http://www.torahtexts.org">http://www.torahtexts.org</a>
              <br/><b>Torah Text Online Search Engine</b>
              <br/>Offers a variety of searches including audio shiurim, books, classic texts, Kashrus, questions and answers, and research materials.<br/><br/>

            </li><li>
              <a href="http://www.masterdaf.com" target="new">http://www.masterdaf.com</a>
              <br/><b>T.E.S.'s Online Master Daf downloads</b>
              <br/>In the "Master Daf" Dafyomi tapes series, created by Rabbi Avraham Kosman of Baltimore/Bnei Brak (presently a Magid Shiur in the Slobodka Yeshiva), every word of the Talmud is read in its original Hebrew and Aramaic, then translated into clear English and explained. These Dafyomi review or preparation tapes, which cover a Daf in just 20 minutes, are available online for $5.95/month or $59.95/year through this T.E.S. site.<br/>In addition, each page of the Talmud can be viewed during the lesson in a clear, computer generated replica of the Talmud page, preserving the original format of the page. Each page and lesson may be downloaded for personal use offline. (Downloading allows the Talmud pages to be printed and the lessons to be transferred to an MP3 player or CD.) The shiurim are also available in CD format, with added features.<br/>
              <br/><br/>
            </li>
          </ol>



          <BackToTop/>



          <h3>Books and Sefarim on the Talmud</h3>

          <ol>
            <li>
              <a href="http://www.artscroll.com" target="new">
                http://www.artscroll.com
              </a>
              <br/> <b>Artscroll online bookstore</b>
              <br/>The Artscroll Talmud with English translation and commentary.<br/>Email contact: Rabbi Shmuel Blitz <a href="mailto:blitz@netmedia.net.il">blitz@netmedia.net.il</a><br/>
              Don't miss out on their great new Iphone/Android app, which allows for monthly use or purchase of electronic versions of the Artscroll resources.<br/><br/>.

            </li><li>
              <a href="http://www.judaicapress.com/index.php?cPath=26&osCsid=a6df2fd71b0119e7e09edbca2fdd300d" target="new">
                http://www.judaicapress.com
              </a>
              <br/><b>Judaica Press</b>
              <br/> Talmud section of the website of the venerable Judaica Press. Offers a broad selection of English and Hebrew Judaica. (If you are taken to the home page, scroll to the bottom of the page and click on the link to Talmud Study.)
              
              <br/><br/>

            </li><li>
              <a href="http://www.feldheim.com/" target="new">
                http://www.feldheim.com/
              </a>
              <br/><b>Feldheim online bookstore</b>
              <br/>An online gift store. Although not Dafyomi oriented, this site has numerous English books that assist in studying the Talmud, including an English language biography of Rav Meir Shapiro, the founder of Dafyomi study. Use their "Search" option to look for Talmud/Mishnah related texts.

              <br/><br/>
              

            </li><li>
              <a href="http://nleresources.com/2016/06/new-resource-the-gemara-card/#.V2LZqrt96M8" target="new">
                http://nleresources.com/2016/06/new-resource-the-gemara-card/#.V2LZqrt96M8
              </a>
              <br/><b>The Gemara Card!</b>
              <br/>Created by Rabbi Yitzhak Frank and David Sachs, The Gemara Card is a tri-folded laminated Aramaic reference card containing frequently used terms and abbreviations and other relevant information, designed to lower the barrier for entry to Talmud study.

              <br/><br/>


            </li><li>
              <a href="http://www.soncino.com" target="new">
                http://www.soncino.com
              </a>
              <br/><b>The Soncino Talmud site</b>
              <br/>The famous Soncino English translation of the Talmud, covering its entire length from cover to cover.
              
              <br/><br/>
            </li>
          </ol>


          <BackToTop />




          
          <h3>MP3, Audio cassettes and CD's</h3>

          <ol>
            <li>
              <a href="http://www.masterdaf.com" target="new">http://www.masterdaf.com</a>
              <br/><b>T.E.S.'s Online Master Daf downloads</b>
              <br/>In the "Master Daf" Dafyomi tapes series, created by Rabbi Avraham Kosman of Baltimore/Bnei Brak (presently a Magid Shiur in the Slobodka Yeshiva), every word of the Talmud is read in its original Hebrew and Aramaic, then translated into clear English and explained. These Dafyomi review or preparation tapes, which cover a Daf in just 20 minutes, are available for download as or in  for personal use offline. (Downloading allows the Talmud pages to be printed and the lessons to be transferred to an MP3 player or CD. The shiurim may also be purchased in CD format, with added features.<br/>
              The tape version of this product is available directly from Rav Kosman. He can be reached in America by calling 800-966-6026 or 435-543-8718, in Israel 03-579-4067, or via e-mail <a href="mailto:ak18@neto.bezeqint.net?subject=Tape orders placed via D.A.F.">ak18@neto.bezeqint.net</a> or FAX 972-3-578-1825. Mishna, Sugya, Mishnah Beruruah and Musar tapes are also available (one mishna per minute and one sugyah in 10 minutes).
              <br/><br/>

            </li><li>
              <a href="http://www.kolhalashon.com/New/HomePage/NewDefault.aspx?Lang=English&English=True" target="new">http://www.kolhalashon.com</a>
              <br/><b>Kol Halashon</b>
              <br/>Over the years, Kol Halashon has built an impressive collection of Shiurim on all Jewish
              topics by hundreds of reknowned Rabbis, in several languages. These tapes are accessible by phone though their
              worldwide telephone network (phone numbers are listed here - http://www.lintz.net/josh/kol/kol.php) , and now through the Internet. Among many other subjects, you can watch or listen to or download a broad selection of Dafyomi and Amud Yomi tapes. 
              <br/>It is also possible to hear Dafyomi Shiurim live as they are being delivered. For example, you can watch Rav Guttfarb (Yiddish) at 5:45pm Israel time, or Rav Avraham Goldstein (English) daily at 9:00 PM, or Rav Moshe Rabinowitz (English) Daf Yomi Daily at 8:00 PM . Of course, numerous Hebrew Shiurim are also available for live (but non-interactive) viewing.
              <br/><br/>

            </li><li>
              <a href="https://judaicapress.com/products/dvdshas-mp3-audio-6-dvds" target="new">https://judaicapress.com/products/dvdshas-mp3-audio-6-dvds</a>
              <br/><b>The Dial-a-Daf shiur of the complete shas in MP3 audio!</b>
              <br/>This phenomenal 6 DVD set contains all the audio shiurim (classes) from the world-famous Dial-a-Daf series. These are the same shiurim found on the CD-Daf and DVDaf programs, but this set includes only the audio files, in the easy-to-use MP3 format. Distributed by Judaica Press.
              <br/><br/>

              <br/><br/>

            </li><li>
              <a href="http://www.dafyomitapes.com/">http://www.dafyomitapes.com</a>
              <br/><b>The Daf Yomi Mesechta Review</b>
              <br/>An exciting and innovative audio "chazorah" system which helps you review and remember the daily daf. Each tape (English) provides the highlights of every daf in a well communicated and easy to follow format. Daf Yom Mesechta review is available on 122 tapes which cover all of Shas.
              <br/><br/>

            </li>
          </ol>

          <BackToTop />


          <h3>Software</h3>

          <ol>

            <li>
              <a href="http://www.cycrosoft.com/Windows/Gemara-Tracker-726974.html" target="new">
                http://www.cycrosoft.com/Windows/Gemara-Tracker-726974.html
              </a>
              <br/><b>Gemara Tracker software</b>
              <br/>Ari Berdy's &quot;Gemara Tracker&quot; shareware lets you keep track of how many times you've learned the Gemara, Rashi and/or Tosfos for any page in Shas, as well as enter your own notes on each Daf. The "at-a-glance" feature lets you know how many pages you've completed in the Masechta you're currently learning, in a different Masechta, or in all of Shas. In addition, it features instant full-text searching through your notes and detailed printing of records and notes, complete with customizable summaries.
              <br/>First 20 uses are free; continued use requires a registration fee of $12.00.
              <br/><br/>

            </li><li>
              <a href="http://www.jewishsoftware.com/" target="new">
                http://www.jewishsoftware.com/
              </a>
              <br/><b>Torah Educational Software (TES)</b>
              <br/> TES markets and produces lots of Talmud and Torah oriented CD-Rom titles, such as:
              <ul>
                <li> The MasterDaf audio Dafyomi CD
                </li><li> Talmudmaster
                </li><li> Gemora Tutor
                </li><li> Otzar Haposkim: classic Rishonim, Poskim and Tanach-with-commentaries database (reasonably priced)
                </li><li> Encylopedia Talmudit
                </li><li> DBS database of classic philosophical, Halachic and Midrashic works
                </li><li> The comprehensive Bar Ilan Responsa CD
                </li><li> Judaica Archives
                </li>
              </ul>

              <br/>At <a href="http://www.jerusalembooks.com/dbs.htm" target="new">
                http://www.jerusalembooks.com/dbs.htm you can get some screen shots of the DBS Torah CD-Rom
              </a><br/><br/>



            </li><li>
              <a href="http://www.judaicapress.com" target="new">
                http://www.judaicapress.com
              </a>
              <br/><a href="http://www.davka.com" target="new">
                http://www.davka.com (click on "<b>Judaic Texts</b>")
              </a>
              <br/><b>Judaica Press/Davka software's "Sefarim on CD" collection</b>
              <br/> Judaica Press markets a large number of Talmud and Torah oriented CD-Rom titles, including the following:
              <ul>
                <li> CD-DAF: Dafyomi with the dial-a-daf audio track explaining it in English, Hebrew or Yiddish (depending on the CD you choose). Also contains links to citations from other Masechtos and Poskim, and a Hebrew collection of in-depth insights culled from the works of the Rishonim and Acharonim. (Only about $19 per Maseches)
                </li><li> The Soncino Talmud: All eighteen volumes of the Soncino English rendering of the Talmud, the Hebrew and Aramaic text of the Talmud, and Rashi's commentary (Hebrew only).
                </li><li> Talmud Tutor Plus - includes a glossary of Talmudic terms and informative charts maps and biographies for the beginner in Talmud.
                </li><li> The Soncino Classics Collection (Talmud etc. and Chumash)
                </li><li> Judaic Classics Deluxe Edition
                </li><li> Judaic Classics Limited Edition
                </li><li> Otzar HaPoskim: Responsa database
                </li>
              </ul>
              <br/><br/>
            </li>
          </ol>

          <h3>Other indexes to Talmud and Dafyomi websites</h3>

          There are a number of other sites that list links to Dafyomi websites but do not themselves contain information relating to Dafyomi study. In general, the links on these lists (and much more) can be found on our list, which preceded the others. Nevertheless, we include a list of such sites in case a new link appears in one of them before it makes it to our list.<br/>
          Besides the major Jewish search engines (such as <a href="http://www.maven.co.il" target="new">www.maven.co.il</a>), you can find Dafyomi links at:<br/>
                <ul>
	          <li> <a href="http://www.hareshima.co.il" target="new">www.hareshima.co.il</a> -- a broad selection of Jewish links than includes a section dedicated to Dafyomi related links.
                  </li>
                  

                </ul>
                
                
      </div>
              );
  }
}
export default Central;
