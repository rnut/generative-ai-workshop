import React from 'react';
import Datepicker from './Datepicker';

const App: React.FC = () => {
  const newCourses = [
    { id: 1, title: 'Geography', lessons: 12, color: 'from-amber-200 to-orange-300', icon: '🗺️' },
    { id: 2, title: 'JavaScript Course', lessons: 15, color: 'from-violet-300 to-purple-400', icon: '💻' },
    { id: 3, title: 'Photography Course', lessons: 8, color: 'from-sky-200 to-blue-300', icon: '📷' },
  ];
  const myCourses = [
    { id: 1, name: 'Web Design', lessons: 10, date: 'May 12', rate: 4.8, level: 'Elementary', icon: '🎨' },
    { id: 2, name: 'Development Basics', lessons: 14, date: 'May 14', rate: 4.4, level: 'Intermediate', icon: '🧱' },
    { id: 3, name: 'Data with Python', lessons: 16, date: 'May 17', rate: 4.6, level: 'Intermediate', icon: '🐍' },
    { id: 4, name: 'HTML Basics', lessons: 12, date: 'May 20', rate: 4.7, level: 'Elementary', icon: '📄' },
    { id: 5, name: 'JavaScript', lessons: 8, date: 'May 30', rate: 4.9, level: 'Elementary', icon: '⚡' },
  ];
  const progress = [
    { id: 1, title: 'Styling with CSS', tasks: 12, percent: 50, color: 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white' },
    { id: 2, title: 'Basics of programming', tasks: 10, percent: 65, color: 'bg-white' },
    { id: 3, title: 'Learn to Program in Java', tasks: 8, percent: 25, color: 'bg-white' },
  ];

  return (
    <div className="min-h-screen bg-[#e7e3f3] p-6 md:p-10 font-sans text-slate-700">
      <div className="mx-auto max-w-7xl bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col h-[calc(100vh-3rem)]">
        {/* Top bar */}
        <header className="flex items-center gap-6 px-8 py-5 border-b">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg">
            <span className="h-8 w-8 grid place-items-center rounded-lg bg-indigo-100">◆</span>
            Academy
          </div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex-1" />
          <div className="relative w-72 hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button className="h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center" aria-label="Notifications">🔔</button>
          <button className="h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center" aria-label="Settings">⚙️</button>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-56 border-r px-4 py-6 gap-6 bg-white overflow-y-auto">
            <nav className="flex flex-col gap-1 text-sm font-medium">
              {['Dashboard','Courses','Chats','Grades','Schedule','Settings'].map(item => (
                <a key={item} href="#" className={`flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-indigo-50 ${item==='Dashboard' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600'}`}>{item}</a>
              ))}
            </nav>
            <div className="mt-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 p-5 text-white">
              <div className="text-sm mb-2 font-semibold">Premium subscription</div>
              <p className="text-xs opacity-90 mb-4">Buy Premium and get access to new courses</p>
              <button className="w-full rounded-lg bg-white/20 backdrop-blur px-3 py-2 text-sm font-medium hover:bg-white/30 transition">More detailed</button>
            </div>
          </aside>

          {/* Main content scroll area */}
          <main className="flex-1 overflow-y-auto px-6 md:px-10 py-8 space-y-12">
            {/* New Courses */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold">New Courses</h2>
                <button className="text-xs font-medium text-indigo-600 hover:underline">View All</button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {newCourses.map(c => (
                  <div key={c.id} className={`group relative rounded-2xl p-5 bg-gradient-to-br ${c.color} shadow-sm hover:shadow-md transition`}> 
                    <div className="text-4xl mb-4 drop-shadow-sm">{c.icon}</div>
                    <h3 className="font-semibold text-slate-800/90">{c.title}</h3>
                    <p className="text-xs text-slate-700/70 mb-6">{c.lessons} lessons</p>
                    <button className="absolute bottom-4 right-4 h-9 w-9 rounded-xl bg-white/70 backdrop-blur text-indigo-600 font-bold grid place-items-center shadow hover:bg-white">›</button>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid lg:grid-cols-3 gap-10">
              {/* My Courses table */}
              <div className="lg:col-span-2 space-y-5">
                <h2 className="text-lg font-semibold">My Courses</h2>
                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                      <tr>
                        <th className="text-left px-4 py-3 font-medium">Course name</th>
                        <th className="text-left px-4 py-3 font-medium">Date</th>
                        <th className="text-left px-4 py-3 font-medium">Rate</th>
                        <th className="text-left px-4 py-3 font-medium">Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myCourses.map(course => (
                        <tr key={course.id} className="border-t hover:bg-slate-50">
                          <td className="px-4 py-3 flex items-center gap-3">
                            <span className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 text-base">{course.icon}</span>
                            <div>
                              <div className="font-medium text-slate-700">{course.name}</div>
                              <div className="text-[11px] text-slate-500">{course.lessons} lessons</div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-slate-600 text-xs">{course.date}</td>
                          <td className="px-4 py-3 text-slate-600 text-xs">{course.rate}</td>
                          <td className="px-4 py-3 text-slate-600 text-xs">{course.level}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right column widgets */}
              <div className="space-y-8">
                {/* Calendar */}
                <div>
                  <h2 className="text-lg font-semibold mb-4">Calendar</h2>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <Datepicker />
                  </div>
                </div>
                {/* Progress */}
                <div>
                  <h2 className="text-lg font-semibold mb-4">Homework progress</h2>
                  <div className="space-y-4">
                    {progress.map(item => (
                      <div key={item.id} className={`rounded-xl ${item.color} border border-slate-200/60 relative overflow-hidden p-4 flex items-center gap-4 shadow-sm`}> 
                        <div className="relative flex-1">
                          <div className="text-sm font-medium mb-1 {item.color.includes('bg-white') ? 'text-slate-700':''}">{item.title}</div>
                          <div className="text-[11px] text-slate-500">{item.tasks}</div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          <span>{item.percent}%</span>
                          <div className="h-2 w-20 rounded-full bg-slate-200 overflow-hidden">
                            <span className="block h-full bg-indigo-500" style={{ width: `${item.percent}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;