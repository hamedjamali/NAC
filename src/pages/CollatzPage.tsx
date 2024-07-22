import React, { useState } from 'react';
import styled from '@emotion/styled';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 40px;
`;

const ResultBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Result = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
  text-align: center;
  font-size: 18px;
`;

const CollatzPage: React.FC = () => {
  const [number, setNumber] = useState<number | string>('');
  const [loops, setLoops] = useState<number | null>(null);

  const getCollatzLoops = (num: number): number => {
    let count = 0;
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = 3 * num + 1;
      }
      count++;
    }
    return count;
  };

  const handleSubmit = () => {
    if (typeof number === 'number') {
      const res = getCollatzLoops(number);
      setLoops(res);
    }
  };

  return (
    <PageWrapper>
      <Title>Collatz Conjecture</Title>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="Enter a number"
      />
      <Button onClick={handleSubmit}>Generate Collatz</Button>
      {loops !== null && (
        <ResultBox>
          <Result>{loops}</Result>
        </ResultBox>
      )}
    </PageWrapper>
  );
};

export default CollatzPage;
