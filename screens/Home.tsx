import React, { FC, ReactElement } from "react";
import { BottomTab } from "../navigations/BottomTab";

interface HomeProps {}

export const Home: FC<HomeProps> = (): ReactElement => {
  return <BottomTab />;
};
