import { Calculator, Heart, Target, BookOpen, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CalorieCalculator from "@/components/CalorieCalculator";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
              <!-- Google Tag Manager -->
              <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NM3M96NN');</script>
              <!-- End Google Tag Manager -->
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Slimzyo, ako schudnúť
          </h1>
          
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NM3M96NN"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        {/* Intro Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                <Heart className="inline mr-2" />
                Schudnúť je zdravé, sexy a relatívne jednoduché :)
              </CardTitle>
              <CardDescription className="text-green-100 text-lg">Sumár otestovaných poznatkov ktoré fungujú a umožnia spoznať hlavné základy chudnutia. Ak trpíte ochorením, prosím, konzultujte to s lekárom.</CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Key Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Základné princípy</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 text-blue-500" />
                  Kaloricý deficit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4"><strong>Chudnutie = kaloricý deficit</strong></p>
                <p>Spapáš menej kalórií ako spáliš. Je to tak jednoduché.</p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold">Príklad dennej spotreby (udržanie váhy):</p>
                  <p>• Muž 80kg: 2000-2400 kcal</p>
                  <p>• Žena 70kg: 1600-1900 kcal</p>
                  <p className="mt-2 text-sm text-gray-600">1kg tuku = 7700 kcal</p>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="font-semibold">⚠️ Dôležité:</p>
                  <p>• Chudni max 1% váhy za týždeň</p>
                  <p>• Znížená váha medzi dňami ≠ znížené množstvo tuku</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 text-green-500" />
                  Udržanie svalov 1
                </CardTitle>
              </CardHeader>
              <CardContent className="rounded-lg">
                <p className="mb-4">Pri chudnutí dochádza aj k nežiadúcemu ubytku svalovej homot.</p>

<p className="mb-4">
<strong>Odporúčam:</strong> <br/>
• Jedz 1,6g bielkovín na 1kg váhy <br/>
• Cvič pravidelne (aj prechádzky sa počítajú)</p>
                
              </CardContent>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 text-green-500" />
                  🏃‍♂️ Šport a cvičenie
                </CardTitle>
              </CardHeader>
               <CardContent className="rounded-lg">
                 <p className="mb-4">Dôležité pre zdravie, nie nevyhnutné pre chudnutie. 90% úspechu chudnutia je kalorický deficit.</p>
                 <p className="mb-4"><strong>Prečo aj tak cvičiť:</strong> <br/>
                   • Udržanie svalovej hmoty <br/>
                   • Spevnenie kostí <br/>
                   • Zlepšenie VO2 Max <br/>
                   • Formovanie postavy</strong></p>
                </CardContent>
            </Card>
          </div>

          {/* Praktický manuál */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 text-blue-500" />
                Praktický manuál
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <p><strong>Zisti si denný výdaj kalórií</strong> (kalkulačka dole alebo ChatGPT prompt)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <p><strong>Odčítaj 300-500 kcal</strong> od dennej spotreby</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <p><strong>Meraj prijaté kalórie</strong> cez aplikácie a/lebo fotky jedál do cez ChatGPT</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <p><strong>Váž sa denne</strong> a sleduj týždenný priemer</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <p><strong>Upravuj</strong> - ak nechudneš, zníž príjem o ďalších 100 kcal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Essential Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Nevyhnutné nástroje</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Meranie kalórií a váhy - Left column */}
            <Card>
              <CardHeader>
                <CardTitle>Meranie kalórií a váhy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">📱 Meranie kalórií</h4>
                    <p>Väčšina ľudí sa mýli v odhadovaní cez 40%!</p>
                    <p className="mt-2">Použite aplikácie ako <a href="https://www.myfitnesspal.com/?utm_source=akoschudnut.sk&utm_medium=web&utm_campaign=affiliate&utm_content=recommendation_by_akoschudnut.sk">MyFitnessPal.com</a>, KalorickeTabulky.sk a ChatGPT (fotka menučka) na meranie zjedený kalórii</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">⚖️ Denné váženie</h4>
                    <p>Holo, boso, vždy za rovnakých podmienok</p>
                    <p className="mt-2">Sleduj týždenný priemer, nie denné výkyvy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kalkulačka dennej spotreby kalórií - Right column */}
            <div>
              <CalorieCalculator />
            </div>
          </div>
        </section>

        {/* Exercise Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>🏃‍♂️ Šport a cvičenie</CardTitle>
              <CardDescription>Dôležité pre zdravie, nie nevyhnutné pre chudnutie. 90% úspechu chudnutia je kalorický deficit.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Prečo aj tak cvičiť:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Udržanie svalovej hmoty</li>
                  <li>Spevnenie kostí</li>
                  <li>Zlepšenie VO2 Max</li>
                  <li>Formovanie postavy</li>
                </ul>
              </div>
              
              
            </CardContent>
          </Card>
        </section>

        {/* Psychology Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>🧠 Psychológia a mentálne pomôcky</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Motivácia:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Maj dlhodobú víziu a silné dôvody</li>
                    <li>Odfotografuj sa pre sledovanie pokroku</li>
                    <li>Povedz niekomu o svojom cieli</li>
                    <li>Rozdelí si hlavný cieľ na menšie</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stratégie:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Plánuj si oslavy a alkohol vopred</li>
                    <li>Vysvetli priateľom, že chudneš</li>
                    <li>Nemaj doma nezdravé jedlo</li>
                    <li>Cheat meal je OK, ale s rozumom</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>💡 Užitočné tipy</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Potlačenie chuti na sladké:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cola Zero</li>
                  <li>Káva</li>
                  <li>Žuvačky bez cukru</li>
                </ul>
                
                <Separator className="my-4" />
                
                <h4 className="font-semibold mb-2">Pravidelné úpravy:</h4>
                <p className="text-sm">Raz mesačne aktualizuj dennú spotrebu kalórií - ako chudneš, potrebuješ menej energie.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>❌ Časté mýty</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• "Cvičím brucho, aby som tam schudla"</li>
                  <li>• "Pre mňa to neplatí"</li>
                  <li>• "Musím hladovať"</li>
                  <li>• "Jojo efekt je nevyhnutný"</li>
                  <li>• "Metabolizmus sa spomalí navždy*"</li>
                </ul>
                
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Pravda:</strong> Všetko sa dá riešiť rozumným prístupom a trpezlivosťou.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center">
                <Users className="mr-2" />
                Prečo to píšem
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">
                Internet je zahltený PR článkami ktoré sa kôr <i></>"snažia predať ryby ako naučiť loviť"</i>. Ja sa snažím zachytiť podstatu, ktorá je, dúfam zrozumiteľná a funguje. Možno to rozšírim o blog kde sa budem venovať detailom.
              </p>
              <p className="mb-4">
                <strong>Pozor, nie som lekár!</strong> Ak ty si, tvoj feedback má hodnotu zlata. Každá konštruktívna kritiku je vítaná (aj poďakovanie :) ).
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <Button variant="secondary" className="flex items-center">
                  <Mail className="mr-2 w-4 h-4" />
                  info@slimzyo.com
                </Button>
              </div>
              
              <Separator className="my-6 bg-white/20" />
              
              <p className="text-sm opacity-90">
                Zdieľaj tento článok - pomôžeš tak viacerým ľuďom! 💪
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Obsah pravidelne aktualizujem pre lepšiu zrozumiteľnosť a presnosť.
          </p>
          <p className="text-xs mt-2 opacity-75">Založené na vedeckých poznatkov a osobných zkušenostiach.
Luxqs</p>
        </div>
      </footer>
    </div>;
};
export default Index;
