import { Calculator, BookOpen, ArrowRight, HandHeart } from 'lucide-react';

export default function PayItForwardGraphic() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-[2.5rem] blur-sm" />

      <div className="relative flex items-center justify-between gap-2 sm:gap-4 p-6 sm:p-8">
        {/* Student 1 — needs math help */}
        <div className="flex flex-col items-center gap-3 animate-fade-in-up">
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent-300 to-accent-500 flex items-center justify-center shadow-lg shadow-accent-200/50 animate-float">
              <span className="text-2xl sm:text-3xl font-bold text-white">A</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center">
              <Calculator className="w-4 h-4 text-accent-600" strokeWidth={2.5} />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-700">Needs</p>
            <p className="text-xs text-gray-400">Math</p>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="flex flex-col items-center -mt-6">
          <div className="w-14 h-14 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center animate-pulse-soft">
            <HandHeart className="w-6 h-6 text-primary-500" strokeWidth={2} />
          </div>
          <ArrowRight className="w-5 h-5 text-primary-300 mt-1" />
        </div>

        {/* Student 2 — helps math, needs english */}
        <div className="flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center shadow-xl shadow-primary-200/50 animate-float-delayed">
              <span className="text-3xl sm:text-4xl font-bold text-white">B</span>
            </div>
            <div className="absolute -top-2 -left-2 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center">
              <Calculator className="w-4 h-4 text-primary-600" strokeWidth={2.5} />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-secondary-600" strokeWidth={2.5} />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-700">Helps & Needs</p>
            <p className="text-xs text-gray-400">Math → English</p>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="flex flex-col items-center -mt-6">
          <div className="w-14 h-14 rounded-full bg-secondary-50 border-2 border-secondary-100 flex items-center justify-center animate-pulse-soft">
            <HandHeart className="w-6 h-6 text-secondary-500" strokeWidth={2} />
          </div>
          <ArrowRight className="w-5 h-5 text-secondary-300 mt-1" />
        </div>

        {/* Student 3 — helps english */}
        <div className="flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-secondary-300 to-secondary-500 flex items-center justify-center shadow-lg shadow-secondary-200/50 animate-float">
              <span className="text-2xl sm:text-3xl font-bold text-white">C</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-secondary-600" strokeWidth={2.5} />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-700">Helps</p>
            <p className="text-xs text-gray-400">English</p>
          </div>
        </div>
      </div>
    </div>
  );
}
