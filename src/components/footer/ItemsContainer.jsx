import React from "react";
import FooterItems from "./FooterItems";
import { MONEY, COMPANY, HELP } from "./footerData";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-10 lg:grid-cols-4">
      <FooterItems title="MAKE MONEY WITH US" link={MONEY} />
      <FooterItems title="HELP" link={HELP} />
      <FooterItems title="COMPANY" link={COMPANY} />
    </div>
  );
};

export default ItemsContainer;
