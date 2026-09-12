import { Calculator, BookOpen, ArrowRight, HandHeart, HelpCircle, CheckCircle2 } from 'lucide-react';
import StudentFigure from '@/components/StudentFigure';

export default function PayItForwardGraphic() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Simple clean card */}
      <div className="relative bg-white rounded-[2rem] shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden py-6 px-4 sm:py-8 sm:px-8">
        {/* Subtle gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-white to-secondary-50/40 pointer-events-none" />

        {/* Title */}
        <div className="relative flex items-center gap-2 mb-5">
          <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
            <HandHeart className="w-3 h-3 text-primary-600" strokeWidth={2.5} />
          </div>
          <p className="text-sm font-bold text-primary-700">The Pay-It-Forward Chain</p>
        </div>

        <div className="relative flex items-end justify-between gap-0.5 sm:gap-3 px-1 sm:px-4">
          {/* Student 1 — needs math */}
          <div className="flex flex-col items-center gap-2 animate-fade-in-up flex-shrink-0">
            <div className="relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-accent-400 flex items-center justify-center shadow-md ring-2 ring-white">
                <HelpCircle className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <div className="w-14 sm:w-20 md:w-24">
                <StudentFigure
                  skinColor="#FCDBC4"
                  hairColor="#7B5E3B"
                  shirtFrom="#fdba74"
                  shirtTo="#fb923c"
                  hairStyle="short"
                  expression="confused"
                  accessory="pencil"
                  size={90}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-1 -left-1 w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center">
                <Calculator className="w-3.5 h-3.5 text-accent-600" strokeWidth={2.5} />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-gray-700">Needs</p>
              <p className="text-xs text-gray-400">Math</p>
            </div>
          </div>

          {/* Connection 1 */}
          <div className="flex flex-col items-center gap-1 pb-8 flex-shrink-0">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center animate-pulse-soft">
              <HandHeart className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" strokeWidth={2} />
            </div>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-300" />
          </div>

          {/* Student 2 — helps math, needs english */}
          <div className="flex flex-col items-center gap-2 animate-fade-in-up flex-shrink-0" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 flex gap-1">
                <div className="w-6 h-6 rounded-full bg-primary-400 flex items-center justify-center shadow-md ring-2 ring-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
                <div className="w-6 h-6 rounded-full bg-secondary-400 flex items-center justify-center shadow-md ring-2 ring-white">
                  <HelpCircle className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="w-[4.5rem] sm:w-24 md:w-28">
                <StudentFigure
                  skinColor="#E8C39E"
                  hairColor="#3D2817"
                  shirtFrom="#7dcaa7"
                  shirtTo="#4eb088"
                  hairStyle="medium"
                  expression="neutral"
                  accessory="book"
                  bookColor="#2f9970"
                  size={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center">
                <Calculator className="w-3.5 h-3.5 text-primary-600" strokeWidth={2.5} />
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-secondary-600" strokeWidth={2.5} />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-gray-700">Helps & Needs</p>
              <p className="text-xs text-gray-400">Math → English</p>
            </div>
          </div>

          {/* Connection 2 */}
          <div className="flex flex-col items-center gap-1 pb-8 flex-shrink-0">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-secondary-50 border-2 border-secondary-100 flex items-center justify-center animate-pulse-soft">
              <HandHeart className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500" strokeWidth={2} />
            </div>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary-300" />
          </div>

          {/* Student 3 — helps english */}
          <div className="flex flex-col items-center gap-2 animate-fade-in-up flex-shrink-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-secondary-400 flex items-center justify-center shadow-md ring-2 ring-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <div className="w-14 sm:w-20 md:w-24">
                <StudentFigure
                  skinColor="#F0D0B0"
                  hairColor="#2D1810"
                  shirtFrom="#8eb6ff"
                  shirtTo="#5a8eff"
                  hairStyle="long"
                  expression="happy"
                  accessory="book"
                  bookColor="#376bfc"
                  size={90}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-secondary-600" strokeWidth={2.5} />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-gray-700">Helps</p>
              <p className="text-xs text-gray-400">English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
