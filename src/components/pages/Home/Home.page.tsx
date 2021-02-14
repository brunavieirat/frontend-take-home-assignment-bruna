import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import HomeTemplate from './Home.template';

const HomePage: React.FunctionComponent = () => {
  const [totalMonths, setTotalMonths] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalDate, setFinalDate] = useState(moment());
  const [countMonth, setCountMonth] = useState(1);

  useEffect(() => {
    function handler({ key }: { key: any }) {
      if (key === 'ArrowLeft' && finalDate > moment()) {
        setFinalDate(moment(finalDate).subtract(1, 'months'));
        setCountMonth(countMonth - 1);

        // console.log('left', countMonth);
      }
      if (key === 'ArrowRight') {
        setCountMonth(countMonth + 1);
        setFinalDate(moment(finalDate).add(1, 'months'));
        // setTotalMonths(totalAmount / countMonth);
        // console.log('right', countMonth);
      }
    }
    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [finalDate, countMonth, totalAmount, totalMonths]);

  useEffect(() => {
    setTotalMonths(totalAmount / countMonth);
  }, [totalAmount, totalAmount, countMonth]);

  return (
    <HomeTemplate
      finalDate={finalDate}
      setTotalAmount={setTotalAmount}
      totalAmount={totalAmount}
      countMonth={countMonth}
      totalMonths={totalMonths}
    />
  );
};

export default HomePage;
