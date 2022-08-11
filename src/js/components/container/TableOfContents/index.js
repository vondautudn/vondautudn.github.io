import React from "react";
import PageHeader from "../../presentational/PageHeader";
import PageContent from "../../presentational/PageContent";
import PageContentItem from "../../presentational/PageContentItem";
import PageFooter from "../../presentational/PageFooter";
import Footer from "../../presentational/Footer";
import { useSearchParams } from "react-router-dom";

import { contentsForApex } from "../../content/contentForApex";

const TableOfContents = ({search}) => (
  <React.Fragment>
      <div>{search}</div>
    <PageHeader />
    <PageContent title="Nghiệp vụ">
      {contentsForApex.map((content) => (
        <PageContentItem
          key={content.id}
          title={content.title}
          icon={content.icon}
          href={`docs-page/${content.id}#${content.id}`}
        >
          {content.description}
        </PageContentItem>
      ))}
    </PageContent>
    {/* <PageFooter /> */}
    {/* <Footer /> */}
  </React.Fragment>
);

export default TableOfContents;
