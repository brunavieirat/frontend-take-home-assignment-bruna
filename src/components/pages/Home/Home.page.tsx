import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import HomeTemplate from './Home.template';

const HomePage: React.FC = () => {
  const [totalMonths, setTotalMonths] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalDate, setFinalDate] = useState(moment());
  const [countMonth, setCountMonth] = useState(1);

  const subtractMonth = () => {
    setFinalDate(moment(finalDate).subtract(1, 'months'));
    setCountMonth(countMonth - 1);
  };

  const addMonth = () => {
    setCountMonth(countMonth + 1);
    setFinalDate(moment(finalDate).add(1, 'months'));
  };

  const changeMonth = (type: string) => {
    if (type === 'add') {
      addMonth();
    }
    if (type === 'subtract') {
      subtractMonth();
    }
  };

  useEffect(() => {
    const handler = ({ key }: { key: any }) => {
      if (key === 'ArrowLeft' && finalDate > moment()) {
        subtractMonth();
      }
      if (key === 'ArrowRight') {
        addMonth();
      }
    };
    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [finalDate, countMonth, totalMonths]);

  useEffect(() => {
    setTotalMonths(totalAmount / countMonth);
  }, [totalAmount, countMonth]);

  return (
    <HomeTemplate
      finalDate={finalDate}
      setTotalAmount={setTotalAmount}
      totalAmount={totalAmount}
      countMonth={countMonth}
      totalMonths={totalMonths}
      changeMonth={changeMonth}
    />
  );
};

export default HomePage;
