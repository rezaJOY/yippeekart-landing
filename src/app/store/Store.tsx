import { WebsiteSchema } from "@/app/models/store";
import { createContext, useEffect, useState } from "react";

const initial_website: WebsiteSchema = {
  aboutUs: "",
  privacyAndPolicy: "",
  returnAndRefund: "",
  termsAndCondition: "",
  bannerDescription: "",
  bannerTitle: "",
  description: "",
  subTitle: "",
  title: "",
};

export const StoreContext = createContext(initial_website);
StoreContext.displayName = "Store";

type StoreProps = {
  children: React.ReactNode;
};
const Store = ({ children }: StoreProps) => {
  const [state, setState] = useState(initial_website);

  //? @___Mount Effects___@
  useEffect(() => {
    fetch("https://api.yippeekart.com.bd/api/v1/public/websites")
      .then((response) => response.json())
      .then((data) => {
        setState({ ...data.page });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};
export default Store;
