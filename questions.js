// Organizace informací - Databáze otázek
// Aktualizováno pro nový předmět: Informační etika
// Celkem otázek: 25

// KONFIGURACE APLIKACE (Template Config)
const APP_CONFIG = {
    title: "⚖️ Informační etika",
    subtitle: "Kvíz pro přípravu",
    author: "User",
    version: "2.2"
};

const QUESTIONS = [
    // --- Batch 1 (Images from second upload, IDs 1-15) ---
    {
        id: 1,
        category: "Knihovnictví a Etika",
        question: "Jaký je postoj ALA k přístupu dětí k informacím?",
        answers: [
            "Děti mají právo na informace bez ohledu na přání rodičů.",
            "Přístup k informacím dětí by měl být rozhodnut pouze rodiči.",
            "Knihovny mohou omezit přístup dětí na základě věkového kritéria."
        ],
        correct: 1,
        hint: "Knihovna nestojí na místě rodičů ('in loco parentis').",
        explanation: "Podle Library Bill of Rights mají rodiče (a pouze rodiče) právo a zodpovědnost omezovat přístup svých dětí ke zdrojům, nikoliv knihovna."
    },
    {
        id: 2,
        category: "Autorské právo a Ekonomika",
        question: "Jaké ekonomické dopady může mít sdílení obsahu, který se již neprodává?",
        answers: [
            "Zvýšení hodnoty intelektuálního vlastnictví.",
            "Minimální nebo nulovou finanční škodu.",
            "Významnou finanční škodu pro vlastníka práv."
        ],
        correct: 1,
        hint: "Pokud se dílo neprodává, ušlý zisk je sporný.",
        explanation: "U děl, která již nejsou na trhu (abandonware, out-of-print), je finanční škoda pro vlastníka práv často minimální nebo nulová."
    },
    {
        id: 3,
        category: "Cenzura a Etika",
        question: "Co je považováno za „inherentně špatný obsah“ v kontextu cenzury?",
        answers: [
            "Obsah, který je považován za neetický, pokud vyvolává negativní důsledky.",
            "Obsah, který je urážlivý, ponižující nebo vykořisťující vůči lidským bytostem, což vede k narušení základních morálních principů společnosti.",
            "Obsah, který má potenciál vyvolat politickou destabilizaci a porušení veřejného pořádku."
        ],
        correct: 1,
        hint: "Jde o obsah, který je špatný sám o sobě (mala in se), ne jen kvůli následkům.",
        explanation: "Inherentně špatný obsah (např. dětská pornografie) je považován za neetický z podstaty, protože narušuje důstojnost a základní principy."
    },
    {
        id: 4,
        category: "Informační gramotnost",
        question: "Jaké je hlavní pravidlo pro rozpoznání běžné znalosti (common knowledge)?",
        answers: [
            "Informace známá pouze v jedné konkrétní komunitě odborníků.",
            "Informace je zmíněna v odborné literatuře jednou.",
            "Informace je opakovaná v pěti a více nezávislých zdrojích."
        ],
        correct: 2,
        hint: "Pravidlo palce pro citování.",
        explanation: "Často se uvádí pravidlo, že pokud se informace vyskytuje v 5 a více nezávislých zdrojích bez citace, lze ji považovat za běžnou znalost."
    },
    {
        id: 5,
        category: "Open Source a Software",
        question: "Co motivovalo vznik Open Source Software (OSS) v roce 1998?",
        answers: [
            "Aby byl proprietární software dostupný širší veřejnosti.",
            "Aby se prosadil svobodný software v komerčních firmách, které nechtěly dodržovat všechny principy svobodného softwaru.",
            "Aby byl software úplně zdarma a dostupný pro všechny."
        ],
        correct: 1,
        hint: "Snaha zbavit se 'stigmatu' ideologického Free Software a oslovit byznys.",
        explanation: "Termín Open Source byl zaveden (ESR a dalšími) jako marketingově přijatelnější varianta Free Software pro komerční sféru."
    },
    {
        id: 6,
        category: "Informační spravedlnost",
        question: "Co znamená pojem „informační spravedlnost“?",
        answers: [
            "Rovnost mezi jednotlivci v přístupu k informacím.",
            "Zajištění rovného přístupu k vědeckým publikacím.",
            "Spravedlivé rozdělení informací mezi státy."
        ],
        correct: 0,
        hint: "Nejobecnější definice férovosti.",
        explanation: "Informační spravedlnost se týká rovného a férového přístupu k informacím pro všechny jednotlivce."
    },
    {
        id: 7,
        category: "Etické teorie",
        question: "Jak se nazývá základní princip hédonistické etiky?",
        answers: [
            "Užívej si rozkoší, dokud neohrožují ostatní.",
            "Všechny rozkoše mají stejnou hodnotu, proto je třeba si užít maximum.",
            "Zvol největší rozkoš a přitom neztrácej kontrolu nad svými činy."
        ],
        correct: 2,
        hint: "Epikurejský přístup: slast je cíl, ale s rozumem.",
        explanation: "Hédonismus vidí slast jako dobro, ale (zvláště u Epikura) zdůrazňuje rozumnou volbu a vyhýbání se strasti (kontrolu)."
    },
    {
        id: 8,
        category: "Autorské právo",
        question: "Jaký je zásadní etický argument proti konceptu „anticopyrightu“?",
        answers: [
            "Ignoruje ekonomické důsledky pro tvůrce obsahu.",
            "Zpochybňuje právní základ vlastnických práv na duševní vlastnictví.",
            "Prosazuje striktní ochranu autorských práv na úkor volného toku informací."
        ],
        correct: 0,
        hint: "Z čeho by autoři žili?",
        explanation: "Hlavním argumentem je, že bez ochrany práv by tvůrci neměli ekonomickou motivaci či prostředky k tvorbě (tragedy of the commons)."
    },
    {
        id: 9,
        category: "Velká data a Soukromí",
        question: "Jaký je hlavní etický problém spojený s analýzou velkých dat (Big Data)?",
        answers: [
            "Neefektivita algoritmů při predikci trendů.",
            "Možnost reidentifikace jednotlivců a porušení jejich soukromí.",
            "Rozdíl mezi kvalitními a nekvalitními daty."
        ],
        correct: 1,
        hint: "Anonymizovaná data často nejsou tak anonymní, jak se zdá.",
        explanation: "Klíčovým rizikem je, že spojením velkého množství dat lze zpětně identifikovat konkrétní osoby (reidentifikace)."
    },
    {
        id: 10,
        category: "Knihovnictví a Etika",
        question: "Jak by měly veřejné knihovny zacházet s literaturou popírající holocaust?",
        answers: [
            "Zahrnout ji a označit jako nepřesnou.",
            "Vyřadit ji z fondu bez ohledu na kontext.",
            "Zařadit ji pouze na základě žádosti uživatelů."
        ],
        correct: 0,
        hint: "Knihovny bojují proti cenzuře, ale také proti dezinformacím.",
        explanation: "Eticky složitá otázka. Častý přístup je 'poskytnout přístup, ale uvést kontext/fakta', ačkoliv štítkování je sporné. Vyřazení je forma cenzury (pokud to nenařizuje zákon)."
    },
    {
        id: 11,
        category: "Právo a Technologie",
        question: "Jak může „kód jako zákon“ ovlivnit vývoj technologií v digitálním prostředí?",
        answers: [
            "Legislativa se stává nadbytečnou, protože technologie reguluje chování uživatelů sama.",
            "Vývojáři integrují právní a etické normy přímo do návrhu digitálních systémů.",
            "Technologie se přizpůsobí aktuálním právním normám bez dalšího lidského zásahu."
        ],
        correct: 1,
        hint: "Value Sensitive Design.",
        explanation: "Koncept 'Code is Law' implikuje, že normy mohou být technicky vynuceny architekturou systému (security by design, privacy by design)."
    },
    {
        id: 12,
        category: "Autorské právo a Citace",
        question: "Který z následujících činů je výjimkou, kdy není vyžadováno uvedení autora?",
        answers: [
            "Použití běžně známých historických dat.",
            "Zkopírování úryvků textů z knihy bez citace.",
            "Publikování anonymních básní jako vlastního díla."
        ],
        correct: 0,
        hint: "Fakta nelze autorsky chránit.",
        explanation: "Uvedení autora není třeba u obecně známých faktů a historických dat, která nejsou autorským dílem."
    },
    {
        id: 13,
        category: "Nástroje pro výzkum",
        question: "Který z následujících nástrojů je softwarem pro správu citací?",
        answers: [
            "Google Docs",
            "Zotero",
            "Adobe Acrobat"
        ],
        correct: 1,
        hint: "Začíná na Z.",
        explanation: "Zotero je známý open-source nástroj pro správu bibliografických citací."
    },
    {
        id: 14,
        category: "Cenzura a Svoboda",
        question: "Jak souvisí Millův princip ublížení (Harm Principle) s cenzurou?",
        answers: [
            "Millův princip ublížení zdůrazňuje, že jediné ospravedlnitelné omezení svobody jednotlivce je, když jeho chování přímo škodí ostatním.",
            "Millův princip ublížení vyžaduje, aby veškerý obsah byl svobodně dostupný, pokud není přímo nelegální.",
            "Millův princip ublížení tvrdí, že veškerá cenzura je odůvodněná, pokud slouží ochraně veřejnosti před nebezpečím."
        ],
        correct: 0,
        hint: "Svoboda končí tam, kde začíná svoboda druhého.",
        explanation: "John Stuart Mill v 'On Liberty' formuloval, že moc lze proti vůli člena civilizované společnosti uplatnit jen tehdy, má-li se zabránit újmě na jiných."
    },
    {
        id: 15,
        category: "Informační modely",
        question: "Co reprezentuje písmeno „P“ v RTP modelu?",
        answers: [
            "Informace jako proces",
            "Informace jako problém",
            "Informace jako produkt"
        ],
        correct: 0,
        hint: "Časté rozdělení: Proces, Věc/Produkt, Znalost.",
        explanation: "V kontextu informační vědy se často rozlišuje informace jako proces (komunikace) a informace jako produkt (záznam)."
    },
    // --- Batch 2 (Images from first upload, IDs 16-25) ---
    {
        id: 16,
        category: "Autorské právo a Citace",
        question: "Který z následujících činů je výjimkou, kdy není vyžadováno uvedení autora?",
        answers: [
            "Použití běžně známých historických dat.",
            "Zkopírování úryvků textů z knihy bez citace.",
            "Publikování anonymních básní jako vlastního díla."
        ],
        correct: 0,
        hint: "Fakta nelze autorsky chránit.",
        explanation: "Uvedení autora není třeba u obecně známých faktů a historických dat, která nejsou autorským dílem."
    },
    {
        id: 17,
        category: "Modely a Teorie",
        question: "Jakým způsobem model COVER zohledňuje veřejné mínění?",
        answers: [
            "Skrze mediální úvodník.",
            "Prostřednictvím analýzy alternativ.",
            "Pomocí pravidel založených na kategorickém imperativu."
        ],
        correct: 0,
        hint: "E = Editorial.",
        explanation: "Editorial (Úvodník) v modelu COVER testuje, jak by se rozhodnutí vyjímalo, kdyby bylo zveřejněno v médiích."
    },
    {
        id: 18,
        category: "Cenzura a Svoboda slova",
        question: "Jaký je hlavní teleologický argument proti cenzuře?",
        answers: [
            "Cenzura je efektivní nástroj pro ochranu jednotlivců před vykořisťováním.",
            "Škoda způsobená odepřením přístupu k informacím je téměř vždy větší než škoda způsobená povolením přístupu.",
            "Cenzura zaručuje, že nikdo nebude mít přístup k informacím, které jsou škodlivé."
        ],
        correct: 1,
        hint: "Vážíme důsledky (teleologie).",
        explanation: "Argument váží dopady a tvrdí, že negativní následky cenzury (ztráta informací) převyšují rizika svobody."
    },
    {
        id: 19,
        category: "Knihovnictví a Etika",
        question: "Jaký problém přináší štítkování a označování materiálů jako „nevhodné“ v knihovních fondech?",
        answers: [
            "Usnadňuje uživatelům orientaci ve fondu.",
            "Nutí knihovníky rozhodovat o odborných sporech.",
            "Zajišťuje přesnou reprezentaci názorových rozdílů."
        ],
        correct: 1,
        hint: "Knihovník není soudce.",
        explanation: "Štítkování nutí knihovníky zaujímat hodnotící stanoviska, což může být subjektivní a narušovat neutralitu."
    },
    {
        id: 20,
        category: "Etické teorie",
        question: "Jaké pravidlo podle Kanta představuje zlaté pravidlo deontologické etiky?",
        answers: [
            "Jednej tak, aby maxima tvé vůle mohla být zákonem obecného zákonodárství.",
            "Jednej tak, aby tvé činy přinášely co největší blaho co největšímu počtu lidí.",
            "Jednej tak, aby tvé činy vyhovovaly většinovému konsensu."
        ],
        correct: 0,
        hint: "Kategorický imperativ.",
        explanation: "Kantův kategorický imperativ vyžaduje univerzalizovatelnost jednání."
    },
    {
        id: 21,
        category: "Umělá inteligence",
        question: "Jaký je hlavní rozdíl mezi Good old fashion AI (GOFAI) a neuronovými sítěmi?",
        answers: [
            "GOFAI je metoda pro autonomní vozidla, neuronové sítě jsou využívány pouze pro analýzu dat.",
            "GOFAI je založeno na strojovém učení, zatímco neuronové sítě na reprezentaci znalostí.",
            "GOFAI se zaměřuje na symbolickou reprezentaci, zatímco neuronové sítě se soustředí na strojové učení."
        ],
        correct: 2,
        hint: "Symboly vs. Učení z dat.",
        explanation: "GOFAI pracuje se symboly a logikou, neuronové sítě (AI 2. generace) se učí vzory z dat."
    },
    {
        id: 22,
        category: "Informační etika",
        question: "Co znamená „glokalizace“ v kontextu informační etiky?",
        answers: [
            "Vytvoření univerzálního etického kódu pro všechny kultury.",
            "Mít globální výhled a jednat lokálně.",
            "Mít lokální výhled a jednat globálně."
        ],
        correct: 1,
        hint: "Think Global, Act Local.",
        explanation: "Glokalizace spojuje globální myšlení s respektem k lokálnímu kontextu."
    },
    {
        id: 23,
        category: "Právo a Internet",
        question: "Co je sekundární odpovědnost?",
        answers: [
            "Odpovědnost za nedostatečné šifrování souborů.",
            "Přímé porušení autorských práv uživatelem.",
            "Zodpovědnost těch, kteří vědomě napomáhají porušování práv."
        ],
        correct: 2,
        hint: "Odpovědnostprostředníka/pomocníka.",
        explanation: "Sekundární odpovědnost nesou ti, kteří porušování práv umožňují (např. platformy), aniž by sami přímo porušovali."
    },
    {
        id: 24,
        category: "Knihovnictví a Etika",
        question: "Co je vytýkáno konceptu „balance“ ve fondech knihoven?",
        answers: [
            "Ignoruje požadavky uživatelů na fond.",
            "Může prezentovat ověřená fakta jako pouhé názory.",
            "Nic, bez zkreslení podporuje pluralitu názorů."
        ],
        correct: 1,
        hint: "False balance.",
        explanation: "Snaha o vyváženost může vést k tomu, že vědecká fakta jsou stavěna na roveň okrajovým/nepravdivým názorům (falešná vyváženost)."
    },
    {
        id: 25,
        category: "Právo a Technologie",
        question: "Jaký je vztah mezi kódem a zákonem podle Lessiga v rámci Value Sensitive Design?",
        answers: [
            "Kód není schopen reflektovat právní normy.",
            "Kód může být navržen tak, aby zahrnoval zákonné normy přímo do technologie.",
            "Kód a zákon nemají žádnou vzájemnou souvislost."
        ],
        correct: 1,
        hint: "Code is Law.",
        explanation: "Lessig tvrdí, že kód může regulovat chování stejně efektivně jako zákon."
    }
];
