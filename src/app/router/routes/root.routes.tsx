import { About, Home, PrivacyPolicy, ReturnRefund, TermsConditions } from "@/pages";
import { Layout } from "@/shared/ui";
import { createBrowserRouter } from "react-router-dom";

export default function rootRoutes() {
  //? @___Custom Store___@
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/privacy_policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/terms_conditions",
          element: <TermsConditions />,
        },
        {
          path: "/return_refund",
          element: <ReturnRefund />,
        },
      ],
    },
  ]);
}
