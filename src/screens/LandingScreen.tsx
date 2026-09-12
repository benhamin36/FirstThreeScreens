import { ArrowRight, Sparkles, Moon, Clock, Users, HandHeart } from 'lucide-react';
import PayItForwardGraphic from '@/components/PayItForwardGraphic';
import { subjects } from '@/types';

interface LandingScreenProps {
  onFindHelp: () => void;
  onSelectSubject: (subjectId: string) => void;
}

export default function LandingScreen({ onFindHelp, onSelectSubject }: LandingScreenProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-3xl -z-0" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-secondary-100/30 rounded-full blur-3xl -z-0" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-semibold mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Students helping students, 24/7
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-[1.1] tracking-tight animate-fade-in-up">
              Get help now.
              <br />
              <span className="text-primary-500">Pay it forward</span> later.
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Stuck on a problem at 2 AM? Connect with a peer who has been there.
              Once you master it, help someone else on their journey.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={onFindHelp}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary-500 text-white font-bold text-base shadow-lg shadow-primary-200 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-200/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Find a tutor
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onSelectSubject('math')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-gray-700 font-bold text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                Browse subjects
              </button>
            </div>
          </div>

          {/* Pay-it-forward graphic */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <PayItForwardGraphic />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">How it works</h2>
          <p className="mt-3 text-gray-500">Three simple steps. No pressure, no cost.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, color: 'bg-primary-50 text-primary-600', title: 'Get help', desc: 'Pick a subject and connect with an available peer tutor in minutes.' },
            { icon: Users, color: 'bg-secondary-50 text-secondary-600', title: 'Learn together', desc: 'Chat one-on-one and work through the problem at your own pace.' },
            { icon: HandHeart, color: 'bg-accent-50 text-accent-600', title: 'Pay it forward', desc: 'When you are ready, help another student with a subject you know.' },
          ].map((step, i) => (
            <div
              key={step.title}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                <step.icon className="w-6 h-6" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              <div className="absolute top-6 right-6 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-300">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects grid */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">What do you need help with?</h2>
          <p className="mt-3 text-gray-500">Pick a subject to find available tutors.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {subjects.map((subject, i) => (
            <button
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <subject.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">{subject.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Night owl callout */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary-500 to-secondary-700 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Moon className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Late night? Early morning? No problem.</h3>
              <p className="mt-2 text-secondary-100 leading-relaxed">
                Teachers and TAs have office hours. PeerUp does not. There is always a fellow student awake and ready to help.
              </p>
            </div>
            <button
              onClick={onFindHelp}
              className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-secondary-600 font-bold shadow-lg hover:bg-secondary-50 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              Get started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
