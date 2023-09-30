import { useEffect } from "react";

import { Comments } from "../../Component/common";

import DOMPurify from "dompurify";
const MiddleSection = ({ blog }) => {
  useEffect(() => {
    // getblogs();
  }, []);
  return (
    <section className="max-container text-[27px]">
      {
        <div
          className="p-6 rounded-xl bg-white dark:bg-darkBgPrimary"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog?.description),
          }}
        />
      }
    </section>
  );
};

export default MiddleSection;
