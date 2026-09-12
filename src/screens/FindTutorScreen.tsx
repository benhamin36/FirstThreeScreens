import { useState } from 'react';
import { Star, MessageCircle, Clock, Check, ArrowLeft, Search } from 'lucide-react';
import { subjects, tutors, type Tutor } from '@/types';

interface FindTutorScreenProps {
  selectedSubject: string;
  onBack: () => void;
  onChat: (tutor: Tutor) => void;
}

export default function FindTutorScreen({ selectedSubject, onBack, onChat }: FindTutorScreenProps) {
  const [activeSubject, setActiveSubject] = useState(selectedSubject || 'math');
  const [chatStarted, setChatStarted] = useState<Tutor | null>(null);

  const activeSubjectData = subjects.find((s) => s.id === activeSubject) || subjects[0];

  const matchedTutors = tutors.filter((t) => {
    const subjectName = activeSubjectData.name.toLowerCase();
    return t.subjects.some((s) => s.toLowerCase().includes(subjectName.split(' ')[0].toLowerCase()));
  });

  const displayTutors = matchedTutors.length > 0 ? matchedTutors : tutors;

  const handleChat = (tutor: Tutor) => {
    setChatStarted(tutor);
    onChat(tutor);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-20">
        {/* Back */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>

        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">Find your tutor</h1>
          <p className="mt-2 text-gray-500">Here are the best available peers for your subject.</p>
        </div>

        {/* Subject selector */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-3">
            <Search className="w-4 h-4" />
            Subject
          </div>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeSubject === subject.id
                    ? `${subject.color} ring-2 ring-offset-1 ring-primary-200`
                    : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-200'
                }`}
              >
                <subject.icon className="w-4 h-4" strokeWidth={2.2} />
                {subject.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tutor cards */}
        {chatStarted ? (
          <div className="rounded-2xl bg-white border border-gray-100 p-8 text-center animate-bounce-in">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${chatStarted.avatarColor} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <span className="text-xl font-bold text-white">{chatStarted.initials}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Chat started with {chatStarted.name}!</h3>
            <p className="mt-2 text-gray-500 text-sm max-w-md mx-auto">
              You are now connected. {chatStarted.responseTime.toLowerCase()}.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setChatStarted(null)}
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                Back to tutors
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-400">
                {displayTutors.length} tutor{displayTutors.length !== 1 ? 's' : ''} available
              </p>
              <div className="flex items-center gap-1.5 text-xs text-success-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                All online now
              </div>
            </div>

            {displayTutors.map((tutor, i) => (
              <div
                key={tutor.id}
                className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300 animate-fade-in-up overflow-hidden group"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tutor.avatarColor} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
                      <span className="text-xl font-bold text-white">{tutor.initials}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{tutor.name}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm">
                          <span className="flex items-center gap-1 text-warning-600 font-semibold">
                            <Star className="w-4 h-4 fill-warning-400 text-warning-400" />
                            {tutor.rating}
                          </span>
                          <span className="text-gray-300">|</span>
                          <span className="text-gray-400">{tutor.sessions} sessions</span>
                          {tutor.online && (
                            <>
                              <span className="text-gray-300">|</span>
                              <span className="flex items-center gap-1 text-success-600 font-semibold">
                                <span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                                Online
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">{tutor.bio}</p>

                    {/* Subject tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {tutor.subjects.map((s) => (
                        <span key={s} className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${activeSubjectData.color}`}>
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      {tutor.responseTime}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0 flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-2">
                    <button
                      onClick={() => handleChat(tutor)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-primary-500 text-white font-bold text-sm shadow-md shadow-primary-200 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-200/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Start chat
                    </button>
                    <div className="hidden sm:flex items-center gap-1 text-xs text-success-600 font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      Best match
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
