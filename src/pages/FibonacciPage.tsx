import React, { FC, useState } from 'react';
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

const FibonacciPage: FC = () => {
  const [number, setNumber] = useState<number | string>('');
  const [result, setResult] = useState<[number, number] | null>(null);

  const getFibonacci = (num: number): [number, number] => {
    const fib = (n: number): number => {
      if (n <= 1) return n;
      return fib(n - 1) + fib(n - 2);
    };

    const fibNum = fib(num);
    return [fib(num - 1), fibNum];
  };

  const handleSubmit = () => {
    if (typeof number === 'number') {
      const res = getFibonacci(number);
      setResult(res);
    }
  };

  return (
    <PageWrapper>
      <Title>Fibonacci</Title>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="Enter a number"
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {result && (
        <ResultBox>
          <Result>{result[0]}</Result>
          <Result>{result[1]}</Result>
        </ResultBox>
      )}
    </PageWrapper>
  );
};

export default FibonacciPage;
