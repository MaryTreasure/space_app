import React from 'react';
import { PlanetsMenu } from '../PlanetsMenu';

interface IProps {
  children: JSX.Element;
}

export const LayoutsPlanets = ({ children }: IProps) => {
  return (
    <>
      <PlanetsMenu />
      <div>{children}</div>
    </>
  );
};
