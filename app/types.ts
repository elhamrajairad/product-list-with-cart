import React from "react";

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface Deserts {
  id: number;
  image: Image;
  name: string;
  category: string;
  price: number;
}

export interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}
