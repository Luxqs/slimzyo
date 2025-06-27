
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CalorieCalculator = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateCalories = () => {
    if (!gender || !age || !weight || !height || !activity) return;

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    // Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === 'male') {
      bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5;
    } else {
      bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161;
    }

    // Activity multipliers
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    };

    const tdee = Math.round(bmr * activityMultipliers[activity]);
    setResult(tdee);
  };

  const reset = () => {
    setGender('');
    setAge('');
    setWeight('');
    setHeight('');
    setActivity('');
    setResult(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <Calculator className="mr-2 text-blue-500" />
          Kalkulačka dennej spotreby kalórií
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Pohlavie</Label>
              <RadioGroup value={gender} onValueChange={setGender} className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Muž</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Žena</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="age" className="text-base font-medium">Vek (roky)</Label>
              <Input
                id="age"
                type="number"
                placeholder="napr. 30"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="weight" className="text-base font-medium">Váha (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="napr. 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="height" className="text-base font-medium">Výška (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="napr. 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-base font-medium">Úroveň aktivity</Label>
              <Select value={activity} onValueChange={setActivity}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Vyberte úroveň aktivity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedavé (kancelária, bez cvičenia)</SelectItem>
                  <SelectItem value="light">Ľahká aktivita (1-3x týždenne)</SelectItem>
                  <SelectItem value="moderate">Stredná aktivita (3-5x týždenne)</SelectItem>
                  <SelectItem value="active">Aktívny (6-7x týždenne)</SelectItem>
                  <SelectItem value="very_active">Veľmi aktívny (2x denne, intenzívne)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button onClick={calculateCalories} className="bg-blue-500 hover:bg-blue-600">
            Vypočítať
          </Button>
          <Button variant="outline" onClick={reset}>
            Resetovať
          </Button>
        </div>

        {result && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-bold text-center mb-4">Výsledok</h3>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{result} kcal/deň</p>
              <p className="text-gray-600 mt-2">Vaša denná spotreba kalórií</p>
            </div>
            <div className="mt-4 p-4 bg-white rounded border border-green-200">
              <h4 className="font-semibold mb-2">Pre chudnutie:</h4>
              <p className="text-sm">• Mierny deficit: <strong>{result - 300} - {result - 500} kcal/deň</strong></p>
              <p className="text-sm">• Očakávaná strata: 0.3 - 0.5 kg/týždeň</p>
            </div>
          </div>
        )}

        <div className="text-xs text-gray-500 text-center">
          <p>Výsledok je orientačný. Používa Mifflin-St Jeor rovnicu.</p>
          <p>Pre presnejší výpočet konzultujte s odborníkom.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalorieCalculator;
