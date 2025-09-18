import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';

interface CalendarDay {
  date: Date;
  otherMonth: boolean;
}

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

const formatDate = (date: Date | null) => (date ? date.toLocaleDateString() : '');

const Datepicker: React.FC = () => {
  const today = useMemo(() => new Date(), []);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const calendarDays: CalendarDay[] = useMemo(() => {
    const days: CalendarDay[] = [];
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

    // previous month leading days
    const prevMonthDays = daysInMonth(currentYear, currentMonth - 1);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
        otherMonth: true,
      });
    }

    // current month days
    const thisMonthDays = daysInMonth(currentYear, currentMonth);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({ date: new Date(currentYear, currentMonth, i), otherMonth: false });
    }

    // next month trailing days to fill to 6 weeks (6 * 7 = 42)
    const nextDays = 42 - days.length;
    for (let i = 1; i <= nextDays; i++) {
      days.push({ date: new Date(currentYear, currentMonth + 1, i), otherMonth: true });
    }

    return days;
  }, [currentMonth, currentYear]);

  const currentMonthName = useMemo(
    () => new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' }),
    [currentMonth, currentYear]
  );

  const toggleCalendar = useCallback(() => setShowCalendar(v => !v), []);

  const prevMonth = useCallback(() => {
    setCurrentMonth(m => {
      if (m === 0) {
        setCurrentYear(y => y - 1);
        return 11;
      }
      return m - 1;
    });
  }, []);

  const nextMonth = useCallback(() => {
    setCurrentMonth(m => {
      if (m === 11) {
        setCurrentYear(y => y + 1);
        return 0;
      }
      return m + 1;
    });
  }, []);

  const selectDate = useCallback((day: CalendarDay) => {
    if (day.otherMonth) return;
    setSelectedDate(day.date);
    setShowCalendar(false);
  }, []);

  const isSelected = (day: CalendarDay) =>
    selectedDate && day.date.toDateString() === selectedDate.toDateString();

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (showCalendar && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowCalendar(false);
      }
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [showCalendar]);

  return (
    <div ref={wrapperRef} className="relative inline-block text-sm">
      <input
        type="text"
        readOnly
        value={formatDate(selectedDate)}
        onClick={toggleCalendar}
        placeholder="Select date"
        aria-haspopup="dialog"
        aria-expanded={showCalendar}
        className="w-40 p-2 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
      {showCalendar && (
        <div
          role="dialog"
          aria-label="Calendar"
          className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-50 p-4 w-72"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous month"
            >
              &lt;
            </button>
            <span className="font-medium select-none">
              {currentMonthName} {currentYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next month"
            >
              &gt;
            </button>
          </div>
          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center mb-1">
            {weekdays.map(d => (
              <span key={d} className="font-semibold text-gray-700 text-xs">
                {d}
              </span>
            ))}
          </div>
          {/* Days */}
            <div className="grid grid-cols-7 text-center gap-y-1">
            {calendarDays.map(day => {
              const selected = isSelected(day);
              return (
                <button
                  key={day.date.toISOString()}
                  type="button"
                  disabled={day.otherMonth}
                  onClick={() => selectDate(day)}
                  className={[
                    'mx-auto h-8 w-8 flex items-center justify-center rounded-full transition text-xs',
                    day.otherMonth ? 'text-gray-400 cursor-default' : 'cursor-pointer hover:bg-blue-100',
                    selected ? 'bg-blue-500 text-white hover:bg-blue-600' : '',
                  ].join(' ')}
                >
                  {day.date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
