import { useState } from 'react';
import { Button } from './ui/button';
interface QuizProps {
  onQuizComplete?: () => void;
}
export default function Quiz({ onQuizComplete }: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const question = "Você está preparado(a) para transformar seu corpo e perder gordura abdominal de forma natural?";
  const answers = [
    "Sim, quero começar agora!",
    "Ainda tenho dúvidas...",
    "Não tenho certeza"
  ];
  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setSubmitted(true);
      // Wait 1 second before showing comments section
      setTimeout(() => {
        onQuizComplete?.();
      }, 1000);
    }
  };
  return (
    <div className="bg-white py-12 border-t-4 border-[#d32f2f]">
      <div className="container mx-auto max-w-[800px] px-4">
        <div className="bg-gradient-to-br from-[#f5f5f5] to-white p-8 rounded-lg shadow-lg border border-[#e0e0e0]">
          <h2 className="text-3xl font-bold text-[#1a1d29] mb-8 text-center">
            Pergunta Rápida
          </h2>
          <div className="mb-8">
            <p className="text-xl text-[#2c3e50] mb-6 text-center font-medium">
              {question}
            </p>
            <div className="space-y-4">
              {answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(index)}
                  disabled={submitted}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all cursor-pointer ${
                    selectedAnswer === index
                      ? 'border-[#d32f2f] bg-[#fff5f5] text-[#d32f2f] font-semibold'
                      : 'border-[#e0e0e0] bg-white text-[#2c3e50] hover:border-[#d32f2f] hover:bg-[#fff5f5]'
                  } ${submitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index ? 'border-[#d32f2f]' : 'border-gray-400'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-3 h-3 rounded-full bg-[#d32f2f]" />
                      )}
                    </div>
                    <span>{answer}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null || submitted}
              className={`px-8 py-6 text-lg font-bold rounded-lg transition-all cursor-pointer ${
                selectedAnswer === null
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : submitted
                  ? 'bg-[#4caf50] text-white'
                  : 'bg-[#d32f2f] text-white hover:bg-[#b71c1c] shadow-lg hover:shadow-xl'
              }`}
            >
              {submitted ? '✓ Resposta Enviada!' : 'Continuar'}
            </Button>
          </div>
          {submitted && (
            <div className="mt-6 p-4 bg-[#e8f5e9] border border-[#4caf50] rounded-lg">
              <p className="text-center text-[#2c3e50] font-medium">
                Obrigado! Veja abaixo o que outras pessoas estão dizendo...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}