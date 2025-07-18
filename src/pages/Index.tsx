import { Calculator, Heart, Target, BookOpen, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CalorieCalculator from "@/components/CalorieCalculator";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img alt="Slimzyo - Účinné a zdravé chudnutie" className="h-24 w-24 md:h-32 md:w-32" src="/lovable-uploads/ce0f09e7-eb3c-4ddc-b140-629c40e3fb05.png" loading="eager" decoding="async" />
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 leading-tight">Ako účinne schudnúť</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        {/* Intro Section */}
        <section className="mb-8 md:mb-12">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardHeader className="text-center px-4 py-6">
              
              <CardDescription className="text-green-100 text-base md:text-lg leading-relaxed">Krátky súhrn poznatkov, ktorý ti umožní pochopiť podstatu chudnutia. Ak trpíš akýmkoľvek ochorením, konzultuj prosím svoj plán chudnutia s lekárom.</CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Key Principles */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-gray-800">Základné princípy</h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl md:text-2xl">
                  <Calculator className="mr-2 text-blue-500 w-5 h-5 md:w-6 md:h-6" />
                  Chudnutie = Kalorický deficit
                </CardTitle>
              </CardHeader>
              <CardContent>
                
                <ul className="space-y-2 mb-4">
                   <li className="flex items-center text-sm md:text-base">
                     <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                      <span>Kalorický deficit nastane, keď prijmeš menej kalórií, ako spotrebuješ (spáliš)</span>
                    </li>
                    <li className="flex items-center text-sm md:text-base">
                      <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                      <span>Úbytok 7 700 kcal ≈ 1 kg telesného tuku</span>
                    </li>
                    <li className="flex items-center text-sm md:text-base">
                      <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                      <span>Z hľadiska chudnutia nezáleží na tom, či sú potraviny „zdravé" alebo nie; rozhodujú len kalórie</span>
                    </li>
                    <li className="flex items-center text-sm md:text-base">
                      <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                      <span>Ostatné informácie sú už len pomocné</span>
                    </li>
                 </ul>
                 
                 <div className="mt-4 p-3 md:p-4 bg-blue-50 rounded-lg">
                   <p className="font-semibold text-sm md:text-base">Príklad dennej spotreby (udržanie váhy):</p>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                       <span>Muž 80kg: 2 000 - 2 400 kcal</span>
                     </div>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                       <span>Žena 70kg: 1 600 - 1 900 kcal</span>
                     </div>
                 </div>
                 
                 <div className="mt-4 p-3 md:p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                   <p className="font-semibold text-sm md:text-base">⚠️ Dôležité upozornenie:</p>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-yellow-600 mr-3 flex-shrink-0">•</span>
                       <span>Chudni maximálne 1% telesnej váhy za týždeň</span>
                    </div>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-yellow-600 mr-3 flex-shrink-0">•</span>
                       <span>Znížená váha medzi dňami ≠ znížené množstvo tuku (info k meraniu nižšie)</span>
                     </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl md:text-2xl">
                  <Target className="mr-2 text-green-500 w-5 h-5 md:w-6 md:h-6" />
                  Udržanie svalovej hmoty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="mb-4 text-sm md:text-base">
                  Pri chudnutí dochádza aj k nežiaducemu úbytku svalovej hmoty.
                </p>
                <div>
                  <div className="mb-3">
                    <p className="font-semibold text-sm md:text-base mb-2">Odporúčam:</p>
                    <div className="space-y-1">
                         <div className="flex items-center text-sm md:text-base">
                           <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                           <span>Konzumuj 1,6g bielkovín na 1kg telesnej váhy</span>
                         </div>
                         <div className="flex items-center text-sm md:text-base">
                           <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                           <span>Cvič pravidelne (aj prechádzky sa počítajú)</span>
                         </div>
                    </div>
                  </div>
                </div>
              
                <Separator className="my-4" />
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center text-lg md:text-xl">
                    🏃‍♂️ Šport a cvičenie
                  </h4>
                  <p className="text-sm mb-3 text-inherit md:text-base">Dôležité pre zdravie, nie nevyhnutné pre chudnutie. Približne 90% úspechu chudnutia závisí od kalorického deficitu.</p>
                  
                  <div>
                     <h5 className="font-semibold mb-2 text-base md:text-lg">Prečo napriek tomu cvičiť:</h5>
                     <div className="space-y-1">
                         <div className="flex items-center text-sm md:text-base">
                           <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                           <span>Udržanie svalovej hmoty</span>
                         </div>
                         <div className="flex items-center text-sm md:text-base">
                           <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                           <span>Posilnenie kostí</span>
                         </div>
                         <div className="flex items-center text-sm md:text-base">
                           <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                           <span>Zlepšenie VO2 Max</span>
                         </div>
                         <div className="flex items-center text-sm md:text-base">
                           <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                           <span>Formovanie postavy</span>
                         </div>
                     </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Praktický manuál */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-xl md:text-2xl">
                <BookOpen className="mr-2 text-blue-500 w-5 h-5 md:w-6 md:h-6" />
                Praktický návod krok za krokom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</span>
                   <p className="text-sm md:text-base"><strong>Zisti si dennú spotrebu kalórií</strong> (kalkulačka nižšie alebo <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ChatGPT</a>)</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</span>
                   <p className="text-sm md:text-base"><strong>Odpočítaj 300 - 500 kcal</strong> od svojej dennej spotreby; to bude tvoj denný limit</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</span>
                   <p className="text-sm md:text-base"><strong>Meraj prijaté kalórie</strong> prostredníctvom aplikácií</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</span>
                   <p className="text-sm md:text-base"><strong>Váž sa denne</strong> a sleduj týždenný priemer</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</span>
                   <p className="text-sm md:text-base"><strong>Upravuj prístup</strong> - ak nechudneš, zníž príjem o ďalších 100 kcal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Essential Tools */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-gray-800">Nevyhnutné nástroje</h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Meranie kalórií a váhy - Left column */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Meranie kalórií a váhy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-lg md:text-xl">📱 Meranie prijatých kalórií</h4>
                     <p className="text-sm md:text-base mb-2">Väčšina ľudí sa mýli v odhadovaní o viac ako 40%!</p>
                     <p className="text-sm md:text-base mb-2">
                       Použite aplikácie ako <a href="https://www.myfitnesspal.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">MyFitnessPal</a> alebo <a href="https://kaloricketabulky.sk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">Kalorické Tabuľky</a> na meranie a evidovanie prijatých kalórii a <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">ChatGPT</a> ako pomôcku k nim.
                     </p>
                     <p className="text-sm md:text-base">
                       ChatGPT ti pomôže pre odhadnutie kalórii zložitého jedlá ako je napr. obedové menu, nakoľko jeho presné zloženie nepoznáš. Tie hodnoty si potom zadáš do jednej z tých aplikácii.
                     </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg md:text-xl">⚖️ Denné váženie</h4>
                     <p className="text-sm md:text-base mb-2">Nahý, bosý, vždy za rovnakých podmienok</p>
                     <p className="text-sm md:text-base">Sleduj týždenný priemer, nie denné výkyvy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kalkulačka dennej spotreby kalórií - Right column */}
            <div className="h-full">
              <CalorieCalculator />
            </div>
          </div>
        </section>

        {/* Psychology Section */}
        <section className="mb-8 md:mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">🧠 Psychológia a mentálne stratégie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg md:text-xl">Motivácia:</h4>
                   <div className="space-y-1">
                       <div className="flex items-center text-sm md:text-base">
                         <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                         <span>Maj dlhodobú víziu a silné dôvody</span>
                       </div>
                       <div className="flex items-center text-sm md:text-base">
                         <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                         <span>Odfotografuj sa pre sledovanie pokroku</span>
                       </div>
                       <div className="flex items-center text-sm md:text-base">
                         <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                         <span>Povedz niekomu o svojom cieli</span>
                       </div>
                       <div className="flex items-center text-sm md:text-base">
                         <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                         <span>Rozdeľ hlavný cieľ na menšie časti</span>
                       </div>
                   </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg md:text-xl">Stratégie:</h4>
                   <div className="space-y-1">
                       <div className="flex items-center text-sm md:text-base">
                         <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                         <span>Plánuj si oslavy a alkohol vopred</span>
                       </div>
                       <div className="flex items-center text-sm md:text-base">
                         <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                         <span>Vysvetli priateľom, že chudneš</span>
                       </div>
                       <div className="flex items-center text-sm md:text-base">
                         <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                         <span>Nemaj doma nezdravé jedlo</span>
                       </div>
                       <div className="flex items-center text-sm md:text-base">
                         <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                         <span>"Cheat meal" je v poriadku, ale s rozumom</span>
                       </div>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips Section */}
        <section className="mb-8 md:mb-12">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">💡 Užitočné tipy</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2 text-lg md:text-xl">Potlačenie chuti na sladké:</h4>
                 <div className="space-y-1">
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                       <span>Cola Zero alebo iné nápoje bez kalórií</span>
                     </div>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                       <span>Káva (bez cukru a mlieka)</span>
                     </div>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-green-500 mr-3 flex-shrink-0">•</span>
                       <span>Žuvačky bez cukru</span>
                     </div>
                 </div>
                
                <Separator className="my-4" />
                
                <h4 className="font-semibold mb-2 text-lg md:text-xl">Pravidelné úpravy:</h4>
                <p className="text-sm md:text-base">Raz mesačne aktualizuj dennú spotrebu kalórií - ako chudneš, potrebuješ menej energie.</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">❌ Časté mýty</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="space-y-2">
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                       <span>"Cvičím brucho, aby som tam schudol/a"</span>
                     </div>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                       <span>"Pre mňa to neplatí"</span>
                     </div>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                       <span>"Musím hladovať"</span>
                     </div>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                       <span>"Jojo efekt je nevyhnutný"</span>
                     </div>
                     <div className="flex items-center text-sm md:text-base">
                       <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                       <span>"Metabolizmus sa spomalí navždy"</span>
                     </div>
                 </div>
                
                
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-6 md:mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardHeader className="text-center px-4 py-6">
              <CardTitle className="flex items-center justify-center text-xl md:text-2xl">
                <Users className="mr-2 w-5 h-5 md:w-6 md:h-6" />
                Prečo som vytvoril túto stránku
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center px-4 pb-6">
               <p className="mb-4 text-sm md:text-base leading-relaxed">
                 Internet je zahltený PR článkami, ktoré sa skôr <i>"snažia predať ryby, ako naučiť loviť"</i>. Ja sa snažím zachytiť podstatu, ktorá je, dúfam, zrozumiteľná a skutočne funguje. Možno obsah rozšírim o blog, kde sa budem venovať detailom.
               </p>
               <p className="mb-4 text-sm md:text-base leading-relaxed">
                 <strong>Pozor, nie som lekár!</strong> Ak si lekár, tvoj feedback má hodnotu zlata. Každá konštruktívna kritika je vítaná (aj poďakovanie 😊).
               </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6">
                <Button variant="secondary" className="flex items-center text-gray-800 hover:bg-white/90 w-full sm:w-auto">
                  <Mail className="mr-2 w-4 h-4" />
                  <a href="mailto:info@slimzyo.com" className="no-underline">info@slimzyo.com</a>
                </Button>
                <Button variant="secondary" className="flex items-center text-gray-800 hover:bg-white/90 w-full sm:w-auto">
                  <Heart className="mr-2 w-4 h-4" />
                  <a href="https://buymeacoffee.com/slimzyo" target="_blank" rel="noopener noreferrer" className="no-underline">Podporte nás</a>
                </Button>
              </div>
              
              <Separator className="my-6 bg-white/20" />
              
               <p className="text-xs md:text-sm opacity-90">
                 Zdieľaj tento článok - pomôžeš tak viacerým ľuďom! 💪
               </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 md:py-6">
        <div className="container mx-auto px-4 text-center">
           <p className="text-xs md:text-sm mb-2">
             Obsah pravidelne aktualizujem pre lepšiu zrozumiteľnosť a presnosť.
           </p>
          <p className="text-xs opacity-75">Založené na vedeckých poznatkoch a osobných skúsenostiach. © 2025 Slimzyo</p>
        </div>
      </footer>
    </div>;
};
export default Index;