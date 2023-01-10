import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
    const store = useStore({
        "value": [`
        var sc = document.createElement("script");
        sc.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6156534121952969");
        sc.setAttribute("async", "");
        sc.setAttribute("crossOrigin", "anonymous");
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);`
        ]
    })
    return (
        <div class="about-us">
            {store.value.map(e =>
                <script id="hello">
                    {e}
                </script>
            )
            }
            <ul>
                <li>A <a href="https://www.csmonitor.com/Science/2013/0918/House-cats-and-tigers-share-95.6-percent-of-DNA-study-reveals" rel="nofollow" role="link">house cat’s genome is 95.6 percent tiger</a>, and they share many behaviors with their jungle ancestors, says <a href="http://catwisdom101.com/author/boomermuse/" rel="nofollow" role="link">Layla Morgan Wilde</a>, a cat behavior expert and the founder of Cat Wisdom 101. These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking.</li>
                <li>Cats are believed to be the only mammals who <a href="http://www.petful.com/food/why-cant-cats-taste-sweet-things/" rel="nofollow" role="link">don’t taste sweetness</a>.</li>
                <li><a href="https://www.livescience.com/40459-what-do-cats-see.html" rel="nofollow" role="link">Cats are nearsighted</a>, but their peripheral vision and night vision are much better than that of humans.</li>
                <li>Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).</li>
                <li><a href="https://www.mnn.com/family/pets/photos/10-fascinating-facts-about-cats/cats-can-jump-high" rel="nofollow" role="link">Cats can jump</a> up to six times their length.</li>
                <li>Cats’ claws all curve downward, which means that <a href="http://www.catrescueguy.com/p/why-do-cats-get-stuck-in-trees.html" rel="nofollow" role="link">they can’t climb down trees head-first</a>. Instead, they have to back down the trunk.</li>
                <li><a href="http://www.ccmr.cornell.edu/faqs/why-are-cats-so-flexible/" rel="nofollow" role="link">Cats’ collarbones</a> don’t connect to their other bones, as these bones are buried in their shoulder muscles.</li>
                <li>Cats have 230 <a href="http://www.petplace.com/article/cats/behavior-training/understanding-your-cat/cat-facts-%E2%80%93-how-much-do-you-know-about-cats-the-answers" rel="nofollow" role="link">bones</a>, while humans only have 206.</li>
                <li>Cats have an <a href="https://www.thespruce.com/sense-of-smell-552117" rel="nofollow" role="link">extra organ</a> that allows them to taste scents on the air, which is why your cat stares at you with her mouth open from time to time.</li>
                <li>Cats have <a href="http://www.petmd.com/cat/behavior/evr_ct_why_do_cats_have_whiskers" rel="nofollow" role="link">whiskers</a> on the backs of their front legs, as well.</li>
                <li>Cats have nearly twice the amount of <a href="https://www.livescience.com/45730-cats-dogs-intelligence.html" rel="nofollow" role="link">neurons in their cerebral cortex</a> as dogs.</li>
                <li>Cats have the <a href="http://www.bbc.com/earth/story/20150219-the-worlds-most-sensitive-eyes" rel="nofollow" role="link">largest eyes relative to their head size</a> of any mammal.</li>
                <li>Cats make very little noise when they <a href="http://www.catster.com/lifestyle/5-cat-facts-cats-paws" rel="nofollow" role="link">walk around</a>. The thick, soft pads on their paws allow them to sneak up on their prey — or you!</li>
                <li><a href="http://www.animalplanet.com/pets/4-the-rough-side-of-the-tongue/" rel="nofollow" role="link">Cats’ rough tongues</a> can lick a bone clean of any shred of meat.</li>
                <li>Cats use their <a href="http://www.catster.com/lifestyle/cat-tail-5-cool-facts" rel="nofollow" role="link">long tails to balance themselves</a> when they’re jumping or walking along narrow ledges.</li>
                <li>Cats use their whiskers to <a href="http://www.petmd.com/cat/behavior/evr_ct_why_do_cats_have_whiskers" rel="nofollow" role="link">“feel” the world around them </a>in an effort to determine which small spaces they can fit into. A cat’s whiskers are generally about the same width as its body. (This is why you should never, EVER cut their whiskers.)</li>
                <li><a href="https://www.theatlantic.com/science/archive/2016/02/the-weird-thing-about-cat-legs/459369/" rel="nofollow" role="link">Cats walk like camels and giraffes</a>: They move both of their right feet first, then move both of their left feet. No other animals walk this way.</li>
                <li><a href="http://latimesblogs.latimes.com/unleashed/2009/07/cats-right-pawed-left-pawed.html" rel="nofollow" role="link">Male cats are more likely to be left-pawed</a>, while female cats are more likely to be right-pawed.</li>
                <li>Though cats can notice the fast movements of their prey, it often seems to them that <a href="https://www.livescience.com/40459-what-do-cats-see.html" rel="nofollow" role="link">slow-moving objects are actually stagnant</a>.</li>
                <li>Some <a href="http://latimesblogs.latimes.com/unleashed/2009/07/cats-right-pawed-left-pawed.html" rel="nofollow" role="link">cats are ambidextrous</a>, but 40 percent are either left- or right-pawed.</li>
                <li>Some <a href="http://cattime.com/cat-facts/lifestyle/2022-top-10-cats-who-love-water" rel="nofollow" role="link">cats can swim</a>.</li>
                <li>There are cats who have more than 18 toes. These extra-digit felines are referred to as being “<a href="https://www.care.com/c/stories/6051/all-about-polydactyl-cats/" role="link">polydactyl</a>.”</li></ul>
            <ul>
                <li>A cat’s average lifespan increased by a year over the span of time between 2002 and 2012, according to a study by <a href="http://www.banfield.com/about-us/news-room/press-releases-announcements/spaying-and-neutering-may-contribute-to-longer-lif" rel="nofollow" role="link">Banfield Pet Hospital</a>.</li>
                <li>According to <a href="http://www.huffingtonpost.com/rubin-naiman-phd/cats-and-sleep_b_3891010.html" rel="nofollow" role="link">The Huffington Post</a>, cats typically sleep for 12 to 16 hours a day.</li>
                <li>Cats are <a href="https://consciouscompanion2012.com/2013/06/03/crepuscular-cats/" rel="nofollow" role="link">crepuscular</a>, which means that they’re most active at dawn and dusk.</li>
                <li>Cats are fastidious creatures about their “bathroom.” If you have more than one cat, you should have <a href="https://www.care.com/c/stories/8302/self-cleaning-kitty-litter-boxes-a-side-by-s/" role="link">one litter box for each</a>.</li>
                <li>Cats can spend up to a <a href="http://www.thedailycat.com/health/illness/cat_grooming_health/index.html" rel="nofollow" role="link">third of their waking hours </a>grooming.</li>
                <li>Cats live longer when they <a href="http://pets.webmd.com/cats/features/should-you-have-an-indoor-cat-or-an-outdoor-cat#1" rel="nofollow" role="link">stay indoors</a>.</li>
                <li>Cats’&nbsp;<a href="https://www.wired.com/2015/05/why-do-cats-purr/" rel="nofollow" role="link">purring&nbsp;may be a self-soothing behavior</a>,&nbsp;since they make&nbsp;this noise when they’re ill or distressed, as well as when they’re happy.</li>
                <li>Cats will <a href="https://www.petcha.com/what-to-do-if-your-cat-wont-eat/" rel="nofollow" role="link">refuse an unpalatable food</a> to the point of starvation.</li>
                <li>Despite popular belief, many cats are actually <a href="http://pets.webmd.com/cats/guide/cats-and-dairy-get-the-facts#1" rel="nofollow" role="link">lactose intolerant</a>.</li>
                <li>Female cats have the ability to get pregnant when they are only <a href="http://pets.thenest.com/can-kittens-4-months-old-pregnant-6533.html" rel="nofollow" role="link">4 months old</a>!</li>
                <li><a href="http://pets.webmd.com/cats/ss/slideshow-foods-your-cat-should-never-eat" rel="nofollow" role="link">Grapes and raisins</a>, as well as <a href="http://pets.webmd.com/cats/ss/slideshow-foods-your-cat-should-never-eat" rel="nofollow" role="link">onions, garlic, and chives</a>, are all extremely harmful foods for cats. Grapes and raisins can cause kidney failure — although the reasoning behind that isn’t clear. Meanwhile, onions, garlic, and chives&nbsp;wreak havoc on your cat’s gastrointestinal system and can cause anemia.</li>
                <li>If you <a href="http://pets.webmd.com/cats/guide/nighttime-activity-cats#1" rel="nofollow" role="link">keep your cat active during the day</a>, he will sleep better at night.&nbsp;If you’re not free-feeding your cat, you can also help her get a good night’s sleep by providing her with a <a href="http://pets.webmd.com/cats/guide/nighttime-activity-cats" rel="nofollow" role="link">substantial evening meal</a>.</li>
                <li>It’s believed that <a href="https://www.lovethatpet.com/cats/questions/is-catnip-really-cat-lsd/" rel="nofollow" role="link">catnip produces an effect </a>similar to LSD or marijuana in cats.&nbsp;The effects of nepetalactone — the chemical in catnip that can makes cats crazy — <a href="http://merrillvillevets.com/2016/05/15/crown-point-in-vet-catnip-101/" rel="nofollow" role="link">wears off within 15 minutes</a>, and won’t surface again for a few hours, even if your cat remains in sniffing distance.</li>
                <li>Kittens can be <a href="https://www.care.com/c/stories/6401/spaying-a-cat-the-benefits-and-cost/" role="link">spayed or neutered</a> when they are only eight weeks old. If possible, these procedures should be performed in the first 5 months of your cat’s life.</li>
                <li>Male cats who have been fixed <a href="https://www.bluecross.org.uk/pet-advice/keeping-your-cat-shape" rel="nofollow" role="link">need fewer calories</a> to maintain their weight.</li>
                <li>Spaying and neutering can extend a cat’s life. The <a href="http://www.banfield.com/about-us/news-room/press-releases-announcements/spaying-and-neutering-may-contribute-to-longer-lif" rel="nofollow" role="link">Banfield Pet Hospital study</a> found that neutered males live an average of 62 percent longer than unneutered cats and spayed females live an average of 39 percent longer than unspayed cats.</li>
                <li>Your cat’s<a href="http://www.hallsvillevet.com/blog/pet-grooming/" rel="nofollow" role="link"> grooming process </a>stimulates blood flow to his skin, regulates his body temperature and helps him relax.</li></ul>
            <ul>
                <li>A <a href="http://www.catster.com/lifestyle/cat-behavior-facts-body-language-tail" rel="nofollow" role="link">cat with a question-mark-shaped tail</a> is asking, “Want to play?”</li>
                <li>According to Wilde, a slow blink is a “kitty kiss.” This movement shows contentment and trust.</li>
                <li>Cats have a <a href="http://nymag.com/scienceofus/2015/04/your-cat-is-trying-to-talk-to-you.html" rel="nofollow" role="link">unique “vocabulary”</a> with their owner — each cat has a different set of vocalizations, purrs and behaviors.</li>
                <li>Cats have up to <a href="http://catnipsum.com/cat-facts/fact-cats-make-over-100-sounds/175" rel="nofollow" role="link">100 different vocalizations</a>&nbsp;— dogs only have 10.</li>
                <li><a href="http://pets.webmd.com/cats/features/cat-body-language#2" rel="nofollow" role="link">Cats find it threatening</a> when you make direct eye contact with them.</li>
                <li><a href="http://www.catster.com/lifestyle/5-cat-marking-behaviors-might-surprise-you" rel="nofollow" role="link">Cats mark you as their territory</a><p>	when they rub their faces and bodies against you, as they have scent glands in those areas.</p>
                </li>
                <li>Cats may <a href="https://www.thespruce.com/understanding-cat-body-language-553939" rel="nofollow" role="link">yawn as a way to end a confrontation </a>with another animal. Think of it as their “talk to the hand” gesture.</li>
                <li>Hissing is defensive, not aggressive, says Wilde. “It’s an expression of fear, stress or discomfort of a threatened cat communicating ‘stay away,'” she says.</li>
                <li>If cats are fighting, the cat that’s hissing is the more vulnerable one, says Wilde.</li>
                <li>If your cat approaches you with a straight, almost <a href="http://pets.thenest.com/mean-cats-tail-vibrates-shakes-7963.html" rel="nofollow" role="link">vibrating tail</a>, this means that she is extremely happy to see you.</li>
                <li><a href="http://www.petmd.com/cat/behavior/evr_ct_why_do_cats_knead" rel="nofollow" role="link">Kneading</a> — which some people refer to as “making biscuits” — is a sign of contentment and happiness. Cats knead their mothers when they are nursing to stimulate the let-down of milk.</li>
                <li>Meowing is a behavior that cats developed <a href="http://nymag.com/scienceofus/2015/04/your-cat-is-trying-to-talk-to-you.html" rel="nofollow" role="link">exclusively to communicate with people.</a></li>
                <li>When a cat flops over and exposes his belly, it’s not always an invitation for a belly rub. A cat does this when he’s relaxed and showing trust.</li>
                <li>When <a href="http://www.catbegood.com/misc/problems/" rel="nofollow" role="link">cats hit you with retracted claws</a>, they’re playing, not attacking.</li>
                <li>When dogs wag their tails, they may be expressing happiness. But this isn’t the case for cats! When your cat <a href="http://www.petmd.com/cat/behavior/evr_ct_what-does-it-mean-when-a-cat-wags-tail" rel="nofollow" role="link">wags her tail</a>, it’s her way of warning you that you are getting on her last nerve.</li>
                <li>When your <a href="http://www.catster.com/lifestyle/cat-language-how-cats-show-love" rel="nofollow" role="link">cat sticks his butt in your face</a>, he is doing so as a gesture of friendship.</li>
                <li>Whiskers are also <a href="http://www.catster.com/lifestyle/cat-whiskers-7-facts" rel="nofollow" role="link">good indicators of a cat’s mood</a>. When a cat is scared, he put his whiskers back. But when a cat is in hunting mode, he puts his whiskers forward.</li>
                <li>Your <a href="http://www.catster.com/lifestyle/cat-behavior-facts-body-language-tail" rel="nofollow" role="link">cat drapes its tail</a> over another cat, your dog, or you as a symbol of friendship.</li></ul>
            <ul>
                <li>Cats are very <a href="https://www.care.com/c/questions/6603/why-wont-my-cat-drink-out-of-her-bowl/" role="link">fussy about their water bowls</a>;&nbsp;some prefer to ignore their bowls entirely in favor of drinking from the sink faucet.</li>
                <li>Cats groom other cats — and sometimes people — in a ritual called <a href="https://icatcare.org/advice/cat-communication" rel="nofollow" role="link">allogrooming</a>.</li>
                <li>Cats like to sleep on things that smell like their owners, such as&nbsp;their <a href="https://www.thespruce.com/how-cats-show-love-553978" rel="nofollow" role="link">pillows and dirty laundry</a> (ick!).</li>
                <li>Cats love to sleep in<a href="https://iheartcats.com/ask-a-vet-why-does-my-cat-like-to-sleep-in-the-laundry-basket/" rel="nofollow" role="link"> laundry baskets</a>, too,&nbsp;because they’re basically hiding places with peep holes.</li>
                <li>Cats often <a href="http://www.catbehaviorassociates.com/stop-your-cat-from-biting-your-ankles/" rel="nofollow" role="link">attack your ankles</a> when they’re bored.</li>
                <li>Certain cats go crazy for foods you wouldn’t expect, like <a href="http://catsherdyou.com/why-do-some-cats-like-olives/" rel="nofollow" role="link">olives</a>, potato chips, and the hops in beer.</li>
                <li>For some reason, cats really dislike <a href="http://pets.thenest.com/repel-cats-citrus-4583.html" rel="nofollow" role="link">citrus scents</a>.</li>
                <li>If you can’t find your cat, you should <a href="http://kittentoob.com/cat-tips/why-do-cats-love-boxes-and-bags/" rel="nofollow" role="link">look in a box or a bag</a>, as these are some of their favorite hiding spots!</li>
                <li>Male cats who try&nbsp;to get to a female in heat can show<a href="http://cats.lovetoknow.com/Cat_Heat_Behavior" rel="nofollow" role="link"> very bizarre behavior</a> — for example, some have been known to slide down chimneys!</li>
                <li>Many cats like to lick their owner’s <a href="http://pets.thenest.com/cats-lick-peoples-hair-7934.html" rel="nofollow" role="link">freshly washed hair</a>.</li>
                <li>Some <a href="http://www.catster.com/lifestyle/weird-smells-cats" rel="nofollow" role="link">cats love the smell of chlorine</a>.</li>
                <li>Thieving behavior is not uncommon among cats. They will often grab objects like stuffed animals, feather dusters, and other things that <a href="http://www.pawculture.com/tips-advice/cat-behavior/kitty-kleptos-why-cats-steal-and-when-to-worry-about-it/" rel="nofollow" role="link">remind them of prey</a>.</li></ul>
            <ul>
                <li>A <a href="https://www.newscientist.com/article/mg14920131-800-green-kitten-keeps-the-vet-guessing/" rel="nofollow" role="link">green cat</a> was born in Denmark in 1995. Some people believe that high levels of copper in the water pipes nearby may have given his fur a verdigris effect.</li>
                <li>It turns out that Abraham Lincoln was a crazy cat president! He had four cats that lived in the White House with him.</li>
                <li>Maria Assunta left her cat, <a href="http://www.huffingtonpost.com/2011/12/12/italy-rich-cat-tommaso_n_1143022.html" rel="nofollow" role="link">Tomasso</a>, her entire $13 million fortune when she died in 2011.</li>
                <li>President Bill Clinton’s cat, <a href="http://mentalfloss.com/article/20953/nine-lives-socks-clinton" rel="nofollow" role="link">Socks</a>, was a media darling during the Clinton administration and was said to receive more letters than the President himself.</li>
                <li><a href="http://www.nydailynews.com/news/national/cat-mayor-alaska-town-15-years-article-1.1116263" rel="nofollow" role="link">Stubbs</a>, a 17-year-old orange tabby, is mayor of the historic district of Talkeetna, Alaska.</li></ul>
            <ul>
                <li>A <a href="https://www.yourcat.co.uk/train-your-cat-series/part-1-how-do-cats-learn.html" rel="nofollow" role="link">cat’s learning style</a> is about the same as a 2- to 3-year-old child.</li>
                <li>A cat’s <a href="https://animalwellnessmagazine.com/can-your-cats-purr-heal/" rel="nofollow" role="link">purr vibrates at a frequency of 25 to 150 hertz</a>, which is the same frequency at which muscles and bones repair themselves.</li>
                <li>A group of kittens is called a “<a href="http://gizmodo.com/have-a-kindle-of-kittens-and-10-other-hilarious-names-1588270081" rel="nofollow" role="link">kindle</a>.”</li>
                <li>A house <a href="https://www.wsj.com/articles/SB10001424052970204884404574364680587931684" rel="nofollow" role="link">cat could beat superstar runner Usain Bolt</a> in the 200 meter dash.</li>
                <li>About half of the cats in the world respond to the <a href="https://iheartcats.com/ask-a-vet-why-doesnt-my-cat-like-catnip/" rel="nofollow" role="link">scent of catnip</a>.</li>
                <li>Cat breeders are called “<a href="http://my-cat-furniture.com/what-is-a-cattery" rel="nofollow" role="link">catteries</a>.”</li>
                <li>Cats can be <a href="https://www.washingtonpost.com/news/animalia/wp/2017/03/22/you-can-train-your-cat-to-use-the-toilet-just-dont-expect-it-to-flush/?utm_term=.d87ad25e8abf" rel="nofollow" role="link">toilet-trained</a>.</li>
                <li>Cats can <a href="http://rebrn.com/re/cats-can-hydrate-themselves-by-drinking-sea-water-471776/" rel="nofollow" role="link">drink sea water</a> in order to survive. (In case you’re wondering, we can’t.)</li>
                <li>Cats<a href="http://casaveneracion.com/cats-and-social-taboos/" rel="nofollow" role="link"> don’t have an incest taboo</a>, so they may choose to mate with their brothers and sisters.</li>
                <li>Cats <a href="http://www.purina.com.au/cats/behaviour/Dreaming" rel="nofollow" role="link">dream</a>, just like people do.</li>
                <li>Cats have contributed to the <a href="http://www.bbc.com/news/science-environment-21236690" rel="nofollow" role="link">extinction of 33 different species</a>.</li>
                <li>Cats perceive people as big, hairless cats, says Wilde.</li>
                <li><a href="http://www.smithsonianmag.com/history/a-brief-history-of-house-cats-158390681/" rel="nofollow" role="link">Cats were first brought to the Americas</a> in colonial times to get rid of rodents.</li>
                <li><a href="https://en.oxforddictionaries.com/explore/what-do-you-call-a-group-of" rel="nofollow" role="link">Collective nouns for adult cats </a>include “clowder,” “clutter,” “glaring,” and “pounce.”</li>
                <li>Each <a href="http://www.catster.com/lifestyle/cats-four-facts-nose" rel="nofollow" role="link">cat’s nose print is unique</a>, much like human fingerprints.</li>
                <li>Every Scottish Fold cat in the world can trace its heritage back to the first one, which was found in Scotland in the 1960s, says <a href="http://www.tica.org/members/commitees/publications.php?zoom_highlight=cheryl+hogan" rel="nofollow" role="link">Cheryl Hogan</a>, a Scottish Fold breeder and the committee chair for the breed at The International Cat Association (TICA).</li>
                <li>It’s not uncommon to see <a href="http://www.nytimes.com/1993/10/04/opinion/l-food-store-owners-who-keep-cats-are-breaking-the-law-499893.html" rel="nofollow" role="link">cats in food stores</a> in big cities as a form of free — and adorable — pest control.</li>
                <li>Kittens in the same litter can have <a href="http://pets.thenest.com/can-cats-litter-two-different-fathers-8341.html" rel="nofollow" role="link">more than one father.</a> This is because the female cat releases multiple eggs over the course of a few days when she is in heat.</li>
                <li>Male cats are the <a href="http://www.peteducation.com/article.cfm?c=1+2131&amp;aid=1131" rel="nofollow" role="link">most sensitive to catnip</a>, while kittens under 3 months old have no response at all.</li>
                <li>Most <a href="https://www.indifferentlanguages.com/words/meow" rel="nofollow" role="link">world languages have a similar word</a> to describe the “meow” sound.</li>
                <li>People often think that they’ve stumbled over a purebred as a stray or in a shelter, but Hogan says that this is very uncommon. “Ninety-nine times out of 100 what you have found on the street will not be purebred anything,” she says. “Very seldom do breeders sell kittens that are not already spayed or neutered,” as purebred cats need to meet very strict standards.</li>
                <li>Some 700 million feral cats live in the United States, and many shelters run <a href="https://www.alleycat.org/our-work/trap-neuter-return/" rel="nofollow" role="link">trap-neuter-release</a> programs to stem the population growth.</li>
                <li><a href="http://www.sciencedirect.com/science/article/pii/S0305440314000636" rel="nofollow" role="link">Studies </a>suggest that domesticated cats first appeared around 3600 B.C.</li>
                <li>The <a href="http://www.businessinsider.com/first-cat-video-ever-thomas-edisons-boxing-cats-2013-10" rel="nofollow" role="link">first known cat video</a> was recorded in 1894.</li>
                <li>There are about 88 million pet cats in the United States, which makes them the <a href="http://www.factslides.com/i-1036" rel="nofollow" role="link">most popular pet</a> in the country!</li>
                <li>Two hundred <a href="http://www.latimes.com/local/orangecounty/la-me-adv-disney-cats-20150504-story.html" rel="nofollow" role="link">feral cats prowl the park at Disneyland</a>, doing their part to control rodents — the ones who don’t wear funny outfits and speak in squeaky voices.</li>
                <li><a href="http://www.vet.cornell.edu/fhc/Health_Information/deaf.cfm" rel="nofollow" role="link">White cats with blue eyes</a> are prone to deafness.</li></ul>

            <p style="font-weight: bold;"> Source : 101 Amazing Cat Facts: Fun Trivia About Your Feline Friend
                https://www.care.com/c/stories/6045/101-amazing-cat-facts-fun-trivia-about-your-feline-friend/</p>
        </div>
    );
});
