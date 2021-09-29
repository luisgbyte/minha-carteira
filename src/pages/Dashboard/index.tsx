import React, { useState, useMemo } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfMonths from "../../utils/months";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("invalid month value. Is accept 0 - 24.");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("invalid year value. Is accept integer number.");
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput
          options={months}
          defaultValue={String(monthSelected)}
          onChange={(e) => handleMonthSelected(e.target.value)}
        />
        <SelectInput
          options={years}
          defaultValue={String(yearSelected)}
          onChange={(e) => handleYearSelected(e.target.value)}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title="saldo"
          color="#4e41f0"
          amount={150.0}
          footerlabel="atualizado com base nas estradas e saídas"
          icon="dollar"
        />
        <WalletBox
          title="entradas"
          color="#f7931b"
          amount={5000.0}
          footerlabel="atualizado com base nas estradas e saídas"
          icon="arrowUp"
        />
        <WalletBox
          title="saídas"
          color="#e44c4e"
          amount={4850.0}
          footerlabel="atualizado com base nas estradas e saídas"
          icon="arrowDown"
        />

        <MessageBox
          title="Muito Bem!"
          description="Sua carteira está positiva!"
          footerText="Continue assim. Considere investir o seu saldo."
          icon={sadImg}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
