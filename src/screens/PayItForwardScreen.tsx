import { useState } from 'react';
import { MessageCircle, XCircle, HandHeart, ArrowRight, Check, Clock, Sparkles, HelpCircle } from 'lucide-react';
import { helpRequests, type HelpRequest } from '@/types';
import StudentFigure from '@/components/StudentFigure';
import LinedPaper from '@/components/LinedPaper';

interface PayItForwardScreenProps {
  onBack: () => void;
}

export default function PayItForwardScreen({ onBack }: PayItForwardScreenProps) {
  const [action, setAction] = useState<'none' | 'chat' | 'declined'>('none');
  const request: HelpRequest = helpRequests[0];

  const urgencyConfig = {
    low: { label: 'No rush', color: 'bg-success-50 text-success-600 border-success-100' },
    medium: { label: 'Moderate', color: 'bg-warning-50 text-warning-600 border-warning-100' },
    high: { label: 'Urgent', color: 'bg-error-50 text-error-600 border-error-100' },
  };

  const urgency = urgencyConfig[request.urgency];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/40 via-white to-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-8 pb-20">
        {/* Banner */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-semibold mb-4">
            <HandHeart className="w-4 h-4" />
            Time to pay it forward
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
            Someone needs your help
          </h1>
          <p className="mt-2 text-gray-500">
            You got the help you needed. Now here is your chance to pass it on.
          </p>
        </div>

        {action === 'none' && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Student header */}
            <div className="p-6 sm:p-8 border-b border-gray-50">
              <div className="flex items-start gap-4">
                {/* Student figure on lined paper */}
                <LinedPaper
                  className="w-20 h-24 rounded-2xl overflow-hidden flex items-end justify-center pt-2 pb-1 flex-shrink-0 shadow-sm"
                  showHoles={false}
                  showMargin={false}
                  lineSpacing={10}
                  lineColor="rgba(59,130,246,0.07)"
                >
                  <div className="w-14">
                    <StudentFigure
                      skinColor={request.skinColor}
                      hairColor={request.hairColor}
                      shirtFrom={request.shirtFrom}
                      shirtTo={request.shirtTo}
                      hairStyle={request.hairStyle}
                      expression={request.expression}
                      accessory="pencil"
                      size={56}
                      className="w-full h-auto"
                    />
                  </div>
                </LinedPaper>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl font-bold text-gray-800">{request.studentName}</h2>
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold border ${urgency.color}`}>
                      {urgency.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-semibold ${request.subjectColor}`}>
                      <request.subjectIcon className="w-4 h-4" strokeWidth={2.2} />
                      {request.subject}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      {request.postedAgo}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question on lined paper */}
            <div className="p-6 sm:p-8">
              <LinedPaper
                className="rounded-2xl overflow-hidden p-5 pl-8"
                showHoles
                showMargin
                marginPosition="28px"
                lineSpacing={28}
                lineColor="rgba(59,130,246,0.08)"
              >
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Their question</p>
                  <p className="text-gray-600 leading-relaxed">{request.question}</p>
                </div>
                <div className="rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 p-3 mt-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Quick summary</p>
                  <p className="text-sm text-gray-600">{request.questionSummary}</p>
                </div>
              </LinedPaper>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => setAction('chat')}
                  className="flex-1 px-6 py-3.5 rounded-xl bg-primary-500 text-white font-bold shadow-md shadow-primary-200 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-200/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start chat with {request.studentName.split(' ')[0]}
                </button>
                <button
                  onClick={() => setAction('declined')}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-white text-gray-500 font-bold border border-gray-200 hover:border-error-200 hover:text-error-600 hover:bg-error-50/50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <XCircle className="w-5 h-5" />
                  Not confident helping
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat started */}
        {action === 'chat' && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center animate-bounce-in">
            <div className="w-20 mx-auto mb-4">
              <StudentFigure
                skinColor={request.skinColor}
                hairColor={request.hairColor}
                shirtFrom={request.shirtFrom}
                shirtTo={request.shirtTo}
                hairStyle={request.hairStyle}
                expression="happy"
                accessory="book"
                size={80}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">You are now chatting with {request.studentName}!</h3>
            <p className="mt-2 text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for paying it forward. Take your time and help {request.studentName.split(' ')[0]} work through their question.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setAction('none')}
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                Back to request
              </button>
            </div>
          </div>
        )}

        {/* Declined */}
        {action === 'declined' && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center animate-bounce-in">
            <div className="w-16 h-16 rounded-2xl bg-accent-50 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-accent-500" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">No worries at all!</h3>
            <p className="mt-2 text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              It is perfectly okay to not feel ready. We will match {request.studentName.split(' ')[0]} with another tutor. You can always pay it forward when the time feels right.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setAction('none')}
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                Back to request
              </button>
              <button
                onClick={onBack}
                className="px-5 py-2.5 rounded-xl bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-colors flex items-center gap-2"
              >
                Back to home
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Encouragement footer */}
        {action === 'none' && (
          <div className="mt-8 flex items-center gap-4 p-5 rounded-2xl bg-primary-50/50 border border-primary-100/60 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
              <HandHeart className="w-5 h-5 text-primary-600" strokeWidth={2} />
            </div>
            <p className="text-sm text-primary-700 font-medium leading-relaxed">
              Every expert was once a beginner. Even a short chat can make a big difference.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
