import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles=[
        
            {
              "source": { "id": null, "name": "Toronto Star" },
              "author": "Star staff,wire services",
              "title": "Today’s coronavirus news: French Open proceeding without COVID restrictions for first time in two years",
              "description": "Noted anti-vaccine athlete Novak Djokovic, last year’s men’s champion, and 13-time champion Nadal are slated to play their first-round matches on Monday.",
              "url": "https://www.thestar.com/news/canada/2022/05/22/coronavirus-covid-19-omicron-toronto-ontario-may-22.html",
              "urlToImage": "https://images.thestar.com/z_boDNhffZ75t4xh7WZsYgSDYIY=/1200x800/smart/filters:cb(1653222062441):format(webp)/https://www.thestar.com/content/dam/thestar/news/canada/2022/05/22/coronavirus-covid-19-omicron-toronto-ontario-may-22/covidfeature01.jpg",
              "publishedAt": "2022-05-22T12:18:00Z",
              "content": "The latest coronavirus news from Canada and around the world Sunday. This file will be updated throughout the day. Web links to longer stories if available.\r\n8:04 a.m. Chinese authorities in Shanghai… [+2771 chars]"
            },
            {
              "source": { "id": null, "name": "Animalpolitico.com" },
              "author": "Redacción Animal Político",
              "title": "Sin violencia ni machismos y con inclusión: las barras que apuestan por disfrutar del futbol en paz",
              "description": "Tras los hechos de violencia en el Estadio Corregidora, la Liga MX y directivos han apostado por medidas de veto y control. Sin embargo, estos esfuerzos ciudadanos piden ir más allá y escuchar otras alternativas que frenen la violencia en los estadios.\nEl car…",
              "url": "https://www.animalpolitico.com/2022/05/sin-violencia-ni-machismos-barras-juegan-futbol-en-paz/",
              "urlToImage": "https://www.animalpolitico.com/wp-content/uploads/2022/05/barras-futbol-sin-violencia-paz.jpeg",
              "publishedAt": "2022-05-22T11:55:22Z",
              "content": "“Hay mucho movimiento y ruido. Pero esto es el progreso. Podemos adaptarnos”.\r\nAsí resume Jim Crawford, un jubilado de 76 años, su vida en Boca Chica Village, un asentamiento de una veintena de casas… [+19698 chars]"
            },
            {
              "source": { "id": null, "name": "Motley Fool" },
              "author": "newsfeedback@fool.com (Luke Meindl)",
              "title": "Down Almost 30% in the Past Month, Here Are 2 Reasons to Buy Tesla and 1 Reason to Hold Off",
              "description": "Is the EV king heading for a major correction?",
              "url": "https://www.fool.com/investing/2022/05/22/down-almost-30-in-the-past-month-here-are-2-reason/",
              "urlToImage": "https://g.foolcdn.com/editorial/images/680627/charging-up-an-electric-car-at-night.jpg",
              "publishedAt": "2022-05-22T11:45:00Z",
              "content": "The valuations of growth stocks have been tested lately in the wake of unprecedented inflation levels, hiked interest rates, and the economic impacts of Russia's invasion of Ukraine. The Nasdaq Compo… [+4569 chars]"
            },
            {
              "source": { "id": null, "name": "Freerepublic.com" },
              "author": "Newsweak",
              "title": "Clinton Campaign Tweet on Trump, Russia 'Misleading Disinformation': Musk",
              "description": "Tesla CEO Elon Musk on Friday agreed with a Twitter user who suggested that Hillary Clinton's campaign tweeted \"misleading disinformation\" in the past that alleged a connection between former President Donald Trump and Russia. \"I have reported this tweet as m…",
              "url": "https://freerepublic.com/focus/f-chat/4065299/posts",
              "urlToImage": null,
              "publishedAt": "2022-05-22T11:31:02Z",
              "content": "Skip to comments.\r\nClinton Campaign Tweet on Trump, Russia 'Misleading Disinformation': MuskNewsweak ^\r\n | 5/21/22\r\n | Fatma Khaled\r\nPosted on 05/22/2022 4:31:02 AM PDT by Libloather\r\nTesla CEO Elon … [+2348 chars]"
            },
            {
              "source": { "id": null, "name": "Kommersant.ru" },
              "author": null,
              "title": "Электромобили не потянут // Как складывается ситуация на рынке авто",
              "description": "Россияне закупились новыми электромобилями Tesla. В апреле, по данным агентства «Автостат», их продажи выросли на 90% год к году. Всего за месяц в стране продали 80 машин от компании Илона Маска. Также спросом в апреле пользовались электрокары Audi и Porsche.…",
              "url": "https://www.kommersant.ru/doc/5358772",
              "urlToImage": "https://im.kommersant.ru/SocialPics/5358772_26_2218128_1993339831",
              "publishedAt": "2022-05-22T11:27:00Z",
              "content": "Tesla. , «», 90% . 80 . Audi Porsche. , 11%.\r\n , «» . , , , : « , . . \r\n , : , . , . , , , , 80% . 100-150 . . 8-10 . ».\r\n, , Tesla , . Autonews.ru . 2030 , , : « , Audi, Porsche, Jaguar, .\r\n , , , .… [+156 chars]"
            },
            {
              "source": { "id": null, "name": "DIE WELT" },
              "author": "Sven Flohr, Sven Flohr",
              "title": "Der Abend, der den deutschen Fußball verändert",
              "description": "Vor 13 Jahren kaufte sich Red Bull eine Fünftliga-Lizenz, um in den deutschen Fußball einzusteigen. Nun ist der Klub Pokalsieger. Eine erstaunliche Leistung, welche die Zukunft des Spiels aufzeigt. Nun fehlt noch ein souveräner Umgang mit dem eigenen Dasein.",
              "url": "https://www.welt.de/sport/fussball/dfb-pokal/article238910789/DFB-Pokal-RB-Leipzig-Der-Abend-der-den-deutschen-Fussball-veraendert.html",
              "urlToImage": "https://img.welt.de/img/sport/fussball/dfb-pokal/mobile238913703/1211352357-ci16x9-w1200/SC-Freiburg-RB-Leipzig.jpg",
              "publishedAt": "2022-05-22T11:23:48Z",
              "content": "RasenBallsport Leipzig hat es geschafft. 13 Jahre nach der Übernahme des Fünftliga-Startrechts des Leipziger Vorortklubs SSV Markranstädt gewinnt der Klub seinen ersten großen Titel. Leipzig ist DFB-… [+2542 chars]"
            },
            {
              "source": { "id": null, "name": "SFGate" },
              "author": "Joshua Bote",
              "title": "All the biggest Bay Area tech companies that have paused hiring",
              "description": "Even the most well-known tech companies are facing stagnating growth and stalled hiring.",
              "url": "https://www.sfgate.com/bayarea/article/biggest-tech-companies-pause-hiring-17185591.php",
              "urlToImage": "https://s.hdnux.com/photos/01/16/07/75/20479861/3/rawImage.jpg",
              "publishedAt": "2022-05-22T11:22:28Z",
              "content": "Economic headwinds continue to look unfavorable for the tech industry. Stocks are down across the board, exacerbated by supply chain woes, inflation, hiked interest rates and a range of other economi… [+3224 chars]"
            },
            {
              "source": { "id": "business-insider", "name": "Business Insider" },
              "author": "jmann@insider.com (Jyoti Mann)",
              "title": "A Tesla driver who had his car on Autopilot in a fatal crash faces manslaughter charges, report says",
              "description": "Sensors appeared to show that the driver had a hand on the steering wheel but did not apply the brakes before the collision, Fox Business reports.",
              "url": "https://www.businessinsider.com/driver-who-had-tesla-on-autopilot-in-crash-manslaughter-trial-2022-5",
              "urlToImage": "https://i.insider.com/628a0570b9dbb40018cb2fe5?width=1200&format=jpeg",
              "publishedAt": "2022-05-22T11:19:21Z",
              "content": "A Tesla driver who had his car on Autopilot in a crash that killed two people will stand trial on two counts of manslaughter in Los Angeles, Fox Business reported. \r\nThe fatal accident in 2019 occurr… [+1687 chars]"
            },
            {
              "source": { "id": null, "name": "NDTV News" },
              "author": null,
              "title": "Elon Musk Posts Tesla Job Ad On Twitter, Receives Hilarious Responses",
              "description": "SpaceX and Tesla CEO Elon Musk recently posted a job advertisement on Twitter and internet users could not help but troll the billionaire.",
              "url": "https://www.ndtv.com/world-news/elon-musk-posts-tesla-job-ad-on-twitter-receives-hilarious-responses-2998759",
              "urlToImage": "https://c.ndtvimg.com/2022-04/pg7khrag_elon-musk_650x400_26_April_22.jpg",
              "publishedAt": "2022-05-22T11:14:20Z",
              "content": "Tesla is looking to build a litigation department to initiate and execute lawsuits. (File)\r\nSpaceX and Tesla CEO Elon Musk recently posted a job advertisement on Twitter and internet users could not … [+3371 chars]"
            },
            {
              "source": { "id": null, "name": "Foreign Policy" },
              "author": "Karen Cheung",
              "title": "In Hong Kong, a Once Liberal University Feels Beijing’s Weight",
              "description": "With protesters crushed and memorials removed, there’s no room for campus dissent.",
              "url": "https://foreignpolicy.com/2022/05/22/hong-kong-university-academic-freedom-dissent-china/",
              "urlToImage": "https://foreignpolicy.com/wp-content/uploads/2022/05/1-Hong-Kong-University-pillar-of-shame-GettyImages-1235836050.jpg?w=1000",
              "publishedAt": "2022-05-22T11:00:27Z",
              "content": "The Pillar of Shame is displayed at the campus of the University of Hong Kong on Oct. 10, 2021. The statue, created by Danish artist Jens Galschiot, had been on display at the university since 1998 u… [+18586 chars]"
            },
            {
              "source": { "id": null, "name": "HuffPost" },
              "author": "Alexander C. Kaufman",
              "title": "The Lithium War Next Door",
              "description": "A lithium mining startup promised to make a rural pocket of North Carolina a clean-energy boomtown. But perceived slights and concerns over water have turned neighbors against the project.",
              "url": "https://www.huffpost.com/entry/piedmont-lithium-mine_n_62869f4be4b0933e7362d58c",
              "urlToImage": "https://img.huffingtonpost.com/asset/6287aa832100004b275088c0.jpg?ops=1778_1000",
              "publishedAt": "2022-05-22T11:00:10Z",
              "content": "This story was published in collaboration with The Assembly, a digital magazine about the people, institutions and ideas that shape North Carolina.\r\nGASTON COUNTY, North Carolina Brian Harper opened … [+45924 chars]"
            },
            {
              "source": { "id": null, "name": "Autoblog" },
              "author": "Doug Newcomb",
              "title": "Why Apple should not build an iCar",
              "description": "Filed under:\n Green,Hirings/Firings/Layoffs,Marketing/Advertising,Rumormill,Technology,Emerging Technologies,Autonomous Vehicles,Electric,Future Vehicles\n Continue reading Why Apple should not build an iCar\nWhy Apple should not build an iCar originally appear…",
              "url": "https://www.autoblog.com/2022/05/22/apple-car-bad-idea/",
              "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/05/18144849/Apple-Car-Autoblog.jpg",
              "publishedAt": "2022-05-22T11:00:00Z",
              "content": "Like Bigfoot and the Loch Ness Monster, rumors of an Apple car never seem to die. But unlike Sasquatch and Nessie, at least there have been various verified sightings of Apple testing its self-drivin… [+4475 chars]"
            },
            {
              "source": { "id": "la-repubblica", "name": "La Repubblica" },
              "author": "repubblicawww@repubblica.it (Redazione Repubblica.it)",
              "title": "Mercati in cerca di ripartenza, ma pesa l'incubo stagflazione. Piovono dieci miliardi di dividendi su Piazza Affari",
              "description": "L'ultima ottava è stata caratterizzata dai timori per il mix di prezzi alti e crescita in rallentamento. Da Generali a Intesa, cedole in arrivo lunedì 23 maggio. Torna il forum di Davos in presenza, attesa per il giudizio di Fitch sull'Italia",
              "url": "https://www.repubblica.it/economia/2022/05/22/news/agenda_mercati_lunedi_dividendi_per_10_miliardi-350522391/",
              "urlToImage": "https://www.repstatic.it/content/nazionale/img/2022/05/22/100513913-e3787263-2235-4fac-8099-32d9fc4791c3.jpg",
              "publishedAt": "2022-05-22T10:53:32Z",
              "content": "Le Borse provano a ripartire dopo una settimana volatile, condita dalla preoccupazione per l'inflazione galoppante che ha chiamato le Banche centrali a stringere le politiche monetarie per far frenar… [+7414 chars]"
            },
            {
              "source": { "id": null, "name": "Business Insider South Africa" },
              "author": "Sam Tabahriti",
              "title": "Businessinsider.co.za | Elon Musk is recruiting 'hardcore streetfighters' for a new Tesla 'litigation department'",
              "description": "Musk has been accused of sexual misconduct against a former SpaceX flight attendant and the company reportedly paid $250,000 for her silence.",
              "url": "https://www.businessinsider.co.za/elon-musk-build-hardcore-litigation-department-tesla-spacex-sexual-misconduct-2022-5",
              "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3230/1b312efc71964fac9f6fc72d30fde22d.jpg",
              "publishedAt": "2022-05-22T10:52:02Z",
              "content": "<ul><li>Elon Musk tweeted that Tesla seeks individuals to create a \"hardcore litigation department.\"</li><li>An Insider investigation found a flight attendant accused Musk of sexual misconduct. </li>… [+2361 chars]"
            },
            {
              "source": { "id": null, "name": "Detik.com" },
              "author": "Fitraya Ramadhanny",
              "title": "Cerita India Gigit Jari karena Elon Musk Pilih Indonesia",
              "description": "Banyak negara gigit jari karena Elon Musk memilih Indonesia untuk pabrik Tesla, salah satunya India. Pemerintah India disalahkan karena kurang agresif.",
              "url": "https://inet.detik.com/business/d-6089914/cerita-india-gigit-jari-karena-elon-musk-pilih-indonesia",
              "urlToImage": "https://awsimages.detik.net.id/api/wm/2022/05/16/intip-gaya-santai-ala-jokowi-vs-elon-musk-saat-blusukan-ke-pabrik-spacex-5_169.jpeg?wid=54&w=650&v=1&t=jpeg",
              "publishedAt": "2022-05-22T10:42:16Z",
              "content": "Jakarta - Banyak negara gigit jari karena Elon Musk memilih Indonesia untuk pabrik Tesla, salah satunya India. Mereka saling menyalahkan.\r\nRencana investasi Elon Musk melalui Tesla di Indonesia jadi … [+1854 chars]"
            },
            {
              "source": { "id": null, "name": "Observador.pt" },
              "author": "Alfredo Lavrador",
              "title": "BMW diz que eléctricos igualam lucro, células serão cilíndricas e aposta em plataformas para EV",
              "description": "Oliver Zipse, CEO da BMW, abriu o livro das previsões para os próximos anos. Disse que a marca vai passar a usar plataformas para eléctricos, células cilíndricas e os lucros dos eléctricos vão subir.",
              "url": "https://observador.pt/2022/05/22/bmw-diz-que-electricos-igualam-lucro-celulas-serao-cilindricas-e-plataformas-para-ev/",
              "urlToImage": "https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1920%3A1079%3Anowe%3A0%3A100%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F05%2F22101946%2Fbmw-neue-klasse-comeback-elektro-architektur-2026-01.jpg",
              "publishedAt": "2022-05-22T10:32:49Z",
              "content": "Tem acesso livre a todos os artigos do Observador por ser nosso assinante.\r\nDurante a reunião anual com os accionistas, o CEO da BMW, Oliver Zipse, partilhou com a plateia uma série de novidades, tod… [+2181 chars]"
            },
            {
              "source": { "id": null, "name": "Motley Fool" },
              "author": "newsfeedback@fool.com (Howard Smith)",
              "title": "2 Top Electric Vehicle Stocks to Buy for the Long Haul",
              "description": "Recent volatility helps highlight that a mix of holdings is a smart approach.",
              "url": "https://www.fool.com/investing/2022/05/22/2-top-electric-vehicle-stocks-to-buy-for-long-haul/",
              "urlToImage": "https://g.foolcdn.com/editorial/images/677303/0x0-supercharger_16.jpg",
              "publishedAt": "2022-05-22T10:31:00Z",
              "content": "It's always smart to build diversification into a long-term portfolio. Markets and sectors go in and out of favor, and it helps to have some of your investments working at all times. That's even more… [+4026 chars]"
            },
            {
              "source": { "id": null, "name": "Pketh.org" },
              "author": null,
              "title": null,
              "description": "DanielX and I originally pitched Glitch in 2015 after a CreekWeek aimed at figuring out what FogCreek should make after Fogbugz, Trello, and Stack Overflow.",
              "url": "https://pketh.org/the-first-four-years-of-glitch.html",
              "urlToImage": null,
              "publishedAt": "2022-05-22T10:25:54Z",
              "content": "DanielX and I originally pitched Glitch in 2015 after a CreekWeek aimed at figuring out what FogCreek should make after Fogbugz, Trello, and Stack Overflow.\r\nThe original prototype was based on a cli… [+11278 chars]"
            },
            {
              "source": { "id": null, "name": "DIE WELT" },
              "author": "Stefan Beutelsbacher, Stefan Beutelsbacher",
              "title": "Apple-Zulieferer will E-Autos bauen – und schmiedet eine dubiose Allianz",
              "description": "Es ist ein großes Experiment: Der Konzern Foxconn aus Taiwan kauft eine Autofabrik in den USA. Dort sollen elektrische Modelle der Start-ups Lordstown und Fisker vom Band laufen. Beide Firmen haben einen zweifelhaften Ruf.",
              "url": "https://www.welt.de/wirtschaft/article238910111/USA-Apple-Zulieferer-will-E-Autos-bauen-und-schmiedet-eine-dubiose-Allianz.html",
              "urlToImage": "https://img.welt.de/img/wirtschaft/mobile238911553/9461354707-ci16x9-w1200/President-Trump-Inspects-Electric-Pickup-Truck-At-The-White-House.jpg",
              "publishedAt": "2022-05-22T10:17:33Z",
              "content": "Als Steel Valley bezeichnen Amerikaner die Region zwischen Pittsburgh und Cleveland, als Tal des Stahls. Einst qualmten überall Hochöfen, Walzwerke und Schmelztiegel, doch nun siedelt sich dort eine … [+3163 chars]"
            },
            {
              "source": { "id": null, "name": "PRNewswire" },
              "author": null,
              "title": "ROSEN, A LEADING LAW FIRM, Encourages Twitter, Inc. Investors to Secure Counsel Before Important Deadline in Securities Class Action Against Elon Musk - TWTR",
              "description": "NEW YORK , May 22, 2022 /PRNewswire/ -- WHY: Rosen Law Firm, a global investor rights law firm, reminds sellers of the common stock of Twitter, Inc. (NYSE: TWTR) between March 24, 2022 and April 1, 2022, inclusive (the \"Class Period\"), of the important June 1…",
              "url": "https://www.prnewswire.com/news-releases/rosen-a-leading-law-firm-encourages-twitter-inc-investors-to-secure-counsel-before-important-deadline-in-securities-class-action-against-elon-musk--twtr-301552227.html",
              "urlToImage": "https://mma.prnewswire.com/media/405060/Rosen_Law_Logo.jpg?p=facebook",
              "publishedAt": "2022-05-22T10:12:00Z",
              "content": "NEW YORK , May 22, 2022 /PRNewswire/ -- WHY: Rosen Law Firm, a global investor rights law firm, reminds sellers of the common stock of Twitter, Inc. (NYSE: TWTR) between March 24, 2022 and April 1, 2… [+4358 chars]"
            }
          ]
    
    constructor(){

        super();
        console.log("hello")
        this.state={
            articles:this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className='container my-3'>
<h2>newsMonkey top hesdlines</h2>
<div className="row">
    {this.state.articles.map((element)=>{
        return  <div className="col-md-3" key={element.url}>
        <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
    </div>
    })}
   
   
</div>


      </div>
    )
  }
}

export default News