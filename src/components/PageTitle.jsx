import { Helmet } from "react-helmet-async";

const PageTitle = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} - GoldLync</title>
      </Helmet>
      {children}
    </>
  );
};

export default PageTitle;
